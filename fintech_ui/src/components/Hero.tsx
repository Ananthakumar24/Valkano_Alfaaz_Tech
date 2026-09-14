import { Star } from 'lucide-react';
import { motion, Variants } from 'motion/react';

export default function Hero({ onOpenModal }: { onOpenModal?: () => void }) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] pt-32 pb-16 px-4 text-center w-full z-10 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[1200px] h-[40vw] max-h-[600px] bg-indigo-600/30 blur-[120px] rounded-full pointer-events-none -z-10 mt-[-5%]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] max-w-[900px] h-[30vw] max-h-[400px] bg-white/20 blur-[100px] rounded-full pointer-events-none -z-10 mt-[2%]"></div>

      <motion.div 
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-block mb-8 px-5 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(99,102,241,0.2)]">
          Welcome to Valkano Alfaaz Technologies
        </motion.div>
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
          Innovating Tomorrow.<br />Building Today.
        </motion.h1>
        <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Empowering businesses with next-gen technology solutions from custom software to AI-driven platforms, we engineer your digital success.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button 
            onClick={onOpenModal}
            className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-colors w-full sm:w-auto shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]"
          >
            Get a Free Consultation
          </button>
          <a 
            href="#projects"
            className="px-8 py-3.5 border border-white/10 hover:bg-white/5 text-white rounded-full font-medium transition-colors w-full sm:w-auto backdrop-blur-sm inline-block"
          >
            See Our Work
          </a>
        </motion.div>

        {/* Trust Banner */}
        <motion.div variants={itemVariants} className="inline-flex flex-col md:flex-row items-center justify-center gap-8 py-5 px-10 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col items-center md:items-start md:border-r border-white/10 md:pr-8">
            <div className="flex text-yellow-500 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" className="mr-0.5" />
              ))}
            </div>
            <div className="text-2xl font-bold text-white leading-none mb-1">1,200+</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">users on</div>
          </div>
          <div className="flex items-center gap-8 text-gray-300 font-semibold text-lg">
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <Star size={20} className="text-[#00B67A]" fill="currentColor" />
              <span>Trustpilot</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
               <span className="text-2xl font-bold font-serif leading-none text-[#FF5D5D]">G<span className="text-sm align-top">2</span></span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
