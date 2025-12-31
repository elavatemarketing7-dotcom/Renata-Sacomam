
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, IMAGES } from '../constants';
import { QuizResult } from '../types';
import { ChevronLeft, Sparkles, ShieldCheck } from 'lucide-react';

interface QuizProps {
  onFinish: (answers: QuizResult) => void;
  onBack: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onFinish, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizResult>({});

  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  const handleSelect = (option: string) => {
    const newAnswers = { ...answers, [QUIZ_QUESTIONS[currentStep].id]: option };
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    } else {
      setTimeout(() => onFinish(newAnswers), 300);
    }
  };

  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 bg-white">
        <img 
          src={IMAGES.EXPERT_HERO} 
          alt="" 
          className="w-full h-full object-cover opacity-10 object-top lg:object-[center_20%]" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white"></div>
      </div>

      {/* Barra de Progresso Dourada */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-neutral-100 z-50">
        <div 
          className="h-full bg-premium-gold transition-all duration-500 ease-out shadow-[0_0_10px_rgba(212,175,55,0.3)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Foto Flutuante Ultra-Compacta - Elevada significativamente */}
      <div className="relative z-20 -mt-20 -mb-12 lg:-mt-24 lg:-mb-16 animate-in slide-in-from-top-4 duration-1000">
        <div className="relative group">
          <div className="absolute inset-0 bg-premium-gold/20 blur-2xl rounded-full scale-90"></div>
          <div className="relative w-24 h-24 lg:w-36 lg:h-36 rounded-full border-[4px] border-white p-0.5 bg-white shadow-2xl overflow-hidden transition-transform group-hover:scale-105 duration-500">
            <img src={IMAGES.EXPERT_BIO} alt="Dra. Renata" className="w-full h-full object-cover object-top rounded-full" />
          </div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-white px-4 py-1.5 rounded-full shadow-lg border border-premium-gold/30">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-premium-gold whitespace-nowrap">Dra. Renata Sacomam</span>
          </div>
        </div>
      </div>

      {/* Card Quiz - Compacto */}
      <div className="relative z-10 w-full max-w-[360px] lg:max-w-md glass-luxury rounded-[3rem] pt-14 pb-8 px-6 lg:pt-24 lg:pb-14 lg:px-12 flex flex-col gap-6 lg:gap-8 animate-in zoom-in duration-500 shadow-2xl shadow-black/5">
        
        <header className="flex flex-col items-center gap-1 text-center">
          <button onClick={onBack} className="absolute left-7 top-12 p-2 text-black/20 hover:text-premium-gold transition-colors active:scale-90">
            <ChevronLeft size={24} />
          </button>
          <div className="space-y-0.5">
            <p className="font-signature text-3xl lg:text-4xl text-black">Diagnóstico</p>
            <p className="text-[8px] font-black tracking-[0.4em] uppercase text-black/30">Avaliação Personalizada</p>
          </div>
        </header>

        <div className="text-center space-y-4">
          <div className="inline-block">
            <span className="text-[10px] font-bold text-premium-gold uppercase tracking-[0.2em] bg-premium-gold/5 px-3 py-1 rounded-full border border-premium-gold/10">
              Passo {currentStep + 1} de {QUIZ_QUESTIONS.length}
            </span>
          </div>
          <h2 className="text-xl lg:text-2xl font-serif text-black leading-tight px-2">
            {currentQuestion.question}
          </h2>
        </div>

        <div className="grid gap-3 lg:gap-4">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(option)}
              className="w-full p-4 lg:p-6 rounded-2xl border border-neutral-100 text-black font-bold text-xs lg:text-sm text-center transition-all active:scale-[0.98] bg-white/60 hover:bg-neutral-50 hover:border-premium-gold shadow-sm hover:shadow-md"
            >
              {option}
            </button>
          ))}
        </div>

        <footer className="pt-2 flex items-center gap-2 opacity-30 justify-center">
          <ShieldCheck size={14} className="text-black" />
          <p className="text-[8px] font-black uppercase tracking-[0.3em] text-black">Criptografia de Ponta a Ponta</p>
        </footer>
      </div>
    </div>
  );
};

export default Quiz;
