
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

      {/* Foto Flutuante Ultra-Compacta */}
      <div className="relative z-20 mb-[-25px] lg:mb-[-40px] animate-in slide-in-from-top-4 duration-1000">
        <div className="relative group">
          <div className="absolute inset-0 bg-premium-gold/15 blur-xl rounded-full scale-90"></div>
          <div className="relative w-20 h-20 lg:w-32 lg:h-32 rounded-full border-[3px] border-white p-0.5 bg-white shadow-xl overflow-hidden">
            <img src={IMAGES.EXPERT_BIO} alt="Dra. Renata" className="w-full h-full object-cover object-top rounded-full" />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md border border-premium-gold/20">
            <span className="text-[8px] font-black uppercase tracking-widest text-premium-gold">Dra. Renata</span>
          </div>
        </div>
      </div>

      {/* Card Quiz - Compacto */}
      <div className="relative z-10 w-full max-w-[360px] lg:max-w-md glass-luxury rounded-[2.5rem] pt-10 pb-6 px-5 lg:pt-18 lg:pb-12 lg:px-10 flex flex-col gap-4 lg:gap-6 animate-in zoom-in duration-500 shadow-xl shadow-black/5">
        
        <header className="flex flex-col items-center gap-1 text-center">
          <button onClick={onBack} className="absolute left-6 top-10 p-1 text-black/20 hover:text-premium-gold transition-colors">
            <ChevronLeft size={20} />
          </button>
          <div className="space-y-0.5">
            <p className="font-signature text-2xl lg:text-3xl text-black">Diagnóstico</p>
            <p className="text-[7px] font-black tracking-[0.3em] uppercase text-black/30">Avaliação Facial</p>
          </div>
        </header>

        <div className="text-center space-y-3">
          <span className="text-[9px] font-bold text-premium-gold uppercase tracking-widest bg-premium-gold/5 px-2.5 py-1 rounded-full border border-premium-gold/10">
            {currentStep + 1} de {QUIZ_QUESTIONS.length}
          </span>
          <h2 className="text-lg lg:text-2xl font-serif text-black leading-tight px-2">
            {currentQuestion.question}
          </h2>
        </div>

        <div className="grid gap-2 lg:gap-3">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(option)}
              className="w-full p-3.5 lg:p-5 rounded-2xl border border-neutral-100 text-black font-bold text-xs lg:text-sm text-center transition-all active:scale-[0.97] bg-white/50 hover:bg-neutral-50 hover:border-premium-gold shadow-sm"
            >
              {option}
            </button>
          ))}
        </div>

        <footer className="pt-1 flex flex-center gap-2 opacity-30 justify-center">
          <ShieldCheck size={12} className="text-black" />
          <p className="text-[7px] font-bold uppercase tracking-[0.2em] text-black">Dados protegidos</p>
        </footer>
      </div>
    </div>
  );
};

export default Quiz;
