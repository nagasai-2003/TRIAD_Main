import { useEffect } from 'react';
import ContactHero from '@/react-app/components/ContactHero';
import ContactForm from '@/react-app/components/ContactForm';
import ContactDetails from '@/react-app/components/ContactDetails';
import Map from '@/react-app/components/Map';
import SocialConnect from '@/react-app/components/SocialConnect';
import ClosingCTA from '@/react-app/components/ClosingCTA';
import WhatsAppButton from '@/react-app/components/WhatsAppButton';
import Footer from '@/react-app/components/Footer';

export default function Contact() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <WhatsAppButton />
      <ContactHero />
      <ContactForm />
      <ContactDetails />
      <Map />
      <SocialConnect />
      <ClosingCTA />
      <Footer />
    </div>
  );
}
