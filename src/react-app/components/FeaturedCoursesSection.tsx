import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { allCourses } from '@/react-app/data/courses';
import CourseCard from '@/react-app/components/shared/CourseCard';

/**
 * A section that showcases featured courses with a slider.
 * It filters the `allCourses` data to display only the projects marked as featured.
 */
export default function FeaturedCoursesSection() {
  // Memoize the featured courses to avoid re-filtering on every render.
  const featuredCourses = useMemo(() => allCourses.filter(course => course.featured), []);
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex(prev => Math.min(featuredCourses.length - 3, prev + 1));
  };

  // Determine if the slider should be active and which courses to show.
  const isSlider = featuredCourses.length > 3;
  const coursesToShow = isSlider ? featuredCourses.slice(startIndex, startIndex + 3) : featuredCourses;

  // Dynamically determine the grid columns class based on the number of featured courses.
  const getGridColsClass = () => {
    if (isSlider) return 'md:grid-cols-3';
    return `md:grid-cols-${featuredCourses.length}`;
  };

  return (
    <section 
      className="py-20 bg-arctic-white"
      aria-labelledby="featured-courses-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 
            id="featured-courses-heading"
            className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-6"
          >
            Featured Courses
          </h2>
          <p className="font-inter text-lg text-charcoal-gray max-w-2xl mx-auto">
            Transform your potential into expertise with our carefully crafted curriculum
          </p>
        </div>
        
        {/* Course Slider/Grid */}
        <div className={`relative ${!isSlider ? 'flex justify-center' : ''}`}>
          {isSlider && (
            <button 
              onClick={handlePrev} 
              disabled={startIndex === 0}
              aria-label="Previous course"
              className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-sky-cyan/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            >
              <ChevronLeft className="w-6 h-6 text-steel-navy" />
            </button>
          )}
          
          <div className={`grid grid-cols-1 ${getGridColsClass()} gap-8 mb-12 ${featuredCourses.length === 1 ? 'max-w-md' : 'w-full'}`}>
            {coursesToShow.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>

          {isSlider && (
            <button 
              onClick={handleNext} 
              disabled={startIndex >= featuredCourses.length - 3}
              aria-label="Next course"
              className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-sky-cyan/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            >
              <ChevronRight className="w-6 h-6 text-steel-navy" />
            </button>
          )}
        </div>
        
        {/* "See All" Button */}
        <div className="text-center fade-in">
          <Link 
            to="/courses" 
            className="bg-sky-cyan text-steel-navy font-montserrat font-semibold px-8 py-4 rounded-2xl text-lg glow-cyan-hover transition-all duration-300 hover:scale-105 inline-block"
          >
            See All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
