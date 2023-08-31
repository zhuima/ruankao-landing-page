/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-07-11 10:32:26
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-08-31 17:22:05
 * @FilePath: /ruankao-website/app/feed.xml/route.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import RSS from 'rss'
import videoData from "@/config/videos"
import { allGuides } from "contentlayer/generated";
import { allDocs } from "contentlayer/generated";

export async function GET() {
  const feed = new RSS({
    title: '软考通关宝典',
    description:  "软考通关宝典提供掘金高效率工具计划、倒计时页面、信息系统项目管理师、系统集成项目管理工程师、系统规划与管理师、网络工程师、信息安全工程师等考试的在线培训、考试资讯、免费知识库等考试服务，是一个拥有独立创新的专业学习网站。",
    site_url: 'https://ruankao.eu.org/', // 你的网站域名
    feed_url: 'https://ruankao.eu.org/feed.xml', // 尽可能用绝对 URL
    language: 'zh-CN', // 网站语言代码
    image_url: 'https://ruankao.eu.org/opengraph-image.png', // 放一个叫 opengraph-image.png 的1200x630尺寸的图片到你的 app 目录下即可
    generator: 'RuanKao', // 想写什么就写什么，也可以不提供
    pubDate: new Date(),
  })

  videoData.forEach((video) => {
    feed.item({
    title: video.title,
    description: video.description,
    url: `https://ruankao.eu.org/videos/${video.id}`,
    date: new Date(),
    });
  });

  allGuides.forEach((guide) => {
    feed.item({
    title: guide.title,
    description: guide.description ? guide.description : `资源介绍文档 | ${guide.title}`,
    url: `https://ruankao.eu.org${guide.slug}`,
    date: guide.date,
    });
  });

    allDocs.forEach((doc) => {
    feed.item({
    title: doc.title,
    description: doc.description ? doc.description : `知识库文档 | ${doc.title}`,
    url: `https://ruankao.eu.org${doc.slug}`,
    date: doc.time ? doc.time : new Date(),
    });
  });



  return new Response(feed.xml(), {
    headers: {
      'content-type': 'application/xml'
    }
  })
}