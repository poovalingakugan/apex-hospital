import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: 'location_on',
      title: 'Moolakaraipatti',
      details: 'Main Bazaar Road, Near Post Office,\nMoolakaraipatti, Tamil Nadu 627354',
      color: 'bg-primary/10',
      iconColor: 'text-primary'
    },
    {
      icon: 'schedule',
      title: 'Clinic Hours',
      details: 'Monday – Saturday: 9:00 AM – 8:00 PM\nSunday: Emergency Only',
      color: 'bg-secondary/10',
      iconColor: 'text-secondary'
    },
    {
      icon: 'phone_in_talk',
      title: 'Direct Contact',
      details: '[Phone Number]\ninfo@manickavasanhospital.com',
      color: 'bg-primary/10',
      iconColor: 'text-primary'
    }
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-stretch" id="contact">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h2 className="text-4xl font-extrabold font-headline">Visit Our Clinic</h2>
          <p className="text-on-surface-variant max-w-md">
            We are conveniently located in the heart of Moolakaraipatti, providing accessible healthcare to everyone.
          </p>
        </div>

        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 group"
            >
              <div className={`${info.color} p-4 rounded-2xl h-fit transition-transform group-hover:scale-110 duration-300`}>
                <span className={`material-symbols-outlined ${info.iconColor} text-2xl`}>{info.icon}</span>
              </div>
              <div>
                <div className="font-bold text-lg mb-1">{info.title}</div>
                <p className="text-on-surface-variant text-sm whitespace-pre-line leading-relaxed">{info.details}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-secondary/20 transition-all"
          href="#"
        >
          <span className="material-symbols-outlined">call</span>
          Call for Immediate Assistance
        </motion.a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-surface-container-high rounded-3xl overflow-hidden min-h-[500px] h-full shadow-2xl relative group border border-outline-variant/10"
      >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.522314048205!2d77.7681775!3d8.5456673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0471232b52c4db%3A0x9009b5b6f53cb577!2sDr.%20Manickavasan.%20MBBS!5e1!3m2!1sen!2sin!4v1774021846172!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full transition-all duration-500"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default Contact;
