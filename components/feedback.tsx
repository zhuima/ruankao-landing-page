import React from "react";
import Image from "next/image";
import wechat from "../assets/wechat.jpg";
import Link from "next/link";

const Feedback = () => {
  return (
    <div className="fixed right-5 top-1/2 z-10 backdrop-blur-lg backdrop-filter rounded-full bg-opacity-80 py-5 text-xs shadow-2xl sm:text-sm">
      <div
        id="fix-action-wechat"
        className="group relative mb-3 flex flex-col items-center"
      >
        <svg
          className="mr-1 h-6 w-6"
          fill="#333333"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M174.933333 744.533333c-4.266667 0-10.666667-2.133333-12.8-4.266666-6.4-6.4-8.533333-14.933333-6.4-23.466667l25.6-78.933333C102.4 578.133333 64 503.466667 64 416 64 258.133333 209.066667 128 388.266667 128c157.866667 0 298.666667 102.4 326.4 238.933333 2.133333 10.666667-4.266667 23.466667-17.066667 25.6-10.666667 2.133333-23.466667-4.266667-25.6-17.066666C648.533333 258.133333 526.933333 170.666667 388.266667 170.666667 232.533333 170.666667 106.666667 281.6 106.666667 416c0 76.8 38.4 142.933333 110.933333 196.266667 8.533333 6.4 10.666667 14.933333 8.533333 23.466666l-14.933333 44.8 59.733333-32c4.266667-2.133333 8.533333-2.133333 14.933334-2.133333l17.066666 4.266667c34.133333 6.4 61.866667 14.933333 96 10.666666h17.066667c12.8 0 21.333333 8.533333 21.333333 21.333334s-8.533333 21.333333-21.333333 21.333333h-14.933333c-40.533333 2.133333-74.666667-4.266667-108.8-12.8l-8.533334-2.133333-100.266666 51.2c0 4.266667-4.266667 4.266667-8.533334 4.266666z"
            fill="#333333"
            p-id="2759"
          ></path>
          <path
            d="M264.533333 384c-29.866667 0-53.333333-23.466667-53.333333-53.333333S234.666667 277.333333 264.533333 277.333333s53.333333 23.466667 53.333334 53.333334-23.466667 53.333333-53.333334 53.333333zM524.8 377.6c-17.066667 8.533333-36.266667 8.533333-53.333333 0s-25.6-27.733333-25.6-46.933333c0-19.2 10.666667-36.266667 25.6-46.933334 17.066667-8.533333 36.266667-8.533333 53.333333 0s27.733333 27.733333 27.733333 46.933334c-2.133333 19.2-12.8 36.266667-27.733333 46.933333zM855.466667 896c-4.266667 0-6.4 0-10.666667-2.133333l-74.666667-42.666667c-27.733333 8.533333-57.6 14.933333-87.466666 14.933333-153.6 0-279.466667-110.933333-279.466667-249.6S529.066667 366.933333 682.666667 366.933333c149.333333 0 277.333333 113.066667 277.333333 249.6 0 66.133333-36.266667 132.266667-102.4 187.733334l19.2 66.133333c2.133333 8.533333 0 17.066667-6.4 23.466667-6.4 0-10.666667 2.133333-14.933333 2.133333z m-83.2-89.6c4.266667 0 6.4 0 10.666666 2.133333l36.266667 21.333334-8.533333-27.733334c-2.133333-8.533333 0-17.066667 8.533333-23.466666 64-49.066667 98.133333-106.666667 98.133333-162.133334 0-110.933333-108.8-206.933333-236.8-206.933333-132.266667 0-236.8 89.6-236.8 206.933333 0 113.066667 106.666667 206.933333 236.8 206.933334 27.733333 0 55.466667-8.533333 85.333334-14.933334 2.133333-2.133333 4.266667-2.133333 6.4-2.133333z"
            fill="#333333"
            p-id="2760"
          ></path>
          <path
            d="M590.933333 584.533333c-21.333333 0-36.266667-17.066667-36.266666-36.266666 0-21.333333 17.066667-38.4 36.266666-38.4 21.333333 0 38.4 17.066667 38.4 38.4-2.133333 19.2-19.2 36.266667-38.4 36.266666zM791.466667 582.4c-10.666667 6.4-25.6 6.4-36.266667 0s-19.2-19.2-19.2-32 6.4-25.6 19.2-32c10.666667-6.4 25.6-6.4 36.266667 0s19.2 19.2 19.2 32-6.4 25.6-19.2 32z"
            fill="#333333"
            p-id="2761"
          ></path>
        </svg>
        <div style={{ marginTop: "1px" }} className="py-3">
          添加微信
        </div>
        <div className="absolute w-[240px] bottom-[-8rem] right-20  m-5 hidden rounded-md bg-white p-4 text-center text-gray-700 shadow-md  group-hover:block">
          <div className="text-base group-hover:block">微信咨询</div>
          <div>现在咨询，领取免费体验名额</div>

          <Image
            src={wechat}
            alt="二维码"
            width={480}
            height={480}
            priority={true}
            className="mx-auto my-3 h-40 w-40 group-hover:block"
          />
          <div>手机扫码加我微信</div>
        </div>
      </div>
      <div id="fix-action-online" className="flex flex-col items-center">
        <svg
          className="inline w-6"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style={{ enableBackground: "new 0 0 512 512" } as React.CSSProperties}
          xmlSpace="preserve"
        >
          <path
            style={{ fill: "#1B4145" }}
            d="M337.455,133.897C433.857,133.897,512,195.96,512,272.518c0,54.665-39.846,101.933-97.729,124.502
	c-4.038,26.225,3.938,53.969,23.951,74.174c-38.413,0-70.869-25.645-81.546-60.893c-6.313,0.549-12.724,0.84-19.221,0.84
	c-96.396,0-174.545-62.064-174.545-138.622C162.909,195.96,241.06,133.897,337.455,133.897z"
          />
          <path
            style={{ fill: "#FFD24D" }}
            d="M174.545,40.806C78.143,40.806,0,102.87,0,179.427c0,54.665,39.846,101.933,97.729,124.502
	c4.038,26.225-3.938,53.969-23.951,74.174c38.413,0,70.869-25.645,81.546-60.893c6.313,0.549,12.724,0.84,19.221,0.84
	c96.396,0,174.545-62.064,174.545-138.622C349.091,102.87,270.94,40.806,174.545,40.806z"
          />
        </svg>
        <Link
          href="https://tally.so/r/woGNdx"
          className="flex items-center px-3 py-3 font-bold text-gray-700"
          target="_blank"
        >
          <div style={{ marginTop: "1px" }}>在线反馈</div>
        </Link>
      </div>
    </div>
  );
};

export default Feedback;
