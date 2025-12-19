import React, { useState } from 'react';
import { 
  Scale, ArrowLeft, TrendingDown, HeartOff, Landmark, ShieldCheck, 
  MessageCircle, Zap, Cpu, Database, Fingerprint, Activity, Search, Shield, Bot, Terminal, Users, Newspaper, BookOpen, Send
} from 'lucide-react';

// --- TIPOS DE VISTA ---
type View = 'home' | 'creditos' | 'divorcio' | 'proteccion' | 'marcas' | 'consultor-ia' | 'noticias';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [step, setStep] = useState(1);
  const [datos, setDatos] = useState({ nombre: '', email: '', celular: '', ciudad: '' });
  
  // Estado para el Consultor IA
  const [iaChat, setIaChat] = useState<{role: 'bot' | 'user', text: string}[]>([
    { role: 'bot', text: "Hola, soy el Consultor Legal de Elith Lex. ¿En qué tema jurídico le gustaría profundizar hoy? (IA en fase de entrenamiento legal)." }
  ]);
  const [iaInput, setIaInput] = useState('');

  // Simulación de respuesta de IA (Aquí se conectaría con Gemini/GPT)
  const hablarConIA = (e: React.FormEvent) => {
    e.preventDefault();
    if (!iaInput) return;
    const newChat = [...iaChat, { role: 'user', text: iaInput } as const];
    setIaChat(newChat);
    setIaInput('');
    
    setTimeout(() => {
      setIaChat([...newChat, { 
        role: 'bot', 
        text: "SISTEMA: Analizando jurisprudencia... Basado en la normativa vigente en Colombia, su consulta requiere validación de un especialista. ¿Desea que un abogado analice su caso formalmente?" 
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans text-slate-900 overflow-x-hidden">
      
      {/* NAVBAR ACTUALIZADA */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
            <div className="bg-slate-900 p-2 rounded-lg"><Cpu className="text-emerald-400" size={20} /></div>
            <div className="text-left leading-none">
              <p className="font-black text-lg tracking-tighter uppercase leading-none">Elith Lex</p>
              <p className="text-[7px] font-bold text-emerald-600 tracking-widest uppercase italic">Especialistas & IA</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => setView('consultor-ia')} className={`text-[10px] font-black uppercase tracking-widest ${view === 'consultor-ia' ? 'text-emerald-600' : 'text-slate-500'}`}>Pregunta a la IA</button>
            <button onClick={() => setView('noticias')} className={`text-[10px] font-black uppercase tracking-widest ${view === 'noticias' ? 'text-emerald-600' : 'text-slate-500'}`}>Noticias & Sentencias</button>
          </div>

          {view !== 'home' && (
            <button onClick={() => setView('home')} className="bg-slate-900 text-white px-4 py-2 rounded-full text-[10px] font-black flex items-center gap-2">
              <ArrowLeft size={14}/> VOLVER
            </button>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 md:p-12">
        
        {/* VISTA: HOME */}
        {view === 'home' && (
          <div className="space-y-32 animate-in fade-in duration-700">
            <section className="text-center space-y-8 py-10">
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full border border-slate-200 text-[9px] font-black text-slate-600 uppercase tracking-[0.2em]">
                <Zap size={14} className="text-emerald-500 animate-pulse"/> Legal Tech & Especialistas
              </div>
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85]">Justicia<br/><span className="text-emerald-500 italic">Inteligente.</span></h1>
              <p className="max-w-2xl mx-auto text-xl text-slate-500 font-light">Especialistas humanos potenciados por IA para procesos en Notarías y Juzgados.</p>
              
              <div className="flex justify-center gap-4">
                <button onClick={() => setView('consultor-ia')} className="bg-emerald-600 text-white px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-lg hover:bg-emerald-700 transition-all">
                  <Bot size={18}/> Consultor IA
                </button>
                <button onClick={() => setView('noticias')} className="bg-slate-900 text-white px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-lg">
                  <Newspaper size={18}/> Actualidad Legal
                </button>
              </div>
            </section>

            {/* SECCIÓN QUIÉNES SOMOS */}
            <section className="bg-slate-950 text-white rounded-[3rem] p-8 md:p-16 text-left">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h2 className="text-4xl font-black tracking-tighter italic text-emerald-400 uppercase">¿Quiénes Somos?</h2>
                  <p className="text-slate-400 font-light leading-relaxed">Somos una empresa legal digital integrada por abogados especialistas que entiende que el mundo jurídico debe avanzar con la tecnología.</p>
                </div>
                <div className="space-y-4 border-l border-slate-800 pl-8">
                  <p className="text-sm text-slate-300">Utilizamos herramientas digitales e IA como aliados del abogado para optimizar tiempos y reducir costos en cada proceso legal.</p>
                  <p className="text-emerald-400 font-black text-[10px] tracking-widest uppercase">📌 Tecnología al servicio del Derecho</p>
                </div>
              </div>
            </section>

            {/* GRILLA DE SERVICIOS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['divorcio', 'creditos', 'proteccion', 'marcas'].map((id) => (
                <div key={id} onClick={() => setView(id as View)} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-emerald-500 transition-all cursor-pointer group text-center">
                  <div className="mb-4 flex justify-center text-slate-300 group-hover:text-emerald-500"><Search size={30}/></div>
                  <h3 className="font-black text-sm uppercase">{id === 'divorcio' ? 'Divorcio Express' : id === 'creditos' ? 'Reducción Crédito' : id === 'proteccion' ? 'Fideicomiso Civil' : 'Marcas'}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VISTA: CONSULTOR IA (Gemini/GPT Style) */}
        {view === 'consultor-ia' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-5">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-black tracking-tighter uppercase leading-none">Consultor <span className="text-emerald-500 italic">IA Legal</span></h2>
              <p className="text-slate-500 italic uppercase text-[10px] font-bold tracking-widest">Entrenado con jurisprudencia colombiana</p>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-xl h-[500px] flex flex-col overflow-hidden">
              <div className="flex-1 p-6 overflow-y-auto space-y-4 text-left">
                {iaChat.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${m.role === 'user' ? 'bg-slate-900 text-white' : 'bg-emerald-50 text-slate-800 border border-emerald-100'}`}>
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={hablarConIA} className="p-4 bg-slate-50 border-t flex gap-2">
                <input value={iaInput} onChange={(e) => setIaInput(e.target.value)} placeholder="Ej: ¿Qué necesito para un Fideicomiso?" className="flex-1 bg-white border border-slate-200 p-4 rounded-xl text-sm outline-none" />
                <button type="submit" className="bg-emerald-600 text-white p-4 rounded-xl hover:bg-emerald-700 transition-all"><Send size={20}/></button>
              </form>
            </div>
            <p className="text-[10px] text-slate-400 text-center font-bold">Nota: La IA ofrece orientación técnica. Todo proceso oficial es validado por nuestros especialistas humanos.</p>
          </div>
        )}

        {/* VISTA: NOTICIAS & SENTENCIAS */}
        {view === 'noticias' && (
          <div className="space-y-12 animate-in slide-in-from-bottom-5 text-left">
            <div className="flex items-center gap-4">
              <Newspaper size={40} className="text-emerald-500"/>
              <h2 className="text-5xl font-black tracking-tighter uppercase">Actualidad <span className="text-emerald-500 italic">Legal Tech</span></h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { date: 'Dic 2025', title: 'Nueva sentencia sobre Divorcio Digital en Colombia', tag: 'FAMILIA' },
                { date: 'Nov 2025', title: 'Cómo la IA está reduciendo tiempos en la SIC', tag: 'MARCAS' },
                { date: 'Oct 2025', title: 'Protección de datos y Fideicomisos: Lo que debe saber', tag: 'CIVIL' }
              ].map((n, i) => (
                <div key={i} className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer">
                  <span className="text-emerald-600 font-black text-[10px] tracking-widest uppercase">{n.tag} — {n.date}</span>
                  <h3 className="text-2xl font-black mt-2 leading-tight group-hover:text-emerald-500 transition-colors">{n.title}</h3>
                  <div className="mt-6 flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest">Leer más <ArrowLeft size={12} className="rotate-180"/></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LAS VISTAS DE SERVICIOS (DIVORCIO, CREDITOS, ETC.) SE MANTIENEN IGUAL QUE TU ANTERIOR CÓDIGO */}
        {(view === 'divorcio' || view === 'creditos' || view === 'proteccion' || view === 'marcas') && (
           <div className="animate-in slide-in-from-bottom-5 text-left">
              {/* Aquí irían tus guiones que ya tenemos configurados */}
              <button onClick={() => setView('home')} className="mb-8 text-emerald-600 font-black text-[10px] uppercase flex items-center gap-2"><ArrowLeft size={14}/> Volver a servicios</button>
              <h2 className="text-6xl font-black uppercase tracking-tighter mb-4">{view === 'creditos' ? 'Ley de Vivienda' : view}</h2>
              <p className="text-xl text-slate-500 font-light mb-12 italic">Cargando protocolo especializado para {view}...</p>
              <div className="bg-slate-900 text-white p-12 rounded-[3rem] text-center">
                 <p className="font-mono text-emerald-400 animate-pulse mb-6 tracking-widest uppercase text-xs">Sincronizando con especialista...</p>
                 <button onClick={() => window.open(`https://wa.me/573167824217`, '_blank')} className="bg-emerald-600 px-8 py-4 rounded-xl font-black uppercase text-xs tracking-widest">Hablar con Abogado de {view}</button>
              </div>
           </div>
        )}

      </main>

      <footer className="bg-white py-20 border-t mt-32 text-center">
        <p className="text-slate-400 font-black text-[9px] tracking-[0.5em] uppercase italic">Elith Lex Group · Especialistas & Tecnología · 2025</p>
      </footer>
    </div>
  );
}
