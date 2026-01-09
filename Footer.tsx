
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-50 py-12 px-4 border-t border-stone-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
             <span className="text-white font-bold text-sm">פ</span>
          </div>
          <span className="text-xl font-black text-emerald-900 tracking-tighter">פשוט בחוץ</span>
        </div>
        
        <div className="text-stone-500 text-sm">
          &copy; {new Date().getFullYear()} פשוט בחוץ. כל הזכויות שמורות.
          <br/>
          <span className="mt-1 block">תכנון, ייעוץ וליווי אישי לגינות ומרפסות.</span>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-stone-400 hover:text-emerald-600 transition-colors">פייסבוק</a>
          <a href="#" className="text-stone-400 hover:text-emerald-600 transition-colors">אינסטגרם</a>
          <a href="#" className="text-stone-400 hover:text-emerald-600 transition-colors">ווטסאפ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
