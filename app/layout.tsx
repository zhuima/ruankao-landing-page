/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-07-06 15:11:36
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2024-01-28 17:24:25
 * @FilePath: /ruankao-website/app/layout.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import "./globals.css";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Feedback from "@/components/feedback";
import ScrollToTop from "@/components/ScrollToTopButton";
import StickyBanner from "@/components/stickybanner";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "软考通关宝典",
  description:
    "软考通关宝典提供掘金高效率工具计划、倒计时页面、信息系统项目管理师、系统集成项目管理工程师、系统规划与管理师、网络工程师、信息安全工程师等考试的在线培训、考试资讯、免费知识库等考试服务，是一个拥有独立创新的专业学习网站。",
  keywords: [
    "软考",
    "软考通关",
    "软考报名入口官网",
    "软考成绩查询",
    "软考官网",
    "软考报名",
    "网络工程师",
    "计算机软考",
    "软考通关宝典",
    "软考报名资料",
  ],
  alternates: {
    canonical: "https://ruankao.eu.org/",
    types: {
      "application/rss+xml": [{ url: "feed.xml", title: "RSS 订阅" }],
    },
  },
  openGraph: {
    title: "软考通关宝典",
    description:
      "软考通关宝典提供掘金高效率工具计划、倒计时页面、信息系统项目管理师、系统集成项目管理工程师、系统规划与管理师、网络工程师、信息安全工程师等考试的在线培训、考试资讯、免费知识库等考试服务，是一个拥有独立创新的专业学习网站。",
    images: "/ruankao-website.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      {/* Clarity Script */}
      <Script strategy="lazyOnload" id="clarity-script">
        {`
 (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ksu044b2eg");
        `}
      </Script>
      <body className={inter.className}>
        <StickyBanner />
        <NextTopLoader />
        <Header />
        {children}
        <Analytics />
        <Feedback />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
