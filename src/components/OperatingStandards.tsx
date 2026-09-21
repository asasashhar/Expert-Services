import React from 'react';
import { Phone, MapPin, Layers, ShieldCheck, ClipboardCheck, PhoneCall, Check } from 'lucide-react';
import { PHONE_NUMBER, DISPLAY_PHONE, INSPECTION_CHECKLIST } from '../data/repairData';

export const OperatingStandards: React.FC = () => {
  const standards = [
    {
      title: "Direct Phone Access",
      description: `When you dial ${DISPLAY_PHONE}, you speak directly with Mumbai dispatch coordinators who understand local appliance models and localities.`,
      icon: <Phone className="w-4 h-4 text-blue-600" />
    },
    {
      title: "Dedicated South & Central Mumbai Fleet",
      description: "Mobile service technicians pre-stocked with authentic replacement spares for speedy same-day turnaround.",
      icon: <MapPin className="w-4 h-4 text-emerald-600" />
    },
    {
      title: "Multi-Appliance Single Visit Coordination",
      description: "Need your AC checked and the refrigerator serviced in the same home slot? We bundle diagnostics into a single coordinated appointment.",
      icon: <Layers className="w-4 h-4 text-indigo-600" />
    },
    {
      title: "Zero Repair Without Your Consent",
      description: "Technicians provide an itemized physical assessment and quotation prior to fitting any replacement component.",
      icon: <ShieldCheck className="w-4 h-4 text-blue-600" />
    }
  ];

  return (
    <section id="about-standards" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (7 cols): Editorial & Values */}
          <div className="lg:col-span-7 text-left">
            <span className="text-[11px] font-bold tracking-wider uppercase text-blue-600 font-mono block mb-2">
              OUR OPERATING STANDARD
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
              Why Mumbai residents need a service partner they can actually reach.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
              Modern urban life cannot stall for broken appliances. Unlike aggregator apps with anonymous third-party contractors and untraceable call centers, Expert Services operates directly from Mohammed Ali Road.
            </p>

            {/* 4 Feature Items */}
            <div className="space-y-4">
              {standards.map((s, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/80">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                    {s.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug mb-1">
                      {s.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Inspection Checklist Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden">
              
              {/* Header */}
              <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-blue-600" />
                  <h3 className="text-sm font-bold text-slate-900">
                    Inspection Checklist Baseline
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-mono font-bold">
                  100% AUDITED
                </span>
              </div>

              {/* Table list */}
              <div className="divide-y divide-slate-100 p-2 sm:p-3 text-xs">
                {INSPECTION_CHECKLIST.map((item, idx) => (
                  <div key={idx} className="py-3 px-3 flex items-center justify-between gap-3">
                    <span className="text-slate-700 font-medium leading-tight">
                      {item.parameter}
                    </span>
                    <span className="flex-shrink-0 px-2 py-1 rounded bg-slate-100 text-slate-800 font-mono text-[11px] font-semibold border border-slate-200/80">
                      {item.standardValue}
                    </span>
                  </div>
                ))}
              </div>

              {/* Direct Line Guarantee Banner */}
              <div className="p-4 sm:p-5 bg-blue-600 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-blue-200 font-bold">
                    DIRECT LINE GUARANTEE
                  </span>
                  <p className="text-xs sm:text-sm font-bold">
                    Need urgent support right now?
                  </p>
                </div>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-white hover:bg-blue-50 text-blue-700 font-bold text-xs sm:text-sm shadow-sm transition-colors whitespace-nowrap"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call {DISPLAY_PHONE}</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
