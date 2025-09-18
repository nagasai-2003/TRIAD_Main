import { ChevronDown } from 'lucide-react';

export default function AboutHeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-steel-navy via-steel-navy to-blue-900 flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-cyan/10 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-cyan/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Animated Pyramid Stack */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src="https://mocha-cdn.com/0199154f-3e6d-7595-b23c-85f864415d25/Triad-Academy-Logo-Only-Transparent.png"
              alt="TRIAD Academy Logo"
              className="w-48 h-48 pyramid-glow pyramid-stack"
            />
            <div className="absolute inset-0 animate-pulse bg-sky-cyan/10 rounded-full blur-2xl"></div>
          </div>
        </div>
        
        {/* Hero Content */}
        <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-arctic-white mb-6 fade-in">
          From Basics to Breakthroughs.
        </h1>
        
        <p className="font-montserrat font-semibold text-xl md:text-2xl text-sky-cyan mb-12 fade-in">
          We exist to shape the future of learning, one student at a time.
        </p>
        
        <a href="#vision-mission" className="bg-sky-cyan text-steel-navy font-montserrat font-semibold px-10 py-5 rounded-2xl text-xl glow-cyan-hover transition-all duration-300 hover:scale-105 fade-in inline-block">
          Explore Our Vision
        </a>
      </div>
      
      {/* Scroll indicator */}
      <a href="#vision-mission" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-8 h-8 text-sky-cyan" />
      </a>
    </section>
  );
}