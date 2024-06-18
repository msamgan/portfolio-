"use client"

import React, { useState } from "react"
import ReactDiffViewer from "react-diff-viewer-continued"
import { titleGenerator } from "@/methods"

const DiffChecker = () => {
    const [oldCode, setOldCode] = useState()
    const [newCode, setNewCode] = useState()
    const [newCodeDisable, setNewCodeDisable] = useState(true)
    const [showDiff, setShowDiff] = useState(false)

    const meta  = {
        title: titleGenerator("Diff Checker"),
        description: "Compare two text files and see the differences. This is a free tool that compares two files and shows the differences.",
        keywords: "diff, checker, compare, text"
    }

    return (
        <>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />

            <div className={"min-w-full max-w-full"}>
                <h1 className={"font-light"}># Diff Checker</h1>
                <p className={"mt-2 text-gray-400"}>Difference checker between two file data.</p>

                <div className={"mt-3 flex gap-3"}>
                    <div className={"w-1/2"}>
                        <label htmlFor="originalText" className="font-light">
                            Original Text
                        </label>
                        <textarea
                            className="w-full p-4 mt-2 font-light border border-gray-300 rounded-md"
                            withspellcheck="false"
                            rows={10}
                            id="originalText"
                            autoFocus={true}
                            onChange={(event) => {
                                setOldCode(event.target.value)
                                setNewCodeDisable(false)
                            }}
                        />
                    </div>
                    <div className={"w-1/2"}>
                        <label htmlFor="updatedText" className="font-light">
                            Updated Text
                        </label>
                        <textarea
                            className={
                                newCodeDisable
                                    ? "w-full border border-gray-300 rounded-md font-light p-4 mt-2 bg-gray-200"
                                    : "w-full border border-gray-300 rounded-md font-light p-4 mt-2"
                            }
                            rows={10}
                            withspellcheck="false"
                            disabled={newCodeDisable}
                            id="updatedText"
                            onChange={(event) => {
                                setNewCode(event.target.value)
                                setShowDiff(true)
                            }}
                        />
                    </div>
                </div>
                {showDiff ? (
                    <div className={"mt-3 flex gap-3"}>
                        <ReactDiffViewer oldValue={oldCode} newValue={newCode} splitView={true} />
                    </div>
                ) : null}

                <p className={"text-start mt-12 font-light"}>
                    This diff checker is powered by
                    <a
                        target={"_blank"}
                        rel="noreferrer"
                        className={"ml-1 text-orange-600 hover:text-orange-700"}
                        href={"https://github.com/praneshr/react-diff-viewer"}
                    >
                        praneshr
                    </a>
                </p>
            </div>
        </>
    )
}

export default DiffChecker
