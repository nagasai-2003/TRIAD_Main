import ProjectsHeroSection from '@/react-app/components/ProjectsHeroSection';
import AllProjectsSection from '@/react-app/components/AllProjectsSection';
import StudentShowcaseTestimonials from '@/react-app/components/StudentShowcaseTestimonials';
import ProjectsCTASection from '@/react-app/components/ProjectsCTASection';
import Footer from '@/react-app/components/Footer';

/**
 * The projects page of the application.
 * It is composed of several sections that showcase student projects.
 */
export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Main content of the page */}
      <main>
        <ProjectsHeroSection />
        <AllProjectsSection />
        <StudentShowcaseTestimonials />
        <ProjectsCTASection />
      </main>
      {/* Footer, which is a shared component */}
      <Footer />
    </div>
  );
}
