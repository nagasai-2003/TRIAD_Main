import HeroSection from '@/react-app/components/HeroSection';
import QuickIntroSection from '@/react-app/components/QuickIntroSection';
import FeaturedCoursesSection from '@/react-app/components/FeaturedCoursesSection';
import FeaturedProjectsSection from '@/react-app/components/FeaturedProjectsSection';
import WhyTriadSection from '@/react-app/components/WhyTriadSection';
import TestimonialsSection from '@/react-app/components/TestimonialsSection';
import GlobalVisionSection from '@/react-app/components/GlobalVisionSection';
import CTASection from '@/react-app/components/CTASection';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <QuickIntroSection />
      <FeaturedCoursesSection />
      <FeaturedProjectsSection />
      <WhyTriadSection />
      <TestimonialsSection />
      <GlobalVisionSection />
      <CTASection />
      <Footer />
    </div>
  );
}
