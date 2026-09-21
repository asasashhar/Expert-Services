import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, ChevronDown, Wrench, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { PHONE_NUMBER, DISPLAY_PHONE, WORKSHOP_ADDRESS } from '../data/repairData';

interface NavbarProps {
  onBookClick: () => void;
  onSelectCategory?: (categoryId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick, onSelectCategory }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navLinks = [
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'About', href: '#about-standards' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#workshop-hub' },
  ];

  const serviceItems = [
    { id: 'ac-repair', label: 'AC Repair & Service' },
    { id: 'washing-machine', label: 'Washing Machine Repair' },
    { id: 'refrigerator', label: 'Refrigerator Repair' },
    { id: 'water-purifier', label: 'RO / UV Water Purifier' },
    { id: 'kitchen-chimney', label: 'Kitchen Chimney Service' },
    { id: 'cooking-range', label: 'Cooking Range / Hob' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top micro-banner for mobile/tablet matching mobile screenshot */}
      <div className="bg-slate-900 text-slate-300 text-[11px] sm:text-xs py-1 px-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          <span className="text-slate-300 font-medium truncate">
            Mohammed Ali Road, Mandvi • Live Doorstep Dispatch
          </span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 text-blue-400 font-semibold pl-2">
          <span>⚡ South Mumbai</span>
          <span className="hidden md:inline text-slate-400">• 8:00 AM - 9:30 PM</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Logo */}
          <a href="#" className="flex items-center group cursor-pointer">
            <BrandLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center gap-1 py-2 hover:text-blue-600 transition-colors cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-1"
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Appliance Categories
                  </div>
                  {serviceItems.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => {
                        if (onSelectCategory) onSelectCategory(s.id);
                        scrollToSection('#what-needs-fixing');
                      }}
                      className="w-full text-left px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 flex items-center justify-between transition-colors"
                    >
                      <span>{s.label}</span>
                      <span className="text-[10px] text-blue-600 font-medium">Book →</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Phone Pill */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 hover:bg-emerald-100 hover:border-emerald-300 transition-all text-xs sm:text-sm font-semibold shadow-xs"
              title="Direct Mumbai Dispatch Helpline"
            >
              <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                <Phone className="w-3 h-3" />
              </div>
              <span className="tracking-wide">{DISPLAY_PHONE}</span>
            </a>

            {/* Book Service Primary Button */}
            <button
              type="button"
              onClick={onBookClick}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-98"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Service</span>
            </button>

            {/* Technician / Help Badge */}
            <div 
              className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors"
              title="Verified Dispatch"
              onClick={() => scrollToSection('#workshop-hub')}
            >
              <ShieldCheck className="w-4 h-4 text-blue-600" />
            </div>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center"
              aria-label="Call Dispatch"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 border border-slate-200 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-3 animate-in fade-in">
          <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 text-xs text-slate-700">
            <div className="flex items-center gap-2 font-bold text-blue-900 mb-1">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>Bhendi Bazaar Service Hub</span>
            </div>
            <p className="text-[11px] text-slate-600">
              {WORKSHOP_ADDRESS.line1}, {WORKSHOP_ADDRESS.line2}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {serviceItems.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  if (onSelectCategory) onSelectCategory(s.id);
                  scrollToSection('#what-needs-fixing');
                }}
                className="text-left p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="border-t border-slate-100 pt-2 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-blue-600"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-2.5 rounded-lg bg-blue-600 text-white text-center font-semibold text-sm shadow-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Doorstep Service</span>
            </button>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="w-full py-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-center font-semibold text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Helpline: {DISPLAY_PHONE}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
