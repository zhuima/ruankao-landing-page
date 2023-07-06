/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  images: {
    domains: ["tailus.io", "api.themoviedb.org", "i.ibb.co"],
  },
};

module.exports = withContentlayer(nextConfig);
