import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiJavascript, SiHtml5, SiCss, SiTailwindcss, SiFirebase, SiGit, SiGithub, SiVite, SiVercel, SiNetlify } from "react-icons/si";

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: <SiReact className="text-[#61DAFB] drop-shadow-[0_0_8px_rgba(97,218,251,0.5)]" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E] bg-black drop-shadow-[0_0_8px_rgba(247,223,30,0.5)]" /> },
      { name: 'HTML5', icon: <SiHtml5 className="text-[#E34F26] drop-shadow-[0_0_8px_rgba(227,79,38,0.5)]" /> },
      { name: 'CSS3', icon: <SiCss className="text-[#1572B6] drop-shadow-[0_0_8px_rgba(21,114,182,0.5)]" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4] drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" /> }
    ]
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Firebase Auth', icon: <SiFirebase className="text-[#FFCA28] drop-shadow-[0_0_8px_rgba(255,202,40,0.5)]" /> },
      { name: 'Cloud Firestore', icon: <SiFirebase className="text-[#FFCA28] drop-shadow-[0_0_8px_rgba(255,202,40,0.5)]" /> }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <SiGit className="text-[#F05032] drop-shadow-[0_0_8px_rgba(240,80,50,0.5)]" /> },
      { name: 'GitHub', icon: <SiGithub className="text-black dark:text-white drop-shadow-md" /> },
      { name: 'Vite', icon: <SiVite className="text-[#646CFF] drop-shadow-[0_0_8px_rgba(100,108,255,0.5)]" /> },
      { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white drop-shadow-md" /> },
      { name: 'Netlify', icon: <SiNetlify className="text-[#00C7B7] drop-shadow-[0_0_8px_rgba(0,199,183,0.5)]" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-center mb-16">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700/50 pb-4 relative z-10">
                {category.title}
              </h3>
              <ul className="space-y-5 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-slate-700 dark:text-slate-300 font-semibold text-lg group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                    <div className="text-2xl mr-4 p-2 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/30 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
