"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import "./heroSection.module.css";


const roles = [
  "Software Developer",
  "Mobile Application Developer",
  "Front End Developer",
];

const HeroSection = () => {

  const textArray = [
    `I'm Shahzain`,
    'A Software Developer'
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-40 text-center px-4" id="hero">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-6xl font-bold"
    >
       Hi, I&#39;m Shahzain Sohail
    </motion.h2>
  
    {/* Container that centers horizontally and fixes height */}
    <div className="relative mt-4 h-7 w-full justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={roles[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="left-1/2 top-0 -translate-x-1/2 whitespace-nowrap text-blue-400 text-lg font-semibold"
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  
    <div className="mt-6 flex justify-center gap-6 text-2xl">
      <a
        href="https://github.com/shahzain29"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/shahzain29"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500"
      >
        <FaLinkedin />
      </a>
    </div>
  </section>
  
  );
};

export default HeroSection;
