
import React, { useState, useRef } from 'react';

const About: React.FC = () => {
  const [aboutImage, setAboutImage] = useState("https://images.unsplash.com/photo-1592150621344-82d47b0f968c?auto=format&fit=crop&q=80&w=1000");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAboutImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="about" className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative group">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-100 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-100 rounded-full z-0"></div>
            
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl h-[500px] w-full">
              <img 
                src={aboutImage} 
                alt="עבודה בגינה ותכנון" 
                className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* כפתור החלפת תמונה ב-Hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-white text-emerald-700 px-6 py-3 rounded-2xl font-bold shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 hover:bg-emerald-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                  החלפת תמונה
                </button>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageChange} 
                  className="hidden" 
                  accept="image/*" 
                />
              </div>
            </div>

            <div className="absolute bottom-8 right-8 z-20 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl hidden md:block border-2 border-emerald-400 transform transition-transform group-hover:-translate-y-2">
              <p className="text-2xl font-black">נעים להכיר, עירן</p>
              <p className="text-sm opacity-90">מניהול פרויקטים לניהול החלומות שלכם</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 text-right">
            <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-8">הסיפור שלי</h2>
            <div className="space-y-6 text-xl text-stone-600 leading-relaxed">
              <p>
                שמי <span className="text-emerald-600 font-bold">עירן</span>, ואני הלב והמנוע מאחורי <span className="text-emerald-600 font-bold">"פשוט בחוץ"</span>. 
              </p>
              <p>
                במשך למעלה מ-20 שנה ניהלתי פרויקטים מורכבים בעולם ההייטק. בתוך הקצב המהיר והשגרה השוחקת, תמיד מצאתי את השקט והריפוי שלי בחוץ – בטבע, בגינה הפרטית ובעבודה עם האדמה. עבורי, החצר מעולם לא הייתה רק שטח אדמה, אלא <span className="text-orange-500 font-bold">מקום מפלט לנפש</span>.
              </p>
              <p>
                החלטתי לקחת את הידע המקצועי שרכשתי בניהול פרויקטים – הדיוק, התכנון הקפדני והיכולת להוציא חזון אל הפועל – ולשלב אותו עם האהבה הגדולה שלי לעולם החוץ.
              </p>
              <p>
                ב-"פשוט בחוץ", אני מביא אליכם את השילוב המנצח: <span className="text-emerald-600 font-bold">תכנון מקצועי ומוקפד</span> ברמה הגבוהה ביותר, יחד עם גישה <span className="text-emerald-600 font-bold">עממית, אישית ונגישה</span> שרואה קודם כל אתכם – המשפחה, הצרכים והשלווה שלכם.
              </p>
              <p className="font-bold text-stone-800">
                אני כאן כדי ללוות אתכם צעד אחר צעד, ולהפוך את הגינה או המרפסת שלכם למקום שבו גם אתם תוכלו פשוט... לנשום.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4 justify-start">
              <div className="flex items-center gap-2 bg-stone-50 px-4 py-2 rounded-full border border-stone-200">
                <span className="text-emerald-600">✔</span>
                <span className="text-stone-700 font-medium">מעל 20 שנות ניסיון בניהול</span>
              </div>
              <div className="flex items-center gap-2 bg-stone-50 px-4 py-2 rounded-full border border-stone-200">
                <span className="text-emerald-600">✔</span>
                <span className="text-stone-700 font-medium">תכנון מדויק ללא פשרות</span>
              </div>
              <div className="flex items-center gap-2 bg-stone-50 px-4 py-2 rounded-full border border-stone-200">
                <span className="text-emerald-600">✔</span>
                <span className="text-stone-700 font-medium">חיבור עמוק לטבע ולאנשים</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
