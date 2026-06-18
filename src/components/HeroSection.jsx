import React from 'react';
import heroBg from '../assets/Hero/Rectangle 9.png';

const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center overflow-hidden fade-in">
      <div className="absolute top-8 right-[5%] md:right-[10%] xl:right-[15%] z-20 hidden lg:flex items-center bg-[#151515]/80 border border-white/20 rounded px-4 py-2 backdrop-blur-md">
        <span className="text-[#FF4C4C] text-sm font-bold tracking-wider animate-pulse mr-2">● LIVE</span>
        <span className="text-gray-300 text-sm mr-2">: Episode 14 . Bengaluru Regionals</span>
        <a href="#" className="text-[#FF4C4C] text-sm font-bold tracking-wider hover:underline ml-4">WATCH LIVE</a>
      </div>

      <div className="absolute top-0 right-0 w-full h-full z-[-1]">
        <img src={heroBg} alt="Robotics Arena" className="w-full h-full object-cover object-right" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black/85 via-60% to-transparent md:bg-[linear-gradient(90deg,#000000_0%,rgba(0,0,0,0.85)_30%,rgba(0,0,0,0.4)_60%,transparent_100%)] bg-[linear-gradient(to_top,#000000_0%,rgba(0,0,0,0.85)_50%,rgba(0,0,0,0.4)_100%)]"></div>
      </div>
      
      <div className="relative z-10 w-full container-custom">
        <div className="max-w-[600px] text-center md:text-left mx-auto md:mx-0 pt-[50%] md:pt-0">
          <h1 className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-[#cccccc] font-bold">
            INDIA'S ULTIMATE ROBOTICS ARENA
          </h1>
          <p className="text-lg leading-[1.6] mb-10 text-text-secondary font-bold">
            Build. Compete. Rank. The National <br /> Ecosystem for Robotics Arena.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <a href="#" className="btn btn-primary">Create Account</a>
            <a href="#events" className="btn border border-white text-white hover:bg-white/10">Explore Events</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
