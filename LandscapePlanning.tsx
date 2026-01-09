
import React, { useState, useRef } from 'react';

const LandscapePlanning: React.FC = () => {
  const [drawing, setDrawing] = useState("https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=1000");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDrawing(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const steps = [
    {
      number: "01",
      title: "פגישת הכרה וחלומות",
      description: "אנחנו יושבים יחד בשטח, מבינים את כיווני השמש, זרימת הרוח והכי פשוט - איך אתם רוצים להרגיש כשאתם יוצאים החוצה."
    },
    {
      number: "02",
      title: "שרטוט קונספט ידני",
      description: "הקסם מתחיל על הנייר. אני מכין שרטוט ידני המשלב אזורי ישיבה, שבילים, וחלוקה פונקציונלית של החלל."
    },
    {
      number: "03",
      title: "בחירת חומרים וצמחייה",
      description: "התאמת סוגי אבן, עץ ותפריט צמחייה חסכוני במים שמתאים בדיוק לאקלים הישראלי ולסגנון שלכם."
    },
    {
      number: "04",
      title: "תוכנית עבודה מפורטת",
      description: "הופכים את החזון לתוכנית ביצוע מדויקת עבור הקבלן, כולל תשתיות השקיה, תאורה וניקוז."
    }
  ];

  return (
    <section id="landscape-planning" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center text-right" dir="rtl">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">התמחות ליבה</h2>
            <h3 className="text-4xl md:text-5xl font-black text-stone-900 mb-8 leading-tight">
              תכנון נוף <br/>
              <span className="text-emerald-700">שמתחיל בלב ונגמר בגינה</span>
            </h3>
            <p className="text-xl text-stone-600 mb-10 leading-relaxed">
              התכנון שלי משלב את הדיוק שרכשתי בעולם ההייטק עם היצירתיות והחופש של הטבע. כל שרטוט הוא יחיד ומיוחד, ומטרתו להעניק לכם ביטחון מלא לפני תחילת העבודות.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative p-6 bg-white rounded-2xl shadow-sm border border-stone-100 hover:border-emerald-200 transition-all group">
                  <span className="absolute top-4 left-4 text-4xl font-black text-emerald-50/50 z-0 group-hover:text-emerald-100 transition-colors">{step.number}</span>
                  <div className="relative z-10">
                    <h4 className="font-bold text-stone-800 mb-2">{step.title}</h4>
                    <p className="text-sm text-stone-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative w-full group/image">
            <div className="absolute inset-0 bg-stone-200 rounded-lg rotate-1 translate-x-2 translate-y-2"></div>
            
            <div className="relative z-10 bg-[#fdfcf9] p-3 md:p-6 rounded-sm shadow-2xl border-[12px] border-white overflow-hidden min-h-[500px] flex flex-col items-center justify-center">
              <div className="relative w-full">
                <img 
                  src={drawing} 
                  alt="שרטוט אדריכלי של גינה" 
                  className="w-full h-auto max-h-[750px] object-cover transition-all duration-1000 hover:scale-[1.02] opacity-80"
                />
                
                {/* כפתור החלפת שרטוט */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity bg-white/40 backdrop-blur-[2px]">
                   <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold shadow-2xl flex items-center gap-2 hover:bg-emerald-700 transition-all"
                   >
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                     העלאת שרטוט אישי
                   </button>
                   <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
                </div>

                <div className="mt-4 pt-4 border-t border-stone-200 w-full flex justify-between items-center text-[10px] text-stone-400 font-mono uppercase tracking-widest">
                  <span>PROJECT: CUSTOM DESIGN</span>
                  <span>SCALE: 1:100</span>
                  <span>DESIGNER: ERAN</span>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 z-20 bg-orange-500 text-white p-4 rounded-full shadow-xl transform -rotate-12 border-4 border-white font-black text-center leading-none">
              תכנון<br/><span className="text-xs font-light">מקורי</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandscapePlanning;
