
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

const AIConsultant: React.FC = () => {
  const [spaceType, setSpaceType] = useState('yard');
  const [goal, setGoal] = useState('hosting');
  const [size, setSize] = useState('medium');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ tips: string[]; summary: string } | null>(null);

  const getAdvice = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `
        User has a ${spaceType === 'yard' ? 'private yard' : 'balcony'}. 
        Their main goal is ${goal === 'hosting' ? 'hosting family and friends' : 'relaxation and quiet time'}.
        The size is ${size}. 
        Provide a JSON response with short, practical design tips in Hebrew.
        Include a 'summary' paragraph and an array 'tips' (max 4 tips).
        Target audience: Families and elderly, tone should be friendly, accessible, and warm.
        Focus on plants, furniture, and atmosphere.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              summary: { type: Type.STRING },
              tips: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              }
            },
            required: ["summary", "tips"]
          }
        }
      });

      const data = JSON.parse(response.text || '{}');
      setResult(data);
    } catch (error) {
      console.error("AI Error:", error);
      setResult({
        summary: "מצטערים, חלה שגיאה קטנה בחיבור ליועץ. בואו נדבר בטלפון ונשמח לתת לכם את כל הטיפים באופן אישי!",
        tips: ["השתמשו בצמחים מקומיים", "וודאו שיש צל מספק", "תכננו תאורה חמה"]
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-emerald-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm font-bold text-emerald-800 mb-2">מה יש לכם?</label>
          <select 
            value={spaceType} 
            onChange={(e) => setSpaceType(e.target.value)}
            className="w-full p-3 border-2 border-emerald-100 rounded-xl focus:border-emerald-500 outline-none transition-all"
          >
            <option value="yard">חצר פרטית</option>
            <option value="balcony">מרפסת</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-emerald-800 mb-2">מה המטרה העיקרית?</label>
          <select 
            value={goal} 
            onChange={(e) => setGoal(e.target.value)}
            className="w-full p-3 border-2 border-emerald-100 rounded-xl focus:border-emerald-500 outline-none transition-all"
          >
            <option value="hosting">אירוח חברים ומשפחה</option>
            <option value="relax">שקט, שלווה ומנוחה</option>
            <option value="agriculture">גידול ירקות ותבלינים</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-emerald-800 mb-2">מה הגודל (בערך)?</label>
          <select 
            value={size} 
            onChange={(e) => setSize(e.target.value)}
            className="w-full p-3 border-2 border-emerald-100 rounded-xl focus:border-emerald-500 outline-none transition-all"
          >
            <option value="small">קטן (עד 15 מ"ר)</option>
            <option value="medium">בינוני (15-50 מ"ר)</option>
            <option value="large">גדול (מעל 50 מ"ר)</option>
          </select>
        </div>
      </div>

      <button 
        onClick={getAdvice}
        disabled={loading}
        className="w-full py-4 bg-emerald-600 text-white font-black text-xl rounded-2xl hover:bg-emerald-700 transition-all shadow-lg active:scale-95 disabled:opacity-50"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            מנתח נתונים...
          </span>
        ) : "קבלו המלצה מותאמת"}
      </button>

      {result && (
        <div className="mt-8 p-6 bg-emerald-50 rounded-2xl animate-fade-in border border-emerald-200">
          <h4 className="text-xl font-bold text-emerald-900 mb-4">הנה כמה מחשבות בשבילכם:</h4>
          <p className="text-emerald-800 mb-6 leading-relaxed text-lg">{result.summary}</p>
          <ul className="space-y-3">
            {result.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-emerald-700">
                <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center text-sm text-emerald-600 italic">
            * המלצה ראשונית בלבד. לתכנון מדויק ומקצועי, כדאי שנדבר!
          </div>
        </div>
      )}
    </div>
  );
};

export default AIConsultant;
