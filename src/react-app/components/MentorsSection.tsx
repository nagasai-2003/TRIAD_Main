import { useState, useMemo } from 'react';
import { mentors } from '@/react-app/data/about';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Define the structure of a Mentor object for type safety.
interface Mentor {
  name: string;
  expertise: string;
  quote: string;
  image: string;
}

/**
 * A card component to display information about a single mentor.
 * @param {object} props - The component props.
 * @param {Mentor} props.mentor - The mentor data to display.
 * @param {number} props.delay - The animation delay for the card's entrance.
 */
const MentorCard = ({ mentor, delay }: { mentor: Mentor; delay: number }) => (
  <div 
    className="group bg-white rounded-2xl p-6 shadow-lg glow-cyan-hover transition-all duration-300 border border-frost-gray fade-in w-full sm:w-80 flex-shrink-0"
    style={{ animationDelay: `${delay * 0.1}s` }} // Staggered animation
  >
    <div className="text-center">
      <img 
        src={mentor.image}
        alt={`Portrait of ${mentor.name}`}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-frost-gray group-hover:border-sky-cyan transition-colors duration-300"
      />
      <h3 className="font-montserrat font-bold text-lg text-steel-navy mb-2 group-hover:text-sky-cyan transition-colors duration-300">
        {mentor.name}
      </h3>
      <p className="font-inter text-sm text-sky-cyan mb-4">
        {mentor.expertise}
      </p>
      {/* Mentor's quote, revealed on hover for a cleaner initial look */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-16 flex items-center justify-center">
        <p className="font-inter text-sm text-charcoal-gray italic">
          \"{mentor.quote}\"
        </p>
      </div>
    </div>
  </div>
);

/**
 * A section to showcase the expert mentors at TRIAD Academy.
 * It features a carousel to navigate through mentor profiles.
 */
export default function MentorsSection() {
  // State to manage the current page of the mentor carousel.
  const [currentPage, setCurrentPage] = useState(0);
  
  // Configuration for the number of mentors to display per page.
  const mentorsPerPage = 3;
  
  // Memoized calculation of the total number of pages.
  const numPages = useMemo(() => Math.ceil(mentors.length / mentorsPerPage), [mentors.length]);

  // Handler to navigate to the previous page.
  const handlePrev = () => {
    setCurrentPage(prev => Math.max(prev - 1, 0));
  };

  // Handler to navigate to the next page.
  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, numPages - 1));
  };

  // Determine if navigation arrows should be displayed.
  const shouldShowArrows = mentors.length > mentorsPerPage;

  // Memoize the paginated mentors array to avoid recalculation on re-renders.
  const pages = useMemo(() => {
    const p: Mentor[][] = [];
    for (let i = 0; i < mentors.length; i += mentorsPerPage) {
      p.push(mentors.slice(i, i + mentorsPerPage));
    }
    return p;
  }, [mentors.length]);

  return (
    <section className="py-20 bg-frost-gray">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-6">
            Guided by Experts
          </h2>
          <p className="font-inter text-lg text-charcoal-gray mb-4">
            Our mentors are not just teachers — they're industry guides shaping tomorrow's innovators.
          </p>
        </div>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Previous Button */}
          {shouldShowArrows && (
            <button 
              onClick={handlePrev} 
              disabled={currentPage === 0}
              aria-label="Previous mentors"
              className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white rounded-full p-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10 shadow-md"
            >
              <ChevronLeft className="w-6 h-6 text-steel-navy" />
            </button>
          )}

          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {pages.map((page, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0 flex justify-center gap-8">
                  {page.map((mentor, index) => (
                    <MentorCard
                      key={index}
                      mentor={mentor}
                      delay={index}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          {shouldShowArrows && (
            <button 
              onClick={handleNext} 
              disabled={currentPage >= numPages - 1}
              aria-label="Next mentors"
              className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white rounded-full p-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10 shadow-md"
            >
              <ChevronRight className="w-6 h-6 text-steel-navy" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
