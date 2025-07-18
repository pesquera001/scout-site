"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Check, Phone, Mail, ShieldCheck, Sparkles, Wind,
  Layers, User, Calendar, MessageSquare, ChevronLeft, ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "../components/Footer";

const FridayHead = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@300;400;500;700&display=swap" as="style" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@300;400;500;700&display=swap" />
    <style>{`
      :root {
        --white-canvas: #F9F8F5;
        --worn-denim: #708B91;
        --prairie-clay: #B9856F;
        --saddle-dust: #E5D3BD;
        --smoke-tin: #78736E;
        --font-retro-display: 'Bebas Neue', sans-serif;
        --font-retro-mono: 'JetBrains Mono', monospace;
      }

      body {
        background-color: var(--white-canvas);
        color: var(--smoke-tin);
        font-family: var(--font-retro-mono);
        font-weight: 400;
      }
      
      .font-display {
        font-family: var(--font-retro-display);
        letter-spacing: 0.05em;
      }
      
      .font-mono {
        font-family: var(--font-retro-mono);
      }
      
      .font-typewriter {
        font-family: var(--font-retro-mono);
      }
      
      .marquee-content {
        animation: marquee 30s linear infinite;
      }

      @keyframes marquee {
        from { transform: translateX(0%); }
        to { transform: translateX(-50%); }
      }

      .retro-shadow {
        text-shadow: 3px 3px 0px var(--saddle-dust);
      }
      
      .retro-shadow-clay {
        text-shadow: 3px 3px 0px var(--prairie-clay);
      }
      
      .retro-shadow-denim {
         text-shadow: 3px 3px 0px var(--worn-denim);
      }

      .two-tone-bg {
        background: linear-gradient(135deg, var(--saddle-dust) 50%, var(--prairie-clay) 50%);
      }

      .typewriter-effect {
        border-right: 2px solid var(--worn-denim);
        animation: typewriter 3s steps(40) 1s 1 normal both, blinkTextCursor 500ms steps(40) infinite normal;
      }

      @keyframes typewriter {
        from { width: 0; }
        to { width: 100%; }
      }

      @keyframes blinkTextCursor {
        from { border-right-color: var(--worn-denim); }
        to { border-right-color: transparent; }
      }
    `}</style>
  </>
);

const HERO_IMAGE_URL = "/hero/hero-house.webp";

const GRAINY_BG = `
  repeating-linear-gradient(135deg, #f9f8f5 0px, #f9f8f5 2px, #ece9e6 3px, #f9f8f5 4px),
  repeating-linear-gradient(45deg, #f9f8f5 0px, #f9f8f5 2px, #ece9e6 3px, #f9f8f5 4px)
`;

const STATIC_OVERLAY = "/static/tv-static.gif"; // Place a semi-transparent static gif in public/static/

