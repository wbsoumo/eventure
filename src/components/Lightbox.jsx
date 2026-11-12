import React, { useEffect } from 'react';

export default function Lightbox({ isOpen, image, title, category, onClose, onNext, onPrev }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
      >
        ✕
      </button>

      {/* Prev button */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white hover:bg-[#d4af37] hover:text-black transition-colors"
        >
          ‹
        </button>
      )}

      {/* Next button */}
      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white hover:bg-[#d4af37] hover:text-black transition-colors"
        >
          ›
        </button>
      )}

      {/* Image container */}
      <div
        className="lightbox-animate relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-lg shadow-2xl flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt={title || 'Eventure Gallery'}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-md"
        />
        {(title || category) && (
          <div className="mt-4 text-center">
            {category && (
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[#d4af37] block mb-1">
                {category}
              </span>
            )}
            {title && (
              <h4 className="font-display text-xl text-[#f7f3ec]">{title}</h4>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
