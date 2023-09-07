"use client";
import React from "react";
import Image from "next/image";
import { useAos } from "../hooks/useAos";
const Scrolling = () => {
  useAos();
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1
            data-aos="fade-down"
            data-aos-duration="1000"
            className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900"
          >
            资源概览
          </h1>
          <p
            data-aos="fade-down"
            data-aos-duration="2000"
            className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500"
          >
            网络海量资源，完全免费.
          </p>
        </div>
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
          <div className="pointer-events-none relative flex gap-10 overflow-hidden">
            <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-10">
              <Image
                className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
                src="https://img.techrk1688.eu.org/file/19d147f36f366c0ad9641.png"
                alt=""
                height="404"
                width="640"
              />
              <Image
                className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
                src="https://img.techrk1688.eu.org/file/fa44e9283405c2a24cb8d.png"
                alt=""
                height="404"
                width="640"
              />
              <Image
                className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
                src="https://img.techrk1688.eu.org/file/a5f640f6d8f5f508f6529.png"
                alt=""
                height="404"
                width="640"
              />
              <Image
                className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
                src="https://img.techrk1688.eu.org/file/3398460f7e183e4459209.png"
                alt=""
                height="404"
                width="640"
              />
              <Image
                className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
                src="https://img.techrk1688.eu.org/file/31eb6faaf35812d30bcc0.png"
                alt=""
                height="404"
                width="640"
              />
            </div>
            <div
              aria-hidden="true"
              className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-10"
            >
              <Image
                className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
                src="https://img.techrk1688.eu.org/file/19d147f36f366c0ad9641.png"
                alt=""
                height="404"
                width="640"
              />
              <Image
                className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
                src="https://img.techrk1688.eu.org/file/fa44e9283405c2a24cb8d.png"
                alt=""
                height="404"
                width="640"
              />
              <Image
                className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
                src="https://img.techrk1688.eu.org/file/a5f640f6d8f5f508f6529.png"
                alt=""
                height="404"
                width="640"
              />
              <Image
                className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
                src="https://img.techrk1688.eu.org/file/3398460f7e183e4459209.png"
                alt=""
                height="404"
                width="640"
              />
              <Image
                className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
                src="https://img.techrk1688.eu.org/file/31eb6faaf35812d30bcc0.png"
                alt=""
                height="404"
                width="640"
              />
            </div>
          </div>

          <div className="pointer-events-none relative mt-10 flex gap-10 overflow-hidden">
            <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-10 [animation-direction:reverse]">
              <Image
                className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
                src="https://img.techrk1688.eu.org/file/aef373fcfbddeb1529cce.png"
                alt=""
                height="404"
                width="640"
              />
              <Image
                className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
                src="https://img.techrk1688.eu.org/file/ecba580f0e69736dcede9.png"
                alt=""
                height="404"
                width="640"
              />
              <Image
                className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
                src="https://img.techrk1688.eu.org/file/9465a970a407df9abac87.png"
                alt=""
                height="404"
                width="640"
              />
              <Image
                className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
                src="https://img.techrk1688.eu.org/file/e72924904810aaea58025.png"
                alt=""
                height="404"
                width="640"
              />
              <Image
                className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
                src="https://img.techrk1688.eu.org/file/19d147f36f366c0ad9641.png"
                alt=""
                height="404"
                width="640"
              />
            </div>
            <div
              aria-hidden="true"
              className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-10 [animation-direction:reverse]"
            >
              <Image
                className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
                src="https://img.techrk1688.eu.org/file/aef373fcfbddeb1529cce.png"
                alt=""
                height="404"
                width="640"
              />
              <Image
                className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
                src="https://img.techrk1688.eu.org/file/ecba580f0e69736dcede9.png"
                alt=""
                height="404"
                width="640"
              />
              <Image
                className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
                src="https://img.techrk1688.eu.org/file/9465a970a407df9abac87.png"
                alt=""
                height="404"
                width="640"
              />
              <Image
                className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
                src="https://img.techrk1688.eu.org/file/e72924904810aaea58025.png"
                alt=""
                height="404"
                width="640"
              />
              <Image
                className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] rounded-md object-cover shadow-md"
                src="https://img.techrk1688.eu.org/file/19d147f36f366c0ad9641.png"
                alt=""
                height="404"
                width="640"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scrolling;
