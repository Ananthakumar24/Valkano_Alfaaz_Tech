import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  { name: "Sarah Jenkins", role: "CEO at TechStart", text: "The team delivered our MVP in record time. The quality and attention to detail is unmatched in the industry." },
  { name: "Marcus Reed", role: "CTO at FinScale", text: "Working with them transformed our entire product pipeline. They don't just write code; they engineer solutions." },
  { name: "Elena Rostova", role: "VP of Product, DataSys", text: "Their AI implementation completely revolutionized our customer support, reducing ticket times by over 40%." },
  { name: "James Liu", role: "Founder, E-Shop", text: "Our conversion rates tripled after they overhauled our digital storefront. Phenomenal work." },
  { name: "David Kim", role: "Director, SecureNet", text: "The cybersecurity audit was thorough and exposed vulnerabilities we didn't know existed. Highly recommend." }
];

export default function Testimonials() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-32 px-6 w-full flex flex-col items-center overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[50vh] bg-cyan-600/10 blur-[150px] -z-10 rounded-full pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-24"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Trusted by <span className="text-cyan-500">Innovators</span>
        </h2>
        <p className="text-gray-400 text-lg font-light">Don't just take our word for it.</p>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap justify-center gap-8 w-full max-w-7xl mx-auto px-4"
      >
        {testimonials.map((testimonial, i) => (
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            key={i} 
            className="relative pt-10 w-full md:w-[350px] flex-shrink-0"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-[#050505] z-10 shadow-lg">
              <img 
                src={`https://i.pravatar.cc/150?img=${i + 12}`} 
                alt={`${testimonial.name} Avatar`} 
                className="w-full h-full object-cover bg-gray-800" 
                loading="lazy"
              />
            </div>
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 hover:bg-white/[0.05] transition-colors rounded-[24px] p-8 pt-14 h-full flex flex-col items-center text-center shadow-xl">
               <div className="flex text-yellow-400 mb-6 gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
               </div>
               <p className="text-gray-300 font-light leading-relaxed mb-8 flex-grow">"{testimonial.text}"</p>
               <div>
                 <h4 className="font-bold text-white tracking-tight">{testimonial.name}</h4>
                 <p className="text-xs text-cyan-400 mt-1 uppercase tracking-wider">{testimonial.role}</p>
               </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
