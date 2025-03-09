import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDatabase, 
  FaDocker, 
  FaGitAlt,
  FaFigma,
  FaAws 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiMongodb,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiPostgresql
} from 'react-icons/si';

const Skills = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // Skill categories
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact />, level: 90 },
        { name: "TypeScript", icon: <SiTypescript />, level: 85 },
        { name: "JavaScript", icon: <SiJavascript />, level: 95 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 88 },
        { name: "Redux", icon: <SiRedux />, level: 85 },
        { name: "Next.js", icon: <SiNextdotjs />, level: 82 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 88 },
        { name: "Python", icon: <FaPython />, level: 85 },
        { name: "Express", icon: <SiExpress />, level: 87 },
        { name: "MongoDB", icon: <SiMongodb />, level: 85 },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 80 },
        { name: "REST APIs", icon: <FaDatabase />, level: 90 },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 92 },
        { name: "Docker", icon: <FaDocker />, level: 78 },
        { name: "AWS", icon: <FaAws />, level: 75 },
        { name: "Figma", icon: <FaFigma />, level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-primary relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <motion.div 
        className="max-w-[1240px] mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-textPrimary mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded mb-4"></div>
          <p className="text-textSecondary max-w-2xl mx-auto">
            I specialize in full-stack development with expertise in modern web technologies. 
            Here's a comprehensive overview of my technical skills and proficiency levels.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-secondary rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-accent mb-6">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl text-accent">{skill.icon}</span>
                        <span className="text-textPrimary">{skill.name}</span>
                      </div>
                      <span className="text-textSecondary">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-primary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-textPrimary mb-8">Other Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "RESTful APIs", "GraphQL", "Jest", "CI/CD", "Agile", "UI/UX Design",
              "Responsive Design", "SEO", "Performance Optimization", "Web Security"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary rounded-full text-textSecondary hover:text-accent 
                  hover:bg-secondary/70 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <p className="text-textSecondary mb-6">
            Want to know more about my experience and work history?
          </p>
          <a
            href="/path-to-resume.pdf"
            className="inline-block px-8 py-3 bg-accent text-primary font-semibold rounded-full 
              hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
            download
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;