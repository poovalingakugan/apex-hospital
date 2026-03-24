import { motion } from 'framer-motion';
import receptionImg from '../assets/reception_v2.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative px-8 pt-28 pb-20 md:py-32 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center overflow-hidden" id="home">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-8 z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase shadow-sm">
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
          Trusted Medical Excellence
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter text-on-background leading-tight">
          Trusted Care <br />for Your <span className="text-primary italic">Family</span>
        </h1>
        
        <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
          Experience world-class healthcare with a personal touch. Dr. Manickavasan combines modern medical technology with compassionate clinical expertise.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <motion.a 
            href="#booking"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="signature-gradient text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 text-center no-underline cursor-pointer"
          >
            Book Appointment
          </motion.a>
          
          <motion.a 
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-surface-container-highest transition-all shadow-sm"
          >
            <span className="material-symbols-outlined">call</span>
            Call Now
          </motion.a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative"
      >
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-primary/5 rounded-full blur-[80px] -z-10"></div>
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-secondary/5 rounded-full blur-[80px] -z-10"></div>
        
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-surface-container-high border border-outline-variant/10 aspect-[4/3] relative group">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover" 
            src={receptionImg}
            alt="Dr. Manickavasan Hospital Reception" 
          />
          <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>

        {/* Floating Info Card */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl flex items-center gap-4 max-w-xs border border-outline-variant/10"
        >
          <div className="bg-primary/10 p-3 rounded-xl">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>health_and_safety</span>
          </div>
          <div>
            <div className="font-bold text-sm text-on-background">ISO Certified</div>
            <div className="text-xs text-on-surface-variant font-medium">Global Standard Care</div>
          </div>
        </motion.div>

        {/* Experience Badge */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -top-6 -right-6 signature-gradient text-white px-6 py-4 rounded-2xl shadow-2xl text-center"
        >
          <div className="text-2xl font-black">15+</div>
          <div className="text-[10px] font-bold uppercase tracking-widest opacity-90">Years Exp.</div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
