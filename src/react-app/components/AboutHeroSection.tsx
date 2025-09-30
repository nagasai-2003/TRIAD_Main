import { ChevronDown } from 'lucide-react';

/**
 * A hero section for the About page, featuring a prominent headline, a brief mission statement,
 * and a call-to-action button to explore the company's vision.
 */
export default function AboutHeroSection() {
  return (
    <section 
      className="relative min-h-screen bg-gradient-to-br from-steel-navy via-steel-navy to-blue-900 flex items-center justify-center overflow-hidden"
      aria-labelledby="about-hero-heading"
    >
      {/* Optimized Background: A subtle, performant SVG grid pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#00CFFF" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-hero-grid)" />
        </svg>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Animated pyramid logo as a central visual element */}
        <div className="mb-8 flex justify-center" aria-hidden="true">
          <div className="relative">
            <img 
              src="https://mocha-cdn.com/0199154f-3e6d-7595-b23c-85f864415d25/Triad-Academy-Logo-Only-Transparent.png"
              alt="TRIAD Academy Logo"
              className="w-48 h-48 pyramid-glow pyramid-stack"
            />
            <div className="absolute inset-0 animate-pulse bg-sky-cyan/10 rounded-full blur-2xl"></div>
          </div>
        </div>
        
        {/* Main headline and mission statement */}
        <h1 
          id="about-hero-heading"
          className="font-montserrat font-bold text-5xl md:text-7xl text-arctic-white mb-6 fade-in"
        >
          From Basics to Breakthroughs.
        </h1>
        
        <p className="font-montserrat font-semibold text-xl md:text-2xl text-sky-cyan mb-12 fade-in">
          We exist to shape the future of learning, one student at a time.
        </p>
        
        {/* Call-to-action button to navigate to the vision and mission section */}
        <a href="#vision-mission" className="bg-sky-cyan text-steel-navy font-montserrat font-semibold px-10 py-5 rounded-2xl text-xl glow-cyan-hover transition-all duration-300 hover:scale-105 fade-in inline-block">
          Explore Our Vision
        </a>
      </div>
      
      {/* Animated scroll-down indicator */}
      <a 
        href="#vision-mission"
        aria-label="Scroll to vision and mission section"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20"
      >
        <ChevronDown className="w-8 h-8 text-sky-cyan" />
      </a>
    </section>
  );
}
