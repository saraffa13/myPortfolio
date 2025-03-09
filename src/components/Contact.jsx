import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  // Contact info data
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      content: "ssaraffa786@gmail.com",
      link: "mailto:ssaraffa786@gmail.com"
    },
  ];

  // Social links data
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/saraffa13",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/shivam-kumar-saraffa-66167a1b8/",
      label: "LinkedIn"
    },
    {
      icon: <FaTwitter />,
      url: "https://x.com/shivam13537194",
      label: "Twitter"
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Sending form data:', formData);

    try {
      const response = await emailjs.send(
        'service_3xvbysq', 
        'template_rfldj03', 
        formData, 
        'user_3R5vG5rxL2OzaaIU75Dwl'
      );
      console.log('EmailJS response:', response);
      setSubmitStatus('success');
      setFormData({ user_name: '', user_email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-primary relative overflow-hidden">
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
          <h2 className="text-4xl font-bold text-textPrimary mb-4">Get In Touch</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-semibold text-accent mb-6">
              Contact Information
            </h3>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-4 text-textSecondary hover:text-accent transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-accent">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-textPrimary">{info.title}</h4>
                    <p>{info.content}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-textPrimary mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center 
                      text-textSecondary hover:text-accent hover:bg-secondary/70 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="user_name" className="block text-textSecondary mb-2">Your Name</label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary rounded-lg border border-gray-700 
                      focus:outline-none focus:border-accent text-textPrimary"
                    placeholder="Enter your Name"
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-textSecondary mb-2">Your Email</label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary rounded-lg border border-gray-700 
                      focus:outline-none focus:border-accent text-textPrimary"
                    placeholder="Enter your Mail Id"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-textSecondary mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary rounded-lg border border-gray-700 
                    focus:outline-none focus:border-accent text-textPrimary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-textSecondary mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-secondary rounded-lg border border-gray-700 
                    focus:outline-none focus:border-accent text-textPrimary resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300
                  ${isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-accent text-primary hover:bg-accent/90'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-500 text-center"
                >
                  Message sent successfully!
                </motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-center"
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;