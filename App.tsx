import React, { useState, useEffect } from 'react';
import { 
  Scale, ArrowLeft, TrendingDown, HeartOff, Landmark, ShieldCheck, 
  ChevronRight, MessageCircle, User, Mail, Phone, MapPin, 
  CheckCircle2, Award, Shield, Briefcase, Zap, Globe, Users, Bot, FileText, Cpu, Search, 
  Database, Network, Fingerprint, Activity
} from 'lucide-react';

type View = 'home' | 'creditos' | 'divorcio' | 'proteccion' | 'marcas';

// --- COMPONENTE: SISTEMA ELITH-CORE (IA INTERFACE) ---
const ElithCoreTerminal = ({ unidad }: { unidad: View }) => {
  const [step, setStep] = useState(1);
  const [datos, setDatos] = useState({ nombre: '', email: '', celular: '', ciudad: '' });
  const [isProcessing, setIsProcessing] = useState(false);
  const [chatLog, setChatLog] = useState<{role: 'system' | 'user', text: string}[]>([
    { role: 'system', text: `ELITH_CORE: Módulo ${unidad.toUpperCase()} vinculado. Esperando entrada de datos para cruce con bases de datos estatales...` }
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
      const respuesta = "SISTEMA: Análisis de viabilidad completado al 94%. Los datos han sido encriptados y están listos para la validación de un Abogado Senior especializado en Tecnología Legal.";
      setChatLog([...newLog, { role: 'system', text: respuesta }]);
    }, 2000);
  };

  const conectarWhatsApp = () => {
    const texto = `*RADICACIÓN APP ELITH LEX*\n*Módulo:* ${unidad.toUpperCase()}\n*Usuario:* ${datos.nombre}\n*Email:* ${datos.email}\n*ID Localización:* ${datos.ciudad}\n*Consulta:* ${chatLog[1]?.text || 'Diagnóstico automático por IA'}`;
    window.open(`https://wa.me/573167824217?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <div className="bg-[#020617] rounded-[2rem] shadow-2xl border border-emerald-500/20 overflow-hidden sticky top-24 font-mono">
      <div className="bg-slate-900 p-4 flex items-center justify-between border-b border-emerald-500/10">
        <div className="flex items-center gap-2">
          <Activity size={14} className="text-emerald-500 animate-pulse" />
          <span className="text-[10px] text-emerald-500/70 font-bold tracking-widest uppercase">Elith_Core_System_v2.5</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-slate-700"></div>
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
        </div>
      </div>

      {step === 1 ? (
        <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="p-8 space-y-4">
          <h5 className="text-white text-xs font-bold mb-4 flex items-center gap-2">
            <Fingerprint size={16} className="text-emerald-500"/> AUTENTICACIÓN_USUARIO
          </h5>
          <input required placeholder="IDENTIFICACIÓN_NOMBRE" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-emerald-400 text-[11px] outline-none focus:border-emerald-500 transition-all" onChange={e => setDatos({...datos, nombre: e.target.value})} />
          <input required type="email" placeholder="EMAIL_ENLACE" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-emerald-400 text-[11px] outline-none focus:border-emerald-500" onChange={e => setDatos({...datos, email: e.target.value})} />
          <input required type="tel" placeholder="MOBILE_WHATSAPP" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-emerald-400 text-[11px] outline-none focus:border-emerald-500" onChange={e => setDatos({...datos, celular: e.target.value})} />
          <input required placeholder="CIUDAD_PAÍS" className="w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-emerald-400 text-[11px] outline-none focus:border-emerald-500" onChange={e => setDatos({...datos, ciudad: e.target.value})} />
          <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 rounded-xl text-[10px] tracking-[0.3em] transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] uppercase">Sincronizar Datos</button>
        </form>
      ) : (
        <div className="flex flex-col h-[480px]">
          <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-[#010409] text-[10px]">
            {chatLog.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'system' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[90%] p-3 rounded-lg ${m.role === 'system' ? 'text-emerald-400 leading-relaxed' : 'bg-emerald-900/20 text-white border border-emerald-500/30'}`}>
                  {m.role === 'system' && <span className="text-emerald-500 mr-2 font-black">{'>'}</span>}
                  {m.text}
                </div>
              </div>
            ))}
            {isProcessing && <div className="text-emerald-500 animate-pulse font-bold italic tracking-tighter mt-2">LINKING_BASE_DE_DATOS_ESTATAL...</div>}
          </div>
          <div className="p-4 bg-slate-950 border-t border-slate-800 space-y-3">
            <form onSubmit={handleProcessing} className="flex gap-2">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Describa su requerimiento..." className="flex-1 bg-[#010409] border border-slate-800 p-3 rounded-xl text-[11px] text-white outline-none" />
              <button type="submit" className="bg-emerald-600 p-3 rounded-xl text-white hover:bg-emerald-500"><Zap size={16}/></button>
            </form>
            <button onClick={conectarWhatsApp} className="w-full bg-white text-slate-950 font-black py-3 rounded-xl flex items-center justify-center gap-2 text-[10px] tracking-[0.2em] uppercase hover:bg-emerald-400 transition-all">
               <MessageCircle size={16}/> Hablar con Experto Legal
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
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 selection:bg-emerald-100">
      {/* NAVBAR APP STYLE */}
      <nav className="bg-white/70 backdrop-blur-xl border-b border-slate-100 p-5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setView('home')}>
            <div className="bg-slate-900 p-2 rounded-xl group-hover:scale-110 transition-transform"><Database className="text-emerald-400" size={24} /></div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter leading-none">ELITH LEX</span>
              <span className="text-[8px] font-black tracking-[0.3em] text-emerald-600">APP_LEGAL_TECH</span>
            </div>
          </div>
          {view !== 'home' && (
            <button onClick={() => setView('home')} className="bg-slate-900 text-white px-5 py-2 rounded-full text-[9px] font-black tracking-widest shadow-lg flex items-center gap-2">
              <ArrowLeft size={12}/> VOLVER_AL_NODO
            </button>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 md:p-12">
        {view === 'home' ? (
          <div className="space-y-32 animate-in fade-in duration-1000">
            {/* HERO STARTUP */}
            <section className="text-center space-y-12 py-16">
              <div className="inline-flex items-center gap-2 bg-emerald-50 px-5 py-2 rounded-full border border-emerald-100">
                <Network size={14} className="text-emerald-600 animate-pulse"/>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700">Rama Judicial & Registraduría Link Activo</span>
              </div>
              
              <h1 className="text-7xl md:text-[11rem] font-black tracking-tighter leading-[0.7] text-slate-900">
                Legal<span className="text-emerald-500 italic opacity-80">Sync.</span>
              </h1>
              
              <p className="max-w-3xl mx-auto text-2xl text-slate-500 font-light leading-relaxed">
                La primera plataforma legal que integra <span className="text-slate-900 font-bold underline decoration-emerald-500 underline-offset-8">IA & Conectividad Gubernamental</span> para automatizar la justicia en Colombia.
              </p>
            </section>

            {/* MODULOS DE SERVICIO */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { id: 'divorcio', title: 'Divorcio Express', sub: 'Módulo Digital', icon: <HeartOff size={28}/> },
                { id: 'creditos', title: 'Ley de Vivienda', sub: 'Algoritmo Ahorro', icon: <TrendingDown size={28}/> },
                { id: 'proteccion', title: 'Patrimonio', sub: 'Protocolo Blindaje', icon: <Landmark size={28}/> },
                { id: 'marcas', title: 'Marcas / SIC', sub: 'Registro IP', icon: <ShieldCheck size={28}/> }
              ].map(u => (
                <div key={u.id} onClick={() => setView(u.id as View)} className="group bg-white p-10 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.02)] border border-slate-100 hover:border-emerald-500/40 hover:-translate-y-3 transition-all cursor-pointer relative overflow-hidden">
                  <div className="text-slate-900 mb-8 group-hover:text-emerald-500 transition-colors relative z-10">{u.icon}</div>
                  <h3 className="font-black text-xl mb-1 tracking-tight relative z-10">{u.title}</h3>
                  <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest relative z-10">{u.sub}</p>
                  <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    {u.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-20 items-start animate-in fade-in slide-in-from-bottom-10 duration-700">
            {/* CONTENIDO TÉCNICO ESTATAL */}
            <div className="space-y-12">
              {view === 'divorcio' && (
                <div className="space-y-8 text-left">
                  <div className="bg-slate-900 text-white px-5 py-2 rounded-lg font-black text-[10px] tracking-widest inline-flex items-center gap-3">
                    <Database size={14} className="text-emerald-500"/> CONEXIÓN REGISTRADURÍA NACIONAL
                  </div>
                  <h2 className="text-8xl font-black tracking-tighter leading-none">Divorcio <br/><span className="text-emerald-500 italic">Centralizado</span></h2>
                  <p className="text-xl text-slate-500 font-light leading-relaxed">
                    Nuestra plataforma facilita la gestión de documentos directamente con las notarías y la Registraduría. 
                    <span className="block mt-4 font-bold text-slate-900 italic">Solo envíe digitalmente sus Registros Civiles y Cédulas; nosotros sincronizamos el proceso.</span>
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                      <p className="text-[10px] font-black text-emerald-600 uppercase mb-2">Protocolo</p>
                      <p className="text-xs text-slate-500 font-medium">Mutuo Acuerdo & Contencioso Internacional.</p>
                    </div>
                    <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                      <p className="text-[10px] font-black text-emerald-600 uppercase mb-2">Alcance</p>
                      <p className="text-xs text-slate-500 font-medium">100% Remoto desde cualquier país.</p>
                    </div>
                  </div>
                </div>
              )}

              {view === 'creditos' && (
                <div className="space-y-8">
                   <div className="bg-slate-900 text-white px-5 py-2 rounded-lg font-black text-[10px] tracking-widest inline-flex items-center gap-3 uppercase">
                    <Zap size={14} className="text-emerald-500"/> Motor de Optimización Ley 546
                  </div>
                  <h2 className="text-8xl font-black tracking-tighter leading-none">Ahorro <br/><span className="text-emerald-500 italic">$20M+</span></h2>
                  <p className="text-xl text-slate-500 font-light italic leading-relaxed italic">"Mediante un ajuste técnico de <span className="text-slate-900 font-bold">$80.000 COP</span> en su cuota, nuestra IA recalifica su crédito para ahorrar años de intereses."</p>
                </div>
              )}

              {view === 'proteccion' && (
                <div className="space-y-8">
                  <div className="bg-slate-900 text-white px-5 py-2 rounded-lg font-black text-[10px] tracking-widest inline-flex items-center gap-3 uppercase">
                    <Shield size={14} className="text-emerald-500"/> Blindaje de Activos v3.0
                  </div>
                  <h2 className="text-8xl font-black tracking-tighter leading-none">Blindaje <br/><span className="text-emerald-500 italic">Patrimonial</span></h2>
                  <p className="text-xl text-slate-500 font-light">Implementación de Fideicomisos Civiles inembargables mediante protocolos de seguridad jurídica avanzada.</p>
                </div>
              )}

              {view === 'marcas' && (
                <div className="space-y-8">
                  <div className="bg-slate-900 text-white px-5 py-2 rounded-lg font-black text-[10px] tracking-widest inline-flex items-center gap-3 uppercase">
                    <Search size={14} className="text-emerald-500"/> Sincronización SIC
                  </div>
                  <h2 className="text-8xl font-black tracking-tighter leading-none">Registro <br/><span className="text-emerald-500 italic">Intelectual</span></h2>
                  <p className="text-xl text-slate-500 font-light italic italic">Protección automática de identidad comercial ante la Superintendencia de Industria y Comercio.</p>
                </div>
              )}
            </div>
            
            <ElithCoreTerminal unidad={view} />
          </div>
        )}
      </section>

      <footer className="bg-slate-950 py-32 text-center mt-32 border-t border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 items-center gap-12">
          <div className="text-left space-y-4">
             <div className="flex items-center gap-3">
              <Database className="text-emerald-500" size={24} />
              <span className="text-white font-black text-2xl tracking-tighter italic">ELITH LEX</span>
            </div>
            <p className="text-slate-500 text-[10px] leading-relaxed max-w-xs uppercase font-bold tracking-widest italic opacity-50">Sincronizando el derecho con la era digital. Conectividad directa con la Rama Judicial de Colombia.</p>
          </div>
          <div className="flex justify-center gap-8">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
          </div>
          <div className="text-right">
            <p className="text-emerald-500 font-black text-[10px] tracking-[0.4em] uppercase">Tech Status: Operational</p>
            <p className="text-slate-600 text-[10px] mt-2 italic font-bold uppercase">© 2025 Elith Lex Group · Startup Legal</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
