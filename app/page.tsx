import Image from "next/image";
import HeroSection from "./components/hero-section";
import Content from "./components/content";
import Feature from "./components/feature";
import Pricing from "./components/pricing";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroSection />
      <Content />
      <Feature />
      <Pricing />
      <Contact />
    </main>
  );
}
