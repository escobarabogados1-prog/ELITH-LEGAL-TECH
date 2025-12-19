import React, { useState } from 'react';
import { 
  Scale, ArrowLeft, TrendingDown, HeartOff, Landmark, ShieldCheck, 
  MessageCircle, User, Mail, Phone, MapPin, Zap, Globe, Bot, FileText, 
  Cpu, Database, Network, Fingerprint, Activity, Search, Shield
} from 'lucide-react';

type View = 'home' | 'creditos' | 'divorcio' | 'proteccion' | 'marcas';

// --- COMPONENTE: TERMINAL ELITH-CORE ---
const ElithCoreTerminal = ({ unidad }: { unidad: View }) => {
  const [step, setStep] = useState(1);
  const [datos, setDatos] = useState({ nombre: '', email: '', celular: '', ciudad: '' });
  const [isProcessing, setIsProcessing] = useState(false);
  const [chatLog, setChatLog] = useState<{role: 'system' | 'user', text: string}[]>([
    { role: 'system', text: `ELITH_CORE: Iniciando módulo ${unidad.toUpperCase()}. Sincronizando protocolos...` }
  ]);
  const [input, setInput] = useState('');

  const handleProcessing = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;
    const newLog = [...chatLog, { role: 'user', text: input } as const];
    setChatLog(newLog);
    setInput('');
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const respuesta = "SISTEMA: Análisis completado. Expediente pre-calificado. Un abogado senior validará su caso.";
      setChatLog([...newLog, { role: 'system', text: respuesta }]);
    }, 1500);
  };

  const conectarWhatsApp = () => {
    const texto = `*RADICACIÓN APP ELITH LEX*\n*Módulo:* ${unidad.toUpperCase()}\n*Usuario:* ${datos.nombre}\n*Email:* ${datos.email}\n*Ciudad:* ${datos.ciudad}\n*Consulta:* ${chatLog[chatLog.length - 1].text}`;
    window.open(`https://wa.me/573167824217?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <div className="bg-[#020617] rounded-[2.5rem] shadow-2xl border border-emerald-500/20 overflow-hidden sticky top-24 font-mono">
      <div className="bg-slate-900 p-4 flex items-center justify-between border-b border-emerald-500/10">
        <div className="flex items-center gap-2">
          <Activity size={14} className="text-emerald-500 animate-pulse" />
          <span className="text-[10px] text-emerald-500/70 font-bold tracking-widest uppercase">Elith_Core_v2.5</span>
        </div>
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
      </div>

      {step === 1 ? (
        <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="p-8 space-y-4">
          <h5 className="text-white text-[10px] font-black mb-4 flex items-center gap-2 tracking-[0.2em]">
            <Fingerprint size={16} className="text-emerald-500"/> AUTENTICACIÓN
          </h5>
          <input required placeholder="NOMBRE_COMPLETO" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-emerald-400 text-[11px] outline-none" onChange={e => setDatos({...datos, nombre: e.target.value})} />
          <input required type="email" placeholder="CORREO_ELECTRÓNICO" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-emerald-400 text-[11px] outline-none" onChange={e => setDatos({...datos, email: e.target.value})} />
          <input required type="tel" placeholder="WHATSAPP_CONTACTO" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-emerald-400 text-[11px] outline-none" onChange={e => setDatos({...datos, celular: e.target.value})} />
          <input required placeholder="CIUDAD_O_PAÍS" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-emerald-400 text-[11px] outline-none" onChange={e => setDatos({...datos, ciudad: e.target.value})} />
          <button type="submit" className="w-full bg-emerald-600 text-white font-black py-4 rounded-xl text-[10px] tracking-widest uppercase">Sincronizar Datos</button>
        </form>
      ) : (
        <div className="flex flex-col h-[450px]">
          <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-[#010409] text-[10px]">
            {chatLog.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'system' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] p-3 rounded-lg ${m.role === 'system' ? 'text-emerald-400' : 'bg-emerald-900/20 text-white border border-emerald-500/30'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isProcessing && <div className="text-emerald-500 animate-pulse font-bold tracking-tighter">Sincronizando...</div>}
          </div>
          <div className="p-4 bg-slate-950 border-t border-slate-800 space-y-3">
            <form onSubmit={handleProcessing} className="flex gap-2">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Escriba aquí..." className="flex-1 bg-slate-900 border border-slate-800 p-3 rounded-xl text-[10px] text-white outline-none" />
              <button type="submit" className="bg-emerald-600 p-3 rounded-xl text-white"><Zap size={16}/></button>
            </form>
            <button onClick={conectarWhatsApp} className="w-full bg-white text-slate-900 font-black py-3 rounded-xl flex items-center justify-center gap-2 text-[10px] tracking-widest uppercase">
               <MessageCircle size={16}/> Hablar con Abogado
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [view, setView] = useState<View>('home');

  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans text-slate-900">
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 p-5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setView('home')}>
            <div className="bg-slate-900 p-2 rounded-xl"><Cpu className="text-emerald-400" size={24} /></div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter leading-none">ELITH LEX</span>
              <span className="text-[8px] font-black tracking-[0.3em] text-emerald-600">LEGAL TECH STARTUP</span>
            </div>
          </div>
          {view !== 'home' && (
            <button onClick={() => setView('home')} className="bg-slate-900 text-white px-5 py-2 rounded-full text-[9px] font-black tracking-widest flex items-center gap-2">
              <ArrowLeft size={12}/> VOLVER
            </button>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 md:p-12 text-center">
        {view === 'home' ? (
          <div className="space-y-24 animate-in fade-in duration-700">
            <section className="space-y-12 py-16">
              <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                <Network size={14} className="text-emerald-600 animate-pulse"/>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-700">Conexión Registraduría & Rama Judicial</span>
              </div>
              <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.75]">
                Justicia<span className="text-emerald-500 italic opacity-80">Digital.</span>
              </h1>
              <p className="max-w-3xl mx-auto text-2xl text-slate-500 font-light leading-relaxed">
                Firma líder en <span className="text-slate-900 font-bold">Legal Tech</span>. Automatizamos trámites complejos conectando al ciudadano con el estado mediante IA.
              </p>
            </section>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { id: 'divorcio', title: 'Divorcio Express', sub: 'Gestión 100% Remota', icon: <HeartOff size={32}/> },
                { id: 'creditos', title: 'Ley de Vivienda', sub
