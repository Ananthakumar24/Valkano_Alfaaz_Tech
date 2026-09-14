import { motion } from 'motion/react';
import { useOutletContext } from 'react-router-dom';
import { Target, Users, Zap, Shield } from 'lucide-react';
import SEO from '../components/SEO';

type ContextType = { onOpenModal: () => void };

const values = [
  { icon: <Target className="text-cyan-400" size={24} />, title: "Precision", description: "We measure twice and cut once. Every line of code is intentional." },
  { icon: <Zap className="text-cyan-400" size={24} />, title: "Velocity", description: "Speed without sacrificing quality through automated workflows." },
  { icon: <Users className="text-cyan-400" size={24} />, title: "Partnership", description: "We don't just build for you, we build with you as your technical arm." },
  { icon: <Shield className="text-cyan-400" size={24} />, title: "Integrity", description: "Security and transparency are baked into our foundation." }
];

const team = [
  { name: "Alex Mercer", role: "CEO & Founder", image: "https://i.pravatar.cc/300?img=11" },
  { name: "Sarah Chen", role: "CTO", image: "https://i.pravatar.cc/300?img=5" },
  { name: "Marcus Johnson", role: "Head of Design", image: "https://i.pravatar.cc/300?img=13" },
  { name: "Elena Rodriguez", role: "VP of Engineering", image: "https://i.pravatar.cc/300?img=9" }
];

export default function About() {
  const { onOpenModal } = useOutletContext<ContextType>();

  return (
    <div className="flex flex-col items-center w-full pt-32 px-6 max-w-6xl mx-auto pb-24">
      <SEO title="About Us" description="Learn about our mission, vision, and the team driving digital innovation." />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          About Valkano Alfaaz Technologies
        </h1>
        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
          We are a team of visionary engineers, designers, and strategists dedicated to building the next generation of digital products. 
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mt-8 mb-24">
        <div className="p-10 rounded-[32px] bg-white/[0.02] border border-white/10 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-400 font-light leading-relaxed text-lg">
            To empower enterprises and startups alike with cutting-edge, scalable, and secure technology solutions that drive real business growth and solve complex human challenges.
          </p>
        </div>
        <div className="p-10 rounded-[32px] bg-white/[0.02] border border-white/10 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-gray-400 font-light leading-relaxed text-lg">
            To become the global standard for innovation in software engineering, pushing the boundaries of what is possible on the web, in the cloud, and beyond.
          </p>
        </div>
      </div>

      <div className="w-full mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
          <p className="text-gray-400">The principles that guide every decision we make.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <div key={idx} className="p-8 rounded-[24px] bg-[#0a0a0a] border border-white/5 hover:border-cyan-500/30 transition-colors">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Leadership Team</h2>
          <p className="text-gray-400">The minds behind the innovation.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-white/5">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <h3 className="text-lg font-bold text-white">{member.name}</h3>
              <p className="text-cyan-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 text-center bg-white/[0.02] border border-white/10 p-12 rounded-[32px] w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to build something great?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Let's talk about how we can help you achieve your goals and transform your ideas into reality.</p>
        <button 
          onClick={onOpenModal}
          className="px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-medium transition-colors shadow-[0_0_20px_rgba(6,182,212,0.4)]"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
}
