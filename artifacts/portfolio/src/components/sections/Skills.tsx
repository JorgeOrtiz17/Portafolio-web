import { motion } from "framer-motion";
import { 
  SiReact, SiAngular, SiVite, SiNextdotjs, SiTailwindcss, SiJavascript,
  SiNodedotjs, SiNestjs, SiSpringboot, SiFirebase, SiPython,
  SiGnubash, SiGit, SiLinux
} from "react-icons/si";

export function Skills() {
  const categories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "Angular", icon: <SiAngular /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "CSS3 / Tailwind", icon: <SiTailwindcss /> },
      ]
    },
    {
      name: "Backend & DB",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "NestJS", icon: <SiNestjs /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "SQL", icon: <SiDatabase /> },
      ]
    },
    {
      name: "Data & Tools",
      skills: [
        { name: "Python", icon: <SiPython /> },
        { name: "PowerBI", icon: <SiPowerBiIcon /> },
        { name: "Git", icon: <SiGit /> },
        { name: "Linux", icon: <SiLinux /> },
        { name: "Agile", icon: <SiGnubash /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ecosistema Técnico
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-primary mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {categories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative"
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground/80 flex items-center gap-3">
                <span className="text-primary opacity-50 text-sm font-mono">0{idx + 1}</span>
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/50 hover:bg-secondary hover:border-primary/30 transition-all cursor-default group"
                  >
                    <div className="text-muted-foreground group-hover:text-primary transition-colors text-xl">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SiPowerBiIcon() {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 2h2v20H4zm6 6h2v14h-2zm6-4h2v18h-2z"/>
    </svg>
  );
}

function SiDatabase() {
  // Fallback icon for SQL
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1c-1.5 0-3.08.31-4.22.9A4.7 4.7 0 0 0 2 3.5c0 1.25.96 2.1 2 2.68.8.44 1.83.67 2.87.77V8.1c-.34-.05-.67-.12-1-.22-.98-.3-1.84-.79-2.58-1.42v1.4c0 .48.24.96.67 1.4.42.43 1.02.83 1.76 1.15.58.25 1.22.46 1.88.59v1.17a7 7 0 0 1-1.88-.36c-.98-.3-1.84-.79-2.58-1.42v1.4c0 .48.24.96.67 1.4.42.43 1.02.83 1.76 1.15C5.06 14.54 6.47 15 8 15s2.94-.46 4.31-1.1c.74-.32 1.34-.72 1.76-1.15.43-.44.67-.92.67-1.4v-1.4c-.74.63-1.6 1.12-2.58 1.42-.33.1-.66.17-1 .22v-1.17c.66-.13 1.3-.34 1.88-.59.74-.32 1.34-.72 1.76-1.15.43-.44.67-.92.67-1.4v-1.4c-.74.63-1.6 1.12-2.58 1.42-.33.1-.66.17-1 .22v-1.15c1.04-.1 2.07-.33 2.87-.77 1.04-.58 2-1.43 2-2.68 0-1.6-1.47-2.6-4.22-3.1C11.08 1.31 9.5 1 8 1M3.56 2.54C4.54 2.15 5.92 1.9 8 1.9c2.08 0 3.46.25 4.44.64.97.39 1.4.92 1.4 1.4 0 .48-.43 1.01-1.4 1.4-.98.39-2.36.64-4.44.64-2.08 0-3.46-.25-4.44-.64-.97-.39-1.4-.92-1.4-1.4 0-.48.43-1.01 1.4-1.4" fillRule="evenodd"></path>
    </svg>
  );
}