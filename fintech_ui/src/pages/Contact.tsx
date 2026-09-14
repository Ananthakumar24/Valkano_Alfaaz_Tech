import { motion } from 'motion/react';
import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';
import SEO from '../components/SEO';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center w-full pt-32 px-6 max-w-6xl mx-auto pb-24">
      <SEO title="Contact Us" description="Get in touch for custom software development, AI integrations, or cloud services." />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Get in Touch
        </h1>
        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
          Whether you have a question, need a custom software solution, or just want to say hi, our team is ready to hear from you.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full mt-8">
        {/* Contact Info */}
        <div className="flex flex-col gap-8">
          <div className="p-8 rounded-[24px] bg-white/[0.02] border border-white/10 backdrop-blur-md flex items-start gap-6">
            <div className="p-4 bg-indigo-500/10 rounded-full text-indigo-400">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer">hello@valkanoalfaaz.com</p>
              <p className="text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer">support@valkanoalfaaz.com</p>
            </div>
          </div>

          <div className="p-8 rounded-[24px] bg-white/[0.02] border border-white/10 backdrop-blur-md flex items-start gap-6">
            <div className="p-4 bg-indigo-500/10 rounded-full text-indigo-400">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
              <p className="text-gray-500 text-sm mt-1">Mon-Fri from 9am to 6pm EST</p>
            </div>
          </div>

          <div className="p-8 rounded-[24px] bg-white/[0.02] border border-white/10 backdrop-blur-md flex items-start gap-6">
            <div className="p-4 bg-indigo-500/10 rounded-full text-indigo-400">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-400">123 Innovation Drive</p>
              <p className="text-gray-400">Tech City, TC 90210</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-10 rounded-[24px] bg-[#0a0a0a] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-2xl font-bold text-white mb-6 relative z-10">Send a Message</h2>
          
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center py-12 relative z-10"
            >
              <CheckCircle2 size={64} className="text-[#00B67A] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400 mb-8">Thank you for reaching out. We will get back to you shortly.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2 border border-white/20 text-white hover:bg-white/5 rounded-full transition-colors"
              >
                Send Another
              </button>
            </motion.div>
          ) : (
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea required rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed text-white rounded-lg px-4 py-4 font-medium transition-colors shadow-[0_0_15px_rgba(99,102,241,0.3)] flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
