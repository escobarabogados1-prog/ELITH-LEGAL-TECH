import React, { useState, useEffect } from 'react';
import { 
  Scale, ArrowLeft, TrendingDown, HeartOff, Landmark, ShieldCheck, 
  MessageCircle, Zap, Cpu, Database, Fingerprint, Activity, Search, Shield, Bot, Terminal
} from 'lucide-react';

type View = 'home' | 'creditos' | 'divorcio' | 'proteccion' | 'marcas';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [step, setStep] = useState(1);
  const [datos, setDatos] = useState({ nombre: '', email: '', celular: '', ciudad: '' });
  const [chatLog, setChatLog] = useState<{role: 'bot' | 'user', text: string}[]>([
    { role: 'bot', text: "SISTEMA ELITH-IA: Iniciando protocolo de asistencia legal especializada..." }
  ]);
  const [input, setInput] = useState('');

  // Simulación de interacción con IA
  const procesarMensaje = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;
    const nuevoLog = [...chatLog, { role: 'user', text: input } as const];
    setChatLog(nuevoLog);
    setInput('');
    
    setTimeout(() => {
      setChatLog([...nuevoLog, { 
        role: 'bot', 
        text: "Análisis preliminar completado. He organizado sus datos para que el Abogado Especialista valide la viabilidad técnica en Notaría/Juzgado. ¿Desea radicar?" 
      }]);
    }, 1000);
  };

  const enviarExpediente = () => {
    const texto = `*RADICACIÓN ELITH LEX - LEGAL TECH*\n*Especialidad:* ${view.toUpperCase()}\n*Cliente:* ${datos.nombre}\n*Email:* ${datos.email}\n*Ciudad:* ${datos.ciudad}\n*Status:* Datos procesados por IA. Solicitud de intervención de Abogado Especialista.`;
    window.open(`https://wa.me/573167824217?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => {setView('home'); setStep(1);}}>
            <div className="bg-slate-900 p-2 rounded-lg"><Cpu className="text-emerald-400" size={20} /></div>
            <div className="text-left leading-none">
              <p className="font-black text-lg tracking-tighter">ELITH LEX</p>
              <p className="text-[7px] font-bold text-emerald-600 tracking-widest uppercase">Especialistas & IA</p>
            </div>
          </div>
          {view !== 'home' && (
            <button onClick={() => {setView('home'); setStep(1);}} className="bg-slate-900 text-white px-4 py-2 rounded-full text-[10px] font-bold flex items-center gap-2 hover:bg-emerald-600 transition-all">
              <ArrowLeft size={14}/> VOLVER AL DASHBOARD
            </button>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 md:p-12">
        {view === 'home' ? (
          <div className="space-y-20 animate-in fade-in duration-700">
            {/* HERO */}
            <section className="text-center space-y-8 py-10">
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full border border-slate-200 text-[10px] font-black text-slate-600 uppercase tracking-widest">
                <Zap size={14} className="text-emerald-500"/> Abogados Especialistas + Inteligencia Artificial
              </div>
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none">
                Legal<span className="text-emerald-500 italic">Tech.</span>
              </h1>
              <p className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
                Experticia jurídica humana potenciada por **IA** para procesos en Notarías y Juzgados con máxima rapidez y seguridad.
              </p>
            </section>

            {/* MODULOS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { id: 'divorcio', title: 'Divorcio Express', sub: 'Especialista Notarial', icon: <HeartOff size={30}/> },
                { id: 'creditos', title: 'Ley de Vivienda', sub: 'Ingeniería Jurídica', icon: <TrendingDown size={30}/> },
                { id: 'proteccion', title: 'Patrimonio', sub: 'Blindaje Fideicomiso', icon: <Landmark size={30}/> },
                { id: 'marcas', title: 'Marcas / SIC', sub: 'Propiedad Intelectual', icon: <ShieldCheck size={30}/> }
              ].map((m) => (
                <div key={m.id} onClick={() => setView(m.id as View)} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:border-emerald-500 hover:shadow-2xl transition-all cursor-pointer group text-center">
                  <div className="mb-6 flex justify-center text-slate-400 group-hover:text-emerald-500 transition-colors">{m.icon}</div>
                  <h3 className="font-black text-xl tracking-tight">{m.title}</h3>
                  <p className="text-[9px] font-bold text-emerald-600 uppercase mt-2 tracking-widest">{m.sub}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12 items-start animate-in slide-in-from-bottom-5">
            {/* NARRATIVA DE ESPECIALISTA */}
            <div className="space-y-8 text-left">
              <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg font-bold text-xs inline-flex items-center gap-2">
                <Shield size={16}/> RESPALDO JURÍDICO ESPECIALIZADO
              </div>
              <h2 className="text-6xl font-black tracking-tighter capitalize">{view} <br/><span className="text-emerald-500 italic">Eficiente</span></h2>
              
              <div className="prose text-slate-600 text-lg font-light leading-relaxed space-y-4">
                <p>Nuestra **IA** organiza y audita su documentación en segundos, permitiendo que nuestros **Abogados Especialistas** radiquen ante Notarías y Juzgados con una celeridad sin precedentes.</p>
                <ul className="space-y-2 text-sm font-bold text-slate-800">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-500 rounded-full"/> Seguridad Jurídica validada por expertos.</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-500 rounded-full"/> Trámites directos en entes oficiales.</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-500 rounded-full"/> Tecnología al servicio del ciudadano.</li>
                </ul>
              </div>
            </div>

            {/* CHATBOT TECNOLÓGICO */}
            <div className="bg-[#0f172a] rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-700">
              <div className="bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Terminal size={12}/> Elith_Lex_Process_v1.0
                </span>
              </div>

              {step === 1 ? (
                <div className="p-8 space-y-4 text-left">
                  <p className="text-emerald-500 font-mono text-[10px] mb-4 tracking-tighter">{'>'} INGRESE DATOS PARA APERTURA DE EXPEDIENTE DIGITAL...</p>
                  <input required placeholder="NOMBRE" className="w-full bg-slate-900 border border-slate-700 p-4 rounded-xl text-emerald-400 text-xs font-mono outline-none focus:border-emerald-500" onChange={e => setDatos({...datos, nombre: e.target.value})} />
                  <input required placeholder="EMAIL" className="w-full bg-slate-900 border border-slate-700 p-4 rounded-xl text-emerald-400 text-xs font-mono outline-none focus:border-emerald-500" onChange={e => setDatos({...datos, email: e.target.value})} />
                  <input required placeholder="WHATSAPP" className="w-full bg-slate-900 border border-slate-700 p-4 rounded-xl text-emerald-400 text-xs font-mono outline-none focus:border-emerald-500" onChange={e => setDatos({...datos, celular: e.target.value})} />
                  <button onClick={() => setStep(2)} className="w-full bg-emerald-600 text-white font-black py-4 rounded-xl text-xs tracking-widest uppercase hover:bg-emerald-500 transition-all">INICIAR PROCESAMIENTO IA</button>
                </div>
              ) : (
                <div className="flex flex-col h-[400px]">
                  <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-950 font-mono text-[11px] text-left">
                    {chatLog.map((m, i) => (
                      <div key={i} className={`${m.role === 'bot' ? 'text-emerald-400' : 'text-white italic'}`}>
                        {m.role === 'bot' ? '> ' : 'USR: '}{m.text}
                      </div>
                    ))}
                  </div>
                  <form onSubmit={procesarMensaje} className="p-4 bg-slate-900 border-t border-slate-800 flex gap-2">
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Escriba su consulta técnica..." className="flex-1 bg-transparent text-emerald-400 text-xs outline-none" />
                    <button type="button" onClick={enviarExpediente} className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-[9px] font-black uppercase flex items-center gap-2">
                      <MessageCircle size={14}/> RADICAR
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white py-16 border-t border-slate-200 text-center mt-20">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Scale className="text-emerald-500" size={24} />
          <span className="font-black text-2xl italic tracking-tighter">ELITH LEX GROUP</span>
        </div>
        <p className="text-slate-400 text-[9px] font-bold tracking-[0.5em] uppercase">Tecnología al servicio del derecho · Especialistas Humanos · 2025</p>
      </footer>
    </div>
  );
}
