import { Course, CourseStatus } from '../../data/courses';

/**
 * Props for the CourseCard component.
 */
interface CourseCardProps {
  /**
   * The course object to display.
   */
  course: Course;
  /**
   * If true, a "Featured" badge will be displayed on the card.
   * @default false
   */
  isFeatured?: boolean;
}

/**
 * A card component that displays information about a single course.
 * It includes details like title, description, duration, level, and features.
 * It also has a link to enroll in the course.
 */
export default function CourseCard({ course, isFeatured = false }: CourseCardProps) {
  const statusColors: Record<CourseStatus, string> = {
    Upcoming: 'bg-blue-500',
    Running: 'bg-green-500',
    Completed: 'bg-gray-500',
  };

  const courseTitleId = `course-title-${course.title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div 
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl glow-cyan-hover transition-all duration-300 border border-frost-gray fade-in group flex flex-col relative"
      role="article"
      aria-labelledby={courseTitleId}
    >
      {isFeatured && (
        <div className="absolute top-0 right-0 bg-yellow-400 text-steel-navy font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg z-10">
          Featured
        </div>
      )}
      <div className={`absolute top-0 left-0 ${statusColors[course.status]} text-white font-semibold px-3 py-1 rounded-br-lg rounded-tl-lg z-10`}>
        {course.status}
      </div>
      <div className="flex-grow">
        <div className="mb-6 text-sky-cyan group-hover:scale-110 transition-transform duration-300">
          {course.icon}
        </div>
        <h3 
          id={courseTitleId}
          className="font-montserrat font-bold text-2xl text-steel-navy mb-4"
        >
          {course.title}
        </h3>
        <p className="font-inter text-charcoal-gray mb-6 leading-relaxed">
          {course.description}
        </p>
        <ul className="space-y-2 text-sm text-charcoal-gray">
          <li><strong>Duration:</strong> {course.duration}</li>
          <li><strong>Level:</strong> {course.level}</li>
        </ul>
        <ul className="space-y-2 mt-4">
          {course.features.map((feature) => (
            <li key={feature} className="flex items-center text-sm text-charcoal-gray">
              <div aria-hidden="true" className="w-2 h-2 bg-sky-cyan rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 text-center">
        <a 
          href={course.enrollmentLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Enroll Now for ${course.title}`}
          className="bg-sky-cyan text-steel-navy font-montserrat font-semibold px-6 py-3 rounded-xl glow-cyan-hover transition-all duration-300 hover:scale-105 inline-block"
        >
          {course.cta}
        </a>
      </div>
    </div>
  );
}
