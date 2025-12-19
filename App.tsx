import React, { useState } from 'react';
import { 
  Scale, ArrowLeft, TrendingDown, HeartOff, Landmark, ShieldCheck, 
  MessageCircle, Zap, Cpu, Database, Network, Fingerprint, Activity, Search, Shield
} from 'lucide-react';

// --- VISTAS DEL SISTEMA ---
type View = 'home' | 'creditos' | 'divorcio' | 'proteccion' | 'marcas';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [step, setStep] = useState(1);
  const [datos, setDatos] = useState({ nombre: '', email: '', celular: '', ciudad: '' });

  // Función para conectar a WhatsApp con los datos capturados
  const conectarWhatsApp = (modulo: string) => {
    const texto = `*RADICACIÓN LEGAL TECH ELITH*\n*Módulo:* ${modulo.toUpperCase()}\n*Usuario:* ${datos.nombre}\n*Email:* ${datos.email}\n*Ciudad:* ${datos.ciudad}\n*Estado:* Pendiente de validación IA.`;
    window.open(`https://wa.me/573167824217?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      
      {/* BARRA DE NAVEGACIÓN TIPO APP */}
      <nav className="bg-white border-b border-slate-200 p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => {setView('home'); setStep(1);}}>
            <div className="bg-slate-900 p-2 rounded-lg">
              <Cpu className="text-emerald-400" size={20} />
            </div>
            <div className="text-left">
              <p className="font-black text-lg leading-none tracking-tighter">ELITH LEX</p>
              <p className="text-[7px] font-bold text-emerald-600 tracking-[0.2em] uppercase">Legal Tech Startup</p>
            </div>
          </div>
          {view !== 'home' && (
            <button onClick={() => {setView('home'); setStep(1);}} className="bg-slate-100 text-slate-900 px-4 py-2 rounded-full text-[10px] font-bold flex items-center gap-2">
              <ArrowLeft size={14}/> VOLVER
            </button>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 md:p-12">
        {view === 'home' ? (
          <div className="space-y-20 animate-in fade-in duration-500">
            {/* HERO PRINCIPAL */}
            <section className="text-center space-y-8 py-10">
              <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full border border-emerald-200 text-[10px] font-black text-emerald-700 uppercase tracking-widest">
                <Network size={14} className="animate-pulse"/> Conexión Rama Judicial & Registraduría
              </div>
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none text-slate-900">
                Justicia<span className="text-emerald-500 italic">Digital.</span>
              </h1>
              <p className="max-w-2xl mx-auto text-xl text-slate-500 font-light leading-relaxed">
                Plataforma Legal Tech que automatiza trámites mediante <span className="text-slate-900 font-bold">IA</span> y conectividad directa con el estado colombiano.
              </p>
            </section>

            {/* GRILLA DE SERVICIOS (MODULOS) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { id: 'divorcio', title: 'Divorcio Express', sub: 'Protocolo Remoto', icon: <HeartOff size={30}/> },
                { id: 'creditos', title: 'Ley de Vivienda', sub: 'Ahorro Proyectado', icon: <TrendingDown size={30}/> },
                { id: 'proteccion', title: 'Fideicomisos', sub: 'Blindaje Civil', icon: <Landmark size={30}/> },
                { id: 'marcas', title: 'Marcas / SIC', sub: 'Propiedad Digital', icon: <ShieldCheck size={30}/> }
              ].map((m) => (
                <div key={m.id} onClick={() => setView(m.id as View)} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:border-emerald-500/50 hover:shadow-xl transition-all cursor-pointer group text-center">
                  <div className="mb-6 flex justify-center text-slate-900 group-hover:text-emerald-500 transition-colors">{m.icon}</div>
                  <h3 className="font-black text-xl tracking-tight">{m.title}</h3>
                  <p className="text-[10px] font-bold text-emerald-600 uppercase mt-2 tracking-widest">{m.sub}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12 items-start animate-in slide-in-from-bottom-5 duration-500">
            {/* INFORMACIÓN DEL MÓDULO */}
            <div className="space-y-8 text-left">
              {view === 'divorcio' && (
                <div className="space-y-6">
                  <span className="bg-slate-900 text-emerald-400 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 w-fit"><Database size={14}/> Sincronización Registraduría</span>
                  <h2 className="text-6xl font-black tracking-tighter">Gestión <span className="text-emerald-500 italic">Remota</span></h2>
                  <p className="text-xl text-slate-600 leading-relaxed italic">"Procesamos su divorcio sin desplazamientos. Envíe sus registros civiles y documentos digitalmente; nuestra IA se encarga de la radicación."</p>
                </div>
              )}
              {view === 'creditos' && (
                <div className="space-y-6">
                  <span className="bg-slate-900 text-emerald-400 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 w-fit"><Zap size={14}/> Algoritmo de Ahorro</span>
                  <h2 className="text-6xl font-black tracking-tighter">Ahorro de <span className="text-emerald-500 italic">$20M+</span></h2>
                  <p className="text-xl text-slate-600 leading-relaxed italic">"Aumente su cuota solo <span className="font-bold text-slate-900">$80.000</span> y deje que nuestra ingeniería financiera elimine años de intereses de su deuda hipotecaria."</p>
                </div>
              )}
              {view === 'proteccion' && (
                <div className="space-y-6">
                  <span className="bg-slate-900 text-emerald-400 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 w-fit"><Shield size={14}/> Blindaje Activos</span>
                  <h2 className="text-6xl font-black tracking-tighter">Patrimonio <span className="text-emerald-500 italic">Seguro</span></h2>
                  <p className="text-xl text-slate-600 leading-relaxed italic">El Fideicomiso Civil es la solución inembargable para proteger su propiedad raíz contra cualquier riesgo jurídico futuro.</p>
                </div>
              )}
              {view === 'marcas' && (
                <div className="space-y-6">
                  <span className="bg-slate-900 text-emerald-400 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 w-fit"><Search size={14}/> Enlace S.I.C.</span>
                  <h2 className="text-6xl font-black tracking-tighter">Registro de <span className="text-emerald-500 italic">Marca</span></h2>
                  <p className="text-xl text-slate-600 leading-relaxed italic">Proteja su nombre comercial ante la Superintendencia de Industria y Comercio mediante radicación digital automática.</p>
                </div>
              )}
            </div>

            {/* FORMULARIO ÚNICO DE RADICACIÓN (SIN ERRORES) */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-200">
              <div className="mb-8 flex items-center gap-3 border-b border-slate-100 pb-4">
                <Fingerprint size={24} className="text-emerald-500" />
                <div className="text-left">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Protocolo de Entrada</p>
                  <p className="font-bold text-slate-900">RADICACIÓN_NODO_{view.toUpperCase()}</p>
                </div>
              </div>

              {step === 1 ? (
                <div className="space-y-4">
                  <input required placeholder="Nombre Completo" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-emerald-500 transition-all" onChange={e => setDatos({...datos, nombre: e.target.value})} />
                  <input required type="email" placeholder="Correo Electrónico" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-emerald-500 transition-all" onChange={e => setDatos({...datos, email: e.target.value})} />
                  <input required type="tel" placeholder="WhatsApp" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-emerald-500 transition-all" onChange={e => setDatos({...datos, celular: e.target.value})} />
                  <input required placeholder="Ciudad / País" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm outline-none focus:ring-2 focus:ring-emerald-500 transition-all" onChange={e => setDatos({...datos, ciudad: e.target.value})} />
                  <button onClick={() => setStep(2)} className="w-full bg-slate-900 text-white font-black py-4 rounded-xl text-xs tracking-widest uppercase hover:bg-emerald-600 transition-all">Sincronizar con IA</button>
                </div>
              ) : (
                <div className="space-y-6 text-center py-10">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <Activity size={40} className="text-emerald-600" />
                  </div>
                  <h4 className="font-black text-xl">Sincronización Exitosa</h4>
                  <p className="text-sm text-slate-500 italic">"Los datos han sido analizados por el algoritmo Elith_Core. Un abogado especialista validará su radicación."</p>
                  <button onClick={() => conectarWhatsApp(view)} className="w-full bg-emerald-600 text-white font-black py-4 rounded-xl text-xs tracking-widest uppercase flex items-center justify-center gap-2">
                    <MessageCircle size={18}/> Conectar con Abogado
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* FOOTER CORPORATIVO */}
      <footer className="bg-white py-20 border-t border-slate-200 text-center mt-20">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Scale className="text-emerald-500" size={24} />
          <span className="font-black text-2xl italic tracking-tighter">ELITH LEX GROUP</span>
        </div>
        <p className="text-slate-400 text-[10px] font-bold tracking-[0.5em] uppercase">Infraestructura Legal Tech · Colombia 2025</p>
      </footer>
    </div>
  );
}
