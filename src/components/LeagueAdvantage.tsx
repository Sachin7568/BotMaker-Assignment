import React from 'react';

import nationalRecognition from '../assets/Why register/National recognition.png';
import fairJudging from '../assets/Why register/fair judging.png';
import careerOps from '../assets/Why register/career ops.png';
import highEnergyEco from '../assets/Why register/high energy eco.png';
import leaderBoard from '../assets/Why register/leader board.png';

const LeagueAdvantage = () => {
  const advantages = [
    {
      id: 1,
      title: "NATIONAL RECOGNITION",
      desc: "",
      icon: nationalRecognition
    },
    {
      id: 2,
      title: "FAIR JUDGING",
      desc: "",
      icon: fairJudging
    },
    {
      id: 3,
      title: "CAREER OPS",
      desc: '"Bridge the gap between arena victories and top-tier tech placements."',
      icon: careerOps
    },
    {
      id: 4,
      title: "HIGH - ENERGY ECO",
      desc: '"Join a nationwide community of elite innovators and robotics athletes."',
      icon: highEnergyEco
    }
  ];

  return (
    <section className="section-padding fade-in bg-[#141414]">
      <div className="container-custom">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 fade-in">
          <h2 className="text-left mb-12 font-heading font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-wide">
            <span className="text-accent-primary">WHY REGISTER ?</span><br />
            <span className="text-white whitespace-nowrap">THE LEAGUE ADVANTAGE</span>
          </h2>
          
          <div className="flex flex-col gap-8">
            {advantages.map((adv, index) => (
              <div key={adv.id} className="flex items-start gap-6" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="w-[50px] h-[50px] shrink-0 flex justify-center items-center">
                  <img src={adv.icon} alt={adv.title} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-[1.2rem] mb-2 uppercase font-body font-bold text-white tracking-wide">{adv.title}</h4>
                  {adv.desc && <p className="text-gray-400 text-[1rem] font-body m-0 leading-[1.4]">{adv.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-1 flex justify-center items-center fade-in">
          <img src={leaderBoard} alt="BotLeague Leaderboard" className="max-w-full h-auto rounded-xl" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default LeagueAdvantage;
