import React from 'react';
import { AppView } from './types';
import { Scale, ChevronRight, ShieldCheck, TrendingDown } from 'lucide-react';

const Home = ({ onNavigate }: { onNavigate: (view: AppView) => void }) => {
  return (
    <div className="space-y-12">
      {/* Sección Quiénes Somos */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-4xl font-serif font-bold text-slate-900">ELITH LEX GROUP</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Somos un bufete jurídico especializado en la optimización de recursos legales y financieros. 
          Nuestra misión es proteger su patrimonio y resolver sus conflictos familiares con eficiencia y discreción.
        </p>
      </section>

      {/* Unidades de Negocio */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Unidad 1: Vivienda */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-amber-500 hover:scale-105 transition-transform">
          <TrendingDown className="text-amber-600 mb-4" size={40} />
          <h3 className="text-xl font-bold mb-2">Ley de Vivienda</h3>
          <p className="text-slate-500 text-sm mb-6">
            Reducción de créditos hipotecarios y leasing habitacional. Ahorre años de intereses y reduzca su cuota mensual.
          </p>
          <button onClick={() => onNavigate(AppView.CREDITOS_VIVIENDA)} className="flex items-center text-amber-600 font-bold hover:gap-2 transition-all">
            Ver Beneficios <ChevronRight size={20} />
          </button>
        </div>

        {/* Unidad 2: Divorcios */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-blue-600 hover:scale-105 transition-transform">
          <Scale className="text-blue-600 mb-4" size={40} />
          <h3 className="text-xl font-bold mb-2">Divorcio Express</h3>
          <p className="text-slate-500 text-sm mb-6">
            Gestión de mutuo acuerdo con o sin hijos/bienes. Asesoría integral en procesos contenciosos.
          </p>
          <button onClick={() => onNavigate(AppView.DIVORCIO)} className="flex items-center text-blue-600 font-bold hover:gap-2 transition-all">
            Consultar Casos <ChevronRight size={20} />
          </button>
        </div>

        {/* Unidad 3: Marcas */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-slate-900 hover:scale-105 transition-transform">
          <ShieldCheck className="text-slate-900 mb-4" size={40} />
          <h3 className="text-xl font-bold mb-2">Marcas y Patentes</h3>
          <p className="text-slate-500 text-sm mb-6">
            Protección de propiedad intelectual. Registro de marcas ante la SIC y defensa de derechos de autor.
          </p>
          <button onClick={() => onNavigate(AppView.MARCAS_PATENTES)} className="flex items-center text-slate-900 font-bold hover:gap-2 transition-all">
            Proteger Marca <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
