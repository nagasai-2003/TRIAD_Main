import Footer from "../components/Footer";
import { Mail, Phone, BookOpen, Scale, AlertTriangle, ExternalLink } from 'lucide-react'; 
import type { ReactNode } from 'react';

// Assuming these styles are defined in your Tailwind config:
// - text-sky-cyan
// - bg-steel-navy
// - font-montserrat
// - font-inter
// - text-arctic-white

interface PolicySectionProps {
  title: string;
  children: ReactNode;
  isTopLevel?: boolean;
}

const PolicySection = ({ title, children, isTopLevel = false }: PolicySectionProps) => (
  <>
    <h2 
      className={`font-bold font-montserrat text-sky-cyan mt-10 mb-4 pb-2 ${
        isTopLevel 
          ? 'text-3xl border-b border-sky-cyan/30' 
          : 'text-2xl'
      }`}
    >
      {title}
    </h2>
    {children}
  </>
);

export default function TermsOfService() {
  // Contact Information (Matches Policy Section 10)
  const contactInfo = {
    // Matches the policy's contact details
    phone: '+91 79819 47059', 
    email: 'support@triadacademy.in', 
    address: 'TRIAD Academy, Guntur - 522009.', 
  };
  
  // Policy Date (Matches Policy Header)
  const effectiveDate = 'September 30, 2025';

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <main className="container mx-auto px-4 py-16 flex-grow">
        
        {/* --- Header Section --- */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold font-montserrat text-sky-cyan mb-3">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-400 font-inter">
            By using TRIAD Academy's free resources, you agree to these terms and conditions.
          </p>
          <p className="text-sm mt-2 text-gray-500">
            Effective Date / Last Updated: <strong className='dark:text-gray-300'>{effectiveDate}</strong>
          </p>
        </header>

        {/* --- Policy Content Section (Styled for Professionalism) --- */}
        <div className="max-w-4xl mx-auto p-8 md:p-12 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
          
          <p className="mb-8 font-inter leading-relaxed text-gray-600 dark:text-gray-300">
            Welcome to **TRIAD Academy** (“we,” “our,” “us”). By accessing or using our website, resources, learning materials, and any related services (collectively, the **“Services”**), you agree to be bound by these Terms of Service (“Terms”). If you do not agree with these Terms, please do not use our Services.
          </p>

          {/* --- 1. Services We Provide --- */}
          <PolicySection title="1. Services We Provide" isTopLevel>
            <p className="mb-4 leading-relaxed flex items-start">
              <BookOpen className="w-5 h-5 mr-3 mt-1 text-sky-cyan flex-shrink-0" />
              TRIAD Academy provides **free educational resources**, tutorials, and learning materials in programming and technology.
            </p>
            <ul className="list-disc pl-8 space-y-2 text-sm">
              <li>We do not require user accounts, logins, or collection of personal data for accessing our resources.</li>
              <li>Some external resources, links, or certifications may be provided through trusted third parties.</li>
            </ul>
          </PolicySection>

          {/* --- 2. Use of Services --- */}
          <PolicySection title="2. Use of Services" isTopLevel>
            <p className="mb-4 leading-relaxed">
              You agree to the following conditions when using our resources:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-sm">
              <li>You agree to use our resources strictly for **personal learning and educational purposes.**</li>
              <li>You must not copy, redistribute, sell, or exploit the content for **commercial purposes** without prior written permission.</li>
              <li>You agree not to use the Services in any way that violates applicable laws or regulations.</li>
            </ul>
          </PolicySection>
          
          {/* --- 3. Intellectual Property Rights --- */}
          <PolicySection title="3. Intellectual Property Rights" isTopLevel>
            <p className="mb-4 leading-relaxed">
              All materials, logos, graphics, videos, and content published by TRIAD Academy are protected under applicable **copyright and intellectual property laws.**
            </p>
            <ul className="list-disc pl-8 space-y-2 text-sm">
              <li>You may download or print resources for **personal use only**.</li>
              <li>Any modification, resale, or unauthorized distribution is strictly prohibited.</li>
            </ul>
          </PolicySection>

          {/* --- 4. Accuracy of Information & 5. Limitation of Liability (Combined) --- */}
          <PolicySection title="4. Disclaimers and Liability" isTopLevel>
            <h3 className="text-xl font-semibold font-montserrat mt-6 mb-3 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-3 text-sky-cyan" /> Accuracy of Information
            </h3>
            <p className="mb-4 leading-relaxed text-sm">
              While we strive to provide accurate and updated resources, TRIAD Academy does not guarantee completeness, reliability, or absolute correctness of content. The information provided is for **educational purposes only** and should not be treated as professional advice.
            </p>
            
            <h3 className="text-xl font-semibold font-montserrat mt-6 mb-3 flex items-center">
              <Scale className="w-5 h-5 mr-3 text-sky-cyan" /> Limitation of Liability
            </h3>
            <p className="mb-4 leading-relaxed text-sm">
              TRIAD Academy will not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our Services. We are not responsible for any loss of data, device issues, or damages resulting from reliance on third-party tools, links, or materials.
            </p>
          </PolicySection>

          {/* --- 5. Third-Party Links & Resources --- */}
          <PolicySection title="5. Third-Party Links & Resources" isTopLevel>
            <p className="mb-4 leading-relaxed flex items-start">
              <ExternalLink className="w-5 h-5 mr-3 mt-1 text-sky-cyan flex-shrink-0" />
              Our Services may include links to third-party platforms or resources.
            </p>
            <ul className="list-disc pl-8 space-y-2 text-sm">
              <li>We are not responsible for their availability, accuracy, or practices.</li>
              <li>Accessing third-party resources is at your own risk and subject to their terms and policies.</li>
            </ul>
          </PolicySection>
          
          {/* --- 7. Termination & 8. Governing Law (Combined) --- */}
          <PolicySection title="6. Termination and Governing Law" isTopLevel>
            <h3 className="text-xl font-semibold font-montserrat mt-6 mb-3">
              Termination of Use
            </h3>
            <p className="mb-4 leading-relaxed text-sm">
              We reserve the right to restrict or terminate access to our Services if a user violates these Terms or engages in misuse of our content.
            </p>
            <h3 className="text-xl font-semibold font-montserrat mt-6 mb-3">
              Governing Law
            </h3>
            <p className="mb-4 leading-relaxed text-sm">
              These Terms shall be governed by and construed in accordance with the **laws of India**. Any disputes shall fall under the exclusive jurisdiction of the courts in **Guntur, Andhra Pradesh.**
            </p>
          </PolicySection>

          {/* --- 9. Updates & 10. Contact Us (Combined) --- */}
          <PolicySection title="7. Updates and Contact Information" isTopLevel>
            <h3 className="text-xl font-semibold font-montserrat mt-6 mb-3">
              Updates to Terms
            </h3>
            <p className="mb-4 leading-relaxed text-sm">
              TRIAD Academy may revise these Terms from time to time. Updates will be posted on this page with the “Last Updated” date.
            </p>
            
            <h3 className="text-xl font-semibold font-montserrat mt-6 mb-3">
              Contact Us
            </h3>
            <p className="mb-4 leading-relaxed">
              If you have questions about these Terms, please contact our Legal Compliance Team:
            </p>
            <div className="mt-6 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg border border-sky-cyan/50 shadow-md">
              {/* Contact Details */}
              <p className="flex items-center text-lg font-montserrat font-semibold mb-2">
                <Mail className="w-5 h-5 mr-3 text-sky-cyan" />
                Email: <a href={`mailto:${contactInfo.email}`} className="ml-2 text-sky-cyan hover:underline">{contactInfo.email}</a>
              </p>
              <p className="flex items-center text-lg font-montserrat font-semibold mb-2">
                <Phone className="w-5 h-5 mr-3 text-sky-cyan" />
                Phone: <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="ml-2 text-sky-cyan hover:underline">{contactInfo.phone}</a>
              </p>
              <p className="flex items-center text-sm mt-4 text-gray-500 dark:text-gray-400">
                Address: TRIAD Academy – Legal Compliance Team, {contactInfo.address}
              </p>
            </div>
          </PolicySection>


          {/* --- Disclaimer Section (Added from Source Text) --- */}
          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold font-montserrat text-sky-cyan mb-2">
                Disclaimer & Compliance
            </h3>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                These Terms are designed for an educational service provider in India and aligned with **Indian contract laws**. Users outside India are also bound by these Terms.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
