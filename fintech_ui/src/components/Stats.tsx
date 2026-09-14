import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { num: "01", title: "10+ Years of\nTech Expertise" },
  { num: "02", title: "Transparent\nAgile Process" },
  { num: "03", title: "Dedicated\nFull-Stack\nTeams" },
  { num: "04", title: "24/7 Support &\nMaintenance" },
];

export default function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="stats" className="py-32 px-6 bg-gradient-to-b from-black to-cyan-900/20 w-full mt-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Built on Trust. Driven by Results.
          </h2>
          <p className="text-cyan-200/80 mb-20 max-w-xl text-lg md:text-xl font-light leading-relaxed mx-auto">
            We don't just build software, we build relationships. Our clients trust us to deliver tech that works.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {stats.map((stat, index) => (
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
              key={index} 
              className="group relative p-8 rounded-[24px] border border-white/10 bg-white/[0.02] backdrop-blur-md text-left transition-all duration-300 flex flex-col min-h-[220px]"
            >
              <div className="absolute top-6 right-6">
                <ArrowUpRight size={20} className="text-white/40 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" strokeWidth={1.5} />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tighter opacity-80">{stat.num}</div>
              <h3 className="text-xl font-medium text-white whitespace-pre-line leading-tight mt-auto tracking-tight">{stat.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
