/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-07-06 13:45:47
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-08-31 10:31:27
 * @FilePath: /ruankao-website/app/(docs)/guides/layout.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */

import { Metadata } from "next";

interface GuidesLayoutProps {
  children: React.ReactNode;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "软考备考资讯 | 软考刷题工具 | 软考刷题小程序 | 软考刷题APP | 软考真题 | 软考知识库 | 软考通关宝典",
    description:
      "软考备考工具，软考刷题工具，软考刷题小程序，软考通关必备工具，软考工具，软考知识库，软考通关宝典",
    keywords: [
      "软考报名入口官网",
      "软考成绩查询",
      "软考官网",
      "软考报名",
      "网络工程师",
      "计算机软考",
      "软考",
      "软考通关宝典",
      "软考报名资料",
    ],
  };
}

export default function GuidesLayout({ children }: GuidesLayoutProps) {
  return <div className="mx-auto max-w-5xl">{children}</div>;
}
