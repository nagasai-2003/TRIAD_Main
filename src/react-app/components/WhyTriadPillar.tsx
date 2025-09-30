import { programPillars } from '../data/whytriadData';
import { ReactNode } from 'react';

interface PillarCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay: number;
}

const PillarCard = ({ icon, title, description, delay }: PillarCardProps) => (
  <div 
    className="group bg-white rounded-2xl p-8 shadow-lg glow-cyan-hover transition-all duration-300 border border-frost-gray fade-in"
    style={{ animationDelay: `${delay * 0.15}s` }}
  >
    <div className="flex items-center mb-6">
      <div className="bg-sky-cyan/10 p-3 rounded-full mr-6 group-hover:bg-sky-cyan/20 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-montserrat font-bold text-2xl text-steel-navy group-hover:text-sky-cyan transition-colors duration-300">
        {title}
      </h3>
    </div>
    <p className="font-inter text-charcoal-gray leading-relaxed">
      {description}
    </p>
  </div>
);

export default function WhyTriadPillars() {
  return (
    <section className="py-20 bg-frost-gray">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-6">
            The Three Pillars of TRIAD
          </h2>
          <p className="font-inter text-lg text-charcoal-gray max-w-3xl mx-auto">
            Our philosophy is built on a powerful framework designed to ensure your success and transformation in the tech industry.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
          {programPillars.map((pillar, index) => (
            <PillarCard
              key={index}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}