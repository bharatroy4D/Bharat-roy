import React from 'react';
import about_img from "../../../assets/about_img.jpg";
import { motion } from "framer-motion";
import linkedin from "../../../assets/linkedin.png";
import github from "../../../assets/github.png";
import twitter from "../../../assets/twitter.png";
import instagram from "../../../assets/instagram.png";

const About = () => {
    return (
        <div>
            <section className="bg-base-200 py-8">
                <div className="hero mx-auto px-4 max-w-7xl">
                    <div className="hero-content flex-col gap-20 lg:flex-row items-center">

                        {/* Image animation */}
                        <motion.img
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            src={about_img}
                            alt="About Me"
                            className="w-64 md:w-96 lg:w-[400px] shadow-md rounded-full"
                        />

                        {/* Text animation */}
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <h4 className="text-lg text-[#F9004D] font-semibold mb-2">Visit My Portfolio</h4>
                            <h1 className="text-4xl md:text-5xl font-bold text-[#394E6A]">About Me</h1>
                            <p className="py-6 text-black text-justify">
                                Hello! I'm a passionate and dedicated junior web developer with a knack for crafting
                                user-friendly, responsive, and visually appealing websites. I specialize in creating clean,
                                efficient code and bringing creative designs to life. With a solid foundation in front-end
                                technologies like HTML, CSS, JavaScript, and frameworks such as React, I’m constantly
                                expanding my skill set to stay ahead in the ever-evolving tech landscape.
                            </p>
                            <p className="text-black">
                                I thrive on solving complex problems and turning ideas into digital
                                experiences that make an impact. Whether it's collaborating with a team or tackling solo
                                projects.
                            </p>

                            {/* Social Icons with animation and responsive wrap */}
                            <motion.div
                                className='flex flex-wrap gap-6 py-2 px-4 mt-2 rounded-3xl text-4xl w-fit border'
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ staggerChildren: 0.2 }}
                                variants={{ hidden: {}, visible: {} }}
                            >
                                {[{ src: linkedin, alt: "LinkedIn" }, { src: github, alt: "GitHub" }, { src: twitter, alt: "Twitter" }, { src: instagram, alt: "Instagram" }].map(({ src, alt }, index) => (
                                    <motion.img
                                        key={index}
                                        src={src}
                                        alt={alt}
                                        className="w-7 h-7 cursor-pointer"
                                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                        transition={{ duration: 0.4 }}
                                        whileHover={{ scale: 1.2 }}
                                    />
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
