import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const links = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
    { name: 'Skills', link: '#skills' },
    { name: 'Education', link: '#education' },
    { name: 'Contact', link: '#contact' },
  ];

  return (
    <nav className="fixed w-full h-20 shadow-xl bg-primary z-50">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <a href="#home" className="text-2xl font-bold text-accent">
          Portfolio
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="hidden md:flex">
            {links.map(({ name, link }) => (
              <li key={name} className="ml-10 hover:text-accent duration-300">
                <a href={link}>{name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div onClick={handleNav} className="md:hidden cursor-pointer">
          {nav ? <HiX size={25} /> : <HiMenuAlt3 size={25} />}
        </div>

        {/* Mobile Menu */}
        <div className={
          nav 
            ? "md:hidden fixed left-0 top-20 w-full h-screen bg-primary/70 backdrop-blur-lg"
            : "fixed left-[-100%] top-20 p-10 ease-in duration-500"
        }>
          <ul className="flex flex-col items-center">
            {links.map(({ name, link }) => (
              <li 
                key={name} 
                className="py-6 text-2xl hover:text-accent duration-300"
                onClick={() => setNav(false)}
              >
                <a href={link}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;