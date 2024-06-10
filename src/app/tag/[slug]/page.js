"use client"

import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
import Image from "next/image"

import PostList from "../../components/PostList"
import Loading from "../../loading"

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

    return (
        <div className="">
            <title>Posts | {slug} - msamgan.com</title>
            <meta
                name="description"
                content="Explore msamgan's technical blog featuring insightful programming posts, in-depth code tutorials, and the latest updates in the tech world. based on a tag"
            />
            <meta name="keywords" content="msamgan, blog, technical blog, programming, code, posts" />

            {loading ? (
                <Loading />
            ) : (
                <>
                    <div className="flex">
                        <span className="inline-block px-4 py-2 mb-2 mr-2 text-sm font-light text-gray-600 bg-gray-100 rounded-full">
                            <Link href={"/posts"} className={"hover:text-orange-600"}>
                                All Posts
                            </Link>
                        </span>
                        <span className="inline-block px-4 py-2 mb-2 mr-2 text-sm font-light text-gray-600 bg-gray-100 rounded-full">
                            <Link href={"/tag/" + slug} className={"hover:text-orange-600"}>
                                showing Post with tag: {slug}
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
