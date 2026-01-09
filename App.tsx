
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import LandscapePlanning from './components/LandscapePlanning';
import DetailedOfferings from './components/DetailedOfferings';
import About from './components/About';
import AIConsultant from './components/AIConsultant';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <LandscapePlanning />
        <DetailedOfferings />
        <About />
        <section id="ai-consultant" className="bg-emerald-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4 italic">היועץ הדיגיטלי שלנו</h2>
              <p className="text-lg text-emerald-700">קבלו טיפים ראשוניים לתכנון החצר או המרפסת שלכם בתוך שניות</p>
            </div>
            <AIConsultant />
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
