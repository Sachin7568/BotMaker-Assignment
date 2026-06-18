import React from 'react';

import youtube from '../assets/Social media/youtube.png';
import instagram from '../assets/Social media/instagram.png';
import facebook from '../assets/Social media/facebook.png';
import twitter from '../assets/Social media/twitter.png';

const Footer = () => {
  return (
    <footer className="bg-bg-darkest py-10 border-t border-white/5 fade-in">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <span className="font-heading text-[1.2rem] tracking-[1px]">© BOTLEAGUE</span>
          </div>
          
          <div className="flex gap-8">
            <a href="#events" className="text-text-secondary font-heading uppercase text-[0.9rem] transition-colors duration-300 hover:text-accent-primary">Events</a>
            <a href="#programs" className="text-text-secondary font-heading uppercase text-[0.9rem] transition-colors duration-300 hover:text-accent-primary">Programs</a>
            <a href="#community" className="text-text-secondary font-heading uppercase text-[0.9rem] transition-colors duration-300 hover:text-accent-primary">Community</a>
            <a href="#career" className="text-text-secondary font-heading uppercase text-[0.9rem] transition-colors duration-300 hover:text-accent-primary">Careers</a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <span className="font-heading text-[0.8rem] tracking-[1px]">SOCIAL MEDIA</span>
            <div className="flex gap-4">
              <a href="#" className="group"><img src={youtube} alt="YouTube" className="w-6 h-6 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5" /></a>
              <a href="#" className="group"><img src={instagram} alt="Instagram" className="w-6 h-6 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5" /></a>
              <a href="#" className="group"><img src={facebook} alt="Facebook" className="w-6 h-6 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5" /></a>
              <a href="#" className="group"><img src={twitter} alt="Twitter/X" className="w-6 h-6 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
