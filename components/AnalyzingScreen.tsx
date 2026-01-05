
import React, { useState, useEffect } from 'react';
import { IMAGES } from '../constants';

interface AnalyzingScreenProps {
  onComplete: () => void;
}

const AnalyzingScreen: React.FC<AnalyzingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Analisando respostas...");

  useEffect(() => {
    const statuses = [
      "Analisando respostas...",
      "Processando traços faciais...",
      "Consultando protocolos de naturalidade...",
      "Finalizando diagnóstico digital..."
    ];
    
    let currentStatusIndex = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + (Math.random() * 12 + 5);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return 100;
        }
        
        const statusIdx = Math.floor((next / 100) * statuses.length);
        if (statusIdx !== currentStatusIndex && statusIdx < statuses.length) {
          currentStatusIndex = statusIdx;
          setStatus(statuses[statusIdx]);
        }
        
        return next;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03]">
        <img src={IMAGES.EXPERT_HERO} alt="" className="w-full h-full object-cover grayscale" />
      </div>
      
      <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-10">
        {/* Animated Avatar / Ring */}
        <div className="relative w-32 h-32 lg:w-44 lg:h-44 flex items-center justify-center">
           <div className="absolute inset-0 border-[1px] border-premium-gold/10 rounded-full"></div>
           <div 
             className="absolute inset-0 border-t-2 border-premium-gold rounded-full animate-spin duration-1000"
             style={{ animationDuration: '2s' }}
           ></div>
           <div className="relative w-28 h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden grayscale opacity-50 border-2 border-white shadow-xl">
             <img src={IMAGES.EXPERT_BIO} alt="Dra. Renata" className="w-full h-full object-cover" />
           </div>
        </div>

        <div className="w-full space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl lg:text-3xl font-serif text-black animate-pulse">{status}</h2>
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-premium-gold">Aguarde o Diagnóstico</p>
          </div>
          
          <div className="space-y-3">
            <div className="relative w-full h-8 bg-neutral-50 rounded-full overflow-hidden border border-neutral-100 shadow-inner">
              <div 
                className="absolute top-0 left-0 h-full bg-premium-gold transition-all duration-500 ease-out shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                {progress > 20 && (
                  <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] whitespace-nowrap px-4 drop-shadow-md">
                    Analisando... {Math.round(progress)}%
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-between px-2">
              <span className="text-[7px] font-black uppercase tracking-widest text-black/20">Iniciando</span>
              <span className="text-[7px] font-black uppercase tracking-widest text-black/20">Concluindo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyzingScreen;
