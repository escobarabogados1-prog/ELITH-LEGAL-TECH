import React, { useState } from 'react';
import { Scale, MessageSquare, Home, FileText, ChevronRight, Send, ShieldCheck } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showChat, setShowChat] = useState(false);

  // Secciones reales de tu arquitectura
  const renderContent = () => {
    switch(activeTab) {
      case 'vivienda':
        return (
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-amber-500">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Home /> Registro de Vivienda</h2>
            <p className="mb-6 text-slate-600">Complete los datos para la gestión de su propiedad.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Dirección del inmueble" className="w-full p-3 border rounded-lg" />
              <input type="text" placeholder="Número de Matrícula" className="w-full p-3 border rounded-lg" />
              <button className="bg-slate-900 text-white px-6 py-2 rounded-lg font-bold">Enviar Trámite</button>
            </form>
          </div>
        );
      case 'divorcio':
        return (
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-500">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><FileText /> Divorcio Express</h2>
            <p className="mb-6 text-slate-600">Inicie su proceso de mutuo acuerdo de forma rápida.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded hover:bg-slate-50 cursor-pointer">Con hijos menores</div>
              <div className="p-4 border rounded hover:bg-slate-50 cursor-pointer">Sin hijos / Liquidación de bienes</div>
            </div>
          </div>
        );
      default:
        return (
          <div className="grid md:grid-cols-2 gap-8">
            <div onClick={() => setActiveTab('vivienda')} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-amber-500 cursor-pointer transition-all">
              <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center text-amber-600 mb-6"><Home /></div>
              <h3 className="text-xl font-bold mb-2">Trámites de Vivienda</h3>
              <p className="text-slate-500">Registro, escrituración y saneamiento de propiedades.</p>
            </div>
            <div onClick={() => setActiveTab('divorcio')} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-red-500 cursor-pointer transition-all">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center text-red-600 mb-6"><FileText /></div>
              <h3 className="text-xl font-bold mb-2">Divorcio Express</h3>
              <p className="text-slate-500">Asesoría rápida para procesos de mutuo acuerdo.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <nav className="bg-slate-900 text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
            <Scale className="text-amber-500" />
            <span className="font-bold text-xl tracking-tight">ELITH LEX GROUP</span>
          </div>
          <button onClick={() => setShowChat(true)} className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-4 py-2 rounded-full font-bold flex items-center gap-2 text-sm transition-all">
            <MessageSquare size={18} /> Consultar con IA
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-8">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Oficina Virtual</h1>
          <p className="text-slate-500 italic">Gestión legal inteligente y eficiente</p>
        </header>

        {renderContent()}
      </main>

      {/* Chatbot Modal */}
      {showChat && (
        <div className="fixed bottom-6 right-6 w-96 bg-white shadow-2xl rounded-2xl border border-slate-200 z-50 overflow-hidden">
          <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2"><ShieldCheck className="text-amber-500" /> <span>LegalBot v1.0</span></div>
            <button onClick={() => setShowChat(false)} className="hover:text-amber-500">✕</button>
          </div>
          <div className="h-80 p-4 overflow-y-auto bg-slate-50 text-sm italic text-slate-400">
            Hola, soy tu asistente legal. ¿En qué puedo ayudarte hoy?
          </div>
          <div className="p-4 border-t flex gap-2">
            <input type="text" placeholder="Escribe tu duda legal..." className="flex-1 p-2 border rounded-lg outline-none focus:border-amber-500" />
            <button className="bg-amber-500 p-2 rounded-lg"><Send size={18} /></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
