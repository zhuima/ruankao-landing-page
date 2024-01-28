/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-07-28 11:55:54
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2024-01-28 17:45:10
 * @FilePath: /ruankao-website/components/comment.tsx
 * @Description: https://devpress.csdn.net/opensource/62fb5c2bc6770329307ffc2c.html
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
"use client";
import React, { useRef } from "react";

import useScript from "@/lib/useScript";

const Comments = () => {
  const comment = useRef(null);

  <script
    src="https://giscus.app/client.js"
    data-repo="zhuima/ruankao-landing-page"
    data-repo-id="R_kgDOJr6dXA"
    data-category="Show and tell"
    data-category-id="DIC_kwDOJr6dXM4Ccvy1"
    data-mapping="url"
    data-strict="0"
    data-reactions-enabled="1"
    data-emit-metadata="1"
    data-input-position="bottom"
    data-theme="preferred_color_scheme"
    data-lang="zh-CN"
    data-loading="lazy"
    crossorigin="anonymous"
    async
  ></script>;

  return <div className="w-full">{<div ref={comment}></div>}</div>;
};

export default Comments;
