import React, { useState } from 'react';
import { LayoutDashboard, Gavel, Home, HeartOff, Building2, ShieldAlert, Bot, Menu, ChevronRight, Send } from 'lucide-react';

// --- DEFINICIONES TÉCNICAS (TYPES) ---
enum AppView {
  DASHBOARD = 'dashboard',
  SALES_CHATBOT = 'chatbot',
  CORPORATE = 'corporate',
  HOUSING_ANALYSIS = 'housing',
  DIVORCE_ONLINE = 'divorce',
  ASSET_PROTECTION = 'asset',
  SUCCESS = 'success'
}

interface SubmissionContext {
  serviceName: string;
}

// --- COMPONENTE: DIVORCIO EXPRESS ---
const DivorcioExpressOnLine = ({ onSuccess }: { onSuccess: (ctx: string) => void }) => (
  <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-red-500">
    <h2 className="text-2xl font-bold mb-4">Divorcio Express On-line</h2>
    <p className="text-slate-600 mb-6">Inicie su proceso de mutuo acuerdo de forma segura.</p>
    <button onClick={() => onSuccess('Divorcio Express')} className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold">Iniciar Solicitud</button>
  </div>
);

// --- COMPONENTE: VIVIENDA ---
const ViviendaForm = ({ onSuccess }: { onSuccess: (ctx: string) => void }) => (
  <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-amber-500">
    <h2 className="text-2xl font-bold mb-4">Análisis de Vivienda</h2>
    <p className="text-slate-600 mb-6">Gestión de escrituración y saneamiento legal.</p>
    <button onClick={() => onSuccess('Vivienda')} className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold">Enviar Datos</button>
  </div>
);

// --- COMPONENTE: DASHBOARD PRINCIPAL ---
const Dashboard = ({ onNavigate }: { onNavigate: (view: AppView) => void }) => (
  <div className="space-y-8">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div onClick={() => onNavigate(AppView.HOUSING_ANALYSIS)} className="bg-white p-6 rounded-2xl shadow-sm border hover:border-amber-500 cursor-pointer transition-all">
        <Home className="text-amber-500 mb-4" size={32} />
        <h3 className="font-bold text-lg">Vivienda</h3>
        <p className="text-slate-500 text-sm">Registro y saneamiento legal.</p>
      </div>
      <div onClick={() => onNavigate(AppView.DIVORCE_ONLINE)} className="bg-white p-6 rounded-2xl shadow-sm border hover:border-red-500 cursor-pointer transition-all">
        <HeartOff className="text-red-500 mb-4" size={32} />
        <h3 className="font-bold text-lg">Divorcio Express</h3>
        <p className="text-slate-500 text-sm">Mutuo acuerdo 100% online.</p>
      </div>
      <div onClick={() => onNavigate(AppView.SALES_CHATBOT)} className="bg-white p-6 rounded-2xl shadow-sm border hover:border-blue-500 cursor-pointer transition-all">
        <Bot className="text-blue-500 mb-4" size={32} />
        <h3 className="font-bold text-lg">Asistente IA</h3>
        <p className="text-slate-500 text-sm">Consultoría legal inmediata.</p>
      </div>
    </div>
  </div>
);

// --- COMPONENTE: PANTALLA DE ÉXITO ---
const SuccessScreen = ({ context, onReturn }: { context: SubmissionContext, onReturn: () => void }) => (
  <div className="text-center py-12">
    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
      <ShieldAlert className="text-green-600" size={40} />
    </div>
    <h2 className="text-3xl font-bold mb-2">¡Solicitud Recibida!</h2>
    <p className="text-slate-500 mb-8">Su trámite de <strong>{context.serviceName}</strong> ha sido enviado al bufete.</p>
    <button onClick={onReturn} className="bg-slate-900 text-white px-8 py-3 rounded-xl">Volver al Inicio</button>
  </div>
);

// --- COMPONENTE PRINCIPAL (APP) ---
const App: React.FC = () => {
  const [activeView, setActiveView] = useState<AppView>(AppView.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<SubmissionContext | null>(null);

  const handleSuccess = (context: string | SubmissionContext) => {
    const ctx = typeof context === 'string' ? { serviceName: context } : context;
    setLastSubmission(ctx);
    setActiveView(AppView.SUCCESS);
  };

  const renderView = () => {
    switch (activeView) {
      case AppView.DASHBOARD: return <Dashboard onNavigate={setActiveView} />;
      case AppView.HOUSING_ANALYSIS: return <ViviendaForm onSuccess={handleSuccess} />;
      case AppView.DIVORCE_ONLINE: return <DivorcioExpressOnLine onSuccess={handleSuccess} />;
      case AppView.SUCCESS: return <SuccessScreen context={lastSubmission!} onReturn={() => setActiveView(AppView.DASHBOARD)} />;
      default: return <Dashboard onNavigate={setActiveView} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex items-center gap-3">
          <Gavel className="text-amber-500" />
          <h1 className="text-xl font-bold font-serif uppercase tracking-tight">Elith <span className="text-amber-500">Lex</span></h1>
        </div>
        <nav className="px-4 space-y-2">
          <button onClick={() => {setActiveView(AppView.DASHBOARD); setIsSidebarOpen(false);}} className="w-full flex items-center gap-3 p-3 hover:bg-slate-800 rounded-xl transition-colors"><LayoutDashboard size={20}/> Inicio</button>
          <button onClick={() => {setActiveView(AppView.HOUSING_ANALYSIS); setIsSidebarOpen(false);}} className="w-full flex items-center gap-3 p-3 hover:bg-slate-800 rounded-xl transition-colors"><Home size={20}/> Vivienda</button>
          <button onClick={() => {setActiveView(AppView.DIVORCE_ONLINE); setIsSidebarOpen(false);}} className="w-full flex items-center gap-3 p-3 hover:bg-slate-800 rounded-xl transition-colors"><HeartOff size={20}/> Divorcios</button>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b flex items-center px-6 justify-between shadow-sm">
          <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 text-slate-600"><Menu /></button>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400">STATUS: BUFETE ACTIVO</span>
            <div className="h-8 w-8 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 font-bold text-xs shadow-inner">EL</div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;
