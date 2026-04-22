import Image from "next/image";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from"@/components/Stats";
import Testi from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Lead from "@/components/Leadform";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Testi />
      <Lead />
      <Footer />
    </main>
  );
}