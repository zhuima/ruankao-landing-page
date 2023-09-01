/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-07-24 10:34:32
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-09-01 15:49:23
 * @FilePath: /ruankao-website/components/doc-footer.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import DocContactCard from "@/components/contactcard";
import CopyPageLink from "@/components/copypagelink";
import { IoPerson, IoLink } from "react-icons/io5"; //https://react-icons.github.io/react-icons/icons?name=io5
export default function DocFooter({ pageTitle }) {
  const copyButtonToast = () => {
    toast.success(`已复制本文链接到剪贴板 🙌`);
  };

  return (
    <>
      <section className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 rounded-lg mt-7 sm:mt-14 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-colors">
        <div className="flex flex-col gap-1">
          <div className="text-lg font-semibold">🎉 你觉得这篇文章怎样？</div>
          <div className="text-muted-foreground md:break-keep">
            <span className="hidden sm:inline">
              有没有引起你灵魂深处的共鸣？如果有其他看法，我在这里留下了联系
              <span className="whitespace-nowrap">方式。</span>
              觉得这篇文章还不错，欢迎分享给
              <span className="whitespace-nowrap">朋友！</span>
            </span>
            <span className="inline sm:hidden">
              我在这里留下了联系
              <span className="whitespace-nowrap">方式。</span>
              如果觉得这篇文章还不错，欢迎分享给
              <span className="whitespace-nowrap">朋友！</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 btn-base text-base text-muted-foreground btn-md sm:btn-lg bg-white border dark:border-black border-neutral-200 dark:hover:border-neutral-800  sm:hover:bg-neutral-200 relative transition-colors">
            <DocContactCard />
            <div className="flex gap-2 justify-center items-center">
              <IoPerson />
              联系作者
            </div>
          </div>
          <div
            onClick={copyButtonToast}
            className="flex-1 btn-base text-base text-muted-foreground btn-md sm:btn-lg bg-white  border dark:border-black border-neutral-200 dark:hover:border-neutral-800  sm:hover:bg-neutral-200 relative transition-colors"
          >
            <CopyPageLink pageTitle={pageTitle} />
            <div className="flex gap-2 justify-center items-center">
              <IoLink />
              复制链接
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
