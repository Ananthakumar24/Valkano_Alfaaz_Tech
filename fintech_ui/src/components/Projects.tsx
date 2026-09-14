import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    category: "Fintech",
    title: "Fintech Dashboard",
    description: "Streamlined user analytics & real-time transactions."
  },
  {
    category: "E-Commerce",
    title: "E-commerce Platform",
    description: "300% increase in conversion through custom storefront."
  },
  {
    category: "AI",
    title: "AI-Powered Tool",
    description: "Reduced support tickets by 40% using predictive models."
  },
  {
    category: "Fintech",
    title: "Crypto Wallet App",
    description: "Secure, decentralized wallet with instant swaps."
  },
  {
    category: "E-Commerce",
    title: "B2B Marketplace",
    description: "Complex procurement flows simplified for enterprise."
  },
  {
    category: "AI",
    title: "Generative AI CRM",
    description: "Automated sales pipelines and personalized outreach."
  }
];

const categories = ["All", "Fintech", "E-Commerce", "AI"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto flex flex-col items-center w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 max-w-2xl"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Real Impact. <span className="text-cyan-500">Proven Results.</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
          Explore how we've helped startups and enterprises alike scale and innovate.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              filter === category 
                ? 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.title}
              className="group p-1 rounded-[24px] bg-gradient-to-b from-white/10 to-white/0 hover:from-cyan-500/30 transition-all duration-300 h-full"
            >
              <div className="h-full w-full bg-[#0a0a0a] rounded-[22px] p-8 flex flex-col min-h-[220px] border border-white/5 group-hover:bg-[#0a0a0a]/90 backdrop-blur-xl transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] rounded-full group-hover:bg-cyan-500/20 transition-colors"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-xs font-bold text-cyan-500 mb-4 uppercase tracking-widest">{project.category}</div>
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-3">{project.title}</h3>
                  <p className="text-base font-light text-gray-400 leading-relaxed flex-grow">{project.description}</p>
                  <div className="mt-6">
                    <span className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors inline-flex items-center gap-2">
                      View Case Study <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Link 
        to="/portfolio"
        className="px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-medium transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] inline-block"
      >
        View All Projects
      </Link>
    </section>
  );
}
