import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-9xl font-extrabold text-sky-cyan font-montserrat">404</h1>
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mt-4 mb-2">Oops! Page Not Found</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center px-6 py-3 bg-sky-cyan text-white font-semibold rounded-lg shadow-md hover:bg-sky-cyan-dark transition-colors duration-300"
      >
        <Home className="w-5 h-5 mr-2" />
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
