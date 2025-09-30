
export interface Career {
  title: string;
  description: string;
  location: string;
  type: 'Full-time' | 'Internship' | 'Part-time';
  featured: boolean;
  applyLink: string;
}

export const allCareers: Career[] = [
  {
    title: "Software Engineer Intern",
    description: "Work on exciting projects and gain hands-on experience with our engineering team. You will be contributing to our main codebase and working with modern technologies.",
    location: "Remote",
    type: "Internship",
    featured: true,
    applyLink: "https://forms.gle/your-swe-intern-form-id"
  },
  {
    title: "Content Creator & Social Media Manager",
    description: "Create engaging content for our social media platforms, manage our online community, and help grow our brand presence.",
    location: "Remote",
    type: "Part-time",
    featured: true,
    applyLink: "https://forms.gle/your-social-media-form-id"
  },
  {
    title: "Quantum Computing Course Instructor",
    description: "We are looking for an expert in Quantum Computing to lead our 30-day immersion course. You will be responsible for creating and delivering lectures and mentoring students.",
    location: "Remote",
    type: "Part-time",
    featured: false,
    applyLink: "https://forms.gle/your-qc-instructor-form-id"
  }
];
