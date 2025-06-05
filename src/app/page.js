"use client";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Skills from "./components/Skills";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";
import CertificationSection from "./components/CertificationSection";
import EmailSection from "./components/EmailSection";

import { useEffect, useRef } from 'react'
const Home = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // 0.5x speed, adjust as needed
    }
  }, []);
  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute bg-transparent top-0 left-0 w-full h-full object-cover z-[-1] backdrop-blur-[2px]"
      >
        <source src="/background3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <HeroSection />
      <AboutSection />
      <Skills />
      <CertificationSection />
      <EducationSection />
      <ProjectsSection />
      <EmailSection />
    </div>
  );
}

export default Home