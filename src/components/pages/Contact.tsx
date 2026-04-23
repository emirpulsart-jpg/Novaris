import { motion } from 'motion/react';
import { Mail, MessageSquare, Phone, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://formspree.io/f/xvzdvglz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        if (data.errors) {
          setError(data.errors.map((error: any) => error.message).join(', '));
        } else {
          setError("Une erreur est survenue lors de l'envoi.");
        }
      }
    } catch (err) {
      setError("Impossible de contacter le serveur. Vérifiez votre connexion.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16 md:pt-32 pb-16 px-10 md:px-20 lg:px-40 max-w-7xl relative z-10 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title mb-8 md:mb-12 uppercase"
          >
            CONTACTER <br />
            <span className="text-outline">NOTRE AGENCE.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-500 font-light leading-relaxed mb-12 md:link-16 max-w-md"
          >
            Vous avez un projet hors normes ? Notre équipe est prête à relever le défi.
          </motion.p>

          <div className="space-y-8 md:space-y-12 mt-8 md:mt-12">
            {[
              { icon: <Mail className="w-6 h-6 md:w-5 md:h-5" />, label: "EMAIL", value: "Novaris.studio@yahoo.com" },
              { icon: <Phone className="w-6 h-6 md:w-5 md:h-5" />, label: "TÉLÉPHONE", value: "+33 458630047" },
              { icon: <MessageSquare className="w-6 h-6 md:w-5 md:h-5" />, label: "SOCIAL", value: "@novaris_studio" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 md:gap-8 group cursor-pointer border-b border-line pb-6 md:pb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 border border-line-light flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[8px] md:text-[10px] font-mono text-muted mb-1 md:mb-2 tracking-[0.3em] uppercase">[{item.label}]</div>
                  <div className="text-lg md:text-xl font-bold tracking-tighter uppercase">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-line p-8 md:p-16 relative overflow-hidden bg-bg"
        >
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 flex flex-col items-center"
            >
              <div className="w-20 h-20 border border-white flex items-center justify-center mb-8 rotate-45">
                <Send className="w-10 h-10 text-white -rotate-45" />
              </div>
              <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">Message Envoyé !</h3>
              <p className="text-zinc-500 font-light">On revient vers vous plus vite que la lumière.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-12 text-[10px] font-mono text-white border border-line-light px-6 py-2 hover:bg-white hover:text-black transition-all uppercase tracking-widest"
              >
                ENVOYER UN AUTRE
              </button>
            </motion.div>
          ) : (
            <div className="relative z-10">
              <div className="mb-12">
                <div className="font-mono text-[10px] text-muted mb-4 tracking-[0.4em] uppercase">[INITIER LA CONNEXION]</div>
                <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tighter uppercase leading-none">
                  Lancer votre <br /><span className="text-outline">PROJET WEB.</span>
                </h2>
                <p className="text-zinc-500 font-light text-sm">
                  Transmettez votre vision. Notre équipe technique analyse la faisabilité de votre concept sous 24h.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-mono text-muted tracking-widest uppercase">Nom Complet // [FIELD 01]</label>
                <input 
                  required
                  type="text" 
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-transparent border-b border-line py-4 focus:border-white outline-none transition-colors font-light text-xl"
                  placeholder="Jean Dupont"
                />
              </div>
              
              <div className="space-y-4">
                <label className="text-[10px] font-mono text-muted tracking-widest uppercase">Email Professionnel // [FIELD 02]</label>
                <input 
                  required
                  type="email" 
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-transparent border-b border-line py-4 focus:border-white outline-none transition-colors font-light text-xl"
                  placeholder="jean@entreprise.com"
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-mono text-muted tracking-widest uppercase">Message // [FIELD 03]</label>
                <textarea 
                  required
                  rows={4}
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-transparent border-b border-line py-4 focus:border-white outline-none transition-colors font-light text-xl resize-none"
                  placeholder="Dites-nous tout..."
                />
              </div>

              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 font-mono text-[10px] uppercase tracking-widest"
                >
                  Erreur : {error}
                </motion.div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`group relative w-full py-6 border border-white overflow-hidden transition-all active:scale-[0.98] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <span className="relative z-10 font-black text-xs tracking-[0.4em] uppercase">
                  {isSubmitting ? 'TRANSMISSION...' : 'TRANSMETTRE'}
                </span>
                {!isSubmitting && (
                  <>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="absolute inset-0 flex items-center justify-center text-black font-black text-xs tracking-[0.4em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">TRANSMETTRE</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}

          {/* Geometric grid accent */}
          <div className="absolute inset-0 dot-matrix opacity-[0.03] pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
}
