/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")

const nextConfig = {
    transpilePackages: ['next-mdx-remote'],
    compiler:{
        removeConsole: false,
    }
};

module.exports = withContentlayer({ ...nextConfig });
