import Image from "next/image";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from"@/components/Stats";
import Testi from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Testi />
    </main>
  );
}