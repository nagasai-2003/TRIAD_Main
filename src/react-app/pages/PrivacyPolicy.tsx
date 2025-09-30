import Footer from "../components/Footer";
import { Mail, Phone, Shield, FileText } from 'lucide-react';
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

export default function PrivacyPolicy() {
  // Contact Information (Matches Policy Section 11)
  const contactInfo = {
    // Corrected to match the policy's contact details
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
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-400 font-inter">
            TRIAD Academy is committed to protecting your personal information and respecting your privacy.
          </p>
          {/* Corrected the Date to match the policy source */}
          <p className="text-sm mt-2 text-gray-500">
            Effective Date / Last Updated: <strong className='dark:text-gray-300'>{effectiveDate}</strong>
          </p>
        </header>

        {/* --- Policy Content Section (Styled for Professionalism) --- */}
        <div className="max-w-4xl mx-auto p-8 md:p-12 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
          
          <p className="mb-8 font-inter leading-relaxed text-gray-600 dark:text-gray-300">
            <strong>TRIAD Academy </strong> (“we,” “our,” “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our website, learning platforms, mobile applications, and other services (collectively, the **“Services”**). By accessing or using our Services, you agree to the practices described in this Privacy Policy.
          </p>

          {/* --- 1. Information We Collect --- */}
          <PolicySection title="1. Information We Collect" isTopLevel>
            <p className="mb-6 leading-relaxed">
              We collect information to deliver effective services and improve the learning experience.
            </p>

            <h3 className="text-xl font-semibold font-montserrat mt-6 mb-3">
              1.1. Personal Identifiable Information (PII)
            </h3>
            <ul className="list-disc pl-8 space-y-2 text-sm">
              <li><strong className="text-sky-cyan">Identity Data:</strong> Full name, date of birth, gender, profile photo.</li>
              <li><strong className="text-sky-cyan">Contact Data:</strong> Email address, phone number, postal address.</li>
              <li><strong className="text-sky-cyan">Academic & Professional Data:</strong> College/university name, course details, employment details (if applicable).</li>
              <li><strong className="text-sky-cyan">Financial Data:</strong> Payment card details and billing information (processed via secure third-party providers).</li>
            </ul>

            <h3 className="text-xl font-semibold font-montserrat mt-6 mb-3">
              1.2. Non-Personal Data (Usage Data)
            </h3>
            <ul className="list-disc pl-8 space-y-2 text-sm">
              <li>Device details, browser type, operating system.</li>
              <li>IP address, location (city/region level), access times.</li>
              <li>Pages viewed, session duration, and referral sources.</li>
            </ul>

            <h3 className="text-xl font-semibold font-montserrat mt-6 mb-3">
              1.3. Cookies & Tracking
            </h3>
            <p className="mb-4 leading-relaxed text-sm">
              We use **cookies**, beacons, and similar technologies to personalize your experience, analyze trends, and track usage. You may disable cookies in your browser, but some features may not function properly.
            </p>
          </PolicySection>

          {/* --- 2. How We Use Your Information (Re-aligned to Source Text) --- */}
          <PolicySection title="2. How We Use Your Information" isTopLevel>
            <p className="mb-4 leading-relaxed">
              The collected information is used for the following purposes:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-sm">
              <li>To provide access to our courses, certifications, and internships.</li>
              <li>To communicate with you (service notifications, updates, support).</li>
              <li>To process payments securely and prevent fraud.</li>
              <li>To personalize and improve learning content.</li>
              <li>To conduct analytics and improve platform functionality.</li>
              <li>To comply with legal obligations and regulatory requirements.</li>
            </ul>
          </PolicySection>
          
          {/* --- 3. Legal Basis for Processing --- */}
          <PolicySection title="3. Legal Basis for Processing" isTopLevel>
            <p className="mb-4 leading-relaxed">
              We process personal data under four primary legal bases:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-sm">
              <li><strong className="text-sky-cyan">Contractual Necessity</strong> – to deliver the services you enroll in.</li>
              <li><strong className="text-sky-cyan">Legitimate Interest</strong> – to improve services, prevent fraud, and ensure security.</li>
              <li><strong className="text-sky-cyan">Consent</strong> – for optional communications (e.g., marketing emails).</li>
              <li><strong className="text-sky-cyan">Legal Compliance</strong> – to meet statutory/regulatory obligations.</li>
            </ul>
          </PolicySection>

          {/* --- 4. Sharing & Disclosure of Information --- */}
          <PolicySection title="4. Sharing & Disclosure of Information" isTopLevel>
            <p className="mb-4 leading-relaxed">
              We **do not sell your data**. We may share it only in the following cases:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-sm">
              <li><strong className="text-sky-cyan">Service Providers:</strong> With trusted vendors (payment processors, IT hosting, analytics).</li>
              <li><strong className="text-sky-cyan">Legal Authorities:</strong> When required by law, regulation, or court order.</li>
              <li><strong className="text-sky-cyan">Business Transfers:</strong> In case of a merger, acquisition, or restructuring.</li>
              <li><strong className="text-sky-cyan">Academic Partners:</strong> With colleges/universities for joint certifications or internships (only where relevant and with your consent).</li>
            </ul>
          </PolicySection>

          {/* --- 5. Data Security & Retention --- */}
          <PolicySection title="5. Data Security & Retention" isTopLevel>
            <h3 className="text-xl font-semibold font-montserrat mt-6 mb-3 flex items-center">
                <Shield className="w-5 h-5 mr-3 text-sky-cyan" /> Data Security
            </h3>
            <p className="mb-4 leading-relaxed text-sm">
                We use industry-standard safeguards (encryption, firewalls, access controls) to protect your data. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute protection.
            </p>
            <h3 className="text-xl font-semibold font-montserrat mt-6 mb-3 flex items-center">
                <FileText className="w-5 h-5 mr-3 text-sky-cyan" /> Data Retention
            </h3>
            <p className="mb-4 leading-relaxed text-sm">
                We retain your data only for as long as necessary to fulfill the purposes outlined in this Policy or as required by law. After this period, data is securely deleted or anonymized.
            </p>
          </PolicySection>

          {/* --- 6. Your Rights --- */}
          <PolicySection title="6. Your Rights & Control" isTopLevel>
            <p className="mb-4 leading-relaxed">
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-sm">
              <li><strong className="text-sky-cyan">Access:</strong> Access personal data we hold about you.</li>
              <li><strong className="text-sky-cyan">Correct:</strong> Correct inaccurate or incomplete data.</li>
              <li><strong className="text-sky-cyan">Withdraw Consent:</strong> Withdraw consent at any time.</li>
              <li><strong className="text-sky-cyan">Deletion:</strong> Request deletion (“right to be forgotten”).</li>
              <li><strong className="text-sky-cyan">Object/Restrict:</strong> Object to processing or request restriction.</li>
              <li><strong className="text-sky-cyan">Portability:</strong> Port your data to another provider (where applicable).</li>
            </ul>
            <p className="mt-4 leading-relaxed text-sm italic">
                To exercise your rights, contact us at <a href={`mailto:${contactInfo.email}`} className="text-sky-cyan hover:underline">{contactInfo.email}</a>.
            </p>
          </PolicySection>

          {/* --- 7. International Users & Children's Privacy (Combined) --- */}
          <PolicySection title="7. Other Important Provisions" isTopLevel>
            <h3 className="text-xl font-semibold font-montserrat mt-6 mb-3">
              Children’s Privacy
            </h3>
            <p className="mb-4 leading-relaxed text-sm">
              Our Services are not directed to children under **16** (or the age defined by local law). We do not knowingly collect personal data from minors without parental/guardian consent.
            </p>
            <h3 className="text-xl font-semibold font-montserrat mt-6 mb-3">
              International Users
            </h3>
            <p className="mb-4 leading-relaxed text-sm">
              If you access our Services outside India, your data may be transferred and processed in jurisdictions with different data protection laws. By using our Services, you consent to such transfers.
            </p>
            <h3 className="text-xl font-semibold font-montserrat mt-6 mb-3">
              Changes to This Policy
            </h3>
            <p className="mb-4 leading-relaxed text-sm">
              We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised “Last Updated” date. Significant changes will be communicated via email or platform notification.
            </p>
          </PolicySection>
          

          {/* --- 8. Contact Us (Integrated Contact Info) --- */}
          <PolicySection title="8. Contact Us" isTopLevel>
            <p className="mb-4 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy, please contact our Data Protection Officer:
            </p>
            <div className="mt-6 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg border border-sky-cyan/50 shadow-md">
              {/* Corrected Email */}
              <p className="flex items-center text-lg font-montserrat font-semibold mb-2">
                <Mail className="w-5 h-5 mr-3 text-sky-cyan" />
                Email: <a href={`mailto:${contactInfo.email}`} className="ml-2 text-sky-cyan hover:underline">{contactInfo.email}</a>
              </p>
              {/* Corrected Phone */}
              <p className="flex items-center text-lg font-montserrat font-semibold mb-2">
                <Phone className="w-5 h-5 mr-3 text-sky-cyan" />
                Phone: <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="ml-2 text-sky-cyan hover:underline">{contactInfo.phone}</a>
              </p>
              {/* Corrected Address */}
              <p className="flex items-center text-sm mt-4 text-gray-500 dark:text-gray-400">
                Address: TRIAD Academy – Data Protection Officer, {contactInfo.address}
              </p>
            </div>
          </PolicySection>

          {/* --- Disclaimer Section (Added from Source Text) --- */}
          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold font-montserrat text-sky-cyan mb-2">
                Disclaimer & Compliance
            </h3>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                This Privacy Policy is drafted in compliance with the **Information Technology Act, 2000**, the **Digital Personal Data Protection Act, 2023 (India)**, and is aligned with global best practices such as **GDPR** and **CCPA**.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
