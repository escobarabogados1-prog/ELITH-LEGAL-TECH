// ... (resto del código anterior se mantiene igual) ...

{view === 'pago' && (
  <div className="max-w-2xl mx-auto animate-in zoom-in duration-300 space-y-8">
    <div className="bg-white p-10 rounded-[3rem] shadow-2xl border-2 border-emerald-500 text-center space-y-8">
      <h2 className="text-4xl font-black uppercase italic tracking-tighter">Concretar <span className="text-emerald-500">Negocio</span></h2>
      
      {/* OPCIÓN 1: AUTOMÁTICA (MERCADO PAGO / PSE) */}
      <div className="space-y-4">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Pago Automático (Recomendado)</p>
        <button 
          onClick={() => window.open("TU_LINK_DE_MERCADO_PAGO_AQUI", "_blank")}
          className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3"
        >
          <CreditCard size={18}/> Pagar con PSE, Tarjeta o Efecty
        </button>
      </div>

      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-200"></span></div>
        <div className="relative flex justify-center text-[10px] uppercase font-bold text-slate-400"><span className="bg-white px-4 tracking-widest text-slate-400">O Transferencia Directa</span></div>
      </div>

      {/* OPCIÓN 2: MANUAL (NEQUI, DAVIPLATA, BREVE) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-left">
          <p className="text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Nequi / Daviplata</p>
          <p className="text-lg font-black text-slate-800">313 292 2973</p>
        </div>
        
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-left">
          <p className="text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Llave Breve</p>
          <p className="text-lg font-black text-slate-800">79396055</p>
        </div>
      </div>

      <div className="pt-6 border-t border-slate-100">
        <button 
          onClick={() => setView('carga-docs')} 
          className="w-full bg-slate-900 text-white py-4 rounded-xl font-black uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all"
        >
          Ya pagué, cargar documentos <CheckCircle size={16}/>
        </button>
      </div>
    </div>
  </div>
)}

// ... (resto del código de carga de archivos) ...
