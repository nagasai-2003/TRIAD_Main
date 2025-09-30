import { Project } from '@/react-app/data/projects';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Props for the ProjectCard component.
 */
interface ProjectCardProps {
  /**
   * The project object to display.
   */
  project: Project;
}

/**
 * A card component that displays information about a single project.
 * It includes details like title, description, tech stack, and features.
 * It also features an image slider for project screenshots.
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const projectTitleId = `project-title-${project.title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div 
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl glow-cyan-hover transition-all duration-300 border border-frost-gray fade-in group flex flex-col relative"
      role="group"
      aria-labelledby={projectTitleId}
    >
      {project.featured && (
        <div className="absolute top-0 right-0 bg-yellow-400 text-steel-navy font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg z-20">
          Featured
        </div>
      )}

      <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden z-10">
        <img src={project.images[currentImage]} alt={`${project.title} screenshot ${currentImage + 1}`} className="w-full h-full object-cover"/>
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity z-30"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity z-30"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-xs bg-black bg-opacity-50 px-2 py-1 rounded-full">
              {currentImage + 1} / {project.images.length}
            </div>
            <div className="sr-only" aria-live="polite">
              {`Image ${currentImage + 1} of ${project.images.length}`}
            </div>
          </>
        )}
      </div>

      <div className="flex-grow">
        <h3 id={projectTitleId} className="font-montserrat font-bold text-2xl text-steel-navy mb-4">
          {project.title}
        </h3>
        <p className="font-inter text-charcoal-gray mb-6 leading-relaxed">
          {project.description}
        </p>
        <ul className="space-y-2 text-sm text-charcoal-gray">
          <li><strong>Tech Stack:</strong> {project.techStack.join(', ')}</li>
          <li><strong>Duration:</strong> {project.duration}</li>
          <li><strong>Complexity:</strong> {project.complexity}</li>
        </ul>
        <ul className="space-y-2 mt-4">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-center text-sm text-charcoal-gray">
              <div aria-hidden="true" className="w-2 h-2 bg-sky-cyan rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 text-center">
        <Link 
          to={`/projects/${project.title.replace(/\s+/g, '-').toLowerCase()}`}
          aria-label={`View details for ${project.title}`}
          className="bg-sky-cyan text-steel-navy font-montserrat font-semibold px-6 py-3 rounded-xl glow-cyan-hover transition-all duration-300 hover:scale-105 inline-block"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}
