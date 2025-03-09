import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1.com",
      image: "project1.jpg"
    },
    // Add more projects
  ];

  return (
    <div id="projects" className="w-full py-20">
      <div className="max-w-[1240px] mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-secondary rounded-xl shadow-lg p-6 hover:scale-105 duration-300"
            >
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <p className="text-textSecondary mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="bg-primary px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  GitHub
                </a>
                <a 
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;