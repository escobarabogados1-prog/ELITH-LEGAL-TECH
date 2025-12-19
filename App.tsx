import React, { useState } from 'react';

// Usamos un solo import para todos los iconos, es más estable para el build
import * as Icon from 'lucide-react';

export default function App() {
  const [view, setView] = useState('home');

  // Clases simplificadas para que Vercel no se confunda
  const cardClass = "p-8 border border-slate-100 rounded-[2rem] bg-white hover:shadow-2xl transition-all cursor-pointer space-y-4";
  const primaryBtn = "w-full bg-emerald-600 text-white py-4 rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-emerald-700 transition-all cursor-pointer border-none";

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans">
      
      {/* NAVBAR */}
      <nav className="border-b p-4 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div onClick={() => setView('home')} className="flex items-center gap-2 cursor-pointer">
            <div className="bg-black p-2 rounded-lg text-emerald-400"><Icon.Scale size={20}/></div>
            <span className="font-black text-lg tracking-tighter uppercase italic">ELITH LEX GROUP</span>
          </div>
          <button onClick={() => setView('pago')} className="bg-black text-white px-5 py-2 rounded-full text-[10px] font-black uppercase">Pagar</button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto p-6 md:p-12">
        {view === 'home' && (
          <div className="space-y-16 animate-in fade-in">
            <header className="text-center space-y-6 py-10">
              <span className="bg-slate-100 px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-500 italic">Justicia Digital • +10 Años de Experiencia</span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic leading-none">Justicia <br/><span className="text-emerald-500">Inteligente.</span></h1>
              <p className="text-slate-400 text-lg italic max-w-xl mx-auto font-light">Especialistas en procesos notariales y propiedad intelectual desde cualquier lugar del mundo.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div onClick={() => setView('divorcio')} className={cardClass}>
                <Icon.HeartOff className="text-emerald-500" size={32} />
                <h3 className="text-2xl font-black italic uppercase">Divorcio Express</h3>
                <p className="text-slate-500 text-sm italic">Mutuo acuerdo digital. Rápido y garantizado.</p>
              </div>
              <div onClick={() => setView('creditos')} className={cardClass}>
                <Icon.TrendingDown className="text-emerald-500" size={32} />
                <h3 className="text-2xl font-black italic uppercase">Ley de Vivienda</h3>
                <p className="text-slate-500 text-sm italic">Reducción de intereses. Solo cobramos al éxito.</p>
              </div>
              <div onClick={() => setView('proteccion')} className={cardClass}>
                <Icon.Landmark className="text-emerald-500" size={32} />
                <h3 className="text-2xl font-black italic uppercase">Fideicomiso Civil</h3>
                <p className="text-slate-500 text-sm italic">Blindaje patrimonial absoluto contra embargos.</p>
              </div>
              <div onClick={() => setView('marcas')} className={cardClass}>
                <Icon.ShieldCheck className="text-emerald-500" size={32} />
                <h3 className="text-2xl font-black italic uppercase">Marcas & Patentes</h3>
                <p className="text-slate-500 text-sm italic">Registro SIC en 10 min. Vigilancia por 10 años.</p>
              </div>
            </div>
          </div>
        )}

        {/* VISTA DE PAGO (DATO DE FACTURACIÓN) */}
        {view === 'pago' && (
          <div className="max-w-md mx-auto p-10 border-2 border-emerald-500 rounded-[3rem] bg-white text-center space-y-8 animate-in zoom-in">
            <h2 className="text-3xl font-black italic uppercase">Pago de Trámite</h2>
            <div className="space-y-4">
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-black text-xs">PAGAR CON PSE / MERCADO PAGO</button>
              <div className="p-4 bg-slate-50 rounded-xl text-left border border-slate-100">
                <p className="text-[9px] font-black text-slate-400 uppercase italic">Nequi / Daviplata</p>
                <p className="font-black text-lg">313 292 2973</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl text-left border border-slate-100">
                <p className="text-[9px] font-black text-slate-400 uppercase italic">Llave Breve</p>
                <p className="font-black text-lg">79396055</p>
              </div>
            </div>
            <button onClick={() => setView('home')} className="text-[10px] font-black uppercase text-slate-300 border-none bg-none cursor-pointer">Volver</button>
          </div>
        )}
      </main>

      <footer className="py-20 text-center opacity-30 text-[9px] font-black uppercase tracking-widest italic">
        © 2025 ELITH LEX GROUP • WhatsApp 3132922973
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a href="https://wa.me/573132922973" target="_blank" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform flex items-center justify-center">
        <Icon.Phone size={24} />
      </a>
    </div>
  );
}
