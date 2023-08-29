/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-07-07 16:33:57
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-08-29 14:01:41
 * @FilePath: /ruankao-website/app/sitemap.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
// app/sitemap.js
// https://claritydev.net/blog/nextjs-dynamic-sitemap-pages-app-directory

const URL = 'https://ruankao.eu.org'

export default async function sitemap() {
  const routes = [
    '',
    '/countdown',
    '/docs',
    '/docs/about-ruankao',
    '/docs/about-ruankao-certificates',
    '/docs/low-level',
    '/docs/mid-level',
    '/docs/mid-level/wlgcs',
    '/docs/mid-level/xxxtxmgls',
    '/docs/high-level',
    '/docs/high-level/xxxtxmgls',
    '/docs/high-level/xtghygls',
    '/docs/high-level/xtfxs',
    '/docs/high-level/xtjgsjs',
    '/docs/high-level/wlghsjs',
    '/videos',
    '/videos/10086',
    '/videos/10087',
    '/videos/10088',
    '/videos/10089',
    '/videos/10090',
    '/videos/10091',
    '/videos/10092',
    '/guides',
    '/guides/Exam-Preparation-Guide',
    '/guides/english-chinese-glossary-of-network-planning-designer-terms',
    '/guides/about-the-soft-exam-score',
    '/guides/about-treatises',
    '/guides/repeatedly-practicing-copying-highlights',
    '/guides/daily-clock-in',
    '/guides/ruankao-registration-fee',
    '/guides/which-subject-to-take',
    '/guides/tools-recommendation',
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes]
}
