import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { siteData } from '../data/siteData';
import Lightbox from '../components/Lightbox';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  const categories = ['All', 'Wedding', 'Corporate', 'Destination'];

  const filteredProjects =
    filter === 'All'
      ? portfolioData
      : portfolioData.filter((p) => p.category.toLowerCase() === filter.toLowerCase());

  const openLightbox = (project) => {
    setSelectedImage(project.image);
    setActiveProject(project);
  };

  return (
    <main id="main">
      {/* Cinematic Hero Section with Backdrop */}
      <section className="hero relative flex w-full flex-col overflow-hidden bg-[#0a0a0b]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/unsplash/photo-1508997449629-303059a039c0.jpg"
            alt="Eventure Signature Portfolio"
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
                Our Portfolio
              </p>

              <h1 className="hero-title text-[#f7f3ec] drop-shadow-lg">
                <span className="line-mask block">
                  <span>Moments</span>
                </span>
                <span className="line-mask block">
                  <span className="italic text-[#c89d42]">remembered.</span>
                </span>
              </h1>

              <p className="hero-copy max-w-xl text-[1.05rem] leading-relaxed text-[#f7f3ec]/85 drop-shadow-md">
                A curated selection of Eventure’s signature work: palace and beach weddings, national brand summits, award nights, dealer conclaves, and private gala dinners produced across Kolkata, Rajasthan, Goa, Mumbai, and beyond.
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
                  <p className="font-display text-2xl text-[#d4af37] sm:text-3xl">Signature Projects</p>
                  <p className="mt-1 text-[0.54rem] uppercase tracking-[0.24em] text-[#a8a29a] sm:text-[0.58rem] sm:tracking-[0.28em]">
                    Weddings · Summits · Galas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-[#121215] border-b border-[#2c2c31] py-5 sticky top-0 z-30 backdrop-blur-xl bg-[#121215]/90">
        <div className="shell">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-[#a8a29a] mr-4 hidden sm:inline">
              Filter by:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-all ${
                  filter === cat
                    ? 'bg-[#d4af37] text-[#0a0a0b] shadow-md shadow-[#d4af37]/20'
                    : 'bg-[#1b1b1f] text-[#a8a29a] hover:text-[#f7f3ec] hover:bg-[#2c2c31]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-[#121215] py-20">
        <div className="shell">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-[#1b1b1f] border border-[#2c2c31] transition-all hover:border-[#d4af37]/50 hover:shadow-2xl hover:shadow-black/60"
              >
                <div
                  className="aspect-16/11 overflow-hidden relative cursor-pointer"
                  onClick={() => openLightbox(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="rounded-full bg-[#0a0a0b]/80 px-4 py-2 text-xs uppercase tracking-widest text-[#d4af37] border border-[#d4af37]/40">
                      View Photograph ↗
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#d4af37]">
                      <span className="rounded-full bg-[#d4af37]/10 px-3 py-1 font-semibold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-[#a8a29a]">{project.location}</span>
                    </div>

                    <h2 className="mt-4 font-display text-2xl text-[#f7f3ec] leading-snug">
                      {project.title}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-[#a8a29a]">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[#2c2c31]/80 pt-4">
                    {project.stats && (
                      <div className="text-xs font-medium text-[#f7f3ec]/80 mb-2">
                        {project.stats}
                      </div>
                    )}
                    {project.scope && (
                      <div className="text-[0.72rem] text-[#a8a29a] uppercase tracking-wider">
                        Scope: {project.scope}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0a0a0b] py-24 text-center">
        <div className="shell max-w-3xl">
          <p className="eyebrow mb-4">Start A Conversation</p>
          <h2 className="section-title text-[#f7f3ec]">
            Have an upcoming celebration or summit?
          </h2>
          <p className="mt-6 text-[#a8a29a]">
            Our Kolkata team travels across India to turn bold creative concepts into immaculate reality.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-gold !px-8">
              Enquire now
            </Link>
            <a
              href={`https://wa.me/91${siteData.whatsapp}?text=Hello%20Eventure%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20our%20event.`}
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
        isOpen={!!selectedImage}
        image={selectedImage}
        title={activeProject?.title}
        category={activeProject?.category}
        onClose={() => {
          setSelectedImage(null);
          setActiveProject(null);
        }}
      />
    </main>
  );
}
