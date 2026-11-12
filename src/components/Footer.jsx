import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="border-t border-[#2c2c31]/80 bg-[#0a0a0b] pt-16 pb-12 text-[#a8a29a]">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="/logos/eventure-logo.svg"
                alt="Eventure"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-[#a8a29a]">
              Eventure is a luxury event management house based in Kolkata. For over a decade, we have created landmark destination weddings, flagship corporate summits, and bespoke celebrations across India and abroad.
            </p>
            <div className="pt-2 text-xs uppercase tracking-[0.2em] text-[#d4af37]">
              Headquartered in Kolkata · Operating Pan India & Global
            </div>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {/* Column 1: Experiences */}
            <div className="space-y-4">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#f7f3ec]">
                Experiences
              </p>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/weddings" className="transition-colors hover:text-[#d4af37]">
                    Destination Weddings
                  </Link>
                </li>
                <li>
                  <Link to="/weddings" className="transition-colors hover:text-[#d4af37]">
                    Luxury City Weddings
                  </Link>
                </li>
                <li>
                  <Link to="/corporate" className="transition-colors hover:text-[#d4af37]">
                    Conferences & Summits
                  </Link>
                </li>
                <li>
                  <Link to="/corporate" className="transition-colors hover:text-[#d4af37]">
                    Brand & Product Reveals
                  </Link>
                </li>
                <li>
                  <Link to="/corporate" className="transition-colors hover:text-[#d4af37]">
                    Award Nights & Galas
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Navigation */}
            <div className="space-y-4">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#f7f3ec]">
                Navigation
              </p>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/about" className="transition-colors hover:text-[#d4af37]">
                    About Our House
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="transition-colors hover:text-[#d4af37]">
                    Signature Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="transition-colors hover:text-[#d4af37]">
                    Visual Archive
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="transition-colors hover:text-[#d4af37]">
                    Start an Enquiry
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Details */}
            <div className="col-span-2 sm:col-span-1 space-y-4">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-[#f7f3ec]">
                Kolkata Studio
              </p>
              <div className="space-y-2.5 text-sm">
                <p className="text-xs leading-relaxed text-[#a8a29a]">
                  {siteData.address.formatted}
                </p>
                <p>
                  <a
                    href={`tel:${siteData.phoneRaw}`}
                    className="block text-[#f7f3ec] hover:text-[#d4af37] transition-colors"
                  >
                    {siteData.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`https://wa.me/91${siteData.whatsapp}?text=Hello%20Eventure%2C%20I%20would%20like%20to%20discuss%20an%20upcoming%20event.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#25d366] hover:underline"
                  >
                    <span>WhatsApp: +91 {siteData.whatsapp}</span>
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${siteData.email}`}
                    className="block text-[#a8a29a] hover:text-[#d4af37] transition-colors"
                  >
                    {siteData.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Golden rule separator */}
        <div className="rule my-12" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-[#a8a29a]/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Eventure. All rights reserved.</p>
          <p className="flex items-center gap-6">
            <span>Website: <a href="https://myeventure.in/" className="text-[#d4af37] hover:underline">myeventure.in</a></span>
            <span>·</span>
            <span>Kolkata, India</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
