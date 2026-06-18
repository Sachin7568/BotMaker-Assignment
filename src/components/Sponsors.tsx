import React from 'react';
import { sponsors } from '../data/sponsors';

const Sponsors = () => {
  return (
    <section className="pt-10 pb-20 border-b border-white/10 container-custom fade-in">
      <h3 className="font-heading font-bold text-2xl uppercase tracking-wide text-left text-white mb-12">SPONSORS</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 items-center fade-in">
        {sponsors.map(sponsor => (
          <div key={sponsor.id} className="flex justify-start items-center gap-6 h-[70px] opacity-70 transition-all duration-300 hover:opacity-100 hover:-translate-y-1 group cursor-pointer">
            <div className="h-full w-[90px] flex justify-center items-center shrink-0">
              <img src={sponsor.logo} alt={sponsor.name} className="max-w-full max-h-full object-contain grayscale brightness-200 transition-all duration-300 group-hover:grayscale-0 group-hover:brightness-100" />
            </div>
            <span className="text-gray-300 font-heading text-[1.1rem] uppercase font-bold tracking-wide leading-tight group-hover:text-white transition-colors">{sponsor.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
