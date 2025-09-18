import { Rocket, Shield, Brain, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyTriadSection() {
  const pillars = [
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Innovation",
      description: "Future-ready curriculum that adapts to emerging technologies and industry demands."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Trust",
      description: "Experienced mentors and proven methodologies that have guided thousands to success."
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Intelligence",
      description: "Project-based mastery approach that builds both technical skills and critical thinking."
    }
  ];

  return (
    <section className="py-20 bg-arctic-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-6">
            Why Choose TRIAD?
          </h2>
          <p className="font-inter text-lg text-charcoal-gray max-w-2xl mx-auto">
            Three pillars that make us the premier choice for future-ready education
          </p>
        </div>
        
        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="text-center group fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon Container */}
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 bg-white rounded-2xl shadow-lg border-2 border-frost-gray flex items-center justify-center text-steel-navy group-hover:border-sky-cyan group-hover:text-sky-cyan glow-cyan-hover transition-all duration-300">
                  {pillar.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="font-montserrat font-bold text-2xl text-steel-navy mb-4 group-hover:text-sky-cyan transition-colors duration-300">
                {pillar.title}
              </h3>
              
              {/* Description */}
              <p className="font-inter text-charcoal-gray leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/why-triad"
            className="bg-sky-cyan text-steel-navy font-montserrat font-semibold px-8 py-4 rounded-2xl text-lg glow-cyan-hover transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Why Choose TRIAD?</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        
        {/* Visual separator with pyramid motif */}
        <div className="mt-16 flex justify-center items-center space-x-4 fade-in">
          <div className="w-8 h-1 bg-sky-cyan rounded"></div>
          <div className="w-4 h-4 bg-sky-cyan transform rotate-45"></div>
          <div className="w-8 h-1 bg-sky-cyan rounded"></div>
        </div>
      </div>
    </section>
  );
}
