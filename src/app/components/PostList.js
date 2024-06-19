import Link from "next/link"
import Image from "next/image"
import SearchForm from "@/app/components/SearchForm"

export default function PostList({ postList, query }) {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
            <SearchForm query={query} count={postList.length} />

            {postList.map((post, index) => {
                return (
                    <div
                        key={index}
                        className="p-4 text-gray-800 rounded-md shadow-xl bg-gray-50 hover:shadow-2xl max-w-3xl"
                    >
                        <div className="flex flex-col gap-4">
                            <div className="gap-4 space-y-3">
                                <Link
                                    key={index}
                                    rel="noopener noreferrer"
                                    href={"/" + post.slug}
                                    className="block"
                                >
                                    <div className="flex flex-row justify-between items-center gap-1">
                                        {post.featured_image && (
                                            <Image
                                                src={post.featured_image}
                                                alt={post.title}
                                                width={1}
                                                height={1}
                                                style={{
                                                    height: "20px",
                                                    width: "20px"
                                                }}
                                                className="block object-cover object-center rounded-full"
                                            />
                                        )}
                                        <h3 className="w-3/4 text-lg text-gray-700">{post.title}</h3>
                                        <p className="text-sm font-light text-gray-600">
                                            {new Date(post.published_at).toDateString()}
                                        </p>
                                    </div>
                                </Link>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag, index) => {
                                        return (
                                            <Link key={index} href={"/tag/" + tag.slug}>
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 text-sm font-light text-gray-700 bg-gray-100 rounded-md"
                                                >
                                                    {tag.name}
                                                </span>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
