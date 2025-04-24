"use client";
import React from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
  level: number;
}

const skills: Skill[] = [
  { name: "HTML", icon: "html", level: 100 },
  { name: "Javascript", icon: "javascript", level: 80 },

  { name: "CSS", icon: "css", level: 100 },
  { name: "Java", icon: "java", level: 50 },
  { name: "Python", icon: "python", level: 78 },
  { name: "PHP", icon: "php", level: 98 },
  { name: "Dart", icon: "dart", level: 80 },
  { name: "React", icon: "react", level: 96 },
  { name: "Next.js", icon: "nextjs", level: 98 },
  { name: "MySQL", icon: "mysql", level: 80 },
  { name: "MongoDB", icon: "mongodb", level: 76 },
  { name: "C++", icon: "cplusplus", level: 75 },
  { name: "C#", icon: "csharp", level: 85 },
  { name: "Flutter", icon: "flutter", level: 70 },
  { name: "Tailwind", icon: "tailwind", level: 90 },
  { name: "Bootstrap", icon: "bootstrap", level: 85 },
  { name: "Laravel", icon: "laravel", level: 75 },
  { name: "TypeScript", icon: "typescript", level: 89 },
];

const Skills: React.FC = () => {
  return (
    <section id="Skill" className="py-16 px-4  text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🧠 My Skills
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">
                <img
                  src={`https://skillicons.dev/icons?i=${skill.icon}`}
                  alt={skill.name}
                  className="w-10 h-10"
                />
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
              <div className="mt-4 w-full bg-zinc-600 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                />
              </div>
              <p className="text-sm text-right mt-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {skill.level}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
