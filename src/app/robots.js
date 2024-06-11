export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/"
        },
        sitemap: "https://msamgan.com/sitemap.xml"
    }
}
