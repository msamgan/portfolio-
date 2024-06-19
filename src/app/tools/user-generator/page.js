"use client"

import React, { useCallback, useEffect, useState } from "react"
import { faker } from "@faker-js/faker"
import { titleGenerator } from "@/methods"

const UserGenerator = () => {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [user, setUser] = useState({})
    const [inboxUrl, setInboxUrl] = useState("")
    const [notification, setNotification] = useState("")

    const generateUser = useCallback(() => {
        setFirstName(faker.person.firstName())
        setLastName(faker.person.lastName())
    }, [])

    useEffect(() => {
        generateUser()
    }, [generateUser])

    useEffect(() => {
        setUser({
            fname: firstName,
            lname: lastName,
            name: `${firstName} ${lastName}`,
            username: `${firstName?.toLowerCase()}${lastName?.toLowerCase()}`,
            email: `${firstName?.toLowerCase()}.${lastName?.toLowerCase()}@dispostable.com`,
            phone: faker.string.numeric("##########")
        })

        setInboxUrl(`https://www.dispostable.com/inbox/${firstName?.toLowerCase()}.${lastName?.toLowerCase()}`)
    }, [firstName, lastName])

    const description =
        "Generate random user data for your projects. This is a free tool that generates random user data."
    const keywords = "user, generator, random"

    const meta = {
        title: titleGenerator("User Generator"),
        description: description,
        keywords: keywords
    }

    return (
        <>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />

            <div className={"min-w-full"}>
                <h1 className={"font-light"}># User Generator</h1>
                <p className={"mt-2 text-gray-400"}>Generate random user data for your projects.</p>
                <div className={"mt-3"}>
                    <table className={"table-auto font-light min-w-full"}>
                        <tbody>
                            {Object.keys(user).map((key, index) => (
                                <tr key={index}>
                                    <td className={"border px-4 py-2"}>{key}</td>
                                    <td
                                        onClick={() => {
                                            navigator.clipboard.writeText(user[key])
                                            setNotification(`${key} copied to clipboard`)

                                            setTimeout(() => {
                                                setNotification("")
                                            }, 3000)
                                        }}
                                        className={"border px-4 py-2 font-light cursor-pointer"}
                                    >
                                        {user[key]}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <small className={"text-gray-400"}>{notification}</small>
                </div>
                <div className={"mt-5"}>
                    <button className={"text-orange-600 font-light py-2 px-4 rounded"} onClick={generateUser}>
                        Generate New
                    </button>
                    <a
                        className={"text-orange-600 font-light py-2 px-4 float-end"}
                        href={inboxUrl}
                        target={"_blank"}
                    >
                        Open Inbox
                    </a>
                </div>
            </div>
        </>
    )
}

export default UserGenerator
