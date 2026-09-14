import { motion } from 'motion/react';
import { useOutletContext } from 'react-router-dom';
import ServiceDetail from '../components/ServiceDetail';
import SEO from '../components/SEO';

type ContextType = { onOpenModal: () => void };

const detailedServices = [
  {
    title: "Custom Software Development",
    description: "Scalable, secure, and high-performance apps tailored to your needs.",
    problem: "Off-the-shelf software often fails to meet unique business requirements, leading to inefficient workflows and integration nightmares.",
    solution: "We build bespoke software solutions from the ground up, perfectly aligned with your business processes and engineered to scale seamlessly as you grow.",
    features: ["Custom API Integrations", "Microservices Architecture", "Legacy System Migration", "Automated Testing"],
    benefits: ["100% IP Ownership", "Optimized Workflows", "Unlimited Scalability", "Enhanced Security"],
    tech: ["React", "Node.js", "Python", "Go", "PostgreSQL", "Docker"],
    process: ["Discovery", "Architecture", "Development", "QA", "Deployment", "Maintenance"]
  },
  {
    title: "AI & Machine Learning",
    description: "Automate decisions, forecast trends, and power your product with data.",
    problem: "Vast amounts of data go unused, resulting in missed opportunities, manual inefficiencies, and reactive rather than proactive decision-making.",
    solution: "We integrate state-of-the-art machine learning models and generative AI into your products to automate complex tasks and unlock predictive insights.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Engines"],
    benefits: ["Reduced Operational Costs", "Data-Driven Decisions", "Personalized User Experiences", "Automated Workflows"],
    tech: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face"],
    process: ["Data Audit", "Model Selection", "Training", "Integration", "Monitoring"]
  },
  {
    title: "Cloud Solutions & DevOps",
    description: "Future-proof your infrastructure with resilient cloud deployments.",
    problem: "On-premise or poorly configured cloud setups lead to high downtime, slow deployment cycles, and exorbitant hosting costs.",
    solution: "We design and implement secure, auto-scaling cloud architectures with robust CI/CD pipelines to ensure maximum uptime and rapid feature releases.",
    features: ["CI/CD Pipeline Setup", "Infrastructure as Code (IaC)", "Container Orchestration", "Cloud Migration"],
    benefits: ["99.99% Uptime", "Faster Time-to-Market", "Reduced Infrastructure Costs", "High Availability"],
    tech: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "GitHub Actions"],
    process: ["Assessment", "Architecture Design", "Migration/Setup", "Optimization", "Support"]
  }
];

export default function Services() {
  const { onOpenModal } = useOutletContext<ContextType>();

  return (
    <div className="flex flex-col items-center w-full pt-16 pb-24">
      <SEO title="Our Services" description="Custom software, AI integrations, and cloud solutions designed for scale." />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-16 px-6 max-w-4xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Our Services
        </h1>
        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
          Comprehensive technology solutions designed to scale your business and outpace the competition.
        </p>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-8">
        {detailedServices.map((service, index) => (
          <ServiceDetail 
            key={index}
            {...service}
            onOpenModal={onOpenModal}
            reversed={index % 2 !== 0}
          />
        ))}
      </div>

      <div className="mt-24 text-center px-6">
        <h2 className="text-3xl font-bold text-white mb-6">Need a custom solution?</h2>
        <button 
          onClick={onOpenModal}
          className="px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-colors shadow-[0_0_20px_rgba(99,102,241,0.4)]"
        >
          Discuss Your Project
        </button>
      </div>
    </div>
  );
}
