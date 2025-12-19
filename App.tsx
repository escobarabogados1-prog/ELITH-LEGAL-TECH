import React, { useState } from 'react';
import { 
  ArrowLeft, TrendingDown, HeartOff, Landmark, ShieldCheck, 
  Cpu, Send, Upload, CreditCard, CheckCircle, Globe, Award, FileText, Phone, ChevronRight, Zap
} from 'lucide-react';

// --- CONFIGURACIÓN ---
const API_KEY = "PEGA_AQUI_TU_API_KEY"; 

type View = 'home' | 'creditos' | 'divorcio' | 'proteccion' | 'marcas' | 'pago' | 'carga-docs' | 'ia';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [iaChat, setIaChat] = useState([{role: 'bot', text: "Bienvenido a Elith Lex. Soy su asistente legal estratégico. ¿En qué negocio puedo asesorarle?"}]);
  const [iaInput, setIaInput] = useState('');

  // Reutilización de estilos para evitar que el código sea muy pesado
  const btnPrimary = "w-full bg-emerald-600 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-lg hover:bg-emerald-700 transition-all";
  const cardStyle = "bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all cursor-pointer text-left space-y-4 group";

  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans text-slate-900 selection:bg-emerald-100">
      
      {/* WHATSAPP FLOTANTE */}
      <a href="https://wa.me/573132922973" target="_blank" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform"><Phone size={24}/></a>

      {/* NAVBAR */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 p-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
            <div className="bg-slate-900 p-2 rounded-lg text-emerald-400"><Cpu size={20} /></div>
            <span className="font-black text-lg tracking-tighter uppercase italic">ELITH LEX GROUP</span>
          </div>
          <div className="hidden md:flex gap-6 text-[10px] font-black uppercase tracking-widest">
            <button onClick={() => setView('ia')} className="hover:text-emerald-600">Asesor IA</button>
            <button onClick={() => setView('pago')} className="bg-slate-900 text-white px-6 py-2 rounded-full">Pagar Trámite</button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 md:p-12">
        
        {/* HOME */}
        {view === 'home' && (
          <div className="space-y-24 animate-in fade-in duration-500">
            <section className="text-center space-y-8 py-10">
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-[9px] font-black text-slate-500 uppercase tracking-widest"><Award size={14} className="text-emerald-500"/> +10 Años de Trayectoria Jurídica Real</div>
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter italic leading-[0.85]">Justicia <br/><span className="text-emerald-500">Inteligente.</span></h1>
              <p className="max-w-2xl mx-auto text-xl text-slate-500 font-light italic leading-relaxed">Expertos en derecho de familia, civil y marcas. Transformamos leyes complejas en resultados rápidos desde cualquier lugar del mundo.</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div onClick={() => setView('divorcio')} className={cardStyle}>
                <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-600 w-fit"><HeartOff size={30}/></div>
                <h3 className="text-3xl font-black uppercase italic tracking-tighter">Divorcio Express</h3>
                <p className="text-slate-500 text-sm italic font-light">Rápido, económico y seguro. Mutuo acuerdo notarial digital.</p>
                <span className="text-[10px] font-black text-emerald-600 uppercase">Ver Requisitos —></span>
              </div>

              <div onClick={() => setView('creditos')} className={cardStyle}>
                <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-600 w-fit"><TrendingDown size={30}/></div>
                <h3 className="text-3xl font-black uppercase italic tracking-tighter">Reducción Crédito</h3>
                <p className="text-slate-500 text
