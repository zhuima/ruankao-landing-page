/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-07-28 11:55:54
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-07-28 12:07:03
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

  const status = useScript({
    url: "https://utteranc.es/client.js",
    theme: "github-light",
    issueTerm: "url",
    repo: "zhuima/ruankao-landing-page",
    ref: comment,
  });

  return <div className="w-full">{<div ref={comment}></div>}</div>;
};

export default Comments;
