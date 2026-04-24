import { motion } from 'motion/react';
import { highlightMoments } from '../data/photos';

export function Highlights() {
  return (
    <section className="py-24 px-4 relative z-10 bg-sage/20 border-y-4 border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1 bg-white border-2 border-border font-sans font-bold uppercase tracking-widest text-pink-deep text-xs mb-4 shadow-[4px_4px_0_var(--color-pink-soft)]">
            Highlights
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-black uppercase tracking-widest text-ink mt-2">
            Cerita yang Lebih Panjang
          </h2>
        </motion.div>

        <div className="space-y-32">
          {highlightMoments.map((moment, idx) => (
            <motion.div 
              key={moment.id}
              className={`flex flex-col ${moment.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-0 bg-pink-deep translate-x-4 translate-y-4 border-4 border-border"></div>
                <img 
                  src={moment.url} 
                  alt={moment.title} 
                  className="relative z-10 w-full aspect-video object-cover border-4 border-border sepia-[0.3] contrast-125 group-hover:sepia-[0.1] transition-all duration-700" 
                  loading="lazy"
                />
                
                {/* Pixel decorative corners */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-white border-2 border-border z-20"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white border-2 border-border z-20"></div>
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-2xl md:text-3xl font-serif font-black uppercase text-ink tracking-wider">{moment.title}</h3>
                <p className="text-md text-ink/80 font-sans leading-relaxed border-l-2 border-pink-deep pl-4 italic">
                  {moment.desc}
                </p>
                <motion.div 
                  className="bg-white p-4 border-[3px] border-border shadow-[4px_4px_0_var(--color-sage)] inline-block mt-4"
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <span className="font-sans font-bold text-[10px] uppercase text-pink-deep block mb-1 tracking-widest">RECORDED MEMORY</span>
                  <p className="font-serif text-sm italic text-ink/70">Terima kasih sudah ada di sini.</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
