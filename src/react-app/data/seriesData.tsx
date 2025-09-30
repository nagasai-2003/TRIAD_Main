export interface Episode {
  title: string;
  description: string;
  youtubeLink: string;
  githubLink: string;
  articleLink: string;
}

export interface Series {
  title: string;
  description: string;
  imageUrl: string;
  episodes: Episode[];
}

/**
 * An array of series data, where each object represents a series of educational content.
 */
export const seriesData: Series[] = [
  {
    title: 'Quantum Computing Series',
    description: 'A deep dive into the world of quantum computing, from the basics to advanced topics.',
    imageUrl: 'public/Quantum_Series_Hero.png',
    episodes: [
      {
        title: 'Episode 1: Introduction to Quantum Computing',
        description: 'Start your journey into the fascinating world of quantum computing. This episode covers the basic concepts of qubits, superposition, and entanglement.',
        youtubeLink: '/upcoming',
        githubLink: '/upcoming',
        articleLink: '/upcoming',
      },
      {
        title: 'Episode 2: Your First Quantum Circuit',
        description: 'Get hands-on and build your first quantum circuit. We will use a popular quantum computing framework to run a simple quantum algorithm.',
        youtubeLink: '#',
        githubLink: '#',
        articleLink: '#',
      },
      {
        title: 'Episode 3: Quantum Gates and Algorithms',
        description: 'Dive deeper into the building blocks of quantum computers. This episode explores common quantum gates and introduces famous quantum algorithms like Deutsch-Jozsa.',
        youtubeLink: '#',
        githubLink: '#',
        articleLink: '#',
      },
    ]
  },
  {
    title: 'Generative AI and Generative AI Tools',
    description: 'Explore the fundamentals of AI and build intelligent systems with machine learning.',
    imageUrl: 'public/AI_Series_Banner.png',
    episodes: [
      {
        title: 'Episode 1: What is AI?',
        description: 'A gentle introduction to the field of Artificial Intelligence and its applications.',
        youtubeLink: '#',
        githubLink: '#',
        articleLink: '#',
      },
    ]
  },
  // {
  //   title: 'Backend Development',
  //   description: 'Learn how to build powerful and scalable backend services and APIs.',
  //   imageUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
  //   episodes: [
  //       {
  //           title: 'Episode 1: Building Your First REST API',
  //           description: 'An introduction to backend development. Learn how to create a simple REST API using Node.js and Express.',
  //           youtubeLink: '#',
  //           githubLink: '#',
  //           articleLink: '#',
  //       },
  //       {
  //           title: 'Episode 2: Working with JSON Data',
  //           description: 'Understand the ubiquitous JSON format. We will cover parsing, manipulating, and sending JSON data from your API.',
  //           youtubeLink: '#',
  //           githubLink: '#',
  //           articleLink: '#',
  //       },
  //       {
  //           title: 'Episode 3: Real-time Communication with WebSockets',
  //           description: 'Explore how to add real-time features to your applications, like live notifications or chat, using WebSockets.',
  //           youtubeLink: '#',
  //           githubLink: '#',
  //           articleLink: '#',
  //       },
  //   ]
  // }
];
