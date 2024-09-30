import data from "../data.json"
import Image from "next/image"
import { titleGenerator } from "@/methods"
import FxBanner from "@/app/components/FxBanner"

export const metadata = {
    title: titleGenerator("Welcome to msamgan.com"),
    description:
        "Welcome to msamgan.com. This is the personal website of Mohammad Samgan Khan. Here you will find my portfolio, blog, and other information.",
    keywords: "mohammad samgan khan, msamgan, msamgan.com, personal website, portfolio, blog",
    openGraph: {
        type: "website",
        title: titleGenerator("Home"),
        url: "https://msamgan.com",
        description: "Welcome to msamgan.com. This is the personal website of Mohammad Samgan Khan.",
        images: "https://msamgan.dev/storage/images/MNn9limQxw66kpBfxjnXQ4jvdndLXom3bh7oeMvc.png"
    }
}

export default function Home() {
    return (
        <div className="">
            <Image src={data.intro.img} alt={data.name} width={150} height={150} className="rounded-full" />
            <h1 className={"col-span-2 text-3xl font-bold text-gray-900 mb-4 mt-4"}>
                {data.name} ({data.username})
            </h1>
            <p className="text-sm text-gray-500">{data.title}</p>

            <div className={"mb-6"}>
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
