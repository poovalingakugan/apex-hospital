import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white/40 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1 space-y-6">
          <span className="text-xl font-black text-slate-900 dark:text-white block font-headline tracking-tighter">
            Dr. Manickavasan <br /> Hospital
          </span>
          <p className="font-body text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Providing elite clinical care and surgical excellence to the community of Moolakaraipatti and beyond since 2005.
          </p>
        </div>

        <div>
          <h4 className="font-headline font-bold mb-8 text-on-background uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="space-y-4 font-body text-sm text-slate-500 dark:text-slate-400">
            <li><a className="hover:text-primary hover:translate-x-1 transition-all inline-block" href="#home">Home</a></li>
            <li><a className="hover:text-primary hover:translate-x-1 transition-all inline-block" href="#about">About Doctor</a></li>
            <li><a className="hover:text-primary hover:translate-x-1 transition-all inline-block" href="#services">Our Services</a></li>
            <li><a className="hover:text-primary hover:translate-x-1 transition-all inline-block" href="#booking">Bookings</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline font-bold mb-8 text-on-background uppercase tracking-widest text-xs">Medical Services</h4>
          <ul className="space-y-4 font-body text-sm text-slate-500 dark:text-slate-400">
            <li className="cursor-default">Pediatrics</li>
            <li className="cursor-default">General Medicine</li>
            <li className="cursor-default">Wellness Clinic</li>
            <li className="cursor-default">Diagnostic Lab</li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline font-bold mb-8 text-on-background uppercase tracking-widest text-xs">Health Newsletter</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">
            Subscribe for monthly health tips and hospital updates.
          </p>
          <div className="flex gap-2">
            <input 
              className="w-full bg-white dark:bg-slate-900 border border-outline-variant/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all" 
              placeholder="Email address" 
              type="email" 
            />
            <button className="bg-primary text-white p-3 rounded-xl hover:bg-primary-container transition-colors shadow-lg shadow-primary/10">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-outline-variant/5 px-12 py-10 max-w-7xl mx-auto flex justify-center items-center">
        <p className="font-body text-xs text-slate-400 dark:text-slate-500 font-medium text-center">
          © {new Date().getFullYear()} Dr. Manickavasan Hospital. All rights reserved. Registered in Moolakaraipatti, Tamil Nadu.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
