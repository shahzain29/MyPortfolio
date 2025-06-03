'use Client'
import React from 'react'

const CertificationSection = () => {

    const certificates = [
        {
            src: "/images/javascript.png",
            title: "JavaScript (Intermediate)",
            subtitle: "Issued by HackerRank, 2024"
        },
        {
            src: "/images/frontend.png",
            title: "Front End Developer (React)",
            subtitle: "Issued by HackerRank, 2024"
        },
        {
            src: "/images/modernJSes.png",
            title: "Modern JavaScript ES6",
            subtitle: "Issued by Coursera, 2024"
        },
        {
            src: "/images/Matlab.png",
            title: "Matlab OnRamp",
            subtitle: "Issued by MathWorks, 2023"
        },
        {
            src: "/images/machinelearning.png",
            title: "Machine Learning OnRamp",
            subtitle: "Issued by Mathworks, 2023"
        },
        {
            src: "/images/deepLearning.png",
            title: "Deep Learning OnRamp",
            subtitle: "Issued by Mathworks, 2023"
        },
        {
            src: "/images/imageProcessing.png",
            title: "Image Processing OnRamp",
            subtitle: "Issued by Mathworks, 2023"
        },
    ]
    return (
        // <section id="certifications" className="bg-gray-900 py-20 px-6 opacity-80">
        //     <h3 className="text-3xl font-semibold text-center text-blue-400 mb-10">Certifications</h3>

        //     <div className="max-w-4xl mx-auto space-y-6">
        //       <div className="bg-gray-800 border border-blue-500 rounded-xl p-6">
        //         <h4 className="text-xl font-bold text-white">React Native Developer Certification</h4>
        //         <p className="text-gray-400 mt-1">Issued by XYZ Institute, 2023</p>
        //       </div>
        //       <div className="bg-gray-800 border border-blue-500 rounded-xl p-6">
        //         <h4 className="text-xl font-bold text-white">JavaScript Algorithms and Data Structures</h4>
        //         <p className="text-gray-400 mt-1">Issued by FreeCodeCamp, 2022</p>
        //       </div>
        //       {/* Add more certifications here */}
        //     </div>
        //   </section>

        <section id="certifications" className="bg-gray-900 py-20 px-6">
            <h3 className="text-3xl font-semibold text-center text-blue-400 mb-12">Certifications</h3>
            <div className="flex space-x-6 overflow-x-auto pb-4 px-2 scrollbar-thin scrollbar-thumb-blue-400">
                {certificates.map((cert, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-72 bg-gray-800 rounded-2xl shadow-lg border border-blue-500 transition-transform duration-300 hover:scale-95"
                    >
                        <div className="p-4">
                            <img
                                src={cert.src}
                                alt={`Certificate ${index + 1}`}
                                className="w-full h-40 object-cover rounded-xl mb-4 border border-gray-700"
                            />
                            <h4 className="text-lg font-semibold text-white mb-1">{cert.title}</h4>
                            <p className="text-sm text-gray-400">{cert.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>


    )
}

export default CertificationSection
