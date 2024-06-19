import Image from "next/image"
import data from "../../data.json"
import Link from "next/link"
import { titleGenerator } from "@/methods"

const description =
    "A collection of tools to help you with your projects. Find everything you need to streamline your workflow and boost productivity."
const keywords = "tools, collection, projects"

export const metadata = {
    title: titleGenerator("Tools"),
    description: description,
    keywords: keywords,
    openGraph: {
        title: titleGenerator("Tools"),
        description: description,
        type: "article",
        url: "https://msamgan.com/tools",
        images: "https://erp.msamgan.com/storage/images/MNn9limQxw66kpBfxjnXQ4jvdndLXom3bh7oeMvc.png"
    }
}

const Tools = () => {
    const toolList = data.tools

    return (
        <div className="">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Tools</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                {/*<div>
                    <fieldset className="w-full text-gray-800 space-y-1">
                        <label htmlFor="Search" className="hidden">
                            Search
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button
                                    type="button"
                                    title="search"
                                    className="p-1 focus:outline-none focus:ring"
                                >
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 512 512"
                                        className="w-4 h-4 text-gray-800"
                                    >
                                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                    </svg>
                                </button>
                            </span>
                            <input
                                type="search"
                                name="Search"
                                placeholder="Search..."
                                onChange={(e) => {
                                    const search = e.target.value
                                    const filtered = data.tools.filter((tool) => {
                                        return tool.name.toLowerCase().includes(search.toLowerCase())
                                    })

                                    setToolList(filtered)
                                }}
                                className="w-full py-2 pl-10 text-sm text-gray-800 bg-gray-100 rounded-md sm:w-full focus:outline-none focus:bg-gray-50 focus:border-cyan-600"
                            />
                        </div>
                    </fieldset>
                </div>*/}

                {toolList.map((tool, index) => {
                    return (
                        <Link key={index} rel="noopener noreferrer" href={tool.link} className="block">
                            <div
                                key={index}
                                className="p-1 text-gray-800 shadow-xl rounded-md bg-gray-50 hover:shadow-2xl"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="space-y-3">
                                        <Image
                                            src={tool.img}
                                            alt={tool.name}
                                            width={80}
                                            height={40}
                                            className="block object-cover object-center rounded-md"
                                        />
                                    </div>
                                    <div className="">
                                        <h3 className="text-lg text-gray-900">{tool.name}</h3>
                                        <p className="font-light text-gray-700 leading-7">{tool.description}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Tools
