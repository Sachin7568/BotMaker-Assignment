import React from 'react';

const EcosystemForms = () => {
  const forms = [
    { id: 'judge', title: 'BECOME A JUDGE' },
    { id: 'volunteer', title: 'VOLUNTEER' },
    { id: 'community', title: 'COMMUNITY MEMBER' }
  ];

  return (
    <section id="community" className="section-padding container-custom fade-in">
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-left text-white drop-shadow-md mb-12">
        JOIN THE ECOSYSTEM
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[500px] lg:max-w-none mx-auto">
        {forms.map((form, index) => (
          <div key={form.id} className="bg-white/5 border border-white/10 rounded-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent-primary/30 fade-in" style={{ transitionDelay: `${index * 0.1}s` }}>
            <h3 className="text-[1.2rem] mb-6 text-center tracking-[1px]">{form.title}</h3>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input type="text" placeholder="Name" required className="w-full p-3 bg-black/50 border border-white/20 rounded text-text-primary font-body text-[1rem] transition-colors duration-300 focus:outline-none focus:border-accent-primary box-border" />
              </div>
              <div>
                <input type="text" placeholder="Location" required className="w-full p-3 bg-black/50 border border-white/20 rounded text-text-primary font-body text-[1rem] transition-colors duration-300 focus:outline-none focus:border-accent-primary box-border" />
              </div>
              <div>
                <input type="email" placeholder="Email" required className="w-full p-3 bg-black/50 border border-white/20 rounded text-text-primary font-body text-[1rem] transition-colors duration-300 focus:outline-none focus:border-accent-primary box-border" />
              </div>
              <button type="submit" className="btn btn-primary w-full mt-2">SIGN UP</button>
            </form>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EcosystemForms;
