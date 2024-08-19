import Link from "next/link"
import SearchForm from "@/app/components/SearchForm"

export default function PostList({ postList, query, nextPageLink = null, prevPageLink = null }) {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
            <SearchForm query={query} count={postList.length} />
            {postList.map((post, index) => {
                return (
                    <div key={index} className="text-gray-800">
                        <div className="flex flex-row gap-4 justify-between">
                            <Link
                                key={index}
                                rel="noopener noreferrer"
                                href={"/" + post.slug}
                                className="block w-5/6"
                            >
                                <h3 className="w-full font-semibold text-lg text-gray-700">{post.title}</h3>
                            </Link>
                            <div className="text-sm font-light text-gray-600">
                                {new Date(post.published_at).toDateString()}
                            </div>
                        </div>
                    </div>
                )
            })}

            {postList.length === 0 && (
                <div className="text-start text-gray-800">
                    <h1>No posts found</h1>
                </div>
            )}

            <div className="flex justify-start gap-4">
                {prevPageLink && prevPageLink()}
                {nextPageLink && nextPageLink()}
            </div>
        </div>
    )
}
