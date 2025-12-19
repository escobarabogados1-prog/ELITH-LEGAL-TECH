import React, { useState } from 'react';
// Importación simplificada para evitar errores de compilación en Vercel
import * as Icon from 'lucide-react';

export default function App() {
  const [view, setView] = useState('home');

  // Estilos UI
  const btnStyle = "w-full bg-emerald-600 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2";
  const cardStyle = "p-8 border rounded-[2.5rem] hover:shadow-xl transition-all cursor-pointer text-left space-y-4 bg-white border-slate-100";

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans">
      
      {/* CONTACTO DIRECTO */}
      <a href="https://wa.me/573132922973" target="_blank" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform">
        <Icon.Phone size={24}/>
      </a>

      {/* NAVBAR */}
      <nav className="border-b p-4 sticky top-0 bg-white/80 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
            <div className="bg-black p-2 rounded-lg text-emerald-400"><Icon.Cpu size={20}/></div>
            <span className="font-black text-lg tracking-tighter italic uppercase underline decoration-emerald-500">ELITH LEX</span>
          </div>
          <button onClick={() => setView('pago')} className="bg-black text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">Pagar</button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6 md:p-12">
        
        {/* VISTA: INICIO */}
        {view === 'home' && (
          <div className="space-y-16">
            <header className="text-center space-y-6 py-10">
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-500">
                <Icon.Award size={14} className="text-emerald-500"/> Trayectoria Jurídica +10 Años
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic leading-none">Justicia <br/><span className="text-emerald-500">Digital.</span></h1>
              <p className="max-w-xl mx-auto text-lg text-slate-400 italic font-light">Especialistas en procesos notariales, créditos y marcas. Eficiencia legal garantizada.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div onClick={() => setView('divorcio')} className={cardStyle}>
                <Icon.HeartOff className="text-emerald-600" size={30}/>
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Divorcio Express</h3>
                <p className="text-slate-500 text-sm italic">Desde cualquier lugar del mundo. Rápido y 100% digital.</p>
              </div>
              <div onClick={() => setView('creditos')} className={cardStyle}>
                <Icon.TrendingDown className="text-emerald-600" size={30}/>
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Ley de Vivienda</h3>
                <p className="text-slate-500 text-sm italic">Reducción de créditos hipotecarios. Gestión al éxito.</p>
              </div>
              <div onClick={() => setView('proteccion')} className={cardStyle}>
                <Icon.Landmark className="text-emerald-600" size={30}/>
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Fideicomiso Civil</h3>
                <p className="text-slate-500 text-sm italic">Protección patrimonial efectiva contra embargos.</p>
              </div>
              <div onClick={() => setView('marcas')} className={cardStyle}>
                <Icon.ShieldCheck className="text-emerald-600" size={30}/>
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Marcas & Patentes</h3>
                <p className="text-slate-500 text-sm italic">Registro ante la SIC en 10 minutos. Vigilancia por 10 años.</p>
              </div>
            </div>
          </div>
        )}

        {/* VISTA: DIVORCIO */}
        {view === 'divorcio' && (
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div className="md:col-span-2 space-y-8">
              <button onClick={() => setView('home')} className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400"><Icon.ArrowLeft size={14}/> Volver</button>
              <h2 className="text-5xl font-black italic uppercase">Divorcio <span className="text-emerald-500 underline">Express</span></h2>
              <div className="space-y-4">
                <p className="font-black uppercase text-[10px] text-slate-400 italic">Documentos Requeridos:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Poder Autenticado", "Registro Civil Matrimonio", "Registros de Nacimiento", "Cédulas de Ciudadanía", "Certificados de Tradición", "Acuerdo de Alimentos"].map((d,i) => (
                    <div key={i} className="flex items-center gap-2 p-3 bg-white border border-slate-100 rounded-xl text-[11px] font-bold italic"><Icon.CheckCircle size={14} className="text-emerald-500"/> {d}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-12">
              <div className="p-8 border-2 border-emerald-500 rounded-[2.5rem] bg-white shadow-xl space-y-6">
                <p className="text-center font-black italic text-4xl">$1.200.000 <span className="text-xs uppercase font-normal">cop</span></p>
                <button onClick={() => setView('pago')} className={btnStyle}>Pagar Honorarios</button>
                <button onClick={() => setView('carga-docs')} className="w-full bg-black text-white py-4 rounded-2xl font-black uppercase text-[10px]">Cargar Expediente</button>
              </div>
            </div>
          </div>
        )}

        {/* VISTA: LEY DE VIVIENDA */}
        {view === 'creditos' && (
          <div className="max-w-4xl mx-auto space-y-8 text-left">
            <button onClick={() => setView('home')} className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400"><Icon.ArrowLeft size={14}/> Volver</button>
            <h2 className="text-6xl font-black italic uppercase italic">Ley <span className="text-emerald-500">Vivienda</span></h2>
            <div className="grid gap-4">
              {[
                {t: "Estudio Gratis", d: "Analizamos sus extractos bancarios para ahorro."},
                {t: "Entrega de Docs", d: "Firma de poder para gestión ante el banco."},
                {t: "Gestión Técnica", d: "Proceso legal de 1 a 3 meses."},
                {t: "Cobro a Éxito", d: "Paga solo cuando vea el beneficio aplicado."}
              ].map((s,i) => (
                <div key={i} className="flex gap-6 p-6 bg-white border rounded-3xl items-center shadow-sm">
                  <span className="text-5xl font-black text-emerald-100 italic">{i+1}</span>
                  <div><h4 className="font-black uppercase italic text-sm">{s.t}</h4><p className="text-xs text-slate-500 italic font-light">{s.d}</p></div>
                </div>
              ))}
            </div>
            <button onClick={() => setView('carga-docs')} className={btnStyle}>Subir Extracto para Estudio Gratis</button>
          </div>
        )}

        {/* VISTA: FIDEICOMISO */}
        {view === 'proteccion' && (
          <div className="max-w-4xl mx-auto space-y-10 text-left">
            <button onClick={() => setView('home')} className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400"><Icon.ArrowLeft size={14}/> Volver</button>
            <h2 className="text-5xl font-black italic uppercase underline decoration-emerald-500">Fideicomiso Civil</h2>
            <div className="p-8 bg-slate-900 text-white rounded-[3rem] space
