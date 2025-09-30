import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/react-app/components/ScrollToTop";
import Layout from "@/react-app/components/Layout";
import HomePage from "@/react-app/pages/Home";
import AboutPage from "@/react-app/pages/About";
import CoursesPage from "@/react-app/pages/Courses";
import ProjectsPage from "@/react-app/pages/Projects";
import ContactPage from "@/react-app/pages/Contact";
import WhyTriadPage from "@/react-app/pages/WhyTriad";
import ResourcesPage from "@/react-app/pages/Resources";
import CareersPage from "@/react-app/pages/Careers";
import PrivacyPolicyPage from "@/react-app/pages/PrivacyPolicy";
import TermsOfServicePage from "@/react-app/pages/TermsOfService";
import UpcomingPage from "@/react-app/pages/Upcoming";
import NotFoundPage from "@/react-app/pages/NotFound";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/whytriad" element={<WhyTriadPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
