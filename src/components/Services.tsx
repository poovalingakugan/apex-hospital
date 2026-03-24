import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Pediatrics',
      description: 'Expert care for your little ones, from routine checkups to specialized treatments.',
      icon: 'child_care',
      color: 'bg-primary/10',
      hoverColor: 'group-hover:signature-gradient',
    },
    {
      title: 'General Medicine',
      description: 'Comprehensive adult healthcare including chronic disease management and diagnosis.',
      icon: 'stethoscope',
      color: 'bg-secondary/10',
      hoverColor: 'group-hover:bg-secondary',
    },
    {
      title: 'Wellness & Prevention',
      description: 'Proactive health screenings and lifestyle consultations for long-term vitality.',
      icon: 'spa',
      color: 'bg-tertiary-fixed-dim/20',
      hoverColor: 'group-hover:bg-tertiary',
    },
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto" id="services">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold font-headline"
        >
          Specialized Healthcare
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-on-surface-variant max-w-xl mx-auto"
        >
          We provide a wide range of medical services tailored to meet the<br className="hidden md:block" /> unique needs of every family member.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-outline-variant/10"
          >
            <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6 ${service.hoverColor} group-hover:text-white transition-all duration-300`}>
              <span className="material-symbols-outlined text-3xl">{service.icon}</span>
            </div>
            <h3 className="text-xl font-bold font-headline mb-3">{service.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              {service.description}
            </p>
            <a className="text-primary font-bold text-sm flex items-center gap-1 group/link" href="#">
              Learn More 
              <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">arrow_forward</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
