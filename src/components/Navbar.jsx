import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import mainLogo from '../assets/Main logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-bg-darkest h-20 flex justify-center items-center sticky top-0 z-[999] border-b border-[#333]">
      <div className="flex justify-between items-center h-20 max-w-[1200px] w-full px-5">
        <a href="#" className="flex-shrink-0">
          <img src={mainLogo} alt="BotLeague" className="h-10" />
        </a>
        
        <div className="md:hidden cursor-pointer z-[1000]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color="#FFF" /> : <Menu color="#FFF" />}
        </div>

        <ul className={`${isOpen ? 'left-0 opacity-100 z-50' : 'left-[-100%] opacity-0 md:opacity-100 md:left-auto'} flex flex-col md:flex-row items-center absolute md:relative top-20 md:top-auto w-full md:w-auto h-[90vh] md:h-auto bg-bg-darkest md:bg-transparent transition-all duration-500 ease-in-out m-0 p-0 text-center`}>
          <li className="my-8 md:my-0 md:mx-6">
            <a href="#events" className="text-text-primary no-underline font-heading uppercase text-sm transition-colors duration-300 hover:text-accent-primary" onClick={() => setIsOpen(false)}>Events</a>
          </li>
          <li className="my-8 md:my-0 md:mx-6">
            <a href="#programs" className="text-text-primary no-underline font-heading uppercase text-sm transition-colors duration-300 hover:text-accent-primary" onClick={() => setIsOpen(false)}>Programs</a>
          </li>
          <li className="my-8 md:my-0 md:mx-6">
            <a href="#community" className="text-text-primary no-underline font-heading uppercase text-sm transition-colors duration-300 hover:text-accent-primary" onClick={() => setIsOpen(false)}>Community</a>
          </li>
          <li className="my-8 md:my-0 md:mx-6">
            <a href="#ranks" className="text-text-primary no-underline font-heading uppercase text-sm transition-colors duration-300 hover:text-accent-primary" onClick={() => setIsOpen(false)}>Ranks</a>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="btn border border-white/50 text-white hover:bg-white/10 hover:border-white">Login</a>
          <a href="#" className="btn btn-primary">Register Now</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
