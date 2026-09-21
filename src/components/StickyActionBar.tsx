import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { PHONE_NUMBER, DISPLAY_PHONE, WHATSAPP_NUMBER } from '../data/repairData';

interface StickyActionBarProps {
  onBookClick: () => void;
}

export const StickyActionBar: React.FC<StickyActionBarProps> = ({ onBookClick }) => {
  return (
    <>
      {/* Desktop Floating Action Stack (Bottom-Right, matching Image 1) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2.5">
        {/* Chat on WhatsApp Pill */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=Hello%20Expert%20Services,%20I%20need%20appliance%20repair%20in%20Mumbai`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold shadow-lg border border-slate-200 transition-transform hover:-translate-y-0.5 group"
        >
          <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center">
            <MessageSquare className="w-3 h-3" />
          </div>
          <span>Chat on WhatsApp</span>
        </a>

        {/* Direct Call Button */}
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-xl transition-transform hover:-translate-y-0.5 active:scale-95 group"
        >
          <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <span>Call {DISPLAY_PHONE}</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar (Matching Image 6) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 px-3 py-2 flex items-center gap-2 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
        {/* Call button */}
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex-1 py-2.5 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex flex-col items-center justify-center gap-0.5"
        >
          <Phone className="w-4 h-4 text-emerald-600" />
          <span>Call</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=Hello%20Expert%20Services,%20I%20need%20appliance%20repair%20in%20Mumbai`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-2.5 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold flex flex-col items-center justify-center gap-0.5"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        {/* Book Service primary button */}
        <button
          type="button"
          onClick={onBookClick}
          className="flex-[2] py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Service</span>
        </button>
      </div>
    </>
  );
};
