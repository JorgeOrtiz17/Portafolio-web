import { motion } from "framer-motion";
import { Terminal, Database, Shield, BrainCircuit } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const pillars = [
    {
      icon: <Terminal className="w-6 h-6 text-primary" />,
      title: "Desarrollo Full Stack",
      desc: "Interfaces dinámicas con React/Angular y backends robustos en Node.js y Spring Boot."
    },
    {
      icon: <BrainCircuit className="w-6 h-6 text-primary" />,
      title: "Análisis de Datos & IA",
      desc: "Evaluación de métricas LLM usando Python y visualización interactiva en PowerBI."
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "Gestión de Datos",
      desc: "Modelado SQL, Firebase en tiempo real y persistencia segura de información."
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Ciberseguridad",
      desc: "Enfoque orientado a soluciones seguras, metodologías ágiles y entornos Linux."
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Perfil Profesional</h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Soy estudiante de último semestre de Ingeniería de Sistemas con enfoque en el ciclo de vida completo del desarrollo de software. 
              Combino la ingeniería de interfaces fluidas con arquitecturas backend sólidas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Más allá del código web, poseo habilidades en análisis de datos para evaluar tecnologías emergentes (como LLMs) y aplico 
              principios de ciberseguridad en mis implementaciones. Mi objetivo es construir plataformas que no solo funcionen, sino que 
              resistan y escalen con elegancia.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
