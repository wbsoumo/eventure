import React, { useState } from 'react';
import { siteData } from '../data/siteData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Wedding, destination',
    city: 'Kolkata',
    date: '',
    guests: '',
    budget: '₹25 lakh – ₹75 lakh',
    company: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate clean form handling
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const getWhatsAppMessage = () => {
    const text = `*New Enquiry for Eventure*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Event Type:* ${formData.eventType}\n*Destination/City:* ${formData.city}\n*Target Date:* ${formData.date || 'TBD'}\n*Guests:* ${formData.guests || 'TBD'}\n*Budget:* ${formData.budget}\n*Notes:* ${formData.message || 'None'}`;
    return encodeURIComponent(text);
  };

  return (
    <main id="main" className="pt-24 lg:pt-32">
      {/* Hero Section */}
      <section className="bg-[#0a0a0b] pb-16">
        <div className="shell">
          <div className="max-w-4xl">
            <p className="eyebrow mb-5">Contact &amp; Enquiries</p>
            <h1 className="page-title">
              Let’s begin with <br />
              <span className="italic text-[#c89d42]">a conversation</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-[1.08rem] leading-relaxed text-[#a8a29a]">
              Tell us the date, the city, and the feeling you want people to leave with. We reply to every enquiry within one working day.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-[#121215] py-20">
        <div className="shell">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="glass p-8 sm:p-12 rounded-3xl border border-[#2c2c31]">
                {submitted ? (
                  <div className="py-12 text-center">
                    <span className="text-4xl text-[#d4af37]">✓</span>
                    <h3 className="mt-4 font-display text-3xl text-[#f7f3ec]">
                      Thank you for your enquiry.
                    </h3>
                    <p className="mt-3 text-sm text-[#a8a29a] max-w-md mx-auto">
                      Our senior events team in Kolkata has received your details. We will review your brief and reach out within 24 hours.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                      <a
                        href={`https://wa.me/91${siteData.whatsapp}?text=${getWhatsAppMessage()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-gold"
                      >
                        Send brief via WhatsApp now →
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="btn btn-ghost"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="font-display text-2xl text-[#f7f3ec] mb-2">
                      Event Brief Details
                    </h3>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Sourav Mukherjee"
                          className="form-input"
                        />
                      </div>

                      <div>
                        <label className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-2">
                          Phone Number (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 97483 28654"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="sourav@example.com"
                          className="form-input"
                        />
                      </div>

                      <div>
                        <label className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-2">
                          Event Type *
                        </label>
                        <select
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className="form-select bg-[#1b1b1f]"
                        >
                          <option value="Wedding, destination">Wedding, destination</option>
                          <option value="Wedding, city">Wedding, city (Kolkata)</option>
                          <option value="Conference / summit">Conference / summit</option>
                          <option value="Product or brand launch">Product or brand launch</option>
                          <option value="Dealer / investor meet">Dealer / investor meet</option>
                          <option value="Award night / gala">Award night / gala</option>
                          <option value="Exhibition / activation">Exhibition / activation</option>
                          <option value="Private milestone celebration">Private milestone celebration</option>
                          <option value="Something else">Something else</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-3">
                      <div>
                        <label className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-2">
                          City / Destination *
                        </label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="e.g. Kolkata, Udaipur, Goa"
                          className="form-input"
                        />
                      </div>

                      <div>
                        <label className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-2">
                          Approx Date / Season
                        </label>
                        <input
                          type="text"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          placeholder="e.g. Nov 2026 / Q4"
                          className="form-input"
                        />
                      </div>

                      <div>
                        <label className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-2">
                          Guest Count
                        </label>
                        <input
                          type="text"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          placeholder="e.g. 250 - 500"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-2">
                          Estimated Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="form-select bg-[#1b1b1f]"
                        >
                          <option value="₹25 lakh – ₹75 lakh">₹25 lakh – ₹75 lakh</option>
                          <option value="₹75 lakh – ₹2 crore">₹75 lakh – ₹2 crore</option>
                          <option value="Above ₹2 crore">Above ₹2 crore</option>
                          <option value="Under ₹25 lakh">Under ₹25 lakh</option>
                          <option value="Prefer not to say">Prefer not to say</option>
                          <option value="Not decided yet">Not decided yet</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-2">
                          Company / Family House (Optional)
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Corporate Brand / Family Name"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-2">
                        Tell Us About Your Vision &amp; Notes
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about the venues you are considering, multi-day itinerary, specific artist preferences, or special requirements..."
                        className="form-textarea"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-gold w-full text-center !py-4"
                    >
                      {loading ? 'Submitting brief...' : 'Send Enquiry'}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Details & Info Column */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-6">
                <p className="eyebrow">Direct Contact</p>
                <h3 className="font-display text-3xl text-[#f7f3ec]">
                  Kolkata Studio &amp; Offices
                </h3>
                <p className="text-sm leading-relaxed text-[#a8a29a]">
                  We welcome meetings at our Salt Lake Sector V studio in Kolkata, or our senior leadership can travel directly to your location.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-6 border-y border-[#2c2c31] py-8">
                <div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                    WhatsApp Direct (Quickest Response)
                  </span>
                  <a
                    href={`https://wa.me/91${siteData.whatsapp}?text=Hello%20Eventure%2C%20I%20would%20like%20to%20discuss%20an%20upcoming%20event.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block font-display text-2xl text-[#25d366] hover:underline"
                  >
                    +91 {siteData.whatsapp}
                  </a>
                </div>

                <div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                    Telephone
                  </span>
                  <a
                    href={`tel:${siteData.phoneRaw}`}
                    className="mt-1 block font-display text-2xl text-[#f7f3ec] hover:text-[#d4af37] transition-colors"
                  >
                    {siteData.phone}
                  </a>
                </div>

                <div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                    Email Inquiries
                  </span>
                  <a
                    href={`mailto:${siteData.email}`}
                    className="mt-1 block text-base text-[#f7f3ec] hover:text-[#d4af37] transition-colors"
                  >
                    {siteData.email}
                  </a>
                </div>

                <div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                    Studio Address
                  </span>
                  <p className="mt-1 text-sm leading-relaxed text-[#f7f3ec]">
                    {siteData.address.formatted}
                  </p>
                </div>

                <div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                    Official Website
                  </span>
                  <a
                    href="https://myeventure.in/"
                    className="mt-1 block text-sm text-[#d4af37] hover:underline"
                  >
                    https://myeventure.in/
                  </a>
                </div>
              </div>

              {/* Guidance Box */}
              <div className="rounded-2xl bg-[#1b1b1f] border border-[#2c2c31] p-6 space-y-3">
                <h4 className="font-display text-xl text-[#f7f3ec]">Before you enquire</h4>
                <ul className="space-y-2 text-xs leading-relaxed text-[#a8a29a]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4af37]">•</span>
                    <span>For destination weddings, we recommend reaching out 6 to 12 months ahead for prime palace &amp; resort bookings.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4af37]">•</span>
                    <span>Corporate summits and conclaves generally require 8 to 16 weeks of production runway.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4af37]">•</span>
                    <span>Discretion &amp; non-disclosure agreements are standard for all our private and corporate clients.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
