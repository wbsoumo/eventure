import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteData } from '../data/siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
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
          mobileMenuOpen
            ? 'bg-[#0a0a0b]'
            : scrolled
            ? 'bg-[#0a0a0b]/92 backdrop-blur-2xl saturate-150 rounded-b-[1.75rem] border-b border-white/10 shadow-[0_20px_50px_-24px_rgba(0,0,0,.95)]'
            : 'bg-transparent'
        }`}
      >
        {/* Soft black scrim & blur gradient across top */}
        <div
          className={`site-header-scrim pointer-events-none absolute inset-0 -z-10 transition-opacity duration-700 ${
            scrolled || mobileMenuOpen ? 'opacity-0' : 'opacity-100'
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
                  className={`link-underline whitespace-nowrap text-[0.68rem] font-bold uppercase tracking-[0.24em] transition-colors drop-shadow-md ${
                    isActive ? 'text-[#d4af37] active' : 'text-[#f7f3ec] hover:text-[#d4af37]'
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

          {/* 3-Line Mobile Hamburger Menu Toggle Button */}
          <button
            type="button"
            className={`hamburger-btn lg:hidden ${mobileMenuOpen ? 'is-active' : ''}`}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={toggleMobileMenu}
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer on Proper Solid Luxury Black with Staggered Reveal Animation */}
      <div
        id="mobile-menu"
        className={`mobile-menu-drawer lg:hidden ${
          mobileMenuOpen ? 'is-open' : 'is-closed'
        }`}
      >
        <div className="flex min-h-full flex-col justify-between gap-10 px-6 pb-12 pt-28">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {/* 01 Home */}
            <Link
              to="/"
              style={{ animationDelay: '60ms' }}
              className={`group border-b border-[#2c2c31]/60 py-4 font-display text-4xl font-light text-[#f7f3ec] transition-colors hover:text-[#d4af37] ${
                mobileMenuOpen ? 'mobile-reveal-item' : ''
              }`}
            >
              <span className="text-[0.6rem] align-super font-sans tracking-[0.3em] text-[#d4af37]/80 mr-3">
                01
              </span>
              Home
            </Link>

            {/* Nav links 02 to 06 */}
            {navLinks.map((link, idx) => (
              <Link
                key={link.path}
                to={link.path}
                style={{ animationDelay: `${120 + idx * 55}ms` }}
                className={`group border-b border-[#2c2c31]/60 py-4 font-display text-4xl font-light text-[#f7f3ec] transition-colors hover:text-[#d4af37] ${
                  mobileMenuOpen ? 'mobile-reveal-item' : ''
                }`}
              >
                <span className="text-[0.6rem] align-super font-sans tracking-[0.3em] text-[#d4af37]/80 mr-3">
                  {link.num}
                </span>
                {link.name}
              </Link>
            ))}

            {/* 07 Contact */}
            <Link
              to="/contact"
              style={{ animationDelay: '420ms' }}
              className={`group border-b border-[#2c2c31]/60 py-4 font-display text-4xl font-light text-[#f7f3ec] transition-colors hover:text-[#d4af37] ${
                mobileMenuOpen ? 'mobile-reveal-item' : ''
              }`}
            >
              <span className="text-[0.6rem] align-super font-sans tracking-[0.3em] text-[#d4af37]/80 mr-3">
                07
              </span>
              Contact
            </Link>
          </nav>

          <div
            style={{ animationDelay: '480ms' }}
            className={`space-y-5 ${mobileMenuOpen ? 'mobile-reveal-item' : ''}`}
          >
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
