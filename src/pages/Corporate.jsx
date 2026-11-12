import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee';
import { siteData } from '../data/siteData';
import { corporateServices } from '../data/servicesData';
import Lightbox from '../components/Lightbox';

export default function Corporate() {
  const [selectedImage, setSelectedImage] = useState(null);

  const corporateOfferings = [
    {
      title: "Conferences & Summits",
      desc: "Large-format multi-track conventions, live streaming broadcast feeds, seamless stage turnover, and executive VIP green rooms.",
      image: "/images/kotak-neo-kona-kona-investor.jpeg"
    },
    {
      title: "Product & Brand Launches",
      desc: "High-voltage reveals engineered for maximum media impact, kinetic scenic mechanics, synchronized timecoded light and laser shows.",
      image: "/images/unsplash/photo-1768508947879-848db5ef3df9.jpg"
    },
    {
      title: "Dealer & Investor Meets",
      desc: "Channel partner conventions built to inspire confidence, highlight performance milestones, and reward top networks across India.",
      image: "/images/unsplash/photo-1560439514-4e9645039924.jpg"
    },
    {
      title: "Award Nights & Galas",
      desc: "Glitz, glamour, precision show-calling, live celebrity headliners, and red carpet protocol delivered to the second.",
      image: "/images/summit-audience.webp"
    },
    {
      title: "Exhibitions & Activations",
      desc: "Custom architectural trade stalls, interactive sensory booths, and high-footfall engagement zones that elevate brand prestige.",
      image: "/images/pudhari-maha-summit-audience.webp"
    },
    {
      title: "Investor Gala Dinners",
      desc: "Black-tie boardroom banquets where confidentiality, privacy, and impeccable culinary and sommelier service reign supreme.",
      image: "/images/unsplash/photo-1768508950319-0e4b01063fbe.jpg"
    }
  ];

  return (
    <main id="main" className="pt-24 lg:pt-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0a0b] pb-20">
        <div className="shell">
          <div className="max-w-4xl">
            <p className="eyebrow mb-5">Corporate Event Management &amp; Production</p>
            <h1 className="page-title">
              Events that engage audiences <br />
              <span className="italic text-[#c89d42]">and elevate brands</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-[1.08rem] leading-relaxed text-[#a8a29a]">
              Ambitious on stage. Invisible off it.
              From national media conclaves and BFSI summits to high-profile product reveals,
              Eventure produces corporate events with international broadcast precision.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn btn-gold">
                Start a corporate brief
              </Link>
              <a
                href={`https://wa.me/91${siteData.whatsapp}?text=Hello%20Eventure%2C%20I%20would%20like%20to%20discuss%20a%20corporate%20event.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Direct WhatsApp Desk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Banner Image */}
      <section className="relative h-[65vh] w-full overflow-hidden">
        <img
          src="/images/kotak-neo-kona-kona-investor.jpeg"
          alt="Eventure Corporate Stage Production"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-[#0a0a0b]/60" />
      </section>

      {/* Marquee */}
      <Marquee />

      {/* What We Produce */}
      <section className="bg-[#121215] py-24">
        <div className="shell">
          <div className="mb-16 max-w-3xl">
            <p className="eyebrow mb-4">Our Formats</p>
            <h2 className="page-title">
              What we <span className="italic text-[#c89d42]">produce</span>.
            </h2>
            <p className="mt-6 text-[#a8a29a] leading-relaxed">
              We engineer formats designed for impact — connecting leaders, customers, stakeholders, and the press.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {corporateOfferings.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-[#1b1b1f] border border-[#2c2c31] transition-all hover:border-[#d4af37]/40"
              >
                <div className="aspect-16/10 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                    onClick={() => setSelectedImage(item.image)}
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl text-[#f7f3ec]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#a8a29a]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Standards */}
      <section className="bg-[#0a0a0b] py-24">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <p className="eyebrow mb-5">Engineering Excellence</p>
              <h2 className="page-title">
                Broadcast-grade technical <br />
                <span className="italic text-[#c89d42]">rigs and show calling</span>.
              </h2>
              <p className="mt-6 text-[1.02rem] leading-relaxed text-[#a8a29a]">
                When your speakers step onto the stage, there are no second takes. Our corporate production division operates with rigorous technical redundancy and certified sound, video, and power systems.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Ultra-high-definition curved LED walls and pixel-mapped lighting grids",
                  "Redundant power backups and studio-grade wireless audio feeds",
                  "Professional broadcast video switches and multicam live stream feeds",
                  "Synchronized cues for teleprompter, stage timing, and presenter confidence monitors",
                  "Dedicated backstage VIP hospitality and green room management"
                ].map((spec, i) => (
                  <div key={i} className="flex items-start gap-4 text-sm text-[#f7f3ec]/90">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#d4af37]" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-[#2c2c31]">
              <img
                src="/images/summit-audience.webp"
                alt="Audience at Eventure Corporate Summit"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#121215] py-24 text-center">
        <div className="shell max-w-3xl">
          <p className="eyebrow mb-4">Partner With Us</p>
          <h2 className="page-title">
            Ready to produce your next <br />
            <span className="italic text-[#c89d42]">corporate milestone</span>?
          </h2>
          <p className="mt-6 text-[#a8a29a]">
            Connect with our Kolkata corporate events desk for RFPs, technical walkthroughs, and custom proposals.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-gold !px-8">
              Submit your RFP / Enquiry
            </Link>
            <a
              href={`https://wa.me/91${siteData.whatsapp}?text=Hello%20Eventure%2C%20I%20would%20like%20to%20discuss%20a%20corporate%20RFP.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost !px-8"
            >
              Direct WhatsApp Desk
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
