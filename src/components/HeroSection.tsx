import React from 'react';
import { Phone, Calendar, ArrowRight, ShieldCheck, Zap, Layers, Truck, MapPin } from 'lucide-react';
import { PHONE_NUMBER, DISPLAY_PHONE } from '../data/repairData';

interface HeroSectionProps {
  onBookClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookClick }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Hero Content (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Region & Dispatch Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>HOME APPLIANCE REPAIR • SOUTH & CENTRAL MUMBAI</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-slate-950 tracking-tight leading-[1.12] mb-4">
              Your Appliance Stops.<br />
              <span className="text-slate-900">We Get It Running Again.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mb-8">
              From AC and refrigerators to washing machines, chimneys, cooking ranges and RO/UV purifiers, get professional appliance service with a simple doorstep booking.
            </p>

            {/* Call to Actions */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                type="button"
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform active:scale-98 cursor-pointer group"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Doorstep Service</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-300 shadow-xs hover:border-slate-400 transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call Hotline: <span className="font-mono text-slate-950">{DISPLAY_PHONE}</span></span>
              </a>
            </div>

            {/* 3 Value Pillars */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-200/80">
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">Doorstep Service</h4>
                  <p className="text-[11px] text-slate-500 leading-tight">Certified specialists</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">Fast Response</h4>
                  <p className="text-[11px] text-slate-500 leading-tight">Across South Mumbai</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">6 Categories</h4>
                  <p className="text-[11px] text-slate-500 leading-tight">Single-visit repairs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Card (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl">
              {/* Technician Photo */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
                  alt="Certified Mumbai AC and Appliance Technician testing electrical components"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Mobile Floating Badge (as seen in Image 6) */}
                <div className="sm:hidden absolute top-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md rounded-xl p-2.5 text-white text-xs border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">Active Technicians Nearby</p>
                      <p className="text-xs font-semibold text-white">Mandvi • Bhendi Bazaar • Byculla</p>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                </div>
              </div>

              {/* Service Dispatch Telemetry Card (Matching Image 1 exact UI overlay) */}
              <div className="p-4 sm:p-4.5 bg-slate-900 text-white">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300 font-semibold">
                      SERVICE DISPATCH • ACTIVE
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300 border border-slate-700">
                    MH-01 EXP
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-left mb-2.5 text-xs">
                  <div>
                    <span className="block text-[10px] font-mono text-slate-400 uppercase">Appliance Target</span>
                    <span className="font-semibold text-slate-100">Split AC (Cooling Test)</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-400 uppercase">Assigned Sector</span>
                    <span className="font-semibold text-slate-100">Mandvi / Bhendi Bazaar</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
                  <div className="text-slate-300">
                    <span className="text-slate-400 text-[11px]">Desk Hotline: </span>
                    <a href={`tel:${PHONE_NUMBER}`} className="font-mono font-bold text-blue-400 hover:underline">
                      {DISPLAY_PHONE}
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px] font-semibold">
                    <Truck className="w-3.5 h-3.5 animate-bounce" />
                    <span>On Route</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
