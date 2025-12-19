import React from 'react';
import { Home, HeartOff, Bot } from 'lucide-react';
import { AppView } from './types';

const Dashboard = ({ onNavigate }: { onNavigate: (view: AppView) => void }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div onClick={() => onNavigate(AppView.HOUSING_ANALYSIS)} className="bg-white p-6 rounded-2xl shadow-sm border hover:border-amber-500 cursor-pointer transition-all">
      <Home className="text-amber-500 mb-4" size={32} />
      <h3 className="font-bold text-lg text-slate-800">Vivienda</h3>
      <p className="text-slate-500 text-sm">Registro y saneamiento legal de propiedades.</p>
    </div>
    <div onClick={() => onNavigate(AppView.DIVORCE_ONLINE)} className="bg-white p-6 rounded-2xl shadow-sm border hover:border-red-500 cursor-pointer transition-all">
      <HeartOff className="text-red-500 mb-4" size={32} />
      <h3 className="font-bold text-lg text-slate-800">Divorcio Express</h3>
      <p className="text-slate-500 text-sm">Procesos de mutuo acuerdo 100% online.</p>
    </div>
    <div onClick={() => onNavigate(AppView.SALES_CHATBOT)} className="bg-white p-6 rounded-2xl shadow-sm border hover:border-blue-500 cursor-pointer transition-all">
      <Bot className="text-blue-500 mb-4" size={32} />
      <h3 className="font-bold text-lg text-slate-800">Asistente IA</h3>
      <p className="text-slate-500 text-sm">Consultoría legal con inteligencia artificial.</p>
    </div>
  </div>
);

export default Dashboard;
