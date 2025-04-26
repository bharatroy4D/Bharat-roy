import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const frontendSkills = [
  { name: "HTML5", level: 90, icon: <FaHtml5 className="text-orange-500" size={24} /> },
  { name: "CSS3", level: 85, icon: <FaCss3Alt className="text-blue-500" size={24} /> },
  { name: "JavaScript", level: 80, icon: <FaJs className="text-yellow-400" size={24} /> },
  { name: "React.js", level: 75, icon: <FaReact className="text-cyan-400" size={24} /> },
  { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss className="text-sky-400" size={24} /> },
];

const backendSkills = [
  { name: "Node.js", level: 65, icon: <FaNodeJs className="text-green-500" size={24} /> },
  { name: "MongoDB", level: 60, icon: <SiMongodb className="text-green-600" size={24} /> },
  { name: "Database", level: 60, icon: <FaDatabase className="text-purple-500" size={24} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-6 bg-base-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* Frontend Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#FF014F] mb-6">Frontend Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {skill.icon}
                    <h4 className="text-lg font-semibold">{skill.name}</h4>
                  </div>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="h-4 rounded-full bg-gradient-to-r from-[#FF014F] to-[#ff6a89]"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div>
          <h3 className="text-2xl font-bold text-[#FF014F] mb-6">Backend Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {backendSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {skill.icon}
                    <h4 className="text-lg font-semibold">{skill.name}</h4>
                  </div>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="h-4 rounded-full bg-gradient-to-r from-[#FF014F] to-[#ff6a89]"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
