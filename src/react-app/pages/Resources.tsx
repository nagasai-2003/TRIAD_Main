import ResourcesHeroSection from '@/react-app/components/ResourcesHeroSection';
import AllResourcesSection from '@/react-app/components/AllResourcesSection';
import Footer from '@/react-app/components/Footer';

/**
 * The resources page of the application.
 * It is composed of several sections that provide access to various resources.
 */
export default function Resources() {
  return (
    <div className="min-h-screen">
      {/* Main content of the page */}
      <main>
        <ResourcesHeroSection />
        <AllResourcesSection />
      </main>
      {/* Footer, which is a shared component */}
      <Footer />
    </div>
  );
}
