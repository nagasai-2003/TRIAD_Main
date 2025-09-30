import HeroSection from '@/react-app/components/HeroSection';
import QuickIntroSection from '@/react-app/components/QuickIntroSection';
import FeaturedCoursesSection from '@/react-app/components/FeaturedCoursesSection';
import LearningPathways from '@/react-app/components/LearningPathways';
// import FeaturedProjectsSection from '@/react-app/components/FeaturedProjectsSection';
import WhyTriadSection from '@/react-app/components/WhyTriadSection';
import TestimonialsSection from '@/react-app/components/TestimonialsSection';
import GlobalVisionSection from '@/react-app/components/GlobalVisionSection';
import CTASection from '@/react-app/components/CTASection';
import Footer from '@/react-app/components/Footer';

/**
 * The main landing page of the application.
 * It is composed of several sections that provide an overview of the platform.
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Main content of the page */}
      <main>
        <HeroSection />
        <QuickIntroSection />
        <LearningPathways/>
        <FeaturedCoursesSection />
        {/* <FeaturedProjectsSection /> */}
        <WhyTriadSection />
        <TestimonialsSection />
        <GlobalVisionSection />
        <CTASection />
      </main>
      {/* Footer, which is a shared component */}
      <Footer />
    </div>
  );
}
