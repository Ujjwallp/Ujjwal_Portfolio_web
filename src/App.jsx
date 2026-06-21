import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen font-sans selection:text-white">
      {/* Developer Grid Background */}
      <div className="fixed inset-0 w-full h-full z-[-1] pointer-events-none bg-developer-grid"></div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
