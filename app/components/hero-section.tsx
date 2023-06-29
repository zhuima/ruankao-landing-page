"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useAos } from "../hooks/useAos";
const HeroSection = () => {
  useAos();
  return (
    <div className="bg-white relative pt-20 pb-20 lg:pt-40 dark:bg-gray-900">
      <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
        <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">
          专业人士带你 <br className="block" />
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            成功上岸
          </span>
          .
        </h1>
        <div className="lg:flex">
          <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
            <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
              独创的 6
              步学习法，历经数年围绕教程大纲精心打磨制作的教程，一对一辅导论文.
            </p>
            <span className="block font-semibold text-gray-500 dark:text-gray-400">
              我们坚信: 授人以鱼，不如授人以渔.
            </span>
            <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
              <Link
                aria-label="add to slack"
                href="#"
                className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30"
              >
                <div className="flex justify-center space-x-4">
                  <Image
                    className="w-6 h-6"
                    src="https://tailus.io/sources/blocks/tech-startup/preview/images/slack.png"
                    alt="slack logo"
                    loading="lazy"
                    width="128"
                    height="128"
                    priority={true}
                  />
                  <span className="hidden font-medium md:block dark:text-white">
                    Bilibili
                  </span>
                </div>
              </Link>
              <Link
                aria-label="add to chat"
                href="#"
                className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30"
              >
                <div className="flex justify-center space-x-4">
                  <Image
                    className="w-6 h-6"
                    src="https://tailus.io/sources/blocks/tech-startup/preview/images/chat.png"
                    alt="chat logo"
                    loading="lazy"
                    width="128"
                    height="128"
                    priority={true}
                  />
                  <span className="hidden font-medium md:block dark:text-white">
                    微信群
                  </span>
                </div>
              </Link>
              <Link
                aria-label="add to zoom"
                href="#"
                className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30"
              >
                <div className="flex justify-center space-x-4">
                  <Image
                    className="w-6 h-6"
                    src="https://tailus.io/sources/blocks/tech-startup/preview/images/zoom.png"
                    alt="chat logo"
                    loading="lazy"
                    width="128"
                    height="128"
                    priority={true}
                  />
                  <span className="hidden font-medium md:block dark:text-white">
                    腾讯会议
                  </span>
                </div>
              </Link>
            </div>

            {/* <div className="dark:text-gray-300">
              🔥🌟
              <span>Other integrations :</span>
              <a
                href="#"
                className="font-semibold text-gray-700 dark:text-gray-200"
              >
                Discord,
              </a>
              <a
                href="#"
                className="font-semibold text-gray-700 dark:text-gray-200"
              >
                Telegram
              </a>
            </div> */}

            {/* <div className="pt-12 flex gap-6 lg:gap-12 justify-between grayscale lg:w-2/3">
              <Image
                src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/airbnb.svg"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt=""
                width="128"
                height="128"
              />
              <Image
                src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/ge.svg"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt=""
                width="128"
                height="128"
              />
              <Image
                src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/coty.svg"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt=""
                width="128"
                height="128"
              />
              <Image
                src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/microsoft.svg"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt=""
                width="128"
                height="128"
              />
            </div> */}
          </div>
          <div className="mt-2 md:mt-0 lg:absolute -right-10 lg:w-7/12">
            <div className="relative w-full">
              <div
                aria-hidden="true"
                className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"
              ></div>
              <Image
                src="https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg"
                className="relative w-full"
                alt="wath illustration"
                loading="lazy"
                width={320}
                height={480}
                style={{ height: "480px", width: "100%" }}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
