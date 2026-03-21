
import React, { useState, useEffect, useRef } from 'react';
import { useAdmin } from './AdminContext';

const STORAGE_KEY_PREFIX = 'pashut_outdoor_v2_img_';

const OutdoorDesign: React.FC = () => {
  const { isAdmin } = useAdmin();
  
  // הגדרת התמונות הקבועות - התמונה הראשונה עודכנה לקישור החדש שסיפקת
  const defaultImages = [
    "https://lh3.googleusercontent.com/d/1MXy25mkj_Cspr9B9Y09szyky4g5wMmlK",
    "https://lh3.googleusercontent.com/d/1cGyEq5lOe0RJAhuGXan2_t-PTFvBGh61",
    "https://lh3.googleusercontent.com/d/1Xlq1xEr1CH_u_FvNTOiUVybwseNsHJpc"
  ];

  const [images, setImages] = useState<string[]>(defaultImages);
  const fileInputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  useEffect(() => {
    if (isAdmin) {
      const loaded = [0, 1, 2].map(idx => {
        return localStorage.getItem(STORAGE_KEY_PREFIX + idx) || defaultImages[idx];
      });
      setImages(loaded);
    } else {
      setImages(defaultImages);
    }
  }, [isAdmin, defaultImages]);

  const handleUpload = (idx: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const str = reader.result as string;
        const newImgs = [...images];
        newImgs[idx] = str;
        setImages(newImgs);
        if (isAdmin) {
          localStorage.setItem(STORAGE_KEY_PREFIX + idx, str);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const features = [
    { title: "התאמת מטבח חוץ", desc: "תכנון פונקציונלי המשלב נוחות בישול עם חוויית אירוח מושלמת." },
    { title: "תאורה ומערכות השקיה", desc: "תכנון תאורת אווירה חמה לצד מערכות השקיה חכמות וחסכוניות." },
    { title: "מרחבי טבע ופינות ישיבה", desc: "יצירת פינות אינטימיות המעניקות תחושת ניתוק ורוגע." },
    { title: "פיצ׳רים יחודיים", desc: "שילוב אלמנטים של מים וצמחייה מינימליסטית מהגן היפני" }
  ];

  return (
    <section id="outdoor-design" className="py-24 bg-stone-100 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center text-right" dir="rtl">
          
          <div className="lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-4">הסגנון שנכון לכם</h2>
            <h3 className="text-4xl md:text-5xl font-black text-stone-900 mb-8 leading-tight">
              ריהוט ועיצוב <br/>
              <span className="text-emerald-700">החוץ המושלם</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-stone-200 hover:shadow-md transition-shadow group">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h4 className="font-bold text-stone-800 text-lg mb-2">{f.title}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative h-[550px] md:h-[650px] w-full order-1 lg:order-2">
            <div className="absolute inset-0 flex items-center justify-center">
              
              {[0, 1, 2].map((idx) => {
                const posClasses = [
                  "absolute top-[5%] left-[5%] w-[70%] h-[60%] z-10 -rotate-2",
                  "absolute bottom-[10%] right-[0%] w-[50%] h-[55%] z-20 rotate-3",
                  "absolute bottom-[5%] left-[5%] w-[40%] h-[35%] z-30 -rotate-6"
                ];

                return (
                  <div key={idx} className={`${posClasses[idx]} transition-transform hover:z-40 group`}>
                    <div className="relative h-full w-full rounded-[40px] overflow-hidden shadow-xl border-4 border-white bg-stone-200">
                      <img src={images[idx]} className="w-full h-full object-cover" alt={`Design ${idx + 1}`} />
                      
                      {isAdmin && (
                        <div className="absolute top-4 right-4 z-40">
                          <button 
                            onClick={() => fileInputRefs[idx].current?.click()}
                            className="bg-emerald-600/90 hover:bg-emerald-600 text-white p-2 rounded-full shadow-xl transition-all"
                            title="החלף תמונה (אדמין)"
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

export default OutdoorDesign;
