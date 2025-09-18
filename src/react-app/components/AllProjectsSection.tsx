import ProjectCard from './shared/ProjectCard';
import { allProjects } from '@/react-app/data/projects';

export default function AllProjectsSection() {
  return (
    <section id="all-projects" className="py-20 bg-arctic-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {allProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
