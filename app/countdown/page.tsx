/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-06-09 10:11:31
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-07-24 11:31:30
 * @FilePath: /ruankao-website/app/countdown/page.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { Metadata } from "next";
import CountDown from "@/components/countdown";
import "@/components/countdown.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "软考倒计时工具 | 软考倒计时 | 软考通关必备工具 | 软考工具 | 软考知识库 | 软考通关宝典",
    description:
      "软考时间，2023年下半年软考，软考倒计时工具，软考倒计时，软考通关必备工具，软考工具，软考知识库，软考通关宝典",
  };
}

const page = () => {
  return (
    <div className="flex w-full h-screen flex-col items-center bg-[#1e1f29]">
      <h1 className="font-['Red Hat Text'] font-bold text-white text-4xl mt-10 sm:mt-10  md:mt-10 xl:mt-30 lg:mt-40  md:text-6xl xl:text-8xl tracking-[6.14px] text-center ">
        软 考 倒 计 时
      </h1>
      <CountDown />
    </div>
  );
};

export default page;
