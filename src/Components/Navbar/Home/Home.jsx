import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
// import user from "../../../assets/user.png";
import hero_img from "../../../assets/hero-img.png";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";

const Home = () => {
    return (
        <div className="hero bg-base-300  overflow-hidden ">
            <div className="hero-content flex-col lg:flex-row-reverse gap-5 w-[90%] mx-auto">
                {/* Hero Image */}
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                >
                    <div className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto rounded-lg bg-white shadow-md "
                    >
                        <img
                            src={hero_img}
                            alt="Hero"
                            className="w-full h-auto rounded object-cover"
                        />
                    </div>
                </motion.div>
                {/* Text Content */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="flex flex-col gap-3 text-left"
                >
                    {/* Info Card */}
                    <div className="bg-base-100 shadow-md rounded-lg p-4 transition-all duration-500  hover:-translate-y-1">
                        <img src={hero_img} alt="User" className="w-14 mb-3 rounded-full bg-base-300" />
                        <h1 className="text-3xl md:text-4xl font-bold">
                            Hi, I am <span className="text-[#FF014F]">Bharat</span>
                        </h1>
                        {/* Typing effect */}
                        <TypeAnimation
                            sequence={[
                                "Web Developer 👨‍💻",
                                2000,
                                "Frontend Specialist ✨",
                                2000,
                                "React Developer ⚛️",
                                2000,
                            ]}
                            speed={50}
                            wrapper="span"
                            repeat={Infinity}
                            className="text-xl text-blue-500 font-semibold mt-2 block"
                        />
                        <p className="py-4 font-medium  text-gray-600">
                            I am a web designer and developer working with clients around the world.
                            Currently based in Bangladesh.
                        </p>
                        <div className="flex items-center gap-3 text-xl">
                            <FaFacebook />
                            <FaXTwitter />
                            <FaLinkedin />
                            <FaGithub />
                        </div>
                    </div>
                    {/* Resume Download */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-base-100 shadow-xl rounded-lg p-4 transition-all duration-500"
                    >
                        <h3 className="font-semibold ">Download My Resume</h3>
                        <div className="flex flex-wrap gap-3 py-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2 py-2 px-4 rounded bg-[#394E6A] text-white hover:bg-red-400 transition"
                            >
                                Resume <IoEye />

                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2 py-2 px-4 rounded bg-[#394E6A] text-white hover:bg-red-400 transition"
                            >
                                Download <MdOutlineFileDownload className="text-xl" />

                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
