import { motion } from "framer-motion";
import { ArrowRight, FileText, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden"
    >
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
      
      {/* Decorative Blur */}
      <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="inline-block w-12 h-[2px] bg-primary"></span>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Ingeniería de Sistemas — Último Semestre
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] mb-8"
          >
            Jorge Sebastián <br />
            <span className="text-muted-foreground">Ortiz Humo.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-light"
          >
            Full Stack Developer & Investigador. Transformando complejidad técnica en interfaces dinámicas y soluciones escalables con precisión de ingeniería.
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
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base gap-2">
              <FileText className="w-4 h-4" />
              Descargar CV
            </Button>
            
            <div className="flex items-center gap-2 ml-4">
              <Button size="icon" variant="ghost" className="rounded-full h-12 w-12 hover:bg-primary/10 hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-12 w-12 hover:bg-primary/10 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
