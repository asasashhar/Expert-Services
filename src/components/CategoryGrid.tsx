import React from 'react';
import { Wind, RotateCcw, Cpu, Droplets, Fan, Flame, ArrowRight, ArrowUpRight } from 'lucide-react';
import { APPLIANCE_CATEGORIES } from '../data/repairData';
import { ApplianceCategory } from '../types';

interface CategoryGridProps {
  onSelectCategory: (category: ApplianceCategory) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wind':
        return <Wind className="w-5 h-5" />;
      case 'RotateCcw':
        return <RotateCcw className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5" />;
      case 'Fan':
        return <Fan className="w-5 h-5" />;
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      default:
        return <Wind className="w-5 h-5" />;
    }
  };

  return (
    <section id="what-needs-fixing" className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold tracking-wider uppercase text-blue-600 font-mono">
                TRIAGE & SELECTION
              </span>
              <span className="sm:hidden text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                6 categories
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
              What needs fixing today?
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md leading-relaxed">
            Select your appliance for targeted fault isolation, upfront transparent pricing, and priority dispatch across South Mumbai.
          </p>
        </div>

        {/* 6 Category Cards Grid (2x3 on desktop, 2-col on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {APPLIANCE_CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => onSelectCategory(category)}
              className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between cursor-pointer active:scale-[0.99]"
            >
              <div>
                {/* Header row: Icon + Code */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200 flex items-center justify-center shadow-2xs">
                    {getIcon(category.iconName)}
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 group-hover:text-blue-600 font-mono text-xs font-semibold transition-colors">
                    <span>{category.code}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {category.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                  {category.description}
                </p>
              </div>

              {/* Bottom row: Price + Action link */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-slate-500 font-medium">From</span>
                  <span className="text-sm sm:text-base font-extrabold text-slate-900">
                    ₹{category.startingPrice}
                  </span>
                  {category.originalPrice && (
                    <span className="text-xs text-slate-400 line-through">
                      ₹{category.originalPrice}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:text-blue-700">
                  <span>Schedule Visit</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
