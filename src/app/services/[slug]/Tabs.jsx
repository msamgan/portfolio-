import Link from "next/link"

export default function Tabs({ tab }) {
    const inactiveTabClasses =
        "flex items-center flex-shrink-0 px-5 py-2 border-b-4 border-gray-300 text-gray-600"
    const activeTabClasses =
        "flex items-center flex-shrink-0 px-5 py-2 border-b-4 border-orange-600 text-gray-900"

    return (
        <div className="flex items-center -mx-4 space-x-8 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  text-gray-800">
            <Link
                rel="noopener noreferrer"
                href="?tab=options"
                className={tab === "options" ? activeTabClasses : inactiveTabClasses}
            >
                Options
            </Link>
            <Link
                rel="noopener noreferrer"
                href="?tab=tech-stack"
                className={tab === "tech-stack" ? activeTabClasses : inactiveTabClasses}
            >
                Tech Stack
            </Link>
            <Link
                rel="noopener noreferrer"
                href="?tab=process"
                className={tab === "process" ? activeTabClasses : inactiveTabClasses}
            >
                Process
            </Link>
        </div>
    )
}
