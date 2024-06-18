"use client"

import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import Loading from "../loading"
import PostList from "../components/PostList"
import { titleGenerator } from "@/methods"

export default function Posts() {
    const [postList, setPostList] = useState([])
    const [filteredPostList, setFilteredPostList] = useState([])
    const [loading, setLoading] = useState(true)

    const getPostList = useCallback(() => {
        setLoading(true)
        axios
            .get("https://erp.msamgan.com/api/post/list")
            .then((response) => {
                setPostList(response.data)
                setFilteredPostList(response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.error(error)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        getPostList()
    }, [getPostList])

    const description = "Explore msamgan's technical blog featuring insightful programming posts, in-depth code tutorials, and the latest updates in the tech world. Join our community and elevate your coding skills!"
    const tags = "msamgan, blog, technical blog, programming, code, posts"

    const meta = {
        title: titleGenerator("Published Posts"),
        description: description,
        keywords: tags,
        ogType: "article",
        ogTitle: titleGenerator("Published Posts"),
        ogUrl: "https://msamgan.com/posts",
        ogDescription: description,
        articleAuthor: "msamgan",
        articleSection: "Published Posts",
        articleTag: tags,
        twitterCard: "summary",
        twitterSite: "@msamgan",
        twitterTitle: titleGenerator("Published Posts"),
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
            <meta property="article:author" content={meta.articleAuthor} />
            <meta property="article:section" content={meta.articleSection} />
            <meta property="article:tag" content={meta.articleTag} />
            <meta name="twitter:card" content={meta.twitterCard} />
            <meta name="twitter:site" content={meta.twitterSite} />
            <meta name="twitter:title" content={meta.twitterTitle} />
            <meta name="twitter:description" content={meta.twitterDescription} />
            <meta name="twitter:creator" content={meta.twitterCreator} />


            {loading ? (
                <Loading />
            ) : (
                <>
                    <h1 className={"col-span-2 text-3xl font-bold text-gray-900"}>Published Posts</h1>
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
