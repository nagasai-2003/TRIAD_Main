import PyramidIcon from '@/react-app/components/PyramidIcon';
import { Link } from 'react-router-dom';

/**
 * A closing call-to-action (CTA) section that encourages users to join the academy or contact them.
 * It features a prominent headline, an animated pyramid icon, and two CTA buttons.
 */
export default function ClosingCTA() {
  return (
    <section 
      className="py-20 bg-gradient-to-br from-steel-navy via-steel-navy to-blue-900 relative overflow-hidden"
      aria-labelledby="closing-cta-heading"
    >
      {/* Optimized Background: A subtle, performant SVG grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="closing-cta-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#00CFFF" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#closing-cta-grid)" />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Animated pyramid icon as a central visual element */}
        <div className="mb-8 flex justify-center">
          <PyramidIcon className="w-24 h-24" animated={true} />
        </div>
        
        {/* Main headline and a brief, encouraging message */}
        <h2 
          id="closing-cta-heading"
          className="font-montserrat font-bold text-4xl md:text-6xl text-arctic-white mb-6 fade-in"
        >
          Code. Create. Conquer.
        </h2>
        
        <p className="font-inter text-xl text-arctic-white/80 mb-12 max-w-2xl mx-auto leading-relaxed fade-in">
          Your journey starts with a single step — talk to us today.
        </p>
        
        {/* CTA buttons for joining the academy or contacting them */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in">
          <Link to='/courses'>
            <button className="bg-sky-cyan text-steel-navy font-montserrat font-bold px-10 py-5 rounded-2xl text-xl glow-cyan-hover transition-all duration-300 hover:scale-105 shadow-xl">
              Join TRIAD Today
            </button>
          </Link>
          <Link to='https://wa.me/+917981947059' target='_blank'>
            <button className="border-2 border-sky-cyan bg-transparent text-sky-cyan font-montserrat font-semibold px-10 py-5 rounded-2xl text-xl hover:bg-sky-cyan hover:text-steel-navy transition-all duration-300 hover:scale-105">
              Talk to Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
