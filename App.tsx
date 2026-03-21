
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import LandscapePlanning from './components/LandscapePlanning';
import Hydroponics from './components/Hydroponics';
import OutdoorDesign from './components/OutdoorDesign';
import DetailedOfferings from './components/DetailedOfferings';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AdminProvider, useAdmin } from './components/AdminContext';

const AdminOverlay = () => {
  const { isAdmin, login, logout } = useAdmin();
  const [pass, setPass] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  if (!isAdmin && !showLogin) {
    return (
      <button 
        onClick={() => setShowLogin(true)}
        className="fixed bottom-4 right-4 z-[999] opacity-10 hover:opacity-100 bg-stone-800 text-white p-2 rounded-full text-[10px]"
      >
        Admin
      </button>
    );
  }

  if (showLogin && !isAdmin) {
    return (
      <div className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full text-right" dir="rtl">
          <h2 className="text-2xl font-bold mb-4">כניסת מנהל</h2>
          <input 
            type="password" 
            placeholder="סיסמה" 
            className="w-full border-2 border-stone-200 p-3 rounded-xl mb-4 text-left"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && login(pass)}
          />
          <div className="flex gap-2">
            <button 
              onClick={() => login(pass)}
              className="flex-grow bg-emerald-600 text-white py-3 rounded-xl font-bold"
            >
              התחבר
            </button>
            <button 
              onClick={() => setShowLogin(false)}
              className="px-4 py-3 text-stone-500 font-bold"
            >
              ביטול
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-20 right-4 z-[1000] flex flex-col gap-2">
      <div className="bg-emerald-600 text-white px-4 py-2 rounded-full shadow-xl text-sm font-bold flex items-center gap-2">
        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
        מצב עריכה פעיל
      </div>
      <button 
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded-full shadow-xl text-xs font-bold"
      >
        התנתק
      </button>
    </div>
  );
};

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-stone-50">
      <AdminOverlay />
      <Header />
      <main className="flex-grow">
        <Hero />
        <section id="services">
          <Services />
        </section>
        <DetailedOfferings />
        <section id="landscape-planning">
          <LandscapePlanning />
        </section>
        <section id="hydroponics">
          <Hydroponics />
        </section>
        <section id="outdoor-design">
          <OutdoorDesign />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => (
  <AdminProvider>
    <AppContent />
  </AdminProvider>
);

export default App;
