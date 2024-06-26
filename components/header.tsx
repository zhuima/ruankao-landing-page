/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-06-06 10:41:34
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-07-28 13:53:17
 * @FilePath: /ruankao-website/components/header.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
"use client";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { useScrollPosition } from "../hooks/useScrollPosition";

const Header = () => {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow  ${
        scrollPosition > 0
          ? "shadow-2xl shadow-cyan-200/50 bg-opacity-70 backdrop-blur-lg backdrop-filter"
          : "shadow-none"
      }`}
    >
      <div className="xl:container m-auto px-6 md:px-12 lg:px-6">
        <div className="flex flex-row items-center justify-between h-20 w-full">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link
              className="flex items-center relative z-10"
              href="/"
              aria-label="logo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">软考通关宝典</span>
            </Link>
          </div>

          <MobileMenu />

          {/* Desktop navigation */}
          <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent  lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
            <div className="lg:pr-4">
              <ul className="space-y-6 tracking-wide font-medium  lg:text-sm lg:flex lg:space-y-0 [&:not(:hover)>li]:opacity-100 [&>li]:transition-opacity">
                <li className="[&:not(:hover)]:opacity-50 block md:px-4 ">
                <Link
                href="https://xiaobaot.best"
                target="_blank"
                className="hover:text-[#2752f4]"
                aria-label="xiaobaot.best"
              >
                <span className="relative inline-block">
                  <span className="w-6 h-6 text-gray-700 fill-current">
                    小报童专栏甄选
                  </span>
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    推荐
                  </span>
                </span>
              </Link>
                </li>
                <li className="[&:not(:hover)]:opacity-50 block md:px-4 ">
                  <Link href="/countdown">软考倒计时</Link>
                </li>
                <li className="[&:not(:hover)]:opacity-50  block md:px-4 ">
                  <Link href="/docs">知识库</Link>
                </li>
                <li className="[&:not(:hover)]:opacity-50  block md:px-4 ">
                  <Link href="/videos">视频教程</Link>
                </li>
                <li className="[&:not(:hover)]:opacity-50  block md:px-4 ">
                  <Link href="/guides">资源</Link>
                </li>
              </ul>
            </div>

            <div className="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
              <Link
                href="#"
                className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-sky-600/10 dark:focus:before:bg-sky-400/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
              >
                <span className="relative text-sm font-semibold text-primary dark:text-primaryLight">
                  注册
                </span>
              </Link>
              <Link
                href="#"
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                <span className="relative text-sm font-semibold text-white dark:text-gray-900 ">
                  登陆
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
