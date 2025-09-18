import { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function CoursesHeroSection() {

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
