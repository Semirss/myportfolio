"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const name = "Semir Sultan";
const titles = [
  "Full-Stack Developer",
  "Frontend Enthusiast",
  "Creative Coder",
  "UI/UX Explorer",
];

const HeroSection = () => {
  const [nameText, setNameText] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [nameDeleting, setNameDeleting] = useState(false);

  const [titleIndex, setTitleIndex] = useState(0);
  const [titleText, setTitleText] = useState("");
  const [titleLetterIndex, setTitleLetterIndex] = useState(0);
  const [titleDeleting, setTitleDeleting] = useState(false);

  // Mobile navbar state
  const [menuOpen, setMenuOpen] = useState(false);

  // Typing animation for name
  useEffect(() => {
    const speed = nameDeleting ? 11111400 : 500;
    const timeout = setTimeout(() => {
      if (!nameDeleting && nameIndex < name.length) {
        setNameText((prev) => prev + name[nameIndex]);
        setNameIndex((prev) => prev + 1);
      } else if (nameDeleting && nameIndex > 0) {
        setNameText((prev) => prev.slice(0, -1));
        setNameIndex((prev) => prev - 1);
      } else {
        setNameDeleting(!nameDeleting);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [nameIndex, nameDeleting]);

  // Rotating typing effect for title
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const speed = titleDeleting ? 400 : 100;

    const timeout = setTimeout(() => {
      if (!titleDeleting && titleLetterIndex < currentTitle.length) {
        setTitleText((prev) => prev + currentTitle[titleLetterIndex]);
        setTitleLetterIndex((prev) => prev + 1);
      } else if (titleDeleting && titleLetterIndex > 0) {
        setTitleText((prev) => prev.slice(0, -1));
        setTitleLetterIndex((prev) => prev - 1);
      } else {
        if (!titleDeleting) {
          setTimeout(() => setTitleDeleting(true), 1000);
        } else {
          setTitleDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [titleLetterIndex, titleDeleting, titleIndex]);

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <section className="relative bg-gradient-to-br from-rose-900 70% to-black  overflow-hidden">
      {/* Curved Top Background */}
      <div className="absolute top-0 left-0 w-full h-32 md:h-40 bg-indigo-500 z-10 rounded-b-[50%]" />

      {/* Navigation */}
      <nav className="absolute top-6 right-10 z-30 text-gray-100 font-medium space-x-6 hidden md:flex">
        <a href="#" className="hover:text-indigo-600 transition">Home</a>
        <a href="#About" className="hover:text-indigo-600 transition" onClick={handleLinkClick}>About</a>
        <a href="#Project" className="hover:text-indigo-600 transition" onClick={handleLinkClick}>Projects</a>
        <a href="#Skill" className="hover:text-indigo-600 transition" onClick={handleLinkClick}>Skills</a>
        <a href="#Contact" className="hover:text-indigo-600 transition" onClick={handleLinkClick}>Contact</a>
      </nav>

      {/* Mobile Navbar */}
      <div className="md:hidden text-white absolute top-6 right-6 z-40">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 text-white right-0 w-3/4 h-full bg-gradient-to-br from-rose-900 to-black shadow-lg transform transition-transform z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center">
          <a href="#" className="text-white py-4 hover:text-indigo-600 transition" onClick={handleLinkClick}>Home</a>
          <a href="#About" className="text-white py-4 hover:text-indigo-600 transition" onClick={handleLinkClick}>About</a>
          <a href="#Project" className="text-white py-4 hover:text-indigo-600 transition" onClick={handleLinkClick}>Projects</a>
          <a href="#Skill" className="text-white py-4 hover:text-indigo-600 transition" onClick={handleLinkClick}>Skills</a>
          <a href="#Contact" className="text-white py-4 hover:text-indigo-600 transition" onClick={handleLinkClick}>Contact</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between px-6 md:px-70 py-20 md:py-32 max-w-7xl mx-auto">
        {/* Animated Profile Image */}
        <motion.div
          className="w-48 h-48 mb-8 md:mb-0 md:mr-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/3.jpg"
            alt="Semir Sultan Illustration"
            width={192}
            height={192}
            className="rounded-full object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-9 mt-12">
            Hi, I'm {" "}
            <span className="text-indigo-600 border-r-2 border-indigo-600 pr-1 animate-pulse">
              {nameText}
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-700 h-8 mb-4">
            <span className="text-indigo-500">{titleText}</span>
            <span className="border-r-2 border-indigo-500 ml-1 animate-pulse" />
          </h2>

          <p className="text-white mb-6 max-w-md">
            I craft modern, interactive, and scalable digital experiences that merge creative design with clean, efficient code 🧠 turning ideas into intuitive, high-performance web solutions.
          </p>

          <motion.a
            href="https://github.com/semirss"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block m-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
          >
            My GitHub
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
          >
            Download CV
          </motion.a>
          
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
