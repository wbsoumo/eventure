import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteData } from '../data/siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    const nextState = !mobileMenuOpen;
    setMobileMenuOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : '';
  };

  const navLinks = [
    { name: 'Weddings', path: '/weddings', num: '02' },
    { name: 'Corporate', path: '/corporate', num: '03' },
    { name: 'Portfolio', path: '/portfolio', num: '04' },
    { name: 'Gallery', path: '/gallery', num: '05' },
    { name: 'About', path: '/about', num: '06' },
  ];

  return (
    <>
      <header
        id="site-header"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] ${
          scrolled
            ? 'bg-[#0a0a0b]/85 backdrop-blur-xl saturate-150 rounded-b-[1.75rem] border-b border-white/10 shadow-[0_20px_50px_-24px_rgba(0,0,0,.85)]'
            : 'bg-transparent'
        }`}
      >
        {/* Soft scrim gradient for un-scrolled header */}
        <div
          className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0a0b]/80 via-[#0a0a0b]/45 to-transparent transition-opacity duration-700 ${
            scrolled ? 'opacity-0' : 'opacity-100'
          }`}
          aria-hidden="true"
        />

        <div className="shell flex items-center justify-between py-4 lg:py-6 transition-all duration-700">
          {/* Logo */}
          <Link to="/" className="relative z-10 flex items-center gap-3 transition-opacity hover:opacity-85">
            <img
              src="/logos/eventure-logo.svg"
              alt="Eventure"
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`link-underline whitespace-nowrap text-[0.68rem] font-bold uppercase tracking-[0.24em] transition-colors ${
                    isActive ? 'text-[#d4af37] active' : 'text-[#f7f3ec]/90 hover:text-[#d4af37]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Enquire Button */}
          <div className="hidden items-center lg:flex">
            <Link to="/contact" className="btn btn-gold !px-6 !py-3 !text-[0.62rem]">
              Enquire
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={toggleMobileMenu}
          >
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-[#f7f3ec] transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
                  mobileMenuOpen ? 'translate-y-[6px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-[#f7f3ec] transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
                  mobileMenuOpen ? '-translate-y-[5px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-[#0a0a0b]/98 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex min-h-full flex-col justify-between gap-10 px-6 pb-12 pt-28">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            <Link
              to="/"
              className="group border-b border-[#2c2c31]/60 py-4 font-display text-4xl font-light text-[#f7f3ec] transition-colors hover:text-[#d4af37]"
            >
              <span className="text-[0.6rem] align-super font-sans tracking-[0.3em] text-[#d4af37]/70 mr-3">
                01
              </span>
              Home
            </Link>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="group border-b border-[#2c2c31]/60 py-4 font-display text-4xl font-light text-[#f7f3ec] transition-colors hover:text-[#d4af37]"
              >
                <span className="text-[0.6rem] align-super font-sans tracking-[0.3em] text-[#d4af37]/70 mr-3">
                  {link.num}
                </span>
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="group border-b border-[#2c2c31]/60 py-4 font-display text-4xl font-light text-[#f7f3ec] transition-colors hover:text-[#d4af37]"
            >
              <span className="text-[0.6rem] align-super font-sans tracking-[0.3em] text-[#d4af37]/70 mr-3">
                07
              </span>
              Contact
            </Link>
          </nav>

          <div className="space-y-5">
            <div className="rule" />
            <a
              href={`tel:${siteData.phoneRaw}`}
              className="block text-sm tracking-[0.15em] text-[#f7f3ec]/80 hover:text-[#d4af37] transition-colors"
            >
              {siteData.phone}
            </a>
            <a
              href={`mailto:${siteData.email}`}
              className="block text-sm tracking-[0.05em] text-[#f7f3ec]/60 hover:text-[#d4af37] transition-colors"
            >
              {siteData.email}
            </a>
            <p className="text-xs text-[#a8a29a] tracking-wider">
              {siteData.city}, West Bengal, India
            </p>
            <div className="flex gap-3 pt-2">
              <Link to="/contact" className="btn btn-gold flex-1 text-center">
                Enquire
              </Link>
              <a
                href={`https://wa.me/91${siteData.whatsapp}?text=Hello%20Eventure%2C%20I%20would%20like%20to%20discuss%20an%20upcoming%20event.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost flex-1 text-center"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
