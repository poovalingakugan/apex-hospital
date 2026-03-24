import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'about', label: 'About', icon: 'info' },
    { id: 'services', label: 'Services', icon: 'medical_services' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'booking'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const offsetTop = elementRect - bodyRect;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-xl dark:bg-slate-900/80 border-b border-white/20 shadow-lg shadow-blue-900/5 transition-all duration-300">
      <div className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-tighter text-blue-700 dark:text-blue-400 font-headline cursor-pointer z-[110]"
          onClick={(e) => scrollToSection(e, 'home')}
        >
          Dr. Manickavasan Hospital
        </motion.div>
        
        <div className="hidden md:flex items-center gap-10 font-headline font-semibold text-sm tracking-tight">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`transition-all duration-300 relative py-1 ${
                activeSection === link.id 
                ? 'text-blue-700 dark:text-blue-400 font-bold' 
                : 'text-slate-600 dark:text-slate-400 hover:text-blue-600'
              }`}
            >
              {link.label}
            </a>
          ))}
          
          <motion.a 
            href="#booking"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => scrollToSection(e, 'booking')}
            className={`px-7 py-3 rounded-full font-bold shadow-xl shadow-blue-600/20 text-white no-underline transition-all duration-300 signature-gradient ${
              activeSection === 'booking'
              ? 'ring-4 ring-primary/30 scale-105'
              : ''
            }`}
          >
            Book Appointment
          </motion.a>
        </div>

        {/* Mobile Menu Icon */}
        <div 
          className="md:hidden cursor-pointer relative z-[110] p-2 -mr-2 text-primary" 
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
        >
          <div className="relative w-8 h-8 flex items-center justify-center">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span 
                key={isMenuOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.2 }}
                className="material-symbols-outlined text-3xl absolute"
              >
                {isMenuOpen ? 'close' : 'menu'}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-white/40 backdrop-blur-2xl z-[98] md:hidden"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              className="md:hidden absolute top-[76px] left-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 shadow-2xl overflow-hidden z-[99]"
            >
              <div className="p-8 flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.a 
                    key={link.id}
                    href={`#${link.id}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 ${
                      activeSection === link.id 
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400' 
                      : 'text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <span className="material-symbols-outlined text-2xl">{link.icon}</span>
                    <span className="text-lg font-bold tracking-tight">{link.label}</span>
                    {activeSection === link.id && (
                      <motion.div 
                        layoutId="mobileActive"
                        className="ml-auto w-2 h-2 bg-blue-600 rounded-full"
                      />
                    )}
                  </motion.a>
                ))}
                
                <div className="pt-4">
                  <motion.a 
                    href="#booking"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    onClick={(e) => scrollToSection(e, 'booking')}
                    className="w-full h-16 flex items-center justify-center rounded-[1.5rem] font-bold bg-blue-600 text-white shadow-xl shadow-blue-600/30 text-lg signature-gradient"
                  >
                    Book Appointment
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
