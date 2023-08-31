/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-07-06 13:45:48
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-08-31 10:32:13
 * @FilePath: /ruankao-website/app/(docs)/docs/layout.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { Metadata } from "next";
import { docsConfig } from "@/config/docs";
import { DocsSidebarNav } from "@/components/sidebar-nav";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "软考完全解读 | 软考刷题工具 | 软考刷题小程序 | 软考刷题APP | 软考真题 | 软考知识库 | 软考通关宝典",
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

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
      <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
        <DocsSidebarNav items={docsConfig.sidebarNav} />
      </aside>
      {children}
    </div>
  );
}
