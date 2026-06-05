import { motion } from "framer-motion";
import { ArrowRight, FileText, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAstral from "@/assets/hero-astral.png";


export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden"
    >
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="inline-block w-12 h-[2px] bg-primary"></span>
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
              System Engineer | Frontend, Backend & AI Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8"
            >
              Jorge Sebastián <br />
              <span className="text-muted-foreground">Ortiz Humo.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed font-light"
            >
              Desarrollador Full Stack con experiencia en React, Angular, NestJS y Python. He desarrollado aplicaciones web, dashboards analíticos en Power BI y proyectos de inteligencia artificial enfocados en resolver problemas reales mediante datos y automatización.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button size="lg" className="rounded-full px-8 h-14 text-base gap-2 group" onClick={() => {
                document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Ver Experiencia
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-14 text-base gap-2">
                <a
                  href="/doc/CV_JORGE_SEBASTIAN_ORTIZ_HUMO.pdf"
                  download="CV_JORGE_SEBASTIAN_ORTIZ_HUMO.pdf"
                >
                  <FileText className="w-4 h-4" />
                  Descargar CV
                </a>
              </Button>

              <div className="flex items-center gap-2 ml-2">
                <Button asChild size="icon" variant="ghost" className="rounded-full h-12 w-12 hover:bg-primary/10 hover:text-primary transition-colors">
                  <a href="https://github.com/JorgeOrtiz17" target="_blank" rel="noreferrer">
                    <Github className="w-5 h-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button asChild size="icon" variant="ghost" className="rounded-full h-12 w-12 hover:bg-primary/10 hover:text-primary transition-colors">
                  <a href="https://www.linkedin.com/in/jorge-sebastian-ortiz-humo-241135191/" target="_blank" rel="noreferrer">
                    <Linkedin className="w-5 h-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right — Astral Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-3xl scale-110 pointer-events-none" />
            <div className="absolute inset-0 rounded-3xl bg-accent/5 blur-2xl scale-105 pointer-events-none" />

            {/* Rotating border ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-8px] rounded-3xl border border-primary/20 pointer-events-none"
              style={{
                background: "conic-gradient(from 0deg, transparent 70%, hsl(217 91% 60% / 0.3) 100%)",
                borderRadius: "1.5rem",
              }}
            />

            <img
              src={heroAstral}
              alt="Software engineering astral illustration"
              className="relative w-full max-w-[520px] rounded-3xl object-cover shadow-2xl"
              style={{
                boxShadow: "0 0 60px hsl(217 91% 60% / 0.25), 0 0 120px hsl(199 100% 55% / 0.1)",
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
