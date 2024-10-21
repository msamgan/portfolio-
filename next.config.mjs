/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "frameworkx.info",
            "msamgan.gallerycdn.vsassets.io",
            "msamgan.dev",
            "images.unsplash.com",
            "secure.gravatar.com",
            "erp.msamgan.com",
            "ms0.org"
        ]
    },
    reactStrictMode: false,
    transpilePackages: ["highlight.js"],
}

export default nextConfig
