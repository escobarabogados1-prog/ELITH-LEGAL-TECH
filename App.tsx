import React, { useState } from 'react';
import { 
  Scale, ArrowLeft, TrendingDown, HeartOff, 
  Landmark, ShieldCheck, ChevronRight, MessageCircle, 
  User, Mail, Phone, MapPin, CheckCircle2, Award, Shield, Briefcase
} from 'lucide-react';

// --- TIPOS ---
type View = 'home' | 'creditos' | 'divorcio' | 'proteccion' | 'marcas';

// --- COMPONENTE: FORMULARIO DE CAPTURA ESTRATÉGICA (LEAD GENERATOR) ---
const FormularioCaptura = ({ unidad }: { unidad: string }) => {
  const [step, setStep] = useState(1);
  const [datos, setDatos] = useState({ nombre: '', email: '', celular: '', ciudad: '' });
  const [consulta, setConsulta] = useState('');

  const handleRegistro = (e: React.FormEvent) => {
    e.preventDefault();
    if(datos.nombre && datos.email && datos.celular) setStep(2);
  };

  const irAWhatsApp = () => {
    const texto = `*NUEVO CLIENTE POTENCIAL - ELITH LEX*\n*Unidad:* ${unidad}\n*Nombre:* ${datos.nombre}\n*Email:* ${datos.email}\n*Ciudad:* ${datos.ciudad}\n*Consulta:* ${consulta || 'Desea asesoría rápida'}`;
    window.open(`https://wa.me/573167824217?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden sticky top-24">
      <div className="bg-slate-900 p-8 text-white">
        <h4 className="font-serif text-2xl font-bold italic">Consultoría Especializada</h4>
        <p className="text-amber-500 text-xs font-black uppercase tracking-widest mt-1">Unidad: {unidad}</p>
      </div>

      {step === 1 ? (
        <form onSubmit={handleRegistro} className="p-8 space-y-4">
          <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter mb-4 text-center">Registro de ingreso para consulta legal</p>
          
          <div className="relative">
            <User className="absolute left-3 top-3.5 text-slate-400" size={16} />
            <input required placeholder="Nombre Completo" className="w-full pl-10 p-3 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-amber-500 outline-none text-sm" 
              onChange={e => setDatos({...datos, nombre: e.target.value})} />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-slate-400" size={16} />
            <input required type="email" placeholder="Correo Electrónico" className="w-full pl-10 p-3 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-amber-500 outline-none text-sm" 
              onChange={e => setDatos({...datos, email: e.target.value})} />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-3.5 text-slate-400" size={16} />
            <input required type="tel" placeholder="WhatsApp / Celular" className="w-full pl-10 p-3 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-amber-500 outline-none text-sm" 
              onChange={e => setDatos({...datos, celular: e.target.value})} />
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-3.5 text-slate-400" size={16} />
            <input required placeholder="Ciudad" className="w-full pl-10 p-3 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-amber-500 outline-none text-sm" 
              onChange={e => setDatos({...datos, ciudad: e.target.value})} />
          </div>

          <button type="submit" className="w-full bg-slate-900 text-white font-black py-4 rounded-xl hover:bg-amber-500 hover:text-slate-900 transition-all shadow-xl uppercase text-[10px] tracking-widest mt-4">
            Validar y Continuar
          </button>
        </form>
      ) : (
        <div className="p-8 space-y-6 animate-in slide-in-from-bottom-4 duration-500">
          <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100">
            <p className="text-amber-900 text-xs font-medium italic text-center leading-relaxed">
              "Sus datos han sido registrados en nuestro sistema de atención preferencial. ¿Cuál es su consulta específica?"
            </p>
          </div>
          <textarea 
            placeholder="Describa brevemente su caso aquí..." 
            className="w-full p-4 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 h-28 outline-none focus:ring-2 focus:ring-green-500 text-sm"
            onChange={e => setConsulta(e.target.value)}
          />
          <button onClick={irAWhatsApp} className="w-full bg-green-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-xl hover:bg-green-600 transition-transform active:scale-95">
            <MessageCircle size={24} /> SOLICITAR ASESORÍA YA
          </button>
        </div>
      )}
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
export default function App() {
  const [view, setView] = useState<View>('home');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <nav className="bg-slate-900 text-white p-6 sticky top-0 z-50 shadow-2xl border-b border-amber-500/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setView('home')}>
            <div className="bg-amber-500 p-2 rounded-lg group-hover:rotate-12 transition-transform"><Scale className="text-slate-900" size={24} /></div>
            <span className="font-bold text-2xl tracking-tighter font-serif uppercase">ELITH LEX GROUP</span>
          </div>
          {view !== 'home' && (
            <button onClick={() => setView('home')} className="bg-slate-800 px-6 py-3 rounded-full text-[10px] font-black tracking-widest flex items-center gap-2 hover:bg-amber-500 hover:text-slate-900 transition-all border border-slate-700">
              <ArrowLeft size={14}/> REGRESAR AL MENÚ
            </button>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 md:p-12">
        {view === 'home' ? (
          <div className="space-y-24 animate-in fade-in duration-700">
            {/* HERO / QUIÉNES SOMOS */}
            <section className="text-center space-y-10 py-12 border-b">
              <div className="flex justify-center gap-6 mb-2">
                <span className="flex items-center gap-2 text-[10px] font-black bg-white border px-4 py-2 rounded-full shadow-sm tracking-widest uppercase"><Award size={14} className="text-amber-500"/> Trayectoria</span>
                <span className="flex items-center gap-2 text-[10px] font-black bg-white border px-4 py-2 rounded-full shadow-sm tracking-widest uppercase"><Shield size={14} className="text-amber-500"/> Blindaje Legal</span>
                <span className="flex items-center gap-2 text-[10px] font-black bg-white border px-4 py-2 rounded-full shadow-sm tracking-widest uppercase"><Briefcase size={14} className="text-amber-500"/> Alta Gerencia</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif font-black text-slate-900 leading-none">
                Elith Lex <span className="text-amber-500 italic">Group</span>
              </h1>
              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-2xl text-slate-600 font-light leading-relaxed px-4">
                  Somos un bufete boutique especializado en la protección de los intereses más complejos de nuestros clientes. Fusionamos el derecho corporativo con la optimización financiera para asegurar su patrimonio.
                </p>
                <div className="h-1.5 w-32 bg-amber-500 mx-auto rounded-full"></div>
              </div>
            </section>

            {/* UNIDADES DE NEGOCIO */}
            <div className="grid md:grid-cols-2 gap-10">
              <div onClick={() => setView('creditos')} className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group">
                <TrendingDown className="text-amber-500 mb-8" size={56} />
                <h3 className="text-3xl font-bold font-serif mb-4 italic">Ley de Vivienda</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">Reducción técnica de intereses en créditos hipotecarios y leasing habitacional bajo la Ley 546/99. Ahorre hasta 10 años de deuda.</p>
                <div className="flex items-center gap-3 text-xs font-black text-amber-600 tracking-[0.2em]">INICIAR ESTUDIO <ChevronRight size={16}/></div>
              </div>

              <div onClick={() => setView('proteccion')} className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group">
                <Landmark className="text-green-600 mb-8" size={56} />
                <h3 className="text-3xl font-bold font-serif mb-4 italic">Protección Patrimonial</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">Fideicomiso Civil (Blindaje inembargable) y Planeación Sucesoral. Proteja su legado de riesgos jurídicos futuros.</p>
                <div className="flex items-center gap-3 text-xs font-black text-green-600 tracking-[0.2em]">BLINDAR ACTIVOS <ChevronRight size={16}/></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-20 items-start animate-in fade-in duration-500">
            {/* DETALLE TÉCNICO */}
            <div className="space-y-12">
              {view === 'creditos' && (
                <div className="space-y-8">
                  <h2 className="text-6xl font-serif font-bold italic tracking-tighter">Optimización <br/>Financiera</h2>
                  <p className="text-xl text-slate-600 leading-relaxed font-light">
                    No permitas que tu capital se pierda en intereses bancarios. Realizamos la recalificación de tu crédito bajo amparo legal vigente.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border shadow-sm">
                      <CheckCircle2 className="text-amber-500 shrink-0" size={24}/>
                      <span className="font-bold text-slate-800 italic uppercase text-xs tracking-widest">Ahorro proyectado: 30% al 45%</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border shadow-sm">
                      <CheckCircle2 className="text-amber-500 shrink-0" size={24}/>
                      <span className="font-bold text-slate-800 italic uppercase text-xs tracking-widest">Acompañamiento jurídico total</span>
                    </div>
                  </div>
                </div>
              )}
              {/* Espacio para los otros servicios */}
            </div>

            {/* CAPTURA DE LEADS */}
            <FormularioCaptura unidad={view === 'creditos' ? 'Ley de Vivienda' : 'Protección Patrimonial'} />
          </div>
        )}
      </main>

      <footer className="bg-slate-900 py-16 text-center border-t border-amber-500/20 mt-20">
        <div className="max-w-md mx-auto space-y-4">
          <p className="text-white font-serif font-bold text-xl uppercase tracking-tighter">ELITH LEX GROUP</p>
          <p className="text-slate-500 text-[9px] tracking-[0.6em] uppercase">Excelencia · Resultados · Blindaje Jurídico</p>
          <p className="text-slate-600 text-[10px] pt-8">Bogotá, Colombia | © 2025 Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}
