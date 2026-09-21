import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Building2, Compass, Shield } from 'lucide-react';
import { WORKSHOP_ADDRESS, PHONE_NUMBER, DISPLAY_PHONE, LANDMARK_CORRIDORS, DISPATCH_ZONES } from '../data/repairData';

export const WorkshopHub: React.FC = () => {
  return (
    <section id="workshop-hub" className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Workshop Details (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between text-left">
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono uppercase font-bold text-blue-600 tracking-wider">
                  BHENDI BAZAAR HUB
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open Today
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mb-3">
                Appliance Service in Mumbai
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Our central operations workshop and parts distribution hub is anchored on Mohammed Ali Road. Fast transit routes enable quick technician arrival across South Mumbai pincodes.
              </p>

              {/* Contact Detail Blocks */}
              <div className="space-y-4 mb-6">
                
                {/* Physical Workshop Address */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <Building2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block mb-0.5">
                      Workshop & Service Desk:
                    </span>
                    <span className="text-slate-600 leading-relaxed block">
                      {WORKSHOP_ADDRESS.line1}, {WORKSHOP_ADDRESS.line2}, {WORKSHOP_ADDRESS.city}, {WORKSHOP_ADDRESS.state} {WORKSHOP_ADDRESS.pincode}
                    </span>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                  <Clock className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 mr-2">Operating Hours:</span>
                    <span className="text-slate-600">{WORKSHOP_ADDRESS.hours}</span>
                  </div>
                </div>

                {/* Direct Telephone */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                  <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 mr-2">Direct Telephone:</span>
                    <a href={`tel:${PHONE_NUMBER}`} className="font-mono font-bold text-blue-600 hover:underline">
                      {DISPLAY_PHONE}
                    </a>
                  </div>
                </div>

              </div>

              {/* Landmark Corridors */}
              <div className="mb-5">
                <span className="block text-[10px] font-mono uppercase font-bold text-slate-400 mb-2">
                  KEY LANDMARK CORRIDORS:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {LANDMARK_CORRIDORS.map((corridor, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/80">
                      📍 {corridor}
                    </span>
                  ))}
                </div>
              </div>

              {/* Express Dispatch Zones */}
              <div className="mb-6">
                <span className="block text-[10px] font-mono uppercase font-bold text-slate-400 mb-2">
                  EXPRESS DISPATCH ZONES:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {DISPATCH_ZONES.map((zone, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[11px] font-semibold border border-blue-100">
                      {zone}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
              <a
                href={WORKSHOP_ADDRESS.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-blue-600" />
                <span>Get Directions</span>
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Workshop</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Map Mockup (6 cols) */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 min-h-[360px] flex flex-col justify-end">
            {/* Styled Map Canvas / SVG Layer */}
            <div className="absolute inset-0 bg-[#e2e8f0]">
              <svg className="w-full h-full object-cover" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Mumbai coastline silhouette and water */}
                <rect width="800" height="600" fill="#cbd5e1" />
                <path d="M 0 0 L 220 0 L 250 200 L 280 400 L 320 600 L 0 600 Z" fill="#93c5fd" opacity="0.3" />
                
                {/* Street grids */}
                <path d="M 260 50 L 780 120" stroke="#ffffff" strokeWidth="6" />
                <path d="M 290 180 L 750 260" stroke="#ffffff" strokeWidth="8" />
                <path d="M 330 320 L 790 380" stroke="#3b82f6" strokeWidth="4" strokeDasharray="6 6" />
                <path d="M 370 450 L 740 500" stroke="#ffffff" strokeWidth="5" />
                
                {/* JJ Flyover Arterial */}
                <path d="M 520 20 L 510 580" stroke="#2563eb" strokeWidth="7" />
                
                {/* Mohammed Ali Road */}
                <path d="M 440 60 L 460 540" stroke="#ffffff" strokeWidth="10" />
                <path d="M 440 60 L 460 540" stroke="#f59e0b" strokeWidth="4" />

                {/* Secondary cross-streets */}
                <path d="M 320 140 L 680 140" stroke="#ffffff" strokeWidth="4" />
                <path d="M 340 240 L 700 240" stroke="#ffffff" strokeWidth="5" />
                <path d="M 360 360 L 720 360" stroke="#ffffff" strokeWidth="4" />
                <path d="M 380 460 L 750 460" stroke="#ffffff" strokeWidth="4" />

                {/* Area blocks */}
                <rect x="470" y="180" width="140" height="90" rx="6" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
                <rect x="330" y="270" width="100" height="80" rx="6" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
                <rect x="470" y="300" width="150" height="110" rx="6" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />

                {/* Hub Pin: Mohammed Ali Road / Bhendi Bazaar */}
                <g transform="translate(450, 260)">
                  <circle cx="0" cy="0" r="28" fill="#2563eb" fillOpacity="0.2">
                    <animate attributeName="r" values="20;36;20" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="0" cy="0" r="14" fill="#2563eb" stroke="#ffffff" strokeWidth="3" />
                  <circle cx="0" cy="0" r="5" fill="#ffffff" />
                  <rect x="-70" y="-38" width="140" height="22" rx="4" fill="#0f172a" />
                  <text x="0" y="-23" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="monospace">
                    WORKSHOP DISPATCH HQ
                  </text>
                </g>

                {/* Nearby Active Tech Markers */}
                <g transform="translate(380, 180)">
                  <circle cx="0" cy="0" r="7" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                  <rect x="-40" y="-24" width="80" height="18" rx="3" fill="#ffffff" stroke="#cbd5e1" />
                  <text x="0" y="-12" textAnchor="middle" fill="#0f172a" fontSize="9" fontWeight="600">
                    Mandvi Tech
                  </text>
                </g>

                <g transform="translate(560, 340)">
                  <circle cx="0" cy="0" r="7" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                  <rect x="-55" y="-24" width="110" height="18" rx="3" fill="#ffffff" stroke="#cbd5e1" />
                  <text x="0" y="-12" textAnchor="middle" fill="#0f172a" fontSize="9" fontWeight="600">
                    Crawford Market Tech
                  </text>
                </g>

                <g transform="translate(390, 420)">
                  <circle cx="0" cy="0" r="7" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                  <rect x="-50" y="-24" width="100" height="18" rx="3" fill="#ffffff" stroke="#cbd5e1" />
                  <text x="0" y="-12" textAnchor="middle" fill="#0f172a" fontSize="9" fontWeight="600">
                    Marine Lines Fleet
                  </text>
                </g>

                <g transform="translate(580, 140)">
                  <circle cx="0" cy="0" r="7" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                  <rect x="-45" y="-24" width="90" height="18" rx="3" fill="#ffffff" stroke="#cbd5e1" />
                  <text x="0" y="-12" textAnchor="middle" fill="#0f172a" fontSize="9" fontWeight="600">
                    Byculla Van #3
                  </text>
                </g>
              </svg>
            </div>

            {/* Floating Coverage Hub Card (Exact match to Image 1) */}
            <div className="relative z-10 m-4 sm:m-6 bg-slate-900/95 backdrop-blur-md rounded-xl p-4 text-white border border-slate-700/80 shadow-lg text-left">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300">
                  ACTIVE COVERAGE HUB
                </span>
              </div>
              <p className="text-xs text-slate-200 leading-snug mb-3">
                Technicians dispatched daily from Mohammed Ali Road, Bhendi Bazaar, Mandvi 400003.
              </p>
              <div className="flex items-center justify-between text-[11px] pt-2 border-t border-slate-800">
                <a
                  href={WORKSHOP_ADDRESS.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Open in Google Maps</span>
                </a>
                <span className="text-slate-400 font-mono">South Mumbai</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
