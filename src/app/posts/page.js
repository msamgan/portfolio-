"use client"

import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import Loading from "../loading"
import PostList from "../components/PostList"

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

    return (
        <div className="">
            <title>Published Posts - msamgan.com</title>
            <meta
                name="description"
                content="Explore msamgan's technical blog featuring insightful programming posts, in-depth code tutorials, and the latest updates in the tech world. Join our community and elevate your coding skills!"
            />
            <meta name="keywords" content="msamgan, blog, technical blog, programming, code, posts" />

            <meta property="og:type" content="article" />
            <meta property="og:title" content="Published Posts - msamgan.com" />
            <meta property="og:url" content="https://msamgan.com/posts" />
            <meta property="og:description"
                  content="Explore msamgan's technical blog featuring insightful programming posts, in-depth code tutorials, and the latest updates in the tech world. Join our community and elevate your coding skills!" />
            <meta property="article:author" content="msamgan" />
            <meta property="article:section" content="Published Posts" />
            <meta property="article:tag" content="msamgan, blog, technical blog, programming, code, posts" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@msamgan" />
            <meta name="twitter:title" content="Published Posts - msamgan.com" />
            <meta name="twitter:description"
                  content="Explore msamgan's technical blog featuring insightful programming posts, in-depth code tutorials, and the latest updates in the tech world. Join our community and elevate your coding skills!" />
            <meta name="twitter:creator" content="@msamgan" />

            {loading ? (
                <Loading />
            ) : (
                <PostList
                    postList={postList}
                    filteredPostList={filteredPostList}
                    setFilteredPostList={setFilteredPostList}
                />
            )}
        </div>
    )
}
