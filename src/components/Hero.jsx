import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SiCodeforces, SiLeetcode } from 'react-icons/si';

const Hero = () => {
  // Variants for container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  const socialLinks = [
    {
      icon: <SiCodeforces size={25} />,
      url: "https://codeforces.com/profile/shiv13",
      label: "CodeForces"
    },
    {
      icon: <SiLeetcode size={25} />,
      url: "https://leetcode.com/u/ssaraffa/",
      label: "LeetCode"
    },
    {
      icon: <FaGithub size={25} />,
      url: "https://github.com/saraffa13",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin size={25} />,
      url: "https://www.linkedin.com/in/shivam-kumar-saraffa-66167a1b8/",
      label: "LinkedIn"
    },
    {
      icon: <FaTwitter size={25} />,
      url: "https://x.com/shivam13537194",
      label: "Twitter"
    },
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
          {/* Main title */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-textPrimary mb-4"
          >
            Hi, I'm{' '}
            <span className="relative">
              <span className="text-accent">Shivam</span>
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

          {/* Highlighted Line with Word Animation */}
          <motion.div
            variants={containerVariants}
            className="text-2xl font-semibold text-accent flex justify-center"
          >
            {["I", "am", "a", "graduate", "of", "Nit", "Hamirpur.",].map((word, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                className="mr-1"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-textSecondary max-w-[600px] mx-auto mb-8 mt-8 leading-relaxed"
          >
            I'm passionate about building <strong>exceptional digital experiences</strong> that live at the 
            intersection of design and technology.
          </motion.p>

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
            className="flex items-center justify-center gap-6 mt-16"
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
                <span className="text-textSecondary group-hover:text-accent transition-colors duration-300 mt-24">
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