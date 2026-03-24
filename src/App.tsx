import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Diagnostics from './components/Diagnostics';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    // Force scroll to top on refresh
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary/10 selection:text-primary relative overflow-x-hidden">
      {/* Dynamic Background Blurs (Mesh Effect) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden bg-white">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[55%] h-[55%] bg-blue-100/30 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[45%] h-[45%] bg-primary/5 rounded-full blur-[130px]"></div>
      </div>
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Diagnostics />
        <Booking />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Mobile-Only Scroll to Top FAB */}
      <motion.div 
        initial={{ scale: 0, opacity: 0, y: 20 }}
        animate={{ 
          scale: showScrollTop ? 1 : 0, 
          opacity: showScrollTop ? 1 : 0,
          y: showScrollTop ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-8 z-[60] md:hidden"
      >
        <button 
          onClick={scrollToTop}
          className="signature-gradient text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 border border-white/20"
          aria-label="Scroll to top"
        >
          <span className="material-symbols-outlined text-3xl">arrow_upward</span>
        </button>
      </motion.div>
    </div>
  );
};

export default App;
