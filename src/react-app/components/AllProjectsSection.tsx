import ProjectCard from './shared/ProjectCard';
import { allProjects } from '@/react-app/data/projects';

/**
 * A section that displays all available projects in a grid format.
 * It uses the `ProjectCard` component to render each project.
 */
export default function AllProjectsSection() {
  return (
    <section 
      id="all-projects" 
      className="py-20 bg-arctic-white"
      aria-labelledby="all-projects-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            id="all-projects-heading"
            className="font-montserrat font-bold text-4xl text-steel-navy mb-4"
          >
            All Projects
          </h2>
          <p className="font-inter text-lg text-charcoal-gray max-w-3xl mx-auto">
            Browse our collection of real-world projects and find your next challenge.
          </p>
        </div>

        {/* Grid layout for displaying the project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {/* Mapping through the `allProjects` data to render a `ProjectCard` for each project */}
          {allProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
