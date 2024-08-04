"use client";
import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";



const skills = ['React Native', 'React','React','React','React', 'NextJs','NextJs','NextJs']

const education=[
  {degree:'MSc Computer Science', uni:'University of East London' ,year:'2023-2024'}, 
  {degree:'BSc Computer Science', uni:'Comsats university Islamabad',year:'2017-2021'}]

  const certifications=[]


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
        {skills.map((item,index) => {
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
        {education.map((item,index) => {
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
      <ul className="list-disc pl-2 text-white">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
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
              East London and worked in 2 App Development roles. Throughout my work years I specialized in
              Hybrid Mobile Application development using React Native but proficient in many other frameworks
              and languages. I am looking for Mobile Application developer/Front End Developer roles. I have the
              right to work in the UK.

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
          <div ref ={ref} className="mt-8 w-fit max-w-xl">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
