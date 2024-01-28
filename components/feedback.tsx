import React from "react";
import Image from "next/image";
import wechat from "../assets/wechat.jpg";
import Link from "next/link";

const Feedback = () => {
  return (
    <div className="fixed bottom-40 right-4 flex flex-col items-end">
      {/* <!-- 包含三个按钮的框 --> */}
      <div className="relative  inline-flex animate-pulse flex-col items-center space-y-4">
        {/* <!-- 第一个按钮是一个链接，样式为 feedback --> */}
        <Link
          href="https://tally.so/r/woGNdx"
          className="flex items-center rounded-full bg-blue-500 px-3 py-3 font-bold text-white shadow-md hover:bg-blue-600"
        >
          {/* <!-- 使用 Freepik 的 Feedback SVG 图标 --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 14a1 1 0 00-1 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4a1 1 0 00-2 0v4a3 3 0 003 3h14a3 3 0 003-3v-4a1 1 0 00-1-1z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 2a3 3 0 00-3 3h6a3 a1 1 0 100-2h-1a1 1 0 00-1 1zm5-1a1 1 0 001 1h1a1 1 0 100-2h-1a1 1 0 00-1 1zm5-1a1 1 0 001 1h1a1 1 0 100-2h-1a1 1 0 00-1 1zm-8-2a9.956 9.956 0 013.222-7.53A9.977 9.977 0 0112 2c2.3 0 4.438.78 6.122 2.08.682.571 1.176 1.25 1.469 2.003a1 1 0 001.902-.7c-.23-2.543-1.422-4.95-3.383-6.87a1.001 1.001 0 00-1.51 1.322C17.26 5.4 18 8.168 18 11c0 4.556-3.684 8.25-8.25 8.25S1.5 15.556 1.5 11 5.184 2.75 9.75 2.75c1.385 0 2.705.285 3.882.8a1.001 1.001 0 10.478-1.946A9.956 9.956 0 019 0C4.029 0 0 4.028 0 9s4.028 9 9 9 9-4.028 9-9a8.977 8.977 0 00-1.372-4.67 1 1 0 00-1.84.34 9.956 9.956 0 01-3.222 7.53z"
            />
          </svg>
        </Link>

        {/* <!-- 包含第二个按钮和弹出框的容器 --> */}
        <div className="group relative inline-flex items-center">
          {/* <!-- 第二个按钮，鼠标滑过显示二维码，样式改成联系我们 -->
      <!-- 第二个按钮，鼠标滑过显示二维码，样式改成联系我们 --> */}
          <button className="flex items-center rounded-full bg-blue-500 px-3 py-3 shadow-md group-hover:bg-blue-600">
            {/* <!-- 使用微信（WeChat）的 SVG 图标 --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 19a1 1 0 001 1h1a1 1 0 100-2h-1a1 1 0 00-1 1zm5-1a1 1 0 001 1h1a1 1 0 100-2h-1a1 1 0 00-1 1zm5-1a1 1 0 001 1h1a1 1 0 100-2h-1a1 1 0 00-1 1zm-8-2a9.956 9.956 0 013.222-7.53A9.977 9.977 0 0112 2c2.3 0 4.438.78 6.122 2.08.682.571 1.176 1.25 1.469 2.003a1 1 0 001.902-.7c-.23-2.543-1.422-4.95-3.383-6.87a1.001 1.001 0 00-1.51 1.322C17.26 5.4 18 8.168 18 11c0 4.556-3.684 8.25-8.25 8.25S1.5 15.556 1.5 11 5.184 2.75 9.75 2.75c1.385 0 2.705.285 3.882.8a1.001 1.001 0 10.478-1.946A9.956 9.956 0 019 0C4.029 0 0 4.028 0 9s4.028 9 9 9 9-4.028 9-9a8.977 8.977 0 00-1.372-4.67 1 1 0 00-1.84.34 9.956 9.956 0 01-3.222 7.53z"
              />
            </svg>
          </button>

          {/* <!-- 弹出框，初始状态隐藏，鼠标滑过第二个按钮时显示在左侧 --> */}
          <div className="absolute right-20 hidden rounded-md bg-white p-2 shadow-md group-hover:block">
            {/* <!-- 这里放置二维码图片或其他内容 --> */}
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
        </div>
      </div>
    </div>
  );
};

export default Feedback;
