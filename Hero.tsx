
import React, { useState, useRef } from 'react';

const Hero: React.FC = () => {
  const [heroImage, setHeroImage] = useState("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setHeroImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative h-[95vh] min-h-[750px] flex items-center overflow-hidden bg-stone-950">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full overflow-hidden">
          <img 
            src={heroImage} 
            alt="גינת חלום"
            className="w-full h-full object-cover transition-transform duration-[10s] ease-out scale-105 hover:scale-100 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-stone-900/20"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-stone-900/60 via-transparent to-transparent"></div>
          <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.4)]"></div>
        </div>
        
        {/* כפתור החלפת תמונה */}
        <div className="absolute top-24 left-8 z-30 opacity-50 hover:opacity-100 transition-opacity">
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-white/40 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
            החלפת תמונת שער
          </button>
          <input type="file" ref={fileInputRef} onChange={handleImageChange} className="hidden" accept="image/*" />
        </div>

        <div className="absolute bottom-[-15%] right-[-5%] w-[50%] h-[50%] bg-orange-600/20 blur-[120px] rounded-full animate-pulse pointer-events-none"></div>
        <div className="absolute top-[15%] left-[10%] w-32 h-32 bg-emerald-500/10 blur-[80px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-8 shadow-xl">
            <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-ping"></span>
            הופכים חלום למציאות בשטח
          </div>
          
          <h1 className="text-6xl md:text-[100px] font-black mb-8 leading-[0.9] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            פשוט <br/> 
            <span className="text-emerald-400">לחלום</span> <br/>
            <span className="text-orange-400 italic font-serif">בחוץ</span>
          </h1>
          
          <div className="max-w-xl p-1 md:p-0 rounded-3xl">
            <p className="text-xl md:text-2xl mb-12 text-stone-100 leading-relaxed font-medium drop-shadow-md">
              תכנון חוץ אישי שמתחיל בחיבור לאדמה ונגמר בפינה המושלמת שלכם. אנחנו כאן כדי לדאוג שכל רגע בחוץ יהיה רגע של קסם.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="#services" 
              className="bg-emerald-500 hover:bg-emerald-400 text-stone-900 text-center px-12 py-5 rounded-2xl font-black text-xl transition-all transform hover:-translate-y-1 shadow-[0_20px_40px_rgba(16,185,129,0.3)] flex items-center justify-center gap-3"
            >
              בואו נתחיל
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-stone-50 via-stone-50/40 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
