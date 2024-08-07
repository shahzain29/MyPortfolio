"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 lg:px-12 mb-10">
      
      <div className="grid sm:grid-cols-12  ">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-10 place-self-center text-center sm:text-left justify-self-start"
        >
          <div className='flex-row'>
          <h1 className="mb-4 lg:text-8xl md:text-4xl lg:leading-normal font-extrabold" >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#187ee4] to-[#70a8d8] mb-1">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Shahzain",
                1000,
                "Software Developer",
                1000,
                "Mobile Developer",
                1000,
                "Front End Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{fontSize:'80px'}}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#187ee4] to-[#70a8d8]"
              
            />
          </h1>
          </div>
          {/* <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          This is about me asdassadasdasdasdds
          </p> */}
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#187ee4] to-[#a1bed8] hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
               <Link
              href="/ShahzainCvrn.pdf"
              className="px-6 inline-block py-3 w-100 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#187ee4] to-[#a1bed8] hover:bg-slate-200 text-white"
            >
              My CV
            </Link>
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
              alt="hero image"
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
