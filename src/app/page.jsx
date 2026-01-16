import About from "@/components/Section/About/About";
import Hero from "@/components/Section/Hero/Hero";
import Stats from "@/components/Section/stats/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* hero section  */}
    <Hero></Hero>

    <Stats></Stats>
    <About></About>
    
    </div>
  );
}
