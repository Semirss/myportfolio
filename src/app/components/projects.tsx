"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  githubUrl,
}) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 bg-zinc-900"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-auto object-contain"
      />

      {/* Hover Overlay (Desktop) */}
      <div className="absolute inset-0 hidden sm:flex bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex-col justify-between text-white">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm mt-2">{description}</p>
        </div>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
        >
          <FaGithub className="text-lg" />
          View on GitHub
        </a>
      </div>

      {/* Mobile GitHub Button */}
      <div className="sm:hidden p-4 bg-black bg-opacity-80 text-white flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
        >
          <FaGithub className="text-lg" />
          GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <div
      id="Project"
      className=" py-10 px-4"
    >
      <motion.h2
        className="text-3xl text-white font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        ✨ My Projects
      </motion.h2>

      <motion.div
        className="grid gap-4"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
      >
        <img
          className="h-auto max-w-full rounded-lg"
          src="/pimgs/1.png"
          alt="project cover"
        />

        <div className="grid grid-cols-5 gap-4">
          {["2", "8", "11", "4", "9"].map((img) => (
            <img
              key={img}
              className="h-auto max-w-full rounded-lg"
              src={`/pimgs/${img}.png`}
              alt={`project-${img}`}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          <ProjectCard
            title="Crimson plate"
            description="A full-stack web for ordering food made with HTML, CSS, JS, PHP, MySQL."
            imageUrl="/pimgs/1.png"
            githubUrl="https://github.com/Semirss/Crimson--plate--final-web"
          />
          <ProjectCard
            title="Skill Nova e-learning platform"
            description="A full-stack web platform for online learning and courses."
            imageUrl="/pimgs/2.png"
            githubUrl="https://github.com/Semirss/Skill-Nova-elearning-web"
          />
          <ProjectCard
            title="Basic speech recognition AI"
            description="An AI model trained to recognize basic words and do tasks."
            imageUrl="/pimgs/16.png"
            githubUrl="https://github.com/Semirss/personal-assistant-AI"
          />
          <ProjectCard
            title="More projects"
            description="Browse my GitHub for more work."
            imageUrl="/pimgs/9.png"
            githubUrl="https://github.com/Semirss"
          />
          <ProjectCard
            title="Portfolios & personal websites"
            description="Designed to practice CRUD using PHP and MySQL."
            imageUrl="/pimgs/6.png"
            githubUrl="https://github.com/Semirss/my-portfolio-using-database"
          />
          <ProjectCard
            title="Weather Web"
            description="A simple weather website showcasing API integration and UI design."
            imageUrl="/pimgs/17.png"
            githubUrl="https://github.com/Semirss/weather-web"
          />
        </div>
      </motion.div>
    </div>
  );
}
