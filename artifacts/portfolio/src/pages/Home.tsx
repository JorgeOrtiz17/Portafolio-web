import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { StarField } from "@/components/StarField";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground relative" style={{ backgroundColor: "hsl(228 39% 6%)" }}>
      <StarField />
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
