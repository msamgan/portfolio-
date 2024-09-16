"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export const NavLink = ({ href, title, path, data }) => {
    let pathFragment = path.split("/").filter((fragment) => fragment !== "")
    let hrefWithoutSlash = href.slice(1)

    let showActive = pathFragment.includes(hrefWithoutSlash)

    // Check if the current page is the home page
    let isHome = href === path

    let pagesLinks = data.navigation.pages.map((page) => page.name.toLowerCase())
    let isPost = pathFragment.length === 1 && !pagesLinks.includes(pathFragment[0])
    let isTag = pathFragment.length === 2 && pathFragment[0] === "tag"

    // if the current page is a post or tag posts page, make the post-link active
    if ((isPost || isTag) && hrefWithoutSlash === "posts") {
        showActive = true
    }

    if (showActive || isHome) {
        return (
            <div className="flex items-center space-x-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                >
                    <path
                        fillRule="evenodd"
                        d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                    />
                </svg>
                <Link href={href} className="block text-red-600">
                    {title}
                </Link>
            </div>
        )
    }

    return (
        <Link href={href} className="block hover:text-red-600">
            {title}
        </Link>
    )
}

export const ExternalLink = ({ href, title }) => {
    return (
        <a href={href} className="block hover:text-red-600" target="_blank" rel="noreferrer noopener">
            {title}
        </a>
    )
}

export const InternalLink = ({ href, title }) => {
    return (
        <Link href={href} className="block hover:text-red-600">
            {title}
        </Link>
    )
}

export default function Navigation({ data }) {
    const path = usePathname()

    return (
        <>
            <div className="mb-12">
                {/*<h2 className="text-lg text-gray-500">Navigation</h2>
                <hr />*/}
                <div className={"space-y-4 mt-4"}>
                    {data.navigation.pages.map((page, index) => {
                        return page.external ? (
                            <ExternalLink href={page.link} title={page.name} key={index} />
                        ) : (
                            <NavLink href={page.link} title={page.name} path={path} data={data} key={index} />
                        )
                    })}
                </div>
            </div>

            <div className="">
                {/*<h2 className="text-lg text-gray-500">Socials</h2>*/}
                <hr />
                <div className={"space-y-4 mt-4"}>
                    {data.navigation.social.map((social, index) => {
                        return <ExternalLink href={social.link} title={social.name} key={index} />
                    })}
                </div>
            </div>

            {/*<div className="space-y-4">
                <h2 className="text-lg text-gray-500">Top Tags</h2>
                {data.navigation.tags.map((tag, index) => {
                    return <InternalLink href={tag.link} title={tag.name} key={index} />
                })}
            </div>*/}
        </>
    )
}
