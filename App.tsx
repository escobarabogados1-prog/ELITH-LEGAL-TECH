import React, { useState } from 'react';
import { 
  Scale, ArrowLeft, TrendingDown, HeartOff, Landmark, ShieldCheck, 
  MessageCircle, Zap, Cpu, Database, Fingerprint, Activity, Search, Shield, Bot, Terminal, Users
} from 'lucide-react';

type View = 'home' | 'creditos' | 'divorcio' | 'proteccion' | 'marcas';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [step, setStep] = useState(1);
  const [datos, setDatos] = useState({ nombre: '', email: '', celular: '', ciudad: '' });
  const [chatLog, setChatLog] = useState<{role: 'bot' | 'user', text: string}[]>([
    { role: 'bot', text: "SISTEMA ELITH-IA: Protocolo de asistencia legal iniciado. Ingrese sus datos para vincularlo con un abogado especialista." }
  ]);
  const [input, setInput] = useState('');

  const procesarMensaje = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;
    const nuevoLog = [...chatLog, { role: 'user', text: input } as const];
    setChatLog(nuevoLog);
    setInput('');
    
    setTimeout(() => {
      setChatLog([...nuevoLog, { 
        role: 'bot', 
        text: "Análisis preliminar completado. El Abogado Especialista ha sido notificado para validar su trámite en Notaría/Juzgado. Haga clic en RADICAR para conectar." 
      }]);
    }, 1000);
  };

  const enviarExpediente = () => {
    const texto = `*RADICACIÓN ELITH LEX*\n*Servicio:* ${view.toUpperCase()}\n*Cliente:* ${datos.nombre}\n*Email:* ${datos.email}\n*Ciudad:* ${datos.ciudad}\n*Consulta:* ${chatLog[chatLog.length - 1].text}`;
    window.open(`https://wa.me/573167824217?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans text-slate-900 overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => {setView('home'); setStep(1);}}>
            <div className="bg-slate-900 p-2 rounded-lg"><Cpu className="text-emerald-400" size={20} /></div>
            <div className="text-left leading-none">
              <p className="font-black text-lg tracking-tighter uppercase leading-none">Elith Lex</p>
              <p className="text-[7px] font-bold text-emerald-600 tracking-widest uppercase italic">Especialistas & IA</p>
            </div>
          </div>
          {view !== 'home' && (
            <button onClick={() => {setView('home'); setStep(1);}} className="bg-slate-900 text-white px-4 py-2 rounded-full text-[10px] font-black flex items-center gap-2 hover:bg-emerald-600 transition-all">
              <ArrowLeft size={14}/> VOLVER AL DASHBOARD
            </button>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 md:p-12">
        {view === 'home' ? (
          <div className="space-y-32 animate-in fade-in duration-700">
            {/* HERO */}
            <section className="text-center space-y-8 py-10">
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full border border-slate-200 text-[9px] font-black text-slate-600 uppercase tracking-[0.2em]">
                <Zap size={14} className="text-emerald-500 animate-pulse"/> Abogados Especialistas + Inteligencia Artificial Legal
              </div>
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85]">
                El Derecho,<br/><span className="text-emerald-500 italic">Redefinido.</span>
              </h1>
              <p className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
                Experticia jurídica humana potenciada por **IA** para resultados reales en Notarías y Juzgados.
              </p>
            </section>

            {/* QUIÉNES SOMOS */}
            <section className="bg-slate-900 text-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-left">
                  <div className="inline-flex items-center gap-2 text-emerald-400 font-black text-[10px] tracking-[0.3em] uppercase">
                    <Users size={16}/> ¿QUIÉNES SOMOS?
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Empresa Legal <span className="italic text-emerald-400">Digital</span></h2>
                  <p className="text-slate-400 font-light leading-relaxed text-lg">
                    Somos una empresa legal digital integrada por abogados especialistas en Derecho Civil, Familia y Comercial, que entiende que el mundo jurídico ya no puede avanzar al ritmo del pasado.
                  </p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-slate-700 space-y-4 text-left">
                  <p className="text-sm leading-relaxed text-slate-300 italic">
                    "Combinamos experiencia jurídica real con tecnología legal e Inteligencia Artificial, para ofrecer soluciones más rápidas, eficientes y estratégicas, sin sacrificar el rigor legal y la seguridad jurídica."
                  </p>
                  <p className="text-sm leading-relaxed text-slate-300">
                    Atendemos personas, familias y empresas que buscan procesos transparentes y resultados reales, desde cualquier lugar del mundo.
                  </p>
                  <div className="grid grid-cols-1 gap-2 pt-4">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-400">📌 Tecnología al servicio del Derecho</div>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-400">📌 Especialistas en lo que hacemos</div>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-400">📌 Soluciones legales pensadas para hoy</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                <Scale size={400} />
              </div>
            </section>

            {/* GRILLA DE SERVICIOS */}
            <div className="space-y-12">
              <h3 className="text-center font-black text-2xl tracking-tighter uppercase italic">Nuestras Líneas de Especialidad</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                {[
                  { id: 'divorcio', title: 'DIVORCIO EXPRESS', sub: 'Rápido. Económico.', icon: <HeartOff size={30}/> },
                  { id: 'creditos', title: 'REDUCCIÓN CRÉDITO', sub: 'Ahorro $20M+', icon: <TrendingDown size={30}/> },
                  { id: 'proteccion', title: 'FIDEICOMISO CIVIL', sub: 'Blindaje Patrimonial', icon: <Landmark size={30}/> },
                  { id: 'marcas', title: 'MARCAS Y PATENTES', sub: 'Propiedad Intelectual', icon: <ShieldCheck size={30}/> }
                ].map((m) => (
                  <div key={m.id} onClick={() => setView(m.id as View)} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:border-emerald-500 hover:shadow-2xl transition-all cursor-pointer group">
                    <div className="mb-6 flex justify-center text-slate-400 group-hover:text-emerald-500 transition-colors">{m.icon}</div>
                    <h3 className="font-black text-lg tracking-tight uppercase leading-none">{m.title}</h3>
                    <p className="text-[9px] font-bold text-emerald-600 uppercase mt-2 tracking-widest italic">{m.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12 items-start animate-in slide-in-from-bottom-5">
            {/* TEXTOS DINÁMICOS POR SERVICIO */}
            <div className="space-y-8 text-left">
              {view === 'divorcio' && (
                <div className="space-y-6">
                  <h2 className="text-6xl font-black tracking-tighter uppercase leading-none">DIVORCIO <br/><span className="text-emerald-500 italic uppercase">EXPRESS</span></h2>
                  <p className="text-xl font-bold text-slate-800 uppercase tracking-wide">Rápido. Económico. Desde cualquier lugar del mundo.</p>
                  <div className="space-y-4 text-slate-600 font-light text-lg">
                    <p>Divórciate sin desgaste emocional ni trámites eternos.</p>
                    <p className="bg-emerald-50 p-4 border-l-4 border-emerald-500 font-medium">Nuestro Divorcio Express con **IA legal** te permite resolver tu proceso en tiempo récord, de forma 100% digital, segura y accesible.</p>
                    <ul className="space-y-2 text-sm font-bold text-slate-800 uppercase">
                      <li className="flex items-center gap-2">📍 No importa dónde estés.</li>
                      <li className="flex items-center gap-2">⏱️ Menos tiempo. Menos costo.</li>
                      <li className="flex items-center gap-2">👉 Empieza hoy. Tu vida no puede esperar.</li>
                    </ul>
                  </div>
                </div>
              )}

              {view === 'creditos' && (
                <div className="space-y-6">
                  <h2 className="text-6xl font-black tracking-tighter uppercase leading-none">REDUCCIÓN DE <br/><span className="text-emerald-500 italic uppercase">CRÉDITO</span></h2>
                  <p className="text-xl font-bold text-slate-800 uppercase tracking-wide">Hipotecario y Leasing Habitacional</p>
                  <div className="space-y-4 text-slate-600 font-light text-lg">
                    <p>¿Sabías que puedes ahorrar millones de pesos en tu crédito?</p>
                    <p className="bg-emerald-50 p-4 border-l-4 border-emerald-500 font-medium italic">Con la Ley de Vivienda (Ley 546 de 1999) puedes reducir tu cuota mensual desde **$80.000** y disminuir intereses que el banco no te explica.</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white border rounded-xl font-bold text-xs uppercase">💰 Menos intereses</div>
                      <div className="p-4 bg-white border rounded-xl font-bold text-xs uppercase">📉 Cuotas más bajas</div>
                    </div>
                    <p className="text-sm font-black text-slate-900 uppercase">👉 Paga menos por la misma casa.</p>
                  </div>
                </div>
              )}

              {view === 'proteccion' && (
                <div className="space-y-6">
                  <h2 className="text-6xl font-black tracking-tighter uppercase leading-none">FIDEICOMISO <br/><span className="text-emerald-500 italic uppercase">CIVIL</span></h2>
                  <p className="text-xl font-bold text-slate-800 uppercase tracking-wide">Protege hoy lo que más amas.</p>
                  <div className="space-y-4 text-slate-600 font-light text-lg">
                    <p>Blindar tu patrimonio es un acto de amor.</p>
                    <p className="bg-emerald-50 p-4 border-l-4 border-emerald-500 font-medium italic">Proteges tus bienes para ti y para tus hijos, evitando conflictos familiares, embargos y procesos judiciales innecesarios.</p>
                    <ul className="space-y-2 text-sm font-black text-slate-900 uppercase">
                      <li className="flex items-center gap-2">🔐 Seguridad jurídica</li>
                      <li className="flex items-center gap-2">👨‍👩‍👧 Protección familiar</li>
                      <li className="flex items-center gap-2">📜 Planeación patrimonial inteligente</li>
                    </ul>
                    <p className="text-emerald-600 font-black">👉 Tu patrimonio, bajo control. Siempre.</p>
                  </div>
                </div>
              )}

              {view === 'marcas' && (
                <div className="space-y-6">
                  <h2 className="text-6xl font-black tracking-tighter uppercase leading-none">MARCAS Y <br/><span className="text-emerald-500 italic uppercase">PATENTES</span></h2>
                  <p className="text-xl font-bold text-slate-800 uppercase tracking-wide">Protege tu idea. Defiende tu futuro.</p>
                  <div className="space-y-4 text-slate-600 font-light text-lg">
                    <p>Has trabajado años para construir tu empresa o estás a punto de crearla. No arriesgues tu marca.</p>
                    <p className="bg-emerald-50 p-4 border-l-4 border-emerald-500 font-medium italic">Protegemos marcas en Colombia y el mundo, con asesoría legal y tecnología IA que acelera y asegura el proceso.</p>
                    <p className="text-red-500 font-black uppercase text-xs">👉 Si no registras tu marca, alguien más puede hacerlo.</p>
                  </div>
                </div>
              )}
            </div>

            {/* TERMINAL IA */}
            <div className="bg-[#0f172a] rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-700">
              <div className="bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center text-[9px] font-mono text-slate-400">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
                <span className="uppercase tracking-widest flex items-center gap-2">CORE_LEGAL_PROCESSOR_v2</span>
              </div>

              {step === 1 ? (
                <div className="p-8 space-y-4 text-left">
                  <p className="text-emerald-500 font-mono text-[10px] mb-4 tracking-tighter italic">{'>'} INGRESE DATOS PARA EXPEDIENTE DIGITAL...</p>
                  <input required placeholder="NOMBRE COMPLETO" className="w-full bg-slate-900 border border-slate-700 p-4 rounded-xl text-emerald-400 text-xs font-mono outline-none" onChange={e => setDatos({...datos, nombre: e.target.value})} />
                  <input required placeholder="WHATSAPP" className="w-full bg-slate-900 border border-slate-700 p-4 rounded-xl text-emerald-400 text-xs font-mono outline-none" onChange={e => setDatos({...datos, celular: e.target.value})} />
                  <input required placeholder="CIUDAD" className="w-full bg-slate-900 border border-slate-700 p-4 rounded-xl text-emerald-400 text-xs font-mono outline-none" onChange={e => setDatos({...datos, ciudad: e.target.value})} />
                  <button onClick={() => setStep(2)} className="w-full bg-emerald-600 text-white font-black py-4 rounded-xl text-xs tracking-widest uppercase hover:bg-emerald-500 transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">Sincronizar Datos</button>
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
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Breve descripción de su necesidad..." className="flex-1 bg-transparent text-emerald-400 text-xs outline-none" />
                    <button type="button" onClick={enviarExpediente} className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase flex items-center gap-2">
                      <MessageCircle size={14}/> RADICAR
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white py-24 border-t border-slate-200 text-center mt-32">
        <div className="flex justify-center items-center gap-3 mb-4">
          <Scale className="text-emerald-500" size={24} />
          <span className="font-black text-2xl italic tracking-tighter uppercase leading-none">Elith Lex Group</span>
        </div>
        <p className="text-slate-400 text-[8px] font-bold tracking-[0.5em] uppercase px-6">Expertos Jurídicos + Inteligencia Artificial · Colombia 2025</p>
      </footer>
    </div>
  );
}
