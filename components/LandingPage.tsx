
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
  ArrowRight,
  Navigation,
  ExternalLink
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Ajuste para o navbar fixo
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { label: 'Sobre Mim', id: 'sobre' },
    { label: 'Prova Visual', id: 'prova-visual' },
    { label: 'Harmonização de ❤️', id: 'harmonizacao' },
    { label: 'Onde nos Encontrar', id: 'localizacao' },
    { label: 'Contato', id: 'contato' }
  ];

  return (
    <div className="w-full bg-white min-h-screen pb-10">
      
      {/* BARRA DE LOGRADOURO DIRECIONAL (MARQUEE) */}
      <div 
        className="fixed top-0 left-0 w-full z-[110] bg-black text-white h-8 flex items-center overflow-hidden border-b border-premium-gold/20"
      >
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {navItems.map((item, idx) => (
                <button 
                  key={`${i}-${idx}`}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[9px] font-black tracking-[0.3em] uppercase mx-10 flex items-center gap-3 hover:text-premium-gold transition-colors whitespace-nowrap"
                >
                  <span className="text-premium-gold">✦</span>
                  {item.label}
                </button>
              ))}
              <span className="text-[9px] font-black tracking-[0.3em] uppercase mx-10 flex items-center gap-3 text-neutral-500 whitespace-nowrap">
                <MapPin size={10} className="text-premium-gold" />
                Rua Tiradentes, 106 - Centro • Caarapó/MS
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* NAVBAR FIXO */}
      <nav className="fixed top-8 left-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-neutral-100 px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <p className="font-signature text-3xl text-premium-gold leading-none group-hover:scale-105 transition-transform">Renata Sacomam</p>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)}
                className="group flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.2em] text-black/60 hover:text-premium-gold transition-all"
              >
                <ChevronRight size={10} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-premium-gold" />
                {item.label}
              </button>
            ))}
          </div>

          {/* Versão Mobile do Menu (Scroll Horizontal) */}
          <div className="lg:hidden flex overflow-x-auto no-scrollbar gap-6 items-center flex-1 ml-6 -mr-4 pr-6">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)}
                className="text-[9px] font-black uppercase tracking-[0.2em] text-black/60 whitespace-nowrap active:text-premium-gold"
              >
                {item.label === 'Harmonização de ❤️' ? 'Amamos' : item.label.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </nav>
      
      {/* 1. HERO SECTION (WHITE LUXURY) */}
      <section className="relative h-[90vh] lg:h-screen flex flex-col items-center justify-end px-6 pb-12 lg:pb-24 overflow-hidden bg-luxury-white pt-24">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.EXPERT_HERO} 
            alt="Dra. Renata Sacomam" 
            className="w-full h-full object-cover object-top lg:object-[center_20%] transition-transform duration-[3s] ease-out scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center w-full max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="space-y-4 lg:space-y-6">
            <span className="inline-block text-premium-gold text-[10px] lg:text-xs font-black tracking-[0.6em] uppercase bg-white/95 backdrop-blur-md px-6 py-2 rounded-full border border-premium-gold/40 shadow-xl">
              Harmonização Facial de Luxo
            </span>
            <div className="space-y-1">
               <h2 className="text-black/60 text-base lg:text-xl font-bold tracking-[0.4em] uppercase">Dra.</h2>
               <h1 className="text-6xl lg:text-9xl font-serif text-black tracking-tight leading-none drop-shadow-2xl">
                 Renata Sacomam
               </h1>
            </div>
            <p className="text-2xl lg:text-4xl text-black font-semibold max-w-2xl mx-auto leading-tight drop-shadow-sm">
              Elevando a sua autoestima com <span className="text-premium-gold font-extrabold italic">elegância</span> e resultados naturalmente belos.
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 pt-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center gap-4 w-full max-w-[380px] bg-premium-gold p-5 lg:p-7 rounded-2xl text-white font-black text-lg lg:text-xl shadow-[0_20px_40px_rgba(212,175,55,0.4)] active:scale-95 transition-all">
              <span>AGENDAR CONSULTA AGORA</span>
              <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
            </a>
            <p className="text-black/60 text-[9px] lg:text-[11px] font-black uppercase tracking-[0.4em]">Atendimento VIP em Caarapó/MS</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE VÍDEO DE PROCEDIMENTO */}
      <section className="py-20 lg:py-32 px-6 lg:px-20 bg-luxury-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Container do Vídeo */}
          <div className="relative w-full lg:w-3/5 group">
            <div className="absolute -inset-4 bg-premium-gold/5 blur-2xl rounded-[3rem] group-hover:bg-premium-gold/10 transition-all duration-700"></div>
            <div className="relative aspect-[16/9] w-full bg-black rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white">
              <video 
                src="https://i.imgur.com/6OaMXYE.mp4" 
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden lg:block">
               <div className="bg-white p-6 rounded-3xl shadow-xl border border-premium-gold/20 flex items-center gap-4 animate-bounce duration-[3s]">
                  <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-black">Procedimento em Foco</span>
               </div>
            </div>
          </div>

          {/* Texto de Apoio */}
          <div className="w-full lg:w-2/5 space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-serif text-black leading-tight">
                A arte de <span className="text-premium-gold italic">esculpir</span> com alma.
              </h2>
              <p className="text-neutral-800 text-lg lg:text-xl font-medium leading-relaxed">
                Descubra como a beleza pode ser realçada com técnica, sensibilidade e propósito. 
                Resultados naturais e transformadores.
              </p>
              <p className="text-neutral-600 text-base leading-relaxed italic border-l-2 border-premium-gold/30 pl-6">
                Assista ao vídeo ao lado e sinta a diferença de ser cuidada por quem entende que sua beleza é única.
              </p>
            </div>
            
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-black font-black text-xs tracking-[0.3em] uppercase hover:text-premium-gold transition-colors group">
              Quero este resultado
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. BIO SECTION (SOBRE MIM) */}
      <section id="sobre" className="py-24 lg:py-40 px-6 lg:px-20 bg-white scroll-mt-32">
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

      {/* 3. GALERIA (PROVA VISUAL) */}
      <section id="prova-visual" className="py-24 px-6 lg:px-20 max-w-[1600px] mx-auto bg-luxury-white/30 rounded-[4rem] my-10 scroll-mt-32">
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

        <div id="harmonizacao" className="mt-24 space-y-12 scroll-mt-32">
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

      {/* SEÇÃO DE COMENTÁRIOS DE PACIENTES */}
      <section className="py-24 px-6 lg:px-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-premium-gold text-premium-gold" />
              ))}
            </div>
            <h2 className="text-3xl lg:text-6xl font-serif text-black">O carinho de <span className="text-premium-gold italic">quem viveu a experiência</span></h2>
            <p className="text-neutral-500 text-sm lg:text-lg max-w-2xl mx-auto">
              A satisfação de minhas pacientes é o combustível para minha busca incessante pela perfeição.
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-12 no-scrollbar snap-x lg:grid lg:grid-cols-3">
            {IMAGES.TESTIMONIALS.map((url, i) => (
              <div 
                key={i} 
                className="snap-center shrink-0 w-[300px] lg:w-full bg-luxury-white rounded-[2rem] overflow-hidden border border-premium-gold/10 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                onClick={() => setSelectedImage(url)}
              >
                <div className="p-1">
                  <img 
                    src={url} 
                    alt={`Depoimento ${i + 1}`} 
                    className="w-full h-auto rounded-[1.8rem] group-hover:scale-[1.02] transition-transform duration-500" 
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-luxury-white px-8 py-4 rounded-full border border-premium-gold/20 text-black font-bold text-xs uppercase tracking-widest hover:bg-premium-gold hover:text-white transition-all shadow-sm">
              <MessageCircle size={18} />
              Quero viver essa transformação
            </a>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
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

      {/* JORNADA */}
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

      {/* SEÇÃO DE LOCALIZAÇÃO (MAPA) */}
      <section id="localizacao" className="py-24 lg:py-32 px-6 lg:px-20 bg-luxury-white/50 scroll-mt-32">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-6xl font-serif text-black">Onde <span className="text-premium-gold italic">nos encontrar</span></h2>
            <div className="flex items-center justify-center gap-3 text-neutral-600 font-medium">
              <MapPin size={20} className="text-premium-gold" />
              <p className="text-sm lg:text-lg">Rua Tiradentes, 106 - Centro • Caarapó/MS</p>
            </div>
          </div>

          <div className="relative w-full aspect-video lg:aspect-[21/9] rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl border-[6px] border-white group">
            {/* Google Maps Embed */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.083756277085!2d-54.82193262388656!3d-22.632000028784323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94884f686c6c547b%3A0x6b2e98c919d3f663!2sR.%20Tiradentes%2C%20106%20-%20Centro%2C%20Caarap%C3%B3%20-%20MS%2C%2079940-000!5e0!3m2!1spt-BR!2sbr!4v1716300000000!5m2!1spt-BR!2sbr" 
              className="w-full h-full grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10">
              <a 
                href="https://www.google.com/maps/dir//R.+Tiradentes,+106+-+Centro,+Caarap%C3%B3+-+MS,+79940-000/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-xl border border-premium-gold/20 text-black font-black text-xs uppercase tracking-widest hover:bg-premium-gold hover:text-white transition-all group/btn"
              >
                <Navigation size={18} className="group-hover/btn:rotate-12 transition-transform" />
                Traçar Rota Agora
                <ExternalLink size={14} className="opacity-50" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL (CONTATO) */}
      <section id="contato" className="py-32 px-6 text-center bg-white relative overflow-hidden scroll-mt-32">
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
