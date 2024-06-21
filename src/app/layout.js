import { Alexandria } from "next/font/google"
import "./globals.css"
import data from "../data.json"
import Link from "next/link"
import Navigation from "./components/Navigation"
import Image from "next/image"
import Loading from "./loading"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"

const alexandria = Alexandria({ subsets: ["latin"] })

export const metadata = {
    title: "msamgan.com",
    description: "Personal portfolio of Mohammed Samgan Khan"
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title></title>
                <Script
                    defer
                    src="https://cloud.umami.is/script.js"
                    data-website-id="5feea10c-6999-43d0-983f-f963a4631506"
                    data-domains="msamgan.com"
                ></Script>
            </head>
            <body className={alexandria.className}>
                <main className="max-w-screen-lg p-4 mx-auto mt-8">
                    <header className="flex items-center mb-8 space-x-4">
                        <Image
                            src="https://secure.gravatar.com/avatar/c2acbea3e046c1b8cf7358d8526eda63?s=80"
                            alt={data.name}
                            width={80}
                            height={80}
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <Link href="/">
                                <div className="text-xl">{data.username}</div>
                            </Link>
                            <p className="text-sm text-gray-500">{data.title}</p>
                        </div>
                    </header>

                    <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-24 ">
                        <div className="space-y-4 text-gray-700 hidden lg:block">
                            <Navigation data={data} />
                        </div>

                        <label style={{
                            marginTop: "5px"
                        }} className="relative z-40 cursor-pointer lg:hidden" htmlFor="mobile-menu">
                            <input className="peer hidden" type="checkbox" id="mobile-menu" />
                            <div
                                className="relative z-50 block h-[1px] w-7 bg-black bg-transparent content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-black before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-black after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform"
                            >
                            </div>
                            <div
                                className="fixed inset-0 z-40 hidden h-full w-full bg-black/50 backdrop-blur-sm peer-checked:block"
                            >
                                &nbsp;
                            </div>
                            <div
                                className="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0"
                            >
                                <div className="float-right min-h-full w-[85%] bg-white px-6 pt-12 shadow-2xl">
                                    <menu>
                                        <Navigation data={data} />
                                    </menu>
                                </div>
                            </div>
                        </label>

                        <div fallback={<Loading />}>{children}</div>
                    </div>
                </main>

                <footer className="flex flex-col items-center justify-center py-8 text-gray-500">
                    {/* <Image src="/msamgan_logo.png" alt="msamgan.com" width={300} height={300} /> */}
                    <p className="font-light" style={{ marginTop: "-25px" }}>
                        &copy; {new Date().getFullYear()} {data.username}
                    </p>
                </footer>

                <SpeedInsights />
            </body>
        </html>
    )
}
