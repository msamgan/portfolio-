import axios from "axios"
import PostList from "../components/PostList"
import { titleGenerator } from "@/methods"

const description =
    "Explore msamgan's technical blog featuring insightful programming posts, in-depth code tutorials, and the latest updates in the tech world. Join our community and elevate your coding skills!"
const tags = "msamgan, blog, technical blog, programming, code, posts"

export const metadata = {
    title: titleGenerator("Published Posts"),
    description: description,
    keywords: tags,
    openGraph: {
        type: "article",
        title: titleGenerator("Published Posts"),
        url: "https://msamgan.com/posts",
        description: description
    }
}

async function getPostList() {
    const res = await fetch('https://erp.msamgan.com/api/post/list')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Posts() {

    const postList = await getPostList()

    return (
        <div className="">
            <h1 className={"col-span-2 text-3xl font-bold text-gray-900"}>Published Posts</h1>
            <PostList postList={postList} />
        </div>
    )
}


