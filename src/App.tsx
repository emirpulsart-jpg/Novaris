/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate high-end loading experience
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Home setActivePage={setActivePage} />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      default: return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-bg text-white selection:bg-accent selection:text-bg overflow-x-hidden dot-matrix relative font-sans">
      <CustomCursor />
      
      {/* Background Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="grid-line v-line left-6 md:left-20 top-0 opacity-100" />
        <div className="grid-line v-line left-1/2 top-0 opacity-30" />
        <div className="grid-line h-line top-16 md:top-20 left-0 opacity-100" />
        <div className="grid-line h-line bottom-16 md:bottom-20 left-0 opacity-100" />
      </div>

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-4xl font-display font-medium tracking-tighter"
            >
              NOVARIS<span className="text-accent"> STUDIO</span>
            </motion.div>
            <div className="w-48 h-[1px] bg-white/10 mt-8 relative overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-accent"
              />
            </div>
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 0.4 }}
               className="mt-6 text-[10px] font-mono tracking-widest text-zinc-500 uppercase"
            >
              INITIALISATION DU CODE
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.section
            key={activePage}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderPage()}
          </motion.section>
        </AnimatePresence>
      </main>

      {/* Global Background Noise/Grain Effect */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Footer Branding */}
      <footer className="py-12 px-10 md:px-20 lg:px-40 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-[10px] font-mono uppercase mb-16 md:mb-20">
        <div className="text-center md:text-left tracking-normal sm:tracking-widest order-2 md:order-1">© 2026 NOVARIS STUDIO. TOUS DROITS RÉSERVÉS.</div>
        <div className="flex gap-8 tracking-widest order-1 md:order-2">
          <button onClick={() => setActivePage('home')} className="hover:text-white transition-colors">Accueil</button>
          <button onClick={() => setActivePage('about')} className="hover:text-white transition-colors">Agence</button>
          <button onClick={() => setActivePage('contact')} className="hover:text-white transition-colors">Contact</button>
        </div>
        <div className="hidden sm:block tracking-widest order-3">DESIGNED WITH NOVARIS ENGINE v2.4</div>
      </footer>
    </div>
  );
}
