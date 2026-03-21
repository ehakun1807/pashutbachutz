
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-50 py-16 px-4 border-t border-stone-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-right" dir="rtl">
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center shadow-md">
              <svg 
                viewBox="0 0 24 24" 
                className="w-6 h-6 text-white fill-none stroke-current" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 22V12" />
                <path d="M12 12c4 0 7-3 7-7 0 0-3 0-7 7z" />
                <path d="M12 12c-4 0-7-3-7-7 0 0 3 0 7 7z" />
              </svg>
            </div>
            <span className="text-2xl font-black text-emerald-900 tracking-tighter">
              פשוט <span className="text-orange-600">בחוץ</span>
            </span>
          </div>
          <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
            תכנון, ייעוץ וליווי אישי שהופכים כל חצר ומרפסת למרחב של שקט, ריפוי ויופי.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-stone-800">קישורים מהירים</h4>
          <nav className="flex flex-col gap-2 text-stone-500 text-sm">
            <a href="#services" className="hover:text-emerald-600 transition-colors">השירותים שלנו</a>
            <a href="#landscape-planning" className="hover:text-emerald-600 transition-colors">תהליך תכנון הנוף</a>
            <a href="#hydroponics" className="hover:text-emerald-600 transition-colors">חקלאות הידרופונית</a>
            <a href="#about" className="hover:text-emerald-600 transition-colors">מי אני</a>
          </nav>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-400 text-xs font-bold">
        <p dir="rtl">&copy; {new Date().getFullYear()} פשוט בחוץ. כל הזכויות שמורות.</p>
        <p>Design & Planning with Passion</p>
      </div>
    </footer>
  );
};

export default Footer;
