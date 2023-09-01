/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-05-10 15:05:55
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-09-01 14:50:58
 * @FilePath: /ruankao-website/app/videos/page.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import VideoSearch from "@/components/videosearch";

export const metadata = {
  title:
    "软考备考资料 | 软考通关宝典 | 软考知识库 | 软考教程 | 软考报名 | 软考成绩 | 软考证书",
  description:
    "网络海量计算机软考备考资源，助你一次通关，包含免费优秀视频资源和文档. ",
  keywords: [
    "软考备考资料",
    "软考备考视频",
    "软考最新视频",
    "免费优秀好评视频",
    "免费软考视频",
    "软考视频",
    "软考视频教程",
  ],
};

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <VideoSearch />
    </div>
  );
}
