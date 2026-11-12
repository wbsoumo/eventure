import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee';
import { siteData } from '../data/siteData';

export default function About() {
  const pillars = [
    {
      title: "Discretion & Trust",
      desc: "A significant share of our work is for prominent families, business leaders, and listed brands. Discretion is standard practice — non-disclosure agreements are routine, and we never publish without permission."
    },
    {
      title: "Senior-Level Involvement",
      desc: "We deliberately limit the number of productions we accept each season. The founders and senior leads who sit across the table during your first brief are on ground directing the show on the day."
    },
    {
      title: "Pan-India Network",
      desc: "Deep, long-standing relationships with India’s premier heritage palaces, luxury hotel chains, floral suppliers, caterers, and technical partners — relationships cultivated over a decade of shared execution."
    },
    {
      title: "White-Glove Hospitality",
      desc: "From chartered flights and private airport tarmac welcomes to personalized suite amenities and 24/7 guest concierges, we ensure every attendee feels uniquely valued."
    }
  ];

  return (
    <main id="main" className="pt-24 lg:pt-32">
      {/* Hero Section */}
      <section className="bg-[#0a0a0b] pb-20">
        <div className="shell">
          <div className="max-w-4xl">
            <p className="eyebrow mb-5">About Eventure</p>
            <h1 className="page-title">
              Equal parts <br />
              <span className="italic text-[#c89d42]">art and precision</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-[1.08rem] leading-relaxed text-[#a8a29a]">
              A luxury event house headquartered in Kolkata, creating extraordinary weddings, corporate showcases, and bespoke celebrations across India and abroad.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img
          src="/images/petal-shower-couple.webp"
          alt="Eventure Luxury Event Management"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-[#0a0a0b]/60" />
      </section>

      {/* Our Story & Philosophy */}
      <section className="bg-[#121215] py-24">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">Our Genesis</p>
            <h2 className="page-title">
              Doing better, <br />
              <span className="italic text-[#c89d42]">not more</span>.
            </h2>
            <div className="mt-8 space-y-4 text-sm text-[#d4af37]">
              <p>Founded on passion &amp; integrity</p>
              <p>Headquartered in Kolkata</p>
              <p>Delivering Pan-India &amp; Global Celebrations</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-[1.02rem] leading-relaxed text-[#a8a29a]">
            <p className="text-lg text-[#f7f3ec]/90">
              Eventure was born in Kolkata with a simple yet ambitious conviction: great events are about far more than just what meets the eye. They are about how flawlessly every element converges.
            </p>
            <p>
              Over the last decade, we have grown from producing intimate bespoke gatherings into one of Eastern India’s most trusted full-service luxury event management firms, managing destinations spanning Rajasthan’s heritage forts, Goa’s coastline, the backwaters of Kerala, and major metropolitan business hubs.
            </p>
            <p>
              We treat every event as an original work of art. We do not have cookie-cutter packages or recycled themes. Every lighting rig, floral garland, menu pairing, and stage cue is drafted specifically for the host, the brand, and the setting.
            </p>
            <p>
              Above all, our hosts return to us year after year because of trust. We stand beside you through months of planning, shielding you from stress so that when the day arrives, you are completely present to celebrate.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-[#2c2c31] bg-[#0a0a0b] py-14">
        <div className="shell">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
            {siteData.stats.map((st, i) => (
              <div key={i}>
                <p className="font-display text-3xl sm:text-4xl text-[#d4af37] font-light">
                  {st.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#a8a29a]">
                  {st.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars of Excellence */}
      <section className="bg-[#121215] py-24">
        <div className="shell">
          <div className="mb-16 max-w-3xl">
            <p className="eyebrow mb-4">The Eventure Difference</p>
            <h2 className="page-title">
              Why our hosts <span className="italic text-[#c89d42]">rely on us</span>.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="glass p-8 rounded-2xl">
                <span className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-[#d4af37]">
                  0{idx + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl text-[#f7f3ec]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#a8a29a]">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* Capabilities Overview */}
      <section className="bg-[#0a0a0b] py-24">
        <div className="shell">
          <div className="mb-16 max-w-3xl">
            <p className="eyebrow mb-4">Complete Production Suite</p>
            <h2 className="page-title">
              Every moving part, <span className="italic text-[#c89d42]">under one roof</span>.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteData.capabilities.map((cap) => (
              <div key={cap.num} className="border border-[#2c2c31] bg-[#121215] p-6 rounded-xl">
                <span className="text-xs text-[#d4af37] font-semibold">{cap.num}</span>
                <h3 className="mt-3 font-display text-xl text-[#f7f3ec]">{cap.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#a8a29a]">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#121215] py-24 text-center">
        <div className="shell max-w-3xl">
          <p className="eyebrow mb-4">Kolkata Studio</p>
          <h2 className="page-title">
            Let's sit down for a coffee.
          </h2>
          <p className="mt-6 text-[#a8a29a]">
            Visit our studio in Salt Lake Sector V, Kolkata, or schedule a video consultation with our senior planners.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-gold !px-8">
              Schedule a consultation
            </Link>
            <a
              href={`https://wa.me/91${siteData.whatsapp}?text=Hello%20Eventure%2C%20I%20would%20like%20to%20meet%20your%20team.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost !px-8"
            >
              Direct WhatsApp (+91 {siteData.whatsapp})
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
