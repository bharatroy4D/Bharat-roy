import React from "react";
import { motion } from "framer-motion";
import bharat from '../../../assets/bharat.png'

const About = () => {
  return (
    <section className="bg-base-300 py-4">
      <div className="max-w-7xl px-20 mx-auto">
        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Profile Image */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 "
          >
            <img
              src={bharat}
              alt="Profile"
              className="rounded-xl shadow-xl w-full max-w-sm mx-auto bg-white"
            />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="text-gray-500 mb-4">
              I’m a creative and detail-oriented frontend developer with a strong background in React,
              Tailwind CSS, and modern animation libraries like Framer Motion. I focus on writing clean,
              scalable, and maintainable code while delivering high-quality user experiences.
            </p>
            <p className="text-gray-500">
              My goal is to merge beautiful design with solid code, ensuring fast, accessible, and responsive
              websites. Every line of code I write is a step toward creating seamless digital experiences.
            </p>

            {/* Skills List */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-200">
              <span className="bg-[#1f1f1f] px-4 py-2 rounded">React</span>
              <span className="bg-[#1f1f1f] px-4 py-2 rounded">Tailwind CSS</span>
              <span className="bg-[#1f1f1f] px-4 py-2 rounded">Framer Motion</span>
              <span className="bg-[#1f1f1f] px-4 py-2 rounded">JavaScript (ES6+)</span>
              <span className="bg-[#1f1f1f] px-4 py-2 rounded">Responsive Design</span>
              <span className="bg-[#1f1f1f] px-4 py-2 rounded">Git & GitHub</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
