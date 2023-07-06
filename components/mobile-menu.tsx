"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="visible my-auto lg:invisible p-2 text-xl text-gray-800 rounded-sm hover:bg-gray-100 active:bg-turbo-gray-100 cursor-pointer">
      {/* Hamburger button */}
      {/* <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button> */}

      <button
        className="relative w-10 h-10 bg-white focus:outline-none"
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Open main menu</span>
        <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <span
            aria-hidden="true"
            className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
              mobileNavOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
              mobileNavOpen && "opacity-0"
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
              mobileNavOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          ></span>
        </div>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={
          mobileNavOpen
            ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0.8 }
        }
      >
        <ul className="bg-gray-800 px-4 py-2">
          <li>
            <Link
              href="/countdown"
              className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
              onClick={() => setMobileNavOpen(false)}
            >
              <span>倒计时工具</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
              onClick={() => setMobileNavOpen(false)}
            >
              <span>知识库</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.bilibili.com/video/BV1Ce411N7pV/"
              className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
              onClick={() => setMobileNavOpen(false)}
            >
              <span>在线教程</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
              onClick={() => setMobileNavOpen(false)}
            >
              <span>教材</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
