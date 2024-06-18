"use client"

import React, { useEffect, useState } from "react"
import TurndownService from "turndown"
import { titleGenerator } from "@/methods"

const HtmlToMarkdown = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var turndownService = new TurndownService()

    const [html, setHtml] = useState("")
    const [markdown, setMarkdown] = useState("")

    const meta = {
        title: titleGenerator("Html to Markdown"),
        description: "Convert HTML to Markdown. This is a free tool that converts HTML to Markdown.",
        keywords: "html, markdown, converter"
    }

    useEffect(() => {
        if (html) {
            setMarkdown(turndownService.turndown(html))
        }
    }, [html, turndownService])

    return (
        <>

            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />

            <div className={"min-w-full"}>
                <h1 className={"font-light"}># Html to Markdown</h1>
                <p className={"mt-2 text-gray-400"}>Convert html to markdown.</p>
                <div className={"mt-3 flex gap-3"}>
                    <div className="w-1/2">
                        <label htmlFor="htmlValue" className="form-label">
                            Enter HTML
                        </label>
                        <textarea
                            className="w-full p-4 mt-2 font-light border border-gray-300 rounded-md"
                            id="htmlValue"
                            onChange={(event) => {
                                setHtml("")
                                setMarkdown("")
                                if (event.target.value.length > 0) {
                                    setHtml(event.target.value)
                                }
                            }}
                            rows={18}
                            placeholder={"<h1>Hello World</h1>"}
                            autoFocus={true}
                        />
                    </div>
                    <div className={"w-1/2"}>
                        <label htmlFor="htmlValue" className="form-label">
                            Markdown
                        </label>
                        <textarea
                            className="w-full p-4 mt-2 font-light border border-gray-300 rounded-md"
                            id="markdownValue"
                            rows={18}
                            readOnly
                            placeholder={"# Hello World"}
                            onChange={() => {
                                // event
                            }}
                            autoFocus={false}
                            value={markdown}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HtmlToMarkdown
