import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Student Management System (Proyecto Universitario)",
      period: "Oct 2025 – Dic 2025",
      highlights: [
        "Lideré el desarrollo de interfaces dinámicas y componentes reutilizables con React para el registro de asignaturas.",
        "Integración con Firebase para autenticación segura y base de datos en tiempo real.",
        "Diseño e implementación de un sistema de alertas personalizado para seguimiento académico usando JavaScript y CSS.",
        "Pruebas de validación funcional en un entorno de trabajo ágil."
      ]
    },
    {
      role: "Data Analyst",
      company: "Evaluación de LLMs (Proyecto Independiente)",
      period: "Abr 2025 – May 2025",
      highlights: [
        "Construcción de una plataforma web para visualizar métricas de rendimiento de Modelos de Lenguaje Grande (LLMs).",
        "Extracción y procesamiento de datos mediante librerías de análisis en Python.",
        "Desarrollo de dashboards interactivos en PowerBI para la toma de decisiones técnicas.",
        "Elaboración de consultas en bases de datos e informes técnicos con recomendaciones basadas en métricas."
      ]
    },
    {
      role: "Web Developer",
      company: "Audia",
      period: "Ago 2024 – Dic 2024",
      highlights: [
        "Desarrollo de una aplicación web interactiva para la generación de melodías personalizadas mediante prompts.",
        "Gestión dinámica de pistas de audio utilizando JavaScript y Web Audio APIs.",
        "Construcción de interfaz de usuario con HTML5, CSS3 y componentes modulares.",
        "Control de versiones con Git y despliegue en la nube para pruebas de usuario."
      ]
    },
    {
      role: "Frontend Developer",
      company: "Golden Newera",
      period: "Ene 2022 – Jul 2022",
      highlights: [
        "Desarrollo de la interfaz de usuario para una aplicación móvil de comercio electrónico.",
        "Implementación de lógica para el carrito de compras y el flujo completo de pagos.",
        "Diseño responsivo e integración de APIs REST con el equipo de backend.",
        "Pruebas de usabilidad continuas y corrección de errores."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-secondary/20 border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <Briefcase className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">Experiencia Profesional</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-[28px] top-0 bottom-0 w-[2px] bg-border" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-14 md:pl-20 pb-16 last:pb-0"
            >
              {/* Timeline Node */}
              <div className="absolute left-[13px] md:left-[21px] top-2 w-4 h-4 rounded-full bg-background border-2 border-primary ring-4 ring-background" />

              <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                    <p className="text-muted-foreground font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground/80 bg-secondary px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
