import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

export function Education() {
  const certs = [
    { name: "Analítica de Datos con Herramientas Computacionales", issuer: "Universidad de Pamplona", year: "2026" },
    { name: "IA: Aplicación de la IA en la Integración de Datos", issuer: "SENA", year: "2026" },
    { name: "Ciberseguridad: Apropiación de los Conceptos", issuer: "SENA", year: "2026" },
    { name: "Blockchain: Contratos Inteligentes", issuer: "SENA", year: "2026" },
    { name: "Análisis Exploratorio de Datos en Python", issuer: "SENA", year: "2025" },
    { name: "Introduction to Data Science", issuer: "Cisco", year: "2025" },
    { name: "Controles y Seguridad Informática", issuer: "SENA", year: "2023" },
    { name: "Introducción al Desarrollo Web (HTML y CSS)", issuer: "Google Actívate", year: "" }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Education Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Educación</h2>
            </div>
            
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-6 border-l-2 border-primary/30"
              >
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5" />
                <h3 className="font-bold text-lg leading-tight mb-1">Ingeniería de Sistemas</h3>
                <p className="text-muted-foreground font-medium mb-2">Universidad de Pamplona</p>
                <p className="text-sm text-muted-foreground/70">Ene 2021 – Presente (Último Semestre)</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative pl-6 border-l-2 border-border"
              >
                <div className="absolute w-3 h-3 bg-border rounded-full -left-[7px] top-1.5" />
                <h3 className="font-bold text-lg leading-tight mb-1">Técnico en Sistemas</h3>
                <p className="text-muted-foreground font-medium mb-2">Instituto Educativo Sagrado Corazón</p>
                <p className="text-sm text-muted-foreground/70">2018 – 2019</p>
              </motion.div>
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Certificaciones Destacadas</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certs.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-card border border-border p-4 rounded-xl flex items-start gap-3 hover:border-primary/50 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm leading-snug mb-1">{cert.name}</h4>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{cert.issuer}</span>
                      {cert.year && <span className="font-mono bg-secondary px-1.5 py-0.5 rounded">{cert.year}</span>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
