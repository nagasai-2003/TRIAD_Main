import { Rocket, Shield, Brain } from 'lucide-react';

export default function ThreePillarsSection() {
  const pillars = [
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Innovation",
      description: "Cutting-edge curriculum in AI, ML, and future tech. Stay ahead with tomorrow's technologies today."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Trust",
      description: "Transparent learning, no false promises, just proven knowledge. Build real skills with honest guidance."
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Intelligence",
      description: "Deep tech mastery from fundamentals to breakthroughs. Think critically, code intelligently."
    }
  ];

  return (
    <section className="py-20 bg-arctic-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-6">
            The 3 Pillars of TRIAD
          </h2>
          <p className="font-inter text-lg text-charcoal-gray max-w-2xl mx-auto">
            Our foundation is built on three core principles that drive excellence in tech education
          </p>
        </div>
        
        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group bg-frost-gray rounded-2xl p-8 text-center border-2 border-transparent hover:border-sky-cyan glow-cyan-hover transition-all duration-300 hover:scale-105 fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon Container */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border-2 border-frost-gray flex items-center justify-center text-steel-navy group-hover:border-sky-cyan group-hover:text-sky-cyan glow-cyan-hover transition-all duration-300">
                  {pillar.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="font-montserrat font-bold text-2xl text-steel-navy mb-4 group-hover:text-sky-cyan transition-colors duration-300">
                {pillar.title}
              </h3>
              
              {/* Description */}
              <p className="font-inter text-charcoal-gray leading-relaxed group-hover:text-steel-navy transition-colors duration-300">
                {pillar.description}
              </p>
              
              {/* Glowing accent line */}
              <div className="mt-6 mx-auto w-12 h-1 bg-sky-cyan/30 rounded group-hover:bg-sky-cyan group-hover:w-16 transition-all duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Visual separator */}
        <div className="mt-16 flex justify-center items-center space-x-4 fade-in">
          <div className="w-8 h-1 bg-sky-cyan rounded"></div>
          <div className="w-4 h-4 bg-sky-cyan transform rotate-45"></div>
          <div className="w-8 h-1 bg-sky-cyan rounded"></div>
        </div>
      </div>
    </section>
  );
}
