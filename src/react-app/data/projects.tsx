// import { ShieldCheck, TrendingUp, Zap, scale } from 'lucide-react';
// import React from 'react';

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  duration: string;
  complexity: string;
  // icon: React.ReactNode;
  images: string[];
  features: string[];
  featured: boolean;
}

export const allProjects: Project[] = [
  {
    title: "AI-Powered Resume Screener",
    description: "An intelligent system that automatically screens resumes, extracts key information, and shortlists candidates based on job requirements using AI & NLP.",
    techStack: ["Python", "Flask", "Transformers (BERT/GPT)", "React", "MongoDB"],
    duration: "6 Weeks",
    complexity: "Intermediate to Advanced",
    // icon: <Zap className="w-8 h-8 text-sky-cyan" />, // replace with your AI/Brain icon
    images: ["/src/Images/Project_ss/ai_legal_ss1.jpeg", "src/Images/Project_ss/ai_legal_ss2.jpeg"],
    features: [
      "Resume parsing and key information extraction",
      "NLP-based ranking against job descriptions",
      "Duplicate & spam resume detection",
      "Dashboard for recruiters with shortlisting",
      "Export shortlisted resumes in CSV/PDF"
    ],
    featured: false,
  },
  {
    title: "AI-Powered Legal Document Simplifier & Demystifier",
    description: "An advanced AI system that simplifies complex legal documents into plain language and provides clause-level explanations using Retrieval-Augmented Generation (RAG), embeddings, and LLMs.",
    techStack: ["Python", "LangChain", "OpenAI/LLMs", "FAISS/Weaviate", "React", "Flask"],
    duration: "9 Weeks",
    complexity: "Advanced",
    // icon: <scale className="w-8 h-8 text-sky-cyan" />, // replace with law/AI icon (or PNG)
    images: ["/src/Images/Project_ss/ai_legal_ss1.jpeg", "src/Images/Project_ss/ai_legal_ss2.jpeg"],
    features: [
      "Legal text simplification into plain language",
      "Clause-by-clause breakdown with explanations",
      "Semantic search with embeddings",
      "Context-aware Q&A using RAG pipeline",
      "Support for multiple document formats (PDF, DOCX)",
      "Source citations and key highlights"
    ],
    featured: true,
  },
  {
    title: "Interactive Code Visualizer for TRIAD Academy",
    description: "A platform that allows students to write, run, and visualize code execution step-by-step. Designed to make abstract programming concepts more tangible with real-time diagrams and animations.",
    techStack: ["TypeScript", "React", "Next.js", "Node.js", "Python", "WebAssembly", "D3.js"],
    duration: "10 Weeks",
    complexity: "Advanced",
    // icon: <Code2 className="w-8 h-8 text-sky-cyan" />, // swap with custom PNG/SVG if needed
    images: ["src/Images/Project_ss/code_vis.jpeg","src/Images/Project_ss/vis2.jpeg"],
    features: [
      "Step-by-step code execution visualization",
      "Supports Python, Java, and C",
      "Graphical representation of memory (stack/heap)",
      "Interactive flowcharts and control-flow diagrams",
      "Integration with TRIAD Academy courses for live demos",
      "Shareable visualizations for GitHub/LinkedIn"
    ],
    featured: true,
  },
  {
    title: "Secure File Sharing Service",
    description: "A secure, end-to-end encrypted file sharing service that protects user privacy and data integrity.",
    techStack: ["React", "Go", "Cryptography", "gRPC"],
    duration: "10 Weeks",
    complexity: "Expert",
    // icon: <ShieldCheck className="w-8 h-8 text-sky-cyan" />,
    images: ["src/Images/Project_ss/sec_file.jpeg","src/Images/Project_ss/sec_file2.jpeg"],
    features: [
      "End-to-end encryption for all files",
      "Secure user authentication with JWT",
      "Time-limited, password-protected sharing links",
      "Audit logs for file access"
    ],
    featured: false,
  }
];
