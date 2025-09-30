import { Youtube, Github, BookOpen } from 'lucide-react';

const quantumSeriesEpisodes = [
    {
        title: 'Episode 1: Introduction to Quantum Computing',
        description: 'Start your journey into the fascinating world of quantum computing. This episode covers the basic concepts of qubits, superposition, and entanglement.',
        youtubeLink: '#',
        githubLink: '#',
        articleLink: '#',
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
];

export default function QuantumComputingSeries() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Quantum Computing Series</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {quantumSeriesEpisodes.map((episode, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 border border-transparent hover:border-sky-cyan hover:shadow-lg">
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-steel-navy">{episode.title}</h3>
                                <p className="mt-3 text-sm text-charcoal-gray h-20">{episode.description}</p>
                                <div className="mt-4 flex justify-start items-center space-x-6">
                                    <a href={episode.youtubeLink} className="text-gray-500 hover:text-red-600 transition-colors duration-300 flex items-center space-x-1">
                                        <Youtube size={20} />
                                        <span className="font-semibold text-sm">Watch</span>
                                    </a>
                                    <a href={episode.githubLink} className="text-gray-500 hover:text-gray-900 transition-colors duration-300 flex items-center space-x-1">
                                        <Github size={20} />
                                        <span className="font-semibold text-sm">Code</span>
                                    </a>
                                    <a href={episode.articleLink} className="text-gray-500 hover:text-indigo-600 transition-colors duration-300 flex items-center space-x-1">
                                        <BookOpen size={20} />
                                        <span className="font-semibold text-sm">Read</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
