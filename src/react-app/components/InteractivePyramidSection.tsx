import { useState } from 'react';
import { pyramidLayers } from '@/react-app/data/about';

export default function InteractivePyramidSection() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  return (
    <section className="py-20 bg-arctic-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-6">
            The Pyramid Metaphor
          </h2>
          <p className="font-inter text-lg text-charcoal-gray">
            Our learning journey from foundation to future mastery
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Interactive Pyramid Visual */}
          <div className="lg:w-1/2 relative flex justify-center items-center">
            <img 
              src="src/Images/Triad_Academy_Logo_under_text_Transparent.png"
              alt="TRIAD Academy Logo"
              className="w-120 h-120 object-contain pyramid-glow"
            />
          </div>
          
          {/* Layer Information */}
          <div className="lg:w-1/2">
            {pyramidLayers.map((layer, index) => (
              <div 
                key={index}
                className={`mb-6 p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  activeLayer === index 
                    ? 'border-sky-cyan bg-sky-cyan/5 glow-cyan' 
                    : 'border-frost-gray bg-white hover:border-sky-cyan'
                }`}
                onClick={() => setActiveLayer(activeLayer === index ? null : index)}
              >
                <h3 className="font-montserrat font-bold text-xl text-steel-navy mb-2">
                  {layer.title}
                </h3>
                <p className="font-montserrat font-semibold text-sky-cyan mb-3">
                  {layer.subtitle}
                </p>
                <p className="font-inter text-charcoal-gray">
                  {layer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}