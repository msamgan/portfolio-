"use client"

import Image from "next/image"
import data from "../../data.json"

export const ExternalLink = ({ href, title }) => {
    return (
        <a rel="noopener noreferrer" href={href} target="_blank" className="text-orange-600 hover:text-orange-700">
            {title}
        </a>
    )
}

export default function Services() {
    return (
        <div className="">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                {data.projects.map((project, index) => {
                    return (
                        <div
                            key={index}
                            className="p-4 shadow-xl bg-gray-50 text-gray-800 rounded-md hover:shadow-2xl"
                        >
                            <div className="space-y-8">
                                <div className="space-y-3">
                                    <Image
                                        src={project.img}
                                        alt={project.name}
                                        width={400}
                                        height={300}
                                        className="block object-cover object-center w-58 h-48 rounded-md"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <a rel="noopener noreferrer" href="#" className="block">
                                        <h3 className="text-lg text-gray-900">{project.name}</h3>
                                    </a>
                                    <p className="font-light leading-7 text-gray-700">{project.description}</p>
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
