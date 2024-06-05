import { Alexandria } from "next/font/google"
import "./globals.css"
import data from "../data.json"
import Link from "next/link"
import Navigation from "./components/Navigation"
import Image from "next/image"

const alexandria = Alexandria({ subsets: ["latin"] })

export const metadata = {
    title: "msamgan.com",
    description: "Personal portfolio of Mohammed Samgan Khan"
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={alexandria.className}>
                <main className="max-w-screen-lg mx-auto p-4 mt-8">
                    <header className="flex items-center space-x-4 mb-8">
                        <img
                            src="https://secure.gravatar.com/avatar/c2acbea3e046c1b8cf7358d8526eda63?s=80"
                            alt={data.name}
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <Link href="/">
                                <h1 className="text-xl">{data.username}</h1>
                            </Link>
                            <p className="text-sm text-gray-500">Software Developer</p>
                        </div>
                    </header>

                    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-24">
                        <div className="space-y-4 text-gray-700">
                            <Navigation data={data} />
                        </div>

                        {children}
                    </div>
                </main>

                <footer className="flex flex-col items-center justify-center py-8 text-gray-500">
                    {/* <Image src="/msamgan_logo.png" alt="msamgan.com" width={300} height={300} /> */}
                    <p className="font-light" style={{ marginTop: "-25px" }}>
                        &copy; {new Date().getFullYear()} {data.username}
                    </p>
                </footer>

                {/* {
                    "name": "JSON Formatter",
                    "description": "JSON Formatter is a free online tool that lets you format JSON data with ease.",
                    "img": "/JSONFormatter.png",
                    "link": "/tools/json-formatter"
                }, */}
            </body>
        </html>
    )
}
