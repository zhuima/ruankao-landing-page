/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-07-07 16:33:57
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-07-11 13:45:55
 * @FilePath: /ruankao-website/app/sitemap.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// app/sitemap.js
// https://claritydev.net/blog/nextjs-dynamic-sitemap-pages-app-directory
import { MetadataRoute } from 'next'


const URL = "https://ruankao.eu.org";

export default function sitemap(): MetadataRoute.Sitemap {
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
    lastModified: new Date(),
  }));

  return [...routes];
}
