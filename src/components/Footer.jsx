import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          {/* Social Links */}
          <div className="flex space-x-6 mb-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="text-textPrimary hover:text-accent transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="text-textPrimary hover:text-accent transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="text-textPrimary hover:text-accent transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-textPrimary hover:text-accent transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-textSecondary text-sm text-center">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;