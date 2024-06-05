"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export const NavLink = ({ href, title, path }) => {
    let pathFragment = path.split("/").filter((fragment) => fragment !== "")
    let hrefWithoutSlash = href.slice(1)

    if (pathFragment.includes(hrefWithoutSlash)) {
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
                <Link href={href} className="block text-orange-600">
                    {title}
                </Link>
            </div>
        )
    }

    return (
        <Link href={href} className="block hover:text-orange-600">
            {title}
        </Link>
    )
}

export const ExternalLink = ({ href, title }) => {
    return (
        <a href={href} className="block hover:text-orange-600" target="_blank" rel="noreferrer noopener">
            {title}
        </a>
    )
}

export default function Navigation({ data }) {
    const path = usePathname()

    return (
        <>
            <h2 className="text-lg text-gray-400">Navigation</h2>
            {data.navigation.pages.map((page, index) => {
                return page.external ? (
                    <ExternalLink href={page.link} title={page.name} key={index} />
                ) : (
                    <NavLink href={page.link} title={page.name} path={path} key={index} />
                )
            })}
            <div className="mt-8 space-y-4">
                <h2 className="text-lg text-gray-400">Socials</h2>
                {data.navigation.social.map((social, index) => {
                    return <ExternalLink href={social.link} title={social.name} key={index} />
                })}
            </div>
        </>
    )
}
