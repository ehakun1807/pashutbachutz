
import React from 'react';

const Contact: React.FC = () => {
  const whatsappNumber = "972523760674";
  const message = encodeURIComponent("שלום עירן, ראיתי את האתר שלך ואשמח לשמוע פרטים נוספים על תכנון החוץ שלי.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section id="contact" className="py-24 px-4 bg-stone-900 text-white overflow-hidden relative scroll-mt-20">
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-900/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Logo under Contact Section */}
        <div className="flex flex-col items-center mb-10 group">
          <div className="relative w-16 h-16 flex items-center justify-center mb-4">
            <div className="absolute inset-0 bg-emerald-600 rounded-2xl rotate-6 transition-transform group-hover:rotate-12 duration-500 shadow-xl shadow-emerald-900/40"></div>
            <svg 
              viewBox="0 0 24 24" 
              className="relative z-10 w-9 h-9 text-white fill-none stroke-current" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 2L3 9v11a2 2 0 002 2h14a2 2 0 002-2V9L12 2z" className="opacity-40" />
              <path d="M12 22V12" />
              <path d="M12 12c4 0 7-3 7-7 0 0-3 0-7 7z" />
              <path d="M12 12c-4 0-7-3-7-7 0 0 3 0 7 7z" />
            </svg>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 rounded-full border-2 border-stone-900 z-20"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-black text-white tracking-tight">
              פשוט <span className="text-orange-400">בחוץ</span>
            </span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-black mb-6">מחכים לשמוע מכם!</h2>
        <p className="text-xl md:text-2xl text-stone-300 mb-12 leading-relaxed">
          רוצים להפוך את המרפסת או הגינה למקום המושלם עבורכם? <br className="hidden md:block" />
          דברו איתי, נשמח להכיר ולתת ייעוץ אישי ללא התחייבות.
        </p>
        
        <div className="flex flex-col items-center gap-8">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-6 rounded-3xl font-black text-2xl transition-all shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] hover:-translate-y-1 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="transition-transform group-hover:rotate-12">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.656zm6.757-4.242c1.472.873 3.016 1.332 4.597 1.333 5.32 0 9.65-4.33 9.652-9.652.001-2.578-1.004-5.002-2.829-6.828-1.826-1.826-4.25-2.831-6.828-2.831-5.322 0-9.652 4.331-9.654 9.652 0 1.68.439 3.322 1.269 4.776l-1.026 3.748 3.839-1.006zm10.743-6.19c-.274-.137-1.623-.801-1.875-.893-.251-.091-.434-.137-.617.137-.182.274-.707.893-.867 1.077-.16.183-.32.206-.593.069-.274-.137-1.157-.426-2.204-1.36-.815-.727-1.365-1.624-1.525-1.899-.16-.274-.017-.423.12-.559.124-.122.274-.32.411-.48.137-.16.183-.274.274-.457.091-.183.046-.343-.023-.48-.069-.137-.617-1.486-.846-2.035-.223-.535-.469-.462-.646-.47l-.553-.01c-.191 0-.503.072-.765.357-.262.285-1 .977-1 2.383s1.028 2.766 1.171 2.95c.143.183 2.023 3.089 4.9 4.327.685.295 1.219.471 1.636.604.688.218 1.314.187 1.808.113.551-.082 1.623-.663 1.851-1.303.229-.64.229-1.188.16-1.303-.069-.115-.251-.183-.526-.32z"/></svg>
            שלחו הודעה בוואטסאפ
          </a>
          
          <div className="flex flex-col md:flex-row gap-8 mt-4 text-stone-400">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span className="text-xl font-bold" dir="ltr">052-3760674</span>
            </div>
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span className="text-xl">pashutbachutz@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
