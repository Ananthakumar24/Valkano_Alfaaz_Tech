import { motion } from 'motion/react';
import { useOutletContext } from 'react-router-dom';

type ContextType = { onOpenModal: () => void };

export default function Careers() {
  const { onOpenModal } = useOutletContext<ContextType>();

  const openPositions = [
    { title: 'Senior Full Stack Engineer', department: 'Engineering', location: 'Remote / Hybrid' },
    { title: 'Product Designer (UI/UX)', department: 'Design', location: 'Remote' },
    { title: 'DevOps Engineer', department: 'Engineering', location: 'Hybrid' },
  ];

  return (
    <div className="flex flex-col items-center w-full pt-32 px-6 max-w-5xl mx-auto pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Join the Valkano Team
        </h1>
        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
          Help us build the next generation of digital products. We're always looking for talented individuals who share our passion for innovation.
        </p>
      </motion.div>
      
      <div className="w-full mt-12 space-y-6">
        <h2 className="text-2xl font-bold text-white mb-8">Open Positions</h2>
        {openPositions.map((job, idx) => (
          <div key={idx} className="p-6 rounded-[16px] bg-white/[0.02] border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-white/[0.04] transition-colors">
            <div>
              <h3 className="text-xl font-semibold text-white">{job.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{job.department} • {job.location}</p>
            </div>
            <button 
              onClick={onOpenModal}
              className="px-6 py-2 border border-indigo-600 text-indigo-400 hover:bg-indigo-600/10 rounded-full text-sm font-medium transition-colors"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
