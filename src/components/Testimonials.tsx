import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Patient for 5 years',
      text: 'Dr. Manickavasan is extremely patient and explains everything clearly. The best clinic in Moolakaraipatti for family care.',
      initial: 'R',
      color: 'border-primary',
      bg: 'bg-primary/5',
    },
    {
      name: 'Anitha S.',
      role: 'Mother of two',
      text: 'Excellent pediatric care. My kids are actually comfortable coming here. The staff is very friendly and efficient.',
      initial: 'A',
      color: 'border-secondary',
      bg: 'bg-secondary/5',
    },
    {
      name: 'Murugan P.',
      role: 'Regular Checkup',
      text: 'High-performance clinic with digital records and minimal waiting time. Professionalism at its peak in rural healthcare.',
      initial: 'M',
      color: 'border-primary',
      bg: 'bg-primary/5',
    },
  ];

  return (
    <section className="py-24 px-8 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-center"
          >
            <h2 className="text-4xl font-extrabold font-headline">Patient Stories</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              Hear from the families we serve every day at<br className="hidden md:block" /> Dr. Manickavasan Hospital.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`p-8 bg-white rounded-2xl border-t-4 ${t.color} shadow-sm relative group`}
            >
              <div className="text-tertiary mb-6 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                ))}
              </div>
              
              <p className="text-on-surface-variant italic mb-8 leading-relaxed relative z-10">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${t.bg} rounded-full flex items-center justify-center font-bold text-on-surface border border-outline-variant/5`}>
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-on-background text-sm">{t.name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-outline font-bold">{t.role}</div>
                </div>
              </div>

              {/* Decorative Quote Mark */}
              <span className="absolute top-4 right-8 text-6xl text-outline-variant/10 font-serif leading-none select-none">"</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
