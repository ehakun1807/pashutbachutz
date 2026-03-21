
import React, { useEffect, useRef, useState } from 'react';
import { useAdmin } from './AdminContext';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps & { 
  id: string,
  delay: number,
  onImageChange: (newImg: string) => void
}> = ({ title, description, icon, image, delay, onImageChange }) => {
  const { isAdmin } = useAdmin();
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => { if (cardRef.current) observer.unobserve(cardRef.current); };
  }, []);

  return (
    <div 
      ref={cardRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl flex flex-col h-full border border-stone-100 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="h-56 overflow-hidden relative bg-stone-100">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-2xl shadow-lg text-emerald-700 z-10">{icon}</div>
        
        {isAdmin && (
          <div className="absolute bottom-0 left-0 p-4 z-40 group/spot pointer-events-auto">
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-xl border border-emerald-500"
            >
              החלף תמונה
            </button>
            <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => onImageChange(reader.result as string);
                reader.readAsDataURL(file);
              }
            }} />
          </div>
        )}
      </div>
      <div className="p-8 flex-grow">
        <h3 className="text-2xl font-bold text-stone-800 mb-3">{title}</h3>
        <p className="text-stone-600 leading-relaxed text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const { isAdmin } = useAdmin();
  
  // תמונות קבועות עבור השירותים - כולל התמונה החדשה עבור תכנון נוף
  const staticImages = {
    planning: "https://lh3.googleusercontent.com/d/1CNcx0Ql5-DWx0jmoyrVOAXR7WFryHeRC",
    hydro: "https://lh3.googleusercontent.com/d/13RIddyv6kQka9UB0inYeMamiMLK243T9",
    furniture: "https://lh3.googleusercontent.com/d/1_wTWwh7Xh76JJVL1Fhdx7Q6tEtPIVqmh"
  };

  const [images, setImages] = useState(staticImages);

  useEffect(() => {
    if (isAdmin) {
      const savedPlanning = localStorage.getItem('pashut_service_planning');
      const savedHydro = localStorage.getItem('pashut_service_hydro');
      const savedFurniture = localStorage.getItem('pashut_service_furniture');
      
      setImages({
        planning: savedPlanning || staticImages.planning,
        hydro: savedHydro || staticImages.hydro,
        furniture: savedFurniture || staticImages.furniture
      });
    } else {
      setImages(staticImages);
    }
  }, [isAdmin]);

  const handleImageChange = (id: string, newImg: string) => {
    setImages(prev => ({ ...prev, [id]: newImg }));
    if (isAdmin) {
      localStorage.setItem(`pashut_service_${id}`, newImg);
    }
  };

  const services = [
    { id: 'planning', title: "תכנון נוף", description: "תהליך התכנון נעשה באופן ידני, עם הרבה רגש ותשוקה. החלום שלכם מתורגם לשרטוט מפורט הכולל בחירת צמחייה, חומרים ותאורה.", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2Z"/><path d="m10 10 4 4"/><path d="m14 10-4 4"/><path d="M12 6v12"/><path d="M6 12h12"/></svg>) },
    { id: 'hydro', title: "הידרופוניקה וחקלאות ביתית", description: "תמיכה בהקמת מערכות לגידול ירקות וצמחי תבלין כגון הידרופוניקה - טרי, בריא וחסכוני.", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 20h10"/><path d="M10 20v-2"/><path d="M14 20v-2"/><path d="M12 18V4"/><path d="M12 4c-3 0-5 2-5 5s2 5 5 5 5-2 5-5-2-5-5-5Z"/></svg>) },
    { id: 'furniture', title: "ריהוט ועיצוב חוץ", description: "התאמת פינות ישיבה, מטבחי חוץ מאובזרים ופתרונות אירוח שהופכים את החצר לסלון השני של הבית. נוחות ללא פשרות.", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M9 17v-5a3 3 0 0 1 6 0v5"/><path d="M12 12V3"/></svg>) }
  ];

  return (
    <section id="services" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-6">השירותים שלנו</h2>
        <div className="w-24 h-2 bg-emerald-500 mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto italic">"מביאים את הטבע הביתה, בדיוק כמו שחלמתם"</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard 
            key={service.id} 
            id={service.id} 
            title={service.title} 
            description={service.description} 
            icon={service.icon} 
            image={images[service.id as keyof typeof images]} 
            delay={index * 150} 
            onImageChange={(img) => handleImageChange(service.id, img)} 
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
