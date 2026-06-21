import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { BiSolidMoviePlay } from 'react-icons/bi';
import { SiReact, SiVite, SiTailwindcss, SiFirebase, SiFramer, SiThemoviedatabase, SiLeaflet } from 'react-icons/si';

const getTechIcon = (tech) => {
  switch (tech) {
    case 'React': return <SiReact className="text-[#61DAFB]" size={14} />;
    case 'Vite': return <SiVite className="text-[#646CFF]" size={14} />;
    case 'Tailwind CSS': return <SiTailwindcss className="text-[#06B6D4]" size={14} />;
    case 'Firebase': return <SiFirebase className="text-[#FFCA28]" size={14} />;
    case 'Framer Motion': return <SiFramer className="dark:text-white text-black" size={14} />;
    case 'TMDB API': return <SiThemoviedatabase className="text-[#01B4E4]" size={14} />;
    case 'React Leaflet': return <SiLeaflet className="text-[#199900]" size={14} />;
    default: return null;
  }
};

const projects = [
  {
    title: 'JobPilot',
    icon: <img src="/jobpilot-icon.png" alt="JobPilot Logo" className="w-12 h-12 mr-4 object-contain" />,
    description: 'A job application tracking platform that helps users manage applications, interview stages, and job search progress through a Kanban-style dashboard.',
    image: '/jobpilot.png',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Firebase'],
    live: 'https://job-pilot-web-coral.vercel.app/',
    github: 'https://github.com/Ujjwallp/JobPilot_Web'
  },
  {
    title: 'NextWatch',
    icon: <div className="w-8 h-8 mr-4 bg-[#E50914] text-white rounded-lg flex items-center justify-center shadow-md"><BiSolidMoviePlay size={20} /></div>,
    description: 'A movie discovery platform to explore trending, popular, and top-rated content. Features a custom debounce hook for real-time search and Context API for watchlists.',
    image: '/nextwatch.png',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'TMDB API'],
    live: 'https://next-watch-web.vercel.app/',
    github: 'https://github.com/Ujjwallp/NextWatch_web'
  },
  {
    title: 'Sitamarhi Hometown',
    icon: (
      <div className="w-8 h-8 mr-4 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
        <img src="/sitamarhi-logo.png" alt="Sitamarhi Hometown Logo" className="w-[130%] h-[130%] max-w-none object-cover" />
      </div>
    ),
    description: 'A tourism and heritage portal showcasing Sitamarhi’s history, culture, and attractions with interactive maps and smooth navigation.',
    image: '/sitamarhi.png',
    tech: ['React', 'Tailwind CSS', 'React Leaflet', 'Framer Motion'],
    live: 'https://sitamarhi-hometown-web.vercel.app/',
    github: 'https://github.com/Ujjwallp/Sitamarhi_hometown_web'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-center mb-16">Featured Projects</h2>
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="glass-panel overflow-hidden rounded-[2rem] lg:flex items-stretch group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="lg:w-1/2 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-700/50 min-h-[300px]">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-10 lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    {project.icon}
                    {project.title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2.5 mb-10">
                    {project.tech.map((t, i) => (
                      <span key={i} className="glass-badge">
                        {getTechIcon(t)}
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-5 mt-auto">
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-bold text-white bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 px-6 py-3 rounded-xl shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Live Demo
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="glass-panel inline-flex items-center text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 px-6 py-3 rounded-xl hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <FaGithub size={18} className="mr-2" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
