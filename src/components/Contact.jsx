import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <footer id="contact" className="relative z-10 mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-100 dark:to-[#080d18] pointer-events-none -z-10"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-12 border-t border-slate-200/50 dark:border-slate-800/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">Let's Connect</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm actively seeking Frontend Developer and React Developer opportunities. Feel free to reach out for collaboration, opportunities, or just a quick chat.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <a
              href="mailto:ujjwallp22@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-2xl text-white bg-gradient-to-r from-brand-500 to-blue-600 hover:from-brand-400 hover:to-blue-500 shadow-xl shadow-brand-500/20 hover:shadow-brand-500/40 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              <Mail className="mr-3 h-6 w-6" />
              Email Me
            </a>
            <a
              href="/Ujjwal_Prakash_Resume.pdf"
              target="_blank"
              className="glass-panel inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-2xl text-slate-800 dark:text-slate-100 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              <Download className="mr-3 h-6 w-6" />
              Download Resume
            </a>
          </div>

          <div className="flex justify-center gap-10 border-t border-slate-200/50 dark:border-slate-800/50 pt-12">
            <a href="https://github.com/Ujjwallp" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:scale-125 transition-all duration-300">
              <span className="sr-only">GitHub</span>
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/saujjwal/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:scale-125 transition-all duration-300">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin size={28} />
            </a>
          </div>
          <div className="mt-12 text-sm font-medium text-slate-500 dark:text-slate-400 flex flex-col items-center gap-2">
            <span>Built with React, Tailwind CSS & Vite</span>
            <span>&copy; {new Date().getFullYear()} Ujjwal Prakash</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;
