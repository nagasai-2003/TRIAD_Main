import { Link } from 'react-router-dom';

/**
 * A call-to-action (CTA) section that encourages users to explore courses or contact the academy.
 * It features a prominent headline, two buttons, and decorative background effects.
 */
export default function AboutCTASection() {
  return (
    <section 
      className="py-20 bg-gradient-to-br from-steel-navy via-steel-navy to-blue-900 relative overflow-hidden"
      aria-labelledby="about-cta-heading"
    >
      {/* Optimized Background: A subtle, performant SVG grid pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-cta-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#00CFFF" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-cta-grid)" />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main headline, using a bold, stylized font */}
        <h2 
          id="about-cta-heading"
          className="font-montserrat font-bold text-4xl md:text-6xl text-arctic-white mb-12 fade-in"
        >
          Think. Train. Transform.
        </h2>
        
        {/* Container for the CTA buttons, arranged in a row on larger screens */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in">
          {/* Link to the courses page, styled as a primary button */}
          <Link 
            to="/courses"
            className="bg-sky-cyan text-steel-navy font-montserrat font-bold px-10 py-5 rounded-2xl text-xl glow-cyan-hover transition-all duration-300 hover:scale-105"
          >
            Explore Courses
          </Link>
          {/* Link to a WhatsApp chat, styled as a secondary button */}
          <Link 
            to='https://wa.me/+917981947059' 
            target='_blank'
            className="border-2 border-sky-cyan bg-transparent text-sky-cyan font-montserrat font-semibold px-10 py-5 rounded-2xl text-xl hover:bg-sky-cyan hover:text-steel-navy transition-all duration-300 hover:scale-105"
          >
            Talk to Us
          </Link>
        </div>
      </div>
      
      {/* Decorative floating code elements with a pulsing animation */}
      <div className="absolute top-20 left-10 text-sky-cyan/20 font-mono text-sm animate-pulse" aria-hidden="true">
        {'while (learning) { innovate(); }'}
      </div>
      <div className="absolute bottom-20 right-10 text-sky-cyan/20 font-mono text-sm animate-pulse" aria-hidden="true">
        {'const future = await TRIAD();'}
      </div>
    </section>
  );
}
