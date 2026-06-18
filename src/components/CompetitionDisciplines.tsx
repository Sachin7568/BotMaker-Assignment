import React from 'react';
import { disciplines } from '../data/disciplines';
import circuitBg from '../assets/Competition Decipline/competition deciplines.png';

const CompetitionDisciplines = () => {
  return (
    <section className="section-padding container-custom fade-in">
      <div className="mb-12 text-left">
        <h3 className="text-accent-primary font-heading font-bold text-lg mb-2 uppercase tracking-wide">SPORTS</h3>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-white drop-shadow-md">
          COMPETITION DISCIPLINES
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {disciplines.map((discipline, index) => (
          <a key={discipline.id} href={discipline.link} className="flex flex-col rounded-xl overflow-hidden relative border border-white/10 transition-all duration-300 h-[260px] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] hover:border-accent-primary/50 group fade-in" style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="w-full flex-1 relative overflow-hidden bg-black/20">
              <img src={discipline.image} alt={discipline.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-transparent to-transparent via-transparent via-60% transition-colors duration-300 group-hover:from-accent-primary/80"></div>
            </div>
            <div className="w-full p-3 bg-[#151515] z-10 flex justify-center items-center shrink-0 h-[72px]">
              <h4 className="font-body text-white text-[1rem] font-bold tracking-wide m-0 text-center leading-tight">{discipline.name}</h4>
            </div>
          </a>
        ))}
        {/* Circuit board graphic spanning remaining layout columns */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 relative rounded-xl overflow-hidden fade-in" style={{ transitionDelay: '0.6s' }}>
          <img src={circuitBg} alt="Circuit Background" className="w-full h-full object-cover opacity-80" />
          
        </div>
      </div>
    </section>
  );
};

export default CompetitionDisciplines;
