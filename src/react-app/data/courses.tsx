import pyicon from "@/icons/icons8-python.svg";
import javaicon from "@/icons/icon_java.svg";
import aimlicon from "@/icons/icons8-ai-100.png";

// import { Code, Brain, Zap, Palette, Video, BarChart2 } from 'lucide-react';

export type CourseStatus = "Upcoming" | "Running" | "Completed";

export interface Course {
  category: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  icon: React.ReactNode;
  features: string[];
  featured: boolean;
  status: CourseStatus;
}

export const allCourses: Course[] = [
  {
    category: "Programming",
    title: "45 Days of Python Mastery Course",
    description: "Learn Python from scratch to advanced in just 45 days with real-world projects, problem-solving, and DSA essentials—perfectly designed for career and interview preparation.",
    duration: "45 Days",
    level: "Beginner to Advanced",
    icon: <img src={pyicon} alt="Python Icon" className="w-18 h-18" />,
    features: [
      "Core Python + OOPs",
      "5+ Hands-on Projects for GitHub & LinkedIn",
      "Data Structures & Algorithms",
      "50+ Coding Problems (HackerRank, LeetCode)",
      "Industry-Level Certification"
    ],
    featured: true,
    status: "Running"
  },
  {
    category: "Programming",
    title: "45 Days of Java Mastery Course",
    description: "Master Java programming in 45 days, from fundamentals to advanced topics. This course is packed with practical projects and problem-solving to get you job-ready.",
    duration: "45 Days",
    level: "Beginner to Advanced",
    icon: <img src={javaicon} alt="Java Icon" className="w-12 h-12" />,
    features: [
      "Core Java + OOPs",
      "Spring Boot & RESTful APIs",
      "Data Structures & Algorithms",
      "50+ Coding Problems",
      "Build & Deploy 3+ Projects"
    ],
    featured: true,
    status: "Upcoming"
  },
  {
    category: "Programming",
    title: "75 Days of AI & Machine Learning Mastery Course",
    description: "Learn Artificial Intelligence and Machine Learning from basics to advanced with real-world applications, hands-on projects, and interview preparation. Perfect for students and professionals aiming for AI/ML careers.",
    duration: "10 Weeks",
    level: "Beginner to Advanced",
    icon: <img src={aimlicon} alt="AI & ML Icon" className="w-12 h-12" />,
    features: [
      "Python for AI & ML",
      "Mathematics for ML (Linear Algebra, Probability, Statistics)",
      "Supervised & Unsupervised Learning Algorithms",
      "Deep Learning with TensorFlow & PyTorch",
      "5+ AI/ML Hands-on Projects for GitHub & LinkedIn",
      "50+ Practice Problems (Kaggle, LeetCode ML problems)",
      "Industry-Level Certification"
    ],
    featured: true,
    status: "Upcoming"
  },  
];