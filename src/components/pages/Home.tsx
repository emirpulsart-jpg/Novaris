import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Code, Cpu, Globe, Rocket, Zap } from 'lucide-react';
import { useRef } from 'react';

interface HomeProps {
  setActivePage: (page: string) => void;
}

export default function Home({ setActivePage }: HomeProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  const services = [
    {
      title: "Développement Sur Mesure",
      desc: "Des solutions logicielles robustes et évolutives pour conquérir votre marché.",
      icon: <Code className="w-6 h-6 text-accent" />,
      tag: "TECH"
    },
    {
      title: "Design Expérientiel",
      desc: "Interfaces captivantes conçues pour maximiser l'engagement utilisateur.",
      icon: <Zap className="w-6 h-6 text-accent" />,
      tag: "UX/UI"
    },
    {
      title: "Intelligence Artificielle",
      desc: "Intégration d'agents intelligents et automatisation avancée.",
      icon: <Cpu className="w-6 h-6 text-accent" />,
      tag: "AI"
    },
    {
      title: "Stratégie Digitale",
      desc: "Accompagnement 360° pour transformer votre vision en succès concret.",
      icon: <Globe className="w-6 h-6 text-accent" />,
      tag: "GROWTH"
    }
  ];

  return (
    <div ref={containerRef} className="w-full relative z-10 px-10 md:px-20 lg:px-40 min-h-screen flex flex-col justify-center">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center pt-32 md:pt-20">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="flex flex-wrap gap-2 md:gap-4 mb-6">
            <span className="font-mono text-[8px] md:text-[10px] px-2 py-1 border border-line-light text-muted uppercase">Statut : Opérationnel // Disponibilité 2026</span>
            <span className="font-mono text-[8px] md:text-[10px] px-2 py-1 border border-line-light text-muted uppercase">Tech / Luxury / Code</span>
          </div>
          
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hero-title mb-8 md:mb-12"
          >
            <span className="block italic font-light tracking-tight text-2xl md:text-4xl mb-4 text-muted">Novaris Studio // Agence Web & Design</span>
            <span className="block">TRANSFORMER</span>
            <span className="block text-outline">L'IMAGINAIRE</span>
            <span className="block font-black uppercase">EN EXPÉRIENCE DIGITALE.</span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-5xl">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-4 md:-left-10 top-2 font-mono text-[8px] md:text-[10px] text-muted">[MISSION]</div>
              <p className="text-lg md:text-2xl font-light text-zinc-400 leading-relaxed pl-4 md:pl-0">
                Nous ne créons pas seulement des sites web. Nous architecturons des expériences numériques de prestige qui redéfinissent les limites du possible technique.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col justify-end gap-6 md:gap-10"
            >
              <div className="h-[1px] w-full bg-line-light"></div>
              <div className="flex justify-between items-end">
                <div className="font-mono text-[8px] md:text-[10px] uppercase text-muted">Heures de R&D<br/><span className="text-white text-2xl md:text-3xl font-bold">1500+</span></div>
                <div className="font-mono text-[8px] md:text-[10px] uppercase text-muted text-right">Lignes de code<br/><span className="text-white text-2xl md:text-3xl font-bold">8.5k+</span></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 border-t border-line">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-line">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 border-r border-b border-line group relative overflow-hidden"
            >
              <div className="absolute top-4 left-4 font-mono text-[8px] md:text-[10px] text-muted opacity-40">0{index + 1}</div>
              <div className="w-10 h-10 md:w-12 md:h-12 border border-line-light flex items-center justify-center mb-8 md:mb-10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                {item.icon}
              </div>
              <span className="font-mono text-[8px] md:text-[10px] text-muted mb-4 block tracking-widest">[{item.tag}]</span>
              <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6 uppercase leading-tight text-balance">{item.title}</h2>
              <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-light">{item.desc}</p>
              
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.02] transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-16 md:py-32 bg-[#080808]/50 border-t border-line relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-40 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="aspect-[4/3] border border-line p-1 flex items-center justify-center group overflow-hidden relative">
                <div className="absolute inset-0 dot-matrix opacity-20" />
                <motion.div 
                   className="w-48 h-48 md:w-64 md:h-64 border border-white/20 rotate-45 flex items-center justify-center"
                   animate={{ rotate: 405 }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                   <div className="w-24 h-24 md:w-32 md:h-32 border border-white/40 rotate-45" />
                </motion.div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 text-center z-10">
                  <div className="font-mono text-[8px] md:text-[10px] text-muted mb-4 uppercase tracking-[0.5em]">[ENGINE STATUS: STABLE]</div>
                  <Cpu className="w-10 h-10 md:w-12 md:h-12 text-white mb-4 md:mb-6" />
                  <h3 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tighter">Performance Brutale</h3>
                  <p className="text-xs md:text-sm text-zinc-500 font-light max-w-xs px-4">
                    On optimise chaque milliseconde. Votre site ne se contente pas de s'afficher, il s'exécute.
                  </p>
                </div>
             </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="font-mono text-[8px] md:text-[10px] text-muted mb-4 md:mb-6 uppercase tracking-widest">[TECHNOLOGIES]</div>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-8 md:mb-12 uppercase leading-[0.9] md:leading-[0.85]">
              LE CODE EST NOTRE <br /><span className="text-outline">PRINCIPE.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-6 md:gap-y-8">
              {[
                "Architecture Next-Gen",
                "Animations 120fps fluides",
                "Sécurité impénétrable",
                "SEO agressif"
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-[10px] md:text-xs font-mono text-muted uppercase border-b border-line pb-4"
                >
                  <span className="text-white">0{i+1}</span>
                  {text}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 md:py-40 flex flex-col items-center justify-center text-center px-6 border-t border-line">
        <div className="font-mono text-[10px] md:text-xs text-muted mb-6 md:mb-8 tracking-[0.4em] uppercase">[INITIER LE CONTACT]</div>
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-black mb-12 md:mb-16 tracking-tighter uppercase leading-none max-w-4xl">
          PRÊT À <span className="text-outline">DOMINER</span> VOTRE SECTEUR ?
        </h2>
        <motion.button 
          onClick={() => setActivePage('contact')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-10 md:px-16 py-6 md:py-8 border border-white overflow-hidden"
        >
          <span className="relative z-10 font-black text-lg md:text-xl tracking-widest uppercase">PARLONS-EN</span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-0" />
          <span className="absolute inset-0 flex items-center justify-center text-black font-black text-lg md:text-xl tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">PARLONS-EN</span>
        </motion.button>
      </section>
    </div>
  );
}
