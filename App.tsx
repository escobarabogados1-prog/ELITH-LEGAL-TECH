import React, { useState } from 'react';
import { 
  Scale, ArrowLeft, TrendingDown, HeartOff, 
  Landmark, ShieldCheck, ChevronRight, MessageCircle, 
  User, Mail, Phone, MapPin, CheckCircle2, Award, Shield, Briefcase, Zap, Globe, Users
} from 'lucide-react';

type View = 'home' | 'creditos' | 'divorcio' | 'proteccion' | 'marcas';

// --- FORMULARIO DINÁMICO SEGÚN LA UNIDAD ---
const FormularioInteligente = ({ unidad }: { unidad: View }) => {
  const [step, setStep] = useState(1);
  const [datos, setDatos] = useState({ nombre: '', email: '', celular: '', ciudad: '' });
  const [preguntas, setPreguntas] = useState({ hijos: 'No', bienes: 'No', acuerdo: 'Sí' });

  const irAWhatsApp = () => {
    let detalleExtra = "";
    if (unidad === 'divorcio') {
      detalleExtra = `\n*Hijos:* ${preguntas.hijos}\n*Bienes:* ${preguntas.bienes}\n*Acuerdo:* ${preguntas.acuerdo}`;
    }

    const texto = `*NUEVO LEAD: ${unidad.toUpperCase()}*
*Nombre:* ${datos.nombre}
*Email:* ${datos.email}
*Ciudad/País:* ${datos.ciudad} ${detalleExtra}`;
    
    window.open(`https://wa.me/573167824217?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden sticky top-24">
      <div className="bg-slate-900 p-8 text-white">
        <h4 className="font-serif text-2xl font-bold italic">Radicación Digital</h4>
        <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest mt-1">Unidad: {unidad}</p>
      </div>

      <div className="p-8 space-y-4">
        {step === 1 ? (
          <>
            <div className="relative"><User className="absolute left-3 top-3.5 text-slate-400" size={16} /><input required placeholder="Nombre Completo" className="w-full pl-10 p-3 bg-slate-50 rounded-xl outline-none text-sm ring-1 ring-slate-100 focus:ring-2 focus:ring-amber-500" onChange={e => setDatos({...datos, nombre: e.target.value})} /></div>
            <div className="relative"><Mail className="absolute left-3 top-3.5 text-slate-400" size={16} /><input required type="email" placeholder="Email para base de datos" className="w-full pl-10 p-3 bg-slate-50 rounded-xl outline-none text-sm ring-1 ring-slate-100 focus:ring-2 focus:ring-amber-500" onChange={e => setDatos({...datos, email: e.target.value})} /></div>
            <div className="relative"><Phone className="absolute left-3 top-3.5 text-slate-400" size={16} /><input required type="tel" placeholder="WhatsApp" className="w-full pl-10 p-3 bg-slate-50 rounded-xl outline-none text-sm ring-1 ring-slate-100 focus:ring-2 focus:ring-amber-500" onChange={e => setDatos({...datos, celular: e.target.value})} /></div>
            <div className="relative"><MapPin className="absolute left-3 top-3.5 text-slate-400" size={16} /><input required placeholder="Ciudad/País de residencia" className="w-full pl-10 p-3 bg-slate-50 rounded-xl outline-none text-sm ring-1 ring-slate-100 focus:ring-2 focus:ring-amber-500" onChange={e => setDatos({...datos, ciudad: e.target.value})} /></div>
            <button onClick={() => setStep(2)} className="w-full bg-slate-900 text-white font-black py-4 rounded-xl uppercase text-[10px] tracking-[0.2em]">Siguiente Paso</button>
          </>
        ) : (
          <div className="space-y-4 animate-in slide-in-from-right">
            {unidad === 'divorcio' ? (
              <>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Información Familiar</p>
                <div className="grid grid-cols-2 gap-2 text-[10px] font-bold">
                  <button onClick={() => setPreguntas({...preguntas, hijos: 'Sí'})} className={`p-3 rounded-lg border ${preguntas.hijos === 'Sí' ? 'bg-slate-900 text-white' : 'bg-slate-50'}`}>TIENE HIJOS</button>
                  <button onClick={() => setPreguntas({...preguntas, hijos: 'No'})} className={`p-3 rounded-lg border ${preguntas.hijos === 'No' ? 'bg-slate-900 text-white' : 'bg-slate-50'}`}>SIN HIJOS</button>
                  <button onClick={() => setPreguntas({...preguntas, acuerdo: 'Sí'})} className={`p-3 rounded-lg border ${preguntas.acuerdo === 'Sí' ? 'bg-slate-900 text-white' : 'bg-slate-50'}`}>HAY ACUERDO</button>
                  <button onClick={() => setPreguntas({...preguntas, acuerdo: 'No'})} className={`p-3 rounded-lg border ${preguntas.acuerdo === 'No' ? 'bg-slate-900 text-white' : 'bg-slate-50'}`}>CONTENCIOSO</button>
                </div>
              </>
            ) : (
              <p className="text-sm text-slate-600 italic">"Estamos listos para analizar su caso de {unidad}. Proceda al chat para conectar con un abogado."</p>
            )}
            <button onClick={irAWhatsApp} className="w-full bg-green-500 text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:bg-green-600"><MessageCircle size={20}/> CONTACTAR AHORA</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState<View>('home');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 leading-tight">
      <nav className="bg-slate-900 text-white p-6 sticky top-0 z-50 border-b border-amber-500/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView('home')}>
            <div className="bg-amber-500 p-2 rounded-lg"><Scale className="text-slate-900" size={24} /></div>
            <span className="font-bold text-2xl tracking-tighter font-serif uppercase">ELITH LEX GROUP</span>
          </div>
          {view !== 'home' && <button onClick={() => setView('home')} className="bg-slate-800 px-5 py-2.5 rounded-full
