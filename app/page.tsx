"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Check, Phone, Mail, ShieldCheck, Sparkles, Wind,
  Layers, User, Calendar, MessageSquare, ChevronLeft, ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ScoutHead = () => (
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

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white-canvas/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center border-b border-saddle-dust/50">
        <div className="text-2xl font-display font-bold tracking-[0.3em] text-worn-denim">
          <a href="/">SCOUT'S</a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="font-mono text-sm font-light text-worn-denim tracking-wide">HOME</a>
          <a href="#about" className="font-mono text-sm font-light hover:text-worn-denim transition-colors tracking-wide">ABOUT</a>
          <a href="#services" className="font-mono text-sm font-light hover:text-worn-denim transition-colors tracking-wide">SERVICES</a>
          <a href="#process" className="font-mono text-sm font-light hover:text-worn-denim transition-colors tracking-wide">PROCESS</a>
          <a href="/clients" className="font-mono text-sm font-light hover:text-worn-denim transition-colors tracking-wide">CLIENTS</a>
          <a href="/shop" className="font-mono text-sm font-light hover:text-worn-denim transition-colors tracking-wide">SHOP</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-worn-denim"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <Button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-worn-denim text-white hover:bg-smoke-tin font-typewriter text-sm font-bold tracking-wide px-6 py-2"
        >
          GET_QUOTE
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white-canvas border-b border-saddle-dust/50">
          <nav className="container mx-auto px-6 py-4 space-y-4">
            <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="block font-mono text-sm font-light text-worn-denim tracking-wide hover:text-smoke-tin transition-colors">HOME</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block font-mono text-sm font-light text-worn-denim tracking-wide hover:text-smoke-tin transition-colors">ABOUT</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block font-mono text-sm font-light text-worn-denim tracking-wide hover:text-smoke-tin transition-colors">SERVICES</a>
            <a href="#process" onClick={() => setIsMobileMenuOpen(false)} className="block font-mono text-sm font-light text-worn-denim tracking-wide hover:text-smoke-tin transition-colors">PROCESS</a>
            <a href="/clients" onClick={() => setIsMobileMenuOpen(false)} className="block font-mono text-sm font-light text-worn-denim tracking-wide hover:text-smoke-tin transition-colors">CLIENTS</a>
            <a href="/shop" onClick={() => setIsMobileMenuOpen(false)} className="block font-mono text-sm font-light text-worn-denim tracking-wide hover:text-smoke-tin transition-colors">SHOP</a>
          </nav>
        </div>
      )}
    </header>
  );
};

const HERO_IMAGE_URL = "/hero/hero-house.webp";

const GRAINY_BG = `
  repeating-linear-gradient(135deg, #f9f8f5 0px, #f9f8f5 2px, #ece9e6 3px, #f9f8f5 4px),
  repeating-linear-gradient(45deg, #f9f8f5 0px, #f9f8f5 2px, #ece9e6 3px, #f9f8f5 4px)
`;

const STATIC_OVERLAY = "/static/tv-static.gif"; // Place a semi-transparent static gif in public/static/

