import Footer from '@/react-app/components/Footer';
import AboutHeroSection from '../components/AboutHeroSection';
import VisionMissionSection from '../components/VisionMissionSection';
import JourneySection from '../components/JourneySection';
import InteractivePyramidSection from '../components/InteractivePyramidSection';
import MentorsSection from '../components/MentorsSection';
import GlobalFocusSection from '../components/GlobalFocusSection';
import AboutCTASection from '../components/AboutCTASection';

/**
 * The about page of the application.
 * It is composed of several sections that describe the company and its mission.
 */
export default function About() {
  return (
    <div className="min-h-screen">
      {/* Main content of the page */}
      <main>
        <AboutHeroSection />
        <VisionMissionSection />
        <JourneySection />
        <InteractivePyramidSection />
        <MentorsSection />
        <GlobalFocusSection />
        <AboutCTASection />
      </main>
      {/* Footer, which is a shared component */}
      <Footer />
    </div>
  );
}
