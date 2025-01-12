"use client"

import Giscus from "@giscus/react"
import { useTheme } from "next-themes"

export default function CommentArea() {
    const { theme, setTheme } = useTheme()

    return (
        <Giscus
            id="comments"
            src="https://giscus.app/client.js"
            repo="msamgan/blog-comments"
            repoId="R_kgDOIT1xSg"
            category="General"
            categoryId="DIC_kwDOIT1xSs4CSMzg"
            mapping="title"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme={theme === "dark" ? "dark" : "light"}
            lang="en"
            crossorigin="anonymous"
            loading={"lazy"}
            async
        ></Giscus>
    )
}
