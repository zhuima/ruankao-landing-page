/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2023-05-10 15:05:55
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2023-07-24 11:30:49
 * @FilePath: /ruankao-website/app/(home)/page.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import HeroSection from "@/components/hero-section";
import Content from "@/components/content";
import Feature from "@/components/feature";
import Pricing from "@/components/pricing";
import Contact from "@/components/contact";
import Scrolling from "@/components/scrolling";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <Content />
      <Feature />
      <Scrolling />
      <Contact />
    </main>
  );
}
