import React, { useState } from 'react';
import { 
  Scale, ArrowLeft, TrendingDown, HeartOff, 
  Landmark, ShieldCheck, ChevronRight, MessageCircle, Send,
  FileText, Briefcase, Award
} from 'lucide-react';

// --- 1. CONFIGURACIÓN DE VISTAS ---
type View = 'home' | 'creditos' | 'divorcio' | 'proteccion' | 'marcas';

// --- 2. COMPONENTE: EJE DE SERVICIO (CHATBOT + WHATSAPP) ---
const ChatbotEje = ({ unidad, mensaje }: { unidad: string, mensaje: string }) => {
  const [msg, setMsg] = useState('');
  const celular = "573167824217";

  const irAWhatsApp = () => {
    const texto = `Hola Elith Lex Group. Estoy en la sección de ${unidad}. Mi duda es: ${msg || 'Deseo asesoría especializada.'}`;
    window.open(`https://wa.me/${celular}?text=${encodeURIComponent(texto)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col h-[520px] sticky top-24">
      <div className="bg-slate-900 p-5 rounded-t-2xl flex items-center gap-3">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-white font-bold text-sm tracking-tight">LegalBot Elith Lex</span>
      </div>
      <div className="flex-1 p-6 bg-slate-50 overflow-y-auto">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 text-sm text-slate-700 leading-relaxed italic">
          "{mensaje}"
        </div>
      </div>
      <div className="p-5 border-t bg-white space-y-4">
        <input 
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Escriba su consulta técnica..."
          className="w-full p-3 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-amber-500 text-sm"
        />
        <button 
          onClick={irAWhatsApp}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"
        >
          <MessageCircle size={20} /> CONTACTAR ABOGADO
        </button>
      </div>
    </div>
  );
};

// --- 3. COMPONENTE PRINCIPAL (LA ESTRUCTURA) ---
export default function App() {
  const [view, setView] = useState<View>('home');

  // El Dashboard con las 4 unidades
  const Home = () => (
    <div className="space-y-16 animate-in fade-in duration-700">
      <header className="text-center max-w-3xl mx-auto space-y-6 pt-10">
        <h1 className="text-6xl font-serif font-bold text-slate-900 leading-tight">
          ELITH LEX <span className="text-amber-500 underline decoration-1 underline-offset-8">GROUP</span>
        </h1>
        <p className="text-xl text-slate-600 font-light">
          Alta Gerencia Jurídica. Especialistas en optimización financiera y blindaje patrimonial en Colombia.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <div onClick={() => setView('creditos')} className="bg-white p-8 rounded-3xl shadow-sm border-t-8 border-amber-500 hover:shadow-2xl transition-all cursor-pointer group">
          <TrendingDown className="text-amber-600 mb-4" size={40} />
          <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif">Ley de Vivienda</h3>
          <p className="text-slate-500 text-sm">Reducción de créditos hipotecarios y leasing habitacional (Ley 546/99).</p>
        </div>

        <div onClick={() => setView('divorcio')} className="bg-white p-8 rounded-3xl shadow-sm border-t-8 border-red-600 hover:shadow-2xl transition-all cursor-pointer group">
          <HeartOff className="text-red-600 mb-4" size={40} />
          <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif">Divorcio Express</h3>
          <p className="text-slate-500 text-sm">Procesos ágiles de mutuo acuerdo y liquidación de sociedad conyugal.</p>
        </div>

        <div onClick={() => setView('proteccion')} className="bg-white p-8 rounded-3xl shadow-sm border-t-8 border-green-600 hover:shadow-2xl transition-all cursor-pointer group">
          <Landmark className="text-green-600 mb-4" size={40} />
          <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif">Protección de Bienes</h3>
          <p className="text-slate-500 text-sm">Fideicomiso Civil (Blindaje) y Sucesiones Notariales eficientes.</p>
        </div>

        <div onClick={() => setView('marcas')} className="bg-white p-8 rounded-3xl shadow-sm border-t-8 border-slate-900 hover:shadow-2xl transition-all cursor-pointer group">
          <ShieldCheck className="text-slate-900 mb-4" size={40} />
          <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif">Marcas y Patentes</h3>
          <p className="text-slate-500 text-sm">Protección de propiedad intelectual y registros ante la SIC.</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Barra de Navegación */}
      <nav className="bg-slate-900 text-white p-6 sticky top-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setView('home')}>
            <div className="bg-amber-500 p-2 rounded-lg group-hover:rotate-12 transition-transform">
               <Scale className="text-slate-900" size={24} />
            </div>
            <span className="font-bold text-2xl tracking-tighter font-serif uppercase">ELITH LEX GROUP</span>
          </div>
          {view !== 'home' && (
            <button onClick={() => setView('home')} className="flex items-center gap-2 text-[10px] font-black tracking-widest bg-slate-800 px-6 py-3 rounded-full hover:bg-amber-500 hover:text-slate-900 transition-all border border-slate-700">
              <ArrowLeft size={14}/> VOLVER AL INICIO
            </button>
          )}
        </div>
      </nav>

      {/* Contenido Dinámico */}
      <main className="flex-1 max-w-7xl mx-auto p-6 md:p-16 w-full">
        {view === 'home' && <Home />}

        {view === 'creditos' && (
          <div className="grid lg:grid-cols-2 gap-12 animate-in fade-in">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-slate-900 underline decoration-amber-500">Ley de Vivienda</h2>
              <p className="text-slate-600 text-lg">Especialistas en la reducción técnica de créditos hipotecarios y leasing habitacional bajo la Ley 546 de 1999.</p>
              <div className="bg-white p-6 rounded-2xl border-l-8 border-amber-500 shadow-sm">
                <h4 className="font-bold mb-3">Resultados Técnicos:</h4>
                <ul className="space-y-2 text-sm text-slate-600 font-medium">
                  <li>✓ Ahorro de hasta el 40% en intereses totales.</li>
                  <li>✓ Reducción significativa del tiempo (años de deuda).</li>
                  <li>✓ Sin pagar anticipos por el estudio financiero.</li>
                </ul>
              </div>
            </div>
            <ChatbotEje unidad="Ley de Vivienda" mensaje="Hola. Soy su asistente para optimización financiera. ¿Desea que analicemos cuánto tiempo y dinero puede ahorrar en su crédito?" />
          </div>
        )}

        {view === 'divorcio' && (
          <div className="grid lg:grid-cols-2 gap-12 animate-in fade-in">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-slate-900 underline decoration-red-600">Divorcio Express</h2>
              <p className="text-slate-600 text-lg">Soluciones ágiles para procesos de familia. Gestionamos el mutuo acuerdo para evitar desgastes emocionales y económicos.</p>
              <div className="p-5 bg-red-50 text-red-900 rounded-xl border border-red-100">
                <p className="text-sm">✓ Liquidación de sociedad conyugal.</p>
                <p className="text-sm">✓ Acuerdos de custodia y visitas.</p>
                <p className="text-sm">✓ Trámites notariales en tiempo récord.</p>
              </div>
            </div>
            <ChatbotEje unidad="Divorcio Express" mensaje="Hola. Entiendo que busca un proceso de familia eficiente. ¿Desea conocer los requisitos para el mutuo acuerdo?" />
          </div>
        )}

        {view === 'proteccion' && (
          <div className="grid lg:grid-cols-2 gap-12 animate-in fade-in">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-slate-900 underline decoration-green-600">Protección & Sucesiones</h2>
              <p className="text-slate-600 text-lg">Blindamos su patrimonio contra riesgos legales y organizamos su sucesión para proteger a sus herederos.</p>
              <div className="space-y-4 font-bold text-slate-800">
                <div className="p-4 bg-white border rounded-xl shadow-sm">Fideicomiso Civil (Inembargable)</div>
                <div className="p-4 bg-white border rounded-xl shadow-sm">Sucesiones Notariales & Judiciales</div>
              </div>
            </div>
            <ChatbotEje unidad="Protección de Bienes" mensaje="Bienvenido. Soy especialista en blindaje patrimonial. ¿Sabía que puede proteger su casa de embargos legalmente?" />
          </div>
        )}

        {view === 'marcas' && (
          <div className="grid lg:grid-cols-2 gap-12 animate-in fade-in">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-slate-900 underline decoration-slate-900">Marcas y Patentes</h2>
              <p className="text-slate-600 text-lg">Protegemos su identidad corporativa. Gestión profesional ante la Superintendencia de Industria y Comercio (SIC).</p>
            </div>
            <ChatbotEje unidad="Marcas y Patentes" mensaje="Hola. El activo más valioso de su empresa es su marca. ¿Desea que realicemos la búsqueda de antecedentes?" />
          </div>
        )}
      </main>

      <footer className="py-10 text-center text-slate-400 text-[10px] uppercase tracking-[0.4em] border-t bg-white">
        © 2025 ELITH LEX GROUP | Excelencia Legal en Colombia
      </footer>
    </div>
  );
}
