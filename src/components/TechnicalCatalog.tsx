import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { APPLIANCE_CATEGORIES } from '../data/repairData';
import { ApplianceCategory } from '../types';

interface TechnicalCatalogProps {
  onBookCategory: (category: ApplianceCategory) => void;
}

export const TechnicalCatalog: React.FC<TechnicalCatalogProps> = ({ onBookCategory }) => {
  return (
    <section id="services" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 text-left">
          <span className="text-[11px] font-bold tracking-wider uppercase text-blue-600 font-mono block mb-2">
            TECHNICAL CATALOG
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight mb-3">
            Engineered repairs, authentic spare parts.
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Every appliance category serviced follows standard OEM inspection checklists and clinical precision.
          </p>
        </div>

        {/* 6 Technical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {APPLIANCE_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-400 border-b border-slate-100 pb-3 mb-4">
                  <span className="text-blue-600 uppercase tracking-wider">{cat.categoryType}</span>
                  <span>{cat.specLabel}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {cat.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {cat.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2.5 mb-6">
                  {cat.bulletPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onBookCategory(cat)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-700 border border-slate-200 hover:border-blue-200 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Book {cat.name.split(' ')[0]} Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
