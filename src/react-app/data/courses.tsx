// import pyicon from "@/icons/icons8-python.svg";
import qc_icon from "@/icons/Quantum_Icon.png";
// import javaicon from "@/icons/icon_java.svg";
import aimlicon from "@/icons/icons8-ai-100.png";
// import ai_icon from "https://cdn-icons-png.flaticon.com/512/10644/10644636.png";
import ai_icon from "@/icons/ai_icon.png"

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
  enrollmentLink: string;
  cta:string;
}

export const allCourses: Course[] = [
  {
    category: "Quantum Computing",
    title: "30 Days of Quantum Immersion Course",
    description: "Demystify Quantum Computing in just 30 days. Learn the core principles, essential math, and foundational algorithms using **IBM's Qiskit**. Prepare for the future of computation with daily, byte-sized lessons perfect for social media.",
    duration: "30 Days",
    level: "Beginner to Intermediate",
    icon: <img src={qc_icon} alt="Quantum Computing Icon" className="w-13 h-12" />,
    features: [
      "Quantum Mechanics Essentials (Non-Math Heavy)",
      "Qubit and Quantum Gate Operations",
      "Hands-on coding with **Qiskit & Python**",
      "Understanding of key algorithms (e.g., Grover's, Deutsch-Jozsa)",
      "Final Quantum Circuit Project Submission"
    ],
    featured: true,
    status: "Running", // Or "Running"
    enrollmentLink: "/resources",
    cta:"View"
},
// {
//   category: "Programming",
//   title: "45 Days of Python Mastery Course",
//   description: "Learn Python from scratch to advanced in just 45 days with real-world projects, problem-solving, and DSA essentials—perfectly designed for career and interview preparation.",
//   duration: "45 Days",
//   level: "Beginner to Advanced",
//   icon: <img src={pyicon} alt="Python Icon" className="w-18 h-18" />,
//   features: [
//   "Core Python + OOPs",
//   "5+ Hands-on Projects for GitHub & LinkedIn",
//   "Data Structures & Algorithms",
//   "50+ Coding Problems (HackerRank, LeetCode)",
//   "Industry-Level Certification"
//   ],
//   featured: true,
//   status: "Running"
// },

  {
    category: "AI & Generative Tools",
    title: "30 Days of Gen AI & Tools Mastery",
    description: "Learn to master the most powerful **AI tools** in 30 days! From prompt engineering and Generative AI (LLMs/Images) to building basic AI agents. Focuses on **practical, career-boosting application**.",
    duration: "30 Days",
    level: "Beginner to Intermediate",
    icon: <img src = {ai_icon} alt="AI Tool Icon" className="w-12 h-13" />,
    features: [
      "Expert Prompt Engineering for LLMs (ChatGPT/Claude)",
      "Hands-on with Generative Image/Video Tools",
      "Foundational concepts of **Machine Learning (ML)**",
      "Building a simple **AI Agent** using Python",
      "Certification in Applied AI Tools"
    ],
    featured: true,
    status: "Running",
    enrollmentLink: "/resources",
    cta:"View"
},
  // {
  //   category: "Programming",
  //   title: "45 Days of Java Mastery Course",
  //   description: "Master Java programming in 45 days, from fundamentals to advanced topics. This course is packed with practical projects and problem-solving to get you job-ready.",
  //   duration: "45 Days",
  //   level: "Beginner to Advanced",
  //   icon: <img src={javaicon} alt="Java Icon" className="w-12 h-12" />,
  //   features: [
  //     "Core Java + OOPs",
  //     "Spring Boot & RESTful APIs",
  //     "Data Structures & Algorithms",
  //     "50+ Coding Problems",
  //     "Build & Deploy 3+ Projects"
  //   ],
  //   featured: true,
  //   status: "Upcoming"
  // },
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
    status: "Upcoming",
    enrollmentLink: "/upcoming",
    cta:"Upcoming"
  },  
];