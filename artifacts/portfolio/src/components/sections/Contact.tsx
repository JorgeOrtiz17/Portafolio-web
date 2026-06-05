import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-primary/5 blur-[150px] rounded-t-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
          >
            Construyamos el <span className="text-gradient">Futuro</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground mb-12"
          >
            Abierto a oportunidades como desarrollador, analista de datos e ingeniero de software. 
            Pamplona, Colombia, disponible para roles remotos.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="lg" className="h-14 px-8 rounded-full gap-2 w-full sm:w-auto" asChild>
              <a href="mailto:sebas171202@gmail.com">
                <Mail className="w-5 h-5" />
                sebas171202@gmail.com
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 rounded-full gap-2 w-full sm:w-auto border-border bg-card hover:bg-secondary" asChild>
              <a href="tel:+573103111070">
                <Phone className="w-5 h-5 text-muted-foreground" />
                +57 310 311 1070
              </a>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-12 border-t border-border">
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6 text-muted-foreground mb-2" />
              <h4 className="font-semibold">Ubicación</h4>
              <p className="text-sm text-muted-foreground text-center">
                Pamplona, Norte de Santander<br/>Colombia
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <ExternalLink className="w-6 h-6 text-muted-foreground mb-2" />
              <h4 className="font-semibold">Portafolio Actual</h4>
              <a 
                href="https://sebastianortiz-web.vercel.app/" 
                target="_blank" 
                rel="noreferrer"
                className="text-sm text-primary hover:underline"
              >
                sebastianortiz-web.vercel.app
              </a>
            </div>

            <div className="flex flex-col items-center gap-2 sm:col-span-2 md:col-span-1">
              <div className="w-6 h-6 flex items-center justify-center font-serif font-bold text-muted-foreground mb-2">A</div>
              <h4 className="font-semibold">Idiomas</h4>
              <p className="text-sm text-muted-foreground text-center">
                Español (Nativo)<br/>Inglés (B1/B2)
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="absolute bottom-0 w-full py-6 text-center text-sm text-muted-foreground border-t border-border bg-background">
        © {new Date().getFullYear()} Jorge Sebastián Ortiz Humo. Todos los derechos reservados.
      </footer>
    </section>
  );
}
