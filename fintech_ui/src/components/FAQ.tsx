import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in Fintech, E-Commerce, Healthcare, and SaaS platforms, but our team is capable of delivering scalable solutions across any digital-first industry."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes, we offer comprehensive post-launch support, including SLA-based maintenance, security updates, and feature enhancements to ensure your product scales seamlessly."
  },
  {
    question: "How long does a typical project take?",
    answer: "A standard MVP takes 8-12 weeks from discovery to deployment. Enterprise-scale applications vary based on complexity, but we follow agile methodologies to deliver value early and often."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, battle-tested stacks. Our frontend expertise includes React, Next.js, and Tailwind CSS. For backend, we use Node.js, Python, and Go, hosted on AWS or Google Cloud."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 max-w-4xl mx-auto w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-lg font-light">
          Everything you need to know about working with us.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border border-white/10 rounded-2xl overflow-hidden transition-colors ${isOpen ? 'bg-white/[0.05]' : 'bg-white/[0.02] hover:bg-white/[0.03]'}`}
            >
              <button 
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown className={`text-cyan-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-400 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
