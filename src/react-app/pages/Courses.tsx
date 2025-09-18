import CoursesHeroSection from '@/react-app/components/CoursesHeroSection';
import AllCoursesSection from '@/react-app/components/AllCoursesSection';
import LearningPathways from '@/react-app/components/LearningPathways';
import WhyOurCourses from '@/react-app/components/WhyOurCourses';
import CoursesCTASection from '@/react-app/components/CoursesCTASection';
import Footer from '@/react-app/components/Footer';

export default function Courses() {
  return (
    <div className="min-h-screen">
      <CoursesHeroSection />
      <AllCoursesSection />
      <LearningPathways />
      <WhyOurCourses />
      <CoursesCTASection />
      <Footer />
    </div>
  );
}
