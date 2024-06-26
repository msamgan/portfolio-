import Link from "next/link"
import Tabs from "@/app/services/[slug]/Tabs"
import Categories from "@/app/services/[slug]/Categories"

export default async function ServiceDetail(props) {
    const slug = props.params.slug
    const tab = props.searchParams.tab || "options"

    const service = await import("@/services/" + slug + ".json")

    return (
        <div className="max-w-2xl mx-auto space-y-12">
            <article className="space-y-1 text-gray-900">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 md:tracking-tight">{service.name}</h1>
                </div>
                <div className="text-gray-700 font-light leading-7">
                    <div>
                        {service.introduction.map((paragraph, index) => (
                            <p className={"mb-3"} key={index}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                <Tabs tab={tab} />

                {tab === "options" ? <Categories service={service} /> : null}

                {
                    tab === "tech-stack" ?
                        <section className="text-gray-800">
                            <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
                                <div className="flex flex-wrap justify-center lg:justify-between">
                                    {
                                        service.tech_stack.map((tech, index) => (
                                            <div key={index} className="">
                                                <h2 className="text-lg font-semibold mt-4">{tech.name}</h2>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </section> : null
                }
            </article>
        </div>
    )
}
