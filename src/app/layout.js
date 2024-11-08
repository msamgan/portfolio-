import { Alexandria } from "next/font/google"
import "./globals.css"
import data from "../data.json"
import Loading from "./loading"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import DesktopMenu from "@/app/components/DesktopMenu"
import MobileMenu from "@/app/components/MobileMenu"
import { ThemeProvider } from "next-themes"

const alexandria = Alexandria({ subsets: ["latin"] })

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="google-adsense-account" content="ca-pub-4235318980971035" />

                <Script
                    defer
                    src="https://cloud.umami.is/script.js"
                    data-website-id="5feea10c-6999-43d0-983f-f963a4631506"
                    data-domains="msamgan.com"
                ></Script>

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </head>
            <body className={alexandria.className + " dark:bg-gray-800"}>
                <main className="container w-2/3 p-4 mx-auto mt-8">
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                        <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-16">
                            <div>
                                <DesktopMenu data={data} />
                                <MobileMenu data={data} />
                            </div>
                            <div
                                fallback={<Loading />}
                                style={{
                                    minWidth: "70%"
                                }}
                            >
                                {children}
                            </div>
                            <div className="flex flex-col space-y-8">
                                <a
                                    href={"https://shop.ashallendesign.co.uk/?aff=WLoAY"}
                                    target={"_blank"}
                                    rel={"noopener noreferrer"}
                                    data-umami-event={"click on laravel api"}
                                    className={"hover:shadow-lg hover:scale-105"}
                                >
                                    <img src="/laravel-api.png" alt="Laravel API" />
                                </a>
                                <hr />
                                <a
                                    href={"https://shop.ashallendesign.co.uk/?aff=WLoAY"}
                                    target={"_blank"}
                                    rel={"noopener noreferrer"}
                                    data-umami-event={"click on battle ready laravel"}
                                    className={"hover:shadow-lg hover:scale-105"}
                                >
                                    <img src="/battle-ready-laravel.png" alt="Battle Ready Laravel" />
                                </a>
                            </div>
                        </div>
                    </ThemeProvider>
                </main>

                <footer className="flex flex-col items-center justify-center py-8 text-gray-500 dark:text-white">
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
