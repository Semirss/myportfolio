"use client";
import Image from "next/image";
import HeroSection from "../app/components/HeroSection"; 
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import ExperienceStairs from "./components/Experiance";
import ReviewCarousel from "./components/Review";
import ContactMe from "./components/ContactMe";
import SocialSidebar from "./components/SocialSidebar";
import Footer from "./components/Footer";
export default function Home() {
  return (
<main className="bg-[#0a192f] text-white font-sans p-4 min-h-screen">
    
     <HeroSection />
     <SocialSidebar />
     <About  />
     <Projects />
     <Skills />
     <ExperienceStairs />
     <ReviewCarousel />
     <ContactMe />
     <Footer />
        </main>
  );
}
