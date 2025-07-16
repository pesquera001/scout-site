import React from "react";

const Footer = () => (
  <footer className="bg-white-canvas pt-16 pb-8">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
        <div className="md:col-span-1">
          <h3 className="text-2xl font-display font-bold tracking-[0.3em] text-worn-denim">FRIDAY'S</h3>
        </div>
        <div>
          <h4 className="font-mono font-bold mb-4 text-smoke-tin tracking-wide">NAVIGATE</h4>
          <ul className="space-y-3 font-typewriter text-smoke-tin/80">
            <li><a href="/" className="hover:text-worn-denim tracking-wide">HOME</a></li>
            <li><a href="#services" className="hover:text-worn-denim tracking-wide">SERVICES</a></li>
            <li><a href="#process" className="hover:text-worn-denim tracking-wide">PROCESS</a></li>
            <li><a href="#about" className="hover:text-worn-denim tracking-wide">ABOUT</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono font-bold mb-4 text-smoke-tin tracking-wide">CONTACT</h4>
          <ul className="space-y-3 font-typewriter text-smoke-tin/80">
            <li className="tracking-wide">(480) 701-4847</li>
            <li className="tracking-wide">info@fridayswindows.com</li>
            <li className="tracking-wide">SUNDAY-SATURDAY</li>
            <li className="tracking-wide">7:30 AM - 7:30 PM</li>
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
        <p className="font-typewriter text-sm text-smoke-tin/60 tracking-wide">© 2025 FRIDAY'S_WINDOW_CLEANING. SHOW_UP_CLEAN. LEAVE_CLEANER.</p>
      </div>
    </div>
  </footer>
);

export default Footer; 