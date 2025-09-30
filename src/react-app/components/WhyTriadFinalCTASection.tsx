import { Link } from 'react-router-dom';
import PyramidIcon from './PyramidIcon';

export default function WhyTriadFinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-steel-navy via-steel-navy to-blue-900 relative overflow-hidden" aria-labelledby="final-cta-heading">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-cyan/10 via-transparent to-sky-cyan/10" aria-hidden="true"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-cyan/5 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-cyan/5 rounded-full blur-3xl" aria-hidden="true"></div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="final-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00CFFF" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#final-grid)" />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Animated Pyramid */}
        <div className="mb-8 flex justify-center">
          <PyramidIcon className="w-32 h-32" animated={true} />
        </div>
        
        {/* Main Headline */}
        <h2 id="final-cta-heading" className="font-montserrat font-bold text-4xl md:text-6xl text-arctic-white mb-8 fade-in">
          Choose TRIAD. Choose the Future.
        </h2>
        
        {/* Subheadline */}
        <p className="font-inter text-xl text-arctic-white/80 mb-12 max-w-3xl mx-auto leading-relaxed fade-in">
          Don't just learn to code — learn to innovate, create, and transform the world. 
          Your journey to becoming a tech leader starts here.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 fade-in">
          <Link 
            to="/courses"
            className="bg-sky-cyan text-steel-navy font-montserrat font-bold px-12 py-6 rounded-2xl text-xl glow-cyan-hover transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Get Started
          </Link>
          <Link 
            to="/courses"
            className="border-2 border-sky-cyan bg-transparent text-sky-cyan font-montserrat font-semibold px-12 py-6 rounded-2xl text-xl hover:bg-sky-cyan hover:text-steel-navy transition-all duration-300 hover:scale-105"
          >
            View Courses
          </Link>
        </div>
        
        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-arctic-white/60 fade-in" role="list">
          <div className="flex items-center space-x-2" role="listitem">
            <div className="w-2 h-2 bg-sky-cyan rounded-full animate-pulse" aria-hidden="true"></div>
            <span className="font-inter text-sm">Future-ready curriculum</span>
          </div>
          <div className="flex items-center space-x-2" role="listitem">
            <div className="w-2 h-2 bg-sky-cyan rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} aria-hidden="true"></div>
            <span className="font-inter text-sm">Global industry standards</span>
          </div>
          <div className="flex items-center space-x-2" role="listitem">
            <div className="w-2 h-2 bg-sky-cyan rounded-full animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true"></div>
            <span className="font-inter text-sm">Expert mentorship</span>
          </div>
        </div>
        
        {/* Final accent */}
        <div className="mt-12 flex justify-center items-center space-x-4 fade-in" aria-hidden="true">
          <div className="w-12 h-1 bg-sky-cyan rounded"></div>
          <div className="w-6 h-6 bg-sky-cyan transform rotate-45 animate-pulse"></div>
          <div className="w-12 h-1 bg-sky-cyan rounded"></div>
        </div>
      </div>
      
      {/* Floating code elements */}
      <div className="absolute top-20 left-10 text-sky-cyan/20 font-mono text-sm animate-pulse" aria-hidden="true">
        {'while (learning) { innovate(); }'}
      </div>
      <div className="absolute bottom-20 right-10 text-sky-cyan/20 font-mono text-sm animate-pulse" aria-hidden="true">
        {'const future = await TRIAD();'}
      </div>
    </section>
  );
}
