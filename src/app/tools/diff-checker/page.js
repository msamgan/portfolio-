"use client"

import React, { useState } from "react"
import ReactDiffViewer from "react-diff-viewer-continued"

const DiffChecker = () => {
    const [oldCode, setOldCode] = useState()
    const [newCode, setNewCode] = useState()
    const [newCodeDisable, setNewCodeDisable] = useState(true)
    const [showDiff, setShowDiff] = useState(false)

    return (
        <>
            <title>Diff Checker - msamgan.com</title>
            <meta
                name="description"
                content="Compare two text files and see the differences. This is a free tool that compares two files and shows the differences."
            />
            <meta name="keywords" content="diff, checker, compare, text" />

            <div className={"min-w-full max-w-full mb-3 mt-5"}>
                <h1 className={"font-light"}># Diff Checker</h1>
                <p className={"mt-2 text-gray-400"}>Difference checker between two file data.</p>

                <div className={"mt-3 flex gap-3"}>
                    <div className={"w-1/2"}>
                        <label htmlFor="originalText" className="font-light">
                            Original Text
                        </label>
                        <textarea
                            className="w-full border border-gray-300 rounded-md font-light p-4 mt-2"
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
