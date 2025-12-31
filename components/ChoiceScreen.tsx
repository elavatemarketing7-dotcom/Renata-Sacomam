
import React from 'react';
import { IMAGES } from '../constants';
import { Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

interface ChoiceScreenProps {
  onDirect: () => void;
  onQuiz: () => void;
}

const ChoiceScreen: React.FC<ChoiceScreenProps> = ({ onDirect, onQuiz }) => {
  return (
    <div className="relative min-h-screen w-full bg-luxury-white flex flex-col lg:flex-row overflow-hidden">
      
      {/* 1. SEÇÃO DE IMAGEM EDITORIAL - Compactada no Mobile */}
      <div className="relative h-[50vh] lg:h-screen lg:w-[55%] w-full overflow-hidden bg-white">
        <img 
          src={IMAGES.EXPERT_HERO} 
          alt="Dra. Renata Sacomam" 
          className="w-full h-full object-cover object-top lg:object-[center_15%] scale-100 animate-in fade-in duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-white via-transparent to-white/10 lg:bg-gradient-to-r lg:from-transparent lg:to-luxury-white"></div>
        
        <div className="absolute bottom-6 lg:bottom-20 left-0 w-full lg:text-left lg:px-20 text-center z-20 px-6">
           <p className="font-signature text-5xl lg:text-9xl text-premium-gold drop-shadow-sm animate-in slide-in-from-bottom-4 duration-700 delay-300">
             Renata Sacomam
           </p>
           <p className="hidden lg:block text-black text-[10px] font-black tracking-[0.8em] uppercase mt-4 opacity-70">Harmonização Facial Premium</p>
        </div>
      </div>

      {/* 2. PAINEL DE CONTROLE - Compactado no Mobile */}
      <div className="relative z-10 flex-grow lg:w-[45%] bg-luxury-white px-6 pt-2 pb-10 lg:px-16 lg:py-0 flex flex-col items-center justify-center text-center animate-in slide-in-from-bottom-12 lg:slide-in-from-right-12 duration-1000">
        
        <div className="space-y-5 lg:space-y-10 w-full max-w-sm">
          <div className="space-y-2 lg:space-y-5">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck size={14} className="text-premium-gold" />
              <span className="text-[9px] lg:text-xs font-black tracking-[0.3em] uppercase text-black/50">Resultados Naturais</span>
            </div>
            <h1 className="text-2xl lg:text-5xl font-serif text-black leading-tight">
              A jornada para sua <br className="hidden sm:block"/>
              <span className="text-premium-gold italic">melhor versão.</span>
            </h1>
            <p className="text-neutral-500 text-[11px] lg:text-sm font-medium">Inicie seu diagnóstico ou acesse o site oficial.</p>
          </div>

          <div className="w-full space-y-3 lg:space-y-4">
            <button 
              onClick={onQuiz}
              className="group relative w-full bg-premium-gold text-white py-4 lg:py-7 rounded-2xl font-black text-xs lg:text-base tracking-widest uppercase flex items-center justify-center gap-3 overflow-hidden transition-all active:scale-95 shadow-xl shadow-premium-gold/20"
            >
              <span className="relative z-10">INICIAR DIAGNÓSTICO DIGITAL</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>

            <button 
              onClick={onDirect}
              className="flex items-center justify-center gap-2 w-full py-3 text-black/40 hover:text-premium-gold transition-all group"
            >
              <Sparkles size={12} className="text-premium-gold" />
              <span className="text-[9px] lg:text-xs font-bold tracking-[0.3em] uppercase">Ir direto para o site</span>
            </button>
          </div>
        </div>

        <div className="mt-6 lg:mt-20 opacity-40 lg:opacity-100">
          <p className="text-[8px] lg:text-[11px] font-black tracking-[0.4em] uppercase text-black/30 italic">Caarapó • MS</p>
        </div>
      </div>
    </div>
  );
};

export default ChoiceScreen;
