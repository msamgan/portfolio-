"use client"

import Link from "next/link"

export default function Pagination({ paginationData, query }) {
    const buttonClass =
        "inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md bg-gray-50 border-gray-100 dark:border-gray-800 dark:bg-gray-800 text-gray-600 dark:text-white"
    const activeButtonClass =
        "inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-gray-50 text-red-600 border-red-600 dark:border-red-600 dark:bg-gray-800 dark:text-red-600"

    const pageLink = (page, query) => {
        return "/posts?page=" + page + (query ? "&query=" + query : "")
    }

    return (
        <div className="flex justify-center space-x-1 text-gray-800">
            {paginationData.prev_page_url && (
                <Link
                    title="previous"
                    type="button"
                    href={paginationData.prev_page_url}
                    className={buttonClass}
                >
                    <svg
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4"
                    >
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </Link>
            )}

            {Array.from({ length: paginationData.last_page }, (_, i) => {
                return (
                    <Link
                        href={pageLink(i + 1, query)}
                        key={i}
                        type="button"
                        className={paginationData.current_page === i + 1 ? activeButtonClass : buttonClass}
                        title={`Page ${i + 1}`}
                    >
                        {i + 1}
                    </Link>
                )
            })}

            {paginationData.next_page_url && (
                <Link title="next" type="button" href={paginationData.next_page_url} className={buttonClass}>
                    <svg
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4"
                    >
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </Link>
            )}
        </div>
    )
}
