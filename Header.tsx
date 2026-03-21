
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center gap-3 group transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
        >
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Background Shape */}
            <div className="absolute inset-0 bg-emerald-600 rounded-xl rotate-6 transition-transform group-hover:rotate-12 group-hover:scale-110 duration-500 shadow-lg shadow-emerald-200/50"></div>
            {/* Logo Icon - Leaf + Home Symbol */}
            <svg 
              viewBox="0 0 24 24" 
              className="relative z-10 w-7 h-7 text-white fill-none stroke-current" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 2L3 9v11a2 2 0 002 2h14a2 2 0 002-2V9L12 2z" className="opacity-40" />
              <path d="M12 22V12" />
              <path d="M12 12c4 0 7-3 7-7 0 0-3 0-7 7z" />
              <path d="M12 12c-4 0-7-3-7-7 0 0 3 0 7 7z" />
            </svg>
            {/* Accent Dot */}
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white z-20"></div>
          </div>
          
          <div className="flex flex-col">
            <span className="text-2xl font-black text-emerald-900 leading-none tracking-tight">
              פשוט <span className="text-orange-600">בחוץ</span>
            </span>
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] leading-tight">
              תכנון . ייעוץ . ליווי
            </span>
          </div>
        </a>
        
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-stone-600 font-semibold text-sm">
          <a href="#services" className="hover:text-emerald-600 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all hover:after:w-full">שירותים</a>
          <a href="#landscape-planning" className="hover:text-emerald-600 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all hover:after:w-full">תכנון נוף</a>
          <a href="#hydroponics" className="hover:text-emerald-600 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all hover:after:w-full">חקלאות ביתית</a>
          <a href="#outdoor-design" className="hover:text-emerald-600 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all hover:after:w-full">עיצוב חוץ</a>
          <a href="#about" className="hover:text-emerald-600 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all hover:after:w-full">הסיפור שלי</a>
        </nav>

        <a 
          href="#contact" 
          className="bg-emerald-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-md hover:shadow-xl active:scale-95 text-sm"
        >
          בואו נתחיל
        </a>
      </div>
    </header>
  );
};

export default Header;
