import { useState, useEffect } from 'react';
import { milestones } from '@/react-app/data/about';

export default function JourneySection() {
  const [visibleMilestones, setVisibleMilestones] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleMilestones(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const milestoneElements = document.querySelectorAll('.milestone');
    milestoneElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    }
  }, []);

  return (
    <section className="py-20 bg-frost-gray">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-6">
            The TRIAD Story
          </h2>
          <p className="font-inter text-lg text-charcoal-gray">
            Our journey from coding fundamentals to future tech innovation
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-sky-cyan/30"></div>
          
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className={`milestone relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              data-index={index}
            >
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 ${
                  visibleMilestones.includes(index) ? 'opacity-100 translate-y-0 glow-cyan' : 'opacity-50 translate-y-8'
                }`}>
                  <div className="flex items-center mb-4 justify-center">
                    <div className="text-sky-cyan mr-3">
                      {milestone.icon}
                    </div>
                    <span className="font-montserrat font-bold text-2xl text-steel-navy">
                      {milestone.year}
                    </span>
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-steel-navy mb-3">
                    {milestone.title}
                  </h3>
                  <p className="font-inter text-charcoal-gray">
                    {milestone.description}
                  </p>
                </div>
              </div>
              
              {/* Timeline node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className={`w-4 h-4 rounded-full transition-all duration-500 ${
                  visibleMilestones.includes(index) ? 'bg-sky-cyan glow-cyan scale-150' : 'bg-frost-gray'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}