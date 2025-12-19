import React, { useState } from 'react';

export default function App() {
  const [view, setView] = useState('home');

  const btnStyle = "w-full bg-emerald-600 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-lg hover:bg-emerald-700 transition-all text-center";
  const cardStyle = "p-8 border rounded-[2.5rem] hover:shadow-xl transition-all cursor-pointer text-left space-y-4 bg-white border-slate-100";

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 font-sans">
      
      {/* NAVBAR */}
      <nav className="border-b p-4 sticky top-0 bg-white/80 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
            <span className="font-black text-lg tracking-tighter italic uppercase border-b-2 border-emerald-500">ELITH LEX GROUP</span>
          </div>
          <button onClick={() => setView('pago')} className="bg-black text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">PAGAR</button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto p-6 md:p-12">
        
        {view === 'home' && (
          <div className="space-y-16">
            <header className="text-center space-y-6 py-10">
              <div className="inline-block bg-slate-100 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-500">Trayectoria Jurídica +10 Años</div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic leading-none">Justicia <br/><span className="text-emerald-500 text-7xl md:text-[8rem]">Digital.</span></h1>
              <p className="max-w-xl mx-auto text-lg text-slate-400 italic font-light leading-relaxed">Divorcios, Reducción de Créditos y Marcas. <br/>Desde cualquier lugar del mundo.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div onClick={() => setView('divorcio')} className={cardStyle}>
                <div className="text-3xl">⚖️</div>
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Divorcio Express</h3>
                <p className="text-slate-500 text-sm italic">Rápido, económico y seguro. 100% digital para trámites internacionales.</p>
              </div>
              <div onClick={() => setView('creditos')} className={cardStyle}>
                <div className="text-3xl">📉</div>
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Ley de Vivienda</h3>
                <p className="text-slate-500 text-sm italic">Reducción de intereses hipotecarios. Gestión al éxito (No ahorra, no paga).</p>
              </div>
              <div onClick={() => setView('proteccion')} className={cardStyle}>
                <div className="text-3xl">🛡️</div>
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Fideicomiso Civil</h3>
                <p className="text-slate-500 text-sm italic">Blindaje patrimonial absoluto. Proteja sus bienes contra embargos.</p>
              </div>
              <div onClick={() => setView('marcas')} className={cardStyle}>
                <div className="text-3xl">®️</div>
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Marcas & Patentes</h3>
                <p className="text-slate-500 text-sm italic">Registro ante la SIC en 10 min. Vigilancia legal por 10 años.</p>
              </div>
            </div>
          </div>
        )}

        {view === 'divorcio' && (
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div className="md:col-span-2 space-y-8">
              <button onClick={() => setView('home')} className="text-[10px] font-black uppercase text-slate-400">← VOLVER</button>
              <h2 className="text-5xl font-black italic uppercase">Divorcio <span className="text-emerald-500 underline">Express</span></h2>
              <div className="space-y-4">
                <p className="font-black uppercase text-[10px] text-slate-400 italic">Documentos Requeridos:</p>
                <div className="grid grid-cols-1 gap-2">
                  {["Poder Autenticado", "Registro Civil Matrimonio", "Registros de Nacimiento", "Cédulas", "Certificados de Tradición", "Acuerdo de Alimentos"].map((d,i) => (
                    <div key={i} className="p-3 bg-white border border-slate-100 rounded-xl text-[11px] font-bold italic text-slate-600">✓ {d}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-12 space-y-4">
              <div className="p-8 border-2 border-emerald-500 rounded-[2.5rem] bg-white shadow-xl space-y-6">
                <p className="text-center font-black italic text-4xl">$1.200.000 <span className="text-xs uppercase font-normal">cop</span></p>
                <button onClick={() => setView('pago')} className={btnStyle}>PAGAR HONORARIOS</button>
                <button onClick={() => setView('carga-docs')} className="w-full bg-black text-white py-4 rounded-2xl font-black uppercase text-[10px]">RADICAR DOCUMENTOS</button>
              </div>
            </div>
          </div>
        )}

        {view === 'pago' && (
          <div className="max-w-lg mx-auto p-12 border-2 border-emerald-500 rounded-[4rem] bg-white shadow-2xl text-center space-y-10">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter">Pagos Elith Lex</h2>
            <div className="space-y-4">
               <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase text-xs shadow-lg">PSE / MERCADO PAGO</button>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-slate-50 rounded-2xl text-left border border-slate-100">
                  <p className="text-[9px] font-black text-slate-400 mb-1 uppercase tracking-widest italic">Nequi / Daviplata</p>
                  <p className="text-lg font-black italic">313 292 2973</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl text-left border border-slate-100">
                  <p className="text-[9px] font-black text-slate-400 mb-1 uppercase tracking-widest italic">Llave Breve</p>
                  <p className="text-lg font-black italic">79396055</p>
                </div>
              </div>
            </div>
            <button onClick={() => setView('carga-docs')} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600">Ya pagué, cargar expediente</button>
          </div>
        )}

        {view === 'carga-docs' && (
          <div className="max-w-2xl mx-auto p-12 border-4 border-dashed border-slate-100 rounded-[4rem] text-center space-y-8">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">Radicación <span className="text-emerald-500">Digital</span></h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-12 bg-slate-50 rounded-3xl border border-slate-100 italic">
                <p className="text-2xl font-black">📄</p>
                <span className="text-[10px] font-black uppercase">Expediente</span>
              </div>
              <div className="p-12 bg-slate-50 rounded-3xl border border-slate-100 italic">
                <p className="text-2xl font-black">💳</p>
                <span className="text-[10px] font-black uppercase">Soporte Pago</span>
              </div>
            </div>
            <button onClick={() => alert("Documentos enviados satisfactoriamente.")} className={btnStyle}>FINALIZAR ENVÍO</button>
          </div>
        )}

      </main>

      <footer className="py-20 opacity-30 text-[9px] font-black uppercase tracking-[0.4em] italic text-center">
        © 2025 Elith Lex Group · Abogados Especialistas · WhatsApp 3132922973
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a href="https://wa.me/573132922973" target="_blank" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform">
        <span className="text-2xl">📱</span>
      </a>
    </div>
  );
}
