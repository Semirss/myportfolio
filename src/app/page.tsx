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
   <main style={{ backgroundColor: "#0a192f" }}>
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
