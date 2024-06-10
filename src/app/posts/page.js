"use client"

import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
import Image from "next/image"
import Loading from "../loading"

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
                <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                    <div>
                        <fieldset className="w-full space-y-1 text-gray-800">
                            <label htmlFor="Search" className="hidden">
                                Search
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button
                                        type="button"
                                        title="search"
                                        className="p-1 focus:outline-none focus:ring"
                                    >
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 512 512"
                                            className="w-4 h-4 text-gray-800"
                                        >
                                            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                        </svg>
                                    </button>
                                </span>
                                <input
                                    type="search"
                                    name="Search"
                                    placeholder="Search..."
                                    onChange={(e) => {
                                        const search = e.target.value
                                        const filtered = postList.filter((post) => {
                                            return post.title.toLowerCase().includes(search.toLowerCase())
                                        })

                                        setFilteredPostList(filtered)
                                    }}
                                    className="w-32 py-2 pl-10 text-sm text-gray-800 bg-gray-100 rounded-md sm:w-auto focus:outline-none focus:bg-gray-50 focus:border-cyan-600"
                                />
                            </div>
                        </fieldset>
                    </div>

                    {filteredPostList.map((post, index) => {
                        return (
                            <Link key={index} rel="noopener noreferrer" href={"/" + post.slug} className="block">
                                <div
                                    key={index}
                                    className="p-4 text-gray-800 rounded-md shadow-xl bg-gray-50 hover:shadow-2xl"
                                >
                                    <div className="flex flex-col gap-4">
                                        {/* <div className="space-y-3">
                                            {post.featured_image && (
                                                <Image
                                                    src={post.featured_image}
                                                    alt={post.title}
                                                    width={1200}
                                                    height={100}
                                                    style={{
                                                        maxHeight: "150px"
                                                    }}
                                                    className="block object-cover object-center rounded-md"
                                                />
                                            )}
                                        </div> */}
                                        <div className="gap-4 space-y-2">
                                            <div className="flex flex-row justify-between gap-10">
                                                <h3 className="w-3/4 text-lg font-light text-gray-900 ">
                                                    {post.title}
                                                </h3>
                                                <p className="mt-2 text-sm font-light text-gray-600">
                                                    {new Date(post.published_at).toDateString()}
                                                </p>
                                            </div>
                                            {/* <p className="font-light leading-7 text-gray-700">
                                                {post.excerpt.slice(0, 160)}
                                            </p> */}
                                            <div className="flex flex-wrap gap-2">
                                                {post.tags.map((tag, index) => {
                                                    return (
                                                        <span
                                                            key={index}
                                                            className="px-2 py-1 text-sm font-light text-gray-700 bg-gray-200 rounded-md"
                                                        >
                                                            {tag}
                                                        </span>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
