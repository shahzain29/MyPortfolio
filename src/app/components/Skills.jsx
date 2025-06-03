'use client'
import { FaReact, FaNodeJs, FaAndroid, FaApple, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiPython, SiAmazon } from "react-icons/si";
import { DiJava } from "react-icons/di";

const Skills = () => {
    return (

        <section id="skills" className="bg-gray-900 py-20 px-6 opacity-80" >
            <h3 className="text-3xl font-semibold text-center text-blue-400 mb-10">Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
                <div className="flex flex-col items-center">
                    <FaReact className="text-4xl text-blue-500" />
                    <span className="mt-2">React Native</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaReact className="text-4xl text-blue-500" />
                    <span className="mt-2">React</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaNodeJs className="text-4xl text-green-500" />
                    <span className="mt-2">Node.js</span>
                </div>
                <div className="flex flex-col items-center">
                    <SiJavascript className="text-4xl text-yellow-400" />
                    <span className="mt-2">JavaScript</span>
                </div>
                <div className="flex flex-col items-center">
                    <SiTypescript className="text-4xl text-blue-400" />
                    <span className="mt-2">TypeScript</span>
                </div>
                <div className="flex flex-col items-center">
                    <SiTailwindcss className="text-4xl text-cyan-400" />
                    <span className="mt-2">Tailwind CSS</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaAndroid className="text-4xl text-green-600" />
                    <span className="mt-2">Android</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaApple className="text-4xl text-gray-300" />
                    <span className="mt-2">iOS</span>
                </div>
                {/* Added skills below */}
                <div className="flex flex-col items-center">
                    <SiPython className="text-4xl text-yellow-500" />
                    <span className="mt-2">Python</span>
                </div>
                <div className="flex flex-col items-center">
                    <DiJava className="text-4xl text-red-600" />
                    <span className="mt-2">Java</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaDatabase className="text-4xl text-purple-600" />
                    <span className="mt-2">Database</span>
                </div>
                <div className="flex flex-col items-center">
                    <SiAmazon className="text-4xl text-orange-400" />
                    <span className="mt-2">AWS</span>
                </div>
            </div>
        </section>

    )
}

export default Skills
