import { useOutletContext } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

type ContextType = { onOpenModal: () => void };

export default function Home() {
  const { onOpenModal } = useOutletContext<ContextType>();

  return (
    <div className="flex flex-col items-center w-full">
      <SEO title="Software Engineering & Digital Transformation" />
      <Hero onOpenModal={onOpenModal} />
      <Services />
      <Stats />
      <Projects />
      <Testimonials />
      <FAQ />
    </div>
  );
}
