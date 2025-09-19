import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import hero_img from "../../../assets/hero-img.png";
import { IoEye } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";

import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaXTwitter,
} from "react-icons/fa6";

import { useTheme } from "../../../context/ThemeProvider";

const Hero = () => {
    const { theme } = useTheme(); // useTheme from context

    return (
        <div
            className={`transition-colors duration-300 
            ${theme === "light" ? "bg-gray-50 text-black" : "bg-gray-900 text-white"}`}
        >
            <div className="hero-content flex flex-col lg:flex-row-reverse gap-6 py-5 max-w-7xl px-5 md:10 lg:px-20 mx-auto">
                {/* Image */}
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-[39%]"
                >
                    <div
                        className={`rounded-xl shadow-md p-3 
                        ${theme === "light" ? "bg-white" : "bg-gray-800"}`}
                    >
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
                    <div
                        className={`p-6 rounded-xl shadow-md 
                        ${theme === "light" ? "bg-white" : "bg-gray-800"}`}
                    >
                        <motion.img
                            src={hero_img}
                            alt="User"
                            className="w-14 mb-3 rounded-full bg-base-300 border"
                            animate={{
                                scale: [1, 1.2, 1],
                                borderColor: ["#FF0000", "#3B82F6", "#FF0000"],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            style={{ borderStyle: "solid" }}
                        />

                        <h1 className="text-3xl md:text-4xl roboto font-bold">
                            Hi, I am{" "}
                            <span className="text-[#FF014F]">Bharat</span>
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
                        <p
                            className={`py-4 
                            ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}
                        >
                            I am a web designer and developer working with clients around the world.
                            Currently based in Bangladesh.
                        </p>
                        <div className="flex items-center gap-4 text-xl">
                            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
                            <FaXTwitter className="hover:text-gray-500 cursor-pointer" />
                            <a
                                href="https://www.linkedin.com/in/bharatroy1005/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
                            </a>
                            <a
                                href="https://github.com/bharatroy4D"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="hover:text-gray-600 cursor-pointer" />
                            </a>
                        </div>
                        
                    </div>

                    {/* Resume Section */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`p-6 rounded-xl shadow-md 
                        ${theme === "light" ? "bg-white" : "bg-gray-800"}`}
                    >
                        <h3 className="font-semibold mb-4">Download My Resume</h3>
                        <div className="flex flex-wrap gap-4">
                            <button
                                className={`flex items-center gap-2 px-4 py-2 border rounded-full transition
                                ${theme === "light" ? "hover:bg-gray-100" : "hover:bg-gray-700"}`}
                            >
                                <a href="" className="flex items-center gap-2">
                                    Download <MdOutlineFileDownload />
                                </a>
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-800 transition">
                                <a
                                    href="https://drive.google.com/file/d/1ewYkksnTMzcMpkdw4xSP7HDTba8g3yth/view"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-2 items-center"
                                >
                                    Resume <IoEye />
                                </a>
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
