import { motion } from "framer-motion";
import { Microscope, Activity, ChevronRight } from "lucide-react";

export function Research() {
  return (
    <section id="research" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Microscope className="w-4 h-4" />
              Tesis & Investigación
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Modelado Numérico de Propagación de Ondas
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Como Investigador Graduado en la <strong>Universidad Industrial de Santander (UIS)</strong>, trabajo en la frontera de la física computacional y la ingeniería de software, implementando métodos numéricos avanzados para simular fenómenos complejos.
            </p>
            
            <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground/70">
              <span>Feb 2026 – Presente</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>Bucaramanga, Colombia</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 bg-card border border-border rounded-2xl p-8 relative overflow-hidden"
          >
            {/* Abstract Background Element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 border-[1px] border-primary/20 rounded-full opacity-50" />
            <div className="absolute -top-12 -right-12 w-48 h-48 border-[1px] border-primary/20 rounded-full opacity-50" />
            <Activity className="absolute top-8 right-8 w-32 h-32 text-primary/[0.03]" />

            <h3 className="text-xl font-semibold mb-6">Aportes Técnicos</h3>
            
            <ul className="space-y-6 relative z-10">
              <li className="flex gap-4">
                <div className="mt-1 bg-primary/20 p-1.5 rounded-md text-primary">
                  <ChevronRight className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Implementación de Métodos Avanzados</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Desarrollo de algoritmos para simular la propagación de ondas P en medios viscoelásticos.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-primary/20 p-1.5 rounded-md text-primary">
                  <ChevronRight className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Optimización Algorítmica</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Mejora de la precisión física en simulaciones a través de refactorización y análisis de complejidad.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 bg-primary/20 p-1.5 rounded-md text-primary">
                  <ChevronRight className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Validación y Análisis de Errores</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Aplicación de pruebas comparativas rigurosas para validar la exactitud funcional de los modelos matemáticos.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
