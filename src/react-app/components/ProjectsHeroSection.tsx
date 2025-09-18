import { useEffect } from 'react';
import PyramidIcon from './PyramidIcon';
import { ChevronDown } from 'lucide-react';

export default function ProjectsHeroSection() {

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-steel-navy via-steel-navy to-blue-900 flex items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-cyan/10 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-cyan/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Animated Pyramid */}
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
        
        {/* CTA Button */}
        <div className="fade-in">
          <a 
            href="#all-projects"
            className="bg-sky-cyan text-steel-navy font-montserrat font-semibold px-10 py-5 rounded-2xl text-xl glow-cyan-hover transition-all duration-300 hover:scale-105 inline-block"
          >
            Explore Student Projects
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a href="#all-projects" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-8 h-8 text-sky-cyan" />
      </a>
      
      {/* Floating code elements */}
      <div className="absolute top-20 left-10 text-sky-cyan/30 font-mono text-sm animate-pulse">
        {'{ innovation: "unlimited" }'}
      </div>
      <div className="absolute bottom-32 right-10 text-sky-cyan/30 font-mono text-sm animate-pulse">
        {'const project = build();'}
      </div>
    </section>
  );
}
