"use client"

import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
import Image from "next/image"
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
            <title>Posts - msamgan.com</title>
            <meta
                name="description"
                content="Explore msamgan's technical blog featuring insightful programming posts, in-depth code tutorials, and the latest updates in the tech world. Join our community and elevate your coding skills!"
            />
            <meta name="keywords" content="msamgan, blog, technical blog, programming, code, posts" />

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
