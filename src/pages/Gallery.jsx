import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { galleryData as initialGallery } from '../data/galleryData';
import { siteData } from '../data/siteData';
import Lightbox from '../components/Lightbox';
import { fetchGalleryPhotos } from '../services/api';

export default function Gallery() {
  const [photos, setPhotos] = useState(initialGallery);
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(30);

  useEffect(() => {
    fetchGalleryPhotos().then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        setPhotos(data);
      }
    });
  }, []);

  const filterTabs = [
    { label: 'All Works', value: 'all' },
    { label: 'Weddings & Mandaps', value: 'weddings' },
    { label: 'Sangeet & Revelry', value: 'sangeet' },
    { label: 'Corporate & Summits', value: 'corporate' },
    { label: 'Décor & Floral', value: 'decor' },
  ];

  const filteredItems =
    filter === 'all'
      ? photos
      : photos.filter((item) => (item.category || '').toLowerCase() === filter.toLowerCase());

  const currentVisible = filteredItems.slice(0, visibleCount);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <main id="main">
      {/* Cinematic Hero Section with Backdrop */}
      <section className="hero relative flex w-full flex-col overflow-hidden bg-[#0a0a0b]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/gallery/pudhari-maha-summit-01.webp"
            alt="Eventure Visual Archive"
            className="kenburns h-full w-full object-cover"
          />
        </div>

        {/* Cinematic Grading Scrims */}
        <div className="hero-scrim-vertical pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="hero-scrim-horizontal pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="hero-scrim-vignette pointer-events-none absolute inset-0" aria-hidden="true" />

        {/* Content */}
        <div className="hero-body relative z-10 flex flex-1 items-center">
          <div className="shell w-full">
            <div className="max-w-4xl">
              <p className="eyebrow hero-eyebrow drop-shadow-md">
                Visual Archive
              </p>

              <h1 className="hero-title text-[#f7f3ec] drop-shadow-lg">
                <span className="line-mask block">
                  <span>The work,</span>
                </span>
                <span className="line-mask block">
                  <span className="italic text-[#c89d42]">up close.</span>
                </span>
              </h1>

              <p className="hero-copy max-w-xl text-[1.05rem] leading-relaxed text-[#f7f3ec]/85 drop-shadow-md">
                A visual chronicle of Eventure’s own work: intricate sangeet stages, vibrant haldi setups, magnificent floral mandaps, and broadcast-grade national summit productions.
              </p>
            </div>
          </div>
        </div>

        {/* Rail */}
        <div className="hero-rail relative z-10 shrink-0">
          <div className="shell">
            <div className="flex items-end justify-between border-t border-[#f7f3ec]/15 py-5 pr-16 sm:py-6 sm:pr-0">
              <div className="flex items-end gap-7 sm:gap-12">
                <div>
                  <p className="font-display text-2xl text-[#d4af37] sm:text-3xl">Visual Archive</p>
                  <p className="mt-1 text-[0.54rem] uppercase tracking-[0.24em] text-[#a8a29a] sm:text-[0.58rem] sm:tracking-[0.28em]">
                    High-Res Photography
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs Bar */}
      <section className="bg-[#121215] border-b border-[#2c2c31] py-5 sticky top-0 z-30 backdrop-blur-xl bg-[#121215]/90">
        <div className="shell">
          <div className="flex flex-wrap items-center gap-3">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => {
                  setFilter(tab.value);
                  setVisibleCount(30);
                }}
                className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-all ${
                  filter === tab.value
                    ? 'bg-[#d4af37] text-[#0a0a0b] shadow-md shadow-[#d4af37]/20'
                    : 'bg-[#1b1b1f] text-[#a8a29a] hover:text-[#f7f3ec] hover:bg-[#2c2c31]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Masonry Grid */}
      <section className="bg-[#121215] py-16">
        <div className="shell">
          <div className="columns-1 gap-6 sm:columns-2 md:columns-3 lg:columns-4">
            {currentVisible.map((item, idx) => {
              const imgSrc = item.src || item.full || item.thumb;
              const imgAlt = item.alt || item.title || 'Eventure Photograph';
              const imgCat = item.category || 'Gallery';
              return (
                <div
                  key={idx}
                  className="group relative mb-6 break-inside-avoid overflow-hidden rounded-xl bg-[#1b1b1f] border border-[#2c2c31] cursor-pointer transition-all hover:border-[#d4af37]/40 hover:shadow-xl min-h-[200px]"
                  onClick={() => openLightbox(idx)}
                >
                  <img
                    src={imgSrc}
                    alt={imgAlt}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4">
                    <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                      {imgCat}
                    </span>
                    <p className="text-sm font-medium text-[#f7f3ec] mt-1">{imgAlt}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredItems.length && (
            <div className="mt-16 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 30)}
                className="btn btn-ghost !px-10"
              >
                Load More Photographs ({filteredItems.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0a0a0b] py-24 text-center">
        <div className="shell max-w-3xl">
          <p className="eyebrow mb-4">Crafting Memories</p>
          <h2 className="section-title text-[#f7f3ec]">
            Let’s create your next <br />
            <span className="italic text-[#c89d42]">unforgettable celebration</span>.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-gold !px-8">
              Enquire now
            </Link>
            <a
              href={`https://wa.me/91${siteData.whatsapp}?text=Hello%20Eventure%2C%20I%20would%20like%20to%20discuss%20an%20event.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost !px-8"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxIndex !== null}
        image={activeItem?.src || activeItem?.full || activeItem?.thumb}
        title={activeItem?.alt || activeItem?.title || 'Eventure Photograph'}
        category={activeItem?.category || 'Gallery'}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </main>
  );
}
