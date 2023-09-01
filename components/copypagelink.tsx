/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-07-24 10:35:44
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-09-01 10:31:22
 * @FilePath: /ruankao-website/components/copypagelink.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
"use client";
// import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

export default function CopyPageLink({ pageTitle }) {
  // const copyButton = useRef<HTMLButtonElement>(null);

  // useEffect(() => {
  //   copyButton.current?.addEventListener("click", () => {
  //     // 获取当前页面的超链接
  //     const currentURL = window.location.href;
  //     // const currentPageTitle = document.title;
  //     const copyText = pageTitle + " " + currentURL;

  //     // 将文本写入剪贴板
  //     navigator.clipboard.writeText(copyText).then(
  //       () => {
  //         console.error("已复制本文链接到剪贴板 🙌");
  //         toast.success("已复制本文链接到剪贴板 🙌");
  //       },
  //       (err) => {
  //         console.error(err);
  //         toast.error("无法复制到剪贴板: ", err);
  //       }
  //     );
  //   });
  // }, []);

  // copy to clipboard functions
  function copyTextToClipboard(pageTitle: string) {
    const currentURL = window.location.href;
    const copyText = pageTitle + " " + currentURL;
    if (!navigator.clipboard) {
      toast.error("出错了，无法复制到剪贴板");
      return;
    }
    navigator.clipboard.writeText(copyText).then(
      function () {
        console.error("已复制本文链接到剪贴板 🙌");
        toast.success("已复制本文链接到剪贴板 🙌");
      },
      function (err) {
        console.error(err);
        toast.error("无法复制到剪贴板: ", err);
      }
    );
  }

  return (
    <button
      aria-label="复制本页链接"
      type="button"
      title="复制本页链接"
      // ref={copyButton}
      className="w-full h-full absolute bg-transparent inset-0 ring-default"
      onClick={() => copyTextToClipboard(pageTitle)}
    ></button>
  );
}
