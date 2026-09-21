import { ApplianceCategory, SymptomTriageItem, FAQItem, InspectionChecklistItem } from '../types';

export const PHONE_NUMBER = "9323556464";
export const DISPLAY_PHONE = "9323556464";
export const WHATSAPP_NUMBER = "+919323556464";
export const DISPLAY_WHATSAPP = "+91 93235 56464";

export const WORKSHOP_ADDRESS = {
  line1: "7, Mohammed Ali Building, 25 B, Plot No",
  line2: "Mohammed Ali Road, Bhendi Bazaar, Mandvi",
  city: "Mumbai",
  state: "Maharashtra",
  pincode: "400003",
  hours: "8:00 AM – 9:30 PM (All 7 Days Open)",
  googleMapsUrl: "https://maps.google.com/?q=Mohammed+Ali+Road+Bhendi+Bazaar+Mandvi+Mumbai+400003"
};

export const DISPATCH_ZONES = [
  "Mandvi",
  "Bhendi Bazaar",
  "Crawford Market",
  "Marine Lines",
  "Colaba",
  "Byculla",
  "Mazgaon"
];

export const LANDMARK_CORRIDORS = [
  "Mandvi Post Office",
  "Crawford Market",
  "JJ Flyover Corridor",
  "Bhendi Bazaar"
];

export const APPLIANCE_CATEGORIES: ApplianceCategory[] = [
  {
    id: "ac-repair",
    code: "01",
    name: "AC Repair & Service",
    tagline: "Split, Inverter & Window units",
    description: "Split, Inverter & Window units. Not cooling, gas leak check, PCB fault or jet cleaning.",
    iconName: "Wind",
    startingPrice: 349,
    originalPrice: 499,
    categoryType: "HVAC SPECIFICATION",
    specLabel: "01 / 06",
    popularBrands: ["Daikin", "Voltas", "LG", "Samsung", "Blue Star", "Carrier", "Hitachi"],
    bulletPoints: [
      "Jet-pump high-pressure coil deep cleaning",
      "Nitrogen leak testing & genuine R32 / R410A refill",
      "Inverter PCB microprocessor trace repair",
      "Blower motor, bearing & run capacitor replacement"
    ]
  },
  {
    id: "washing-machine",
    code: "02",
    name: "Washing Machine Repair",
    tagline: "Front load, top load & semi-auto",
    description: "Front load, top load & semi-auto. Drum stoppage, water drainage failure, or violent spin noise.",
    iconName: "RotateCcw",
    startingPrice: 299,
    categoryType: "LAUNDRY DYNAMICS",
    specLabel: "02 / 06",
    popularBrands: ["IFB", "Bosch", "Whirlpool", "LG", "Samsung", "Panasonic"],
    bulletPoints: [
      "Drain pump de-clogging and magnetic motor replacement",
      "Drum spider arm, bearing and oil-seal restoration",
      "Inlet solenoid valve & pressure switch tuning",
      "Error codes (E20, UE, dE, 4E, OE) debugging"
    ]
  },
  {
    id: "refrigerator",
    code: "03",
    name: "Refrigerator Repair",
    tagline: "Single, double door & side-by-side",
    description: "Single, double door & side-by-side. Freezing failure, excessive frost, or thermostat drift.",
    iconName: "Cpu",
    startingPrice: 299,
    categoryType: "THERMAL CYCLE",
    specLabel: "03 / 06",
    popularBrands: ["LG", "Samsung", "Whirlpool", "Godrej", "Haier", "Bosch"],
    bulletPoints: [
      "Inverter compressor testing & gas charging (R600a/R134a)",
      "Defrost heater, bimetal sensor & timer replacement",
      "Evaporator fan motor and airflow damper valve tuning",
      "Magnetic door gasket seal tight realignment"
    ]
  },
  {
    id: "water-purifier",
    code: "04",
    name: "RO / UV Water Purifier",
    tagline: "TDS imbalance, membrane chokes",
    description: "TDS imbalance, membrane chokes, UV lamp buzzer alarm, and booster pump restoration.",
    iconName: "Droplets",
    startingPrice: 249,
    categoryType: "PURIFICATION",
    specLabel: "04 / 06",
    popularBrands: ["Kent", "Aquaguard", "Pureit", "Livpure", "Havells"],
    bulletPoints: [
      "High-rejection 75/100 GPD RO membrane renewal",
      "Pre-carbon, post-carbon & sediment candle flush",
      "High-pressure booster pump diaphragm restoration",
      "Calibrated digital TDS balancing & alkaline filter add-on"
    ]
  },
  {
    id: "kitchen-chimney",
    code: "05",
    name: "Kitchen Chimney Service",
    tagline: "Severe suction drop, motor vibration",
    description: "Severe suction drop, motor vibration, oil drip issues, and heavy caustic baffle degreasing.",
    iconName: "Fan",
    startingPrice: 399,
    categoryType: "EXHAUST EXTRACTION",
    specLabel: "05 / 06",
    popularBrands: ["Faber", "Elica", "Glen", "Hindware", "Kaff", "Inalsa"],
    bulletPoints: [
      "Curved glass & stainless baffle filter caustic cleaning",
      "Impeller suction turbine balance & motor noise dampening",
      "Touch panel switch, sensor & LED driver circuit fix",
      "Exhaust aluminum duct pipe tears inspection and reseal"
    ]
  },
  {
    id: "cooking-range",
    code: "06",
    name: "Cooking Range / Hob",
    tagline: "Low yellow flame, faulty ignition",
    description: "Low yellow flame, faulty auto-ignition sparkers, gas smell inspection, and burner valve tuning.",
    iconName: "Flame",
    startingPrice: 299,
    categoryType: "GAS COMBUSTION",
    specLabel: "06 / 06",
    popularBrands: ["Faber", "Glen", "Sunflame", "Prestige", "Bosch", "Kaff"],
    bulletPoints: [
      "Brass burner nozzle micro-jet de-carbonization",
      "Electronic spark pulse generator & electrode tune-up",
      "Oven thermostat, thermocouple & rotisserie motor check",
      "Zero-tolerance pipeline soap bubble leak detection"
    ]
  }
];

