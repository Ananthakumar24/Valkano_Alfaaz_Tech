import { Code2, ArrowUpRight } from 'lucide-react';
import { motion, Variants } from 'motion/react';

const services = [
  {
    title: "Custom Software\nDevelopment",
    description: "Scalable, secure, and high-performance apps tailored to your needs.",
    isActive: false,
  },
  {
    title: "AI & Machine Learning",
    description: "Automate decisions, forecast trends, and power your product with data.",
    isActive: true,
  },
  {
    title: "Cloud Solutions",
    description: "Future-proof your infrastructure with AWS, Azure, or GCP deployments.",
    isActive: false,
  },
  {
    title: "UI/UX\nDesign",
    description: "Seamless, human-centered digital experiences that drive engagement.",
    isActive: false,
  },
  {
    title: "Web & Mobile App\nDevelopment",
    description: "From MVPs to enterprise apps - we code what you imagine.",
    isActive: false,
  },
  {
    title: "Cybersecurity",
    description: "Protect what matters with advanced security frameworks and audits.",
    isActive: false,
  },
];

export default function Services() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="py-32 px-6 max-w-6xl mx-auto flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 max-w-2xl"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Innovating Tomorrow. <span className="text-indigo-500">Building Today.</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
          Empowering businesses with next-gen technology solutions from custom software to AI-driven platforms, we engineer your digital success.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
      >
        {services.map((service, index) => (
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            key={index} 
            className={`group relative p-8 rounded-[24px] flex flex-col items-start transition-colors duration-300 ${
              service.isActive 
                ? 'bg-indigo-600/10 text-white shadow-[0_0_40px_rgba(99,102,241,0.15)] border border-indigo-500/30 backdrop-blur-sm' 
                : 'bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] text-white backdrop-blur-sm'
            }`}
          >
            <div className="absolute top-6 right-6 overflow-hidden">
              <ArrowUpRight size={20} className={`transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 ${service.isActive ? 'text-indigo-400' : 'text-gray-500 group-hover:text-white'}`} strokeWidth={1.5} />
            </div>
            
            <div className={`p-3 rounded-xl mb-8 transition-colors duration-300 ${service.isActive ? 'bg-indigo-500/20' : 'bg-white/5 group-hover:bg-white/10'}`}>
              <Code2 size={24} className={service.isActive ? 'text-indigo-400' : 'text-gray-400 group-hover:text-white'} strokeWidth={1.5} />
            </div>
            
            <h3 className="text-xl font-bold mb-3 whitespace-pre-line leading-tight tracking-tight">{service.title}</h3>
            <p className={`text-base leading-relaxed font-light ${service.isActive ? 'text-indigo-200' : 'text-gray-400'}`}>
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
