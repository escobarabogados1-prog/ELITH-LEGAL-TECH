import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

interface ChatbotProps {
  businessUnit: string;
  contextMessage: string;
}

const LegalChatbot: React.FC<ChatbotProps> = ({ businessUnit, contextMessage }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', content: contextMessage }
  ]);

  // Formato internacional correcto para Colombia: 57 + Celular
  const phoneNumber = "573167824217"; 

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = { role: 'user', content: input };
    setMessages([...messages, userMsg]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        content: `Gracias por consultar sobre ${businessUnit}. He recibido su mensaje. Para una respuesta técnica inmediata de nuestro bufete, presione el botón verde de WhatsApp.` 
      }]);
    }, 1000);
    
    setInput('');
  };

  const openWhatsApp = () => {
    // El texto que recibirás en tu celular para saber de dónde viene el cliente
    const text = `Hola Elith Lex Group, solicito asesoría en ${businessUnit}. Consulta: ${input || 'Deseo más información.'}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col h-[550px]">
      <div className="bg-slate-900 p-5 rounded-t-2xl">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <div>
            <span className="text-white font-bold block text-sm">Soporte Legal Elith Lex</span>
            <span className="text-amber-500 text-[10px] uppercase font-black tracking-widest">{businessUnit}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${
              m.role === 'user' 
                ? 'bg-amber-500 text-white rounded-tr-none' 
                : 'bg-white text-slate-800 border shadow-sm rounded-tl-none'
            }`}>
              {m.content}
            </div>
          </div>
        ))}
      </div>

      <div className="p-5 border-t bg-white rounded-b-2xl space-y-4">
        <div className="flex gap-2">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escriba su duda legal..."
            className="flex-1 p-3 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-amber-500 transition-all"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend} className="bg-slate-900 text-white p-3 rounded-xl hover:bg-amber-500 transition-colors">
            <Send size={20}/>
          </button>
        </div>
        
        <button 
          onClick={openWhatsApp}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg"
        >
          <MessageCircle size={22} /> Contactar Abogado en WhatsApp
        </button>
      </div>
    </div>
  );
};

export default LegalChatbot;
