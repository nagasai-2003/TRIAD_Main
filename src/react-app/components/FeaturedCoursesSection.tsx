import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { allCourses } from '@/react-app/data/courses';
import CourseCard from '@/react-app/components/shared/CourseCard';

export default function FeaturedCoursesSection() {
  const featuredCourses = allCourses.filter(course => course.featured);
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex(prev => Math.min(featuredCourses.length - 3, prev + 1));
  };

  const isSlider = featuredCourses.length > 3;
  const coursesToShow = isSlider ? featuredCourses.slice(startIndex, startIndex + 3) : featuredCourses;

  const getGridColsClass = () => {
    if (isSlider) return 'md:grid-cols-3';
    switch (featuredCourses.length) {
      case 1:
        return 'md:grid-cols-1';
      case 2:
        return 'md:grid-cols-2';
      case 3:
        return 'md:grid-cols-3';
      default:
        return '';
    }
  };

  return (
    <section className="py-20 bg-arctic-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-6">
            Featured Courses
          </h2>
          <p className="font-inter text-lg text-charcoal-gray max-w-2xl mx-auto">
            Transform your potential into expertise with our carefully crafted curriculum
          </p>
        </div>
        
        <div className={`relative ${!isSlider ? 'flex justify-center' : ''}`}>
          {isSlider && (
            <button 
              onClick={handlePrev} 
              disabled={startIndex === 0}
              className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-sky-cyan/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            >
              <ChevronLeft className="w-6 h-6 text-steel-navy" />
            </button>
          )}
          
          <div className={`grid grid-cols-1 ${getGridColsClass()} gap-8 mb-12 ${featuredCourses.length === 1 ? 'max-w-md' : 'w-full'}`}>
            {coursesToShow.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>

          {isSlider && (
            <button 
              onClick={handleNext} 
              disabled={startIndex >= featuredCourses.length - 3}
              className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-sky-cyan/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            >
              <ChevronRight className="w-6 h-6 text-steel-navy" />
            </button>
          )}
        </div>
        
        <div className="text-center fade-in">
          <Link to="/courses" className="bg-sky-cyan text-steel-navy font-montserrat font-semibold px-8 py-4 rounded-2xl text-lg glow-cyan-hover transition-all duration-300 hover:scale-105 inline-block">
            See All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
