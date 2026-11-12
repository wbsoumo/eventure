import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import { weddingsServices } from '../data/servicesData';
import Lightbox from '../components/Lightbox';

export default function Weddings() {
  const [selectedImage, setSelectedImage] = useState(null);

  const weddingDestinations = [
    {
      city: "Kolkata & Heritage Bengal",
      desc: "Palatial rajbaris, colonial ballroom revivals, and opulent city grand ballrooms infused with timeless aristocratic charm.",
      image: "/images/haldi-mandap-marigold.webp"
    },
    {
      city: "Udaipur",
      desc: "Grand lakeside palaces, island reveals, and sunset phere across mirror-still waters where royalty once celebrated.",
      image: "/images/wedding-ceremony-confetti.webp"
    },
    {
      city: "Jaipur & Jodhpur",
      desc: "Fortress ramparts, sandstone pavilions, and desert sangeets under canopies of starlight and kinetic illumination.",
      image: "/images/petal-shower-couple.webp"
    },
    {
      city: "Goa & Coastal Escapes",
      desc: "Barefoot beach sundowners, cliffside vows, and private villa festivities that flow seamlessly into twilight revelry.",
      image: "/images/unsplash/photo-1596436889106-be35e843f974.jpg"
    },
    {
      city: "Kerala Backwaters",
      desc: "Tranquil waterways, private houseboat arrivals, candlelit coconut groves, and bespoke gourmet dining.",
      image: "/images/unsplash/photo-1602216056096-3b40cc0c9944.jpg"
    }
  ];

  return (
    <main id="main">
      {/* Cinematic Hero Section with Backdrop */}
      <section className="hero relative flex w-full flex-col overflow-hidden bg-[#0a0a0b]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/wedding-ceremony-confetti.webp"
            alt="Eventure Luxury Wedding Ceremony"
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
                Luxury &amp; Destination Weddings
              </p>

              <h1 className="hero-title text-[#f7f3ec] drop-shadow-lg">
                <span className="line-mask block">
                  <span>A celebration that feels</span>
                </span>
                <span className="line-mask block">
                  <span className="italic text-[#c89d42]">entirely your own.</span>
                </span>
              </h1>

              <p className="hero-copy max-w-xl text-[1.05rem] leading-relaxed text-[#f7f3ec]/85 drop-shadow-md">
                No two families celebrate the same way. And no two Eventure weddings should either.
                From private heritage estates in Kolkata to the palaces of Rajasthan and beachfront shores of Goa,
                we design and produce luxury weddings that honor heritage while creating unforgettable modern magic.
              </p>

              <div className="hero-actions flex flex-wrap gap-4">
                <Link to="/contact" className="btn btn-gold !px-8">
                  Plan your wedding
                </Link>
                <a
                  href={`https://wa.me/91${siteData.whatsapp}?text=Hello%20Eventure%2C%20I%20would%20like%20to%20discuss%20our%20upcoming%20wedding.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost !px-8"
                >
                  WhatsApp Wedding Desk
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Rail */}
        <div className="hero-rail relative z-10 shrink-0">
          <div className="shell">
            <div className="flex items-end justify-between border-t border-[#f7f3ec]/15 py-5 pr-16 sm:py-6 sm:pr-0">
              <div className="flex items-end gap-7 sm:gap-12">
                <div>
                  <p className="font-display text-2xl text-[#d4af37] sm:text-3xl">Pan India &amp; Global</p>
                  <p className="mt-1 text-[0.54rem] uppercase tracking-[0.24em] text-[#a8a29a] sm:text-[0.58rem] sm:tracking-[0.28em]">
                    Palaces · Resorts · Heritage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="bg-[#121215] py-24">
        <div className="shell">
          <div className="mb-16 max-w-3xl">
            <p className="eyebrow mb-4">What we do</p>
            <h2 className="section-title">
              Everything, <span className="italic text-[#c89d42]">handled</span>.
            </h2>
            <p className="mt-6 text-[#a8a29a] leading-relaxed">
              Every detail is considered from the moment your guests receive their bespoke stationery to their last dance under the stars.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {weddingsServices.slice(0, 6).map((service, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-[#1b1b1f] border border-[#2c2c31] transition-all hover:border-[#d4af37]/40"
              >
                {service.image && (
                  <div className="aspect-16/10 overflow-hidden cursor-pointer" onClick={() => setSelectedImage(service.image)}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-7">
                  <h3 className="font-display text-2xl text-[#f7f3ec]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#a8a29a]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Destinations Spotlight */}
      <section className="bg-[#0a0a0b] py-24">
        <div className="shell">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <p className="eyebrow mb-4">Destinations</p>
            <h2 className="section-title">
              Where will your <span className="italic text-[#c89d42]">story unfold</span>?
            </h2>
            <p className="mt-4 text-sm text-[#a8a29a]">
              We curate relationships with luxury estates, palaces, and private resorts across India and the globe.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {weddingDestinations.map((dest, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-[#121215] border border-[#2c2c31] p-6 transition-all hover:border-[#d4af37]/30"
              >
                <div className="aspect-4/3 overflow-hidden rounded-xl mb-5">
                  <img
                    src={dest.image}
                    alt={dest.city}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-2xl text-[#d4af37]">{dest.city}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#a8a29a]">{dest.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="bg-[#121215] py-24">
        <div className="shell max-w-4xl">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">The Process</p>
            <h2 className="section-title">
              How we work <span className="italic text-[#c89d42]">together</span>.
            </h2>
          </div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Discovery & Narrative",
                desc: "We begin by listening deeply — understanding your family traditions, your personal style, your preferred scale, and the distinctive memories you wish to create."
              },
              {
                step: "02",
                title: "Spatial & Experiential Architecture",
                desc: "Our design team crafts complete 3D renders, moodboards, custom floral schemes, stage blueprints, and lighting plans before a single vendor contract is signed."
              },
              {
                step: "03",
                title: "Curation & Production Rig",
                desc: "We contract elite culinary artists, headline entertainment, sound and light engineers, and establish a minute-by-minute show run."
              },
              {
                step: "04",
                title: "The Celebration Days",
                desc: "Our senior leadership is physically present on ground managing every ritual, guest liaison, convoy, and transition so your family experiences nothing but joy."
              }
            ].map((st) => (
              <div key={st.step} className="flex gap-6 sm:gap-10 border-b border-[#2c2c31] pb-10">
                <span className="font-display text-3xl sm:text-4xl text-[#d4af37] font-light">
                  {st.step}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-[#f7f3ec]">{st.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[#a8a29a]">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0a0a0b] py-24 text-center">
        <div className="shell max-w-3xl">
          <p className="eyebrow mb-4">Let's Celebrate</p>
          <h2 className="section-title text-[#f7f3ec]">
            Your dream wedding deserves <br />
            <span className="italic text-[#c89d42]">flawless execution</span>.
          </h2>
          <p className="mt-6 text-[#a8a29a]">
            Connect with our wedding planning team in Kolkata for a private consultation.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-gold !px-8">
              Start your wedding enquiry
            </Link>
            <a
              href={`https://wa.me/91${siteData.whatsapp}?text=Hello%20Eventure%2C%20I%20would%20like%20to%20discuss%20our%20wedding%20dates.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost !px-8"
            >
              Direct WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={!!selectedImage}
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </main>
  );
}
