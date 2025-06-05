"use client";
import React from "react";


const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6  mx-auto text-center backdrop-blur-sm">
      <h3 className="text-3xl font-semibold text-blue-400 mb-10">Education</h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-xl font-bold">MSc Computer Science (Distinction)</h4>
          <p className="text-gray-400">University of East London, 2024</p>
        </div>
        <div>
          <h4 className="text-xl font-bold">BSc Computer Science</h4>
          <p className="text-gray-400">
            Comsats University Islamabad, 2021</p>
        </div>
        {/* Add more education here */}
      </div>
    </section>
  );
};

export default EducationSection;
