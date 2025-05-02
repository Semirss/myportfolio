"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "About Me 👨‍💻";

  useEffect(() => {
    let i = 0;
    const typeNext = () => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i < fullText.length) {
        setTimeout(typeNext, 80);
      }
    };
    typeNext();
  }, []);

  return (
    <div id="About" style={{ backgroundColor: "#0a192f", margin:"10px", border:"1px solid #fff", borderRadius:"20px", padding:"20px" }}>
      <motion.section
        className="max-w-screen-xl mx-auto px-6 lg:px-16 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="lg:w-7/12"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl sm:text-4xl  text-center text-white mb-6">
              {typedText}
              {typedText.length < fullText.length && (
                <span className="animate-pulse">|</span>
              )}
            </h1>

            <p className="text-lg sm:text-xl text-white mb-6 leading-relaxed">
              Hello, I'm Semir Sultan 👋, a passionate Full Stack Developer and App Developer 📱 with a strong love
              for coding and building scalable applications that provide seamless user experiences.
              <br />
              <br />
              I specialize in crafting dynamic web applications and mobile apps using{" "}
              <a className="text-indigo-400 underline underline-offset-2" href="#Skill">
                modern technologies
              </a>
              . Whether it’s a responsive website or an innovative mobile app, I’m always excited to bring ideas to
              life! ✨
              <br />
              <br />
              My goal is to deliver solutions that are efficient, user-friendly, and secure, ensuring that each
              project meets the highest standards of performance. 🚀
              <br />
              <br />
              When I'm not coding, I enjoy exploring new tech trends, collaborating on open-source projects, and
              constantly improving my skills 📚.
              <br />
              <br />
              Let's connect and build something amazing together!
            </p>

            <a
              href="#Contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transition"
            >
              Contact Me
              <svg
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="lg:w-5/12 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              className="rounded-full object-cover w-64 h-64 md:w-80 md:h-80 shadow-lg"
              style={{
                mixBlendMode: "lighten",
                border: "2px solid #fff",
                opacity: 0.85,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
              }}
              src="/8.gif"
              alt="Semir Sultan waving animated"
              width={320}
              height={320}
              loading="lazy"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
