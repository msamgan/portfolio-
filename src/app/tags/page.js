import Link from "next/link"
import { titleGenerator } from "@/methods"
import { baseUrl, tagList } from "@/constants"
import PageHeader from "@/app/components/PageHeader"

const getTagList = async () => {
    const res = await fetch(baseUrl + tagList)
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json()
}

export const metadata = {
    title: titleGenerator("Tags"),
    description: "Tags list for msamgan.com blog",
    keywords: "msamgan, blog, technical blog, programming, code, tags",
    openGraph: {
        type: "article",
        title: titleGenerator("Tags"),
        url: "https://msamgan.com/tags",
        description:
            "Discover the latest in tech and code at msamgan.com. Stay updated with our curated articles, expert tips, and trendsetting guides designed to inspire and elevate your everyday life.",
        images: "https://msamgan.dev/storage/images/MNn9limQxw66kpBfxjnXQ4jvdndLXom3bh7oeMvc.png"
    }
}

export default async function TagsPage() {
    const tagList = await getTagList()

    return (
        <div>
            <div className="flex flex-wrap">
                <div className="w-full mb-4">
                    <PageHeader title="Tags" />
                    {tagList.map((tag) => (
                        <span
                            key={tag.id}
                            className="inline-block mb-2 mr-2 text-sm font-light text-gray-600 bg-white rounded-full"
                            style={{
                                fontSize: `${tag.posts_count * 1.2 + 18}px`,
                                padding: `${tag.posts_count * 0.5 + 10}px`
                            }}
                        >
                            <Link href={"/tag/" + tag.slug} className={"hover:text-red-600"}>
                                {tag.name} ({tag.posts_count})
                            </Link>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