export const SYMPTOMS_LIST: SymptomTriageItem[] = [
  {
    id: "ac-not-cooling",
    symptomName: "AC not cooling",
    category: "Air Conditioner",
    badgeLabel: "AIR CONDITIONING DIAGNOSTIC",
    diagnosticTitle: "Split AC Running Fan Only With No Cooling",
    likelyRootCauses: "Usually caused by compressor capacitor degradation, low R32/R410A refrigerant pressure, or choked condenser outdoor coils. Requires on-site manifold gauge verification.",
    typicalTime: "45-60 Mins",
    partsInspected: "Capacitor / Gas Line",
    doorstepCheck: "South Mumbai Specialist",
    urgencyLevel: "High"
  },
  {
    id: "water-leaking",
    symptomName: "Water leaking from unit",
    category: "Air Conditioner / RO",
    badgeLabel: "DRAINAGE & HYDRAULIC AUDIT",
    diagnosticTitle: "Indoor Blower Overflow & Drain Tray Choke",
    likelyRootCauses: "Accumulated fungal dust slime choking condensate drain pipe, improper wall slope leveling, or fractured water reservoir tray causing indoor wall dampness.",
    typicalTime: "30-45 Mins",
    partsInspected: "Drain Hose / Slope / Sump",
    doorstepCheck: "Precision Jet Cleaning",
    urgencyLevel: "Normal"
  },
  {
    id: "wm-drum-not-spinning",
    symptomName: "Washing machine drum not spinning",
    category: "Washing Machine",
    badgeLabel: "DRIVE MOTOR & ROTOR DIAGNOSTIC",
    diagnosticTitle: "Drum Stalled During Wash / Violent Spin Noise",
    likelyRootCauses: "Worn carbon brushes, snapped motor drive belt, corroded spider bracket arm, or bad motor run capacitor preventing rotational torque under load.",
    typicalTime: "50-70 Mins",
    partsInspected: "Drive Belt / Spider Arm / Motor",
    doorstepCheck: "Mechanical Transmission Pro",
    urgencyLevel: "High"
  },
  {
    id: "fridge-warm",
    symptomName: "Refrigerator warm / no ice",
    category: "Refrigerator",
    badgeLabel: "CRYOGENIC LOOP DIAGNOSTIC",
    diagnosticTitle: "Freezer Frost Accumulation & Bottom Cabinet Warm",
    likelyRootCauses: "Defrost bimetal thermostat failure, open circuit heating element, locked evaporator circulation fan, or low R600a eco-gas charge.",
    typicalTime: "40-60 Mins",
    partsInspected: "Defrost Timer / Gas / Fan Motor",
    doorstepCheck: "Refrigeration Specialist",
    urgencyLevel: "Critical"
  },
  {
    id: "ro-low-flow",
    symptomName: "RO water low flow / TDS alarm",
    category: "RO Water Purifier",
    badgeLabel: "WATER PURITY & OSMOSIS TELEMETRY",
    diagnosticTitle: "Continuous Buzzer Alert & Low Pure Water Stream",
    likelyRootCauses: "Choked 5-micron spun pre-sediment filter, scaling on thin-film RO membrane, or weakened booster pump producing sub-60 PSI pressure.",
    typicalTime: "35-50 Mins",
    partsInspected: "RO Membrane / Booster Pump",
    doorstepCheck: "TDS & Water Chemistry Tech",
    urgencyLevel: "High"
  },
  {
    id: "chimney-suction-failure",
    symptomName: "Chimney suction failure",
    category: "Kitchen Chimney",
    badgeLabel: "EXHAUST & AIRFLOW DYNAMICS",
    diagnosticTitle: "Grease Jammed Impeller & Smoke Backflow",
    likelyRootCauses: "Solidified oil grease clogging metallic baffle louvers, capacitor failure on multi-speed motor, or pinched aluminum exhaust duct pipe.",
    typicalTime: "60-90 Mins",
    partsInspected: "Baffle Filters / Blower Fan",
    doorstepCheck: "Caustic Degreasing Crew",
    urgencyLevel: "Normal"
  },
  {
    id: "cooking-range-flame",
    symptomName: "Cooking range ignition / yellow flame",
    category: "Cooking Range / Hob",
    badgeLabel: "GAS COMBUSTION & SPARK VERIFICATION",
    diagnosticTitle: "Unstable Yellow Flame & Spark Electrode Misfire",
    likelyRootCauses: "Soot-clogged brass burner orifices causing incomplete combustion, carbon deposit on ignition spark pin, or faulty gas pressure regulator.",
    typicalTime: "30-45 Mins",
    partsInspected: "Brass Jets / Ignition Sparker",
    doorstepCheck: "Certified Gas Safety Tech",
    urgencyLevel: "High"
  }
];

