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
                <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
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
                            data-umami-event={"click to know more about FrameworkX"}
                        >
                            Know More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

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
