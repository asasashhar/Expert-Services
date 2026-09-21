import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle2, Lock, ArrowRight, Phone, MessageSquare, AlertCircle, Clock } from 'lucide-react';
import { BookingFormData, ApplianceCategory, SymptomTriageItem } from '../types';
import { APPLIANCE_CATEGORIES, PHONE_NUMBER, DISPLAY_PHONE, WHATSAPP_NUMBER } from '../data/repairData';

interface BookingFormProps {
  initialCategory?: string;
  initialSymptom?: SymptomTriageItem | null;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialCategory,
  initialSymptom
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    mobileNumber: '',
    applianceCategory: initialCategory || 'ac-repair',
    preferredVisitTime: 'Today — Immediate Dispatch (Next 2 Hours)',
    streetArea: '',
    observedProblem: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [validationError, setValidationError] = useState('');

  // Update form if props change
  useEffect(() => {
    if (initialCategory) {
      setFormData(prev => ({ ...prev, applianceCategory: initialCategory }));
    }
    if (initialSymptom) {
      setFormData(prev => ({
        ...prev,
        applianceCategory: initialSymptom.category.toLowerCase().includes('ac') ? 'ac-repair' :
                           initialSymptom.category.toLowerCase().includes('washing') ? 'washing-machine' :
                           initialSymptom.category.toLowerCase().includes('refrigerator') ? 'refrigerator' :
                           initialSymptom.category.toLowerCase().includes('ro') ? 'water-purifier' :
                           initialSymptom.category.toLowerCase().includes('chimney') ? 'kitchen-chimney' :
                           initialSymptom.category.toLowerCase().includes('cooking') ? 'cooking-range' : 'ac-repair',
        observedProblem: `${initialSymptom.symptomName}: ${initialSymptom.diagnosticTitle}`
      }));
    }
  }, [initialCategory, initialSymptom]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!formData.fullName.trim()) {
      setValidationError('Please enter your full name');
      return;
    }

    const cleanPhone = formData.mobileNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setValidationError('Please enter a valid 10-digit mobile number');
      return;
    }

    if (!formData.streetArea.trim()) {
      setValidationError('Please enter your Mumbai street or area (e.g. Mandvi, Crawford Market)');
      return;
    }

    // Generate realistic reference ID
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const ref = `EXP-MUM-${randomCode}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  const getSelectedCategoryName = () => {
    const found = APPLIANCE_CATEGORIES.find(c => c.id === formData.applianceCategory);
    return found ? found.name : 'Appliance Repair';
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      mobileNumber: '',
      applianceCategory: 'ac-repair',
      preferredVisitTime: 'Today — Immediate Dispatch (Next 2 Hours)',
      streetArea: '',
      observedProblem: ''
    });
  };

  return (
    <section id="book-visit" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-[11px] font-bold tracking-wider uppercase text-blue-600 font-mono block mb-2">
            PRIORITY BOOKING
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight mb-3">
            Book a Doorstep Service Visit
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            No advance deposit needed. Direct technician dispatch with exact slot confirmations.
          </p>
        </div>

        {/* Confirmation Modal / Screen */}
        {submitted ? (
          <div className="bg-white rounded-2xl border-2 border-blue-600 p-6 sm:p-10 shadow-xl text-center animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-mono font-bold uppercase tracking-wider mb-2 inline-block">
              BOOKING REGISTERED • {bookingRef}
            </span>

            <h3 className="text-2xl font-black text-slate-950 mb-2">
              Dispatch Request Received!
            </h3>

            <p className="text-sm text-slate-600 max-w-lg mx-auto mb-6">
              Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>. Our Mohammed Ali Road dispatch coordinator is assigning a specialist for <span className="font-bold text-slate-900">{getSelectedCategoryName()}</span> in <span className="font-bold text-slate-900">{formData.streetArea}</span>.
            </p>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-left max-w-md mx-auto mb-6 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Contact Number:</span>
                <span className="font-bold text-slate-900">+91 {formData.mobileNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Preferred Window:</span>
                <span className="font-bold text-blue-700">{formData.preferredVisitTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Inspection Policy:</span>
                <span className="font-semibold text-emerald-700">100% Waived if repaired</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Desk Now ({DISPLAY_PHONE})</span>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=Hello%20Expert%20Services,%20I%20booked%20service%20ref%20${bookingRef}%20for%20${encodeURIComponent(getSelectedCategoryName())}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={resetForm}
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
              >
                Book Another Visit
              </button>
            </div>
          </div>
        ) : (
          /* Form Card */
          <div className="bg-slate-50/70 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            {validationError && (
              <div className="mb-6 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{validationError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              
              {/* Row 1: Full Name & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-left">
                  <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Farhan Merchant"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>

                <div className="text-left">
                  <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                    MOBILE NUMBER *
                  </label>
                  <div className="relative flex">
                    <span className="inline-flex items-center px-3.5 py-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 text-slate-600 text-xs font-mono font-bold">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      placeholder="93235 56464"
                      className="w-full px-4 py-3 rounded-r-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Appliance Category & Preferred Visit Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-left">
                  <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                    APPLIANCE CATEGORY *
                  </label>
                  <select
                    value={formData.applianceCategory}
                    onChange={(e) => setFormData({ ...formData, applianceCategory: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all cursor-pointer"
                  >
                    {APPLIANCE_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name} ({cat.tagline})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="text-left">
                  <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                    PREFERRED VISIT TIME *
                  </label>
                  <select
                    value={formData.preferredVisitTime}
                    onChange={(e) => setFormData({ ...formData, preferredVisitTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all cursor-pointer"
                  >
                    <option value="Today — Immediate Dispatch (Next 2 Hours)">
                      Today — Immediate Dispatch (Next 2 Hours)
                    </option>
                    <option value="Today — Afternoon (12:00 PM - 4:00 PM)">
                      Today — Afternoon (12:00 PM - 4:00 PM)
                    </option>
                    <option value="Today — Evening (4:00 PM - 8:00 PM)">
                      Today — Evening (4:00 PM - 8:00 PM)
                    </option>
                    <option value="Tomorrow — Morning (9:00 AM - 1:00 PM)">
                      Tomorrow — Morning (9:00 AM - 1:00 PM)
                    </option>
                    <option value="Tomorrow — Afternoon (1:00 PM - 5:00 PM)">
                      Tomorrow — Afternoon (1:00 PM - 5:00 PM)
                    </option>
                  </select>
                </div>
              </div>

              {/* Row 3: Street/Area & Symptoms */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-left">
                  <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                    STREET / AREA IN MUMBAI *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.streetArea}
                    onChange={(e) => setFormData({ ...formData, streetArea: e.target.value })}
                    placeholder="e.g. Mandvi, Crawford Market, Marine Lines"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>

                <div className="text-left">
                  <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1.5">
                    OBSERVED PROBLEM / SYMPTOMS
                  </label>
                  <input
                    type="text"
                    value={formData.observedProblem}
                    onChange={(e) => setFormData({ ...formData, observedProblem: e.target.value })}
                    placeholder="e.g. Water leak, not cooling, error code"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Action and Privacy Bar */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-slate-500 text-xs text-left">
                  <Lock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>Data strictly used for diagnostic coordination.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Request Doorstep Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
};
