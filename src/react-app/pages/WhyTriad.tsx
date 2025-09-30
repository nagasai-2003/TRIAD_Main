import WhyTriadHeroSection from '@/react-app/components/WhyTriadHeroSection';
// import ThreePillarsSection from '@/react-app/components/ThreePillarsSection';
import CompetitorComparisonSection from '@/react-app/components/CompetitorComparisonSection';
import ProofSocialTrustSection from '@/react-app/components/ProofSocialTrustSection';
import WhyTriadFinalCTASection from '@/react-app/components/WhyTriadFinalCTASection';
// import WhyTriadIpa from '@/react-app/components/WhyTriadIpa';
import WhyTriadPillars from '@/react-app/components/WhyTriadPillar';
import Footer from '@/react-app/components/Footer';

/**
 * The "Why Triad" page of the application.
 * It is composed of several sections that explain the benefits of the Triad platform.
 */
export default function WhyTriad() {
  return (
    <div className="min-h-screen">
      {/* Main content of the page */}
      <main>
        <WhyTriadHeroSection />
        <WhyTriadPillars/>
        {/* <WhyTriadIpa/> */}
        {/* <ThreePillarsSection /> */}
        <CompetitorComparisonSection />
        <ProofSocialTrustSection />
        <WhyTriadFinalCTASection />
      </main>
      {/* Footer, which is a shared component */}
      <Footer />
    </div>
  );
}
