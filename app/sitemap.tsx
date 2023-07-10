/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-07-07 16:33:57
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-07-07 16:35:25
 * @FilePath: /ruankao-website/app/sitemap.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// app/sitemap.js
// https://claritydev.net/blog/nextjs-dynamic-sitemap-pages-app-directory

const URL = "https://ruankao.eu.org";

export default async function sitemap() {
  const routes = [
    "",
    "/countdown",
    "/docs",
    "/docs/about-ruankao",
    "/docs/about-ruankao-certificates",
    "/docs/high-level",
    "/docs/high-level/xxxtxmgls",
    "/docs/high-level/xtghygls",
    "/guides",
    "/guides/tools-recommendation",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
