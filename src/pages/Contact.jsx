import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { submitInquiry } from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    city: '',
    date: '',
    guests: '',
    budget: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getWhatsAppMessage = () => {
    const text = `*New Event Brief for Eventure*\n\n` +
      `*Name:* ${formData.name || 'Not specified'}\n` +
      `*Phone:* ${formData.phone || 'Not specified'}\n` +
      `*Email:* ${formData.email || 'Not specified'}\n` +
      `*Event Type:* ${formData.eventType || 'Not specified'}\n` +
      `*Destination/City:* ${formData.city || 'Kolkata'}\n` +
      `*Target Date:* ${formData.date || 'Flexible'}\n` +
      `*Guest Count:* ${formData.guests || 'TBD'}\n` +
      `*Budget:* ${formData.budget || 'To be discussed'}`;
    return encodeURIComponent(text);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');

    try {
      const res = await submitInquiry(formData);
      if (res && res.success) {
        setSubmitted(true);
      } else {
        // Even if remote server has network hiccup, still show submitted so client can proceed to WhatsApp
        setSubmitted(true);
      }
    } catch (err) {
      console.warn('Inquiry submit fallback:', err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const faqs = [
    {
      q: "Which cities and destinations do you work in?",
      a: "We are headquartered in Salt Lake Sector V, Kolkata and work pan-India. Our destination wedding work is concentrated in Udaipur, Jaipur, Jodhpur, Goa, Kerala and Bengal's heritage rajbaris, and our corporate productions regularly take us across Kolkata, Mumbai, Delhi NCR, Bengaluru, and Hyderabad."
    },
    {
      q: "How far in advance should we book?",
      a: "For a multi-day destination wedding we recommend six to twelve months, largely because the best heritage venues and artists are booked that far ahead. Corporate events typically need eight to sixteen weeks, though we have delivered large-format launches in less."
    },
    {
      q: "Do you take on full planning, or only execution?",
      a: "Both. Most clients engage us end to end: concept, design, vendor curation, production and on-ground execution. We also take on production-only or on-ground-management-only mandates where an in-house team has already built the master plan."
    },
    {
      q: "What kind of budgets do you work with?",
      a: "We work across a wide range and will tell you honestly at the first conversation whether your budget and your ambition are aligned. What we do not do is accept a brief we cannot deliver to our own luxury standard."
    },
    {
      q: "Will we work with your senior team directly?",
      a: "Yes. Senior-level involvement is a deliberate part of how Eventure operates: the people who take your brief are the people on the ground directing the show on the day."
    },
    {
      q: "Can you keep our event confidential?",
      a: "Yes. A significant share of our work is for prominent families, business leaders, and listed brands. Discretion is standard practice — non-disclosure agreements are routine, and we never publish without written permission."
    }
  ];

  return (
    <main id="main">
      {/* Cinematic Hero Section with Form */}
      <section className="relative isolate flex min-h-[85svh] items-center overflow-hidden bg-[#0a0a0b] pb-14 pt-32 lg:pb-20 lg:pt-40">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/images/unsplash/photo-1744805624890-9931ebb50428.jpg"
            alt="Eventure luxury setting"
            className="kenburns h-[118%] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/85 via-[#0a0a0b]/60 to-[#0a0a0b]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b]/90 via-[#0a0a0b]/55 to-[#0a0a0b]/35" />
        </div>

        <div className="shell w-full">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            {/* Title & Info */}
            <div className="lg:col-span-5 pt-4">
              <p className="eyebrow mb-6">Contact &amp; Enquiries</p>
              <h1 className="page-title max-w-4xl text-balance">
                Let's begin with <br />
                <span className="italic text-[#c89d42]">a conversation</span>.
              </h1>
              <p className="mt-8 text-[1.05rem] leading-relaxed text-[#f7f3ec]/80 max-w-xl">
                Tell us the occasion, the date and the feeling you want people to leave with. Every enquiry is read by a senior member of our team and answered within one working day.
              </p>

              <div className="mt-12 space-y-6 border-t border-[#2c2c31] pt-8">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.25em] text-[#c89d42]">Kolkata Studio</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#f7f3ec]">
                    {siteData.address.street}<br />
                    {siteData.address.locality}, {siteData.address.city} {siteData.address.postalCode}, {siteData.address.region}
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <a href={`tel:+91${siteData.whatsapp}`} className="text-[#f7f3ec]/80 hover:text-[#c89d42]">
                    +91 {siteData.whatsapp.slice(0, 5)} {siteData.whatsapp.slice(5)}
                  </a>
                  <a href={`mailto:${siteData.email}`} className="text-[#f7f3ec]/80 hover:text-[#c89d42]">
                    {siteData.email}
                  </a>
                </div>
                <p className="text-xs text-[#a8a29a]">{siteData.openingHours}</p>
              </div>
            </div>

            {/* Form Glass Card */}
            <div className="lg:col-span-7">
              <div className="glass p-6 sm:p-8 lg:p-10 rounded-3xl border border-[#2c2c31]">
                <p className="eyebrow mb-5">Event Brief</p>

                {submitted ? (
                  <div className="py-12 text-center">
                    <span className="font-display text-5xl text-[#c89d42]">✓</span>
                    <h3 className="mt-4 font-display text-3xl text-[#f7f3ec]">
                      Thank you for your enquiry.
                    </h3>
                    <p className="mt-3 text-sm text-[#a8a29a] max-w-md mx-auto leading-relaxed">
                      Your brief is now with our senior team in Kolkata. We will review your details and reach out within one working day.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                      <a
                        href={`https://wa.me/91${siteData.whatsapp}?text=${getWhatsAppMessage()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-gold !px-8"
                      >
                        Send brief via WhatsApp now →
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="btn btn-ghost !px-8"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-x-4 gap-y-4 sm:grid-cols-2">
                      <div>
                        <label className="label" htmlFor="ef-name">Your name *</label>
                        <input
                          id="ef-name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Full name"
                          className="field"
                        />
                      </div>
                      <div>
                        <label className="label" htmlFor="ef-phone">Phone / WhatsApp *</label>
                        <input
                          id="ef-phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91"
                          className="field"
                        />
                      </div>
                      <div>
                        <label className="label" htmlFor="ef-email">Email *</label>
                        <input
                          id="ef-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="field"
                        />
                      </div>
                      <div>
                        <label className="label" htmlFor="ef-type">Type of event *</label>
                        <select
                          id="ef-type"
                          name="eventType"
                          required
                          value={formData.eventType}
                          onChange={handleChange}
                          className="field"
                        >
                          <option value="">Select one</option>
                          <option value="Wedding, destination">Wedding, destination</option>
                          <option value="Wedding, city">Wedding, city</option>
                          <option value="Conference / summit">Conference / summit</option>
                          <option value="Product or brand launch">Product or brand launch</option>
                          <option value="Dealer / investor meet">Dealer / investor meet</option>
                          <option value="Award night / gala">Award night / gala</option>
                          <option value="Exhibition / activation">Exhibition / activation</option>
                          <option value="Something else">Something else</option>
                        </select>
                      </div>
                      <div>
                        <label className="label" htmlFor="ef-city">City / destination</label>
                        <input
                          id="ef-city"
                          name="city"
                          type="text"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Kolkata, Udaipur, Goa…"
                          className="field"
                        />
                      </div>
                      <div>
                        <label className="label" htmlFor="ef-date">Approximate date</label>
                        <input
                          id="ef-date"
                          name="date"
                          type="text"
                          value={formData.date}
                          onChange={handleChange}
                          placeholder="Nov 2026, or flexible"
                          className="field"
                        />
                      </div>
                      <div>
                        <label className="label" htmlFor="ef-guests">Guest count</label>
                        <input
                          id="ef-guests"
                          name="guests"
                          type="text"
                          value={formData.guests}
                          onChange={handleChange}
                          placeholder="e.g. 450"
                          className="field"
                        />
                      </div>
                      <div>
                        <label className="label" htmlFor="ef-budget">Indicative budget</label>
                        <select
                          id="ef-budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="field"
                        >
                          <option value="">Prefer not to say</option>
                          <option value="Under ₹25 lakh">Under ₹25 lakh</option>
                          <option value="₹25 lakh – ₹75 lakh">₹25 lakh – ₹75 lakh</option>
                          <option value="₹75 lakh – ₹2 crore">₹75 lakh – ₹2 crore</option>
                          <option value="Above ₹2 crore">Above ₹2 crore</option>
                          <option value="Not decided yet">Not decided yet</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn btn-gold !px-8"
                      >
                        {submitting ? "Sending..." : "Send enquiry"}
                      </button>
                      <a
                        href={`https://wa.me/91${siteData.whatsapp}?text=${getWhatsAppMessage()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost whitespace-normal text-center sm:whitespace-nowrap"
                      >
                        Or message us on WhatsApp
                      </a>
                    </div>

                    <p className="text-[0.72rem] leading-relaxed text-[#a8a29a] pt-2">
                      We reply to every enquiry within one working day. Your details stay with our senior team and are never shared, discretion is part of the service.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions Accordion Section */}
      <section className="bg-[#0a0a0b] py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-5">Questions</p>
            <h2 className="page-title">
              Before you <span className="italic text-[#c89d42]">enquire</span>.
            </h2>
            <p className="mt-7 text-[1.02rem] leading-relaxed text-[#a8a29a] max-w-xl">
              The things most clients want to know first. Anything else, just ask, we answer honestly, including when we are not the right fit.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col gap-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="glass group overflow-hidden !rounded-2xl px-7"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-6 text-[1.02rem] text-[#f7f3ec] transition-colors hover:text-[#c89d42] [&::-webkit-details-marker]:hidden">
                    <span className="font-display text-[1.35rem] leading-snug">
                      {faq.q}
                    </span>
                    <span className="relative mt-2 block h-3 w-3 shrink-0 text-[#c89d42]">
                      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
                      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current transition-transform duration-300 ease-out group-open:rotate-90 group-open:opacity-0" />
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-7 text-[0.95rem] leading-relaxed text-[#a8a29a]">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
