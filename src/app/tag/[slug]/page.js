"use client"

import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"

import PostList from "../../components/PostList"
import Loading from "../../loading"
import { titleGenerator } from "@/methods"

export default function Posts(props) {
    const slug = props.params.slug
    const [postList, setPostList] = useState([])
    const [filteredPostList, setFilteredPostList] = useState([])
    const [loading, setLoading] = useState(true)

    const getPostList = useCallback(() => {
        setLoading(true)
        axios
            .get("https://erp.msamgan.com/api/post/tag/" + slug)
            .then((response) => {
                setPostList(response.data)
                setFilteredPostList(response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.error(error)
                setLoading(false)
            })
    }, [slug])

    useEffect(() => {
        getPostList()
    }, [getPostList])

    const description = "Explore msamgan's technical blog featuring insightful programming posts, in-depth code tutorials, and the latest updates in the tech world. based on a tag"
    const tags = "msamgan, blog, technical blog, programming, code, posts"

    const meta = {
        title: titleGenerator(`Posts | ${slug}`),
        description: description,
        keywords: tags,
        ogType: "article",
        ogTitle: titleGenerator(`Posts | ${slug}`),
        ogUrl: "https://msamgan.com/tag/" + slug,
        ogDescription: description,
        articleAuthor: "msamgan",
        articleSection: `Posts | ${slug}`,
        articleTag: tags,
        twitterCard: "summary",
        twitterSite: "@msamgan",
        twitterTitle: titleGenerator(`Posts | ${slug}`),
        twitterDescription: description,
        twitterCreator: "@msamgan"
    }

    return (
        <div className="">

            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />
            <meta property="og:type" content={meta.ogType} />
            <meta property="og:title" content={meta.ogTitle} />
            <meta property="og:url" content={meta.ogUrl} />
            <meta property="og:description" content={meta.ogDescription} />
            <meta name="article:author" content={meta.articleAuthor} />
            <meta name="article:section" content={meta.articleSection} />
            <meta name="article:tag" content={meta.articleTag} />
            <meta name="twitter:card" content={meta.twitterCard} />
            <meta name="twitter:site" content={meta.twitterSite} />
            <meta name="twitter:title" content={meta.twitterTitle} />
            <meta name="twitter:description" content={meta.twitterDescription} />
            <meta name="twitter:creator" content={meta.twitterCreator} />

            {loading ? (
                <Loading />
            ) : (
                <>
                    <h1 className={"col-span-2 text-3xl font-bold text-gray-900 mb-4"}>Posts with tag: {slug}</h1>
                    <div className="flex">
                        <span
                            className="inline-block px-4 py-2 mb-2 mr-2 text-sm font-light text-gray-600 bg-gray-100 rounded-full">
                            <Link href={"/posts"} className={"hover:text-orange-600"}>
                                All Posts
                            </Link>
                        </span>
                    </div>
                    <PostList
                        postList={postList}
                        filteredPostList={filteredPostList}
                        setFilteredPostList={setFilteredPostList}
                    />
                </>
            )}
        </div>
    )
}
