import { motion } from 'motion/react';
import { useState } from 'react';
import { Star, Sparkles, Image as ImageIcon } from 'lucide-react';
import { galleryPhotos, Photo } from '../data/photos';
import { PhotoLightbox } from './PhotoLightbox';

export function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.8, rotate: -5 },
    show: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10" id="gallery">
      <div className="text-center mb-20 px-4 relative">
        <motion.div
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[10%] top-0 hidden md:block"
        >
          <Star className="text-sage-dark fill-sage" size={40} />
        </motion.div>
        
        <motion.h2 
          className="text-4xl md:text-6xl font-pixel text-ink inline-block relative py-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Gallery of Moments
          <span className="absolute -bottom-4 left-[-5%] w-[110%] h-[12px] rounded-full bg-pink-deep opacity-30 transform -skew-x-12"></span>
          <Sparkles className="absolute -top-8 -right-8 text-pink-deep fill-pink-soft animate-bounce" size={40} />
        </motion.h2>
        <motion.p
          className="mt-8 text-ink/80 font-sans font-bold max-w-lg mx-auto bg-white border-[3px] border-border rounded-xl p-4 shadow-[4px_4px_0_var(--color-sage)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Koleksi foto terbaik kita. Klik gambarnya untuk melihat cerita yang lebih besar!
        </motion.p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-x-8 md:gap-y-12"
      >
        {galleryPhotos.map((photo) => (
          <motion.div
            key={photo.id}
            variants={item}
            whileHover={{ scale: 1.05, rotate: Math.random() > 0.5 ? 3 : -3, y: -10 }}
            className="group relative cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="bg-white p-3 pb-8 md:pb-6 border-[4px] border-border rounded-2xl shadow-[6px_6px_0_var(--color-pink-soft)] transition-all group-hover:shadow-[8px_8px_0_var(--color-pink-deep)] group-hover:border-pink-deep z-10 relative">
              <div className="aspect-square overflow-hidden border-[3px] border-border rounded-xl bg-pink-soft relative group-hover:border-pink-deep transition-colors">
                <img 
                  src={photo.url} 
                  alt="Memory" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-pink-soft/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <span className="bg-white px-5 py-2.5 font-sans font-black tracking-wider text-xs text-pink-deep border-[3px] border-border rounded-full shadow-[4px_4px_0_var(--color-pink-deep)] animate-bounce inline-flex items-center gap-2">
                    <ImageIcon size={14} strokeWidth={3} />
                    OPEN
                  </span>
                </div>
              </div>
              <p className="mt-5 text-sm font-sans font-bold text-center text-ink/90 line-clamp-2 px-2 group-hover:text-pink-deep transition-colors">
                {photo.caption}
              </p>
            </div>
            
            {/* Cute decor bubble */}
            <div className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity transform rotate-12 bg-white rounded-full p-2 border-[3px] border-border shadow-[4px_4px_0_var(--color-sage)] z-20 transition-transform duration-300">
              <Star size={20} className="fill-pink-deep text-pink-deep animate-spin-slow" style={{ animationDuration: '4s' }} />
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <PhotoLightbox 
        photo={selectedPhoto} 
        onClose={() => setSelectedPhoto(null)} 
        onNext={() => {
          if (!selectedPhoto) return;
          const idx = galleryPhotos.findIndex(p => p.id === selectedPhoto.id);
          setSelectedPhoto(galleryPhotos[(idx + 1) % galleryPhotos.length]);
        }}
        onPrev={() => {
          if (!selectedPhoto) return;
          const idx = galleryPhotos.findIndex(p => p.id === selectedPhoto.id);
          setSelectedPhoto(galleryPhotos[(idx - 1 + galleryPhotos.length) % galleryPhotos.length]);
        }}
      />
    </section>
  );
}
