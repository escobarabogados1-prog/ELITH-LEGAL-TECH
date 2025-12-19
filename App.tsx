import React, { useState } from 'react';
import { AppView } from './types';
import Home from './Home';
import LegalChatbot from './LegalChatbot';
import { Scale, ArrowLeft, TrendingDown, HeartOff, Landmark, ShieldCheck } from 'lucide-react';

const App = () => {
  const [activeView, setActiveView] = useState<AppView>(AppView.HOME);

  // Función para renderizar el contenido según la unidad de negocio
  const renderBusinessUnit = () => {
    switch (activeView) {
      case AppView.CREDITOS_VIVIENDA:
        return (
          <div className="grid lg:grid-cols-2 gap-12 items-start animate-in fade-in duration-500">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-lg font-bold text-sm">
                <TrendingDown size={18} /> LEY DE VIVIENDA 546 DE 1999
              </div>
              <h2 className="text-4xl font-serif font-bold text-slate-900">Reducción de Créditos e Intereses</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                No permita que los intereses consuman su patrimonio. Analizamos su extracto para reducir el tiempo de su deuda hasta en un 40% sin afectar su flujo de caja mensual.
              </p>
              <div className="bg-white p-6 rounded-2xl border-l-8 border-amber-500 shadow-sm space-y-4">
                <h4 className="font-bold">¿Qué logramos para usted?</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• Ahorro real de millones en intereses bancarios.</li>
                  <li>• Reducción de años en el plazo de su hipoteca o leasing.</li>
                  <li>• Seguridad jurídica mediante procesos de ley vigentes.</li>
                </ul>
              </div>
            </div>
            <LegalChatbot 
              businessUnit="Reducción de Créditos" 
              contextMessage="Hola. Soy el asistente especializado en Ley de Vivienda. ¿Desea saber cuánto puede ahorrar en su crédito hoy?" 
            />
          </div>
        );

      case AppView.DIVORCIO:
        return (
          <div className="grid lg:grid-cols-2 gap-12 items-start animate-in fade-in duration-500">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-lg font-bold text-sm">
                <HeartOff size={18} /> DERECHO DE FAMILIA
              </div>
              <h2 className="text-4xl font-serif font-bold text-slate-900">Divorcio Express On-Line</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Gestionamos su proceso de separación con agilidad y respeto. Especialistas en liquidación de sociedad conyugal y acuerdos sobre hijos menores.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-100 p-4 rounded-xl text-center">
                  <span className="block font-bold">Mutuo Acuerdo</span>
                  <span className="text-xs text-slate-500 italic text-xs">Trámite Notarial</span>
                </div>
                <div className="bg-slate-100 p-4 rounded-xl text-center">
                  <span className="block font-bold">Contencioso</span>
                  <span className="text-xs text-slate-500 italic text-xs">Trámite Judicial</span>
                </div>
              </div>
            </div>
            <LegalChatbot 
              businessUnit="Divorcio Express" 
              contextMessage="Hola. Entiendo su situación. ¿Necesita información sobre los requisitos para un divorcio de mutuo acuerdo?" 
            />
          </div>
        );

      case AppView.PROTECCION_PATRIMONIAL:
        return (
          <div className="grid lg:grid-cols-2 gap-12 items-start animate-in fade-in duration-500">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold text-sm">
                <Landmark size={18} /> BLINDAJE JURÍDICO
              </div>
              <h2 className="text-4xl font-serif font-bold text-slate-900">Fideicomiso Civil & Sucesiones</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Proteja sus bienes de terceros y asegure su herencia. El Fideicomiso Civil es la herramienta inembargable por excelencia en Colombia.
              </p>
              <div className="p-6 bg-slate-900 text-white rounded-2xl">
                <h4 className="font-bold text-amber-500 mb-2">Fideicomiso Civil:</h4>
                <p className="text-sm text-slate-300 italic text-xs">Haga sus bienes inembargables y evite el costo de una sucesión futura mediante la planeación patrimonial.</p>
              </div>
            </div>
            <LegalChatbot 
              businessUnit="Protección de Bienes" 
              contextMessage="Bienvenido al área de protección. ¿Sabía que el Fideicomiso Civil protege sus propiedades contra embargos?" 
            />
          </div>
        );

      case AppView.MARCAS_PATENTES:
        return (
          <div className="grid lg:grid-cols-2 gap-12 items-start animate-in fade-in duration-500">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-slate-200 text-slate-700 px-4 py-2 rounded-lg font-bold text-sm">
                <ShieldCheck size={18} /> PROPIEDAD INTELECTUAL
              </div>
              <h2 className="text-4xl font-serif font-bold text-slate-900">Registro de Marcas ante la SIC</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Su nombre es su mayor activo. Realizamos el estudio de registrabilidad y la gestión completa ante la Superintendencia de Industria y Comercio.
              </p>
            </div>
            <LegalChatbot 
              businessUnit="Marcas y Patentes" 
              contextMessage="Hola. Proteger su marca es el primer paso del éxito. ¿Ya tiene un nombre definido para realizar la búsqueda?" 
            />
          </div>
        );

      default:
        return <Home onNavigate={setActiveView} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navegación Superior */}
      <nav className="bg-slate-900 text-white p-6 shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveView(AppView.HOME)}>
            <div className="bg-amber-500 p-2 rounded-lg">
               <Scale className="text-slate-900" size={24} />
            </div>
            <span className="font-bold text-2xl tracking-tighter font-serif uppercase">ELITH LEX GROUP</span>
          </div>
          
          {activeView !== AppView.HOME && (
            <button 
              onClick={() => setActiveView(AppView.HOME)}
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest bg-slate-800 px-5 py-3 rounded-full hover:bg-amber-500 hover:text-slate-900 transition-all shadow-lg"
            >
              <ArrowLeft size={14}/> VOLVER AL INICIO
            </button>
          )}
        </div>
      </nav>

      {/* Área de Contenido Principal */}
      <main className="flex-1 max-w-7xl mx-auto p-6 md:p-16 w-full">
        {renderBusinessUnit()}
      </main>

      {/* Footer Minimalista */}
      <footer className="bg-white border-t py-8 text-center text-slate-400 text-[10px] tracking-[0.2em] uppercase">
        © 2025 ELITH LEX GROUP | Consultoría Legal de Alta Gerencia | Colombia
      </footer>
    </div>
  );
};

export default App;
