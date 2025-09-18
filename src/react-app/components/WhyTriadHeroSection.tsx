import { useState, useEffect } from 'react';
import { Link } from 'react-router';

export default function WhyTriadHeroSection() {
  const [visibleLayers, setVisibleLayers] = useState<number[]>([]);

  useEffect(() => {
    // Animate pyramid layers on mount
    const timers = [
      setTimeout(() => setVisibleLayers(prev => [...prev, 0]), 300),
      setTimeout(() => setVisibleLayers(prev => [...prev, 1]), 600),
      setTimeout(() => setVisibleLayers(prev => [...prev, 2]), 900),
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-steel-navy via-steel-navy to-blue-900 flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00CFFF" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-cyan/5 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-cyan/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* 3D Pyramid Illustration */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-80 h-80">
            {/* Base Layer */}
            <div 
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
                visibleLayers.includes(0) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-80 h-24 bg-gradient-to-r from-sky-cyan/30 to-steel-navy/40 glow-cyan"
                   style={{ clipPath: 'polygon(10% 100%, 90% 100%, 80% 0%, 20% 0%)' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-sky-cyan/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-arctic-white font-montserrat font-semibold text-sm">
                Strong Foundation
              </div>
            </div>

            {/* Middle Layer */}
            <div 
              className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-300 ${
                visibleLayers.includes(1) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-60 h-20 bg-gradient-to-r from-sky-cyan/50 to-steel-navy/60 glow-cyan"
                   style={{ clipPath: 'polygon(15% 100%, 85% 100%, 75% 0%, 25% 0%)' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-sky-cyan/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-arctic-white font-montserrat font-semibold text-sm">
                Growing Innovation
              </div>
            </div>

            {/* Top Layer */}
            <div 
              className={`absolute bottom-36 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-600 ${
                visibleLayers.includes(2) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-40 h-16 bg-gradient-to-r from-sky-cyan/70 to-steel-navy/80 glow-cyan"
                   style={{ clipPath: 'polygon(20% 100%, 80% 100%, 70% 0%, 30% 0%)' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-sky-cyan/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-arctic-white font-montserrat font-semibold text-sm">
                Future Peaks
              </div>
            </div>

            {/* Glowing orb at peak */}
            <div 
              className={`absolute top-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-900 ${
                visibleLayers.includes(2) 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-50'
              }`}
            >
              <div className="w-8 h-8 bg-sky-cyan rounded-full glow-cyan animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Main Headline */}
        <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-arctic-white mb-8 fade-in">
          The TRIAD Advantage
        </h1>
        
        {/* Subheadline */}
        <p className="font-montserrat font-semibold text-xl md:text-2xl text-sky-cyan mb-12 max-w-3xl mx-auto leading-relaxed fade-in">
          Built on a strong foundation, growing with innovation, reaching future peaks.
        </p>
        
        {/* CTA Button */}
        <div className="fade-in">
          <Link 
            to="/courses" 
            className="inline-block bg-sky-cyan text-steel-navy font-montserrat font-bold px-12 py-6 rounded-2xl text-xl glow-cyan-hover transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Start Learning Today
          </Link>
        </div>
      </div>
      
      {/* Floating code elements */}
      <div className="absolute top-20 left-10 text-sky-cyan/30 font-mono text-sm animate-pulse">
        {'const advantage = "TRIAD";'}
      </div>
      <div className="absolute bottom-32 right-10 text-sky-cyan/30 font-mono text-sm animate-pulse">
        {'function transform() { return future; }'}
      </div>
    </section>
  );
}
