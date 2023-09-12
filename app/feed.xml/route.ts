/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-07-11 10:32:26
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-09-11 17:04:27
 * @FilePath: /ruankao-website/app/feed.xml/route.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import RSS from 'rss'
import { allGuides } from 'contentlayer/generated'
import { allDocs } from 'contentlayer/generated'
import { allVideos } from 'contentlayer/generated'


export async function GET() {
  const feed = new RSS({
    title: '软考通关宝典',
    description:
      '软考通关宝典提供掘金高效率工具计划、倒计时页面、信息系统项目管理师、系统集成项目管理工程师、系统规划与管理师、网络工程师、信息安全工程师等考试的在线培训、考试资讯、免费知识库等考试服务，是一个拥有独立创新的专业学习网站。',
    site_url: 'https://ruankao.eu.org/', // 你的网站域名
    feed_url: 'https://ruankao.eu.org/feed.xml', // 尽可能用绝对 URL
    language: 'zh-CN', // 网站语言代码
    image_url: 'https://ruankao.eu.org/opengraph-image.png', // 放一个叫 opengraph-image.png 的1200x630尺寸的图片到你的 app 目录下即可
    generator: 'RuanKao', // 想写什么就写什么，也可以不提供
    pubDate: new Date(),
    copyright: `&copy; {new Date().getFullYear().toString()} by zhuima`,
  })

  allVideos.forEach((video) => {
    feed.item({
      title: video.title,
      description: video.description
        ? video.description
        : `视频教程资源介绍文档 | ${video.title}`,
      guid: `https://ruankao.eu.org${video.slug}`,
      url: `https://ruankao.eu.org${video.slug}`,
      date: new Date(),
    })
  })

  allGuides.forEach((guide) => {
    feed.item({
      title: guide.title,
      description: guide.description
        ? guide.description
        : `资源介绍文档 | ${guide.title}`,
      guid: `https://ruankao.eu.org${guide.slug}`,
      url: `https://ruankao.eu.org${guide.slug}`,
      date: guide.date,
    })
  })

  allDocs.forEach((doc) => {
    feed.item({
      title: doc.title,
      description: doc.description
        ? doc.description
        : `知识库文档 | ${doc.title}`,
      guid: `https://ruankao.eu.org${doc.slug}`,
      url: `https://ruankao.eu.org${doc.slug}`,
      date: doc.time ? doc.time : new Date(),
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  })
}
