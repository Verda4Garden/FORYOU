import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { MelodyPixel } from './MelodyPixel';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-20 z-10 overflow-hidden">
      {/* Decorative background shapes */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-[10%] w-32 h-32 bg-white rounded-full border-[3px] border-border shadow-[4px_4px_0_var(--color-sage)] opacity-90 z-0 hidden md:flex items-center justify-center overflow-hidden"
      >
        <MelodyPixel className="w-20 h-20 translate-y-2" delay={0.2} />
        <motion.div 
          className="absolute -top-2 -right-4 bg-white border-2 border-border px-3 py-1 rounded-xl text-[10px] font-pixel text-pink-deep shadow-[2px_2px_0_var(--color-sage)] whitespace-nowrap"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Konichiwa!
        </motion.div>
      </motion.div>
      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-[15%] w-32 h-32 bg-white rounded-3xl border-[3px] border-border shadow-[4px_4px_0_var(--color-pink-deep)] transform rotate-12 opacity-90 z-0 hidden md:flex items-center justify-center overflow-hidden"
      >
        <MelodyPixel className="w-20 h-20 translate-y-2" delay={0.5} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <motion.div 
          className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-white border-[3px] border-border rounded-full font-sans font-black uppercase tracking-widest text-xs text-pink-deep shadow-[4px_4px_0_var(--color-sage-dark)] cursor-default hover:scale-105 transition-transform"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
        >
          <span className="w-2 h-2 rounded-full bg-pink-deep animate-ping" />
          Kenangan Baru Terbuka
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-pixel mb-8 text-ink leading-tight drop-shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Pixel <br className="md:hidden" />
          <span className="relative inline-block mt-2 md:mt-0">
            <span className="relative z-10 text-white bg-pink-deep px-4 py-1 rounded-2xl inline-block -rotate-3 border-[4px] border-border shadow-[6px_6px_0_var(--color-sage)]">
              Memories
            </span>
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-base md:text-xl md:leading-relaxed text-ink/80 mb-12 font-sans font-bold max-w-xl mx-auto bg-white/50 backdrop-blur-sm p-6 rounded-3xl border-2 border-dashed border-pink-deep/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Setiap gambar menyimpan satu cerita lucu, satu tawa tulus, dan ribuan makna kecil yang berharga.
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-8 z-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 100 }}
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="p-5 bg-white border-[4px] border-border rounded-full cursor-pointer hover:bg-pink-soft hover:scale-110 active:scale-95 transition-all shadow-[6px_6px_0_var(--color-sage)] group relative"
          onClick={() => {
            const galleryEl = document.getElementById('gallery');
            if (galleryEl) {
              galleryEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <div className="absolute inset-0 bg-pink-light rounded-full scale-0 group-hover:scale-100 transition-transform origin-center -z-10" />
          <ArrowDown className="text-pink-deep group-hover:text-ink transition-colors" size={32} strokeWidth={4} />
        </motion.div>
      </motion.div>
    </section>
  );
}
