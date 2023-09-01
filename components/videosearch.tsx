/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-05-10 15:05:55
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-09-01 14:58:55
 * @FilePath: /ruankao-website/components/videosearch.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { CgSearch } from "react-icons/cg";

import Image from "next/image";
import Link from "next/link";
import videosData from "@/config/videos";
import { DocsPageHeader } from "@/components/page-header";

export default function VideoSearch() {
  const [filteredVideos, setFilteredVideos] = useState([...videosData]);
  const searchRef = useRef<HTMLInputElement>(null!);

  /**
   * Handles search functionality with debounce.
   */
  const handleSearch = (value: string) => {
    setFilteredVideos(
      videosData.filter(
        (video) =>
          video.title.toLowerCase().includes(value.trim().toLowerCase()) ||
          video.description
            ?.toLowerCase()
            .includes(value.trim().toLowerCase()) ||
          video.author.toLowerCase().includes(value.trim().toLowerCase()) ||
          video.tag.toLowerCase().includes(value.trim().toLowerCase())
      )
    );
  };

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
    <div className="container py-12">
      <DocsPageHeader
        heading="推荐视频"
        text="网络海量计算机软考备考资源，助你一次通关，包含免费优秀视频资源和文档. "
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
      <section className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {filteredVideos.length != 0 ? (
          filteredVideos.map((v) => (
            <article
              key={v.id}
              className="group mx-auto w-full max-w-md transform cursor-pointer rounded-b-xl shadow-xl duration-500 hover:-translate-y-2"
            >
              <div className="relative h-full w-full flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="relative flex-shrink-0">
                  <Image
                    src={v.imgSrc}
                    width="640"
                    height="420"
                    className="block w-full rounded-t-xl"
                    unoptimized
                    alt=""
                    blurDataURL={v.imgSrc}
                    placeholder="blur"
                  />
                  <span className="absolute bottom-0 right-0 inline-flex items-center px-3 py-1 mr-4 -mb-3 text-xs font-medium leading-tight text-gray-800 bg-gray-100 border rounded-full">
                    1200 reviews
                  </span>
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                    <div>
                      {v.title}
                      <p className="mt-3 text-base leading-6 text-gray-500">
                        {v.description}
                      </p>
                    </div>
                    <p className="mt-3 text-sm font-medium leading-5">
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium leading-tight text-blue-800 bg-blue-100 rounded-full">
                        #{v.tag}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center p-6 bg-gray-100 relative">
                    <div className="flex-shrink-0"></div>
                    <div className="ml-3 absolute left-4">
                      <p className="text-sm font-medium leading-5 text-gray-900">
                        {v.author}
                      </p>
                      <div className="text-xs leading-5 text-gray-600">
                        {v.time}
                      </div>
                    </div>
                    <Link
                      href={`/videos/${v.id}`}
                      className="absolute right-4 mx-auto text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                      <span className="relative text-sm font-semibold text-white dark:text-gray-900 ">
                        开始学习
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="font-inter text-center font-medium dark:text-gray-400">
            未匹配到对应信息
          </div>
        )}
      </section>
    </div>
  );
}
