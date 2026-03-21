
import React, { useState, useRef, useEffect } from 'react';
import { useAdmin } from './AdminContext';
import EditableText from './EditableText';

const Hero: React.FC = () => {
  const { isAdmin } = useAdmin();
  
  // הקישור הישיר לתמונה שהעלית לגוגל דרייב
  const googleDriveDirectLink = "https://lh3.googleusercontent.com/d/1fzp-oe4-bJcsfViEcD5WU0nvyRlzD-g3";
  
  const [imageUrl, setImageUrl] = useState(googleDriveDirectLink);
  const [isLoaded, setIsLoaded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // סנכרון התמונה - במצב אדמין מאפשרים תצוגה מקומית של שינויים, למשתמש רגיל מציגים את הקבוע
  useEffect(() => {
    if (isAdmin) {
      const saved = localStorage.getItem('pashut_hero_static_candidate');
      if (saved) setImageUrl(saved);
    } else {
      setImageUrl(googleDriveDirectLink);
    }
  }, [isAdmin]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setImageUrl(base64);
        if (isAdmin) {
          localStorage.setItem('pashut_hero_static_candidate', base64);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative h-[95vh] min-h-[750px] flex items-center overflow-hidden bg-stone-900 text-right" dir="rtl">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full overflow-hidden bg-stone-800">
          <img 
            key={imageUrl}
            src={imageUrl} 
            alt="פשוט בחוץ - תכנון ועיצוב גינות"
            className={`w-full h-full object-cover block transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
          />
          {/* שכבת הצללה לשיפור קריאות הטקסט */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-stone-900/20 z-10 pointer-events-none"></div>
        </div>
      </div>

      {isAdmin && (
        <div className="absolute bottom-10 left-10 z-[100] group pointer-events-auto">
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/50 text-white px-4 py-2 rounded-full transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            <span className="text-xs font-bold">החלף תמונת רקע (אדמין)</span>
          </button>
          <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
        </div>
      )}

      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600/30 backdrop-blur-md border border-emerald-500/30 text-emerald-50 text-sm font-bold mb-8 shadow-xl">
            <EditableText id="hero_badge" defaultText="הופכים חלום למציאות בשטח" />
          </div>
          <h1 className="text-6xl md:text-[100px] font-black mb-8 leading-[0.9] drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            <EditableText id="hero_title_1" defaultText="פשוט" /><br/> 
            <span className="text-emerald-400"><EditableText id="hero_title_2" defaultText="לחלום" /></span> <br/>
            <span className="text-orange-400 italic font-serif"><EditableText id="hero_title_3" defaultText="בחוץ" /></span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white leading-relaxed font-bold drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] max-w-xl">
            <EditableText id="hero_desc" defaultText="תכנון חוץ אישי שמתחיל בחיבור לאדמה ונגמר בפינה המושלמת שלכם. אנחנו כאן כדי לדאוג שכל רגע בחוץ יהיה רגע של קסם." />
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl active:scale-95 text-center">
              בואו נתחיל
            </a>
            <a href="#services" className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-12 py-5 rounded-2xl font-black text-xl transition-all border border-white/30 text-center">
              השירותים שלנו
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
