import PostList from "../components/PostList"
import { titleGenerator } from "@/methods"
import { baseUrl, postListPaginated } from "@/constants"
import Link from "next/link"
import PageHeader from "@/app/components/PageHeader"

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
        description: description,
        images: "https://msamgan.dev/storage/images/MNn9limQxw66kpBfxjnXQ4jvdndLXom3bh7oeMvc.png"
    }
}

async function getPostList({ query, page }) {
    "use server"

    const res = await fetch(baseUrl + postListPaginated + "?page=" + page + "&query=" + query, {
        cache: "no-cache"
    })

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json()
}

export default async function Posts(request) {
    const query = request.searchParams.query || ""
    const page = request.searchParams.page || 1

    const postList = await getPostList({ query, page: page })

    const nextPageLink = () => {
        if (postList.next_page_url) {
            return (
                <Link
                    className={"bg-red-600 text-white px-2 py-1 rounded-lg mt-4"}
                    href={"/posts?page=" + (postList.current_page + 1) + "&query=" + query}
                >
                    Next Page
                </Link>
            )
        }
    }

    const prevPageLink = () => {
        if (postList.prev_page_url) {
            return (
                <Link
                    className={"bg-red-600 text-white px-2 py-1 rounded-lg mt-4"}
                    href={"/posts?page=" + (postList.current_page - 1) + "&query=" + query}
                >
                    Previous Page
                </Link>
            )
        }
    }

    return (
        <>
            <PageHeader title={"Posts"} />
            <PostList
                postList={postList.data}
                query={query}
                nextPageLink={nextPageLink}
                prevPageLink={prevPageLink}
            />
        </>
    )
}
