import PyramidIcon from '@/react-app/components/PyramidIcon';
import ScrollDownArrow from '@/react-app/components/ScrollDownArrow';

export default function ContactHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-steel-navy via-steel-navy to-blue-900 flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-cyan/10 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-cyan/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pb-20">
        {/* Animated Pyramid */}
        <div className="mb-8 flex justify-center">
          <PyramidIcon className="w-32 h-32" animated={true} />
        </div>
        
        {/* Main Headline */}
        <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-arctic-white mb-6 fade-in">
          Let's Build Your Future Together.
        </h1>
        
        {/* Subheadline */}
        <p className="font-montserrat font-semibold text-xl md:text-2xl text-sky-cyan mb-12 fade-in">
          Reach out to TRIAD Academy — we're here to guide your journey.
        </p>
        
        {/* Scroll indicator */}
        <ScrollDownArrow href="#contact-form" />
      </div>
      
      {/* Floating code elements */}
      <div className="absolute top-20 left-10 text-sky-cyan/30 font-mono text-sm animate-pulse">
        {'{ connect: true }'}
      </div>
      <div className="absolute bottom-32 right-10 text-sky-cyan/30 font-mono text-sm animate-pulse">
        {'const future = await contact();'}
      </div>
    </section>
  );
}
