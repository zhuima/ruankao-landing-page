/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-05-10 15:05:55
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2024-01-28 18:23:56
 * @FilePath: /ruankao-website/next.config.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  images: {
    domains: [
      "tailus.io",
      "api.themoviedb.org",
      "i.ibb.co",
      "img.techrk1688.eu.org",
      "d1w019qw3bn26k.cloudfront.net",
      "image.techrk1688.eu.org",
    ],
  },
  async rewrites() {
    return [
      {
        source: "/rss",
        destination: "/feed.xml",
      },
      {
        source: "/rss.xml",
        destination: "/feed.xml",
      },
      {
        source: "/feed",
        destination: "/feed.xml",
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
