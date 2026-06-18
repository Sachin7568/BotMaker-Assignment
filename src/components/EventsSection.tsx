import React from 'react';
import { events } from '../data/events';

const EventsSection = () => {
  return (
    <section id="events" className="section-padding fade-in relative bg-[#141414]">
      {/* Ambient lighting effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      
      <div className="container-custom relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-16 tracking-wide text-left text-white drop-shadow-md">
          COMPETITIONS & EVENTS
        </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* LIVE NOW */}
        <div className="fade-in flex flex-col">
          <h3 className="text-accent-primary font-heading text-[1.3rem] lg:text-[1.5rem] uppercase tracking-wide mb-6">LIVE NOW</h3>
          {events.live.map(event => (
            <div key={event.id} className="bg-[#151515] border border-white/10 rounded-xl p-6 flex-1 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">{event.name}</h4>
                  <p className="text-gray-400 text-sm m-0">{event.desc}</p>
                </div>
                <span className="bg-accent-primary text-white text-xs px-3 py-1 rounded font-bold uppercase tracking-wider">Ongoing</span>
              </div>
              
              <hr className="border-white/10 my-4" />
              
              {/* Tournament Bracket Visualization */}
              <div className="relative h-[200px] mt-6 w-full">
                {/* Quarter-finals Layer */}
                <div className="absolute top-0 left-0 w-[25%] bg-[#444] h-[28px] rounded-[4px] shadow-sm"></div>
                <div className="absolute top-[57px] left-0 w-[25%] bg-[#444] h-[28px] rounded-[4px] shadow-sm"></div>
                <div className="absolute bottom-[57px] left-0 w-[25%] bg-[#444] h-[28px] rounded-[4px] shadow-sm"></div>
                <div className="absolute bottom-0 left-0 w-[25%] bg-[#444] h-[28px] rounded-[4px] shadow-sm"></div>
                
                {/* Quarter to Semi-final Connectors */}
                <div>
                  <div className="absolute top-[14px] left-[25%] w-[10%] h-[57px] border-t border-r border-b border-accent-primary rounded-r"></div>
                  <div className="absolute top-[42.5px] left-[35%] w-[10%] h-0 border-t border-accent-primary"></div>
                </div>
                
                <div>
                  <div className="absolute bottom-[14px] left-[25%] w-[10%] h-[57px] border-t border-r border-b border-accent-primary rounded-r"></div>
                  <div className="absolute bottom-[42.5px] left-[35%] w-[10%] h-0 border-t border-accent-primary"></div>
                </div>

                {/* Semi-finals Layer */}
                <div className="absolute top-[28.5px] left-[45%] w-[25%] bg-[#444] h-[28px] rounded-[4px] z-10 shadow-sm"></div>
                <div className="absolute bottom-[28.5px] left-[45%] w-[25%] bg-[#444] h-[28px] rounded-[4px] z-10 shadow-sm"></div>

                {/* Semi-final to Final Connector */}
                <div className="absolute top-[42.5px] left-[65%] w-[15%] h-[115px] border-t border-r border-b border-accent-primary rounded-r"></div>
                
                {/* Final Match Connector */}
                <div className="absolute top-[100px] left-[80%] w-[5%] h-0 border-t border-accent-primary"></div>

                {/* Finals Layer */}
                <div className="absolute top-[86px] left-[85%] w-[15%] bg-[#444] h-[28px] rounded-[4px] z-10 shadow-sm"></div>
              </div>
            </div>
          ))}
        </div>

        {/* UPCOMING */}
        <div className="fade-in flex flex-col">
          <h3 className="text-white font-heading text-[1.3rem] lg:text-[1.5rem] uppercase tracking-wide mb-6">UPCOMING</h3>
          <div className="flex flex-col h-full gap-6">
            {events.upcoming.map(event => (
              <div key={event.id} className="bg-[#151515] border border-white/10 rounded-xl p-6 flex flex-col justify-between flex-1 shadow-lg">
                <div>
                  <h4 className="text-white font-bold text-lg mb-4">{event.name}</h4>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="flex flex-col">
                      <span className="text-white text-xs font-bold mb-1">Date</span>
                      <span className="text-gray-400 text-sm">{event.date}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-xs font-bold mb-1">Location</span>
                      <span className="text-gray-400 text-sm">{event.location}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-xs font-bold mb-1">Category</span>
                      <span className="text-gray-400 text-sm">{event.category}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-accent-primary hover:bg-accent-primary/80 text-white font-bold py-3 rounded transition-colors text-sm tracking-wider uppercase mt-auto">
                  REGISTER
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* PAST RESULTS */}
        <div className="fade-in flex flex-col">
          <h3 className="text-white font-heading text-[1.3rem] lg:text-[1.5rem] uppercase tracking-wide mb-6">PAST RESULTS</h3>
          <div className="bg-[#151515] border border-white/10 rounded-xl p-6 flex-1 shadow-lg">
            {events.past.map((event, index) => (
              <React.Fragment key={event.id}>
                <div className="py-5 first:pt-2 last:pb-2 transition-colors hover:bg-white/5 rounded-md -mx-4 px-4 cursor-pointer">
                  <h4 className="text-white font-bold text-lg mb-1">{event.name}</h4>
                  <p className="text-gray-400 text-sm m-0">{event.desc}</p>
                </div>
                {index < events.past.length - 1 && <hr className="border-white/10 my-1" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};

export default EventsSection;
