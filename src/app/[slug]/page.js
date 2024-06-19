import "./post.css"
import Image from "next/image"
import Link from "next/link"
import { titleGenerator } from "@/methods"

async function getPost({ slug }) {
    const res = await fetch(`https://erp.msamgan.com/api/post/${slug}`)
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json()
}

export async function generateMetadata({ params }) {
    const slug = params.slug
    const post = await getPost({ slug })
    return {
        title: titleGenerator(post.title),
        description: post.excerpt,
        keywords: post.tags.map((tag) => tag),
        openGraph: {
            type: "article",
            title: titleGenerator(post.title),
            url: "https://msamgan.com/" + post.slug,
            description: post.excerpt,
            images: post.featured_image
                ? post.featured_image
                : "https://erp.msamgan.com/storage/images/MNn9limQxw66kpBfxjnXQ4jvdndLXom3bh7oeMvc.png"
        }
    }
}

export default async function PostDetail(props) {
    const slug = props.params.slug
    const post = await getPost({ slug })

    return (
        <div className="max-w-4xl mx-auto space-y-12 post">
            <>
                <article className="space-y-8 text-gray-900">
                    <div className="space-y-6">
                        {post.featured_image && (
                            <Image
                                src={post.featured_image}
                                alt={post.title}
                                width={1200}
                                height={100}
                                style={{
                                    maxHeight: "300px"
                                }}
                                className="block object-cover object-center rounded-md"
                            />
                        )}
                        <h1 className="text-3xl leading-7 md:tracking-tight md:text-3xl text-gray-700">
                            {post.title}
                        </h1>
                        <div
                            className="flex flex-col items-start justify-between w-full text-gray-600 md:flex-row md:items-center">
                            <div className="flex items-center md:space-x-2">
                                <Image
                                    src="https://secure.gravatar.com/avatar/c2acbea3e046c1b8cf7358d8526eda63?s=80"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="w-4 h-4 bg-gray-500 border border-gray-300 rounded-full"
                                />
                                <span className="text-sm">
                                    msamgan • {new Date(post.published_at).toDateString()}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="font-light leading-7 text-gray-800">
                        {post.content && (
                            <div
                                className={'post-content'}
                                dangerouslySetInnerHTML={{
                                    __html: post.content
                                }}
                            ></div>
                        )}
                    </div>
                </article>
                <div>
                    {post.tags && (
                        <div className="flex flex-wrap gap-2 py-3 font-light border-t border-gray-600 border-dashed">
                            {post.tags.map((tag, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={"/tag/" + tag.slug}
                                        rel="noopener noreferrer"
                                        className="px-3 py-1 text-gray-500 rounded-sm hover:underline"
                                    >
                                        {tag.name}
                                    </Link>
                                )
                            })}
                        </div>
                    )}
                    <div className="space-y-2">
                        <h4 className="text-lg font-light">Related posts</h4>
                        <ul className="ml-4 space-y-1 font-light list-disc">
                            {post.related_posts &&
                                post.related_posts.map((related, index) => {
                                    return (
                                        <li key={index}>
                                            <a
                                                rel="noopener noreferrer"
                                                href={"/" + related.slug}
                                                className="hover:underline"
                                            >
                                                {related.title}
                                            </a>
                                        </li>
                                    )
                                })}
                        </ul>
                    </div>

                    {/*<div className="mt-6 space-y-2">
                        <Giscus
                            id="comments"
                            src="https://giscus.app/client.js"
                            repo="msamgan/blog-comments"
                            repoId="R_kgDOIT1xSg"
                            category="General"
                            categoryId="DIC_kwDOIT1xSs4CSMzg"
                            mapping="title"
                            strict="0"
                            reactionsEnabled="1"
                            emitMetadata="0"
                            inputPosition="bottom"
                            theme="light"
                            lang="en"
                            crossorigin="anonymous"
                            loading={"lazy"}
                            async
                        ></Giscus>
                    </div>*/}
                </div>
            </>
        </div>
    )
}
