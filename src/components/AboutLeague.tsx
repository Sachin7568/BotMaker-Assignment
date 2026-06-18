import React from 'react';
import whatIsBotleague from '../assets/Botleague/what is botleague.png';

const AboutLeague = () => {
  const cards = [
    {
      id: 1,
      title: "STRUCTURED EVENTS",
      desc: "From one-off events to year-round competitive season.",
      number: "1."
    },
    {
      id: 2,
      title: "DIGITAL IDENTITY",
      desc: "Your professional robotics legacy tracked and verified.",
      number: "2."
    },
    {
      id: 3,
      title: "NATIONAL RANKING",
      desc: "Benchmark your skills against top engineers.",
      number: "3."
    },
    {
      id: 4,
      title: "CAREER PATHWAY",
      desc: "Turn arena victories into real-world opportunities.",
      number: "4."
    }
  ];

  return (
    <section className="section-padding fade-in bg-[#141414]">
      <div className="container-custom">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-16 tracking-wide text-left text-white drop-shadow-md">
          WHAT IS BOTLEAGUE?
        </h2>
      
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 order-2 lg:order-1">
          {cards.map(card => (
            <div key={card.id} className="flex flex-col gap-2 p-6 bg-transparent border border-transparent rounded-lg transition-colors duration-300 hover:bg-white/5 hover:border-accent-primary/50 fade-in">
              <span className="text-accent-primary font-heading text-[1.5rem] font-bold">{card.number}</span>
              <h4 className="text-[1.1rem] font-body font-bold text-white uppercase tracking-wide m-0">{card.title}</h4>
              <p className="text-gray-400 text-[0.9rem] leading-[1.6] m-0">{card.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 flex justify-center items-center fade-in order-1 lg:order-2">
          <img src={whatIsBotleague} alt="What is BotLeague" className="max-w-full h-auto opacity-80 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]" />
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLeague;
