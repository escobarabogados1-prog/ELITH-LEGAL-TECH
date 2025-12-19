import React, { useState } from 'react';
import { 
  Scale, ArrowLeft, TrendingDown, HeartOff, Landmark, ShieldCheck, 
  MessageCircle, Zap, Cpu, Database, Fingerprint, Activity, Search, Shield, Bot, Terminal, Users, Newspaper, Send, Upload, CreditCard, CheckCircle, Globe, Award, FileText
} from 'lucide-react';

// --- CONFIGURACIÓN ---
const API_KEY = "PEGA_AQUI_TU_API_KEY_DE_GOOGLE"; 

type View = 'home' | 'creditos' | 'divorcio' | 'proteccion' | 'marcas' | 'consultor-ia' | 'noticias' | 'pago' | 'carga-docs';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [iaChat, setIaChat] = useState<{role: 'bot' | 'user', text: string}[]>([
    { role: 'bot', text: "Bienvenido a Elith Lex. ¿Qué negocio jurídico desea concretar hoy?" }
  ]);
  const [iaInput, setIaInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // --- LÓGICA DE IA ---
  const hablarConGemini = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!iaInput) return;
    const nuevoChat = [...iaChat, { role: 'user', text: iaInput } as const];
    setIaChat(nuevoChat);
    setIaInput('');
    setIsTyping(true);

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `Eres el experto legal de Elith Lex en Colombia. Tu meta es asesorar y CERRAR EL NEGOCIO. Responde dudas y siempre indica que para iniciar deben ir a PAGAR y CARGAR DOCUMENTOS. Pregunta: ${iaInput}` }] }]
        })
      });
      const data = await response.json();
      setIaChat([...nuevoChat, { role: 'bot', text: data.candidates[0].content.parts[0].text }]);
    } catch (error) {
      setIaChat([...nuevoChat, { role: 'bot', text: "Para concretar el negocio, por favor use el módulo de pagos o hable con un especialista." }]);
    } finally { setIsTyping(false); }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">
      
      {/* NAVBAR */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 p-4 sticky top-0 z-50 font-black">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
            <div className="bg-slate-900 p-2 rounded-lg text-emerald-400"><Cpu size={20} /></div>
            <span className="tracking-tighter uppercase italic">ELITH LEX GROUP</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[10px] uppercase tracking-widest">
            <button onClick={() => setView('consultor-ia')} className="hover:text-emerald-600 transition-colors">Consultor IA</button>
            <button onClick={() => setView('pago')} className="bg-emerald-600 text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-lg"><CreditCard size={14}/> PAGAR</button>
          </div>
          {view !== 'home' && (
            <button onClick={() => setView('home')} className="text-slate-900 px-4 py-2 rounded-full text-[10px] border border-slate-200 flex items-center gap-2"><ArrowLeft size={14}/> VOLVER</button>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 md:p-12">
        
        {/* VISTA: HOME */}
        {view === 'home' && (
          <div className="space-y-24 animate-in fade-in duration-700">
            {/* HERO */}
            <section className="text-center space-y-8">
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none italic">EL DERECHO <br/><span className="text-emerald-500">DIGITAL.</span></h1>
              <p className="max-w-2xl mx-auto text-xl text-slate-500 font-light italic">Abogados especialistas potenciados por Inteligencia Artificial.</p>
              <div className="flex justify-center gap-4">
                <button onClick={() => setView('pago')} className="bg-emerald-600 text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl">Concretar Negocio</button>
              </div>
            </section>

            {/* QUIÉNES SOMOS */}
            <section className="bg-slate-900 text-white rounded-[3rem] p-12 text-left grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-black italic text-emerald-400 uppercase tracking-tighter">¿Quiénes Somos?</h2>
                <p className="text-slate-300 font-light leading-relaxed">Somos una empresa legal digital integrada por abogados especialistas que combina experiencia jurídica real con tecnología **Legal Tech e Inteligencia Artificial** para soluciones rápidas y estratégicas.</p>
              </div>
              <div className="space-y-4 border-l border-slate-700 pl-8 text-[11px] font-black uppercase text-emerald-400 tracking-widest">
                <p>📌 Tecnología al servicio del Derecho</p>
                <p>📌 Especialistas en lo que hacemos</p>
                <p>📌 Soluciones legales pensadas para hoy</p>
              </div>
            </section>

            {/* GRILLA DE SERVICIOS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { id: 'divorcio', title: 'DIVORCIO EXPRESS', sub: 'Rápido. Económico.', icon: <HeartOff size={30}/> },
                { id: 'creditos', title: 'REDUCCIÓN CRÉDITO', sub: 'Ley de Vivienda 546', icon: <TrendingDown size={30}/> },
                { id: 'proteccion', title: 'FIDEICOMISO CIVIL', sub: 'Blindaje Patrimonial', icon: <Landmark size={30}/> },
                { id: 'marcas', title: 'MARCAS Y PATENTES', sub: 'Protección Global', icon: <ShieldCheck size={30}/> }
              ].map((m) => (
                <div key={m.id} onClick={() => setView(m.id as View)} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-emerald-500 transition-all cursor-pointer group text-center">
                  <div className="mb-6 flex justify-center text-slate-300 group-hover:text-emerald-500 transition-colors">{m.icon}</div>
                  <h3 className="font-black text-sm uppercase">{m.title}</h3>
                  <p className="text-[9px] text-emerald-600 uppercase mt-2 font-bold italic">{m.sub}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* UNIDAD DE NEGOCIO: DIVORCIO */}
        {view === 'divorcio' && (
          <div className="grid md:grid-cols-2 gap-12 text-left animate-in slide-in-from-bottom-5">
            <div className="space-y-6">
              <h2 className="text-6xl font-black uppercase tracking-tighter">DIVORCIO <span className="text-emerald-500 italic">EXPRESS</span></h2>
              <p className="text-xl font-bold uppercase text-slate-700 italic underline decoration-emerald-500 decoration-4">Rápido. Económico. Mundial.</p>
              <p className="text-lg text-slate-500 font-light italic">Divórciate sin desgaste emocional ni trámites eternos. Digital, seguro y accesible.</p>
              <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500 text-sm font-black uppercase text-emerald-800 space-y-2">
                <p>📍 No importa dónde estés</p>
                <p>⏱️ Menos tiempo. Menos costo</p>
                <p>👉 Empieza hoy. Tu vida no puede esperar.</p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl space-y-6 border border-slate-100 flex flex-col justify-center">
              <h3 className="text-2xl font-black text-center italic uppercase tracking-tighter">Concretar Proceso</h3>
              <button onClick={() => setView('pago')} className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl">Proceder al Pago</button>
              <button onClick={() => setView('carga-docs')} className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest">Cargar Documentos</button>
            </div>
          </div>
        )}

        {/* MODULO DE PAGOS - TU INFORMACIÓN REAL */}
        {view === 'pago' && (
          <div className="max-w-2xl mx-auto animate-in zoom-in duration-300 text-center space-y-8">
            <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border-2 border-emerald-500 space-y-8">
              <h2 className="text-4xl font-black uppercase italic tracking-tighter underline decoration-emerald-500 decoration-4">Pagar Trámite</h2>
              
              <div className="space-y-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Opción 1: PSE / Tarjetas</p>
                <button onClick={() => window.open("https://link-de-mercado-pago.com", "_blank")} className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3">
                  <Globe size={18}/> Mercado Pago / PSE
                </button>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Opción 2: Transferencia Directa</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-left">
                    <p className="text-[9px] font-black text-slate-400 mb-1">NEQUI / DAVIPLATA</p>
                    <p className="text-lg font-black tracking-tighter italic">313 292 2973</p>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-left">
                    <p className="text-[9px] font-black text-slate-400 mb-1">LLAVE BREVE</p>
                    <p className="text-lg font-black tracking-tighter italic">79396055</p>
                  </div>
                </div>
              </div>

              <button onClick={() => setView('carga-docs')} className="w-full bg-slate-900 text-white py-4 rounded-xl font-black uppercase text-xs tracking-widest">Ya realicé el pago, subir docs</button>
            </div>
          </div>
        )}

        {/* CARGA DE DOCUMENTOS - NOTARÍA DIGITAL */}
        {view === 'carga-docs' && (
          <div className="max-w-3xl mx-auto animate-in fade-in duration-500 space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-black italic tracking-tighter uppercase">Notaría <span className="text-emerald-500">Digital</span></h2>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest italic underline decoration-emerald-200">Radicación de Expediente Elith Lex</p>
            </div>
            
            <div className="bg-white p-12 rounded-[3.5rem] border-4 border-dashed border-emerald-100 space-y-8 text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 border-2 border-slate-100 rounded-3xl bg-slate-50 flex flex-col items-center gap-4 group hover:border-emerald-500 transition-all cursor-pointer">
                  <FileText className="text-slate-400 group-hover:text-emerald-500" size={40}/>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 italic">Documentos de Identidad</span>
                </div>
                <div className="p-8 border-2 border-slate-100 rounded-3xl bg-slate-50 flex flex-col items-center gap-4 group hover:border-emerald-500 transition-all cursor-pointer">
                  <CreditCard className="text-slate-400 group-hover:text-emerald-500" size={40}/>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 italic">Comprobante de Pago</span>
                </div>
              </div>
              <button onClick={() => alert("Expediente recibido. En 15 min recibirá confirmación por WhatsApp.")} className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-xl shadow-emerald-200">FINALIZAR RADICACIÓN</button>
            </div>
          </div>
        )}

        {/* CONSULTOR IA */}
        {view === 'consultor-ia' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-5">
            <h2 className="text-5xl font-black tracking-tighter uppercase text-center italic underline decoration-emerald-500 decoration-4">Consultor <span className="text-emerald-500">IA</span></h2>
            <div className="bg-slate-900 rounded-[3rem] h-[550px] flex flex-col overflow-hidden shadow-2xl border-4 border-slate-800">
              <div className="flex-1 p-8 overflow-y-auto space-y-6 text-left">
                {iaChat.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-5 rounded-2xl text-[13px] italic ${m.role === 'user' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-200 border border-slate-700'}`}>
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={hablarConGemini} className="p-6 bg-slate-900 border-t border-slate-800 flex gap-4">
                <input value={iaInput} onChange={(e) => setIaInput(e.target.value)} placeholder="¿Cuánto cuesta el trámite?" className="flex-1 bg-slate-800 border-none p-4 rounded-xl text-white italic outline-none" />
                <button type="submit" className="bg-emerald-600 text-white p-4 rounded-xl hover:bg-emerald-500 transition-all"><Send/></button>
              </form>
            </div>
          </div>
        )}

      </main>

      <footer className="py-20 text-center opacity-40">
        <p className="text-[8px] font-black uppercase tracking-[0.6em] italic">ELITH LEX · Bogotá - Medellín - Cali · 2025</p>
      </footer>
    </div>
  );
}
