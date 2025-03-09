import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  // Variants for container animations
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

  // Variants for child animations
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const socialLinks = [
    {
      icon: <FaGithub size={25} />,
      url: "https://github.com/yourusername",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin size={25} />,
      url: "https://linkedin.com/in/yourusername",
      label: "LinkedIn"
    },
    {
      icon: <FaTwitter size={25} />,
      url: "https://twitter.com/yourusername",
      label: "Twitter"
    },
    {
      icon: <FaEnvelope size={25} />,
      url: "mailto:your.email@example.com",
      label: "Email"
    }
  ];

  return (
    <div id="home" className="relative w-full h-screen text-center bg-primary overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          {/* Small introduction */}
          <motion.p 
            variants={itemVariants}
            className="text-sm md:text-base tracking-[0.2em] text-accent mb-6 font-mono"
          >
            👋 WELCOME TO MY PORTFOLIO
          </motion.p>

          {/* Main title */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-textPrimary mb-4"
          >
            Hi, I'm{' '}
            <span className="relative">
              <span className="text-accent">Your Name</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent/30"></span>
            </span>
          </motion.h1>

          {/* Subtitle with typing animation */}
          <motion.h2 
            variants={itemVariants}
            className="text-xl md:text-2xl text-textSecondary mb-6 font-light"
          >
            A Full Stack Developer
            <span className="text-accent animate-pulse">_</span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-textSecondary max-w-[600px] mx-auto mb-8 leading-relaxed"
          >
            I'm passionate about building exceptional digital experiences that live at the 
            intersection of design and technology. Specializing in creating robust and 
            scalable web applications with modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <a 
              href="#projects"
              className="px-8 py-3 bg-accent text-primary font-semibold rounded-full 
                hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 border border-accent text-accent font-semibold 
                rounded-full hover:bg-accent/10 transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="group relative p-3 bg-secondary rounded-full hover:bg-accent/10 
                  transition-all duration-300 transform hover:scale-110"
              >
                <span className="text-textSecondary group-hover:text-accent transition-colors duration-300">
                  {social.icon}
                </span>
                {/* Tooltip */}
                <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 
                  bg-accent text-primary px-2 py-1 text-sm rounded opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 whitespace-nowrap">
                  {social.label}
                </span>
              </a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
                <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-scroll"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;