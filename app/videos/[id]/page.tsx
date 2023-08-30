/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-05-10 15:05:55
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-08-30 15:20:28
 * @FilePath: /ruankao-website/app/videos/[id]/page.tsx
 * @Description: https://www.bilibili.com/video/BV1Ce411N7pV/
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import Image from "next/image";
import Link from "next/link";
import videosData from "@/config/videos";
import { DocsPageHeader } from "@/components/page-header";
import { Metadata } from "next";
import { absoluteUrl, cn } from "@/lib/utils";

function filterVideos(videos, id) {
  // console.log("full project data", videos);
  const video = videos.find((video) => video.id.toString() === id);
  if (video) {
    return video;
  } else {
    return null;
  }
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { id } = params;
  const video = await filterVideos(videosData, id);
  if (!video) {
    return {};
  }

  const url = process.env.NEXT_PUBLIC_APP_URL;

  const ogUrl = new URL(`${video.imgSrc}`);
  ogUrl.searchParams.set("heading", video.title);
  ogUrl.searchParams.set("type", "Guide");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: `${video.title} | 软考资源 | 软考真题 | 软考知识库 | 软考视频 | 软考通关宝典`,
    description: `${video.title}、${video.description}`,
    openGraph: {
      title: video.title,
      description: video.description,
      type: "article",
      url: `${url}/videos/${video.id}`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: video.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: video.title,
      description: video.description,
      images: [ogUrl.toString()],
    },
  };
}

export async function generateStaticParams() {
  return videosData.map((video) => ({
    id: video.id.toString(),
  }));
}

export default function Page({ params }) {
  const { id } = params;
  const video = filterVideos(videosData, id);

  console.log("videoData", video);
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container py-8">
        <DocsPageHeader heading={`${video.title}资源详情`} text=" " />
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

            <div className="pt-10 mt-10 border-t border-gray-200 ">
              <div className="font-medium leading-6 tracking-wider text-left text-gray-500 uppercase text-md">
                资源热度评分
              </div>
              <div className="mt-4 space-y-5 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-5 ">
                <div className="flex items-center font-medium leading-8 tracking-normal text-gray-700 lg:col-span-1 text-md">
                  <div className="flex items-center justify-center w-8 h-8 mr-4 rounded-md shrink-0 bg-indigo-50">
                    <svg
                      className="w-5 h-5 text-indigo-500"
                      x-description="Heroicon name: check-circle"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>资源热度: {video.new}</div>
                </div>
                <div className="flex items-center font-medium leading-8 tracking-normal text-gray-700 lg:col-span-1 text-md">
                  <div className="flex items-center justify-center w-8 h-8 mr-4 rounded-md shrink-0 bg-indigo-50">
                    <svg
                      className="w-5 h-5 text-indigo-500"
                      x-description="Heroicon name: check-circle"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>资源评分: {video.score}</div>
                </div>
              </div>
            </div>

            <div className="pt-10 mt-10 border-t border-gray-200 ">
              <div className="font-medium leading-6 tracking-wider text-left text-gray-500 uppercase text-md">
                资源描述
              </div>
              <div className="mt-4 text-gray-800">
                <div className="flex justify-between my-3">
                  <div className="w-3/5 font-medium leading-8 text-gray-500 text-md max-w-xxxs">
                    讲师
                  </div>
                  <div className="leading-8 text-right max-w-xxs">
                    <span className="text-md font-medium text-indigo-600 hover:text-indigo-500">
                      {video.author}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between my-3">
                  <div className="w-3/5 font-medium leading-8 text-gray-500 text-md max-w-xxxs">
                    标签
                  </div>
                  <div className="leading-8 text-right max-w-xxs">
                    <span className="text-md font-medium text-indigo-600 hover:text-indigo-500">
                      {video.tag}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between my-3">
                  <div className="w-3/5 font-medium leading-8 text-gray-500 text-md max-w-xxxs">
                    最后更新时间
                  </div>
                  <div className="leading-8 text-right max-w-xxs">
                    <span className="text-md font-medium text-indigo-600 hover:text-indigo-500">
                      {video.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">
            <div className="pb-5 border-b border-gray-200">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                关于 {video.title} 资源说明
              </h3>
            </div>
            <div className="py-3 prose text-gray-700 break-words xl:pt-6 xl:pb-0 prose-indigo max-w-none">
              <div className="trix-content">
                <div>{video.description}</div>
                <div className="mt-6 overflow-hidden rounded">
                  <Image
                    src={video.rimg}
                    height="404"
                    // @ts-ignore
                    width="auto"
                    alt={video.title}
                    priority={true}
                  />
                </div>
                所有资源收集来源于网络，如有侵权请联系我们删除。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
