"use client";
import React from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import Link from "next/link";

const Header = () => {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrollPosition > 0
          ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter"
          : "shadow-none"
      }`}
    >
      <div className="xl:container m-auto px-6 md:px-12 lg:px-6">
        <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
          <div className="w-full items-center flex justify-between lg:w-auto">
            <Link
              className="flex items-center relative z-10"
              href="/"
              aria-label="logo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">软考通关宝典</span>
            </Link>
            <label
              htmlFor="hbr"
              className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
            >
              <div
                aria-hidden="true"
                className="m-auto h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
              ></div>
              <div
                aria-hidden="true"
                className="m-auto mt-2 h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"
              ></div>
            </label>
          </div>
          <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
            <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
              <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                <li>
                  <Link
                    href="/countdown"
                    className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                  >
                    <span>倒计时工具</span>
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                  >
                    <span>知识库</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                  >
                    <span>在线教程</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                  >
                    <span>教材</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
              <a
                href="#"
                className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-sky-600/10 dark:focus:before:bg-sky-400/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
              >
                <span className="relative text-sm font-semibold text-primary dark:text-primaryLight">
                  注册
                </span>
              </a>
              <a
                href="#"
                className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-600 dark:before:bg-sky-400 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
              >
                <span className="relative text-sm font-semibold text-white dark:text-gray-900">
                  登陆
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
