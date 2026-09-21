import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { PHONE_NUMBER, DISPLAY_PHONE, WHATSAPP_NUMBER, DISPLAY_WHATSAPP, WORKSHOP_ADDRESS } from '../data/repairData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-12 pb-24 sm:pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand & Description */}
        <div className="max-w-2xl mb-8">
          <BrandLogo size="md" />
          <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
            Doorstep appliance maintenance, diagnostic triage, and genuine spare repairs throughout Mumbai.
          </p>
        </div>

        {/* Contact Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mb-8">
          
          {/* Direct Helpline */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-xs truncate">
                <span className="font-mono font-bold text-slate-900 block">{DISPLAY_PHONE}</span>
                <span className="text-slate-500 text-[11px]">(Helpline)</span>
              </div>
            </div>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors whitespace-nowrap"
            >
              CALL NOW
            </a>
          </div>

          {/* WhatsApp Direct */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="text-xs truncate">
                <span className="font-mono font-bold text-slate-900 block">{DISPLAY_WHATSAPP}</span>
                <span className="text-slate-500 text-[11px]">(WhatsApp)</span>
              </div>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=Hello%20Expert%20Services,%20I%20need%20appliance%20repair%20in%20Mumbai`}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors whitespace-nowrap"
            >
              MESSAGE
            </a>
          </div>

        </div>

        {/* Registered Workshop Address */}
        <div className="border-t border-slate-100 pt-6 pb-6 text-xs text-slate-500 leading-relaxed max-w-2xl">
          <span className="font-bold text-slate-700 block mb-1">Registered Service Workshop:</span>
          <p>
            {WORKSHOP_ADDRESS.line1}, {WORKSHOP_ADDRESS.line2}, {WORKSHOP_ADDRESS.city}, {WORKSHOP_ADDRESS.state} {WORKSHOP_ADDRESS.pincode}
          </p>
        </div>

        {/* Bottom Legal / Dispatch Info */}
        <div className="border-t border-slate-200/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© Expert Services Mumbai</p>
          <div className="flex items-center gap-2 text-[11px] font-mono font-medium text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>South Mumbai Dispatch</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
