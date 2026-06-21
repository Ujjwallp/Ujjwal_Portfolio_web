import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 drop-shadow-sm">
          Hi, I'm <span className="text-gradient drop-shadow-md">Ujjwal Prakash</span>
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Frontend Developer focused on building responsive and user-friendly web applications using React.js, JavaScript, Tailwind CSS, and Firebase.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-4 font-bold rounded-2xl text-white bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-1 transition-all duration-300"
          >
            View Projects
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="/Ujjwal_Prakash_Resume.pdf"
            target="_blank"
            className="glass-panel inline-flex items-center justify-center px-8 py-4 font-bold rounded-2xl text-slate-800 dark:text-slate-100 hover:-translate-y-1 transition-all duration-300"
          >
            Download Resume
            <Download className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </a>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex justify-center gap-8 mt-16"
        >
          <a href="https://github.com/Ujjwallp" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:scale-110 hover:-translate-y-1 transition-all duration-300">
            <span className="sr-only">GitHub</span>
            <FaGithub size={32} />
          </a>
          <a href="https://www.linkedin.com/in/saujjwal/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:scale-110 hover:-translate-y-1 transition-all duration-300">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin size={32} />
          </a>
          <a href="mailto:ujjwallp22@gmail.com" className="text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:scale-110 hover:-translate-y-1 transition-all duration-300">
            <span className="sr-only">Email</span>
            <Mail size={32} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
