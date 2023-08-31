'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import wechat from '../assets/wechat.jpg'
import { MdRssFeed } from 'react-icons/md'

const Heading = () => {
  return (
    <div className="absolute bottom-20 inset-x-1/2 -translate-x-1/2  bg-white border border-gray-200  shadow-md rounded-md w-32 h-32">
      <Image
        src={wechat}
        alt="二维码"
        className="w-full h-full"
        width={480}
        height={480}
        priority={true}
      />
      <p className="font-['Red Hat Text'] font-semi-bold text-[#8385A9] text-sm text-center">
        欢迎关注二维码
      </p>
      <p className="font-['Red Hat Text'] font-semi-bold text-[#8385A9] text-sm text-center">
        获取更多资料
      </p>
    </div>
  )
}

const Footer = () => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          href="#"
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
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 软考通关宝典 —
          <Link
            href="https://www.ruankao.eu.org/"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @zhuima
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <div
            className="relative  mt-1 ml-2 mr-4 rounded-md opacity-80 hover:opacity-100 transition-opacity"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="WeChat"
              role="img"
              fill="#fff"
              className="text-gray-500 rounded-full w-5 h-5 "
            >
              <path
                width="20"
                height="20"
                rx="15%"
                fill="#00c70a"
                d="M0.114 0h19.772A0.114 0.114 0 0 1 20 0.114v19.772a0.114 0.114 0 0 1 -0.114 0.114H0.114A0.114 0.114 0 0 1 0 19.886V0.114A0.114 0.114 0 0 1 0.114 0z"
              />
              <path d="M15.703 14.414c0.898 -0.664 1.484 -1.641 1.484 -2.734 0 -1.993 -1.953 -3.594 -4.336 -3.594s-4.297 1.602 -4.297 3.594 1.914 3.594 4.297 3.594c0.508 0 0.977 -0.078 1.407 -0.195 0.157 -0.039 0.313 0 0.352 0.039l0.977 0.547c0.117 0.078 0.234 0 0.195 -0.157l-0.234 -0.859c0 -0.117 0.078 -0.195 0.157 -0.234m-4.297 -3.32a0.586 0.586 0 1 1 0 -1.133 0.586 0.586 0 0 1 0 1.133m2.891 0a0.586 0.586 0 1 1 0 -1.133 0.586 0.586 0 0 1 0 1.133" />
              <path d="M8.008 4.102c-2.852 0 -5.157 1.953 -5.157 4.336 0 1.289 0.664 2.461 1.758 3.243 0.117 0.078 0.195 0.195 0.157 0.391L4.492 13.008c-0.039 0.195 0.117 0.273 0.234 0.234l1.172 -0.664c0.117 -0.078 0.273 -0.117 0.43 -0.078 1.016 0.313 1.875 0.234 1.993 0.234 -0.938 -3.282 2.305 -5.157 4.805 -5 -0.391 -2.032 -2.539 -3.633 -5.118 -3.633M6.288 7.734a0.703 0.703 0 1 1 0 -1.368 0.703 0.703 0 0 1 0 1.368m3.477 0a0.703 0.703 0 1 1 0 -1.368 0.703 0.703 0 0 1 0 1.368" />
            </svg>
            {isHovering && <Heading />}
          </div>
          <Link href="/feed.xml" rel="noreferrer" target="_blank">
            <MdRssFeed color="#ee802f" size="30px" />
          </Link>
          {/* <a className="text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a> */}
        </span>
      </div>
    </footer>
  )
}

export default Footer
