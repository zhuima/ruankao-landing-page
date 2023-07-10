/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-07-06 13:45:47
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-07-10 13:58:47
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
      "软考备考工具 | 软考刷题工具 | 软考刷题小程序 | 软考刷题APP | 软考真题 | 软考知识库 | 软考通关宝典",
    description:
      "软考备考工具，软考刷题工具，软考刷题小程序，软考通关必备工具，软考工具，软考知识库，软考通关宝典",
  };
}

export default function GuidesLayout({ children }: GuidesLayoutProps) {
  return <div className="mx-auto max-w-5xl">{children}</div>;
}
