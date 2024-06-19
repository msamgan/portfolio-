"use client"

import Image from "next/image"
import data from "../../data.json"
import { titleGenerator } from "@/methods"

export default function Services() {
    const description =
        "Explore msamgan's services and discover how we can help you grow your business. From web development to digital marketing, we offer a wide range of services to meet your needs."
    const tags =
        "msamgan, services, web development, digital marketing, seo, content writing, social media marketing"

    const meta = {
        title: titleGenerator("Services"),
        description: description,
        keywords: tags
    }

    return (
        <div className="">
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />

            <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                <h1 className={"col-span-2 text-3xl font-bold text-gray-900"}>Services</h1>
                {data.services.map((service, index) => {
                    return (
                        <div
                            key={index}
                            className="p-4 text-gray-800 shadow-xl bg-gray-50 rounded-md hover:shadow-2xl"
                        >
                            <div className="space-y-8">
                                <div className="space-y-3">
                                    <Image
                                        src={service.img}
                                        alt={service.name}
                                        width={400}
                                        height={300}
                                        className="block object-cover object-center h-48 rounded-md"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <a rel="noopener noreferrer" href="#" className="block">
                                        <h3 className="text-lg text-bold text-gray-700">{service.name}</h3>
                                    </a>
                                    <p className="font-light text-gray-700 leading-7">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
