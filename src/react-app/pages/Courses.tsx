import CoursesHeroSection from '@/react-app/components/CoursesHeroSection';
import AllCoursesSection from '@/react-app/components/AllCoursesSection';
// import LearningPathways from '@/react-app/components/LearningPathways';
import WhyOurCourses from '@/react-app/components/WhyOurCourses';
import CoursesCTASection from '@/react-app/components/CoursesCTASection';
import Footer from '@/react-app/components/Footer';
// import LearningPathways3d from '@/react-app/components/LearningPathways3d';

/**
 * The courses page of the application.
 * It is composed of several sections that provide information about the available courses.
 */
export default function Courses() {
  return (
    <div className="min-h-screen">
      {/* Main content of the page */}
      <main>
        <CoursesHeroSection />
        <AllCoursesSection />
        {/* <LearningPathways3d /> */}
        {/* <LearningPathways /> */}
        <WhyOurCourses />
        <CoursesCTASection />
      </main>
      {/* Footer, which is a shared component */}
      <Footer />
    </div>
  );
}
