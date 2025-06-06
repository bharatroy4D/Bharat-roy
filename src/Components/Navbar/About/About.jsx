import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bharat from "../../../assets/bharat.png";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-base-300">
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-12 bg-[#FF014F] animate-bounce"
              style={{ animationDelay: `${i * 0.5}s` }}
            ></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="bg-base-200 py-12">
      <div className="max-w-7xl px-5 md:px-10 lg:px-20 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-[45%]"
          >
            <img
              src={bharat}
              alt="Profile"
              className="rounded-2xl shadow-xl bg-white w-full object-cover"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-[55%]"
          >
            <h2 className="text-4xl font-bold text-[#394E6A] mb-4">
              About Me
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I’m a passionate and detail-oriented Frontend Developer skilled in React, Tailwind CSS, and animation libraries like Framer Motion. I specialize in building visually engaging and performant websites with clean, maintainable code.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My mission is to bridge the gap between design and development — bringing interfaces to life with smooth animations, responsive layouts, and optimal performance.
            </p>

            <div>
              <h4 className="text-xl font-semibold text-[#394E6A] mb-3">
                Skills
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                {[
                  "React",
                  "Tailwind CSS",
                  "Framer Motion",
                  "JavaScript (ES6+)",
                  "Responsive Design",
                  "Git & GitHub",
                ].map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-[#1f1f1f] text-white rounded-full text-center"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
