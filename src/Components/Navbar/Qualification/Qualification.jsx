import React from "react";
import { motion } from "framer-motion";
import {
    FaGithub,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
} from "react-icons/fa6";
import {
    SiTailwindcss,
    SiFramer,
    SiVite,
    SiFirebase,
    SiRedux,
    SiMongodb,
    SiNodedotjs,
} from "react-icons/si";

import { useTheme } from "../../../context/ThemeProvider"; 

// Tool Icons with react-icons
const tools = [
    { icon: <FaHtml5 className="text-orange-600 text-3xl" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-600 text-3xl" />, name: "CSS" },
    { icon: <FaJs className="text-yellow-400 text-3xl" />, name: "JavaScript" },
    { icon: <FaReact className="text-cyan-400 text-3xl" />, name: "React" },
    { icon: <SiTailwindcss className="text-blue-400 text-3xl" />, name: "Tailwind" },
    { icon: <FaGithub className="text-black dark:text-gray-200 text-3xl" />, name: "GitHub" },
    { icon: <SiFramer className="text-pink-500 text-3xl" />, name: "Framer Motion" },
    { icon: <SiVite className="text-blue-500 text-3xl" />, name: "Vite" },
    { icon: <SiRedux className="text-blue-500 text-3xl" />, name: "Redux" },
    { icon: <SiFirebase className="text-red-500 text-3xl" />, name: "Firebase" },
    { icon: <SiNodedotjs className="text-green-600 text-3xl" />, name: "Node.js" },
    { icon: <SiMongodb className="text-green-400 text-3xl" />, name: "MongoDB" },
];

const Qualification = () => {
    const { theme } = useTheme(); // context থেকে theme নিচ্ছি

    return (
        <div
            className={`transition-colors duration-300 
            ${theme === "light" ? "bg-gray-50 text-black" : "bg-gray-900 text-white"}`}
        >
            <section className="py-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-5 md:10 lg:px-20">
                    {/* Left */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className={`md:w-[30%] w-full p-6 rounded-xl shadow-lg text-center 
                        ${theme === "light" ? "bg-white text-gray-800" : "bg-gray-800 text-gray-200"}`}
                    >
                        <h3
                            className={`text-xl font-bold text-left mb-4 pb-3 border-b 
                            ${theme === "light" ? "text-[#394E6A] border-gray-400" : "text-blue-300 border-gray-600"}`}
                        >
                            🎓 Education Qualification
                        </h3>

                        <div className="space-y-4 text-left">
                            <div>
                                <h4 className="font-medium">B.A (Honours) in Political Science</h4>
                                <p className="text-sm">Dinajpur Government College, Dinajpur</p>
                                <p className="text-sm text-gray-500">2022 - Present (1st Year)</p>
                            </div>

                            <div>
                                <h4 className="font-medium">Higher Secondary Certificate (HSC)</h4>
                                <p className="text-sm">Board Hard College, Dinajpur</p>
                                <p className="text-sm text-gray-500">2020 - 2021</p>
                            </div>

                            <div>
                                <h4 className="font-medium">Secondary School Certificate (SSC)</h4>
                                <p className="text-sm">Betura BL High School, Dinajpur</p>
                                <p className="text-sm text-gray-500">2018 - 2019</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Tools */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="md:w-[70%] w-full"
                    >
                        {/* Skills Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {tools.map((tool, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    animate={{ y: [0, -3, 0, 3, 0] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        delay: index * 0.1,
                                    }}
                                    className={`p-4 rounded-xl shadow-md flex flex-col items-center 
                                    ${theme === "light" ? "bg-white text-gray-700" : "bg-gray-800 text-gray-200"}`}
                                >
                                    {tool.icon}
                                    <span className="text-sm font-medium mt-2">{tool.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Qualification;
