import React, { useState } from 'react';
import { Search, Calendar, Phone, Clock, Wrench, Shield, CheckCircle2 } from 'lucide-react';
import { SYMPTOMS_LIST, PHONE_NUMBER, DISPLAY_PHONE } from '../data/repairData';
import { SymptomTriageItem } from '../types';

interface SymptomTriageProps {
  onBookSymptom: (symptom: SymptomTriageItem) => void;
}

export const SymptomTriage: React.FC<SymptomTriageProps> = ({ onBookSymptom }) => {
  const [selectedSymptomId, setSelectedSymptomId] = useState<string>(SYMPTOMS_LIST[0].id);

  const activeSymptom = SYMPTOMS_LIST.find((s) => s.id === selectedSymptomId) || SYMPTOMS_LIST[0];

  return (
    <section className="py-12 sm:py-16 bg-slate-50/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-[11px] font-bold tracking-wider uppercase text-blue-600 font-mono block mb-2">
            IMMEDIATE TRIAGE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight mb-3">
            Something not working? Tap your symptom.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Get instant telemetry on likely causes, parts involved, and 1-click booking priority.
          </p>
        </div>

        {/* Symptom Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-5xl mx-auto mb-8">
          {SYMPTOMS_LIST.map((item) => {
            const isSelected = item.id === selectedSymptomId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedSymptomId(item.id)}
                className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-600 ring-offset-2'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {item.symptomName}
              </button>
            );
          })}
        </div>

        {/* Dynamic Telemetry / Diagnostic Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200/90 shadow-lg overflow-hidden transition-all duration-300">
          <div className="p-6 sm:p-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left 8 cols: Diagnostic Specs */}
              <div className="lg:col-span-8 text-left space-y-4">
                {/* Diagnostic Badge */}
                <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-bold uppercase tracking-wider">
                  <Search className="w-3.5 h-3.5" />
                  <span>{activeSymptom.badgeLabel}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-sans font-medium">
                    Telemetry Check
                  </span>
                </div>

                {/* Diagnostic Title */}
                <h3 className="text-lg sm:text-xl font-black text-slate-950 leading-snug">
                  {activeSymptom.diagnosticTitle}
                </h3>

                {/* Likely Causes */}
                <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/70">
                  <span className="block text-[11px] font-bold uppercase text-slate-500 font-mono mb-1">
                    LIKELY ROOT CAUSES:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {activeSymptom.likelyRootCauses}
                  </p>
                </div>

                {/* 3 Metric Chips */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <span className="block text-[10px] font-mono uppercase text-slate-400 font-bold mb-0.5">
                      TYPICAL TIME
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-blue-600" />
                      {activeSymptom.typicalTime}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <span className="block text-[10px] font-mono uppercase text-slate-400 font-bold mb-0.5">
                      PARTS INSPECTED
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 truncate flex items-center gap-1">
                      <Wrench className="w-3 h-3 text-emerald-600" />
                      {activeSymptom.partsInspected}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                    <span className="block text-[10px] font-mono uppercase text-slate-400 font-bold mb-0.5">
                      DOORSTEP CHECK
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 truncate flex items-center gap-1">
                      <Shield className="w-3 h-3 text-indigo-600" />
                      {activeSymptom.doorstepCheck}
                    </span>
                  </div>
                </div>

              </div>

              {/* Right 4 cols: Action Panel */}
              <div className="lg:col-span-4 bg-slate-50 p-5 sm:p-6 rounded-xl border border-slate-200/80 flex flex-col items-center text-center justify-center">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Ready to resolve this?
                </p>

                <button
                  type="button"
                  onClick={() => onBookSymptom(activeSymptom)}
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 mb-2.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book This Fix</span>
                </button>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Ask Tech: {DISPLAY_PHONE}</span>
                </a>

                <div className="mt-3 flex items-center gap-1 text-[11px] text-slate-500">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Zero repair fee without prior estimate</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
