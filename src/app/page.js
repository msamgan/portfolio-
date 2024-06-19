"use client"

import data from "../data.json"
import Image from "next/image"
import { titleGenerator } from "@/methods"

const FxBanner = () => {
    return (
        <div
            className="p-8 text-orange-600 bg-white mt-9"
            style={{
                border: "2px solid black",
                borderRadius: "20px"
            }}
        >
            <div className="container mx-auto">
                <div className="flex items-center justify-between gap-3">
                    <Image
                        className={"w-42 h-36"}
                        width={200}
                        height={100}
                        src={"https://frameworkx.info/img/frameworkx.png"}
                        alt={"frameworkx"}
                    />
                    <div>
                        <h2 className="text-lg font-light text-center text-gray-700 tracki">
                            Your Accelerated Path to <span className={"text-orange-600"}>API Creation</span>
                        </h2>
                        <p className={"text-md text-gray-700 font-light leading-7 mt-3 mb-4"}>
                            I created Framework X to be all about substance over style!. A well-oiled machine
                            for API development. Please check it out. All and Any feedback is appreciated.
                        </p>
                        <a
                            href="https://frameworkx.info/docs/introduction"
                            rel="noreferrer noopener"
                            target={"_blank"}
                            className="float-end hover:text-orange-700"
                        >
                            Know More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const meta = {
    title: titleGenerator("Home"),
    description: "Welcome to msamgan.com. This is the personal website of Mohammad Samgan Khan.",
    keywords: "mohammad samgan khan, msamgan, msamgan.com, personal website, portfolio, blog"
}

export default function Home() {
    return (
        <div className="">

            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />

            <Image src={data.intro.img} alt={data.name} width={150} height={150} className="rounded-full" />
            <h1 className={"col-span-2 text-3xl font-bold text-gray-900 mb-4 mt-4"}>{data.name}</h1>
            <div>
                {data.intro.text.map((text, index) => {
                    return (
                        <div className="mt-4 text-lg font-light text-gray-700 leading-7" key={index}>
                            {text}
                        </div>
                    )
                })}
            </div>

            <FxBanner />
        </div>
    )
}
