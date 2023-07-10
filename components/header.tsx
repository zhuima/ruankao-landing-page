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
                  <Link href="/countdown">倒计时工具</Link>
                </li>
                <li className="[&:not(:hover)]:opacity-50  block md:px-4 ">
                  <Link href="/docs">知识库</Link>
                </li>
                <li className="[&:not(:hover)]:opacity-50  block md:px-4 ">
                  <Link
                    href="https://www.bilibili.com/video/BV1Ce411N7pV/"
                    target="_blank"
                  >
                    在线教程
                  </Link>
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
