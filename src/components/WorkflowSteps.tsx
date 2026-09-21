import React from 'react';
import { Zap, Calendar, Wrench, CheckCircle } from 'lucide-react';
import { PHONE_NUMBER } from '../data/repairData';

export const WorkflowSteps: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Tell Us the Problem",
      description: `Specify symptoms through the online form or directly ring our dispatch desk on ${PHONE_NUMBER}.`,
      badge: "⚡ Immediate Intake",
      icon: <Zap className="w-4 h-4 text-blue-600" />
    },
    {
      num: "02",
      title: "Doorstep Slot",
      description: "Pick a morning, afternoon, or evening window that fits your schedule across South and Central Mumbai.",
      badge: "📅 Exact ETA Window",
      icon: <Calendar className="w-4 h-4 text-blue-600" />
    },
    {
      num: "03",
      title: "On-Site Diagnosis",
      description: "A certified specialist uses diagnostic meters to identify the root component fault with transparent pricing.",
      badge: "⚙ Upfront Approval",
      icon: <Wrench className="w-4 h-4 text-blue-600" />
    },
    {
      num: "04",
      title: "Repair & Testing",
      description: "Replacement with genuine parts, calibration run, and live pressure or current draw tests before sign-off.",
      badge: "✓ Verified Function",
      icon: <CheckCircle className="w-4 h-4 text-emerald-600" />
    }
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-[11px] font-bold tracking-wider uppercase text-blue-600 font-mono block mb-2">
            WORKFLOW TELEMETRY
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight mb-3">
            Four clean steps to working appliances.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Zero ambiguity, direct Mumbai desk communication, and punctual execution.
          </p>
        </div>

        {/* 4 Steps Grid (or stacked on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                {/* Number Badge */}
                <div className="w-9 h-9 rounded-lg bg-blue-600 text-white font-mono font-bold text-sm flex items-center justify-center mb-4 shadow-xs">
                  {step.num}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Sub-badge */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-blue-700 font-mono">
                <span>{step.badge}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
