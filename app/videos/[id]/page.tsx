/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-05-10 15:05:55
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-08-28 14:15:50
 * @FilePath: /ruankao-website/app/videos/[id]/page.tsx
 * @Description: https://www.bilibili.com/video/BV1Ce411N7pV/
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import Image from "next/image";
import Link from "next/link";
import videosData from "@/config/videos";
import { DocsPageHeader } from "@/components/page-header";

function filterVideos(videos, id) {
  // console.log("full project data", videos);
  const video = videos.find((video) => video.id.toString() === id);
  if (video) {
    return video;
  } else {
    return null;
  }
}

export default function Page({ params }) {
  const video = filterVideos(videosData, params.id);

  console.log("videoData", video);
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container py-12">
        <DocsPageHeader heading="视频详情" text="." />
      </div>

      <div className="container">
        <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          <div className="lg:row-end-1 lg:col-span-4">
            <div className="mt-6 overflow-hidden bg-gray-100 rounded-xl">
              <Image
                src={video.imgSrc}
                width="640"
                height="150"
                className="block w-full rounded-t-xl"
                unoptimized
                alt={video.title}
              />
            </div>
          </div>

          <div className="w-full max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
            <div className="flex flex-col-reverse">
              <div className="flex justify-between w-full lg:mt-10">
                <div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                    概要
                  </h2>

                  <div className="flex items-center mt-2">
                    <Link href="https://ruankao.eu.org/videos" target="_blank">
                      <Image
                        className="rounded-full flex-shrink-0 mr-3"
                        alt="Tailus avatar"
                        width="24"
                        height="24"
                        src="https://d1w019qw3bn26k.cloudfront.net/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdXNDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c2c5056efaa642e15f433c6915f8581d03680525/Tailus"
                      ></Image>
                    </Link>{" "}
                    <div className="text-md">
                      <span className="text-gray-600">By </span>
                      <Link
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        {video.author}
                      </Link>
                    </div>
                  </div>
                </div>

                <p className="ml-4 text-3xl font-bold sm:ml-6 text-indigo-600 font-display">
                  Free
                </p>
              </div>
            </div>

            <p className="mt-6 leading-relaxed text-gray-700 text-17px">
              {video.description}
            </p>

            <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-4 sm:grid-cols-2">
              <Link
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-2xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                target="_blank"
                href={video.href}
              >
                获取资源
              </Link>
            </div>
          </div>

          <div className="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">
            <div className="pb-5 border-b border-gray-200">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                关于 {video.title}
              </h3>
            </div>
            <div className="py-3 prose text-gray-700 break-words xl:pt-6 xl:pb-0 prose-indigo max-w-none">
              <div className="trix-content">
                <div>{video.description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
