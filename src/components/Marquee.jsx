import React from 'react';
import { clientsData } from '../data/clientsData';

export default function Marquee() {
  // We duplicate the clients array multiple times to ensure continuous seamless infinite loop
  const duplicatedClients = [...clientsData, ...clientsData, ...clientsData, ...clientsData];

  return (
    <section className="border-y border-[#d4af37]/25 bg-[#121215]/80 py-12" aria-label="Selected clients">
      <p className="mb-9 text-center text-[0.65rem] font-medium uppercase tracking-[0.4em] text-[#d4af37]">
        Trusted by India’s leading brands &amp; media houses
      </p>

      <div className="marquee relative overflow-hidden">
        <div className="marquee-track items-center gap-6 sm:gap-16 flex">
          {duplicatedClients.map((client, idx) => (
            <React.Fragment key={idx}>
              <div className="flex shrink-0 items-center gap-6 sm:gap-14">
                <div className="flex h-12 min-w-[124px] items-center justify-center rounded-xl bg-white px-4 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 sm:h-14 sm:min-w-[170px] sm:px-6">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-auto max-h-8 w-auto max-w-[116px] object-contain sm:max-h-10 sm:max-w-[180px]"
                    loading="lazy"
                  />
                </div>
                <span className="text-[#d4af37]/40 text-xs">◆</span>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Fades for smooth edge masking */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#0a0a0b] to-transparent sm:w-20 lg:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#0a0a0b] to-transparent sm:w-20 lg:w-28" />
      </div>
    </section>
  );
}
