
import React from 'react';
import { IMAGES, WHATSAPP_URL } from '../constants';
import { QuizResult } from '../types';
import { Send, MessageCircle, Star, ArrowRight } from 'lucide-react';

interface ResultPageProps {
  answers: QuizResult;
  onGoToSite: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ answers, onGoToSite }) => {
  const formatAnswersForWhatsApp = () => {
    let text = "Olá Dra. Renata! Concluí minha avaliação no site e o meu Perfil é COMPATÍVEL.\n\nMinhas respostas:\n";
    Object.entries(answers).forEach(([id, answer]) => {
      text += `• ${answer}\n`;
    });
    return encodeURIComponent(text);
  };

  return (
    <div className="relative min-h-screen bg-white text-black flex flex-col items-center overflow-x-hidden">
      
      {/* HEADER RESULTADO */}
      <div className="relative w-full h-[32vh] lg:h-[40vh] overflow-hidden bg-luxury-white">
        <img src={IMAGES.EXPERT_BIO} alt="Dra. Renata" className="w-full h-full object-cover object-[center_15%] animate-in fade-in duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/20"></div>
        
        <div className="absolute bottom-6 left-0 w-full flex justify-center px-4">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black text-premium-gold rounded-full shadow-xl border border-premium-gold/30">
             <Star size={12} className="fill-premium-gold" />
             <span className="text-[9px] font-black uppercase tracking-[0.3em]">Perfil Compatível Identificado</span>
           </div>
        </div>
      </div>

      {/* CONTEÚDO COMPACTADO MOBILE-FIRST */}
      <div className="relative z-10 -mt-4 w-full max-w-[380px] lg:max-w-md px-4 flex-grow pb-10">
        <div className="bg-white border border-premium-gold/20 p-6 lg:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(212,175,55,0.1)] text-center flex flex-col gap-6">
          
          <div className="space-y-3">
            <h1 className="text-2xl lg:text-3xl font-serif leading-tight">
              Perfil Compatível.<br/>
              <span className="text-premium-gold italic">Você é a Paciente ideal.</span>
            </h1>
            <p className="text-neutral-500 text-xs lg:text-sm leading-relaxed px-2 font-medium">
              Com base nas suas respostas, o Método da <span className="font-bold text-black">Dra. Renata Sacomam</span> consegue entregar exatamente a naturalidade e segurança que você procura.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {/* BOTÃO 1: ENVIAR AVALIAÇÃO */}
            <a 
              href={`${WHATSAPP_URL}?text=${formatAnswersForWhatsApp()}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4.5 bg-premium-gold text-white font-black text-xs lg:text-sm rounded-2xl shadow-lg shadow-premium-gold/20 hover:scale-[1.02] transition-all active:scale-95"
            >
              <Send size={18} />
              1 - ENVIAR MINHA AVALIAÇÃO DRA.
            </a>
            
            {/* BOTÃO 2: CHAMAR NO WHATSAPP SEM COMPROMISSO */}
            <a 
              href={WHATSAPP_URL}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-luxury-white border border-premium-gold/30 text-premium-gold font-bold text-[11px] lg:text-xs rounded-2xl hover:bg-white transition-all"
            >
              <MessageCircle size={16} />
              2 - CHAMAR NO WHATSAPP SEM COMPROMISSO
            </a>

            {/* BOTÃO 3: NÃO ENVIAR E CONTINUAR NO SITE */}
            <button 
              onClick={onGoToSite} 
              className="flex items-center justify-center gap-2 w-full py-4 bg-neutral-100 text-neutral-500 font-bold text-[10px] lg:text-[11px] rounded-2xl hover:bg-neutral-200 transition-all uppercase tracking-widest"
            >
              3 - NÃO ENVIAR E CONTINUAR NO SITE
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        <div className="mt-8 text-center space-y-1">
           <p className="font-signature text-3xl text-premium-gold">Renata Sacomam</p>
           <p className="text-[8px] tracking-[0.4em] uppercase text-black/20 font-black">Excelência Médica Individualizada</p>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
