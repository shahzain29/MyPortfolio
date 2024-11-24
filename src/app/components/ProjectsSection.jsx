"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
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

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">

      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400'>
          My Projects
        </span>
      </h2>
      <div className="text-black flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
          <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tag={project.tag}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
