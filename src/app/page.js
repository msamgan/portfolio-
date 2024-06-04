"use client"

import data from "../data.json"
import Image from "next/image"

export default function Home() {
    return (
        <div className="">
            <Image src={data.intro.img} alt={data.name} width={150} height={150} className="rounded-full" />
            <h1 className="text-xl mt-4 font-light text-gray-900">{data.name}</h1>
            <div>
                {data.intro.text.map((text, index) => {
                    return (
                        <div className="mt-4 font-light leading-7 text-gray-700" key={index}>
                            {text}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
