import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ onOpenModal }: { onOpenModal?: () => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col px-6 py-4 max-w-7xl mx-auto w-full bg-black/40 backdrop-blur-md border-b border-white/5 rounded-b-2xl mt-0"
    >
      <div className="flex items-center justify-between w-full">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Valkano Alfaaz Technologies" className="h-10 w-auto object-contain" />
          <span className="hidden sm:block text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-400 leading-none">
            Valkano Alfaaz
          </span>
        </Link>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          {links.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link 
                key={item.name} 
                to={item.href} 
                className={`relative hover:text-white transition-colors group ${isActive ? 'text-white' : ''}`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-indigo-500 transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={onOpenModal}
            className="px-5 py-2.5 text-sm border border-gray-600/50 text-white rounded-full hover:bg-white/5 transition-colors"
          >
            Request A Demo
          </button>
          <button 
            onClick={onOpenModal}
            className="px-5 py-2.5 text-sm bg-indigo-600 hover:bg-indigo-500 text-white rounded-full transition-colors font-medium shadow-[0_0_15px_rgba(99,102,241,0.3)]"
          >
            Get Started
          </button>
        </div>
        
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden flex flex-col pt-6 gap-4 overflow-hidden"
          >
            {links.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors ${isActive ? 'text-indigo-400' : 'text-gray-300 hover:text-white'}`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="flex flex-col gap-3 mt-4 border-t border-white/10 pt-6">
              <button onClick={() => { onOpenModal?.(); setIsMobileMenuOpen(false); }} className="w-full px-5 py-3 border border-gray-600/50 text-white rounded-full hover:bg-white/5">
                Request A Demo
              </button>
              <button onClick={() => { onOpenModal?.(); setIsMobileMenuOpen(false); }} className="w-full px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
