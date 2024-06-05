"use client"

import React, { useState } from "react"
import ReactJson from "@microlink/react-json-view"
import { isObject } from "lodash"

const JsonFormatter = () => {
    const [inputString, setInputString] = useState(false)
    const [error, setError] = useState("")

    return (
        <>
            <title>JSON Formatter - msamgan.com</title>
            <meta
                name="description"
                content="Format and beautify your JSON. This is a free tool that formats and beautifies your JSON."
            />
            <meta name="keywords" content="json, formatter, beautify" />

            <div className={"mb-3 mt-5 min-w-full"}>
                <h1 className={"font-light"}># JSON Formatter</h1>
                <p className={"mt-2 text-gray-400"}>Format JSON String in a easily readable Object.</p>
                <div className={"mt-3"}>
                    <div className={"col-md-12"}>
                        <textarea
                            className="w-full border border-gray-300 rounded-md font-light p-4"
                            rows={10}
                            id="jsonValue"
                            autoFocus={true}
                            onChange={(event) => {
                                try {
                                    setInputString(JSON.parse(event.target.value))
                                    setError("")
                                } catch (e) {
                                    setInputString("")
                                    setError(e.message)
                                }
                            }}
                        />
                        <small id="" className="form-text text-muted text-red-500">
                            {error}
                        </small>
                    </div>
                </div>
                <div className={"row mt-5"}>
                    {inputString ? (
                        <div className={"col-md-12"}>
                            <h3># Current</h3>
                            <pre>
                                {inputString ? (
                                    <ReactJson
                                        src={inputString}
                                        name={false}
                                        collapsed={false}
                                        enableClipboard={(copy) => {
                                            if (isObject(copy.src)) {
                                                return navigator.clipboard.writeText(JSON.stringify(copy.src))
                                            }

                                            return navigator.clipboard.writeText(copy.src)
                                        }}
                                        displayDataTypes={true}
                                    />
                                ) : null}
                            </pre>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default JsonFormatter
