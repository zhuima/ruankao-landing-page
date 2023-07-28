/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-07-06 13:45:44
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-07-28 18:39:47
 * @FilePath: /ruankao-website/app/(docs)/layout.tsx
 * @Description:
 *
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import Link from "next/link";
import ReadingBar from "@/components/progressbar";
interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex-1">
        <ReadingBar />

        {children}
      </div>
    </div>
  );
}
