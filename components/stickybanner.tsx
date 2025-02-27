/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-09-06 14:03:11
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2024-01-28 21:41:48
 * @FilePath: /ruankao-website/components/stickybanner.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
"use client";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const StickyBanner = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 py-2.5 px-6 sm:px-3.5 sm:before:flex-1">
          <svg
            viewBox="0 0 577 310"
            aria-hidden="true"
            className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl"
          >
            <path
              id="1d77c128-3ec1-4660-a7f6-26c7006705ad"
              fill="url(#49a52b64-16c6-4eb9-931b-8e24bf34e053)"
              fillOpacity=".3"
              d="m142.787 168.697-75.331 62.132L.016 88.702l142.771 79.995 135.671-111.9c-16.495 64.083-23.088 173.257 82.496 97.291C492.935 59.13 494.936-54.366 549.339 30.385c43.523 67.8 24.892 159.548 10.136 196.946l-128.493-95.28-36.628 177.599-251.567-140.953Z"
            />
            <defs>
              <linearGradient
                id="49a52b64-16c6-4eb9-931b-8e24bf34e053"
                x1="614.778"
                x2="-42.453"
                y1="26.617"
                y2="96.115"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            viewBox="0 0 577 310"
            aria-hidden="true"
            className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl"
          >
            <use href="#1d77c128-3ec1-4660-a7f6-26c7006705ad" />
          </svg>
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4">
            <p className="text-sm leading-6 text-gray-900">
              <strong className="font-semibold">2025年度上半年</strong>
              <svg
                viewBox="0 0 2 2"
                className="mx-2 inline h-0.5 w-0.5 fill-current"
                aria-hidden="true"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              让我们扬帆起航，一战上岸！
            </p>

            {/* <Link
              className="flex-none rounded-full bg-gray-900 py-1 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              href="https://bm.ruankao.org.cn/sign/welcome"
              target="_blank"
            >
              立即报名 <span aria-hidden="true">&rarr;</span>
            </Link> */}
          </div>
          <div className="flex flex-1 justify-end">
            <button
              type="button"
              className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
              onClick={handleClose}
            >
              <span className="sr-only">事事顺遂</span>
              <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyBanner;
