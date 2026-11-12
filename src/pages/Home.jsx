import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee';
import { siteData } from '../data/siteData';
import { portfolioData } from '../data/portfolioData';
import { faqsData } from '../data/faqsData';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const featuredPortfolio = portfolioData.slice(0, 3);

  return (
    <main id="main">
      {/* Hero Section */}
      <section className="hero relative flex w-full flex-col overflow-hidden bg-[#0a0a0b]">
        {/* Background Poster Image */}
        <div className="absolute inset-0">
          <img
            src="/images/unsplash/photo-1745682595597-8932b7f12169.jpg"
            alt="Eventure Luxury Celebration"
            className="kenburns hidden h-full w-full object-cover md:block"
          />
          <img
            src="/images/wedding-ceremony-confetti.webp"
            alt="Eventure Wedding Celebration"
            className="kenburns h-full w-full object-cover md:hidden"
          />
        </div>

        {/* Cinematic Grading Scrims */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/75 via-[#0a0a0b]/55 to-[#0a0a0b]/95 lg:from-[#0a0a0b]/70 lg:via-[#0a0a0b]/25 lg:to-[#0a0a0b]/90"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0a0b]/55 via-[#0a0a0b]/45 to-[#0a0a0b]/35 lg:from-[#0a0a0b]/85 lg:via-[#0a0a0b]/40 lg:to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_30%,transparent_45%,rgba(10,10,11,.72)_100%)]"
          aria-hidden="true"
        />

        {/* Hero Content */}
        <div className="hero-body relative z-10 flex flex-1 items-center">
          <div className="shell w-full">
            <div className="max-w-4xl">
              <p className="eyebrow hero-eyebrow">
                Luxury Weddings &nbsp;·&nbsp; Corporate Events &nbsp;·&nbsp; Pan India / Global
              </p>

              <h1 className="display hero-title text-[#f7f3ec]">
                <span className="line-mask block">
                  <span>Where vision</span>
                </span>
                <span className="line-mask block">
                  <span className="italic text-[#c89d42]">becomes an</span>
                </span>
                <span className="line-mask block">
                  <span>experience.</span>
                </span>
              </h1>

              <p className="hero-copy max-w-xl text-[1.05rem] leading-relaxed text-[#f7f3ec]/75">
                For more than a decade, India’s most discerning families and brands have trusted
                Eventure with the occasions that truly matter — designed with ambition, executed
                without a single visible seam.
              </p>

              <div className="hero-actions flex flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="btn btn-gold grow basis-full !px-6 sm:grow-0 sm:basis-auto sm:!px-[2.1rem]"
                >
                  Start an enquiry
                </Link>
                <Link
                  to="/portfolio"
                  className="btn btn-ghost grow basis-full !px-6 min-[375px]:basis-[45%] sm:grow-0 sm:basis-auto sm:!px-[2.1rem]"
                >
                  View our work
                </Link>
                <a
                  href={`https://wa.me/91${siteData.whatsapp}?text=Hello%20Eventure%2C%20I%20would%20like%20to%20discuss%20an%20upcoming%20event.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost grow basis-full !px-6 min-[375px]:basis-[45%] sm:hidden"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rail */}
        <div className="hero-rail relative z-10 shrink-0">
          <div className="shell">
            <div className="flex items-end justify-between border-t border-[#f7f3ec]/12 py-5 pr-16 sm:py-6 sm:pr-0">
              <div className="flex items-end gap-7 sm:gap-12">
                <div>
                  <p className="font-display text-2xl text-[#d4af37] sm:text-3xl">Pan India / Global</p>
                  <p className="mt-1 text-[0.54rem] uppercase tracking-[0.24em] text-[#a8a29a] sm:text-[0.58rem] sm:tracking-[0.28em]">
                    Reach
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl text-[#d4af37] sm:text-3xl">Kolkata</p>
                  <p className="mt-1 text-[0.54rem] uppercase tracking-[0.24em] text-[#a8a29a] sm:text-[0.58rem] sm:tracking-[0.28em]">
                    Headquarters
                  </p>
                </div>
              </div>

              <a
                href="#story"
                className="group ml-auto mr-12 hidden items-center gap-4 text-[0.58rem] uppercase tracking-[0.3em] text-[#a8a29a] transition-colors hover:text-[#d4af37] sm:flex"
              >
                Scroll
                <span className="scroll-cue relative block h-10 w-px overflow-hidden bg-[#f7f3ec]/20">
                  <span className="absolute inset-x-0 top-0 h-1/2 bg-[#d4af37] animate-[scrollcue_2s_infinite]" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee />

      <div className="shell"><div className="rule" /></div>

      {/* Our Story Section */}
      <section id="story" className="scroll-mt-24 bg-[#0a0a0b] pt-24 pb-14 lg:pt-36 lg:pb-20">
        <div className="shell grid gap-8 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div>
              <p className="eyebrow mb-5">Our story</p>
              <h2 className="display text-balance text-[clamp(2.1rem,4.6vw,3.6rem)]">
                We exist for the occasions <span className="italic text-[#c89d42]">that matter</span>.
              </h2>
            </div>
            <p className="mt-4 font-display text-2xl text-[#d4af37] sm:text-3xl">
              Headquartered in Kolkata · Operating Pan India & Globally
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6 text-[1.02rem] leading-relaxed text-[#a8a29a]">
            <p className="text-[1.15rem] text-[#f7f3ec]/90">
              In a world where anyone can organise an event, we exist for those who expect more.
            </p>
            <p>
              Eventure was built on a simple belief: great events are about more than what people see.
              They’re about how everything comes together.
            </p>
            <p>
              Today, we are a global luxury event house creating landmark destination weddings,
              high-stakes corporate summits, and bespoke celebrations across borders. From creative direction
              and spatial design to technical production, VIP hospitality, and on-ground execution, we bring
              every moving part together under one roof.
            </p>
            <p>
              Over the years, we’ve learned that no two celebrations should feel the same. Our work is
              shaped around the people, the place, and the story behind every occasion, while our seasoned team
              takes meticulous care of everything happening behind the scenes.
            </p>
            <p>
              We step in as visionary planners, problem-solvers, and collaborators — and somewhere between
              the first meeting and the final standing ovation, we become family.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do: Two Great Worlds */}
      <section className="bg-[#121215] pt-14 pb-16 lg:pt-20 lg:pb-20">
        <div className="shell">
          <div className="mb-14 mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-5">What we do</p>
            <h2 className="display text-balance text-[clamp(2.1rem,4.6vw,3.6rem)]">
              Two great worlds, <span className="italic text-[#c89d42]">one standard</span>.
            </h2>
            <p className="mt-7 text-[1.02rem] leading-relaxed text-[#a8a29a] mx-auto max-w-2xl">
              We are, at heart, storytellers and producers, equally at home in a heritage palace and on a 2,000-seat corporate stage.
            </p>
          </div>

          {/* Weddings Block */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative overflow-hidden">
              <div className="aspect-4/5 overflow-hidden rounded-2xl lg:aspect-3/4">
                <img
                  src="/images/petal-shower-couple.webp"
                  alt="A petal shower at a wedding produced by Eventure"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <span className="pointer-events-none absolute inset-4 rounded-xl border border-[#f7f3ec]/15" aria-hidden="true" />
            </div>

            <div>
              <p className="eyebrow mb-6">Weddings</p>
              <h2 className="page-title">
                Luxury &amp; destination <br />weddings
              </h2>
              <p className="mt-7 text-[1rem] leading-relaxed text-[#a8a29a]">
                Celebrations that feel deeply personal, from intimate heritage ceremonies in Kolkata to multi-day palace spectaculars in Udaipur, Jaipur, Goa, Kerala, and beyond. Every ritual and every reception unfolds exactly as imagined.
              </p>

              <ul className="mt-9 space-y-3.5">
                <li className="flex items-baseline gap-4 text-[0.95rem] text-[#f7f3ec]/80">
                  <span className="mt-1 h-px w-5 shrink-0 bg-[#d4af37]" aria-hidden="true" />
                  Concept, design, décor and floral artistry
                </li>
                <li className="flex items-baseline gap-4 text-[0.95rem] text-[#f7f3ec]/80">
                  <span className="mt-1 h-px w-5 shrink-0 bg-[#d4af37]" aria-hidden="true" />
                  Venue and vendor curation across India & internationally
                </li>
                <li className="flex items-baseline gap-4 text-[0.95rem] text-[#f7f3ec]/80">
                  <span className="mt-1 h-px w-5 shrink-0 bg-[#d4af37]" aria-hidden="true" />
                  Entertainment, celebrity artists, and white-glove hospitality
                </li>
                <li className="flex items-baseline gap-4 text-[0.95rem] text-[#f7f3ec]/80">
                  <span className="mt-1 h-px w-5 shrink-0 bg-[#d4af37]" aria-hidden="true" />
                  Flawless on-ground coordination across every function
                </li>
              </ul>

              <Link to="/weddings" className="btn btn-ghost mt-11">
                Explore weddings
              </Link>
            </div>
          </div>

          <div className="rule my-20 lg:my-28" />

          {/* Corporate Block */}
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative overflow-hidden lg:order-2">
              <div className="aspect-4/5 overflow-hidden rounded-2xl lg:aspect-3/4">
                <img
                  src="/images/pudhari-maha-summit-audience.webp"
                  alt="Corporate summit produced by Eventure"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <span className="pointer-events-none absolute inset-4 rounded-xl border border-[#f7f3ec]/15" aria-hidden="true" />
            </div>

            <div className="lg:order-1">
              <p className="eyebrow mb-6">Corporate</p>
              <h2 className="page-title">
                Corporate &amp; <br />brand events
              </h2>
              <p className="mt-7 text-[1rem] leading-relaxed text-[#a8a29a]">
                Conferences, product launches, dealer and investor meets, award nights, exhibitions and experiential activations — produced for leading corporations, banking and financial institutions, and national media houses.
              </p>

              <ul className="mt-9 space-y-3.5">
                <li className="flex items-baseline gap-4 text-[0.95rem] text-[#f7f3ec]/80">
                  <span className="mt-1 h-px w-5 shrink-0 bg-[#d4af37]" aria-hidden="true" />
                  Large-format conference and summit production
                </li>
                <li className="flex items-baseline gap-4 text-[0.95rem] text-[#f7f3ec]/80">
                  <span className="mt-1 h-px w-5 shrink-0 bg-[#d4af37]" aria-hidden="true" />
                  Broadcast-grade stage, AV, LED walls, and show calling
                </li>
                <li className="flex items-baseline gap-4 text-[0.95rem] text-[#f7f3ec]/80">
                  <span className="mt-1 h-px w-5 shrink-0 bg-[#d4af37]" aria-hidden="true" />
                  Delegate, press, and VIP protocol management
                </li>
                <li className="flex items-baseline gap-4 text-[0.95rem] text-[#f7f3ec]/80">
                  <span className="mt-1 h-px w-5 shrink-0 bg-[#d4af37]" aria-hidden="true" />
                  Measurable brand impact, strictly on time and on budget
                </li>
              </ul>

              <Link to="/corporate" className="btn btn-ghost mt-11">
                Explore corporate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="shell"><div className="rule" /></div>

      {/* Full-Service Capability */}
      <section className="relative overflow-hidden bg-[#0a0a0b] pt-16 pb-24 lg:pt-20 lg:pb-32">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow mb-5">Full-service capability</p>
            <h2 className="display text-balance text-[clamp(2.1rem,4.6vw,3.6rem)]">
              From a single conversation <span className="italic text-[#c89d42]">to a standing ovation</span>.
            </h2>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {siteData.capabilities.map((cap) => (
              <div key={cap.num} className="glass glass-hover group p-8">
                <span className="block text-[0.56rem] uppercase tracking-[0.3em] text-[#d4af37]/60">
                  {cap.num}
                </span>
                <h3 className="mt-5 font-display text-[1.4rem] leading-tight text-[#f7f3ec]">
                  {cap.title}
                </h3>
                <p className="mt-3 text-[0.88rem] leading-relaxed text-[#a8a29a]">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works Showcase */}
      <section className="bg-[#121215] py-20">
        <div className="shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-14">
            <div>
              <p className="eyebrow mb-4">Selected Portfolio</p>
              <h2 className="page-title">
                Signature <span className="italic text-[#c89d42]">productions</span>.
              </h2>
            </div>
            <Link to="/portfolio" className="btn btn-ghost">
              View all work
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredPortfolio.map((item) => (
              <div key={item.id} className="group overflow-hidden rounded-2xl bg-[#1b1b1f] border border-[#2c2c31]">
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between text-xs text-[#d4af37]">
                    <span className="uppercase tracking-[0.2em]">{item.category}</span>
                    <span>{item.location}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl text-[#f7f3ec]">{item.title}</h3>
                  <p className="mt-3 text-sm text-[#a8a29a] line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  <Link
                    to="/portfolio"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37] hover:underline"
                  >
                    View Project Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-[#0a0a0b] py-20 lg:py-28">
        <div className="shell max-w-4xl">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Frequently Asked Questions</p>
            <h2 className="page-title">
              Everything you need to <span className="italic text-[#c89d42]">know</span>.
            </h2>
          </div>

          <div className="divide-y divide-[#2c2c31]">
            {faqsData.map((faq, idx) => (
              <div key={idx} className="py-6">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between text-left font-display text-xl text-[#f7f3ec] hover:text-[#d4af37] transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="ml-4 text-2xl font-light text-[#d4af37]">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {openFaq === idx && (
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-[#a8a29a] transition-all">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="relative overflow-hidden bg-[#121215] py-24 text-center">
        <div className="shell max-w-3xl">
          <p className="eyebrow mb-4">Begin Your Journey</p>
          <h2 className="page-title">
            If you are planning something that <br />
            <span className="italic text-[#c89d42]">truly matters</span>, we would be honoured to bring it to life.
          </h2>
          <p className="mt-6 text-base text-[#a8a29a]">
            Tell us the date, the city, and the feeling you want people to leave with. We will take it from there.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-gold !px-8">
              Start an enquiry
            </Link>
            <a
              href={`https://wa.me/91${siteData.whatsapp}?text=Hello%20Eventure%2C%20I%20would%20like%20to%20discuss%20an%20upcoming%20event.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost !px-8"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
