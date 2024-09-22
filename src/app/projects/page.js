import Image from "next/image"
import data from "../../data.json"
import { titleGenerator } from "@/methods"

export const ExternalLink = ({ href, title }) => {
    return (
        <a rel="noopener noreferrer" href={href} target="_blank" className="text-red-600 hover:text-red-700">
            {title}
        </a>
    )
}

const description =
    "I have worked on a variety of projects, ranging from web development to machine learning. Here are some of the projects I have worked on."
const tags = "Projects, Web Development, Machine Learning, Data Science, Full Stack Development"

export const metadata = {
    title: titleGenerator("Projects"),
    description: description,
    tags: tags,
    openGraph: {
        title: titleGenerator("Projects"),
        description: description,
        type: "website",
        images: "https://msamgan.dev/storage/images/MNn9limQxw66kpBfxjnXQ4jvdndLXom3bh7oeMvc.png",
        url: "https://msamgan.com/projects"
    }
}

export default function Services() {
    return (
        <div className="">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Projects</h1>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                {data.projects.map((project, index) => {
                    return (
                        <div
                            key={index}
                            className="p-4 text-gray-800 shadow-xl bg-gray-50 rounded-md hover:shadow-2xl"
                        >
                            <div className="space-y-8">
                                <div className="space-y-3">
                                    <Image
                                        src={project.img}
                                        alt={project.name}
                                        width={400}
                                        height={300}
                                        className="block object-cover object-center h-48 w-58 rounded-md"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <a rel="noopener noreferrer" href="#" className="block">
                                        <h3 className="text-lg text-gray-900">{project.name}</h3>
                                    </a>
                                    <p className="font-light text-gray-700 leading-7">{project.description}</p>
                                </div>

                                <div className="flex items-center justify-between">
                                    <ExternalLink href={project.link} title="Visit" />
                                    <ExternalLink href={project.repo} title="Source" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
