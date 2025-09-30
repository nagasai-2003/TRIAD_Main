
import PyramidIcon from '@/react-app/components/PyramidIcon';
import ScrollDownArrow from '@/react-app/components/ScrollDownArrow';

/**
 * A hero section for the contact page.
 * It features a prominent headline, an animated pyramid icon, and a scroll-down arrow.
 * Optimized for performance by using a subtle SVG grid for the background instead of heavy blur effects.
 */
export default function ContactHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-steel-navy via-steel-navy to-blue-900 flex items-center justify-center overflow-hidden">
      {/* Optimized Background: A subtle, performant SVG grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#00CFFF" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-hero-grid)" />
        </svg>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pb-20">
        {/* Animated pyramid icon as a central visual element */}
        <div className="mb-8 flex justify-center">
          <PyramidIcon className="w-32 h-32" animated={true} />
        </div>
        
        {/* Main headline and a brief, encouraging message */}
        <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-arctic-white mb-6 fade-in">
          Let's Build Your Future Together.
        </h1>
        
        <p className="font-montserrat font-semibold text-xl md:text-2xl text-sky-cyan mb-12 fade-in">
          Reach out to TRIAD Academy — we're here to guide your journey.
        </p>
        
        {/* A scroll-down arrow to guide the user to the contact form */}
        <ScrollDownArrow href="#contact-form" />
      </div>
      
      {/* Decorative floating code snippets for a techy feel */}
      <div className="absolute top-20 left-10 text-sky-cyan/30 font-mono text-sm animate-pulse">
        {'{ connect: true }'}
      </div>
      <div className="absolute bottom-32 right-10 text-sky-cyan/30 font-mono text-sm animate-pulse">
        {'const future = await contact();'}
      </div>
    </section>
  );
}