export const INSPECTION_CHECKLIST: InspectionChecklistItem[] = [
  {
    parameter: "Compressor Operating Amps & Winding Resistance",
    standardValue: "230V / Nominal",
    status: "nominal"
  },
  {
    parameter: "Suction & Discharge Refrigerant Pressures (PSIG)",
    standardValue: "Manifold Verified",
    status: "verified"
  },
  {
    parameter: "Motor Insulation & Earth Leakage Safety Test",
    standardValue: "Passed 500V Megger",
    status: "passed"
  },
  {
    parameter: "High-Flow Water Purification Membrane Permeate Rate",
    standardValue: "92% Salt Rejection",
    status: "passed"
  },
  {
    parameter: "Combustion Burner Pressure & Leak Bubble Assay",
    standardValue: "Zero Micro-Leaking",
    status: "verified"
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    question: "How fast can a technician arrive at my home in Mumbai?",
    answer: "For major South & Central Mumbai locations including Bhendi Bazaar, Mandvi, Crawford Market, Marine Lines, Colaba, Byculla, and Mazgaon, our mobile service technicians typically reach your doorstep within 90 minutes to 2 hours of direct dispatch confirmation."
  },
  {
    id: "faq-2",
    question: "What are the inspection charges if I decide not to proceed with the repair?",
    answer: "A nominal door visit & diagnostic inspection charge (₹199 - ₹249 depending on appliance) applies for complete electrical testing and physical diagnosis. If you approve the repair estimate, the inspection charge is 100% waived off and adjusted against the final service bill."
  },
  {
    id: "faq-3",
    question: "Do you use genuine spare parts with warranty?",
    answer: "Yes. All replacement components (compressors, capacitors, PCB boards, drain pumps, thermostats, RO membranes, gas valves) are brand-certified OEM spares and come with a written 90-day to 180-day replacement warranty."
  },
  {
    id: "faq-4",
    question: "Can one technician inspect multiple appliances during the same visit?",
    answer: "Yes, our multi-appliance single-visit service enables our certified technicians to inspect your AC, refrigerator, washing machine, or water purifier in the exact same visit without booking separate service visits."
  },
  {
    id: "faq-5",
    question: "Which specific appliance brands do you service?",
    answer: "We service all leading international and domestic brands including Daikin, Voltas, LG, Samsung, Blue Star, Carrier, Hitachi, IFB, Bosch, Whirlpool, Godrej, Haier, Kent, Aquaguard, Faber, Elica, Glen, and Kaff."
  },
  {
    id: "faq-6",
    question: "Where is your workshop located if I prefer to bring an appliance or part?",
    answer: "Our physical workshop and parts testing facility is located at 7, Mohammed Ali Building, 25 B, Plot No, Mohammed Ali Road, Bhendi Bazaar, Mandvi, Mumbai 400003. Open 7 days a week from 8:00 AM to 9:30 PM."
  },
  {
    id: "faq-7",
    question: "How do I get an immediate quote before scheduling a visit?",
    answer: "Call our direct Mumbai helpline on 9323556464 or send photos/audio of the problem via WhatsApp. Our senior technicians will provide a transparent preliminary estimate based on observed symptoms."
  }
];
