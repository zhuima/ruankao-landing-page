/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-07-06 13:46:06
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-09-04 11:24:16
 * @FilePath: /ruankao-website/components/guidesearch.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { allGuides } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { CgSearch } from "react-icons/cg";
import { formatDate } from "@/lib/utils";
import { DocsPageHeader } from "@/components/page-header";
import { debounce } from "@/lib/functions";

export default function GuidesSearch() {
  const guides = allGuides
    .filter((guide) => guide.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  const [filteredGuides, setFilteredGuides] = useState([...guides]);
  const searchRef = useRef<HTMLInputElement>(null!);

  /**
   * Handles search functionality with debounce.
   */
  const handleSearch = debounce((value: string) => {
    setFilteredGuides(
      guides.filter(
        (guide) =>
          guide.title.toLowerCase().includes(value.trim().toLowerCase()) ||
          guide.description
            ?.toLowerCase()
            .includes(value.trim().toLowerCase()) ||
          guide.body.code.toLowerCase().includes(value.trim().toLowerCase())
      )
    );
  }, 800);

  /**
   * Handles automatic search functionality when a specific keyboard shortcut is pressed.
   */
  function handleAutoSearch(e: any) {
    if (e.code === "Slash" && e.ctrlKey) {
      searchRef.current.focus();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleAutoSearch);
    return () => document.removeEventListener("keydown", handleAutoSearch);
  }, []);

  return (
    <div className="py-6 lg:py-10">
      <DocsPageHeader
        heading="资源 && 工具"
        text="软考备考试工具推荐、备考计划、备考案例."
      />

      <div className="relative group mx-auto text-slate-400 dark:text-gray-300 bg-white dark:bg-darkSecondary rounded-md">
        <CgSearch className="ml-3 w-5 h-5 absolute top-[50%] -translate-y-1/2 z-10" />
        <input
          ref={searchRef}
          className="mt-10 mb-10 px-12  py-3 w-full  outline-none transition duration-200 bg-transparent font-medium font-inter lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-400  dark:highlight-white/5 dark:hover:bg-darkSecondary/90 mx-auto flex relative  group focus:ring-slate-400"
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Press (CTRL + /) to search... "
        />
      </div>
      {filteredGuides.length != 0 ? (
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {filteredGuides.map((guide) => (
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
        <div className="font-inter text-center font-medium dark:text-gray-400">
          未匹配到对应信息
        </div>
      )}
    </div>
  );
}
