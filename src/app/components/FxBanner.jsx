import Image from "next/image"

export default function FxBanner() {
    return (
        <div className="p-8 text-red-600 bg-white border-2 border-black rounded-3xl dark:border-white dark:bg-black">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
                    <Image
                        className={"w-42 h-36 dark:invert"}
                        width={200}
                        height={100}
                        src={"https://frameworkx.info/img/frameworkx.png"}
                        alt={"frameworkx"}
                    />
                    <div>
                        <h2 className="text-lg font-light text-center text-gray-700 tracki dark:text-white">
                            Your Accelerated Path to{" "}
                            <span className={"text-red-600 dark:font-bold"}>API Creation</span>
                        </h2>
                        <p className={"text-md text-gray-700 font-light leading-7 mt-3 mb-4 dark:text-white"}>
                            I created Framework X to be all about substance over style!. A well-oiled machine
                            for API development. Please check it out. All and Any feedback is appreciated.
                        </p>
                        <a
                            href="https://frameworkx.info/docs/introduction"
                            rel="noreferrer noopener"
                            target={"_blank"}
                            className="float-end hover:text-red-700 dark:font-bold"
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
