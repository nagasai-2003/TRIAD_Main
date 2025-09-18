import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/react-app/components/ScrollToTop";
import HomePage from "@/react-app/pages/Home";
import AboutPage from "@/react-app/pages/About";
import CoursesPage from "@/react-app/pages/Courses";
import ProjectsPage from "@/react-app/pages/Projects";
import ContactPage from "@/react-app/pages/Contact";
import WhyTriadPage from "@/react-app/pages/WhyTriad";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/why-triad" element={<WhyTriadPage />} />
      </Routes>
    </Router>
  );
}
