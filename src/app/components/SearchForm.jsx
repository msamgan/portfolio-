"use client"

import { useState } from "react"

export default function SearchForm({ query, count, paginationData = null }) {
    const [search, setSearch] = useState(query)
    return (
        <form>
            <fieldset className="w-full space-y-2 text-gray-800">
                <label htmlFor="Search" className="hidden">
                    Search
                </label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-gray-800">
                                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                            </svg>
                        </button>
                    </span>
                    <input
                        type="search"
                        name="query"
                        placeholder="Search..."
                        className="w-5/6 py-2 pl-10 text-sm text-gray-800 bg-gray-100 rounded-md focus:outline-none focus:bg-gray-50 focus:border-cyan-600"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        type="submit"
                        title="search"
                        className="absolute p-2 rounded-md inset-y-0 right-0 mr-6 bg-gray-100 flex items-center pr-2"
                    >
                        search
                    </button>
                </div>
                {paginationData ? (
                    <small className="block text-xs font-light text-gray-600 dark:text-white">
                        showing {count} results on page {paginationData.current_page} of{" "}
                        {paginationData.last_page} from a total of {paginationData.total} results
                    </small>
                ) : (
                    <small className="block text-xs font-light text-gray-600 dark:text-white">showing {count} results</small>
                )}
            </fieldset>
        </form>
    )
}
