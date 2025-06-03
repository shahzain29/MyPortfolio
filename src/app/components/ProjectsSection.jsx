"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Huzzle",
    description: "Career finding Application",
    image: "/images/projects/huzzle.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://apps.apple.com/gb/app/huzzle-student-careers/id1558715481",
  },

  {
    id: 2,
    title: "Nox-Sky",
    description: "Social App for Astrophotographers",
    image: "/images/projects/NoxSky.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://apps.apple.com/us/app/nox-sky/id1594848791",
  },
  {
    id: 3,
    title: "Wellness Determination using Medical and Environmental Info",
    description: "Machine Learning combined with environmental and medical information",
    image: "/images/projects/Ai.png",
    tag: ["All", "AI"],
    gitUrl: "https://github.com/shahzain29/NearestNeighbour",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "My Portfolio",
    description: "Portfolio website made using Next.Js, JavaScript and Tailwind CSS",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shahzain29/MyPortfolio",
    previewUrl: "https://shahzainfolio.netlify.app",
  },
];


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projectData = [
    {
      image: "/images/projects/huzzle.png",
      title: "Huzzle",
      description: "Developed an application for IOS and Android to match students with their career interests increasing job placements.."
    },
    {
      image: "/images/projects/NoxSky.png",
      title: "Nox-Sky",
      description: "Created a cross-platform application for astronomy enthusiasts easing them to find people with similar interests."
    },
    {
      image: "/images/projects/Ai.png",
      title: "Wellness Determination using medical and environmental infromation",
      description: "Integrated Machine Learning models created using Python with React Native to connect wearable sensors and a smart home wireless network, achieving 98% accuracy in detecting dangerous activities for the user."
    }
  ];

  return (
    <section id="projects" className="bg-black py-20 px-6">
    <h3 className="text-3xl font-semibold text-center text-blue-400 mb-12">Projects</h3>
    <div className="flex flex-col gap-10 max-w-3xl mx-auto">
      {projectData.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? 400 : -400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-gray-900 border border-blue-500 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-52 object-cover"
          />
          <div className="p-6">
            <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
            <p className="text-sm text-gray-400">{project.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
  );
};

export default ProjectsSection;
