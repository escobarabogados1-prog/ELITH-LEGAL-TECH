import React, { useState } from 'react';
import { 
  Scale, ArrowLeft, TrendingDown, HeartOff, Landmark, ShieldCheck, 
  Zap, Cpu, Database, Fingerprint, Search, Shield, Bot, Users, Send, Upload, CreditCard, CheckCircle, Globe, Award, FileText, Briefcase, Clock, Phone
} from 'lucide-react';

// --- CONFIGURACIÓN ---
const API_KEY = "PEGA_AQUI_TU_API_KEY_DE_GOOGLE"; 

type View = 'home' | 'creditos' | 'divorcio' | 'proteccion' | 'marcas' | 'pago' | 'carga-docs' | 'consultor-ia';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [iaChat, setIaChat] = useState<{role: 'bot' | 'user', text: string}[]>([
    { role: 'bot', text: "Bienvenido a Elith Lex. Soy su asistente legal estratégico. ¿Cómo puedo ayudarle hoy?" }
  ]);
  const [iaInput, setIaInput] = useState('');

  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans text-slate-900 overflow-x-hidden">
      
      {/* BOTÓN WHATSAPP FLOTANTE (CIERRE DE VENTAS) */}
      <a 
        href="https://wa.me/573132922973" 
        target="_blank" 
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-[100] hover:scale-110 transition-transform flex items-center gap-2"
      >
        <Phone size={24}/>
        <span className="text-[10px] font-black uppercase tracking-widest hidden md:block">Abogado en línea</span>
      </a>

      {/* NAVBAR */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
            <div className="bg-slate-900 p-2 rounded-lg text-emerald-400"><Cpu size={20} /></div>
            <div className="text-left leading-none font-black text-lg tracking-tighter uppercase italic">ELITH LEX</div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-widest">
            <button onClick={() => setView('home')} className="hover:text-emerald-600 transition-colors">Trayectoria</button>
            <button onClick={() => setView('consultor-ia')} className="hover:text-emerald-600 transition-colors">Consultor IA</button>
            <button onClick={() => setView('pago')} className="bg-emerald-600 text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-lg hover:bg-emerald-700 transition-all"><CreditCard size={14}/> PAGAR TRÁMITE</button>
          </div>
          {view !== 'home' && (
            <button onClick={() => setView('home')} className="text-slate-900 px-4 py-2 rounded-full text-[10px] font-black border border-slate-200 flex items-center gap-2"><ArrowLeft size={14}/> VOLVER</button>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 md:p-12">
        
        {/* VISTA: HOME (TRAYECTORIA Y SERVICIOS) */}
        {view === 'home' && (
          <div className="space-y-32 animate-in fade-in duration-700">
            <section className="text-center space-y-8 py-10">
              <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 text-[10px] font-black text-emerald-700 uppercase tracking-widest">
                <Award size={14}/> +10 Años de Trayectoria Jurídica Real
              </div>
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] italic">Experiencia que <br/><span className="text-emerald-500">Transciende.</span></h1>
              <p className="max-w-3xl mx-auto text-xl text-slate-500 font-light italic">Combinamos una década de litigio estratégico con tecnología de vanguardia para concretar sus procesos legales sin burocracia.</p>
              <div className="flex justify-center gap-4">
                <button onClick={() => setView('pago')} className="bg-emerald-600 text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl">Empezar Negocio</button>
              </div>
            </section>

            {/* UNIDADES DE NEGOCIO DETALLADAS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  id: 'divorcio', 
                  title: 'Divorcio Express', 
                  desc: 'Mutuo acuerdo notarial, redacción técnica de demandas y liquidación conyugal. Soluciones en tiempo récord.',
                  icon: <HeartOff size={32}/>
                },
                { 
                  id: 'creditos', 
                  title: 'Ley de Vivienda', 
                  desc: 'Reducción de créditos hipotecarios y leasing. Ingeniería jurídica aplicada para ahorrar años de intereses.',
                  icon: <TrendingDown size={32}/>
                },
                { 
                  id: 'proteccion', 
                  title: 'Fideicomiso Civil', 
                  desc: 'Blindaje patrimonial absoluto contra embargos. Proteja sus bienes para las próximas generaciones.',
                  icon: <Landmark size={32}/>
                },
                { 
                  id: 'marcas', 
                  title: 'Marcas & Patentes', 
                  desc: 'Protección de propiedad intelectual ante la SIC. Registro estratégico de activos intangibles.',
                  icon: <ShieldCheck size={32}/>
                }
              ].map((serv) => (
                <div key={serv.id} onClick={() => setView(serv.id as View)} className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all cursor-pointer text-left space-y-6 group">
                  <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all w-fit">{serv.icon}</div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic">{serv.title}</h3>
                  <p className="text-slate-500 text-sm italic font-light leading-relaxed">{serv.desc}</p>
                  <div className="text-[10px] font-black uppercase text-emerald-600">Ver detalles y tarifas —></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VISTA: PAGO (DATOS REALES) */}
        {view === 'pago' && (
          <div className="max-w-2xl mx-auto animate-in zoom-in duration-300 space-y-8">
            <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border-2 border-emerald-500 text-center space-y-10">
              <h2 className="text-4xl font-black uppercase italic tracking-tighter underline decoration-emerald-500 decoration-4">Pasarela de Pago</h2>
              
              <div className="space-y-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Opción Automática (Mercado Pago / PSE)</p>
                <button onClick={() => window.open("https://link-de-mercado-pago.com", "_blank")} className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl flex items-center justify-center gap-3">
                  <Globe size={18}/> Pagar con PSE o Tarjeta
                </button>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Transferencia Directa Elith Lex</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-left">
                    <p className="text-[9px] font-black text-slate-400 mb-1">NEQUI / DAVIPLATA</p>
                    <p className="text-lg font-black italic tracking-tighter">313 292 2973</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-left">
                    <p className="text-[9px] font-black text-slate-400 mb-1">LLAVE BREVE</p>
                    <p className="text-lg font-black italic tracking-tighter">79396055</p>
                  </div>
                </div>
                <p className="text-[10px] text-emerald-600 font-black uppercase italic">¡Tome captura de su pago para radicar!</p>
              </div>

              <button onClick={() => setView('carga-docs')} className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2">
                Pagar y Cargar Documentos <CheckCircle size={18}/>
              </button>
            </div>
          </div>
        )}

        {/* VISTA: CARGA DE DOCUMENTOS */}
        {view === 'carga-docs' && (
          <div className="max-w-3xl mx-auto animate-in fade-in duration-500 space-y-10">
            <div className="text-center">
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">Radicación <span className="text-emerald-500">Digital</span></h2>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mt-2">Cargue su comprobante y expediente</p>
            </div>
            
            <div className="bg-white p-12 rounded-[3.5rem] border-4 border-dashed border-emerald-100 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-10 border-2 border-slate-100 rounded-3xl bg-slate-50 flex flex-col items-center gap-4 text-center">
                  <FileText className="text-emerald-500" size={40}/>
                  <span className="text-[10px] font-black uppercase tracking-widest italic">Documentos de Identidad / Escrituras</span>
                </div>
                <div className="p-10 border-2 border-slate-100 rounded-3xl bg-slate-50 flex flex-col items-center gap-4 text-center">
                  <CreditCard className="text-emerald-500" size={40}/>
                  <span className="text-[10px] font-black uppercase tracking-widest italic">Comprobante de Pago</span>
                </div>
              </div>
              <button onClick={() => alert("Expediente Recibido. Un abogado especialista de Elith Lex iniciará su trámite de inmediato.")} className="w-full bg-emerald-600 text-white py-6 rounded-2xl font-black uppercase text-sm tracking-[0.2em] shadow-2xl">Enviar y Concretar Negocio</button>
            </div>
          </div>
        )}

        {/* DETALLE SERVICIO: DIVORCIO (EJEMPLO DE NARRATIVA) */}
        {view === 'divorcio' && (
          <div className="max-w-5xl mx-auto animate-in slide-in-from-bottom-5 text-left space-y-12">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-7xl font-black uppercase tracking-tighter italic leading-none">Divorcio <span className="text-emerald-500">Express</span></h2>
                <p className="text-xl font-bold uppercase text-slate-700 italic underline decoration-emerald-500 decoration-4">Eficiencia Jurídica desde 2015.</p>
                <p className="text-lg text-slate-500 font-light italic leading-relaxed">Más de una década gestionando disoluciones de vínculo matrimonial con total discreción. Incluye redacción de acuerdo de mutuo acuerdo, liquidación de sociedad y gestión notarial completa.</p>
                <ul className="text-[11px] font-black uppercase tracking-widest text-emerald-600 space-y-3 italic">
                  <li>✔ Radicación 100% Digital</li>
                  <li>✔ Expertos en Derecho de Familia</li>
                  <li>✔ Honorarios Transparentes</li>
                </ul>
              </div>
              <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border-2 border-emerald-500 space-y-6">
                <p className="text-center font-black text-sm uppercase text-slate-400 italic">Inversión Honorarios</p>
                <p className="text-5xl font-black text-center italic tracking-tighter">$1.200.000 <span className="text-xs uppercase font-normal">COP</span></p>
                <button onClick={() => setView('pago')} className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest">Proceder al Pago</button>
                <button onClick={() => setView('pago')} className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest">Información Nequi/PSE</button>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* FOOTER REFORZANDO MARCA */}
      <footer className="bg-white border-t py-20 mt-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 text-left">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-slate-900 p-2 rounded-lg text-emerald-400"><Cpu size={16} /></div>
              <span className="font-black text
