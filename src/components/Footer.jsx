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
              href="https://github.com/saraffa13"
              target="_blank"
              rel="noreferrer"
              className="text-textPrimary hover:text-accent transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/shivam-kumar-saraffa-66167a1b8/"
              target="_blank"
              rel="noreferrer"
              className="text-textPrimary hover:text-accent transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://x.com/shivam13537194"
              target="_blank"
              rel="noreferrer"
              className="text-textPrimary hover:text-accent transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="mailto:ssaraffa786@gmail.com"
              className="text-textPrimary hover:text-accent transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-textSecondary text-sm text-center">
            © {new Date().getFullYear()} Shivam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;