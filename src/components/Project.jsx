import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

import Project1 from "../assets/project1.png"
import Project2 from "../assets/project2.png"
import Project3 from "../assets/project3.png"

const Projects = () => {
  const projects = [
    {
      title: "Medicart",
      description: "A comprehensive e-commerce platform for medical supplies and equipment, featuring user authentication, shopping cart functionality, and secure payment processing.",
      technologies: ["React", "Redux", "TypeScript", "Node.js", "MongoDB"],
      github: "https://github.com/saraffa13/project",
      live: "https://prodmedicart.vercel.app/",
      image: Project1 
    },
    {
      title: "Placement Tracking App",
      description: "The Placement Tracking App is a comprehensive platform that streamlines the placement process and provides real-time placement statistics using React, Node.js, and MongoDB",
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      github: "https://github.com/saraffa13/placement23",
      live: "https://placement2023-f08ce.web.app/home",
      image: Project2
    },
    {
      title: "Duke",
      description: "The Duke Manufacturing B2B Website leverages React.js, TypeScript, and Magento to enhance customer experience with customizable product displays and secure authentication features",
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      github: "#",
      live: "#",
      image: Project3
    },
  ];

  return (
    <section id="projects" className="w-full py-20 bg-primary">
      <div className="max-w-[1240px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-textPrimary mb-4">My Projects</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-xl overflow-hidden shadow-lg hover:transform hover:scale-105 duration-300"
            >
              {/* Project Image */}
              <div className="relative group h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/placeholder.png'; // Add a placeholder image
                    e.target.onerror = null;
                  }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-accent text-primary p-3 rounded-full hover:scale-110 transition-transform duration-300"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-accent text-primary p-3 rounded-full hover:scale-110 transition-transform duration-300"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-textPrimary mb-2">{project.title}</h3>
                <p className="text-textSecondary mb-4 text-sm">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary px-3 py-1 rounded-full text-xs text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    <FaGithub size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    <FaExternalLinkAlt size={16} />
                    <span>Live Demo</span>
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