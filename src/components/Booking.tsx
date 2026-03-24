import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import diagnosticImg from '../assets/diagnostic_equipment.jpg';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    service: '',
    timeSlot: ''
  });
  const [date, setDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [phoneError, setPhoneError] = useState('');
  const datePickerRef = useRef<HTMLInputElement>(null);

  const today = new Date().toISOString().split('T')[0];
  const currentTime = new Date();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'phoneNumber') {
      // Clean the number for validation: remove spaces, dashes, parentheses
      const cleaned = value.replace(/[\s\-\(\)]/g, '');
      // Regex for either 10 digits OR +91 followed by 10 digits
      const phoneRegex = /^(\+91)?[0-9]{10}$/;
      
      if (value && !phoneRegex.test(cleaned)) {
        setPhoneError('Please enter a valid 10-digit phone number');
      } else {
        setPhoneError('');
      }
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const isDeleting = input.length < date.length;
    let value = input.replace(/\D/g, '');
    
    if (value.length > 8) value = value.slice(0, 8);
    
    let formattedValue = '';
    if (value.length > 0) {
      formattedValue = value.slice(0, 2);
      if (value.length > 2) {
        formattedValue += ' / ' + value.slice(2, 4);
        if (value.length > 4) {
          formattedValue += ' / ' + value.slice(4, 8);
        } else if (value.length === 4 && !isDeleting) {
          formattedValue += ' / ';
        }
      } else if (value.length === 2 && !isDeleting) {
        formattedValue += ' / ';
      }
    }
    setDate(formattedValue);

    // Validate if complete
    if (formattedValue.length === 14) { // "DD / MM / YYYY"
      const [d, m, y] = formattedValue.split(' / ');
      const inputDate = new Date(`${y}-${m}-${d}`);
      const todayDate = new Date(today);
      if (inputDate < todayDate) {
        setDate('');
        alert('Please select a future date');
      }
    }
  };

  const handlePickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value; // YYYY-MM-DD
    if (val) {
      const [y, m, d] = val.split('-');
      setDate(`${d} / ${m} / ${y}`);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const templateParams = {
      full_name: formData.fullName,
      phone_number: formData.phoneNumber,
      service: formData.service,
      date: date,
      time: formData.timeSlot,
    };

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing in .env');
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSubmitStatus('success');
      setFormData({ fullName: '', phoneNumber: '', service: '', timeSlot: '' });
      setDate('');
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto" id="booking">
      <div className="bg-white/40 backdrop-blur-xl rounded-3xl overflow-hidden grid md:grid-cols-2 shadow-2xl shadow-blue-900/10 border border-white/20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-12 md:p-16 space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold font-headline text-on-background">Schedule Your Visit</h2>
            <p className="text-on-surface-variant leading-relaxed">
              Skip the waiting room. Book your appointment online and receive a priority time slot for your consultation.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-outline uppercase tracking-wider px-1">Full Name</label>
                <input 
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/40 transition-all text-on-surface placeholder:text-outline/50" 
                  placeholder="John Doe" 
                  type="text" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-outline uppercase tracking-wider px-1">Phone Number</label>
                <input 
                  required
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/40 transition-all text-on-surface placeholder:text-outline/50" 
                  placeholder="+91 98765 43210" 
                  type="tel" 
                />
                {phoneError && <p className="text-[10px] text-red-500 font-bold px-1 mt-1">{phoneError}</p>}
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-outline uppercase tracking-wider px-1">Service Needed</label>
              <div className="relative">
                <select 
                  required
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/40 transition-all text-on-surface cursor-pointer appearance-none"
                >
                  <option value="">Select Service</option>
                  <option>Pediatrics</option>
                  <option>General Medicine</option>
                  <option>Wellness Checkup</option>
                  <option>Diagnostic Lab</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-xl">
                  expand_more
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-outline uppercase tracking-wider px-1">Preferred Date</label>
                <div className="relative">
                  <input 
                    required
                    className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/40 transition-all text-on-surface" 
                    type="text" 
                    placeholder="DD / MM / YYYY"
                    value={date}
                    onChange={handleDateChange}
                  />
                  <span 
                    className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary cursor-pointer hover:scale-110 transition-transform text-xl z-10"
                    onClick={() => datePickerRef.current?.showPicker()}
                  >
                    calendar_today
                  </span>
                  <input 
                    ref={datePickerRef}
                    type="date"
                    min={today}
                    className="absolute inset-0 opacity-0 pointer-events-none"
                    onChange={handlePickerChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-outline uppercase tracking-wider px-1">Preferred Time</label>
                <div className="relative">
                  <select 
                    required
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/40 transition-all text-on-surface appearance-none cursor-pointer"
                  >
                    <option value="">Select Time Slot</option>
                    {[
                      { label: "09:00 AM - 10:00 AM", start: 9 },
                      { label: "10:00 AM - 11:00 AM", start: 10 },
                      { label: "11:00 AM - 12:00 PM", start: 11 },
                      { label: "12:00 PM - 01:00 PM", start: 12 },
                      { label: "01:00 PM - 02:00 PM", start: 13 },
                      { label: "02:00 PM - 03:00 PM", start: 14 },
                      { label: "03:00 PM - 04:00 PM", start: 15 },
                      { label: "04:00 PM - 05:00 PM", start: 16 },
                      { label: "05:00 PM - 06:00 PM", start: 17 },
                      { label: "06:00 PM - 07:00 PM", start: 18 },
                      { label: "07:00 PM - 08:00 PM", start: 19 },
                    ].map((slot) => {
                      const isToday = date === `${currentTime.getDate().toString().padStart(2, '0')} / ${(currentTime.getMonth() + 1).toString().padStart(2, '0')} / ${currentTime.getFullYear()}`;
                      
                      const slotStartTime = new Date(currentTime);
                      slotStartTime.setHours(slot.start, 0, 0, 0);
                      const cutoffTime = new Date(slotStartTime.getTime() - 15 * 60 * 1000);

                      const isPast = isToday && currentTime >= cutoffTime;
                      if (isPast) return null;
                      return (
                        <option key={slot.label} value={slot.label}>
                          {slot.label}
                        </option>
                      );
                    })}
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-xl">
                    expand_more
                  </span>
                </div>
              </div>
            </div>

            <motion.button 
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting || !!phoneError || !formData.phoneNumber || !date || !formData.timeSlot}
              className={`w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-lg transition-all duration-300 ${isSubmitting || !!phoneError || !formData.phoneNumber || !date || !formData.timeSlot ? 'opacity-50 grayscale cursor-not-allowed shadow-none' : 'hover:from-blue-500 hover:to-blue-700'}`}
              type="submit"
            >
              <div className="flex items-center justify-center gap-2 px-2">
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span className="text-sm md:text-base">Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[22px] md:text-2xl shrink-0">event_available</span>
                    <span className="text-sm md:text-lg">Confirm Appointment</span>
                  </>
                )}
              </div>
            </motion.button>
            
            {submitStatus === 'success' && (
              <p className="text-center text-green-600 font-bold mt-3">
                Appointment request sent successfully!
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-center text-red-600 font-bold mt-3">
                Failed to send request. Please try again or call us directly.
              </p>
            )}

            <p className="text-center text-xs text-on-surface-variant font-bold mt-3">
              *We will confirm your slot via call within 15 minutes.
            </p>
          </form>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative min-h-[400px] hidden md:block"
        >
          <img 
            className="absolute inset-0 w-full h-full object-cover" 
            src={diagnosticImg} 
            alt="Modern clinic facility" 
          />
          <div className="absolute inset-0 bg-primary/20 backdrop-overlay"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
