"use client"

import React, { useState, useEffect } from "react"
import TurndownService from "turndown"

const HtmlToMarkdown = () => {
    var turndownService = new TurndownService()

    const [html, setHtml] = useState("")
    const [markdown, setMarkdown] = useState("")

    const meta = {
        title: "HTML to Markdown",
        description: "Convert HTML to Markdown. This is a free tool that converts HTML to Markdown.",
        meta: {
            charset: "utf-8",
            name: {
                keywords: "html, markdown, converter"
            }
        }
    }

    useEffect(() => {
        if (html) {
            setMarkdown(turndownService.turndown(html))
        }
    }, [html])

    return (
        <>
            <div className={"min-w-full mb-3 mt-5"}>
                <h1 className={"font-light"}># Html to Markdown</h1>
                <p className={"mt-2 text-gray-400"}>Convert html to markdown.</p>
                <div className={"mt-3 flex gap-3"}>
                    <div className="w-1/2">
                        <label htmlFor="htmlValue" className="form-label">
                            Enter HTML
                        </label>
                        <textarea
                            className="w-full border border-gray-300 rounded-md font-light p-4 mt-2"
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
                            className="w-full border border-gray-300 rounded-md font-light p-4 mt-2"
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
