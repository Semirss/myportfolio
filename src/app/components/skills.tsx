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
  { name: "Unity", icon: "unity", level: 98 },
  { name: "Java", icon: "java", level: 50 },
  { name: "Python", icon: "python", level: 78 },
  { name: "PHP", icon: "php", level: 98 },
  { name: "React", icon: "react", level: 96 },
  { name: "Next.js", icon: "nextjs", level: 98 },
  { name: "MySQL", icon: "mysql", level: 80 },
  { name: "MongoDB", icon: "mongodb", level: 76 },
  { name: "C#", icon: "c#", level: 85 },
  { name: "Tailwind", icon: "tailwind", level: 90 },
  { name: "Bootstrap", icon: "bootstrap", level: 85 },
  { name: "Laravel", icon: "laravel", level: 75 },
  { name: "TypeScript", icon: "typescript", level: 89 },
];

const Skills: React.FC = () => {
  // Split into two rows for mobile scroll
  const firstRow = skills.filter((_, i) => i % 2 === 0);
  const secondRow = skills.filter((_, i) => i % 2 !== 0);

  return (
    <section id="Skill" className="py-16 px-4 text-white">
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

        {/* Mobile View: Two-row horizontal scroll */}
        <div className="block md:hidden space-y-4">
          {[firstRow, secondRow].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex overflow-x-auto space-x-4 pb-1"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {row.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="min-w-[64px] h-[64px] flex items-center justify-center rounded-xl shadow-md shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #8330ea ,#000630)",
                    border: "0.5px solid #545454",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={`https://skillicons.dev/icons?i=${skill.icon}`}
                    alt={skill.name}
                    className="w-8 h-8"
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* Desktop View: Grid with full skill cards */}
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              style={{
                border: "0.5px solid #545454",
                background: "linear-gradient(135deg, #8330ea ,#000630)",
              }}
              className="group relative p-4 rounded-xl hover:bg-zinc-700 transition-colors shadow-lg"
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
