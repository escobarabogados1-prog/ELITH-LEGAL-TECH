import React, { useState } from 'react';
import { 
  Scale, ArrowLeft, TrendingDown, HeartOff, Landmark, ShieldCheck, 
  Zap, Cpu, Database, Fingerprint, Search, Shield, Bot, Users, Send, Upload, CreditCard, CheckCircle, Globe, Award, FileText, Briefcase, Clock, Phone, ChevronRight, Info
} from 'lucide-react';

// --- CONFIGURACIÓN ---
const API_KEY = "PEGA_AQUI_TU_API_KEY_DE_GOOGLE"; 

type View = 'home' | 'creditos' | 'divorcio' | 'proteccion' | 'marcas' | 'pago' | 'carga-docs' | 'consultor-ia';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [iaChat, setIaChat] = useState<{role: 'bot' | 'user', text: string}[]>([
    { role: 'bot', text: "Bienvenido a Elith Lex. Soy su asistente legal estratégico. He sido entrenado con más de 10 años de jurisprudencia colombiana. ¿En qué negocio puedo asesorarle?" }
  ]);
  const [iaInput, setIaInput] = useState('');

  // --- COMPONENTE DE TARJETA DE PAGO RÁPIDO ---
  const PaymentWidget = () => (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border-2 border-emerald-500 space-y-6 sticky top-32">
      <h3 className="text-xl font-black italic uppercase text-center">Concretar Negocio</h3>
      <div className="space-y-3">
        <button onClick={() => setView('pago')} className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-lg hover:bg-emerald-700 flex items-center justify-center gap-2">
          <CreditCard size={16}/> Ir a Pasarela de Pago
        </button>
        <button onClick={() => setView('carga-docs')} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2">
          <Upload size={16}/> Radicar Documentos
        </button>
      </div>
      <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
        <div className="text-left">
          <p className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Nequi/Daviplata</p>
          <p className="text-[12px] font-bold">3132922973</p>
        </div>
        <div className="text-left">
          <p className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Llave Breve</p>
          <p className="text-[12px] font-bold">79396055</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans text-slate-900 overflow-x-hidden selection:bg-emerald-100">
      
      {/* BOTÓN WHATSAPP */}
      <a href="https://wa.me/573132922973" target="_blank" className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-[100] hover:scale-110 transition-transform"><Phone size={28}/></a>

      {/* NAVBAR */}
      <nav className="bg-white/80 backdrop-blur-xl border-b border-slate-100 p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
            <div className="bg-slate-900 p-2 rounded-xl text-emerald-400"><Cpu size={22} /></div>
            <div className="text-left leading-none font-black text-xl tracking-tighter uppercase italic">ELITH LEX <span className="text-emerald-500">GROUP</span></div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
            <button onClick={() => setView('home')} className="hover:text-emerald-600">Trayectoria</button>
            <button onClick={() => setView('consultor-ia')} className="hover:text-emerald-600">Consultor IA</button>
            <button onClick={() => setView('pago')} className="bg-slate-900 text-white px-6 py-2.5 rounded-full shadow-lg">Pagar Trámite</button>
          </div>
          {view !== 'home' && (
            <button onClick={() => setView('home')} className="text-slate-900 px-4 py-2 rounded-full text-[10px] font-black border border-slate-200 flex items-center gap-2"><ArrowLeft size={14}/> VOLVER</button>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 md:p-12">
        
        {/* VISTA: HOME */}
        {view === 'home' && (
          <div className="space-y-32 animate-in fade-in duration-700">
            <section className="text-center space-y-10 py-10">
              <div className="inline-flex items-center gap-2 bg-slate-100 px-5 py-2 rounded-full text-[10px] font-black text-slate-600 uppercase tracking-widest border border-slate-200">
                <Award size={14} className="text-emerald-500"/> +10 Años de Trayectoria Jurídica
              </div>
              <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] italic">Justicia <br/><span className="text-emerald-500">Inteligente.</span></h1>
              <p className="max-w-3xl mx-auto text-2xl text-slate-500 font-light italic leading-snug">Expertos en derecho de familia, civil y marcas. Transformamos leyes complejas en resultados rápidos y seguros.</p>
              <div className="flex justify-center gap-4">
                <button onClick={() => setView('consultor-ia')} className="bg-emerald-600 text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl hover:scale-105 transition-all">Hablar con la IA</button>
              </div>
            </section>

            {/* SERVICIOS GRILLA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* DIVORCIO */}
              <div onClick={() => setView('divorcio')} className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all cursor-pointer group text-left space-y-6">
                <div className="bg-emerald-50 p-5 rounded-3xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all w-fit"><HeartOff size={35}/></div>
                <h3 className="text-4xl font-black uppercase tracking-tighter italic leading-none">Divorcio <br/>Express</h3>
                <p className="text-slate-500 text-sm italic font-light">Mutuo acuerdo, rápido y desde cualquier lugar del mundo.</p>
                <div className="flex items-center gap-2 text-[10px] font-black text-emerald-600 uppercase tracking-widest">Ver Requisitos <ChevronRight size={14}/></div>
              </div>

              {/* CREDITOS */}
              <div onClick={() => setView('creditos')} className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all cursor-pointer group text-left space-y-6">
                <div className="bg-emerald-50 p-5 rounded-3xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all w-fit"><TrendingDown size={35}/></div>
                <h3 className="text-4xl font-black uppercase tracking-tighter italic leading-none">Reducción de <br/>Créditos</h3>
                <p className="text-slate-500 text-sm italic font-light">Ley 546 de 1999. Pague su casa en la mitad del tiempo.</p>
                <div className="flex items-center gap-2 text-[10px] font-black text-emerald-600 uppercase tracking-widest">Gestión al Éxito <ChevronRight size={14}/></div>
              </div>

              {/* FIDEICOMISO */}
              <div onClick={() => setView('proteccion')} className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all cursor-pointer group text-left space-y-6">
                <div className="bg-emerald-50 p-5 rounded-3xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all w-fit"><Landmark size={35}/></div>
                <h3 className="text-4xl font-black uppercase tracking-tighter italic leading-none">Fideicomiso <br/>Civil</h3>
                <p className="text-slate-500 text-sm italic font-light">Blindaje patrimonial absoluto contra embargos y deudas.</p>
                <div className="flex items
