import { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * A hero section for the courses page.
 * It features a prominent headline, a subheadline, a CTA button, and a scroll indicator.
 * Optimized for performance by using a subtle SVG grid for the background instead of heavy blur effects.
 */
export default function CoursesHeroSection() {

  // An effect to enable smooth scrolling when the component mounts
  useEffect(() => {
    // Enable smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    // Disable smooth scrolling when the component unmounts
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-steel-navy via-steel-navy to-blue-900 flex items-center justify-center overflow-hidden">
      {/* Optimized Background: A subtle, performant SVG grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="courses-hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#00CFFF" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#courses-hero-grid)" />
        </svg>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Main Headline */}
        <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-arctic-white mb-6 fade-in">
          Learn to Code. Build the Future.
        </h1>
        
        {/* Subheadline */}
        <p className="font-inter text-xl md:text-2xl text-frost-gray mb-12 fade-in max-w-4xl mx-auto leading-relaxed">
          Explore TRIAD Academy's curated programs designed to take you from foundations to future tech mastery.
        </p>
        
        {/* CTA Button */}
        <div className="fade-in">
          <a 
            href="#all-courses"
            className="bg-sky-cyan text-steel-navy font-montserrat font-semibold px-10 py-5 rounded-2xl text-xl glow-cyan-hover transition-all duration-300 hover:scale-105 inline-block"
          >
            Start Learning Today
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#all-courses" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-8 h-8 text-sky-cyan" />
      </a>
      
      {/* Floating code elements */}
      <div className="absolute top-20 left-10 text-sky-cyan/30 font-mono text-sm animate-pulse">
        {'while(learning) { grow++; }'}
      </div>
      <div className="absolute bottom-32 right-10 text-sky-cyan/30 font-mono text-sm animate-pulse">
        {'const future = await learn();'}
      </div>
    </section>
  );
}