const CinematicHeroSection = () => {
  const [showImage, setShowImage] = useState(false);
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

    // Start fade after 3 seconds, last 15 seconds
    const timer = setTimeout(() => setShowImage(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-[95vh] flex items-center justify-center overflow-hidden pb-0 mb-0">
      {/* Hero Image Fade In */}
      <div
        className="absolute inset-0 w-full h-full z-0 transition-opacity duration-[15000ms]"
        style={{ opacity: showImage ? 1 : 0 }}
      >
        <Image
          src="/hero/20250712_1704_90s Film Window Cleaning_remix_01k00hg7b8ffmv0fvvs3q8cbq3(1).png"
          alt="Scout cleaning a window with a dog nearby"
          fill
          priority
          className="object-cover object-center w-full h-full"
        />
      </div>
      
      {/* Intro Text - "Scout's" and "Window Services" */}
      <div className="relative z-10 w-full text-center px-6 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: (showImage ? 0 : 1) && fontsLoaded ? 1 : 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-tight retro-shadow-clay mb-4">
            <span className="text-saddle-dust">SCOUT'S</span>
          </h1>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl text-white leading-tight retro-shadow-denim">
            <span className="text-saddle-dust">WINDOW SERVICES</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

const ClientMarquee = () => {
  const clients = ["RESIDENTIAL_HOMES", "STOREFRONTS", "MODERN_LOFTS", "HISTORIC_BUILDINGS", "OFFICE_PARKS", "BOUTIQUE_HOTELS"];
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
  const services = [
    {
      icon: <Wind />,
      title: "RESIDENTIAL_CLEANING",
      description: "For the home that values light and clarity. We handle every pane with blue-collar grace."
    },
    {
      icon: <Layers />,
      title: "COMMERCIAL_SPACES",
      description: "A clean facade reflects a sharp business. We provide a discreet, perfect service."
    },
    {
      icon: <Sparkles />,
      title: "POST_CONSTRUCTION",
      description: "The final touch. We clear away the dust and reveal the beauty of the new build."
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white-canvas">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-worn-denim retro-shadow">OUR WORK. YOUR WINDOWS.</h2>
          <p className="mt-6 max-w-xl mx-auto text-lg font-typewriter text-smoke-tin/80 tracking-wide">
            Three services. One standard of excellence.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg border-2 border-smoke-tin text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="inline-block p-4 bg-prairie-clay/20 rounded-full text-prairie-clay mb-6">
                {React.cloneElement(service.icon, { size: 32 })}
              </div>
              <h3 className="text-xl font-display font-bold text-smoke-tin mb-4 tracking-wide">{service.title}</h3>
              <p className="font-typewriter text-smoke-tin/80 leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { number: "01", title: "REQUEST_A_QUOTE", description: "Tell us about the job. We provide a clear, honest price. No fluff." },
    { number: "02", title: "WE_ARRIVE_&_WORK", description: "Punctual, prepared, and professional. We get straight to it." },
    { number: "03", title: "JOB_DONE._VIEW_CLEAR.", description: "We leave your space cleaner than we found it. That's the point." }
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-prairie-clay text-white-canvas">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-white-canvas retro-shadow-denim">THE PROCESS.</h2>
          <p className="mt-6 max-w-xl mx-auto text-lg font-typewriter text-white-canvas/80 tracking-wide">
            Simple. Efficient. Done right.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center relative"
            >
              <div className="font-display text-7xl text-white-canvas/50 mb-6 retro-shadow-denim">{step.number}</div>
              <h3 className="text-xl font-mono font-bold text-white-canvas mb-4 tracking-wide">{step.title}</h3>
              <p className="font-typewriter text-white-canvas/80 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
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
            src={HERO_IMAGE_URL}
            alt="Luxury window cleaning - Scout's"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="text-center">
              <p className="font-display text-2xl tracking-wide text-white-canvas retro-shadow-denim">LUXURY_WINDOWS</p>
              <p className="font-typewriter text-sm mt-2 text-white-canvas/80">Pristine clarity for discerning clients.</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-5xl md:text-6xl text-worn-denim mb-8 retro-shadow">HONEST WORK.<br />MINIMAL AESTHETICS.</h2>
          <p className="text-lg font-typewriter text-smoke-tin/80 mb-8 leading-relaxed tracking-wide">
            Scout's was founded on a simple principle: do the job well, do it quietly, and let the results speak for themselves. We are a team that finds grace in labor and beauty in simplicity. We show up clean. We leave things cleaner.
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
              <span className="font-mono text-sm tracking-wide">DEADPAN_PROFESSIONALISM</span>
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
        { quote: "Quiet, clean, and gets it done. The kind of company you want on your street.", author: "S. MILLER" },
        { quote: "The most beautiful clean you'll never notice. That's the highest compliment I can give.", author: "J. CHEN, ARCHITECT" },
        { quote: "They just show up and do the job right. No fuss. It's refreshing.", author: "T. DAVIS" }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrent((current + 1) % testimonials.length);
        }, 5000);
        return () => clearTimeout(timer);
    }, [current, testimonials.length]);

    return (
        <section className="py-20 md:py-28 bg-saddle-dust">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="font-typewriter text-2xl md:text-3xl text-smoke-tin leading-relaxed tracking-wide">
                                "{testimonials[current].quote}"
                            </p>
                            <p className="mt-8 font-mono font-bold tracking-[0.2em] text-worn-denim uppercase text-sm">
                                — {testimonials[current].author}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage(data.message);
        setForm({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const InputField = ({ icon, ...props }: { icon: React.ReactNode } & React.InputHTMLAttributes<HTMLInputElement>) => (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-smoke-tin/50">
        {icon}
      </div>
      <input
        {...props}
        className="w-full pl-12 pr-4 py-4 bg-white border-2 border-saddle-dust/50 font-typewriter placeholder:text-smoke-tin/50 focus:ring-2 focus:ring-worn-denim focus:border-worn-denim outline-none transition-shadow tracking-wide"
      />
    </div>
  );

  return (
    <section id="contact" className="py-20 md:py-28 bg-smoke-tin text-white-canvas">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl retro-shadow-clay">REQUEST_A_QUOTE.</h2>
          <p className="mt-6 max-w-xl mx-auto text-lg font-typewriter opacity-80 tracking-wide">
            We clean. You don't have to. Tell us what you need.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <InputField icon={<User size={18}/>} type="text" name="name" placeholder="YOUR_NAME" value={form.name} onChange={handleChange} required />
          <InputField icon={<Mail size={18}/>} type="email" name="email" placeholder="YOUR_EMAIL" value={form.email} onChange={handleChange} required />
          <div className="relative">
             <div className="absolute top-4 left-0 flex items-center pl-4 pointer-events-none text-smoke-tin/50">
                <MessageSquare size={18}/>
             </div>
             <textarea name="message" placeholder="PROJECT_DETAILS" value={form.message} onChange={handleChange} required rows={4} className="w-full pl-12 pr-4 py-4 bg-white text-smoke-tin border-2 border-saddle-dust/50 font-typewriter placeholder:text-smoke-tin/50 focus:ring-2 focus:ring-prairie-clay focus:border-prairie-clay outline-none transition-shadow resize-none tracking-wide"></textarea>
          </div>
          <Button 
            type="submit" 
            size="lg" 
            disabled={isSubmitting}
            className="w-full bg-prairie-clay hover:bg-opacity-90 py-4 font-typewriter font-bold tracking-wide text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'SENDING...' : 'SUBMIT_REQUEST'}
          </Button>
          
          {submitStatus !== 'idle' && (
            <div className={`mt-4 p-4 rounded-lg font-typewriter text-sm ${
              submitStatus === 'success' 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {statusMessage}
            </div>
          )}
        </form>
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
          A glimpse into the diverse projects where Scout's has delivered unparalleled clarity.
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
      name: "SCOUT'S_PREMIUM_SQUEEGEE",
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
      name: "SCOUT'S_LUXURY_CAP",
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
          THE_SCOUT'S_SUPPLY.
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

const Footer = () => (
  <footer className="bg-white-canvas pt-16 pb-8">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
        <div className="md:col-span-1">
          <h3 className="text-2xl font-display font-bold tracking-[0.3em] text-worn-denim">SCOUT'S</h3>
        </div>
        <div>
          <h4 className="font-mono font-bold mb-4 text-smoke-tin tracking-wide">NAVIGATE</h4>
          <ul className="space-y-3 font-typewriter text-smoke-tin/80">
            <li><a href="/" className="hover:text-worn-denim tracking-wide">HOME</a></li>
            <li><a href="#services" className="hover:text-worn-denim tracking-wide">SERVICES</a></li>
            <li><a href="#process" className="hover:text-worn-denim tracking-wide">PROCESS</a></li>
            <li><a href="#about" className="hover:text-worn-denim tracking-wide">ABOUT</a></li>
            <li><a href="/clients" className="hover:text-worn-denim tracking-wide">CLIENTS</a></li>
            <li><a href="/shop" className="hover:text-worn-denim tracking-wide">SHOP</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono font-bold mb-4 text-smoke-tin tracking-wide">CONTACT</h4>
          <ul className="space-y-3 font-typewriter text-smoke-tin/80">
            <li className="tracking-wide">(555) 123-CLEAN</li>
            <li className="tracking-wide">hello@scout.work</li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono font-bold mb-4 text-smoke-tin tracking-wide">LEGAL</h4>
          <ul className="space-y-3 font-typewriter text-smoke-tin/80">
            <li className="tracking-wide">PRIVACY_POLICY</li>
            <li className="tracking-wide">TERMS_OF_SERVICE</li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t-2 border-saddle-dust/30 text-center">
        <p className="font-typewriter text-sm text-smoke-tin/60 tracking-wide">© 2025 SCOUT'S_WINDOW_CLEANING. SHOW_UP_CLEAN. LEAVE_CLEANER.</p>
      </div>
    </div>
  </footer>
);

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
      <ScoutHead />
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