import { motion } from 'motion/react';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { Highlights } from './components/Highlights';
import { Footer } from './components/Footer';
import { MelodyPixel } from './components/MelodyPixel';
import './index.css';

export default function App() {

  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if(el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cream text-ink font-sans selection:bg-pink-soft selection:text-ink relative overflow-x-hidden">
      
      {/* CUTE PIXEL HEADER */}
      <header className="fixed top-2 left-2 right-2 md:top-4 md:left-4 md:right-4 h-16 md:h-20 bg-white/90 backdrop-blur-md border-[4px] border-border rounded-2xl z-40 px-4 md:px-8 flex items-center justify-between shadow-[4px_4px_0_var(--color-sage)] transition-all duration-300">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={(e) => scrollTo('hero', e)}>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-pink-light border-[3px] border-border rounded-xl flex items-center justify-center shadow-[4px_4px_0_var(--color-pink-deep)] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 overflow-hidden">
            <MelodyPixel className="w-8 h-8 md:w-10 md:h-10 translate-y-1" />
          </div>
          <span className="font-pixel text-lg md:text-2xl text-ink font-black tracking-widest hidden sm:block mt-1">
            Archive
          </span>
        </div>
        
        <nav className="flex items-center gap-2 sm:gap-6 font-sans font-black text-xs md:text-sm uppercase tracking-widest">
          <a href="#hero" onClick={(e) => scrollTo('hero', e)} className="hover:text-pink-deep transition-colors px-3 py-2 rounded-xl hover:bg-pink-light border-2 border-transparent hover:border-border">Home</a>
          <a href="#highlights" onClick={(e) => scrollTo('highlights', e)} className="hover:text-pink-deep transition-colors px-3 py-2 rounded-xl hover:bg-pink-light border-2 border-transparent hover:border-border hidden md:block">Stories</a>
          <a href="#gallery" onClick={(e) => scrollTo('gallery', e)} className="bg-pink-deep text-white px-5 py-2.5 border-[3px] border-border rounded-xl shadow-[4px_4px_0_var(--color-ink)] hover:-translate-y-1 hover:shadow-[6px_6px_0_var(--color-ink)] active:translate-y-0 active:shadow-[0px_0px_0_var(--color-ink)] transition-all">
            Gallery
          </a>
        </nav>
      </header>

      {/* Floating Global Melody */}
      <motion.div
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 md:w-20 md:h-20 bg-white border-[4px] border-border rounded-2xl shadow-[6px_6px_0_var(--color-sage)] flex items-center justify-center p-2 hidden sm:flex cursor-pointer hover:scale-110 active:scale-95 transition-all"
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <MelodyPixel className="w-full h-full" />
      </motion.div>

      <main className="pt-24 md:pt-32">
        <div id="hero">
          <Hero />
        </div>
        <div id="highlights">
          <Highlights />
        </div>
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}
