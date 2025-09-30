import PyramidIcon from '@/react-app/components/PyramidIcon';
import { Navigation } from 'lucide-react';

/**
 * A component that displays a stylized map placeholder and location information.
 * In a real application, this would be replaced with an embedded map service like Google Maps.
 */
export default function Map() {
  // The URL to open when the 'Get Directions' button is clicked.
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=TRIAD+Academy+Guntur";

  // A function to handle the click event on the 'Get Directions' button.
  const handleDirectionsClick = () => {
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-arctic-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-6">
            Find Us
          </h2>
          <p className="font-inter text-lg text-charcoal-gray">
            Visit our global learning hub or connect virtually
          </p>
        </div>
        
        {/* Map Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-frost-gray fade-in">
          {/* Placeholder for an interactive map */}
          <div className="h-96 bg-gradient-to-br from-steel-navy/10 to-sky-cyan/10 flex items-center justify-center relative overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <circle cx="200" cy="200" r="150" stroke="#1F3C5B" strokeWidth="2" fill="none" />
                <circle cx="200" cy="200" r="100" stroke="#00CFFF" strokeWidth="2" fill="none" />
                <circle cx="200" cy="200" r="50" stroke="#1F3C5B" strokeWidth="2" fill="none" />
              </svg>
            </div>
            
            {/* Central content of the map placeholder */}
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-sky-cyan rounded-full flex items-center justify-center mx-auto mb-4 glow-cyan">
                <PyramidIcon className="w-12 h-12" animated={false} />
              </div>
              <h3 className="font-montserrat font-bold text-2xl text-steel-navy mb-2">
                TRIAD Academy
              </h3>
              <p className="font-inter text-charcoal-gray mb-6">
                Guntur District, Andhra Pradesh
              </p>
              
              {/* 'Get Directions' button */}
              <button 
                onClick={handleDirectionsClick}
                aria-label="Get directions to TRIAD Academy on Google Maps"
                className="bg-sky-cyan text-steel-navy font-montserrat font-semibold px-6 py-3 rounded-xl glow-cyan-hover transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
              >
                <Navigation className="w-5 h-5" />
                <span>Get Directions</span>
              </button>
            </div>
          </div>
          
          {/* Overlay with opening hours */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-lg rounded-lg p-4 shadow-lg border border-frost-gray">
            <p className="font-inter text-sm text-charcoal-gray">
              <span className="font-semibold">Open:</span> Mon-Sat 9AM-6PM IST
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
