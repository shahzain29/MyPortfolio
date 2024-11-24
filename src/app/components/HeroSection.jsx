"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import "./heroSection.module.css";



const HeroSection = () => {

  const textArray = [
    'Shahzain',
    'Mobile Developer',
    'Web Developer',
  ];

  const [text, setText] = useState('Shahzain')
  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => {
        const nextIndex = (textArray.indexOf(prevText) + 1) % textArray.length;
        return textArray[nextIndex];
      });
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <section className="lg:py-16 lg:px:5 mb-10">

      <div className="flex flex-row justify-between">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="place-self-center text-center sm:text-left justify-self-start"
        >
            <h1 className="mb-4 lg:text-8xl md:text-4xl sm:text-2xl lg:leading-normal font-extrabold" >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#187ee4] to-[#70a8d8] mb-1">
                Hello, I&apos;m{" "}
              </span>
              <br></br>
              <motion.div
                key={text} // Ensure animation is triggered each time the text changes
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="text-transparent bg-clip-text lg:text-8xl md:text-4xl sm:text-4xl bg-gradient-to-r from-[#187ee4] to-[#70a8d8]"
              >
                {text}
              </motion.div>

            </h1>
          
          <div>
            <Link
              href="/NewSection"
              className="px-6 inline-block py-3 w-100 md:w-70 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#187ee4] to-[#a1bed8] hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <a
              href="/Shahzain_Sohail_CV_rn.pdf"
              className="px-6 inline-block py-3 w-100 md:w-70 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#187ee4] to-[#a1bed8] hover:bg-slate-200 text-white"
            >
              My CV
            </a>
          </div>
        </motion.div>
       
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" place-self-center mt-4 lg:mt-0"
        >
          <div className=" w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/man.jpg"
              alt="hero_image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>


    </section>
  );
};

export default HeroSection;
