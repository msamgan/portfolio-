"use client"

import React, { useCallback, useEffect, useState } from "react"
import { faker } from "@faker-js/faker"

const JsonFormatter = () => {
    const [content, setContent] = useState()
    const [notification, setNotification] = useState("")

    const makeSentenceClickToCopy = (content) => {
        let contentArray = content.split(".").filter((item) => item !== "")

        contentArray = contentArray.map((item, index) => {
            return (
                <span
                    key={index}
                    className={"cursor-pointer hover:text-orange-600 font-light leading-7"}
                    onClick={() => {
                        navigator.clipboard.writeText(item)
                        setNotification("Sentence copied to clipboard")

                        setTimeout(() => {
                            setNotification("")
                        }, 3000)
                    }}
                >
                    {item}.
                </span>
            )
        })

        setContent(contentArray)
    }

    const generateContent = useCallback(() => {
        makeSentenceClickToCopy(faker.lorem.sentences(10))
    }, [])

    useEffect(() => {
        generateContent()
    }, [generateContent])

    return (
        <>
            <title>Content Generator - msamgan.com</title>
            <meta
                name="description"
                content="Generate random data for your projects. This is a free tool that generates random data."
            />
            <meta name="keywords" content="user, generator, random" />

            <div className={"mb-3 mt-5 min-w-full"}>
                <h1 className={"font-light"}># Content Generator</h1>
                <p className={"mt-2 text-gray-400"}>Generate random content for your projects.</p>
                <div className={"mt-3"}>{content}</div>
                <small className={"text-gray-400 mt-4"}>{notification}</small>
                <div className={"mt-5"}>
                    <button className={"text-orange-600 font-light py-2 rounded"} onClick={generateContent}>
                        Generate New
                    </button>
                </div>
            </div>
        </>
    )
}

export default JsonFormatter
