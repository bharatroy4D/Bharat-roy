import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import hero_img from "../../../assets/hero-img.png";

import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaXTwitter,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
} from "react-icons/fa6";

import { IoEye } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";

import {
    SiTailwindcss,
    SiFramer,
    SiVite,
    SiFirebase,
    SiRedux,
    SiMongodb,
    SiNodedotjs,
} from "react-icons/si";

// Tool Icons with react-icons
const tools = [
    { icon: <FaHtml5 className="text-orange-600 text-3xl" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-600 text-3xl" />, name: "CSS" },
    { icon: <FaJs className="text-yellow-400 text-3xl" />, name: "JavaScript" },
    { icon: <FaReact className="text-cyan-400 text-3xl" />, name: "React" },
    { icon: <SiTailwindcss className="text-blue-400 text-3xl" />, name: "Tailwind" },
    { icon: <FaGithub className="text-black text-3xl" />, name: "GitHub" },
    { icon: <SiFramer className="text-pink-500 text-3xl" />, name: "Framer Motion" },
    { icon: <SiVite className="text-blue-500 text-3xl" />, name: "Vite" },
    { icon: <SiRedux className="text-blue-500 text-3xl" />, name: "Redux" },
    { icon: <SiFirebase className="text-red-500 text-3xl" />, name: "Firebase" },
    { icon: <SiNodedotjs className="text-green-600 text-3xl" />, name: "Node.js" },
    { icon: <SiMongodb className="text-green-400 text-3xl" />, name: "MongoDB" },


];

const Home = () => {
    return (
        <div className="bg-base-300 overflow-hidden">
            {/* Hero Section */}
            <div className="hero-content flex flex-col lg:flex-row-reverse gap-6 py-5 max-w-7xl px-20 mx-auto">
                {/* Image */}
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-[39%]"
                >
                    <div className="bg-white rounded-xl shadow-md p-3">
                        <img
                            src={hero_img}
                            alt="Hero"
                            className="rounded-lg object-cover w-full"
                        />
                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="flex-1 space-y-6"
                >
                    <div className="bg-base-100 p-6 rounded-xl shadow-md">
                        <img
                            src={hero_img}
                            alt="User"
                            className="w-14 mb-3 rounded-full bg-base-300"
                        />
                        <h1 className="text-3xl md:text-4xl font-bold">
                            Hi, I am <span className="text-[#FF014F]">Bharat</span>
                        </h1>
                        <TypeAnimation
                            sequence={[
                                "Web Developer 👨‍💻", 2000,
                                "Frontend Specialist ✨", 2000,
                                "React Developer ⚛️", 2000,
                            ]}
                            speed={50}
                            wrapper="span"
                            repeat={Infinity}
                            className="text-xl text-blue-500 font-semibold mt-2 block"
                        />
                        <p className="py-4 text-gray-600">
                            I am a web designer and developer working with clients around the world.
                            Currently based in Bangladesh.
                        </p>
                        <div className="flex items-center gap-4 text-xl text-gray-700">
                            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
                            <FaXTwitter className="hover:text-black cursor-pointer" />
                            <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
                            <FaGithub className="hover:text-black cursor-pointer" />
                        </div>
                    </div>

                    {/* Resume Section */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-base-100 p-6 rounded-xl shadow-md"
                    >
                        <h3 className="font-semibold mb-4">Download My Resume</h3>
                        <div className="flex flex-wrap gap-4">
                            <button className="flex items-center gap-2 px-4 py-2 rounded bg-blue-900 text-white hover:bg-red-400 transition">
                                Resume <IoEye />
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 rounded bg-blue-900 text-white hover:bg-red-400 transition">
                                Download <MdOutlineFileDownload />
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Toolbox Section */}
            <section className="bg-base-300 py-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-20">
                    {/* Left */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="md:w-[30%] w-full bg-white p-6 rounded-xl shadow-lg text-center"
                    >
                        <h3 className="text-xl font-bold text-left mb-4 text-[#394E6A] border-b border-gray-400 pb-3">
                            🎓 Education Qualification
                        </h3>

                        <div className="space-y-4 text-left text-gray-700">
                            <div>
                                <h4 className="font-medium ">B.A (Honours) in Political Science</h4>
                                <p className="text-sm">Dinajpur Government College, Dinajpur</p>
                                <p className="text-sm text-gray-500">2022 - Present (1st Year)</p>
                            </div>

                            <div>
                                <h4 className="font-medium ">Higher Secondary Certificate (HSC)</h4>
                                <p className="text-sm">Board Hard College, Dinajpur</p>
                                <p className="text-sm text-gray-500">2020 - 2021</p>
                            </div>

                            <div>
                                <h4 className="font-medium ">Secondary School Certificate (SSC)</h4>
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
                        {/* Skills Title */}
                        {/* <h3 className="text-2xl font-bold mb-6 text-[#394E6A] border-b border-gray-300 pb-3">
                            🚀 Skills 
                        </h3> */}

                        {/* Skills Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {tools.map((tool, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    animate={{
                                        y: [0, -3, 0, 3, 0], // up-down shake
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        delay: index * 0.1, // যাতে stagger করে shake হয়
                                    }}
                                    className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center"
                                >
                                    {tool.icon}
                                    <span className="text-sm font-medium text-gray-700 mt-2">{tool.name}</span>
                                </motion.div>
                            ))}

                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default Home;
