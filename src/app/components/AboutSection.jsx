"use client";
import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const skills = [
  'React Native',
  'ReactJs',
  'NextJs',
  'JavaScript',
  'TypeScript',
  'Java',
  'C++',
  'Python',
  'Tailwind CSS',
  'CSS',
  'Matlab',
  'Firebase',
  'SQL'
]

const education = [
  { degree: 'MSc Computer Science', uni: 'University of East London', year: '2023-2024' },
  { degree: 'BSc Computer Science', uni: 'Comsats university Islamabad', year: '2017-2021' }]

const certifications = [
  { name: 'Modern JavaScript: ES6 Basics', link: "https://www.coursera.org/account/accomplishments/verify/Y5YVE4FFU3PH" },
  { name: 'React - Working with Higher Order Components', link: 'https://www.coursera.org/account/accomplishments/certificate/SFU454AAE6KH' },
  { name: 'MATLAB OnRamp', link: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=3039b51e-3a3b-4e8b-a1ec-6562972b7952&' },
  { name: 'Image Processing OnRamp', link: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=b694b7f3-b076-47a5-ac63-bf09b06db624&' },
  { name: 'Machine Learning OnRamp', link: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=8a641171-34a9-40e0-8a5e-8841d4f58487&' },
  { name: 'Deep Learning OnRamp', link: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=eb0c437d-d83a-460b-a4bf-eac5d4c23a3c&' }
]


const animateVariant = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
}

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-row flex-wrap w-fit" >
        {skills.map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={animateVariant}
              initial="initial"
              animate={"animate"}
              transition={{ duration: 0.5 }}
            >
              <div className="text-black border-blue-400 border-2 rounded-3xl w-fit py-2 px-4 m-1 ">{item}</div>
            </motion.div>
          )
        })}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div>
        {education.map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={animateVariant}
              initial="initial"
              animate={"animate"}
              transition={{ duration: 0.5, delay: index * 0.4 }}
            >
              <li className="text-black font-bold">
                {item.degree}
                <p className="ml-5 font-normal">{item.uni}</p>
                <p className="ml-5 font-normal">{item.year}</p>
              </li>
            </motion.div>
          )
        })}
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div>
        {certifications.map((item, index) => {
          return (
            <div key={index}>
              <li className="text-black font-semibold">
               <a href={item.link} className='hover:underline'>{item.name}</a>
              </li>
            </div>
          )
        })}
      </div>
    ),
  },
];

const AboutSection = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();


  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about" >
      <div className="md:grid md:grid-cols-2 items-center py-8 px-4  sm:py-16 xl:px-16">
        <Image src="/images/aboutimg1.jpeg" width={500} height={500} className="rounded-3xl" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 ">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400'>
              About Me
            </span>
          </h2>
          <motion.div
            ref={ref}
            initial='initial'
            variants={animateVariant}
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5 }}
            className="col-span-10 place-self-center text-center sm:text-left justify-self-start"
          >
            <p className="text-base lg:text-lg text-black">
              Highly skilled software developer with a 1st class honours in MSc Computer Science from University of
              East London and worked in 2 Software Development roles. Throughout my work years I specialized in
              Hybrid Mobile Application development using React Native but proficient in many other frameworks
              and languages.

            </p>
          </motion.div>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          {isInView &&
            <div ref={ref} className="mt-8 w-fit max-w-xl">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
