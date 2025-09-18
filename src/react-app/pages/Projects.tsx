import ProjectsHeroSection from '@/react-app/components/ProjectsHeroSection';
import AllProjectsSection from '@/react-app/components/AllProjectsSection';
import ProjectsCTASection from '@/react-app/components/ProjectsCTASection';
import Footer from '@/react-app/components/Footer';

export default function Projects() {
  return (
    <div className="min-h-screen">
      <ProjectsHeroSection />
      <AllProjectsSection />
      {/* <StudentShowcaseTestimonials /> */}
      <ProjectsCTASection />
      <Footer />
    </div>
  );
}
