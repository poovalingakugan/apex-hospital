import { motion } from 'framer-motion';
import doctorImg from '../assets/doctor.jpg';

const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '15+', color: 'text-primary' },
    { label: 'Happy Patients', value: '10k+', color: 'text-secondary' },
    { label: 'Emergency Care', value: '24/7', color: 'text-primary' },
    { label: 'Success Rate', value: '99%', color: 'text-secondary' },
  ];

  return (
    <section className="bg-transparent py-24" id="about">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1 relative"
          >
            <div className="aspect-[4/5] bg-surface-container-highest rounded-lg overflow-hidden relative shadow-xl">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                src={doctorImg} 
                alt="Dr. Manickavasan" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 signature-gradient text-white">
                <div className="text-2xl font-bold font-headline">Dr. Manickavasan</div>
                <div className="opacity-90 font-medium">MBBS, Senior Clinical Consultant</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 space-y-6"
          >
            <div className="text-primary font-bold tracking-widest text-sm uppercase">About the Physician</div>
            <h2 className="text-4xl font-extrabold font-headline leading-tight">Decades of Dedicated Medical Service</h2>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              Dr. Manickavasan has been a cornerstone of the Moolakaraipatti community, providing expert medical care for over 15 years. His approach integrates diagnostic precision with a holistic understanding of patient well-being.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white rounded-lg shadow-sm border border-outline-variant/5"
                >
                  <div className={`text-3xl font-extrabold ${stat.color} font-headline`}>{stat.value}</div>
                  <div className="text-sm text-on-surface-variant font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
