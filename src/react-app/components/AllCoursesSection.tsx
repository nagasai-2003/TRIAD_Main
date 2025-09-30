import CourseCard from './shared/CourseCard';
import { allCourses } from '@/react-app/data/courses';

/**
 * A section that displays all available courses in a grid format.
 * It uses the `CourseCard` component to render each course.
 */
export default function AllCoursesSection() {
  return (
    <section 
      id="all-courses" 
      className="py-20 bg-arctic-white"
      aria-labelledby="all-courses-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          {/* Section headline and a brief description */}
          <h2 
            id="all-courses-heading"
            className="font-montserrat font-bold text-4xl text-steel-navy mb-4"
          >
            Explore Our Courses
          </h2>
          <p className="font-inter text-lg text-charcoal-gray max-w-3xl mx-auto">
            Choose from a wide range of courses designed to equip you with the skills needed to excel in the tech industry.
          </p>
        </div>
        {/* Grid layout for displaying the course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mapping through the `allCourses` data to render a `CourseCard` for each course */}
          {allCourses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
