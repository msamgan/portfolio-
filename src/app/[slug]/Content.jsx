"use client"

import hljs from "highlight.js"
import "highlight.js/styles/a11y-dark.min.css"
import { useEffect } from "react"

export default function Content({ content }) {
    useEffect(() => {
        document.querySelectorAll("pre code").forEach((block) => {
            hljs.highlightElement(block)
        })
    }, [content])

    return (
        <div
            className={"post-content"}
            dangerouslySetInnerHTML={{
                __html: content
            }}
        ></div>
    )
}
