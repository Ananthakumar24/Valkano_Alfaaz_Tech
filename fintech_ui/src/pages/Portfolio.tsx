import { motion } from 'motion/react';
import { useOutletContext } from 'react-router-dom';
import ProjectsComponent from '../components/Projects';
import SEO from '../components/SEO';

type ContextType = { onOpenModal: () => void };

export default function Portfolio() {
  const { onOpenModal } = useOutletContext<ContextType>();

  return (
    <div className="flex flex-col items-center w-full pt-16 pb-24">
      <SEO title="Portfolio & Case Studies" description="Explore our successful projects and digital transformations." />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-16 px-6 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Our Portfolio
        </h1>
        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
          A showcase of our most impactful digital transformations.
        </p>
      </motion.div>
      
      {/* Re-use the existing Projects component for the layout */}
      <ProjectsComponent />

      <div className="mt-12 text-center px-6">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to start your project?</h2>
        <button 
          onClick={onOpenModal}
          className="px-8 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-medium transition-colors shadow-[0_0_20px_rgba(6,182,212,0.4)]"
        >
          Contact Us Today
        </button>
      </div>
    </div>
  );
}
