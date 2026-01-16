import About from "@/components/Section/About/About";
import Brands from "@/components/Section/Brands/Brands";
import Contact from "@/components/Section/Contact/Contact";
import FAQ from "@/components/Section/FAQ/FAQ";
import Hero from "@/components/Section/Hero/Hero";
import Stats from "@/components/Section/stats/Stats";
import Testimonials from "@/components/Section/Testimonials/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* hero section  */}
    <Hero></Hero>
    <Brands></Brands>
    <Stats></Stats>
    <About></About>
    <Testimonials></Testimonials>
    <FAQ></FAQ>
    <Contact></Contact>
    </div>
  );
}
