import { motion } from 'motion/react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const navItems = [
    { id: 'home', label: 'Accueil', num: '01' },
    { id: 'about', label: 'Agence', num: '02' },
    { id: 'contact', label: 'Contact', num: '03' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-16 md:w-20 h-16 md:h-20 flex items-center justify-center z-[1001] bg-[#080808]">
        <motion.button 
          onClick={() => setActivePage('home')}
          whileHover={{ rotate: 90 }}
          className="w-6 h-6 md:w-8 md:h-8 border-2 border-white flex items-center justify-center rotate-45"
        >
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white"></div>
        </motion.button>
      </div>

      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-0 left-16 md:left-20 right-0 h-16 md:h-20 flex items-center justify-between px-6 md:px-10 z-[1000] border-b border-line bg-bg/80 backdrop-blur-sm"
      >
        <div className="font-mono text-xs tracking-[0.3em] font-medium hidden md:block">NOVARIS STUDIO</div>
        
        <nav className="flex gap-6 md:gap-12" aria-label="Navigation principale">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              aria-label={`Accéder à la page ${item.label}`}
              className={`text-[9px] md:text-[10px] tracking-widest uppercase transition-all relative pb-1 ${
                activePage === item.id 
                  ? 'opacity-100 font-bold border-b border-white' 
                  : 'opacity-40 hover:opacity-100'
              }`}
            >
              <span className="mono mr-1 md:mr-2">{item.num}</span>
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="font-mono text-[10px] text-muted uppercase hidden lg:block">Annecy / 45.8992° N</div>
      </motion.header>

      <aside className="fixed left-0 top-16 md:top-20 bottom-16 md:bottom-20 w-16 md:w-20 hidden md:flex flex-col items-center justify-center z-[1000] border-r border-line bg-bg">
        <div className="font-mono text-[10px] rotate-180 text-muted" style={{ writingMode: 'vertical-rl' }}>
          SCROLL TO DISCOVER — 2026 EDITION
        </div>
      </aside>

      <footer className="fixed bottom-0 left-0 md:left-20 right-0 h-16 md:h-20 border-t border-line flex items-center px-6 md:px-10 justify-between z-[1000] bg-bg/80 backdrop-blur-sm">
        <div className="flex items-center gap-4 md:gap-10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-mono text-[9px] md:text-[10px] uppercase">Online</span>
          </div>
          <div className="h-4 w-[1px] bg-line-light hidden md:block"></div>
          <div className="font-mono text-[10px] uppercase tracking-tighter hidden md:block text-muted">Build: v1.0.4-stable</div>
        </div>
        
        <div className="flex gap-4 md:gap-8 items-center">
          <div className="font-mono text-[10px] text-muted hidden sm:block uppercase">CONTACT :</div>
          <button 
            onClick={() => setActivePage('contact')}
            className="group flex items-center gap-2 md:gap-4 bg-white text-black px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-[10px] md:text-xs transition-all hover:pr-8"
          >
            <span className="uppercase">Contact</span>
            <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="black"/>
            </svg>
          </button>
        </div>
      </footer>
    </>
  );
}
