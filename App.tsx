import React, { useState } from 'react';
import { 
  Scale, 
  ShieldCheck, 
  FileText, 
  Users, 
  MessageSquare, 
  Gavel, 
  Home, 
  Briefcase,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { title: 'Derecho Civil', icon: <Home className="w-6 h-6" />, desc: 'Vivienda, contratos y sucesiones.' },
    { title: 'Derecho Laboral', icon: <Briefcase className="w-6 h-6" />, desc: 'Despidos, pensiones y riesgos.' },
    { title: 'Derecho de Familia', icon: <Users className="w-6 h-6" />, desc: 'Divorcios y custodia.' },
    { title: 'Asesoría Penal', icon: <Gavel className="w-6 h-6" />, desc: 'Defensa técnica especializada.' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar - Menú Lateral */}
      <aside className={`bg-slate-900 text-white w-64 fixed h-full transition-transform duration-300 z-50 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <Scale className="text-amber-500 w-8 h-8" />
            <span className="text-xl font-bold tracking-wider">ELITH LEX</span>
          </div>
          <nav className="space-y-4">
            <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-amber-500 transition-colors">
              <ShieldCheck className="w-5 h-5" /> Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-amber-500 transition-colors">
              <FileText className="w-5 h-5" /> Expedientes
            </a>
            <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-amber-500 transition-colors">
              <MessageSquare className="w-5 h-5" /> Consultas IA
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8">
        <header className="flex justify-between items-center mb-12">
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
          <h1 className="text-3xl font-bold text-slate-800">Bienvenido a Elith Lex Group</h1>
          <div className="bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-semibold">
            Socio Premium
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-amber-600 mb-4">{service.icon}</div>
              <h3 className="font-bold text-slate-800 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-500 mb-4">{service.desc}</p>
              <button className="text-amber-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                Consultar <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">¿Necesitas asistencia legal inmediata?</h2>
            <p className="text-slate-400">Nuestra IA y abogados expertos están listos para ayudarte 24/7.</p>
          </div>
          <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors">
            Iniciar Chat Legal
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
