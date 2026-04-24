import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { MelodyPixel } from './MelodyPixel';

export function Footer() {
  return (
    <footer className="py-24 px-4 mt-20 relative z-10 bg-white border-y-[6px] border-border overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Decorative background stripes */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--color-pink-soft) 0, var(--color-pink-soft) 20px, transparent 20px, transparent 40px)' }}></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="max-w-2xl mx-auto flex flex-col items-center relative z-10 bg-white p-8 md:p-12 rounded-3xl border-[4px] border-border shadow-[8px_8px_0_var(--color-sage)]"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1], y: [0, -10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8 relative group cursor-pointer"
        >
          <div className="w-24 h-24 bg-pink-light border-[4px] border-border rounded-full flex items-center justify-center shadow-[6px_6px_0_var(--color-pink-deep)] group-hover:bg-pink-soft transition-colors z-10 relative overflow-hidden">
            <MelodyPixel className="w-16 h-16 translate-y-2" delay={1} />
          </div>
          <Sparkles className="absolute -top-4 -right-4 text-sage-dark animate-spin-slow z-20" size={32} />
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl font-pixel text-ink mb-6 py-2">
          Level Complete
        </h2>
        
        <p className="text-lg text-ink/80 font-sans font-bold leading-relaxed mb-10 max-w-lg">
          Sampai jumpa di level kehidupan berikutnya. Mari buat lebih banyak kenangan manis dan cerita lucu bersama.
        </p>

        <div className="font-sans font-black text-xs text-ink uppercase tracking-widest flex flex-col items-center gap-8 w-full">
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95, y: 2, boxShadow: "0px 0px 0 var(--color-ink)" }}
            className="px-8 py-4 bg-pink-deep border-[3px] border-border rounded-full text-white shadow-[6px_6px_0_var(--color-ink)] hover:bg-pink-warm transition-all outline-none"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            PLAY AGAIN
          </motion.button>
          
          <p className="mt-8 pt-6 w-full border-t-[3px] border-dashed border-border/20 text-ink/60">
            Made with love & pixels — {new Date().getFullYear()}
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
