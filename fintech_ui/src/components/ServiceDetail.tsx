import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

interface ServiceDetailProps {
  title: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  benefits: string[];
  tech: string[];
  process: string[];
  onOpenModal: () => void;
  reversed?: boolean;
}

export default function ServiceDetail({
  title, description, problem, solution, features, benefits, tech, process, onOpenModal, reversed = false
}: ServiceDetailProps) {
  return (
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-start w-full py-16 border-b border-white/5`}>
      <div className="w-full lg:w-1/2 space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-cyan-400 font-light">{description}</p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">The Challenge</h3>
          <p className="text-gray-400 leading-relaxed">{problem}</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Our Solution</h3>
          <p className="text-gray-400 leading-relaxed">{solution}</p>
        </div>
        
        <div>
          <button 
            onClick={onOpenModal}
            className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-medium transition-colors"
          >
            Request a Consultation
          </button>
        </div>
      </div>

      <div className="w-full lg:w-1/2 space-y-8 p-8 bg-white/[0.02] border border-white/5 rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-cyan-500" /> Key Features
            </h4>
            <ul className="space-y-2">
              {features.map((item, i) => (
                <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                  <span className="text-cyan-500/50 mt-1">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-cyan-500" /> Benefits
            </h4>
            <ul className="space-y-2">
              {benefits.map((item, i) => (
                <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                  <span className="text-cyan-500/50 mt-1">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5">
          <h4 className="font-semibold text-white mb-4">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, i) => (
              <span key={i} className="px-3 py-1 bg-black/40 border border-white/5 rounded-full text-xs text-gray-300">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-white/5">
          <h4 className="font-semibold text-white mb-4">Our Process</h4>
          <div className="flex flex-wrap gap-2">
            {process.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-xs text-cyan-500 font-bold">{i + 1}.</span>
                <span className="text-sm text-gray-400">{item}</span>
                {i < process.length - 1 && <span className="text-gray-600 mx-1">→</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
