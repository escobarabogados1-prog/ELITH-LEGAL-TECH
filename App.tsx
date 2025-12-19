import React, { useState } from 'react';
import { 
  Scale, ArrowLeft, TrendingDown, HeartOff, 
  Landmark, ShieldCheck, ChevronRight, MessageCircle, 
  User, Mail, Phone, MapPin, CheckCircle2, Award, Shield, Briefcase, Zap, Globe, Users
} from 'lucide-react';

// --- CONFIGURACIÓN DE VISTAS ---
type View = 'home' | 'creditos' | 'divorcio' | 'proteccion' | 'marcas';

// --- COMPONENTE: FORMULARIO INTELIGENTE DE CAPTURA (LEAD GENERATOR PRO) ---
const FormularioInteligente = ({ unidad }: { unidad: string }) => {
  const [step, setStep] = useState(1);
  const [datos, setDatos] = useState({ nombre: '', email: '', celular: '', ciudad: '' });
  const [especificos, setEspecificos] = useState({ hijos: 'No', bienes: 'No', acuerdo: 'Sí', cuota: '' });
  const [consulta, setConsulta] = useState('');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const irAWhatsApp = () => {
    const texto = `*NUEVO CASO: ${unidad}*
*Cliente:* ${datos.nombre}
*Email:* ${datos.email}
*Ciudad/País:* ${datos.ciudad}
---
*Hijos menores:* ${especificos.hijos}
*¿Hay bienes?:* ${especificos.bienes}
*¿Hay acuerdo?:* ${especificos.acuerdo}
*Cuota propuesta:* ${especificos.cuota || 'N/A'}
*Consulta:* ${consulta || 'Desea asesoría urgente'}`;
    
    window.open(`https://wa.me/573167824217?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden sticky top-24">
      <div className="bg-slate-900 p-8 text-white">
        <h4 className="font-serif text-2xl font-bold italic">Expediente Digital</h4>
        <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest mt-1">Radicación de consulta: {unidad}</p>
      </div>

      {step === 1 && (
        <form onSubmit={handleNext} className="p-8 space-y-4 animate-in fade-in">
          <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest text-center mb-4">Paso 1: Información de Contacto</p>
          <div className="relative"><User className="absolute left-3 top-3.5 text-slate-400" size={16} /><input required placeholder="Nombre Completo" className="w-full pl-10 p-3 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-amber-500 outline-none text-sm" onChange={e => setDatos({...datos, nombre: e.target.value})} /></div>
          <div className="relative"><Mail className="absolute left-3 top-3.5 text-slate-400" size={16} /><input required type="email" placeholder="Correo para base de datos" className="w-full pl-10 p-3 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-amber-500 outline-none text-sm" onChange={e => setDatos({...datos, email: e.target.value})} /></div>
          <div className="relative"><Phone className="absolute left-3 top-3.5 text-slate-400" size={16} /><input required type="tel" placeholder="WhatsApp Celular" className="w-full pl-10 p-3 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-amber-500 outline-none text-sm" onChange={e => setDatos({...datos, celular: e.target.value})} /></div>
          <div className="relative"><MapPin className="absolute left-3 top-3.5 text-slate-400" size={16} /><input required placeholder="Ciudad o País donde reside" className="w-full pl-10 p-3 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-amber-500 outline-none text-sm" onChange={e => setDatos({...datos, ciudad: e.target.value})} /></div>
          <button type="submit" className="w-full bg-slate-900 text-white font-black py-4 rounded-xl hover:bg-amber-500 transition-all uppercase text-[10px] tracking-widest">Siguiente Paso</button>
        </form>
      )}

      {step === 2 && unidad.includes("DIVORCIO") && (
        <div className="p-8 space-y-4 animate-in slide-in-from-right">
          <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest text-center mb-4">Paso 2: Detalles del Caso</p>
          <div className="grid grid-cols-2 gap-2">
            <label className="text-xs font-bold text-slate-600 block col-span-2">¿Hijos menores?</label>
            <button onClick={() => setEspecificos({...especificos, hijos: 'Sí'})} className={`p-2 rounded-lg text-xs font-bold border ${especificos.hijos === 'Sí' ? 'bg-slate-900 text-white' : 'bg-slate-50'}`}>SÍ</button>
            <button onClick={() => setEspecificos({...especificos, hijos: 'No'})} className={`p-2 rounded-lg text-xs font-bold border ${especificos.hijos === 'No' ? 'bg-slate-900 text-white' : 'bg-slate-50'}`}>NO</button>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <label className="text-xs font-bold text-slate-600 block col-span-2">¿Hay Bienes?</label>
            <button onClick={() => setEspecificos({...especificos, bienes: 'Sí'})} className={`p-2 rounded-lg text-xs font-bold border ${especificos.bienes === 'Sí' ? 'bg-slate-900 text-white' : 'bg-slate-50'}`}>SÍ</button>
            <button onClick={() => setEspecificos({...especificos, bienes: 'No'})} className={`p-2 rounded-lg text-xs font-bold border ${especificos.bienes === 'No' ? 'bg-slate-900 text-white' : 'bg-slate-50'}`}>NO</button>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <label className="text-xs font-bold text-slate-600 block col-span-2">¿Hay Acuerdo de Mutuo Acuerdo?</label>
            <button onClick={() => setEspecificos({...especificos, acuerdo: 'Sí'})} className={`p-2 rounded-lg text-xs font-bold border ${especificos.acuerdo === 'Sí' ? 'bg-slate-900 text-white' : 'bg-slate-50'}`}>SÍ (Express)</button>
            <button onClick={() => setEspecificos({...especificos, acuerdo: 'No'})} className={`p-2 rounded-lg text-xs font-bold border ${especificos.acuerdo === 'No' ? 'bg-slate-900 text-white' : 'bg-slate-50'}`}>NO (Contencioso)</button>
          </div>
          <button onClick={() => setStep(3)} className="w-full bg-slate-900 text-white font-black py-4 rounded-xl mt-4 uppercase text-[10px] tracking-widest italic">Finalizar Radicación</button>
        </div>
      )}

      {step === 3 && (
        <div className="p-8 space-y-6 animate-in slide-in-from-bottom">
          <textarea placeholder="Comentarios adicionales..." className="w-full p-4 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 h-28 outline-none text-sm" onChange={e => setConsulta(e.target.value)} />
          <button onClick={irAWhatsApp} className="w-full bg-green-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-xl hover:bg-green-600"><MessageCircle size={24} /> ENVIAR A ABOGADO SENIOR</button>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [view, setView] = useState<View>('home');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* NAVBAR */}
      <nav className="bg-slate-900 text-white p-6 sticky top-0 z-50 border-b border-amber-500/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView('home')}>
            <div className="bg-amber-500 p-2 rounded-lg"><Scale className="text-slate-900" size={24} /></div>
            <span className="font-bold text-2xl tracking-tighter font-serif uppercase">ELITH LEX GROUP</span>
          </div>
          {view !== 'home' && (
            <button onClick={() => setView('home')} className="bg-slate-800 px-6 py-3 rounded-full text-[10px] font-black tracking-widest border border-slate-700 hover:bg-amber-500">VOLVER AL INICIO</button>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 md:p-12">
        {view === 'home' ? (
          <div className="space-y-24 animate-in fade-in">
            {/* HERO CON PRUEBA SOCIAL */}
            <section className="text-center space-y-10 py-12">
              <div className="flex justify-center gap-4 flex-wrap">
                <div className="bg-white px-5 py-2 rounded-full border shadow-sm flex items-center gap-2">
                  <Users size={16} className="text-amber-500"/>
                  <span className="text-[10px] font-black uppercase">+2,500 Clientes Satisfechos</span>
                </div>
                <div className="bg-white px-5 py-2 rounded-full border shadow-sm flex items-center gap-2">
                  <Globe size={16} className="text-amber-500"/>
                  <span className="text-[10px] font-black uppercase">Atención Global Online</span>
                </div>
              </div>
              <h1 className="text-7xl md:text-9xl font-serif font-black text-slate-900 tracking-tighter leading-none">
                Justicia <br/> <span className="text-amber-500 italic">Sin Fronteras</span>
              </h1>
              <p className="max-w-3xl mx-auto text-xl text-slate-500 font-light italic">
                Líderes en consultoría jurídica digital. Representamos sus intereses en Colombia desde cualquier lugar del mundo con la eficiencia de la alta gerencia.
              </p>
            </section>

            {/* DASHBOARD DE UNIDADES */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               <div onClick={() => setView('divorcio')} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group text-center">
                <HeartOff className="text-red-600 mx-auto mb-6" size={48} />
                <h3 className="text-2xl font-bold font-serif mb-2">Divorcio Express</h3>
                <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase italic">Nuestra unidad más exitosa</p>
              </div>
              <div onClick={() => setView('creditos')} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group text-center">
                <TrendingDown className="text-amber-500 mx-auto mb-6" size={48} />
                <h3 className="text-2xl font-bold font-serif mb-2 text-slate-800">Ley de Vivienda</h3>
                <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase italic">Ahorro Garantizado</p>
              </div>
              <div onClick={() => setView('proteccion')} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group text-center">
                <Landmark className="text-green-600 mx-auto mb-6" size={48} />
                <h3 className="text-2xl font-bold font-serif mb-2 text-slate-800">Fideicomisos</h3>
                <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase italic">Blindaje Total</p>
              </div>
              <div onClick={() => setView('marcas')} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group text-center">
                <ShieldCheck className="text-slate-900 mx-auto mb-6" size={48} />
                <h3 className="text-2xl font-bold font-serif mb-2 text-slate-800">Marcas</h3>
                <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase italic">Propiedad Intelectual</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-20 items-start animate-in fade-in">
            {/* CONTENIDO ESPECÍFICO */}
            <div className="space-y-12">
              {view === 'divorcio' && (
                <div className="space-y-8">
                  <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg font-black text-xs inline-flex items-center gap-2"><Globe size={14}/> DISPONIBLE DESDE CUALQUIER LUGAR DEL MUNDO</div>
                  <h2 className="text-7xl font-serif font-black tracking-tighter">Divorcio <br/><span className="text-red-600 underline decoration-slate-900 underline-offset-8">Express Digital</span></h2>
                  <p className="text-xl text-slate-600 leading-relaxed font-light italic">
                    "Hemos gestionado miles de procesos para colombianos en el exterior. No importa si está en Europa, EE.UU. o cualquier lugar de Colombia, su divorcio se tramita con firma digital y eficiencia absoluta."
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-6 rounded-2xl border shadow-sm">
                      <h5 className="font-bold text-slate-900 uppercase text-[10px] tracking-widest mb-2">Mutuo Acuerdo</h5>
                      <p className="text-xs text-slate-500">Trámite notarial ágil. La forma más rápida y económica de recuperar su libertad civil.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border shadow-sm">
                      <h5 className="font-bold text-slate-900 uppercase text-[10px] tracking-widest mb-2">Contencioso</h5>
                      <p className="text-xs text-slate-500">Si no hay acuerdo, nuestros abogados litigantes defienden sus derechos en juzgado, esté donde esté.</p>
                    </div>
                  </div>
                </div>
              )}
              {view === 'creditos' && (
                <div className="space-y-8">
                  <div className="bg-amber-100 text-amber-700 px-4 py-2 rounded-lg font-black text-xs inline-flex items-center gap-2"><Zap size={14}/> ALTA INGENIERÍA FINANCIERA</div>
                  <h2 className="text-7xl font-serif font-black tracking-tighter">Ahorre más de <br/><span className="text-amber-500 italic">$80 Millones</span></h2>
                  <p className="text-xl text-slate-600 leading-relaxed font-light">"Lo que los bancos no quieren que usted sepa es que la Ley de Vivienda permite reducir años de intereses sin aumentar su cuota mensual."</p>
                </div>
              )}
            </div>

            {/* EL FORMULARIO INTELIGENTE */}
            <FormularioInteligente unidad={view.toUpperCase()} />
          </div>
        )}
      </main>

      <footer className="bg-slate-900 py-16 text-center mt-20 border-t border-amber-500/20">
        <p className="text-white font-serif font-bold text-3xl italic tracking-tighter uppercase">Elith Lex Group</p>
        <p className="text-slate-500 text-[10px] tracking-[0.5em] uppercase mt-4">Consultoría Legal de Alta Gama | Colombia</p>
      </footer>
    </div>
  );
}
