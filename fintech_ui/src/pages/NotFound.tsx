import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-6">
        404
      </h1>
      <h2 className="text-3xl font-semibold text-white mb-4">Page Not Found</h2>
      <p className="text-gray-400 max-w-md mx-auto mb-10">
        The page you are looking for doesn't exist or has been moved.
      </p>
      
      <Link 
        to="/"
        className="flex items-center gap-2 px-8 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-medium transition-colors shadow-[0_0_20px_rgba(6,182,212,0.4)]"
      >
        <Home size={20} />
        Back to Home
      </Link>
    </div>
  );
}