const CinematicHeroSection = () => {
  const [showImage, setShowImage] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showBranding, setShowBranding] = useState(false);

  useEffect(() => {
    // Check if fonts are loaded
    if (document.fonts) {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    } else {
      // Fallback for browsers that don't support document.fonts
      setTimeout(() => setFontsLoaded(true), 100);
    }

    // Text shows immediately, fades out as image fades in
    const imageTimer = setTimeout(() => setShowImage(true), 1500);
    const overlayTimer = setTimeout(() => setShowOverlay(true), 3000);
    const brandingTimer = setTimeout(() => setShowBranding(true), 3500);
    
    return () => {
      clearTimeout(imageTimer);
      clearTimeout(overlayTimer);
      clearTimeout(brandingTimer);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[95vh] flex items-center justify-center overflow-hidden pb-0 mb-0">
      {/* Cinematic Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 z-0"
      />
      
      {/* Hero Image Fade In with Enhanced Cinematic Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ 
          opacity: showImage ? 1 : 0,
          scale: showImage ? 1 : 1.1
        }}
        transition={{ 
          duration: 4,
          ease: "easeOut"
        }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <Image
          src="/hero/20250712_1704_90s Film Window Cleaning_remix_01k00hg7b8ffmv0fvvs3q8cbq3(1).png"
          alt="Friday's cleaning a window with a dog nearby"
          fill
          priority
          className="object-cover object-top w-full h-full"
        />
      </motion.div>
      
      {/* Centered Hero Headline - Immediate Show, Fade Out with Image */}
      <div className="relative z-10 w-full text-center px-6 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: showImage ? 0 : 1 }}
          transition={{ 
            duration: 2,
            ease: "easeOut"
          }}
          className="w-full absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 md:px-8 z-20"
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-saddle-dust leading-tight mb-4" style={{
            textShadow: '3px 3px 0px var(--saddle-dust), 6px 6px 0px var(--prairie-clay)'
          }}>
            FRIDAY'S
          </h1>
          <h2 className="font-mono text-xl md:text-2xl lg:text-3xl text-saddle-dust/90 leading-tight" style={{
            textShadow: '2px 2px 0px var(--saddle-dust), 4px 4px 0px var(--prairie-clay)'
          }}>
            WINDOW SERVICES
          </h2>
        </motion.div>
      </div>
      
      {/* Top Left Branding with Staggered Animation */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ 
          opacity: showBranding && fontsLoaded ? 1 : 0,
          x: showBranding && fontsLoaded ? 0 : -50
        }}
        transition={{ 
          duration: 1.5,
          ease: "easeOut",
          delay: 0.5
        }}
        className="absolute left-4 top-4 md:left-10 md:top-10 z-30 text-left"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-display text-2xl md:text-4xl text-saddle-dust leading-none"
        >
          Friday's
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="font-mono text-xs md:text-base text-saddle-dust/90 leading-none"
        >
          Window Services
        </motion.div>
      </motion.div>
      
      {/* Hero Overlay with Cinematic Entrance */}
      <motion.div
        initial={{ opacity: 0, x: 100, y: 50 }}
        animate={{ 
          opacity: showOverlay && fontsLoaded ? 1 : 0,
          x: showOverlay && fontsLoaded ? 0 : 100,
          y: showOverlay && fontsLoaded ? 0 : 50
        }}
        transition={{ 
          duration: 2,
          ease: "easeOut",
          delay: 0.8
        }}
        className="absolute top-32 right-4 md:top-44 md:right-8 z-20 text-right w-auto max-w-lg"
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="font-display text-2xl md:text-4xl text-saddle-dust leading-none tracking-[0.3em]"
        >
          Timeless Service.<br/>American Grit.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="font-mono text-base md:text-lg text-saddle-dust/90 mt-1 md:mt-2"
        >
          Old-school reliability meets a stylist's eye for detail.<br/>Friday's Window Cleaning delivers spotless results and subtle charm — every time.
        </motion.p>
      </motion.div>
      
      {/* Cinematic Vignette Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showImage ? 0.3 : 0 }}
        transition={{ duration: 3, delay: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none"
      />
    </section>
  );
};

const ClientMarquee = () => {
  const clients = [
    "RESIDENTIAL_HOMES",
    "STOREFRONTS",
    "MODERN_LOFTS",
    "HISTORIC_BUILDINGS",
    "OFFICE_PARKS",
    "BOUTIQUE_HOTELS",
    "RECENT_CONSTRUCTIONS",
    "INDUSTRIAL_BUILDINGS"
  ];
  const extendedClients = [...clients, ...clients];

  return (
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
};

const ServicesSection = () => {
  const tabs = [
    { label: "Exterior Windows", description: "Crystal-clear results for your home's or business's exterior glass. We remove dirt, grime, and water spots for a streak-free shine." },
    { label: "Interior Windows", description: "Gentle, thorough cleaning for all interior glass. We protect your furnishings and leave every pane spotless." },
    { label: "Screen Cleaning", description: "We carefully remove, wash, and reinstall screens so your view is as clear as possible." },
    { label: "Solar Panel Cleaning", description: "Maximize your solar efficiency with safe, residue-free panel cleaning." },
    { label: "Gutter Cleaning", description: "Prevent water damage and clogs with our thorough gutter clearing and flush." },
  ];
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <section id="services" className="py-20 md:py-28 bg-white-canvas">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-worn-denim retro-shadow">CLEANING SERVICES</h2>
          <p className="mt-4 max-w-xl mx-auto text-lg font-typewriter text-smoke-tin/80 tracking-wide">Clean is expected. Care is guaranteed.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap gap-2 md:gap-4 mb-8 justify-center">
            {tabs.map((tab, idx) => (
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
            <h3 className="font-display text-2xl md:text-3xl text-worn-denim mb-4">{tabs[activeTab].label}</h3>
            <p className="font-typewriter text-lg text-smoke-tin/90 leading-relaxed mb-6">{tabs[activeTab].description}</p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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
  );
};

const ProcessSection = () => {
  const steps = [
    { number: "01", title: "REQUEST_A_QUOTE", description: "Tell us about the job. We provide a clear, honest price. No fluff.", icon: <Mail size={36} className="mx-auto text-saddle-dust" /> },
    { number: "02", title: "WE_ARRIVE_&_WORK", description: "Punctual, prepared, and professional. We get straight to it.", icon: <ShieldCheck size={36} className="mx-auto text-saddle-dust" /> },
    { number: "03", title: "JOB_DONE._VIEW_CLEAR.", description: "We leave your space not just clean, but cared for. Every time, without exception.", icon: <Sparkles size={36} className="mx-auto text-saddle-dust" /> }
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-prairie-clay text-white-canvas relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none" style={{ background: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect x=\'0\' y=\'0\' width=\'40\' height=\'40\' fill=\'%23E5D3BD\' fill-opacity=\'0.2\'/%3E%3C/svg%3E") repeat' }} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-white-canvas retro-shadow-denim">THE PROCESS.</h2>
          <p className="mt-6 max-w-xl mx-auto text-lg font-typewriter text-white-canvas/80 tracking-wide">
            Simple. Efficient. Done right.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0 relative">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex-1 min-w-[220px] max-w-xs bg-white-canvas/10 border border-saddle-dust/40 rounded-2xl p-8 mx-2 text-center shadow-lg relative"
              >
                <div className="mb-4">{step.icon}</div>
                <div className="font-display text-4xl text-saddle-dust mb-2 retro-shadow-denim">{step.number}</div>
                <h3 className="text-xl font-mono font-bold text-white-canvas mb-4 tracking-wide">{step.title}</h3>
                <p className="font-typewriter text-white-canvas/80 text-base leading-relaxed">{step.description}</p>
              </motion.div>
              {/* Connecting line except after last step */}
              {index < steps.length - 1 && (
                <div className="hidden md:block h-1 w-16 bg-saddle-dust/40 rounded-full mx-4 my-auto" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-white-canvas">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="w-full h-96 md:h-[500px] bg-saddle-dust rounded-lg relative flex items-center justify-center text-white/70 border-4 border-prairie-clay/50 overflow-hidden"
        >
          <Image
            src="/hero/IMG_5617.jpg"
            alt="Friday's Window Cleaning - Professional service"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-5xl md:text-6xl text-worn-denim mb-8 retro-shadow">Old-School Values. Spotless Results.</h2>
          <p className="text-lg font-typewriter text-smoke-tin/80 mb-8 leading-relaxed tracking-wide">
            Friday’s was founded by Aidan on a simple principle:<br />
            Do the work well. Do it quietly. Let the results speak for themselves.<br /><br />
            We believe in grace over flash, consistency over noise. Ours is a trade built on trust, and we earn it by showing up clean, working with care, and leaving every space better than we found it.<br /><br />
            No slogans. No fuss. Just honest work, done right.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <Check className="text-prairie-clay" size={20} />
              <span className="font-mono text-sm tracking-wide">FULLY_INSURED_&_BONDED</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-prairie-clay" size={20} />
              <span className="font-mono text-sm tracking-wide">ECO_FRIENDLY_SOLUTIONS</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-prairie-clay" size={20} />
              <span className="font-mono text-sm tracking-wide">SATISFACTION_GUARANTEED</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-prairie-clay" size={20} />
              <span className="font-mono text-sm tracking-wide">TIMELESS_PROFESSIONALISM</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const TestimonialSection = () => {
    const [current, setCurrent] = useState(0);
    const testimonials = [
        { quote: "Quiet, clean, and gets it done. The kind of company you want on your street.", author: "S. ASHFORD" },
        { quote: "The most beautiful clean you'll never notice. That's the highest compliment I can give.", author: "S. CHEN" },
        { quote: "They just show up and do the job right. No fuss. It's refreshing.", author: "T. DAMONS" }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrent((current + 1) % testimonials.length);
        }, 5000);
        return () => clearTimeout(timer);
    }, [current, testimonials.length]);

    return (
        <section className="py-20 md:py-28 bg-saddle-dust relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none select-none" style={{ background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect x=\'0\' y=\'0\' width=\'60\' height=\'60\' fill=\'%23F9F8F5\' fill-opacity=\'0.3\'/%3E%3C/svg%3E") repeat' }} />
            
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white-canvas/20 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white-canvas/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white-canvas/10 rounded-full"></div>
            
            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h2 className="font-display text-4xl md:text-5xl text-white-canvas mb-4">WHAT_CLIENTS_SAY</h2>
                    <div className="w-24 h-1 bg-white-canvas/30 mx-auto mb-8"></div>
                </motion.div>
                
                <div className="max-w-4xl mx-auto relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white-canvas/10 backdrop-blur-sm border border-white-canvas/20 rounded-2xl p-8 md:p-12 shadow-xl"
                        >
                            <div className="mb-6">
                                <svg className="w-12 h-12 mx-auto text-white-canvas/60" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                                </svg>
                            </div>
                            
                            <p className="font-typewriter text-xl md:text-2xl text-white-canvas leading-relaxed tracking-wide mb-8">
                                "{testimonials[current].quote}"
                            </p>
                            
                            <div className="flex items-center justify-center gap-4">
                                <p className="font-mono font-bold tracking-[0.2em] text-white-canvas/90 uppercase text-sm">
                                    — {testimonials[current].author}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    
                    {/* Testimonial indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    current === index ? 'bg-white-canvas' : 'bg-white-canvas/30'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContactSection = () => {
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

  return (
    <section id="contact" className="py-20 md:py-28 bg-white-canvas relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none" style={{ background: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect x=\'0\' y=\'0\' width=\'40\' height=\'40\' fill=\'%23708B91\' fill-opacity=\'0.1\'/%3E%3C/svg%3E") repeat' }} />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-worn-denim/10 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-worn-denim/10 rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center mb-16 gap-6 md:gap-10"
        >
          <div className="flex flex-row w-full md:w-auto items-center justify-center">
            <a href="tel:(480) 701-4847" className="font-typewriter text-worn-denim text-lg font-bold hover:underline mb-2 md:mb-0 md:mr-6 whitespace-nowrap">(480) 701-4847</a>
            <div className="hidden md:block h-10 border-l border-saddle-dust mx-6"></div>
            <div className="flex flex-col items-start text-left">
              <h2 className="font-display text-2xl md:text-3xl text-worn-denim mb-2 leading-tight">Tell us about your project.</h2>
              <div className="font-typewriter text-base text-smoke-tin/90 mb-1">We'll provide a clear, honest price.</div>
              <div className="font-typewriter text-base text-smoke-tin/90">No fluff, just straight talk.</div>
            </div>
          </div>
        </motion.div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-saddle-dust/40">
          <div className="flex flex-col items-center mb-8">
            <Mail size={40} className="text-worn-denim mb-2" />
            <h2 className="font-display text-3xl md:text-4xl text-worn-denim mb-2">Request a Quote</h2>
            <p className="font-typewriter text-base text-smoke-tin/80">Fill out the form and we’ll get back to you with a same-day quote!</p>
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
                  className="w-full pl-10 pr-4 py-3 border-2 border-saddle-dust/80 rounded-lg bg-saddle-dust/40 shadow focus:outline-none focus:ring-2 focus:ring-worn-denim/50 focus:border-worn-denim transition-all duration-300 font-typewriter"
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
          
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-worn-denim/10 rounded-full flex items-center justify-center mb-4">
                  <Phone size={24} className="text-worn-denim" />
                </div>
                <h3 className="font-mono font-bold text-worn-denim mb-2">PHONE</h3>
                <p className="font-typewriter text-smoke-tin/80">(480) 701-4847</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-worn-denim/10 rounded-full flex items-center justify-center mb-4">
                  <Mail size={24} className="text-worn-denim" />
                </div>
                <h3 className="font-mono font-bold text-worn-denim mb-2">EMAIL</h3>
                <p className="font-typewriter text-smoke-tin/80">info@fridayswindows.com</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-worn-denim/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar size={24} className="text-worn-denim" />
                </div>
                <h3 className="font-mono font-bold text-worn-denim mb-2">HOURS</h3>
                <p className="font-typewriter text-smoke-tin/80">SUN-SAT 7:30AM-7:30PM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Generic Carousel Component
const Carousel = ({ items, renderItem, autoPlay = true, interval = 5000, className = '' }: {
  items: any[];
  renderItem: (item: any) => React.ReactNode;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval, autoPlay]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="relative h-full flex items-center justify-center">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {renderItem(items[currentIndex])}
          </motion.div>
        </AnimatePresence>
      </div>

      {items.length > 1 && (
        <>
          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-smoke-tin/50 text-white hover:bg-smoke-tin transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-smoke-tin/50 text-white hover:bg-smoke-tin transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 w-2 rounded-full transition-all ${
                  currentIndex === idx ? "bg-worn-denim w-6" : "bg-smoke-tin/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Clients Page Component
const ClientsPage = () => {
  const clientProjects = [
    {
      id: 1,
      type: "LUXURY_RESIDENTIAL",
      title: "PENTHOUSE_GLASS_WALLS",
      description: "Floor-to-ceiling windows in a luxury penthouse, achieving perfect clarity for panoramic city views.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      type: "HIGH_END_COMMERCIAL",
      title: "LUXURY_HOTEL_FACADE",
      description: "Crystal-clear windows for a five-star hotel, ensuring guests enjoy unobstructed luxury views.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      type: "PRESTIGE_PROJECT",
      title: "ART_GALLERY_SKYLIGHTS",
      description: "Delicate cleaning of museum skylights, preserving perfect natural lighting for priceless artwork.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      type: "LUXURY_ESTATE",
      title: "MODERN_GLASS_MANSION",
      description: "Streak-free perfection for a contemporary glass mansion with expansive window walls.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const renderClientProject = (project: any) => (
    <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg border-2 border-saddle-dust/50 max-w-4xl mx-auto min-h-[400px] md:min-h-[500px]">
      <div className="w-full md:w-1/2 h-64 md:h-full bg-saddle-dust rounded-lg flex items-center justify-center text-white/70 font-mono text-center flex-shrink-0 overflow-hidden relative">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0 text-center md:text-left">
        <p className="font-mono text-sm uppercase text-worn-denim tracking-wide mb-2">{project.type}</p>
        <h3 className="font-display text-4xl text-smoke-tin mb-4 retro-shadow">{project.title}</h3>
        <p className="font-typewriter text-lg text-smoke-tin/80 leading-relaxed">{project.description}</p>
        <Button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-8 bg-worn-denim text-white hover:bg-smoke-tin font-typewriter font-bold tracking-wide px-6 py-2"
        >
          INQUIRE_ABOUT_YOUR_PROJECT
        </Button>
      </div>
    </div>
  );

  return (
    <div className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-6 text-center mb-16">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-worn-denim leading-tight retro-shadow">
          OUR_PORTFOLIO.
        </h1>
        <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl font-typewriter text-smoke-tin/80 leading-relaxed tracking-wide">
          A glimpse into the diverse projects where Friday's has delivered unparalleled clarity.
        </p>
      </div>
      <div className="h-[600px] md:h-[700px] flex items-center justify-center">
        <Carousel items={clientProjects} renderItem={renderClientProject} autoPlay={true} interval={7000} className="w-full h-full" />
      </div>
      <ContactSection />
    </div>
  );
};

// Shop Page Component
const ShopPage = () => {
  const shopItems = [
    {
      id: 1,
                  name: "FRIDAY'S_PREMIUM_SQUEEGEE",
      price: "$89.99",
      description: "Professional-grade squeegee with precision-engineered blade for streak-free luxury results.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "LUXURY_WINDOW_SOLUTION",
      price: "$34.99",
      description: "Our proprietary, eco-friendly cleaning concentrate for pristine luxury windows.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "PREMIUM_MICROFIBER_SET",
      price: "$19.99",
      description: "Ultra-soft microfiber cloths for that final, invisible polish on luxury glass.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
                  name: "FRIDAY'S_LUXURY_CAP",
      price: "$39.99",
      description: "Premium cap for those who appreciate true clarity and understated luxury.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const renderShopItem = (item: any) => (
    <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg border-2 border-saddle-dust/50 max-w-2xl mx-auto text-center min-h-[450px]">
      <div className="w-48 h-48 bg-saddle-dust rounded-lg flex items-center justify-center text-white/70 font-mono text-center mb-6 flex-shrink-0 overflow-hidden relative">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      <h3 className="font-display text-3xl text-smoke-tin mb-2 retro-shadow">{item.name}</h3>
      <p className="font-mono text-xl text-worn-denim font-bold mb-4">{item.price}</p>
      <p className="font-typewriter text-base text-smoke-tin/80 leading-relaxed mb-6">{item.description}</p>
      <Button className="bg-prairie-clay text-white hover:bg-smoke-tin font-typewriter font-bold tracking-wide px-6 py-2">
        ADD_TO_CART
      </Button>
    </div>
  );

  return (
    <div className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-6 text-center mb-16">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-worn-denim leading-tight retro-shadow">
                      THE_FRIDAY'S_SUPPLY.
        </h1>
        <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl font-typewriter text-smoke-tin/80 leading-relaxed tracking-wide">
          Tools and merchandise for those who appreciate true clarity and understated quality.
        </p>
      </div>
      <div className="h-[600px] md:h-[700px] flex items-center justify-center">
        <Carousel items={shopItems} renderItem={renderShopItem} autoPlay={true} interval={6000} className="w-full h-full" />
      </div>
      <section className="py-20 md:py-28 bg-white-canvas text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-5xl md:text-6xl text-worn-denim retro-shadow">NEED_BULK_ORDER?</h2>
          <p className="mt-6 max-w-xl mx-auto text-lg font-typewriter text-smoke-tin/80 tracking-wide">
            Contact us for professional pricing and custom orders.
          </p>
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-8 bg-worn-denim text-white hover:bg-smoke-tin font-typewriter font-bold tracking-wide px-6 py-2"
          >
            CONTACT_SALES
          </Button>
        </div>
      </section>
    </div>
  );
};

export default function Home() {
  const [currentPage, setCurrentPage] = useState('/');
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Check if fonts are loaded
    if (document.fonts) {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    } else {
      // Fallback for browsers that don't support document.fonts
      setTimeout(() => setFontsLoaded(true), 100);
    }

    const handlePopstate = () => {
      setCurrentPage(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopstate);

    const handleAnchorClick = (event: Event) => {
      const target = event.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href && href.startsWith('/')) { 
        event.preventDefault();
        window.history.pushState({}, '', href);
        setCurrentPage(href);
        window.scrollTo(0, 0);
      } else if (href && href.startsWith('#')) { 
         event.preventDefault();
         // If we're not on the home page, navigate to home first, then scroll to section
         if (currentPage !== '/') {
           window.history.pushState({}, '', '/');
           setCurrentPage('/');
           // Wait for page to load, then scroll to section
           setTimeout(() => {
             const id = href.substring(1);
             const targetElement = document.getElementById(id);
             if (targetElement) {
               targetElement.scrollIntoView({ behavior: 'smooth' });
             }
           }, 100);
         } else {
           // If we're already on home page, just scroll to section
           const id = href.substring(1);
           const targetElement = document.getElementById(id);
           if (targetElement) {
             targetElement.scrollIntoView({ behavior: 'smooth' });
           }
         }
      }
    };

    const setupLinks = () => {
        const navLinks = document.querySelectorAll('nav a, footer a, .font-display a');
        navLinks.forEach(link => {
            link.removeEventListener('click', handleAnchorClick);
            link.addEventListener('click', handleAnchorClick);
        });
    };

    setupLinks();

    return () => {
      window.removeEventListener('popstate', handlePopstate);
      const navLinks = document.querySelectorAll('nav a, footer a, .font-display a');
      navLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []); 

  const renderPage = () => {
    switch (currentPage) {
      case '/clients':
        return <ClientsPage />;
      case '/shop':
        return <ShopPage />;
      case '/':
      default:
        return (
          <>
            <CinematicHeroSection />
            <div className="sticky top-0 z-50 -mt-10">
              <Nav />
            </div>
            <div className="-mt-1 md:-mt-2">
              <ClientMarquee />
            </div>
            <AboutSection />
            <ServicesSection />
            <ProcessSection />
            <TestimonialSection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <>
      <FridayHead />
      <main style={{ opacity: fontsLoaded ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>
        {currentPage === '/' ? (
          <>
            <CinematicHeroSection />
            <div className="sticky top-0 z-50 -mt-10">
              <Nav />
            </div>
            <div className="-mt-1 md:-mt-2">
              <ClientMarquee />
            </div>
            <AboutSection />
            <ServicesSection />
            <ProcessSection />
            <TestimonialSection />
            <ContactSection />
          </>
        ) : (
          <>
            <Nav />
            {renderPage()}
          </>
        )}
      </main>
      <Footer />
    </>
  );
} 