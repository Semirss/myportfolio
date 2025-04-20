import React from "react";
import { motion } from "framer-motion";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company: "Creative Studio",
    period: "2021 - 2022",
    description: "Developed responsive UI with React and TailwindCSS."
  },
  {
    title: "Full Stack Developer",
    company: "TechZone Inc.",
    period: "2022 - 2023",
    description: "Worked on APIs, databases, and user authentication."
  },
  {
    title: "App Developer",
    company: "MobileSpark",
    period: "2023 - Present",
    description: "Built cross-platform apps using Flutter and Firebase."
  },
  {
    title: "Frontend Developer",
    company: "Creative Studio",
    period: "2021 - 2022",
    description: "Developed responsive UI with React and TailwindCSS."
  },
  {
    title: "Full Stack Developer",
    company: "TechZone Inc.",
    period: "2022 - 2023",
    description: "Worked on APIs, databases, and user authentication."
  },
  {
    title: "App Developer",
    company: "MobileSpark",
    period: "2023 - Present",
    description: "Built cross-platform apps using Flutter and Firebase."
  },
];

const ExperienceZigzag: React.FC = () => {
  return (
    <section id="Experience" className="py-20 bg-gradient-to-br from-black to-zinc-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🌊 Experience
        </motion.h2>

        <div className="relative">
          {/* Flexbox layout with zigzag pattern */}
          <div className="flex flex-wrap gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative bg-zinc-800 hover:bg-zinc-700 transition-all p-6 rounded-xl shadow-xl w-full sm:w-1/2 md:w-3/4 lg:w-2/3 ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-indigo-500"></div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-indigo-400 font-medium">{exp.company}</p>
                <p className="text-sm opacity-80">{exp.period}</p>
                <p className="mt-2 text-sm text-zinc-300 group-hover:text-white transition-colors">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceZigzag;
