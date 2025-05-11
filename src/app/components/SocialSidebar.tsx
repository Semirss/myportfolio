"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/semirss",
    color: "bg-[#333333]",
    hover: "hover:bg-[#24292e]",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/semir-sultan-b1142b299/",
    color: "bg-[#0077B5]",
    hover: "hover:bg-[#005983]",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/semir_ss1/",
    color: "bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500",
    hover: "hover:brightness-110",
  },
  {
    name: "Telegram",
    icon: <FaTelegram />,
    url: "https://t.me/@Ss1643",
    color: "bg-[#0088cc]",
    hover: "hover:bg-[#007bb5]",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://x.com/SemamanW",
    color: "bg-[#1DA1F2]",
    hover: "hover:bg-[#0d8ddb]",
  },
];

const SocialSidebar: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSidebar(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showSidebar && (
        <>
          {/* Desktop Sidebar (Left Side) */}
          <motion.div
            className="hidden md:flex fixed top-1/3 left-0 z-50 flex-col space-y-3"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center w-fit ${social.color} ${social.hover} pr-2 text-white rounded-r-full transition-all duration-150`}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 flex items-center justify-center text-2xl">
                  {social.icon}
                </div>
                <span
                  className="overflow-hidden whitespace-nowrap 
                           max-w-0 group-hover:max-w-[160px]
                           pl-0 group-hover:pl-2 pr-0 
                           transition-all duration-300 text-sm"
                >
                  {social.name}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile Sidebar (Bottom Right) */}
          <motion.div
            className="fixed bottom-4 right-4 z-50 flex md:hidden flex-col gap-3 bg-black/70 px-2 py-3 rounded-xl shadow-lg"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white text-xl p-2 rounded-full ${social.color} ${social.hover}`}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SocialSidebar;
