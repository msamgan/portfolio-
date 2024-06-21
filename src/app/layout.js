import { Alexandria } from "next/font/google"
import "./globals.css"
import data from "../data.json"
import Link from "next/link"
import Image from "next/image"
import Loading from "./loading"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import DesktopMenu from "@/app/components/DesktopMenu"
import MobileMenu from "@/app/components/MobileMenu"

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
                        <DesktopMenu data={data} />
                        <MobileMenu data={data} />

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
