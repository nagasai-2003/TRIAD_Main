import { useEffect } from 'react';
import PyramidIcon from './PyramidIcon';
import { ChevronDown } from 'lucide-react';

/**
 * The hero section for the Projects page.
 * It sets a compelling tone with a strong headline, an animated pyramid, and a call to explore student projects.
 * Optimized for performance by using a subtle SVG grid for the background instead of heavy blur effects.
 */
export default function ProjectsHeroSection() {

  // An effect to enable smooth scrolling for anchor links on this page.
  useEffect(() => {
    // Apply smooth scrolling to the root element.
    document.documentElement.style.scrollBehavior = 'smooth';
    // Clean up the effect by reverting to default scroll behavior when the component unmounts.
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-steel-navy via-steel-navy to-blue-900 flex items-center justify-center overflow-hidden">
      {/* Optimized Background: A subtle, performant SVG grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="projects-hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#00CFFF" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#projects-hero-grid)" />
        </svg>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Animated Pyramid Icon */}
        <div className="mb-8 flex justify-center">
          <PyramidIcon className="w-40 h-40" animated={true} />
        </div>
        
        {/* Main Headline */}
        <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-arctic-white mb-6 fade-in">
          Learn by Building. Build by Creating.
        </h1>
        
        {/* Subheadline */}
        <p className="font-montserrat font-semibold text-xl md:text-2xl text-sky-cyan mb-12 fade-in">
          Real projects. Real skills. Real impact.
        </p>
        
        {/* Description */}
        <p className="font-inter text-lg text-arctic-white/80 mb-12 max-w-3xl mx-auto leading-relaxed fade-in">
          Discover the innovative projects built by TRIAD Academy students. From AI chatbots to quantum simulators, 
          see how our hands-on approach transforms learners into creators.
        </p>
        
        {/* Call-to-action Button */}
        <div className="fade-in">
          <a 
            href="#all-projects"
            aria-label="Explore student projects"
            className="bg-sky-cyan text-steel-navy font-montserrat font-semibold px-10 py-5 rounded-2xl text-xl glow-cyan-hover transition-all duration-300 hover:scale-105 inline-block"
          >
            Explore Student Projects
          </a>
        </div>
      </div>
      
      {/* Animated scroll-down indicator */}
      <a 
        href="#all-projects" 
        aria-label="Scroll down to all projects"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20"
      >
        <ChevronDown className="w-8 h-8 text-sky-cyan" />
      </a>
      
      {/* Decorative floating code snippets */}
      <div className="absolute top-20 left-10 text-sky-cyan/30 font-mono text-sm animate-pulse">
        {'{ innovation: "unlimited" }'}
      </div>
      <div className="absolute bottom-32 right-10 text-sky-cyan/30 font-mono text-sm animate-pulse">
        {'const project = build();'}
      </div>
    </section>
  );
}
