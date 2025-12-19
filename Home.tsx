import React from 'react';
import { AppView } from './types';
import { TrendingDown, HeartOff, Landmark, ShieldCheck, Scale, ChevronRight, FileText } from 'lucide-react';

const Home = ({ onNavigate }: { onNavigate: (view: AppView) => void }) => {
  const units = [
    {
      id: AppView.CREDITOS_VIVIENDA,
      title: 'Reducción de Créditos',
      subtitle: 'Ley de Vivienda & Leasing',
      icon: <TrendingDown className="text-amber-600" size={32} />,
      desc: 'Optimización financiera para reducir años de intereses en su crédito hipotecario.',
      color: 'border-amber-500'
    },
    {
      id: AppView.DIVORCIO,
      title: 'Divorcio Express',
      subtitle: 'Derecho de Familia',
      icon: <HeartOff className="text-red-600" size={32} />,
      desc: 'Procesos ágiles de mutuo acuerdo (notarial) o contenciosos (judicial).',
      color: 'border-red-600'
    },
    {
      id: AppView.PROTECCION_PATRIMONIAL,
      title: 'Protección de Bienes',
      subtitle: 'Fideicomiso Civil & Sucesiones',
      icon: <Landmark className="text-green-600" size={32} />,
      desc: 'Blindaje patrimonial inembargable y planeación sucesoral efectiva.',
      color: 'border-green-600'
    },
    {
      id: AppView.MARCAS_PATENTES,
      title: 'Marcas y Patentes',
      subtitle: 'Propiedad Intelectual',
      icon: <ShieldCheck className="text-slate-900" size={32} />,
      desc: 'Protección legal de signos distintivos e invenciones ante la SIC.',
      color: 'border-slate-900'
    }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      {/* Hero Section: Quiénes Somos */}
      <section className="text-center max-w-4xl mx-auto space-y-6 pt-8">
        <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          Expertos en Soluciones Legales
        </div>
        <h2 className="text-5xl font-serif font-bold text-slate-900 tracking-tight">
          ELITH LEX <span className="text-amber-500">GROUP</span>
        </h2>
        <p className="text-xl text-slate-600 leading-relaxed font-light">
          Unidades de negocio especializadas en el blindaje de su patrimonio, 
          optimización financiera y representación jurídica de alta gerencia.
        </p>
      </section>

      {/* Grid de Unidades de Negocio */}
      <div className="grid md:grid-cols-2 gap-8">
        {units.map((unit) => (
          <div 
            key={unit.id}
            onClick={() => onNavigate(unit.id)}
            className={`bg-white p-8 rounded-2xl shadow-sm border-t-8 ${unit.color} hover:shadow-2xl transition-all cursor-pointer group relative overflow-hidden`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-white transition-colors shadow-inner">
                {unit.icon}
              </div>
              <ChevronRight className="text-slate-300 group-hover:text-slate-900 transition-transform group-hover:translate-x-1" />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{unit.subtitle}</span>
              <h3 className="text-2xl font-bold text-slate-900">{unit.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{unit.desc}</p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-xs font-bold text-slate-800">
              EXPLORAR UNIDAD <div className="h-px w-8 bg-slate-800"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
