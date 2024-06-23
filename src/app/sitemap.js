import axios from "axios"
import data from "../data.json"
import { baseUrl, postList, tagList } from "@/constants"

export const getPosts = async () => {
    return await axios
        .get(baseUrl + postList)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.error(error)
            return []
        })
}

export const getTags = async () => {
    return await axios
        .get(baseUrl + tagList)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.error(error)
            return []
        })
}

export default async function sitemap() {
    const baseUrl = "https://msamgan.com"
    let sitemapArray = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1
        }
    ]

    // navigation
    data.navigation.pages.map((navItem) => {
        if (navItem.external) return

        sitemapArray.push({
            url: baseUrl + navItem.link,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.5
        })
    })

    // tags
    let tags = await getTags()

    tags.map((tag) => {
        sitemapArray.push({
            url: baseUrl + "/tag/" + tag.slug,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7
        })
    })

    let posts = await getPosts()

    // posts
    posts.map((post) => {
        sitemapArray.push({
            url: baseUrl + "/" + post.slug,
            lastModified: new Date(post.published_at),
            changeFrequency: "weekly",
            priority: 0.3
        })
    })

    // tools
    data.tools.map((tool) => {
        sitemapArray.push({
            url: baseUrl + tool.link,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8
        })
    })

    return sitemapArray
}
