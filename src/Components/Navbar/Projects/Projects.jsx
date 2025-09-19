import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useTheme } from "../../../context/ThemeProvider";  // Theme hook import

// Your real project data
const projectData = [
  {
    title: "Travel Website",
    description:
      "A full-stack e-commerce website with modern UI/UX and Stripe payment integration.",
    image: "https://i.ibb.co/TDgxHxbV/download.jpg",
    liveLink: "https://travel-flyexplore.netlify.app/",
    githubLink: "https://github.com/bharatroy4D/world-tour",
    techStack: ["React", "Tailwind", "Framer motion"],
  },
  {
    title: "Blogs Website",
    description:
      "Personal portfolio built with React, Tailwind CSS, and Framer Motion for beautiful animations.",
    image: "https://i.ibb.co/fGkbHTKx/download-4.jpg",
    liveLink: "https://infodrift-blogs.netlify.app/",
    githubLink: "https://github.com/bharatroy4D/blogs-website",
    techStack: ["React", "Framer Motion", "Tailwind"],
  },
  {
    title: "E-commerce ",
    description:
      "Dynamic blog platform with user authentication and rich-text editor section title.",
    image: "https://i.ibb.co/PvH5QQjm/download-6.jpg",
    liveLink: "https://bacola-grosary.netlify.app/",
    githubLink: "https://github.com/bharatroy4D/food-project",
    techStack: ["React", "Framer motion", "Tailwind CSS"],
  },
  {
    title: "Health Care",
    description:
      "Healthcare website with appointment booking and animated services section.",
    image: "https://i.ibb.co/d0s16vwy/download-5.jpg",
    liveLink: "https://medicare-service.netlify.app/",
    githubLink: "https://github.com/bharatroy4D/medicare-hub",
    techStack: ["React", " framer motion", "Tailwind CSS"],
  },
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Theme context থেকে mode নিচ্ছি
  const { theme } = useTheme();

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setProjects(projectData);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Loader
  if (loading) {
    return (
      <div
        className={`min-h-screen flex justify-center items-center ${
          theme === "dark" ? "bg-gray-900" : "bg-base-200"
        }`}
      >
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-12 ${
                theme === "dark" ? "bg-[#FF014F]" : "bg-blue-500"
              } animate-bounce`}
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section
      id="projects"
      className={`py-12 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-base-200 text-gray-800"
      }`}
    >
      <div className="max-w-7xl px-5 md:px-10 lg:px-20 mx-auto">
        <h3
          className={`text-3xl font-bold mb-8 ${
            theme === "dark" ? "text-white" : "text-gray-700"
          }`}
        >
          My Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all flex flex-col ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6 flex flex-col flex-1">
                <h2
                  className={`text-2xl font-bold ${
                    theme === "dark" ? "text-white" : "text-[#394E6A]"
                  }`}
                >
                  {project.title}
                </h2>
                <p
                  className={`mt-2 flex-1 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#FF014F] text-white text-xs py-1 px-3 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-2 px-4 bg-[#394E6A] hover:bg-[#FF014F] text-white rounded-lg font-semibold transition"
                  >
                    Live <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-2 px-4 bg-[#394E6A] hover:bg-[#FF014F] text-white rounded-lg font-semibold transition"
                  >
                    Code <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
