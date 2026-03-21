
import React, { useState, useEffect, useRef } from 'react';
import { useAdmin } from './AdminContext';

const Hydroponics: React.FC = () => {
  const { isAdmin } = useAdmin();
  const STORAGE_KEY_PREFIX = 'pashut_hydro_v4_img_';
  
  // כתובות התמונות הקבועות - כל שלוש התמונות מעודכנות כעת ללינקים מהדרייב שלך
  const staticImages = [
    "https://lh3.googleusercontent.com/d/1KqNVHpi3cxiaxo3Jcq7kxOK4bCFy4Cz_",
    "https://lh3.googleusercontent.com/d/1mPZXzDz1eSd3Wk0apDGNy4NIfTZQlzPk",
    "https://lh3.googleusercontent.com/d/135W_cxI5R9QY2tpXxYYWd9fxRAb6inuU"
  ];

  const [images, setImages] = useState<string[]>(staticImages);
  const fileInputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  useEffect(() => {
    if (isAdmin) {
      const loadedImages = [0, 1, 2].map(idx => {
        const saved = localStorage.getItem(STORAGE_KEY_PREFIX + idx);
        return saved || staticImages[idx];
      });
      setImages(loadedImages);
    } else {
      setImages(staticImages);
    }
  }, [isAdmin, staticImages]);

  const handleUpload = (idx: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const str = reader.result as string;
        const newImages = [...images];
        newImages[idx] = str;
        setImages(newImages);
        localStorage.setItem(STORAGE_KEY_PREFIX + idx, str);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="hydroponics" className="py-32 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse gap-20 items-center text-right" dir="rtl">
          
          <div className="lg:w-5/12">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">גידול עצמי בבית</h2>
            <h3 className="text-4xl md:text-5xl font-black text-stone-900 mb-8 leading-tight">
              הידרופוניקה <br/>
              <span className="text-emerald-700">וחקלאות ביתית</span>
            </h3>
            <p className="text-xl text-stone-600 mb-10 leading-relaxed font-medium">
              לאוהבי גידול תבלינים וירקות, ניתן לשלב מגוון פתרונות כגון מערכת הידרופוניקה או גידול במצע מנותק. 
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-5 bg-stone-50 p-5 rounded-3xl border border-stone-100 shadow-sm">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <span className="text-stone-800 font-bold text-lg block">טריות ללא ריסוס</span>
                  <span className="text-stone-500 text-sm italic">מהקיר הירוק ישר לתוך הצלחת</span>
                </div>
              </div>
              <div className="flex items-center gap-5 bg-stone-50 p-5 rounded-3xl border border-stone-100 shadow-sm">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div>
                  <span className="text-stone-800 font-bold text-lg block">חיסכון במשאבים</span>
                  <span className="text-stone-500 text-sm italic">90% פחות מים וניצול מקסימלי של שטח</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12 w-full relative h-[600px] flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-100/50 rounded-full blur-[100px] -z-10"></div>
            
            <div className="relative w-full h-full max-w-lg">
              {[0, 1, 2].map((idx) => {
                const positions = [
                  "absolute top-[20%] right-[-5%] w-[65%] h-[350px] z-10 -rotate-6",
                  "absolute top-[5%] left-[-5%] w-[60%] h-[300px] z-20 rotate-12",
                  "absolute bottom-[-10%] left-[10%] w-[55%] h-[280px] z-30 -rotate-3"
                ];

                return (
                  <div key={idx} className={`${positions[idx]} group transition-all duration-500 hover:z-40`}>
                    <div className="w-full h-full rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-stone-100 relative">
                      <img 
                        src={images[idx]} 
                        className="w-full h-full object-cover" 
                        alt={`Hydroponics ${idx + 1}`} 
                      />
                      
                      {isAdmin && (
                        <div className="absolute bottom-4 left-4 z-40">
                          <button 
                            onClick={() => fileInputRefs[idx].current?.click()}
                            className="bg-white/90 text-stone-900 p-2 rounded-full shadow-xl hover:bg-white"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                          </button>
                          <input ref={fileInputRefs[idx]} type="file" className="hidden" accept="image/*" onChange={(e) => handleUpload(idx, e)} />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hydroponics;
