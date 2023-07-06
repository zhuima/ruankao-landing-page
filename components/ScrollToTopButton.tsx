// https://stackabuse.com/how-to-scroll-to-top-in-react-with-a-button-component/
"use client";
import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showTopBtn && (
        <button
          onClick={goToTop}
          className="fixed bottom-[10%] sm:bottom-[7%] right-0 m-5 sm:m-0 z-50"
        >
          <IoIosArrowUp className="bg-indigo-500 dark:bg-gray-200 dark:text-darkPrimary text-white rounded-md shadow-lg text-[50px] md:mr-10" />
        </button>
      )}
    </>
  );
};
export default ScrollToTop;
