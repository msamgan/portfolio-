import Link from "next/link"
import SearchForm from "@/app/components/SearchForm"
import Pagination from "@/app/components/Pagination"

export default function PostList({ postList, query, paginationData = null }) {
    return (
        <>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-1">
                <SearchForm query={query} count={postList.length} paginationData={paginationData} />
                {postList.map((post, index) => {
                    return (
                        <div key={index} className="text-gray-800">
                            <div className="flex flex-row gap-4 justify-between">
                                <h3 className="w-5/6 font-light text-lg text-gray-700 flex-row hover:text-red-600">
                                    <Link key={index} rel="noopener noreferrer" href={"/" + post.slug}>
                                        {post.title}
                                    </Link>
                                    <small className="text-sm text-gray-200 space-x-2 ml-2">
                                        {post.tags.map((tag, index) => {
                                            return (
                                                <Link href={"/tag/" + tag.slug} key={index}>
                                                    <span key={index} className="text-sm text-gray-500">
                                                        #{tag.name}
                                                    </span>
                                                </Link>
                                            )
                                        })}
                                    </small>
                                </h3>
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
            </div>

            {paginationData && (
                <div className={"mt-12 float-start"}>
                    <Pagination paginationData={paginationData} query={query} />
                </div>
            )}
        </>
    )
}
