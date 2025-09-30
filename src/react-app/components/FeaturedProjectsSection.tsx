import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { allProjects } from '@/react-app/data/projects';
import ProjectCard from '@/react-app/components/shared/ProjectCard';

/**
 * A section that showcases featured projects.
 * It filters the `allProjects` data to display only the projects marked as featured.
 */
export default function FeaturedProjectsSection() {
  // Memoize the featured projects to avoid re-filtering on every render.
  const featuredProjects = useMemo(() => allProjects.filter(project => project.featured), []);

  return (
    <section 
      className="py-20 bg-arctic-white"
      aria-labelledby="featured-projects-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 
            id="featured-projects-heading"
            className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-6"
          >
            Featured Projects
          </h2>
          <p className="font-inter text-lg text-charcoal-gray max-w-2xl mx-auto">
            A showcase of our best student projects, demonstrating real-world skills and creativity.
          </p>
        </div>
        
        {/* Grid of Featured Projects */}
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
        </div>
        
        {/* "See All" Button */}
        <div className="text-center fade-in">
          <Link 
            to="/projects" 
            className="bg-sky-cyan text-steel-navy font-montserrat font-semibold px-8 py-4 rounded-2xl text-lg glow-cyan-hover transition-all duration-300 hover:scale-105 inline-block"
          >
            See All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
