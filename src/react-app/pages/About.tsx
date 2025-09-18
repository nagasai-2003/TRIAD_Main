import Footer from '@/react-app/components/Footer';
import AboutHeroSection from '../components/AboutHeroSection';
import VisionMissionSection from '../components/VisionMissionSection';
import JourneySection from '../components/JourneySection';
import InteractivePyramidSection from '../components/InteractivePyramidSection';
import MentorsSection from '../components/MentorsSection';
import GlobalFocusSection from '../components/GlobalFocusSection';
import AboutCTASection from '../components/AboutCTASection';
import Header from '../components/Header';

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutHeroSection />
      <VisionMissionSection />
      <JourneySection />
      <InteractivePyramidSection />
      <MentorsSection />
      <GlobalFocusSection />
      <AboutCTASection />
      <Footer />
    </div>
  );
}
