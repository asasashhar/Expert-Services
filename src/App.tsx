import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryGrid } from './components/CategoryGrid';
import { SymptomTriage } from './components/SymptomTriage';
import { TechnicalCatalog } from './components/TechnicalCatalog';
import { WorkflowSteps } from './components/WorkflowSteps';
import { OperatingStandards } from './components/OperatingStandards';
import { WorkshopHub } from './components/WorkshopHub';
import { BookingForm } from './components/BookingForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyActionBar } from './components/StickyActionBar';
import { ApplianceCategory, SymptomTriageItem } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ac-repair');
  const [selectedSymptom, setSelectedSymptom] = useState<SymptomTriageItem | null>(null);

  const scrollToBooking = () => {
    const el = document.getElementById('book-visit');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (category: ApplianceCategory) => {
    setSelectedCategory(category.id);
    setSelectedSymptom(null);
    scrollToBooking();
  };

  const handleSelectCategoryById = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedSymptom(null);
    scrollToBooking();
  };

  const handleBookSymptom = (symptom: SymptomTriageItem) => {
    setSelectedSymptom(symptom);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col font-sans">
      {/* Navigation Header */}
      <Navbar 
        onBookClick={scrollToBooking} 
        onSelectCategory={handleSelectCategoryById}
      />

      <main className="flex-grow">
        {/* 1. Hero Section with Live Dispatch Telemetry */}
        <HeroSection onBookClick={scrollToBooking} />

        {/* 2. "What needs fixing today?" Category Grid */}
        <CategoryGrid onSelectCategory={handleSelectCategory} />

        {/* 3. "Something not working? Tap your symptom." Immediate Triage */}
        <SymptomTriage onBookSymptom={handleBookSymptom} />

        {/* 4. "Engineered repairs, authentic spare parts." Technical Catalog */}
        <TechnicalCatalog onBookCategory={handleSelectCategory} />

        {/* 5. "Four clean steps to working appliances." Workflow */}
        <WorkflowSteps />

        {/* 6. "Why Mumbai residents need a service partner they can actually reach." & Checklist */}
        <OperatingStandards />

        {/* 7. Physical Workshop Hub & Coverage Map */}
        <WorkshopHub />

        {/* 8. Priority Booking Form */}
        <BookingForm 
          initialCategory={selectedCategory} 
          initialSymptom={selectedSymptom} 
        />

        {/* 9. Frequently Asked Questions Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating & Sticky Action Bars (Desktop & Mobile) */}
      <StickyActionBar onBookClick={scrollToBooking} />
    </div>
  );
}
