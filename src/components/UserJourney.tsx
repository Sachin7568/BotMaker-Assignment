import React from 'react';

import step1 from '../assets/User Journey/Step 1.png';
import step2 from '../assets/User Journey/Step 2.png';
import step3 from '../assets/User Journey/step 3.png';
import step4 from '../assets/User Journey/step 4.png';

const UserJourney = () => {
  const steps = [
    { id: 1, title: "BUILD YOUR TEAM", icon: step1 },
    { id: 2, title: "COMPETE ACROSS INDIA", icon: step2 },
    { id: 3, title: "EARN NATIONAL RANKING & VALUE", icon: step3 },
    { id: 4, title: "JOIN THE LEAGUE", icon: step4 }
  ];

  return (
    <section className="section-padding container-custom fade-in bg-black">
      <div className="text-center mb-16">
        <h3 className="text-accent-primary font-heading font-bold text-lg mb-2 uppercase tracking-widest">USER JOURNEY</h3>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-white drop-shadow-md mb-4">
          YOUR PATH TO THE LEAGUE
        </h2>
        <p className="text-gray-500 font-body text-lg">Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-start relative mt-16 px-4 md:px-0">
        {/* Horizontal progress line spanning across desktop layout */}
        <div className="hidden md:block absolute top-[50px] left-[12.5%] w-[75%] h-[2px] bg-accent-secondary z-0"></div>

        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center text-center flex-1 relative z-10 group fade-in" style={{ transitionDelay: `${index * 0.2}s` }}>
            <div className="relative w-full flex flex-col items-center mb-2">
              {/* Step indicator icon wrapper */}
              <div className="w-[100px] h-[100px] rounded-full bg-[#1A1A1A] flex justify-center items-center relative z-10">
                <div className="w-[84px] h-[84px] rounded-full border-[3px] border-accent-secondary bg-black flex justify-center items-center shadow-[0_0_15px_rgba(46,46,255,0.4)] transition-transform duration-300 group-hover:scale-110">
                  <img src={step.icon} alt={step.title} className="w-8 h-8 object-contain" />
                </div>
              </div>
              
              {/* Stem connecting step icon to step details */}
              <div className="w-[2px] h-[20px] bg-gray-500 mt-1 z-10"></div>
              
              {/* Vertical progress line for stacked mobile layout */}
              {index < steps.length - 1 && (
                <div className="md:hidden absolute w-[2px] h-[80px] top-[100px] left-1/2 -translate-x-1/2 bg-accent-secondary -z-10"></div>
              )}
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-accent-primary font-body text-[1rem] font-bold tracking-wider mb-2 block">STEP {step.id}</span>
              <h4 className="text-[1rem] font-body text-white font-bold max-w-[180px] mx-auto uppercase leading-snug tracking-wide">{step.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserJourney;
