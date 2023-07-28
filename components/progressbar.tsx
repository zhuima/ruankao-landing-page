// /*
//  * @Author: zhuima zhuima314@gmail.com
//  * @Date: 2023-07-28 17:23:15
//  * @LastEditors: zhuima zhuima314@gmail.com
//  * @LastEditTime: 2023-07-28 18:32:16
//  * @FilePath: /ruankao-website/components/progressbar.tsx
//  * @Description:
//  *
//  * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
//  */
// "use client";
// import React from "react";

// import { useEffect, useState } from "react";

// export function useReadingProgress() {
//   const [progress, setProgress] = useState(0);
//   useEffect(() => {
//     function updateScroll() {
//       // 已经滚动的高度
//       const currentScrollY = window.scrollY;
//       // 可以滚动的高度
//       let scrollHeight = document.body.scrollHeight - window.innerHeight;
//       if (scrollHeight) {
//         setProgress(Number((currentScrollY / scrollHeight).toFixed(2)) * 100);
//       }
//     }
//     // 添加全局滚动事件的监听
//     window.addEventListener("scroll", updateScroll);

//     // 移除监听
//     return () => {
//       window.removeEventListener("scroll", updateScroll);
//     };
//   }, []);
//   return progress;
// }

// export default function ProgressBar() {
//   const progress = useReadingProgress();
//   return (
//     <div
//       style={{
//         transform: `translateX(${progress - 100}%)`,
//       }}
//       className="fixed top-0 left-0 h-1 w-full bg-green-500 backdrop-filter-none duration-200"
//     />
//   );
// }
"use client";
// import { useEffect, useState } from 'react'
import ProgressBar from "react-progressbar-on-scroll";

function ReadingBar() {
  //   const [completion, setCompletion] = useState(0)

  //   useEffect(() => {
  //     const updateScrollCompletion = () => {
  //       const currentProgress = window.scrollY
  //       const scrollHeight = document.body.scrollHeight - window.innerHeight
  //       if (scrollHeight) {
  //         setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100)
  //       }
  //     }

  //     window.addEventListener('scroll', updateScrollCompletion)

  //     return () => {
  //       window.removeEventListener('scroll', updateScrollCompletion)
  //     }
  //   }, [])

  //   return (
  //     <span
  //       style={{ transform: `translateX(${completion - 100}%)` }}
  //       className="absolute bg-yellow-400 h-1 w-full bottom-0"
  //     />
  //   )

  return (
    <ProgressBar
      color="blue"
      height={4}
      direction="right"
      position="top"
      //   gradient={true}
      //   gradientColor="#eee"
    />
  );
}
export default ReadingBar;
