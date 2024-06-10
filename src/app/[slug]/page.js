"use client"

import { useCallback, useState, useEffect } from "react"
import axios from "axios"
import "./post.css"
import Image from "next/image"
import Loading from "../loading"
import Giscus from "@giscus/react"

export default function PostDetail(props) {
    const slug = props.params.slug

    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true)

    const getPost = useCallback(() => {
        setLoading(true)
        axios
            .get(`https://erp.msamgan.com/api/post/${slug}`)
            .then((response) => {
                console.log(response.data)
                setPost(response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [slug])

    useEffect(() => {
        if (slug) {
            getPost()
        }
    }, [])

    return (
        <div className="max-w-4xl mx-auto space-y-12 post">
            {loading ? (
                <Loading />
            ) : (
                <>
                    <title>{post.title + " - msamgan.com"}</title>
                    <meta name="description" content={post.excerpt} />
                    <meta name="keywords" content={post.tags.map((tag) => tag)} />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content={post.title} />
                    <meta property="og:url" content={"https://msamgan.com/" + post.slug} />
                    <meta property="og:description" content={post.excerpt} />
                    <meta property="article:author" content="msamgan" />
                    <meta property="article:published_time" content={post.published_at} />
                    <meta property="article:modified_time" content={post.updated_at} />
                    <meta property="article:section" content={post.title} />
                    <meta property="article:tag" content={post.tags.map((tag) => tag)} />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@msamgan" />
                    <meta name="twitter:title" content={post.title} />
                    <meta name="twitter:description" content={post.excerpt} />
                    <meta name="twitter:creator" content="@msamgan" />

                    {post.featured_image && (
                        <>
                            <meta name="twitter:image" content={post.featured_image} />
                            <meta property="og:image" content={post.featured_image} />
                        </>
                    )}

                    <article className="space-y-8 text-gray-900">
                        <div className="space-y-6">
                            {post.featured_image && (
                                <Image
                                    src={post.featured_image}
                                    alt={post.title}
                                    width={1200}
                                    height={100}
                                    style={{
                                        maxHeight: "300px"
                                    }}
                                    className="block object-cover object-center rounded-md"
                                />
                            )}
                            <h1 className="text-3xl font-light leading-7 md:tracking-tight md:text-3xl">
                                {post.title}
                            </h1>
                            <div className="flex flex-col items-start justify-between w-full text-gray-600 md:flex-row md:items-center">
                                <div className="flex items-center md:space-x-2">
                                    <img
                                        src="https://secure.gravatar.com/avatar/c2acbea3e046c1b8cf7358d8526eda63?s=80"
                                        alt=""
                                        className="w-4 h-4 bg-gray-500 border border-gray-300 rounded-full"
                                    />
                                    <span className="text-sm">
                                        msamgan • {new Date(post.published_at).toDateString()}
                                    </span>
                                </div>
                                {/* <p className="flex-shrink-0 mt-3 text-sm md:mt-0">4 min read • 1,570 views</p> */}
                            </div>
                        </div>
                        <div className="font-light leading-7 text-gray-800">
                            {post.content && (
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: post.content
                                    }}
                                ></div>
                            )}
                        </div>
                    </article>
                    <div>
                        {post.tags && (
                            <div className="flex flex-wrap gap-2 py-3 font-light border-t border-gray-600 border-dashed">
                                {post.tags.map((tag, index) => {
                                    return (
                                        <a
                                            key={index}
                                            rel="noopener noreferrer"
                                            href="#"
                                            className="px-3 py-1 text-gray-500 rounded-sm hover:underline"
                                        >
                                            {tag}
                                        </a>
                                    )
                                })}
                            </div>
                        )}
                        <div className="space-y-2">
                            <h4 className="text-lg font-light">Related posts</h4>
                            <ul className="ml-4 space-y-1 font-light list-disc">
                                {post.related_posts &&
                                    post.related_posts.map((related, index) => {
                                        return (
                                            <li key={index}>
                                                <a
                                                    rel="noopener noreferrer"
                                                    href={"/" + related.slug}
                                                    className="hover:underline"
                                                >
                                                    {related.title}
                                                </a>
                                            </li>
                                        )
                                    })}
                            </ul>
                        </div>

                        <div className="mt-6 space-y-2">
                            <Giscus
                                id="comments"
                                src="https://giscus.app/client.js"
                                repo="msamgan/blog-comments"
                                repoId="R_kgDOIT1xSg"
                                category="General"
                                categoryId="DIC_kwDOIT1xSs4CSMzg"
                                mapping="title"
                                strict="0"
                                reactionsEnabled="1"
                                emitMetadata="0"
                                inputPosition="bottom"
                                theme="light"
                                lang="en"
                                crossorigin="anonymous"
                                loading={"lazy"}
                                async
                            ></Giscus>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
