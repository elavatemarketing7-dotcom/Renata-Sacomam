
import React, { useState } from 'react';
import { IMAGES, WHATSAPP_URL, INSTAGRAM_URL } from '../constants';
import { 
  MessageCircle, 
  Instagram, 
  ChevronRight, 
  Award, 
  Heart, 
  ShieldCheck, 
  Star, 
  MapPin, 
  X,
  ArrowRight
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full bg-white min-h-screen pb-10">
      
      {/* 1. HERO SECTION (WHITE LUXURY) */}
      <section className="relative h-[90vh] lg:h-screen flex flex-col items-center justify-end px-6 pb-12 overflow-hidden bg-luxury-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.EXPERT_HERO} 
            alt="Dra. Renata Sacomam" 
            className="w-full h-full object-cover object-top lg:object-[center_20%] transition-transform duration-[3s] ease-out scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center w-full max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="space-y-4">
            <span className="inline-block text-premium-gold text-[10px] lg:text-xs font-black tracking-[0.6em] uppercase bg-white/80 backdrop-blur-md px-6 py-2 rounded-full border border-premium-gold/30 shadow-sm">
              Harmonização Facial de Luxo
            </span>
            <div className="space-y-1">
               <h2 className="text-black/40 text-base lg:text-xl font-medium tracking-[0.3em] uppercase">Dra.</h2>
               <h1 className="text-5xl lg:text-9xl font-serif text-black tracking-tighter leading-none">
                 Renata Sacomam
               </h1>
            </div>
            <p className="text-lg lg:text-2xl text-neutral-600 font-light max-w-2xl mx-auto leading-relaxed">
              Elevando a sua autoestima com <span className="text-premium-gold font-semibold italic">elegância</span> e resultados naturalmente belos.
            </p>
          </div>

          <div className="flex flex-col items-center gap-5">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center gap-4 w-full max-w-[380px] bg-premium-gold p-5 lg:p-7 rounded-2xl text-white font-black text-lg lg:text-xl shadow-[0_20px_40px_rgba(212,175,55,0.3)] active:scale-95 transition-all">
              <span>AGENDAR CONSULTA AGORA</span>
              <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
            </a>
            <p className="text-black/30 text-[9px] lg:text-[11px] font-black uppercase tracking-[0.4em]">Atendimento VIP em Caarapó/MS</p>
          </div>
        </div>
      </section>

      {/* 2. BIO SECTION (CLEAN WHITE) */}
      <section className="py-24 lg:py-40 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="relative w-full lg:w-1/2 aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
            <img src={IMAGES.EXPERT_BIO} alt="Dra Renata" className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            <p className="absolute bottom-10 left-10 font-signature text-6xl text-white">Renata Sacomam</p>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-serif leading-tight text-black">A excelência técnica que <br/><span className="text-premium-gold italic font-normal">você merece.</span></h2>
              <p className="text-neutral-500 text-lg lg:text-xl leading-relaxed">
                Minha missão é entregar um rejuvenescimento autêntico, 
                onde cada detalhe é planejado para realçar o que você já tem de mais bonito.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { label: "Análise Digital", icon: <Star size={20} /> },
                { label: "Técnica Refinada", icon: <ShieldCheck size={20} /> },
                { label: "Produtos Premium", icon: <Award size={20} /> },
                { label: "Protocolo Único", icon: <Heart size={20} /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-luxury-white p-6 rounded-2xl border border-premium-gold/10 hover:border-premium-gold/40 transition-all shadow-sm">
                  <div className="text-premium-gold">{item.icon}</div>
                  <span className="text-black text-sm lg:text-base font-black tracking-tight uppercase">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. GALERIA (LUMINOUS MODE) */}
      <section className="py-24 px-6 lg:px-20 max-w-[1600px] mx-auto bg-luxury-white/30 rounded-[4rem] my-10">
        <div className="text-center mb-16 space-y-4">
          <p className="text-premium-gold text-[10px] font-black tracking-[0.6em] uppercase">Resultados Reais</p>
          <h2 className="text-3xl lg:text-6xl font-serif text-black">Galeria de <span className="text-premium-gold italic">Transformações</span></h2>
          <div className="h-1 w-12 bg-premium-gold/20 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
          {IMAGES.RESULTS.map((url, i) => (
            <div key={i} className="aspect-square rounded-[2rem] overflow-hidden bg-white border-4 border-white cursor-pointer hover:scale-105 transition-all duration-500 shadow-xl" onClick={() => setSelectedImage(url)}>
              <img src={url} alt={`Resultado ${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-24 space-y-12">
          <p className="text-center text-premium-gold text-xs font-black tracking-[0.5em] uppercase italic">Harmonização Facial de 💚</p>
          <div className="flex gap-4 lg:gap-8 overflow-x-auto pb-10 no-scrollbar snap-x lg:grid lg:grid-cols-4">
            {IMAGES.HARMONIZATION.map((url, i) => (
              <div key={i} className="snap-center shrink-0 w-[280px] lg:w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl hover:scale-105 transition-all duration-700 cursor-pointer" onClick={() => setSelectedImage(url)}>
                 <img src={url} alt={`Dra Renata ${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DIFERENCIAIS (WHITE & GOLD LUXE) */}
      <section className="py-24 lg:py-40 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {[
            { icon: <ShieldCheck size={32} />, title: "Segurança Técnica", desc: "Protocolos médicos rigorosos para garantir seu conforto e tranquilidade em cada etapa." },
            { icon: <Heart size={32} />, title: "Beleza Natural", desc: "A harmonia perfeita entre os seus traços, preservando sua essência e expressão única." },
            { icon: <Award size={32} />, title: "Insumos Mundiais", desc: "Apenas as marcas líderes globais entram em meu consultório para tratar sua face." }
          ].map((card, i) => (
            <div key={i} className="bg-luxury-white p-10 lg:p-14 rounded-[3rem] border border-premium-gold/10 flex flex-col items-center text-center space-y-8 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="text-premium-gold p-5 bg-white rounded-3xl shadow-sm">{card.icon}</div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black">{card.title}</h3>
                <p className="text-neutral-500 leading-relaxed font-medium">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. JORNADA (LIGHT MODE) */}
      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-20">
           <h2 className="text-4xl lg:text-6xl font-serif text-black">A sua <span className="text-premium-gold italic">Jornada VIP</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Primeiro Contato", desc: "Atendimento exclusivo via WhatsApp oficial." },
            { step: "02", title: "A Consulta", desc: "Análise técnica detalhada e planejamento facial." },
            { step: "03", title: "O Momento", desc: "Procedimento realizado com calma e precisão." },
            { step: "04", title: "Pós-Cuidado", desc: "Acompanhamento dedicado para sua satisfação." }
          ].map((item, i) => (
            <div key={i} className="p-10 bg-luxury-white rounded-[2rem] border border-premium-gold/5 group hover:border-premium-gold/30 transition-all duration-500">
              <span className="text-4xl font-serif text-premium-gold block mb-4 group-hover:scale-110 transition-transform">/ {item.step}</span>
              <h3 className="text-xl font-black text-black mb-3 uppercase tracking-tight">{item.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA FINAL (GOLD POWER) */}
      <section className="py-32 px-6 text-center bg-luxury-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-premium-gold/10 blur-[150px] rounded-full"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl lg:text-8xl font-serif text-black leading-tight">O futuro do seu rosto <br/><span className="text-premium-gold italic">em boas mãos.</span></h2>
          <div className="flex flex-col items-center gap-6">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 w-full max-w-[500px] bg-premium-gold p-6 lg:p-8 rounded-2xl text-white font-black text-xl lg:text-2xl shadow-2xl hover:scale-105 transition-all">
              MARCAR MINHA CONSULTA
              <ArrowRight size={28} />
            </a>
            <p className="text-black/30 text-xs font-black uppercase tracking-[0.5em]">Avaliação inicial sem custo por tempo limitado</p>
          </div>
        </div>
      </section>

      {/* RODAPÉ ESTRUTURADO */}
      <footer className="py-20 px-6 lg:px-20 border-t border-neutral-100 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-center text-center lg:text-left">
          <div className="space-y-4">
            <p className="font-signature text-5xl text-premium-gold">Renata Sacomam</p>
            <p className="text-black text-[10px] tracking-[0.4em] uppercase font-black">Harmonização Facial • Caarapó/MS</p>
          </div>
          <div className="flex justify-center gap-6">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="p-5 bg-luxury-white rounded-full text-premium-gold hover:bg-premium-gold hover:text-white transition-all shadow-sm">
              <Instagram size={28} />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="p-5 bg-luxury-white rounded-full text-premium-gold hover:bg-premium-gold hover:text-white transition-all shadow-sm">
              <MessageCircle size={28} />
            </a>
          </div>
          <div className="space-y-4 text-xs text-neutral-400">
             <div className="flex items-center justify-center lg:justify-end gap-3 font-bold text-black uppercase tracking-widest text-[10px]">
               <MapPin size={16} className="text-premium-gold" />
               Rua Tiradentes, 106 - Centro
             </div>
             <p className="lg:text-right opacity-50 font-medium">© {new Date().getFullYear()} Dra. Renata Sacomam • Todos os direitos reservados</p>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md flex items-center justify-center p-4 lg:p-12 animate-in fade-in duration-300" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-10 right-10 text-black/40 hover:text-premium-gold p-2 transition-colors"><X size={44} /></button>
          <img src={selectedImage} alt="Resultado" className="max-w-full max-h-[90vh] rounded-3xl shadow-2xl border-4 border-white" />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
