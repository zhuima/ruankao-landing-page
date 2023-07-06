import HeroSection from "../../components/hero-section";
import Content from "../../components/content";
import Feature from "../../components/feature";
import Pricing from "../../components/pricing";
import Contact from "../../components/contact";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Content />
      <Feature />
      <Pricing />
      <Contact />
    </main>
  );
}
