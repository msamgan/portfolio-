"use client"

import axios from "axios"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import Loading from "../loading"

export default function TagsPage() {
    const [tagList, setTagList] = useState([])
    const [loading, setLoading] = useState(true)

    const getTagList = useCallback(() => {
        setLoading(true)
        axios
            .get("https://erp.msamgan.com/api/tag/list")
            .then((response) => {
                setTagList(response.data)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error loading tags", error)
            })
    }, [])

    useEffect(() => {
        getTagList()
    }, [getTagList])

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div className="flex flex-wrap">
                    {tagList.map((tag) => (
                        <span
                            key={tag.id}
                            className="inline-block px-4 py-2 mb-2 mr-2 text-sm font-light text-gray-600 bg-gray-100 rounded-full"
                            style={{ fontSize: `${tag.posts_count * 2 + 12}px` }}
                        >
                            <Link href={"/tag/" + tag.slug} className={"hover:text-orange-600"}>
                                {tag.name} ({tag.posts_count})
                            </Link>
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}
