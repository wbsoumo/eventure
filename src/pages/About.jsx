import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee';
import { siteData } from '../data/siteData';

export default function About() {
  const differences = [
    {
      title: "A pan-India network money can’t buy",
      desc: "Deep, long-standing relationships with India’s premier venues, caterers, décor houses, production partners and artists, giving you access, negotiating strength and quality assurance a newcomer simply cannot offer."
    },
    {
      title: "White-glove hospitality",
      desc: "From arrival logistics and accommodation to in-event hospitality teams, every guest touchpoint is managed with five-star precision. How your guests feel is the truest measure of a great event."
    },
    {
      title: "Senior-level involvement",
      desc: "You work with our senior team directly, from the first brief to the final farewell. No hand-offs to junior coordinators, no diluted attention."
    },
    {
      title: "Flawless execution, every time",
      desc: "We plan for every contingency, rehearse every detail and coordinate in real time, so the most complex production appears completely effortless to the people experiencing it."
    },
    {
      title: "International standards, an Indian soul",
      desc: "A design sensibility drawn from global luxury benchmarks, interpreted through a distinctly Indian understanding of celebration, ritual and warmth."
    },
    {
      title: "Discretion and trust",
      desc: "Many of our clients are high-profile families and public brands. We protect their privacy as carefully as we protect the quality of their event."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "We Listen",
      desc: "A single conversation to understand the vision, the scale, the budget and, most importantly, the feeling you want people to leave with."
    },
    {
      num: "02",
      title: "We Design",
      desc: "Concepts, themes, floor plans, production plans and timelines. You see the event before it exists, down to the last centrepiece."
    },
    {
      num: "03",
      title: "We Execute",
      desc: "Our senior team takes over the ground. Vendors, rehearsals, contingencies and real-time show calling, so you never have to chase anything."
    },
    {
      num: "04",
      title: "We Obsess",
      desc: "We stay until the last guest leaves. The details at the end matter as much as the grand reveal at the beginning."
    }
  ];

  return (
    <main id="main">
      {/* Cinematic Hero Section with Backdrop */}
      <section className="relative isolate flex min-h-[72svh] items-end overflow-hidden bg-[#0a0a0b] pb-16 pt-40 lg:min-h-[80svh] lg:pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/images/unsplash/photo-1519167758481-83f550bb49b3.jpg"
            alt="Eventure Luxury Event House"
            className="kenburns h-[118%] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/85 via-[#0a0a0b]/55 to-[#0a0a0b]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b]/90 via-[#0a0a0b]/45 to-transparent" />
        </div>

        <div className="shell w-full">
          <div>
            <p className="eyebrow mb-6">About Eventure</p>
            <h1 className="page-title max-w-4xl text-balance">
              Equal parts <span className="italic text-[#c89d42]">art and precision</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-[1.05rem] leading-relaxed text-[#f7f3ec]/80">
              A luxury event house headquartered in Kolkata, creating extraordinary weddings, corporate showcases and bespoke celebrations across India.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#0a0a0b] py-16 lg:py-24">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">Our story</p>
            <h2 className="page-title">
              Doing better, <br />
              <span className="italic text-[#c89d42]">not more</span>.
            </h2>
            <div className="relative mt-12 overflow-hidden rounded-2xl">
              <img
                src="/images/unsplash/photo-1519225421980-715cb0215aed.jpg"
                alt="An Eventure tablescape set before guests arrive"
                className="aspect-4/5 w-full object-cover rounded-2xl"
              />
              <span className="pointer-events-none absolute inset-4 rounded-xl border border-white/15" />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-[1.02rem] leading-relaxed text-[#a8a29a]">
            <p className="text-[1.15rem] text-[#f7f3ec]/90">
              Eventure was built on a simple belief: great events are about more than what people see. They’re about how everything comes together.
            </p>
            <p>
              Today, we are a premier event house creating luxury weddings, destination weddings, corporate events and celebrations across borders. From creative direction and event design to production, hospitality and on-ground execution, we bring every moving part together under one roof.
            </p>
            <p>
              Over the years, we’ve learned that no two celebrations should feel the same. Our work is shaped around the people, the place and the story behind every event, while our team takes care of everything happening behind the scenes.
            </p>
            <p>
              But our work has never been just about producing beautiful events. It’s about the relationship we build along the way.
            </p>
            <p>
              We step in as planners, problem-solvers, collaborators and, somewhere between the first meeting and the final goodbye, we become your family.
            </p>

            <div className="rule my-10" />

            <h3 className="font-display text-[1.9rem] leading-tight text-[#f7f3ec]">Discretion &amp; trust</h3>
            <p>
              Many of our clients are high-profile families, senior leaders and public brands, and they rely on us for more than creativity, they rely on our discretion. We treat every engagement with confidentiality and care, protecting our clients' privacy as carefully as we protect the quality of their event.
            </p>
            <p>
              It is one of the quiet reasons India's most discerning hosts return to us, and recommend us, again and again.
            </p>

            <div className="rule my-10" />

            <h3 className="font-display text-[1.9rem] leading-tight text-[#f7f3ec]">Our promise</h3>
            <p>
              We measure success not in events delivered, but in moments remembered, the gasp as the doors open, the standing ovation, the message the next morning that simply says <em className="not-italic text-[#c89d42]">"thank you, it was perfect."</em> That is the standard we hold ourselves to, whether we are planning a wedding of a lifetime or a summit that shapes a brand's year.
            </p>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* The Eventure Difference */}
      <section className="bg-[#121215] py-20 lg:py-28">
        <div className="shell">
          <div className="mb-14 mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-5">The Eventure difference</p>
            <h2 className="page-title">
              Why hosts <span className="italic text-[#c89d42]">come back</span>.
            </h2>
          </div>

          <div className="grid gap-x-14 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {differences.map((diff, idx) => (
              <div key={idx}>
                <span className="block h-px w-12 bg-[#c89d42]" aria-hidden="true" />
                <h3 className="mt-6 font-display text-[1.6rem] leading-tight text-[#f7f3ec]">
                  {diff.title}
                </h3>
                <p className="mt-4 text-[0.93rem] leading-relaxed text-[#a8a29a]">
                  {diff.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#0a0a0b] py-20 lg:py-24">
        <div className="shell">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow mb-5">Capabilities</p>
            <h2 className="page-title">
              A full-service <span className="italic text-[#c89d42]">event house</span>.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {siteData.capabilities.map((cap) => (
              <div key={cap.num} className="glass glass-hover p-8 rounded-2xl">
                <span className="text-xs text-[#c89d42] font-semibold">{cap.num}</span>
                <h3 className="mt-3 font-display text-[1.35rem] leading-tight text-[#f7f3ec]">{cap.title}</h3>
                <p className="mt-3 text-[0.88rem] leading-relaxed text-[#a8a29a]">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section id="approach" className="bg-[#121215] py-20 lg:py-28">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="eyebrow mb-5">How we work</p>
            <h2 className="page-title">
              A simple, proven <span className="italic text-[#c89d42]">journey</span>.
            </h2>
            <p className="mt-7 text-[1.02rem] leading-relaxed text-[#a8a29a] max-w-xl">
              Every Eventure project moves through the same four stages, the difference is how much of it you never have to see.
            </p>
          </div>

          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((st) => (
              <li key={st.num} className="glass glass-hover group relative p-8 lg:p-10 rounded-2xl">
                <span className="font-display text-5xl text-[#c89d42]/30 transition-colors duration-500 group-hover:text-[#c89d42]/70">
                  {st.num}
                </span>
                <h3 className="mt-6 font-display text-2xl text-[#f7f3ec]">{st.title}</h3>
                <p className="mt-4 text-[0.93rem] leading-relaxed text-[#a8a29a]">{st.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Final Atmospheric CTA Section */}
      <section className="relative isolate overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/images/unsplash/photo-1768508950319-0e4b01063fbe.jpg"
            alt="Eventure luxury setup"
            className="kenburns h-[118%] w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0a0b]/80" />
        </div>

        <div className="shell text-center">
          <h2 className="page-title mx-auto max-w-4xl text-balance">
            If you are planning something that <span className="italic text-[#c89d42]">truly matters</span>, we would be honoured to bring it to life.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-[1.02rem] leading-relaxed text-[#f7f3ec]/80">
            Tell us the date, the city and the feeling you want people to leave with. We will take it from there.
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
              WhatsApp us
            </a>
          </div>
          <p className="mt-8 text-[0.68rem] uppercase tracking-[0.3em] text-[#a8a29a]">
            <a href={`tel:+91${siteData.whatsapp}`} className="link-underline hover:text-[#c89d42]">
              +91 {siteData.whatsapp.slice(0, 5)} {siteData.whatsapp.slice(5)}
            </a>
            <span className="mx-3 text-[#c89d42]/50">·</span>
            <a href={`mailto:${siteData.email}`} className="link-underline hover:text-[#c89d42]">
              {siteData.email}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
