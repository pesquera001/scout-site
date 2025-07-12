"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronLeft, ChevronRight, Star, Quote, Camera, 
  Building, Home as HomeIcon, Sparkles, ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ScoutHead = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Courier+Prime:wght@400;700&family=JetBrains+Mono:wght@300;400;500;700&family=Space+Mono:wght@400;700&display=swap');

    :root {
      --white-canvas: #F9F8F5;
      --worn-denim: #708B91;
      --prairie-clay: #B9856F;
      --saddle-dust: #E5D3BD;
      --smoke-tin: #78736E;
      --font-retro-display: 'Bebas Neue', sans-serif;
      --font-retro-mono: 'JetBrains Mono', monospace;
      --font-retro-typewriter: 'Courier Prime', monospace;
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
      font-family: var(--font-retro-typewriter);
    }
    
    .retro-shadow {
      text-shadow: 2px 2px 0px var(--saddle-dust);
    }
  `}</style>
);

const Nav = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white-canvas/80 backdrop-blur-md">
    <div className="container mx-auto px-6 h-20 flex justify-between items-center border-b border-saddle-dust/50">
      <div className="text-2xl font-display font-bold tracking-[0.3em] text-worn-denim">
        <a href="/">SCOUT</a>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a href="/" className="font-mono text-sm font-light hover:text-worn-denim transition-colors tracking-wide">HOME</a>
        <a href="/clients" className="font-mono text-sm font-light text-worn-denim tracking-wide">CLIENTS</a>
        <a href="/shop" className="font-mono text-sm font-light hover:text-worn-denim transition-colors tracking-wide">SHOP</a>
      </nav>
      <Button 
        className="bg-worn-denim text-white hover:bg-smoke-tin font-typewriter text-sm font-bold tracking-wide px-6 py-2"
      >
        GET_QUOTE
      </Button>
    </div>
  </header>
);

const PhotoCarousel = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  
  const photos = [
    {
      id: 1,
      title: "SUBURBAN_GRACE",
      description: "Ranch-style home, desert light filtering through spotless glass",
      location: "WESTSIDE_RESIDENTIAL",
      category: "residential"
    },
    {
      id: 2,
      title: "DIRECT_SUNLIGHT",
      description: "Worker mid-wipe, pressed whites against vintage storefront",
      location: "DOWNTOWN_DISTRICT", 
      category: "commercial"
    },
    {
      id: 3,
      title: "GLASS_REFLECTIONS",
      description: "Modern office complex, crystal clarity in every pane",
      location: "BUSINESS_PARK",
      category: "commercial"
    },
    {
      id: 4,
      title: "TOOLS_LAID_OUT",
      description: "Equipment arranged like a painter's kit, ready for work",
      location: "ON_LOCATION",
      category: "process"
    },
    {
      id: 5,
      title: "ONE_GLOVE_ON_SILL",
      description: "Still life perfection, editorial campaign aesthetic",
      location: "HISTORIC_BUILDING",
      category: "detail"
    },
    {
      id: 6,
      title: "VAN_IN_DUST",
      description: "Service vehicle against prairie backdrop, utility meets beauty",
      location: "RANCH_PROPERTY",
      category: "lifestyle"
    }
  ];

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const interval = setInterval(nextPhoto, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-prairie-clay text-prairie-clay mb-4">
            OUR_WORK
          </Badge>
          <h2 className="font-display text-5xl md:text-6xl text-worn-denim retro-shadow mb-6">
            SCOUT_SPRING_CLEAN_'25
          </h2>
          <p className="font-typewriter text-lg text-smoke-tin/80 max-w-2xl mx-auto tracking-wide">
            Every project photographed like a campaign. Still shots of perfection.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative aspect-[16/10] bg-gradient-to-br from-saddle-dust to-prairie-clay rounded-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhoto}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex items-center justify-center text-white/80"
              >
                <div className="text-center p-8">
                  <Camera className="w-16 h-16 mx-auto mb-6 opacity-70" />
                  <h3 className="font-display text-3xl md:text-4xl mb-4 retro-shadow">
                    {photos[currentPhoto].title}
                  </h3>
                  <p className="font-typewriter text-lg mb-4 tracking-wide">
                    {photos[currentPhoto].description}
                  </p>
                  <Badge variant="outline" className="border-white/50 text-white">
                    {photos[currentPhoto].location}
                  </Badge>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation buttons */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Photo indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPhoto(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentPhoto ? 'bg-worn-denim' : 'bg-saddle-dust'
                }`}
              />
            ))}
          </div>

          {/* Photo grid preview */}
          <div className="grid grid-cols-6 gap-4 mt-12">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => setCurrentPhoto(index)}
                className={`aspect-square bg-gradient-to-br from-saddle-dust to-prairie-clay rounded-lg relative overflow-hidden transition-all ${
                  index === currentPhoto ? 'ring-4 ring-worn-denim' : 'opacity-60 hover:opacity-80'
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-6 h-6 text-white/70" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      quote: "Scout doesn't advertise streak-free cleaning. It delivers it.",
      author: "MARGARET_CHEN",
      role: "HOMEOWNER",
      location: "WESTSIDE_RESIDENTIAL",
      rating: 5,
      project: "Bi-weekly residential service"
    },
    {
      id: 2,
      quote: "We wipe glass. We don't talk about it. Scout just shows up and does the work.",
      author: "DAVID_MORRISON",
      role: "PROPERTY_MANAGER", 
      location: "MORRISON_&_ASSOCIATES",
      rating: 5,
      project: "Commercial office complex"
    },
    {
      id: 3,
      quote: "Show up clean. Leave cleaner. That's Scout.",
      author: "ELENA_RODRIGUEZ",
      role: "ARCHITECT",
      location: "PLAZA_HEIGHTS",
      rating: 5,
      project: "Post-construction cleanup"
    },
    {
      id: 4,
      quote: "You may not notice the windows. That's the point.",
      author: "JAMES_PATTERSON",
      role: "BUSINESS_OWNER",
      location: "DOWNTOWN_STOREFRONT",
      rating: 5,
      project: "Weekly storefront maintenance"
    },
    {
      id: 5,
      quote: "The most beautiful clean you'll never notice. Perfect work, zero fuss.",
      author: "SARAH_WILLIAMS",
      role: "RESTAURANT_OWNER",
      location: "HISTORIC_DISTRICT",
      rating: 5,
      project: "Restaurant windows & patio"
    },
    {
      id: 6,
      quote: "Quiet hands. Clean lines. The art of doing. Scout gets it.",
      author: "MICHAEL_TORRES",
      role: "DESIGNER",
      location: "STUDIO_COMPLEX",
      rating: 5,
      project: "Creative workspace windows"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-worn-denim text-worn-denim mb-4">
            CLIENT_WORDS
          </Badge>
          <h2 className="font-display text-5xl md:text-6xl text-worn-denim retro-shadow mb-6">
            WHAT_PEOPLE_SAY
          </h2>
          <p className="font-typewriter text-lg text-smoke-tin/80 max-w-2xl mx-auto tracking-wide">
            Deadpan confidence. Clean like your windows.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-2 border-saddle-dust/50 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-12 text-center">
                  <Quote className="w-12 h-12 text-worn-denim/30 mx-auto mb-8" />
                  
                  <blockquote className="font-typewriter text-2xl md:text-3xl text-smoke-tin leading-relaxed mb-8 tracking-wide">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-prairie-clay text-prairie-clay" />
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="font-mono font-bold text-xl text-worn-denim tracking-[0.2em]">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="font-typewriter text-smoke-tin/70 tracking-wide">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="font-typewriter text-sm text-smoke-tin/60 tracking-wide">
                      {testimonials[currentTestimonial].location}
                    </div>
                    <Badge variant="outline" className="border-prairie-clay text-prairie-clay mt-4">
                      {testimonials[currentTestimonial].project}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-worn-denim/10 hover:bg-worn-denim/20 backdrop-blur-sm rounded-full p-3 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-worn-denim" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-worn-denim/10 hover:bg-worn-denim/20 backdrop-blur-sm rounded-full p-3 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-worn-denim" />
          </button>

          {/* Testimonial indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-worn-denim' : 'bg-saddle-dust'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="py-20 md:py-28 bg-smoke-tin text-white-canvas">
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-4xl md:text-5xl retro-shadow mb-6">
          READY_FOR_IMPOSSIBLY_CLEAN_WINDOWS?
        </h2>
        <p className="font-typewriter text-lg opacity-80 mb-8 max-w-2xl mx-auto tracking-wide">
          Scout works. Your windows shine. Let's get started.
        </p>
        <Button 
          size="lg"
          className="bg-prairie-clay hover:bg-opacity-90 font-typewriter font-bold tracking-wide px-8 py-4 text-base"
        >
          GET_YOUR_QUOTE
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white-canvas pt-16 pb-8">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
        <div className="md:col-span-1">
          <h3 className="text-2xl font-display font-bold tracking-[0.3em] text-worn-denim">SCOUT</h3>
        </div>
        <div>
          <h4 className="font-mono font-bold mb-4 text-smoke-tin tracking-wide">NAVIGATE</h4>
          <ul className="space-y-3 font-typewriter text-smoke-tin/80">
            <li><a href="/" className="hover:text-worn-denim tracking-wide">HOME</a></li>
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
        <p className="font-typewriter text-sm text-smoke-tin/60 tracking-wide">© 2025 SCOUT_WINDOW_CLEANING. SHOW_UP_CLEAN. LEAVE_CLEANER.</p>
      </div>
    </div>
  </footer>
);

export default function Clients() {
  return (
    <>
      <ScoutHead />
      <Nav />
      <main className="pt-20">
        <PhotoCarousel />
        <TestimonialCarousel />
        <CTASection />
      </main>
      <Footer />
    </>
  );
} 