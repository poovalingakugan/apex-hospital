import { motion } from 'framer-motion';
import diagnosticImg from '../assets/diagnostic_equipment.jpg';
import labImg from '../assets/lab.jpg';

const Diagnostics: React.FC = () => {
  const diagnosticServices = [
    {
      title: 'Digital X-Ray & Radiology',
      description: 'High-precision imaging for accurate diagnosis, with instant digital results and specialist interpretation.',
      icon: 'radiology',
      image: diagnosticImg,
      features: ['Digital Imaging', 'Fracture Assessment', 'Lung Screenings', 'Low Radiation'],
    },
    {
      title: 'Laboratory Services',
      description: 'Comprehensive blood tests and pathological exams powered by advanced automated equipment.',
      icon: 'biotech',
      image: labImg,
      features: ['Blood Analysis', 'Thyroid Tests', 'Diabetes Screening', 'Rapid Results'],
    }
  ];

  return (
    <section className="py-24 px-8 bg-transparent" id="diagnostics">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-2xl"
          >
            <div className="text-secondary font-bold tracking-widest text-sm uppercase">Advanced Capability</div>
            <h2 className="text-4xl font-extrabold font-headline">Diagnostic Excellence</h2>
            <p className="text-on-surface-variant">
              We bring urban precision to our community with state-of-the-art diagnostic facilities equipment and expert interpretation.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {diagnosticServices.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-outline-variant/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 backdrop-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-6 left-6 signature-gradient text-white p-3 rounded-2xl shadow-lg">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>{service.icon}</span>
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold font-headline mb-3 text-on-surface">{service.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                      <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                      {feature}
                    </div>
                  ))}
                </div>

                <motion.button 
                  whileHover={{ x: 5 }}
                  className="text-primary font-bold text-sm flex items-center gap-2 pt-2"
                >
                  View Test Preparation 
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diagnostics;
