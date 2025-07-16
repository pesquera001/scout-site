"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [buttonText, setButtonText] = useState("GET_QUOTE");
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasScrolledPastMarquee, setHasScrolledPastMarquee] = useState(false);
  const [isLanding, setIsLanding] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLanding(
        window.location.pathname.startsWith('/scottsdale-window-cleaning') ||
        window.location.pathname.startsWith('/book')
      );
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const marqueeElement = document.querySelector('.marquee-content');
      if (marqueeElement) {
        const marqueeBottom = marqueeElement.getBoundingClientRect().bottom;
        const hasPassed = marqueeBottom < 0;
        if (hasPassed && !hasScrolledPastMarquee) {
          setHasScrolledPastMarquee(true);
          animateButtonText();
        } else if (!hasPassed && hasScrolledPastMarquee) {
          setHasScrolledPastMarquee(false);
          setButtonText("GET_QUOTE");
        }
      }
    };

    const animateButtonText = () => {
      if (isAnimating) return;
      setIsAnimating(true);
      const originalText = "GET_QUOTE";
      const targetText = "SAME_DAY_QUOTE";
      let currentText = originalText;
      const deleteInterval = setInterval(() => {
        if (currentText.length > 0) {
          currentText = currentText.slice(0, -1);
          setButtonText(currentText);
        } else {
          clearInterval(deleteInterval);
          let newText = "";
          const typeInterval = setInterval(() => {
            if (newText.length < targetText.length) {
              newText += targetText[newText.length];
              setButtonText(newText);
            } else {
              clearInterval(typeInterval);
              setIsAnimating(false);
            }
          }, 100);
        }
      }, 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolledPastMarquee, isAnimating]);

  return (
    <header className="bg-white-canvas/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center border-b border-saddle-dust/50">
        <div className="text-3xl md:text-4xl font-display font-bold tracking-[0.3em] text-worn-denim">
          <a href="/">FRIDAY'S</a>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="font-mono text-sm font-bold text-worn-denim tracking-wide">HOME</a>
          <a href={isLanding ? "/#about" : "#about"} className="font-mono text-sm font-bold hover:text-worn-denim transition-colors tracking-wide">ABOUT</a>
          <a href="#services" className="font-mono text-sm font-bold hover:text-worn-denim transition-colors tracking-wide">SERVICES</a>
          <a href={isLanding ? "/#process" : "#process"} className="font-mono text-sm font-bold hover:text-worn-denim transition-colors tracking-wide">PROCESS</a>
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
          className="bg-worn-denim text-white hover:bg-smoke-tin font-typewriter text-sm font-bold tracking-wide px-6 py-2 transition-all duration-300"
        >
          {buttonText}
        </Button>
        <div className="hidden md:flex items-center gap-2">
          <Phone size={16} className="text-worn-denim" />
          <a href="tel:(480) 701-4847" className="font-mono text-sm font-bold text-worn-denim tracking-wide hover:text-smoke-tin transition-colors">
            (480) 701-4847
          </a>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white-canvas border-b border-saddle-dust/50">
          <nav className="container mx-auto px-6 py-4 space-y-4">
            <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="block font-mono text-sm font-light text-worn-denim tracking-wide hover:text-smoke-tin transition-colors">HOME</a>
            <a href={isLanding ? "/#about" : "#about"} onClick={() => setIsMobileMenuOpen(false)} className="block font-mono text-sm font-light text-worn-denim tracking-wide hover:text-smoke-tin transition-colors">ABOUT</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block font-mono text-sm font-light text-worn-denim tracking-wide hover:text-smoke-tin transition-colors">SERVICES</a>
            <a href={isLanding ? "/#process" : "#process"} onClick={() => setIsMobileMenuOpen(false)} className="block font-mono text-sm font-light text-worn-denim tracking-wide hover:text-smoke-tin transition-colors">PROCESS</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav; 