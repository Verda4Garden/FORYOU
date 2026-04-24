import { motion, AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';
import { X, Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Photo } from '../data/photos';

interface LightboxProps {
  photo: Photo | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export function PhotoLightbox({ photo, onClose, onNext, onPrev }: LightboxProps) {
  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {photo && (
        <motion.div

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
          style={{ backgroundColor: 'rgba(253, 251, 247, 0.9)', backdropFilter: 'blur(12px)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 40, rotate: -3 }}
            animate={{ scale: 1, y: 0, rotate: 0 }}
            exit={{ scale: 0.8, y: 40, rotate: 3 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            className="relative max-w-3xl w-full flex flex-col items-center p-4 sm:p-8 bg-white border-[4px] sm:border-[5px] border-border rounded-2xl sm:rounded-3xl shadow-[8px_8px_0_var(--color-pink-soft)] sm:shadow-[12px_12px_0_var(--color-pink-soft)] max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative Corner Stars */}
            <div className="absolute -top-6 -left-6 bg-white rounded-full p-2 border-[3px] border-border shadow-[4px_4px_0_var(--color-sage)] rotate-12">
              <Star className="text-sage-dark fill-sage" size={24} />
            </div>

            {/* Cute top bar */}
            <div className="w-full flex justify-between items-center mb-5 sm:mb-8 border-b-[3px] border-dashed border-border/30 pb-4">
              <div className="flex items-center gap-3">
                <div className="bg-pink-light p-2 rounded-xl border-[3px] border-border">
                  <Heart size={24} className="text-pink-deep fill-pink-deep animate-pulse" />
                </div>
                <span className="font-pixel text-lg sm:text-xl uppercase font-black text-ink">Memory Archive</span>
              </div>
              <button 
                className="text-ink bg-white border-[3px] border-border rounded-xl p-2.5 hover:bg-pink-deep hover:text-white hover:scale-110 active:scale-95 transition-all shadow-[4px_4px_0_var(--color-sage)] outline-none group"
                onClick={onClose}
                aria-label="Close"
              >
                <X size={24} strokeWidth={4} className="group-hover:rotate-90 transition-transform" />
              </button>
            </div>
            
            {/* Image Container */}
            <div className="w-full relative bg-cream border-[4px] border-border rounded-2xl p-2 sm:p-5 mb-4 sm:mb-8 shadow-inner overflow-hidden group flex justify-center items-center">
              <img 
                src={photo.url} 
                alt="Selected Memory"
                className="w-full max-h-[40vh] sm:max-h-[55vh] object-contain rounded-xl"
                loading="lazy"
              />
            </div>
            
            {/* Navigation & Caption */}
            <div className="w-full flex items-center gap-2 sm:gap-4">
              {onPrev && (
                <button 
                  onClick={onPrev}
                  className="p-3 sm:p-4 bg-white border-[3px] border-border rounded-xl shadow-[4px_4px_0_var(--color-sage)] hover:bg-pink-light hover:-translate-y-1 hover:shadow-[4px_6px_0_var(--color-sage)] active:translate-y-0 active:shadow-[0px_0px_0_var(--color-sage)] transition-all text-pink-deep hover:text-ink shrink-0 outline-none"
                >
                  <ChevronLeft size={24} strokeWidth={4} />
                </button>
              )}

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="flex-1 bg-pink-light/50 border-[3px] border-border rounded-xl p-4 sm:p-6 shadow-[4px_4px_0_var(--color-sage)] relative min-w-0"
              >
                <p className="font-sans text-sm sm:text-lg font-black text-ink/90 text-center leading-relaxed break-words">
                  {photo.caption}
                </p>
              </motion.div>

              {onNext && (
                <button 
                  onClick={onNext}
                  className="p-3 sm:p-4 bg-white border-[3px] border-border rounded-xl shadow-[4px_4px_0_var(--color-sage)] hover:bg-pink-light hover:-translate-y-1 hover:shadow-[4px_6px_0_var(--color-sage)] active:translate-y-0 active:shadow-[0px_0px_0_var(--color-sage)] transition-all text-pink-deep hover:text-ink shrink-0 outline-none"
                >
                  <ChevronRight size={24} strokeWidth={4} />
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
