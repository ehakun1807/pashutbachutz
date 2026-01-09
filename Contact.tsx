
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-stone-900 text-white overflow-hidden relative">
      {/* Decorative background circle */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-900/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 text-center lg:text-right">
          <h2 className="text-4xl md:text-5xl font-black mb-6">מחכים לשמוע מכם!</h2>
          <p className="text-xl text-stone-400 mb-10 leading-relaxed">
            רוצים להפוך את המרפסת או הגינה למקום המושלם עבורכם? 
            השאירו פרטים, נשמח להכיר ולתת ייעוץ אישי ללא התחייבות.
          </p>
          <div className="space-y-6">
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="w-12 h-12 bg-stone-800 rounded-2xl flex items-center justify-center text-emerald-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <span className="text-2xl font-bold" dir="ltr">052-3760674</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="w-12 h-12 bg-stone-800 rounded-2xl flex items-center justify-center text-emerald-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <span className="text-xl">pashutbachutz@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md bg-stone-800 p-8 rounded-3xl border border-stone-700 shadow-2xl">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold text-stone-400 mb-2">שם מלא</label>
              <input 
                type="text" 
                className="w-full p-4 bg-stone-900 border border-stone-700 rounded-2xl focus:border-emerald-500 outline-none transition-all text-white"
                placeholder="איך קוראים לכם?"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-stone-400 mb-2">מספר טלפון</label>
              <input 
                type="tel" 
                className="w-full p-4 bg-stone-900 border border-stone-700 rounded-2xl focus:border-emerald-500 outline-none transition-all text-white"
                placeholder="כדי שנוכל לחזור אליכם"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-stone-400 mb-2">קצת על החצר/מרפסת</label>
              <textarea 
                className="w-full p-4 bg-stone-900 border border-stone-700 rounded-2xl focus:border-emerald-500 outline-none transition-all text-white min-h-[120px]"
                placeholder="מה החלום שלכם?"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-emerald-500 text-stone-900 font-black text-xl rounded-2xl hover:bg-emerald-400 transition-all shadow-lg active:scale-95"
            >
              שלחו לי הצעה
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
