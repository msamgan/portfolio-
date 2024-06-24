import Link from "next/link"
import SearchForm from "@/app/components/SearchForm"

export default function PostList({ postList, query, nextPageLink = null, prevPageLink = null }) {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
            <SearchForm query={query} count={postList.length} />
            {postList.map((post, index) => {
                return (
                    <div key={index} className="text-gray-800 max-w-3xl">
                        <div className="flex flex-col gap-4">
                            <div className="gap-4 space-y-1">
                                <Link
                                    key={index}
                                    rel="noopener noreferrer"
                                    href={"/" + post.slug}
                                    className="block"
                                >
                                    <div className="flex flex-row justify-between items-start gap-1">
                                        <div>
                                            <h3 className="w-full text-lg text-gray-700 mt-1">{post.title}</h3>
                                        </div>
                                        <p className="text-sm font-light text-gray-600 ml-8">
                                            {new Date(post.published_at).toDateString()}
                                        </p>
                                    </div>
                                </Link>
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
