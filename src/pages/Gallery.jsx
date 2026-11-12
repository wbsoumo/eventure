import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { galleryData } from '../data/galleryData';
import { siteData } from '../data/siteData';
import Lightbox from '../components/Lightbox';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(30);

  const filterTabs = [
    { label: 'All Works', value: 'all' },
    { label: 'Weddings & Mandaps', value: 'weddings' },
    { label: 'Sangeet & Revelry', value: 'sangeet' },
    { label: 'Corporate & Summits', value: 'corporate' },
    { label: 'Décor & Floral', value: 'decor' },
  ];

  const filteredItems =
    filter === 'all'
      ? galleryData
      : galleryData.filter((item) => item.category === filter);

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
    <main id="main" className="pt-24 lg:pt-32">
      {/* Hero Section */}
      <section className="bg-[#0a0a0b] pb-14">
        <div className="shell">
          <div className="max-w-4xl">
            <p className="eyebrow mb-5">Visual Archive</p>
            <h1 className="page-title">
              The work, <br />
              <span className="italic text-[#c89d42]">up close</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-[1.08rem] leading-relaxed text-[#a8a29a]">
              A visual chronicle of Eventure’s own work: intricate sangeet stages, vibrant haldi setups, magnificent floral mandaps, and broadcast-grade national summit productions.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="mt-12 flex flex-wrap items-center gap-3 border-y border-[#2c2c31] py-4">
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

      {/* Gallery Grid */}
      <section className="bg-[#121215] py-16">
        <div className="shell">
          <div className="columns-1 gap-6 sm:columns-2 md:columns-3 lg:columns-4">
            {currentVisible.map((item, idx) => (
              <div
                key={idx}
                className="group relative mb-6 break-inside-avoid overflow-hidden rounded-xl bg-[#1b1b1f] border border-[#2c2c31] cursor-pointer"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4">
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                    {item.category}
                  </span>
                  <p className="text-sm font-medium text-[#f7f3ec] mt-1">{item.alt}</p>
                </div>
              </div>
            ))}
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
          <h2 className="page-title">
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
        image={activeItem?.src}
        title={activeItem?.alt}
        category={activeItem?.category}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </main>
  );
}
