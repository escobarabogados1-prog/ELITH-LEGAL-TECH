import React, { useState } from 'react';
import { 
  ArrowLeft, TrendingDown, HeartOff, Landmark, ShieldCheck, 
  Cpu, Send, Upload, CreditCard, CheckCircle, Globe, Award, FileText, Phone, Zap 
} from 'lucide-react';

export default function App() {
  const [view, setView] = useState('home');

  // Estilos globales para evitar errores de compilación
  const btnStyle = "w-full bg-emerald-600 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2";
  const cardStyle = "p-8 border rounded-[2.5rem] hover:shadow-xl transition-all cursor-pointer text-left space-y-4 group bg-white";

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans selection:bg-emerald-100">
      
      {/* BOTÓN WHATSAPP FLOTANTE */}
      <a href="https://wa.me/573132922973" target="_blank" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform">
        <Phone size={24}/>
      </a>

      {/* BARRA DE NAVEGACIÓN */}
      <nav className="border-b p-4 sticky top-0 bg-white/80 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
            <div className="bg-black p-2 rounded-lg text-emerald-400"><Cpu size={20}/></div>
            <span className="font-black text-lg tracking-tighter italic uppercase">ELITH LEX GROUP</span>
          </div>
          <button onClick={() => setView('pago')} className="bg-black text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">Pagar Trámite</button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6 md:p-12">
        
        {/* VISTA INICIAL (HOME) */}
        {view === 'home' && (
          <div className="space-y-16 animate-in fade-in duration-500">
            <section className="text-center space-y-6 py-10">
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">
                <Award size={14} className="text-emerald-500"/> Trayectoria Jurídica +10 Años
              </div>
              <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter italic leading-none">Justicia <br/><span className="text-emerald-500 text-7xl md:text-[8rem]">Sin Fronteras.</span></h1>
              <p className="max-w-xl mx-auto text-lg text-slate-500 italic font-light">Especialistas en procesos notariales y propiedad intelectual. Eficiencia legal desde cualquier lugar del mundo.</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div onClick={() => setView('divorcio')} className={cardStyle}>
                <HeartOff className="text-emerald-600" size={30}/>
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Divorcio Express</h3>
                <p className="text-slate-500 text-sm italic font-light">Rápido, económico y seguro. 100% digital para colombianos en el exterior.</p>
              </div>
              <div onClick={() => setView('creditos')} className={cardStyle}>
                <TrendingDown className="text-emerald-600" size={30}/>
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Ley de Vivienda</h3>
                <p className="text-slate-500 text-sm italic font-light">Reducción de créditos hipotecarios. Gestión al éxito (No ahorra, no paga).</p>
              </div>
              <div onClick={() => setView('proteccion')} className={cardStyle}>
                <Landmark className="text-emerald-600" size={30}/>
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Fideicomiso Civil</h3>
                <p className="text-slate-500 text-sm italic font-light">Protección patrimonial contra embargos y seguridad para sus herederos.</p>
              </div>
              <div onClick={() => setView('marcas')} className={cardStyle}>
                <ShieldCheck className="text-emerald-600" size={30}/>
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Marcas & Patentes</h3>
                <p className="text-slate-500 text-sm italic font-light">Registro ante la SIC en 10 minutos. Vigilancia legal por una década.</p>
              </div>
            </div>
          </div>
        )}

        {/* DETALLE: DIVORCIO */}
        {view === 'divorcio' && (
          <div className="grid md:grid-cols-3 gap-10 text-left animate-in slide-in-from-bottom-5">
            <div className="md:col-span-2 space-y-8">
              <button onClick={() => setView('home')} className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400"><ArrowLeft size={14}/> Volver</button>
              <h2 className="text-6xl font-black italic uppercase italic">Divorcio <span className="text-emerald-500">Express</span></h2>
              <p className="text-slate-500 italic">Desde cualquier lugar del mundo. Rápido, económico y seguro.</p>
              <div className="space-y-4">
                <p className="font-black uppercase text-[10px] text-slate-400 italic">Documentos Requeridos:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Poder Autenticado", "Registro Civil Matrimonio", "Registro Nacimiento Ambos", "Cédulas", "Certificados de Tradición", "Acuerdo de Alimentos"].map((d,i) => (
                    <li key={i} className="flex items-center gap-2 p-3 bg-white border rounded-xl text-[11px] font-bold italic"><CheckCircle size={14} className="text-emerald-500"/> {d}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="p-8 border-2 border-emerald-500 rounded-[2.5rem] bg-white shadow-xl space-y-6">
                <p className="text-center font-black italic text-4xl">$1.200.000 <span className="text-xs uppercase font-normal">cop</span></p>
                <button onClick={() => setView('pago')} className={btnStyle}>Pagar Honorarios</button>
                <button onClick={() => setView('carga-docs')} className="w-full bg-black text-white py-4 rounded-2xl font-black uppercase text-[10px]">Radicar Documentos</button>
              </div>
            </div>
          </div>
        )}

        {/* DETALLE: LEY DE VIVIENDA (REDUCCIÓN) */}
        {view === 'creditos' && (
          <div className="max-w-4xl mx-auto space-y-10 text-left animate-in slide-in-from-bottom-5">
            <button onClick={() => setView('home')} className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400"><ArrowLeft size={14}/> Volver</button>
            <h2 className="text-6xl font-black italic uppercase">Ley <span className="text-emerald-500">546 / 99</span></h2>
            <p className="text-lg italic text-slate-500 font-light">Disminuya el tiempo de su crédito hipotecario o leasing habitacional y ahorre millones en intereses.</p>
            <div className="grid gap-4">
              {[
                {t: "Estudio Gratis", d:
