
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center gap-2 group transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_8px_15px_rgba(5,150,105,0.3)] group-hover:rotate-6">
             <span className="text-white font-bold text-xl">פ</span>
          </div>
          <span className="text-2xl font-black text-emerald-900 tracking-tighter transition-colors group-hover:text-emerald-700">
            פשוט בחוץ
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-stone-600 font-medium text-sm lg:text-base">
          <a href="#services" className="hover:text-emerald-600 transition-colors">שירותים</a>
          <a href="#landscape-planning" className="hover:text-emerald-600 transition-colors">תכנון נוף</a>
          <a href="#about" className="hover:text-emerald-600 transition-colors">הסיפור שלי</a>
          <a href="#ai-consultant" className="hover:text-emerald-600 transition-colors">ייעוץ חכם</a>
          <a href="#contact" className="hover:text-emerald-600 transition-colors">צור קשר</a>
        </nav>

        <a 
          href="#contact" 
          className="bg-emerald-600 text-white px-4 py-2 lg:px-5 lg:py-2 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg active:scale-95 text-sm lg:text-base"
        >
          בואו נתחיל
        </a>
      </div>
    </header>
  );
};

export default Header;
