/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-07-06 13:46:06
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-07-10 14:03:38
 * @FilePath: /ruankao-website/app/(docs)/guides/page.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import Link from "next/link";
import { allGuides } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { formatDate } from "../../../lib/utils";
import { DocsPageHeader } from "../../../components/page-header";

export const metadata = {
  title:
    "软考备考工具 | 软考刷题工具 | 软考刷题小程序 | 软考刷题APP | 软考真题 | 软考知识库 | 软考通关宝典",
  description:
    "软考备考工具，软考刷题工具，软考刷题小程序，软考通关必备工具，软考工具，软考知识库，软考通关宝典",
};

export default function GuidesPage() {
  const guides = allGuides
    .filter((guide) => guide.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <div className="py-6 lg:py-10">
      <DocsPageHeader
        heading="资源 && 工具"
        text="软考备考试工具推荐、备考计划、备考案例."
      />
      {guides?.length ? (
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {guides.map((guide) => (
            <article
              key={guide._id}
              className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              {guide.featured && (
                <span className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium">
                  Featured
                </span>
              )}
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-medium tracking-tight">
                    {guide.title}
                  </h2>
                  {guide.description && (
                    <p className="text-muted-foreground">{guide.description}</p>
                  )}
                </div>
                {guide.date && (
                  <p className="text-sm text-muted-foreground">
                    {formatDate(guide.date)}
                  </p>
                )}
              </div>
              <Link href={guide.slug} className="absolute inset-0">
                <span className="sr-only">View</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No guides published.</p>
      )}
    </div>
  );
}
