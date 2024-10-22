"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import ToggleThemeButton from "@/app/components/ToggleThemeButton"

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
                    className="size-6 dark:text-white"
                >
                    <path
                        fillRule="evenodd"
                        d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                    />
                </svg>
                <Link href={href} className="block text-red-600 dark:font-bold">
                    {title}
                </Link>
            </div>
        )
    }

    return (
        <Link href={href} className="block hover:text-red-600 dark:hover:text-red-600 dark:text-white">
            {title}
        </Link>
    )
}

export const ExternalLink = ({ href, title }) => {
    return (
        <a
            href={href}
            className="block hover:text-red-600 dark:hover:text-red-600 dark:text-white"
            target="_blank"
            rel="noreferrer noopener"
        >
            {title}
        </a>
    )
}

export default function Navigation({ data }) {
    const path = usePathname()

    return (
        <div className={"space-y-16"}>
            <div className="">
                <div className={"space-y-4"}>
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
                <div className={"space-y-4"}>
                    {data.navigation.social.map((social, index) => {
                        return <ExternalLink href={social.link} title={social.name} key={index} />
                    })}
                </div>
            </div>

            <div className={""}>
                <div className={"mt-8 ml-4"}>
                    <ToggleThemeButton />
                </div>
            </div>
        </div>
    )
}
