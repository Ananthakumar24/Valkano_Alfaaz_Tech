import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import ScrollAnimation from '../components/ScrollAnimation';
import Footer from '../components/Footer';

export default function MainLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HelmetProvider>
      <div className="min-h-screen text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden bg-transparent flex flex-col relative z-0">
        <ScrollAnimation />
        <Navbar onOpenModal={() => setIsModalOpen(true)} />
        
        <main className="flex-grow w-full relative z-10 flex flex-col">
          <Outlet context={{ onOpenModal: () => setIsModalOpen(true) }} />
        </main>

        <Footer />

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </HelmetProvider>
  );
}
