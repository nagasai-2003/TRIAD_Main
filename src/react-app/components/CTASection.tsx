import { Link } from 'react-router-dom';
import PyramidIcon from './PyramidIcon';

export default function CTASection() {
  return (
    <section 
      className="py-20 bg-gradient-to-br from-steel-navy via-steel-navy to-blue-900 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Optimized Background: A subtle, performant SVG grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#00CFFF" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Animated Pyramid */}
        <div className="mb-8 flex justify-center">
          <PyramidIcon className="w-32 h-32" animated={true} />
        </div>
        
        {/* Main Headline */}
        <h2 
          id="cta-heading"
          className="font-montserrat font-bold text-4xl md:text-6xl text-arctic-white mb-6 fade-in"
        >
          Think. Train. Transform.
        </h2>
        
        {/* Subheadline */}
        <p className="font-inter text-xl text-arctic-white/80 mb-12 max-w-2xl mx-auto leading-relaxed fade-in">
          Join thousands of students who have transformed their futures through code. 
          Your journey to becoming a tech innovator starts with a single step.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in">
          <Link to="/contact">
          <button className="bg-sky-cyan text-steel-navy font-montserrat font-bold px-10 py-5 rounded-2xl text-xl glow-cyan-hover transition-all duration-300 hover:scale-105 shadow-xl">
            Join TRIAD Today
          </button>
          </Link>
          <Link to="https://wa.me/7981947059" target='_blank'>
          <button className="border-2 border-sky-cyan bg-transparent text-sky-cyan font-montserrat font-semibold px-10 py-5 rounded-2xl text-xl hover:bg-sky-cyan hover:text-steel-navy transition-all duration-300 hover:scale-105">
            Talk to Us
          </button>
          </Link>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-arctic-white/60 fade-in">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-sky-cyan rounded-full"></div>
            <span className="font-inter text-sm">No hidden fees</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-sky-cyan rounded-full"></div>
            <span className="font-inter text-sm">Expert Trainers</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-sky-cyan rounded-full"></div>
            <span className="font-inter text-sm">Lifetime support</span>
          </div>
        </div>
      </div>
      
      {/* Floating code elements */}
      <div className="absolute top-20 left-10 text-sky-cyan/20 font-mono text-sm animate-pulse">
        {'while (learning) { grow(); }'}
      </div>
      <div className="absolute bottom-20 right-10 text-sky-cyan/20 font-mono text-sm animate-pulse">
        {'const future = await code();'}
      </div>
    </section>
  );
}
