"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github.png";
import LinkedinIcon from "../../../public/linkedin.png";
import Link from "next/link";
import Image from "next/image";
import {sendEmail} from '../api/send/route'

import { Resend } from "resend";


const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
 
  const handleSubmit = async (e) => {
    const emailRes=await sendEmail()
    console.log('emailRes=> ',emailRes)
    };

 

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      {/* <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div> */}
      <div className="z-10">
        <h5 className="text-xl font-bold   my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#62676b] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2 ">
          <Link href="https://github.com/shahzain29">
            <Image src={GithubIcon} alt="Github Icon" className="h-10 w-10" />
          </Link>
          <Link href="https://www.linkedin.com/in/shahzain29/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" className="h-10 w-10" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="  block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-gray-200 border-b border-[#33353F] placeholder-[#8c8a8a]   text-sm rounded-lg block w-full p-2.5"
                placeholder="username@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="  block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-gray-200 border-b border-[#33353F] placeholder-[#8c8a8a]   text-sm rounded-lg block w-full p-2.5"
                placeholder="Say Hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="  block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-gray-200 border-b border-[#33353F] placeholder-[#8c8a8a]   text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    
    </section>
  );
};

export default EmailSection;
