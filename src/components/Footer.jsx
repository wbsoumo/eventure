import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="relative border-t border-[#2c2c31] bg-[#121215]">
      <div className="shell py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Column 1: Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block">
              <img
                src="/logos/eventure-logo.svg"
                alt="Eventure"
                className="w-auto shrink-0 h-10 lg:h-12"
              />
            </Link>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-[#a8a29a]">
              Where vision becomes an experience. Luxury weddings, corporate events and bespoke experiences, delivered with precision across India.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
              <a
                href={siteData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-[0.62rem] uppercase tracking-[0.24em] text-[#a8a29a] hover:text-[#d4af37]"
              >
                Instagram
              </a>
              <a
                href={siteData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-[0.62rem] uppercase tracking-[0.24em] text-[#a8a29a] hover:text-[#d4af37]"
              >
                Facebook
              </a>
              <a
                href={siteData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-[0.62rem] uppercase tracking-[0.24em] text-[#a8a29a] hover:text-[#d4af37]"
              >
                LinkedIn
              </a>
              <a
                href={siteData.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-[0.62rem] uppercase tracking-[0.24em] text-[#a8a29a] hover:text-[#d4af37]"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-[0.6rem] uppercase tracking-[0.3em] text-[#d4af37]">Explore</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-[#f7f3ec]/70 transition-colors hover:text-[#d4af37]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/weddings" className="text-sm text-[#f7f3ec]/70 transition-colors hover:text-[#d4af37]">
                  Weddings
                </Link>
              </li>
              <li>
                <Link to="/corporate" className="text-sm text-[#f7f3ec]/70 transition-colors hover:text-[#d4af37]">
                  Corporate
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-[#f7f3ec]/70 transition-colors hover:text-[#d4af37]">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-[#f7f3ec]/70 transition-colors hover:text-[#d4af37]">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-[#f7f3ec]/70 transition-colors hover:text-[#d4af37]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-[#f7f3ec]/70 transition-colors hover:text-[#d4af37]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <h2 className="mb-6 text-[0.6rem] uppercase tracking-[0.3em] text-[#d4af37]">Services</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/weddings" className="text-sm text-[#f7f3ec]/70 transition-colors hover:text-[#d4af37]">
                  Destination Weddings
                </Link>
              </li>
              <li>
                <Link to="/weddings" className="text-sm text-[#f7f3ec]/70 transition-colors hover:text-[#d4af37]">
                  Luxury City Weddings
                </Link>
              </li>
              <li>
                <Link to="/corporate" className="text-sm text-[#f7f3ec]/70 transition-colors hover:text-[#d4af37]">
                  Conferences &amp; Summits
                </Link>
              </li>
              <li>
                <Link to="/corporate" className="text-sm text-[#f7f3ec]/70 transition-colors hover:text-[#d4af37]">
                  Product Launches
                </Link>
              </li>
              <li>
                <Link to="/corporate" className="text-sm text-[#f7f3ec]/70 transition-colors hover:text-[#d4af37]">
                  Award Nights &amp; Galas
                </Link>
              </li>
              <li>
                <Link to="/corporate" className="text-sm text-[#f7f3ec]/70 transition-colors hover:text-[#d4af37]">
                  Exhibitions &amp; Activations
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Studio (Kolkata) */}
          <div className="lg:col-span-3">
            <h2 className="mb-6 text-[0.6rem] uppercase tracking-[0.3em] text-[#d4af37]">Studio</h2>
            <address className="space-y-1 text-sm not-italic leading-relaxed text-[#f7f3ec]/70">
              <span className="block">{siteData.address.street}</span>
              <span className="block">{siteData.address.locality}, Kolkata {siteData.address.postalCode}</span>
              <span className="block">West Bengal, India</span>
            </address>
            <div className="mt-6 space-y-2 text-sm">
              <a href={`tel:${siteData.phoneRaw}`} className="block text-[#f7f3ec]/70 hover:text-[#d4af37] transition-colors">
                {siteData.phone}
              </a>
              <a href={`mailto:${siteData.email}`} className="block text-[#f7f3ec]/70 hover:text-[#d4af37] transition-colors">
                {siteData.email}
              </a>
              <a
                href={`https://wa.me/91${siteData.whatsapp}?text=Hello%20Eventure%2C%20I%20would%20like%20to%20discuss%20an%20upcoming%20event.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#d4af37] hover:text-[#c89d42]"
              >
                WhatsApp us
              </a>
            </div>
            <p className="mt-5 text-xs tracking-wide text-[#a8a29a]">{siteData.openingHours} IST</p>
          </div>
        </div>

        {/* Rule separator */}
        <div className="rule mt-16" />

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-4 text-xs text-[#a8a29a] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Eventure. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase text-[0.6rem]">
            Luxury Weddings &nbsp;·&nbsp; Corporate Events &nbsp;·&nbsp; Bespoke Experiences
          </p>
        </div>
      </div>
    </footer>
  );
}
