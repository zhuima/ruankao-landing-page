/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-05-10 15:05:55
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-07-28 16:53:18
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
  return videos.find((video) => video.id === id);
}

export default function Page({ params }) {
  const videoData = filterVideos(videosData, params.id);

  console.log("videoData", videoData);
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container py-12">
        <DocsPageHeader heading="视频详情" text="." />
      </div>

      <div className="container">
        {/* 123 */}

        {/* 456 */}
      </div>
    </div>
  );
}
