import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-10 md:p-16 rounded-3xl"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8">About Me</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            I’m a Frontend Developer who enjoys turning ideas into clean and interactive web experiences. I have built projects ranging from job application management platforms to movie discovery and tourism websites using <span className="font-semibold text-brand-600 dark:text-brand-400">React.js, JavaScript, Tailwind CSS, and Firebase</span>. I’m currently looking for opportunities where I can continue learning and contribute to real-world products.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
