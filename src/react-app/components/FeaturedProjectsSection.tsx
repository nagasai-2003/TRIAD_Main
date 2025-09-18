import { Link } from 'react-router-dom';
import { allProjects } from '@/react-app/data/projects';
import ProjectCard from '@/react-app/components/shared/ProjectCard';

export default function FeaturedProjectsSection() {
  const featuredProjects = allProjects.filter(project => project.featured);

  return (
    <section className="py-20 bg-arctic-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-steel-navy mb-6">
            Featured Projects
          </h2>
          <p className="font-inter text-lg text-charcoal-gray max-w-2xl mx-auto">
            A showcase of our best student projects, demonstrating real-world skills and creativity.
          </p>
        </div>
        
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
        </div>
        
        <div className="text-center fade-in">
          <Link to="/projects" className="bg-sky-cyan text-steel-navy font-montserrat font-semibold px-8 py-4 rounded-2xl text-lg glow-cyan-hover transition-all duration-300 hover:scale-105 inline-block">
            See All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
