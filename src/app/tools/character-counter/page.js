"use client"

import { isEmpty } from "lodash"
import { useEffect, useState } from "react"
import { titleGenerator } from "@/methods"

/**
 * A React component that displays the character counter.
 * @returns None
 */
const CharacterCounter = () => {
    const [text, setText] = useState(null)
    const [characters, setCharacters] = useState(0)
    const [words, setWords] = useState(0)
    const [sentences, setSentences] = useState(0)
    const [paragraphs, setParagraphs] = useState(0)

    /**
     * Sets the state of the character, word, sentence, and paragraph counts.
     * @param {string} text - the text to count the characters, words, sentences, and
     * paragraphs of.
     * @returns None
     */
    useEffect(() => {
        setCharacters(text ? text.length : 0)
        setWords(text ? text.split(" ").filter((word) => !isEmpty(word)).length : 0)
        setSentences(text ? text.split(".").filter((sentence) => !isEmpty(sentence)).length - 1 : 0)
        setParagraphs(text ? text.split("\n").filter((paragraph) => !isEmpty(paragraph)).length : 0)
    }, [text])

    const meta = {
        title: titleGenerator("Character Counter"),
        description:
            "Count characters, words, sentences and paragraphs in your text. This is a free tool that counts characters, words, sentences and paragraphs in your text.",
        keywords: "character, counter, words, sentences, paragraphs"
    }

    return (
        <>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />

            <div className={"min-w-full"}>
                <h1 className={"font-light"}># Character Counter</h1>
                <p className={"mt-2 text-gray-400"}>
                    Count the number of characters, words, sentences, and paragraphs in a string.
                </p>
                <div className={"mt-3"}>
                    <textarea
                        className="w-full p-4 font-light border border-gray-300 rounded-md"
                        rows={10}
                        id="inputText"
                        onChange={(e) => setText(e.target.value)}
                        autoFocus={true}
                    />
                </div>
                <div className={"mt-3"}>
                    <label htmlFor="outputText" className="font-light form-label">
                        <span className="">Characters:</span> {characters}
                        <span className="ml-2">Words</span>: {words}
                        <span className="ml-2">Sentences</span>: {sentences},
                        <span className="ml-2">Paragraphs</span>: {paragraphs}
                    </label>
                </div>
            </div>
        </>
    )
}

export default CharacterCounter
