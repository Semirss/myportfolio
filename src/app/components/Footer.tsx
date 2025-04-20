import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-black to-zinc-700 text-gray-200 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: About */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-white">About Me</h2>
          <p className="text-sm text-gray-400">
            I'm Semir Sultan, a frontend developer passionate about crafting modern, responsive, and clean web experiences. Always building, always learning.
          </p>
        </div>

        {/* Center: Navigation */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-3 text-white">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            <li><a href="#reviews" className="hover:text-white transition">Testimonials</a></li>
          </ul>
        </div>

        {/* Right: Social */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-white">Follow Me</h2>
          <div className="flex space-x-4 text-xl">
            <a href="https://github.com/yourusername" target="_blank" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="https://t.me/yourusername" target="_blank" className="hover:text-white transition">
              <FaTelegram />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" className="hover:text-white transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-zinc-600 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Semir Sultan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
