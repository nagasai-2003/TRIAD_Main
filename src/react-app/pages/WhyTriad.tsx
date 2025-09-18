import WhyTriadHeroSection from '@/react-app/components/WhyTriadHeroSection';
import ThreePillarsSection from '@/react-app/components/ThreePillarsSection';
import CompetitorComparisonSection from '@/react-app/components/CompetitorComparisonSection';
import ProofSocialTrustSection from '@/react-app/components/ProofSocialTrustSection';
import WhyTriadFinalCTASection from '@/react-app/components/WhyTriadFinalCTASection';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';

export default function WhyTriad() {
  return (
    <div className="min-h-screen">
      <Header />
      <WhyTriadHeroSection />
      <ThreePillarsSection />
      <CompetitorComparisonSection />
      <ProofSocialTrustSection />
      <WhyTriadFinalCTASection />
      <Footer />
    </div>
  );
}