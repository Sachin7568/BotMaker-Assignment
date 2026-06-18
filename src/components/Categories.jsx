import React from 'react';
import { categories } from '../data/categories';

const Categories = () => {
  return (
    <section className="section-padding fade-in bg-[#141414]">
      <div className="container-custom">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-16 tracking-wide text-left text-white drop-shadow-md">
          CATEGORIES
        </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={category.id} className="group bg-[#222222] border border-white/10 rounded-xl p-8 flex flex-col justify-between h-full transition-all duration-300 relative overflow-hidden hover:-translate-y-2 hover:border-white/30 fade-in" style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="absolute top-0 left-0 w-full h-1 bg-accent-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            
            <div className="mb-8 h-[60px]">
              <img src={category.icon} alt={category.name} className="h-full object-contain" />
            </div>
            <div>
              <h4 className="text-[1.2rem] mb-2 uppercase text-text-primary">{category.name}</h4>
              <p className="text-text-secondary text-[0.9rem] mb-8">Age Group: {category.ageGroup}</p>
            </div>
            <a href={category.link} className="text-accent-primary font-heading text-[0.9rem] font-bold uppercase tracking-[1px] self-start transition-colors duration-300 hover:text-[#FF6666] hover:underline">Learn More &gt;</a>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
