import fs from "fs"
import Markdown from "markdown-to-jsx"
import "./page.css"

async function getFileContent({ slug }) {
    return fs.readFileSync("src/app/page/" + slug + ".md", "utf8")
}

export default async function Page(props) {
    const slug = props.params.slug
    const mdFile = await getFileContent({ slug })

    return (
        <div className="space-y-12 page">
            <Markdown>{mdFile}</Markdown>
        </div>
    )
}