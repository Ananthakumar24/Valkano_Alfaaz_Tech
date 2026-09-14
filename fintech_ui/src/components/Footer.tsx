import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#030303] border-t border-white/5 pt-16 pb-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo.png" alt="Valkano Alfaaz Technologies" className="h-10 w-auto object-contain" />
            <span className="text-xl font-bold tracking-tight text-white leading-none">
              Valkano Alfaaz
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Empowering businesses with next-gen technology solutions. We engineer your digital success.
          </p>
          <div className="flex gap-4 text-gray-500">
            <a href="#" className="hover:text-indigo-500 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-indigo-500 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-indigo-500 transition-colors"><Github size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/services" className="hover:text-white transition-colors">Custom Software</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">AI & Machine Learning</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Cloud Solutions</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Cybersecurity</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center gap-2"><Mail size={16} /> hello@valkanoalfaaz.com</li>
            <li>+1 (555) 123-4567</li>
            <li className="leading-relaxed">123 Innovation Drive<br/>Tech City, TC 90210</li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Valkano Alfaaz Technologies. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
