
import React from 'react';

const DetailedOfferings: React.FC = () => {
  const offerings = [
    {
      title: "תכנון מקיף להקמה או שיפוץ",
      description: "בין אם אתם בונים מאפס או רק רוצים לרענן – אנחנו מתכננים את החוץ שלכם באופן אישי, עם הקשבה מלאה לצרכי המשפחה ולתקציב.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><path d="M3 9V5a2 2 0 0 1 2-2h4"/><path d="M15 3h4a2 2 0 0 1 2 2v4"/><path d="M21 15v4a2 2 0 0 1-2 2h-4"/><path d="M9 21H5a2 2 0 0 1-2-2v-4"/><path d="M10 9H8a2 2 0 0 0-2 2v2"/><path d="M14 15h2a2 2 0 0 0 2-2v-2"/><circle cx="12" cy="12" r="1"/></svg>
      )
    },
    {
      title: "מומחיות בחקלאות ביתית",
      description: "ייעוץ מקצועי בהקמת מערכות הידרופוניקה וגינות ירק. ללמוד לגדל את האוכל שלכם בבית, בקלות ובצורה נקייה.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
      )
    },
    {
      title: "פיצ'רים ייחודיים בחצר",
      description: "תכנון אלמנטים שעושים את ההבדל: פינות מדורה, קירות ירוקים, בריכות נוי או אזורי משחק מותאמים אישית.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><path d="M12 2v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="M2 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="M12 22v-4"/><path d="m19.07 19.07-2.83-2.83"/><path d="M22 12h-4"/><path d="m19.07 4.93-2.83 2.83"/></svg>
      )
    },
    {
      title: "ליווי מול קבלן מבצע",
      description: "אנחנו לא רק מתכננים – אנחנו איתכם בשטח. ליווי מקצועי בבחירת הקבלן, פיקוח על איכות העבודה ודאגה לביצוע מושלם עד הפרט האחרון.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      )
    }
  ];

  return (
    <section className="bg-stone-100 py-20 px-4 border-y border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {offerings.map((item, index) => (
            <div key={index} className="flex flex-col items-center lg:items-start text-center lg:text-right">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-3">{item.title}</h3>
              <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedOfferings;
