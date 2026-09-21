export interface ApplianceCategory {
  id: string;
  code: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  startingPrice: number;
  originalPrice?: number;
  categoryType: string;
  specLabel: string;
  bulletPoints: string[];
  popularBrands: string[];
}

export interface SymptomTriageItem {
  id: string;
  symptomName: string;
  category: string;
  badgeLabel: string;
  diagnosticTitle: string;
  likelyRootCauses: string;
  typicalTime: string;
  partsInspected: string;
  doorstepCheck: string;
  urgencyLevel: 'High' | 'Normal' | 'Critical';
}

export interface BookingFormData {
  fullName: string;
  mobileNumber: string;
  applianceCategory: string;
  preferredVisitTime: string;
  streetArea: string;
  observedProblem: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface InspectionChecklistItem {
  parameter: string;
  standardValue: string;
  status: 'passed' | 'nominal' | 'verified';
}
