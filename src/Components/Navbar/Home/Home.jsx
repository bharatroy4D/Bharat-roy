import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import user from "../../../assets/user.png";
import hero_img from "../../../assets/hero-img.png";
import web_Icon from "../../../assets/web-programming.png";
import mail from "../../../assets/mail.png";
// import map from "../../../assets/pin.png";

const Home = () => {
    return (
        <div className="hero bg-base-200  overflow-hidden">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse  gap-7">
                {/* Hero Image */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                >
                    <img
                        src={hero_img}
                        alt="Hero"
                        className="w-full bg-white rounded-2xl shadow-md object-cover hover:scale-100 transition-transform duration-700"
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="flex flex-col gap-3 text-left"
                >
                    {/* Info Card */}
                    <div className="bg-base-100 shadow-md rounded-xl p-4 transition-all duration-500  hover:-translate-y-1">
                        <img src={user} alt="User" className="w-14 mb-3" />
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

                        <p className="py-4 font-medium text-sm md:text-base">
                            I am a web designer and developer working with clients around the world.
                            Currently based in Bangladesh.
                        </p>

                        <div className="flex items-center gap-2 text-sm">
                            <img src={web_Icon} alt="Web" className="w-6" />
                            <p>Web Designer & Developer</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm py-2">
                            <img src={mail} alt="Email" className="w-6" />
                            <p>bharatroy1005@gmail.com</p>
                        </div>
                        {/* <div className="flex items-center gap-2 text-sm">
                            <img src={map} alt="Location" className="w-6" />
                            <p>
                                <a
                                    href="https://www.google.com/maps/place/Rangpur"
                                    className="hover:text-red-600"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Rangpur, Dhaka (Bangladesh)
                                </a>
                            </p>
                        </div> */}
                    </div>

                    {/* Resume Download */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-base-100 shadow-xl rounded-xl p-4 transition-all duration-500"
                    >
                        <h3 className="font-semibold text-sm">Download my Resume</h3>
                        <div className="flex flex-wrap gap-3 py-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2 py-2 px-4 rounded bg-[#394E6A] text-white hover:bg-[#2f3f59] transition"
                            >
                                Resume
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="py-2 px-4 rounded bg-[#394E6A] text-white hover:bg-[#2f3f59] transition"
                            >
                                Download CV
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
