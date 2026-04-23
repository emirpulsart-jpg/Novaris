import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-16 md:pt-32 pb-16 px-10 md:px-20 lg:px-40 max-w-7xl relative z-10 mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="font-mono text-[10px] md:text-xs text-muted mb-4 tracking-[0.5em] uppercase">[L'AGENCE]</div>
        <h1 className="hero-title mb-12 md:mb-20 uppercase">
          EXPERTISE <br />
          <span className="text-outline">NOVARIS STUDIO.</span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl font-light text-zinc-400 leading-relaxed mb-12">
            Novaris n'est pas une agence classique. Nous sommes un collectif de techniciens, de designers et de visionnaires unis par une seule obsession : <span className="text-white font-bold">la perfection digitale par la géométrie.</span>
          </p>
          <div className="h-[1px] w-full bg-line-light mb-12" />
          <p className="text-sm md:text-base text-zinc-500 leading-relaxed font-light">
            Lancé en 2024, Novaris Studio naît d'une volonté de rupture : injecter une rigueur mathématique dans le chaos du web. Nous ne construisons pas de simples interfaces ; nous forgeons des outils de puissance digitale via une ingénierie d'élite et une exécution sans compromis.
          </p>
        </motion.div>

        <div className="space-y-12">
          {[
            {
              year: "2024",
              title: "La Génèse",
              desc: "Naissance d'une vision : remettre le code et la structure géométrique au centre."
            },
            {
              year: "2.4k",
              title: "Cafés Consommés",
              desc: "Le carburant essentiel pour maintenir une précision géométrique constante."
            },
            {
              year: "4",
              title: "Experts Passionnés",
              desc: "Un quatuor soudé de techniciens qui ne dort (presque) jamais pour vos succès."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex gap-6 md:gap-8 group border-l border-line pl-6 md:pl-8 relative"
            >
              <div className="absolute left-0 top-0 w-[1px] h-0 group-hover:h-full bg-white transition-all duration-700" />
              <div className="w-24 md:w-32 shrink-0 text-4xl md:text-5xl font-black text-white group-hover:text-outline transition-all duration-500">{item.year}</div>
              <div>
                <h3 className="text-lg md:text-xl font-black mb-2 tracking-tighter uppercase">{item.title}</h3>
                <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="mt-32 md:mt-40 border-t border-line pt-16">
        <div className="font-mono text-[10px] text-muted mb-12 tracking-widest uppercase">[NOTRE ADN]</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-line">
          {[
            { label: "RADICALISME", text: "Nous n'acceptons aucune concession sur la performance et le design." },
            { label: "TRANSPARENCE", text: "Processus ouverts, communication directe, pas de langue de bois." },
            { label: "INNOVATION", text: "Toujours à la pointe, nous beta-testons demain aujourd'hui." }
          ].map((dna, i) => (
            <div key={i} className="p-10 border-r border-b border-line group relative overflow-hidden">
              <div className="text-[10px] font-mono text-muted mb-6 tracking-[0.3em] uppercase">0{i+1} // {dna.label}</div>
              <p className="text-lg font-light text-zinc-400 leading-relaxed">{dna.text}</p>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.02] transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
