import { Link } from 'react-router-dom';
import PyramidIcon from './PyramidIcon';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {

  // --- Style Configurations for easy theme toggling ---

  // To revert to the bright theme, comment out the "Original Dark Theme" lines
  // and uncomment the "Bright Theme" lines for each variable.

  // Section Background
  // const sectionClassName = "relative min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-sky-100 flex items-center justify-center overflow-hidden"; // Bright Theme
  const sectionClassName = "relative min-h-screen bg-gradient-to-br from-steel-navy via-steel-navy to-blue-900 flex items-center justify-center overflow-hidden"; // Original Dark Theme

  // Main Headline Text Color
  // const h1ClassName = "font-montserrat font-bold text-5xl md:text-7xl text-steel-navy mb-6 fade-in"; // Bright Theme
  const h1ClassName = "font-montserrat font-bold text-5xl md:text-7xl text-arctic-white mb-6 fade-in"; // Original Dark Theme

  // Subheadline Text Color
  // const pClassName = "font-montserrat font-semibold text-xl md:text-2xl text-steel-navy/90 mb-12 fade-in"; // Bright Theme
  const pClassName = "font-montserrat font-semibold text-xl md:text-2xl text-sky-cyan mb-12 fade-in"; // Original Dark Theme

  // Secondary Button Class
  // const secondaryButtonClassName = "border-2 border-steel-navy bg-transparent text-steel-navy font-montserrat font-semibold px-8 py-4 rounded-2xl text-lg hover:bg-sky-cyan hover:text-white hover:border-sky-cyan transition-all duration-300"; // Bright Theme
  const secondaryButtonClassName = "border-2 border-steel-navy bg-transparent text-arctic-white font-montserrat font-semibold px-8 py-4 rounded-2xl text-lg hover:bg-sky-cyan hover:text-steel-navy hover:border-sky-cyan transition-all duration-300"; // Original Dark Theme
  
  // Floating Code Snippets
  // const floatingCodeClassName1 = "absolute top-20 left-10 text-steel-navy/30 font-mono text-sm animate-pulse"; // Bright Theme
  const floatingCodeClassName1 = "absolute top-20 left-10 text-sky-cyan/30 font-mono text-sm animate-pulse"; // Original Dark Theme
  // const floatingCodeClassName2 = "absolute bottom-32 right-10 text-steel-navy/30 font-mono text-sm animate-pulse"; // Bright Theme
  const floatingCodeClassName2 = "absolute bottom-32 right-10 text-sky-cyan/30 font-mono text-sm animate-pulse"; // Original Dark Theme

  return (
    <section className={sectionClassName}>
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-cyan/10 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-cyan/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Animated Pyramid with Glow */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-cyan/50 via-sky-cyan/70 to-sky-cyan/50 rounded-full blur-3xl opacity-90"></div>
            <PyramidIcon className="w-60 h-60 relative" animated={true} />
          </div>
        </div>
        
        {/* Main Headline */}
        <h1 className={h1ClassName}>
          Think. Train. Transform.
        </h1>
        
        {/* Subheadline */}
        <p className={pClassName}>
          Code today. Lead tomorrow. Shape the future with TRIAD Academy.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in">
          <Link to="/courses" className="bg-sky-cyan text-steel-navy font-montserrat font-semibold px-8 py-4 rounded-2xl text-lg glow-cyan-hover transition-all duration-300 hover:scale-105 inline-block">
            Explore Courses
          </Link>
          <Link to="/why-triad" className={secondaryButtonClassName}>
            Why to Choose TRIAD
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a href="#quick-intro" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-8 h-8 text-sky-cyan" />
      </a>
      
      {/* Floating code elements */}
      <div className={floatingCodeClassName1}>
        {'{ code: "future" }'}
      </div>
      <div className={floatingCodeClassName2}>
        {'function transform() { }'}
      </div>
    </section>
  );
}
