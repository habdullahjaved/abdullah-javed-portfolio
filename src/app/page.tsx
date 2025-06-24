import About from "@/components/sections/About";
import BlogTeasers from "@/components/sections/BlogTeasers";
import ContactCTA from "@/components/sections/ContactCTA";
import Hero from "@/components/sections/Hero";
import Hero2 from "@/components/sections/Hero2";
import Projects from "@/components/sections/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <Hero2 />
      <About />
      <Projects />
      <BlogTeasers />
      <ContactCTA />
    </>
  );
}
