
import React, { useState, useEffect, useRef } from 'react';
import { useAdmin } from './AdminContext';

const LandscapePlanning: React.FC = () => {
  const { isAdmin } = useAdmin();
  
  // הקישור הישיר החדש שסופק לתמונה תחת תכנון נוף
  const staticDrawing = "https://lh3.googleusercontent.com/d/1GMjVNz7gxgNVskeF27Id5hJMtz6c6pt_";
  
  const [drawing, setDrawing] = useState(staticDrawing);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAdmin) {
      const saved = localStorage.getItem('pashut_plan_img');
      if (saved) setDrawing(saved);
    } else {
      setDrawing(staticDrawing);
    }
  }, [isAdmin, staticDrawing]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const str = reader.result as string;
        setDrawing(str);
        if (isAdmin) {
          localStorage.setItem('pashut_plan_img', str);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const steps = [
    { number: "01", title: "פגישת הכרה וחלומות", description: "אנחנו יושבים יחד בשטח, מבינים את כיווני השמש וזרימת הרוח." },
    { number: "02", title: "שרטוט קונספט ידני", description: "הקסם מתחיל על הנייר. אני מכין שרטוט ידני המשלב אזורי ישיבה ושבילים." },
    { number: "03", title: "בחירת חומרים וצמחייה", description: "התאמת סוגי אבן ותפריט צמחייה חסכוני במים שמתאים לאקלים הישראלי." },
    { number: "04", title: "תוכנית עבודה מפורטת", description: "הופכים את החזון לתוכנית ביצוע מדויקת עבור הקבלן." }
  ];

  return (
    <section id="landscape-planning" className="py-24 bg-stone-50 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center text-right" dir="rtl">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">התמחות ליבה</h2>
            <h3 className="text-4xl md:text-5xl font-black text-stone-900 mb-8 leading-tight">תכנון נוף <br/><span className="text-emerald-700">שמתחיל בלב ונגמר בגינה</span></h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative p-6 bg-white rounded-2xl shadow-sm border border-stone-100 group hover:shadow-md transition-all">
                  <span className="absolute top-4 left-4 text-4xl font-black text-emerald-50/50 z-0">{step.number}</span>
                  <div className="relative z-10"><h4 className="font-bold text-stone-800 mb-2">{step.title}</h4><p className="text-sm text-stone-500">{step.description}</p></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative w-full h-[500px] flex items-center justify-center">
            {/* Soft background glow remains for depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-200/20 rounded-full blur-[100px] -z-10"></div>
            
            <div className="relative w-full max-w-lg transform hover:scale-105 transition-transform duration-700">
              {/* Image container tilted to the left as requested earlier */}
              <div className="relative z-10 bg-white p-4 rounded-[40px] shadow-2xl border-8 border-white overflow-hidden -rotate-3">
                <img 
                  src={drawing} 
                  alt="שרטוט אדריכלי - פשוט בחוץ" 
                  className="w-full h-auto object-cover rounded-[28px] opacity-95" 
                />
                
                {isAdmin && (
                  <div className="absolute bottom-6 right-6 z-40">
                    <button 
                      onClick={() => fileInputRef.current?.click()}
                      className="bg-emerald-600 text-white p-3 rounded-full shadow-2xl transition-all hover:bg-emerald-500 hover:scale-110"
                      title="החלף שרטוט (אדמין)"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                    </button>
                    <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={handleUpload} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandscapePlanning;
