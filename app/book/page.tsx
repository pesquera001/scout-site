"use client";

import React, { useState, useCallback } from "react";
import { Mail, ArrowRight, User, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
// Import Nav from the main page
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const SERVICES = [
  {
    label: "Exterior Window Cleaning",
    description:
      "Crystal-clear results for your home's or business's exterior glass. We remove dirt, grime, and water spots for a streak-free shine.",
  },
  {
    label: "Interior Window Cleaning",
    description:
      "Gentle, thorough cleaning for all interior glass. We protect your furnishings and leave every pane spotless.",
  },
  {
    label: "Screen Cleaning",
    description:
      "We carefully remove, wash, and reinstall screens so your view is as clear as possible.",
  },
  {
    label: "Solar Panel Cleaning",
    description:
      "Maximize your solar efficiency with safe, residue-free panel cleaning.",
  },
  {
    label: "Gutter Cleaning",
    description:
      "Prevent water damage and clogs with our thorough gutter clearing and flush.",
  },
];

export default function ScottsdaleWindowCleaning() {
  const [activeTab, setActiveTab] = useState(0);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    needBy: '',
    services: [] as string[],
    streetAddress: '',
    zipCode: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (response.ok) {
        setSubmitStatus('success');
        setForm({ firstName: '', lastName: '', email: '', phone: '', message: '', needBy: '', services: [], streetAddress: '', zipCode: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Add ClientMarquee from main page
  const clients = [
    "LUXURY_HOMES", "RESTAURANTS", "RETAIL_SHOPS", "OFFICE_BUILDINGS", "SCHOOLS", "MEDICAL_OFFICES", "APARTMENT_COMPLEXES", "RECENT_CONSTRUCTIONS", "INDUSTRIAL_BUILDINGS"
  ];
  const extendedClients = [...clients, ...clients];

  const ClientMarquee = () => (
    <div className="py-4 bg-saddle-dust overflow-hidden">
      <div className="relative flex">
        <div className="marquee-content flex gap-6 items-center">
          {extendedClients.map((client, index) => (
            <div key={index} className="flex-shrink-0 text-smoke-tin/80 font-mono text-base font-medium tracking-wide">
              {client}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="bg-white-canvas min-h-screen">
      {/* Navigation Bar */}
      <Nav />
      {/* Full-bleed hero: left = image with overlay, right = form, no margins */}
      <section className="w-full min-h-screen flex flex-col md:flex-row">
        {/* Left: Full-bleed image with overlay text */}
        <div className="relative w-full md:w-1/2 h-72 md:h-auto min-h-[350px] md:min-h-screen flex items-center justify-center overflow-hidden">
          <Image
            src="/hero/20250712_1704_90s Film Window Cleaning_remix_01k00hg7b8ffmv0fvvs3q8cbq3(1).png"
            alt="Friday's cleaning a window with a dog nearby"
            fill
            className="object-cover object-top w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-saddle-dust leading-tight mb-4">
              The Valley’s Favorite Window Cleaning Service
            </h1>
            <div className="font-typewriter text-lg md:text-2xl text-white-canvas/90 max-w-xl drop-shadow-lg mb-2">
              Crystal-clear windows. Honest pricing. Same-day quotes.<br />
              Serving homes & businesses across Scottsdale and the Valley.
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mb-2">
              <span className="flex items-center gap-1 font-typewriter text-base md:text-lg text-white-canvas/90">
                ✔️ Trusted by Local Businesses
              </span>
              <span className="hidden md:inline text-white-canvas/50">|</span>
              <span className="flex items-center gap-1 font-typewriter text-base md:text-lg text-white-canvas/90">
                ✔️ Insured & Local
              </span>
              <span className="hidden md:inline text-white-canvas/50">|</span>
              <span className="flex items-center gap-1 font-typewriter text-base md:text-lg text-white-canvas/90">
                ✔️ Satisfaction Guaranteed
              </span>
            </div>
          </div>
        </div>
        {/* Right: Full-bleed form, no margins */}
        <div className="w-full md:w-1/2 min-h-screen flex flex-col justify-center bg-white-canvas">
          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-white rounded-none shadow-none p-8 md:p-12 border-0 w-full max-w-none">
              <div className="flex flex-col items-center mb-8">
                <h2
                  className="font-display text-4xl md:text-5xl font-bold mb-2 retro-shadow"
                  style={{ color: 'var(--worn-denim)', textShadow: '3px 3px 0px var(--saddle-dust)' }}
                >
                  Friday's Window Services
                </h2>
                <a href="tel:(480) 701-4847" className="font-typewriter text-lg md:text-2xl text-worn-denim font-bold hover:underline mb-2">
                  (480) 701-4847
                </a>
                <p className="font-typewriter text-base text-smoke-tin/80">
                  Fill out the form and we’ll get back to you with a same-day quote!
                </p>
              </div>
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={20} className="text-worn-denim/60" />
                    </div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="FIRST_NAME"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border-2 border-saddle-dust/80 rounded-lg bg-saddle-dust/40 shadow focus:outline-none focus:ring-2 focus:ring-worn-denim/50 focus:border-worn-denim transition-all duration-300 font-typewriter"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={20} className="text-worn-denim/60" />
                    </div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="LAST_NAME"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      className="w-full pl-4 pr-4 py-3 border-2 border-saddle-dust/80 rounded-lg bg-saddle-dust/40 shadow focus:outline-none focus:ring-2 focus:ring-worn-denim/50 focus:border-worn-denim transition-all duration-300 font-typewriter"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={20} className="text-worn-denim/60" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="YOUR_EMAIL"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border-2 border-saddle-dust/80 rounded-lg bg-saddle-dust/40 shadow focus:outline-none focus:ring-2 focus:ring-worn-denim/50 focus:border-worn-denim transition-all duration-300 font-typewriter"
                    />
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone size={20} className="text-worn-denim/60" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="YOUR_PHONE"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border-2 border-saddle-dust/80 rounded-lg bg-saddle-dust/40 shadow focus:outline-none focus:ring-2 focus:ring-worn-denim/50 focus:border-worn-denim transition-all duration-300 font-typewriter"
                  />
                </div>
                <div className="relative">
                  <label className="block font-typewriter mb-2 text-smoke-tin/80">When do you need the work done by?</label>
                  <input
                    type="text"
                    name="needBy"
                    placeholder="e.g. ASAP, Next week, Specific date, etc."
                    value={form.needBy}
                    onChange={handleChange}
                    className="w-full pr-4 py-3 border-2 border-saddle-dust/80 rounded-lg bg-saddle-dust/40 shadow focus:outline-none focus:ring-2 focus:ring-worn-denim/50 focus:border-worn-denim transition-all duration-300 font-typewriter"
                  />
                </div>
                <div className="relative">
                  <label className="block font-typewriter mb-2 text-smoke-tin/80">Street Address</label>
                  <input
                    type="text"
                    name="streetAddress"
                    placeholder="Street Address"
                    value={form.streetAddress}
                    onChange={handleChange}
                    required
                    className="w-full pr-4 py-3 border-2 border-saddle-dust/80 rounded-lg bg-saddle-dust/40 shadow focus:outline-none focus:ring-2 focus:ring-worn-denim/50 focus:border-worn-denim transition-all duration-300 font-typewriter"
                  />
                </div>
                <div className="relative">
                  <label className="block font-typewriter mb-2 text-smoke-tin/80">Zip Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="Zip Code"
                    value={form.zipCode}
                    onChange={handleChange}
                    required
                    className="w-full pr-4 py-3 border-2 border-saddle-dust/80 rounded-lg bg-saddle-dust/40 shadow focus:outline-none focus:ring-2 focus:ring-worn-denim/50 focus:border-worn-denim transition-all duration-300 font-typewriter"
                  />
                </div>
                <div className="relative">
                  <label className="block font-typewriter mb-2 text-smoke-tin/80">What services do you need?</label>
                  <div className="flex flex-wrap gap-4">
                    {['Exterior Window Cleaning', 'Interior Window Cleaning', 'Screen Cleaning', 'Gutter Cleaning', 'Solar Panel Cleaning'].map(service => (
                      <label key={service} className="flex items-center gap-2 font-typewriter text-smoke-tin/80">
                        <input
                          type="checkbox"
                          name="services"
                          value={service}
                          checked={form.services.includes(service)}
                          onChange={e => {
                            setForm(prev => {
                              const services = prev.services.includes(service)
                                ? prev.services.filter(s => s !== service)
                                : [...prev.services, service];
                              return { ...prev, services };
                            });
                          }}
                        />
                        {service}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
                    <MessageSquare size={20} className="text-worn-denim/60" />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Anything else?"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full pl-10 pr-4 py-3 border-2 border-saddle-dust/80 rounded-lg bg-saddle-dust/40 shadow focus:outline-none focus:ring-2 focus:ring-worn-denim/50 focus:border-worn-denim transition-all duration-300 font-typewriter resize-none"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: submitStatus !== 'idle' ? 1 : 0 }}
                  className="text-center"
                >
                  {submitStatus === 'success' && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4 font-typewriter">
                      Message sent successfully! We'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4 font-typewriter">
                      Something went wrong. Please try again or call us directly.
                    </div>
                  )}
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-center"
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-worn-denim text-white hover:bg-smoke-tin font-typewriter font-bold tracking-wide px-8 py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? 'SENDING...' : 'GET_QUOTE'}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </motion.form>
            </div>
          </div>
        </div>
      </section>
      <ClientMarquee />
      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-white-canvas">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl text-worn-denim retro-shadow">
              Cleaning Services
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg font-typewriter text-smoke-tin/80 tracking-wide">
              Clean is expected. Care is guaranteed.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap gap-2 md:gap-4 mb-8 justify-center">
              {SERVICES.map((tab, idx) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 rounded-full font-mono text-base md:text-lg transition-colors border-2 focus:outline-none focus:ring-2 focus:ring-worn-denim/50 ${activeTab === idx ? 'bg-worn-denim text-white border-worn-denim' : 'bg-white-canvas text-worn-denim border-worn-denim/40 hover:bg-worn-denim/10'}`}
                  aria-selected={activeTab === idx}
                  aria-controls={`tab-panel-${idx}`}
                  role="tab"
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div
              id={`tab-panel-${activeTab}`}
              role="tabpanel"
              className="max-w-2xl mx-auto bg-white p-8 rounded-lg border-2 border-smoke-tin shadow-md text-center"
            >
              <h3 className="font-display text-2xl md:text-3xl text-worn-denim mb-4">{SERVICES[activeTab].label}</h3>
              <p className="font-typewriter text-lg text-smoke-tin/90 leading-relaxed mb-6">{SERVICES[activeTab].description}</p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-worn-denim text-white hover:bg-smoke-tin font-typewriter font-bold tracking-wide px-6 py-3 text-base transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  SAME_DAY_QUOTE
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 