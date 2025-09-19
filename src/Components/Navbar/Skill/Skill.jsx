import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiRedux } from "react-icons/si";
import { useTheme } from "../../../context/ThemeProvider";  // Theme Context import

const frontendSkills = [
  { name: "HTML5", level: 90, icon: <FaHtml5 className="text-orange-500" size={24} /> },
  { name: "CSS3", level: 85, icon: <FaCss3Alt className="text-blue-500" size={24} /> },
  { name: "JavaScript", level: 80, icon: <FaJs className="text-yellow-400" size={24} /> },
  { name: "React.js", level: 75, icon: <FaReact className="text-cyan-400" size={24} /> },
  { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss className="text-sky-400" size={24} /> },
  { name: "Redux", level: 70, icon: <SiRedux className="text-purple-400" size={24} /> },
];

const backendSkills = [
  { name: "Node.js", level: 65, icon: <FaNodeJs className="text-green-500" size={24} /> },
  { name: "Express.js", level: 60, icon: <SiExpress className="text-gray-800" size={24} /> },
  { name: "MongoDB", level: 60, icon: <SiMongodb className="text-green-600" size={24} /> },
];

const otherSkills = [
  { name: "Version Control (Git)", level: 90, icon: <FaGitAlt className="text-black" size={24} /> },
  { name: "Web Performance", level: 80, icon: <FaReact className="text-cyan-400" size={24} /> },
  { name: "Testing (Jest)", level: 70, icon: <FaGithub className="text-gray-600" size={24} /> },
];

const SkillCard = ({ skill, index, theme }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{
      scale: 1.04,
      boxShadow: "0 10px 30px rgba(255, 106, 137, 0.3)",
      transition: { duration: 0.4 },
    }}
    className={`p-6 rounded-2xl shadow-lg transition-all duration-500 cursor-default ${
      theme === "light"
        ? "bg-white hover:shadow-[0_0_25px_#ff6a89]"
        : "bg-gray-800 hover:shadow-[0_0_25px_#ff6a89]"
    }`}
  >
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-4">
        {skill.icon}
        <h4
          className={`text-lg font-semibold ${
            theme === "light" ? "text-gray-900" : "text-gray-100"
          }`}
        >
          {skill.name}
        </h4>
      </div>
      <span
        className={`text-sm font-medium ${
          theme === "light" ? "text-gray-500" : "text-gray-300"
        }`}
      >
        {skill.level}%
      </span>
    </div>
    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-5 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${skill.level}%` }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="h-5 rounded-full bg-gradient-to-r from-[#FF014F] via-[#FF5A7D] to-[#FF6A89]"
      />
    </div>
  </motion.div>
);

const LoadingDots = ({ theme }) => (
  <div
    className={`min-h-screen flex justify-center items-center ${
      theme === "light" ? "bg-gray-200" : "bg-gray-900"
    }`}
  >
    <div className="flex gap-3">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="w-3 h-12 rounded-full bg-[#FF014F]"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme(); // Theme context

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingDots theme={theme} />;
  }

  return (
    <section
      id="skills"
      className={`py-6 ${
        theme === "light" ? "bg-gray-100 text-gray-800" : "bg-gray-900 text-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
        {/* Frontend Skills */}
        <div className="mb-12">
          <h3
            className={`text-3xl font-bold mb-6 ${
              theme === "light" ? "text-gray-700" : "text-gray-100"
            }`}
          >
            Frontend Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {frontendSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} theme={theme} />
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-12">
          <h3
            className={`text-3xl font-bold mb-6 ${
              theme === "light" ? "text-gray-700" : "text-gray-100"
            }`}
          >
            Backend Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {backendSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} theme={theme} />
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div>
          <h3
            className={`text-3xl font-bold mb-6 ${
              theme === "light" ? "text-gray-700" : "text-gray-100"
            }`}
          >
            Other Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} theme={theme} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
