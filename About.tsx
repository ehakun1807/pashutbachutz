
import React, { useState, useRef, useEffect } from 'react';
import { useAdmin } from './AdminContext';
import EditableText from './EditableText';

const About: React.FC = () => {
  const { isAdmin } = useAdmin();
  
  // הקישור הישיר החדש לתמונה שהעלית לגוגל דרייב
  const staticImage = "https://lh3.googleusercontent.com/d/12D9jkqXApSzpEB5AblDMpI6gRMqGupup";
  
  const [aboutImage, setAboutImage] = useState(staticImage);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAdmin) {
      const saved = localStorage.getItem('pashut_about_img');
      if (saved) setAboutImage(saved);
    } else {
      setAboutImage(staticImage);
    }
  }, [isAdmin, staticImage]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const str = reader.result as string;
        setAboutImage(str);
        if (isAdmin) {
          localStorage.setItem('pashut_about_img', str);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="about" className="py-24 px-4 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative group flex justify-center lg:justify-end">
            {/* Decorative background element - now more visible */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-100 rounded-full z-0 opacity-80"></div>
            
            {/* גובה המיכל הוקטן משמעותית כדי לחשוף את האלמנטים העיצוביים מאחור */}
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl h-[350px] w-[350px] bg-stone-100 border-4 border-white">
              <img src={aboutImage} alt="עירן - פשוט בחוץ" className="object-cover h-full w-full" />
              
              {isAdmin && (
                <div className="absolute top-4 left-4 z-40">
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-white/95 text-stone-900 px-3 py-1.5 rounded-xl text-xs font-bold shadow-2xl border border-stone-200 hover:bg-white transition-colors"
                  >
                    החלף תמונה
                  </button>
                  <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={handleUpload} />
                </div>
              )}
            </div>
          </div>
          <div className="lg:w-1/2 text-right">
            <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-8">
              <EditableText id="about_title" defaultText="הסיפור שלי" />
            </h2>
            <div className="space-y-6 text-xl text-stone-600 leading-relaxed">
              <p>
                שמי <span className="text-emerald-600 font-bold">עירן</span>, ואני הלב הפועם מאחורי <span className="text-emerald-600 font-bold">"פשוט בחוץ"</span>.
              </p>
              <p>
                <EditableText id="about_p1" defaultText="קצב החיים בעולם המודרני מהיר ושוחק והטבע לא תמיד זמין לנו, אך בשילוב של אהבה ויצירתיות אפשר ליצור מרחב עם כל האיכויות שיש לטבע להציע - שקט, שלווה, ריפוי." />
              </p>
              <p>
                <EditableText id="about_p2" defaultText="למעלה מ-20 שנה ניהלתי פרויקטים מורכבים בעולם ההייטק. במשך כל אותו הזמן רכשתי נסיון לימודי, מעשי וידע רב בתחומים שונים כגון: תכנון ועיצוב גן נוי, חקלאות ביתית, אמנות הבונסאי ועוד." />
              </p>
              <p className="font-bold text-emerald-800">
                <EditableText id="about_p3" defaultText="אשמח לשתף את האהבה שלי לתחום הגינון הביתי ולהגשים לכם את החלום הפרטי" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
