import { Quote } from 'lucide-react';

export const DirectorSpotlight = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Image */}
          <div className="w-full lg:w-1/2">
             <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary-gold rounded-3xl" />
                <img 
                  src="/images/director-portrait.png" 
                  alt="Dra. Helena Costa - Diretora Clínica"
                  loading="lazy"
                  className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-[4/5]"
                />
             </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
             <div className="inline-block px-4 py-1 bg-primary-gold/10 text-primary-gold font-bold rounded-full text-sm mb-6">
                Diretoria Clínica
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
                Excelência guiada por propósito
             </h2>
             <Quote className="text-primary-blue/20 w-12 h-12 mb-4" />
             <p className="text-xl text-neutral-gray italic mb-8 leading-relaxed">
                "Fundei a Santa Luzia com um objetivo claro: oferecer aos animais o mesmo nível de respeito e tecnologia diagnóstica que encontramos na medicina humana. Aqui, cada decisão é pautada pela ética e pelo amor incondicional aos nossos pacientes."
             </p>
             <div>
                <h3 className="text-lg font-bold text-neutral-dark">Dra. Helena Costa</h3>
                <p className="text-primary-blue font-medium">CRMV-SP ----- • Mestre em Clínica Cirúrgica pela USP</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
