import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Example project data
const projects = [
    {
        title: "E-commerce Website",
        description: "A full-stack e-commerce website with modern UI/UX and Stripe payment integration.",
        image: "https://via.placeholder.com/500x300", // replace with your project image
        liveLink: "#",
        githubLink: "#",
        techStack: ["React", "Tailwind", "Node.js", "MongoDB"]
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio built with React, Tailwind CSS, and Framer Motion for beautiful animations.",
        image: "https://via.placeholder.com/500x300",
        liveLink: "#",
        githubLink: "#",
        techStack: ["React", "Framer Motion", "Tailwind"]
    },
    {
        title: "Blog Platform",
        description: "Dynamic blog platform with user authentication and rich-text editor.",
        image: "https://via.placeholder.com/500x300",
        liveLink: "#",
        githubLink: "#",
        techStack: ["Next.js", "Firebase", "Tailwind CSS"]
    },
    {
        title: "Blog Platform",
        description: "Dynamic blog platform with user authentication and rich-text editor.",
        image: "https://via.placeholder.com/500x300",
        liveLink: "#",
        githubLink: "#",
        techStack: ["Next.js", "Firebase", "Tailwind CSS"]
    }
];

const Projects = () => {
    return (
        <section id="projects" className="bg-base-200 py-10">
            <div className=" max-w-7xl px-20 mx-auto">
              
                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all flex flex-col"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            {/* Project Image */}
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />

                            {/* Project Details */}
                            <div className="p-6 flex flex-col flex-1">
                                <h2 className="text-2xl font-bold text-[#394E6A]">{project.title}</h2>
                                <p className="text-gray-600 mt-2 flex-1">{project.description}</p>

                                {/* Tech Stack */}
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

                                {/* Buttons */}
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
