import { motion } from 'framer-motion';
import { Heart, Activity, Star } from 'lucide-react';

export const PremiumExperience = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Image Composition */}
          <div className="w-full lg:w-1/2 relative">
             <div className="relative z-10 aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl mx-auto max-w-[500px]">
               <img 
                  src="/images/happy-cat.png" 
                  alt="Gato feliz na clínica"
                  loading="lazy" 
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
               />
             </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-gold/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-blue/20 rounded-full blur-2xl -z-10" />
            
            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg max-w-xs hidden md:block z-20">
              <div className="flex items-center gap-3 mb-2 text-primary-gold">
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
              </div>
              <p className="text-neutral-dark text-sm font-bold">"O melhor atendimento que já recebi. Salvou a vida do Thor."</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-8 leading-tight">
                Um Novo Padrão de <br/>
                <span className="text-primary-blue">Cuidado Veterinário</span>
              </h2>
              
              <p className="text-lg text-neutral-gray mb-10 leading-relaxed">
                Acreditamos que a medicina veterinária deve ser precisa, acolhedora e transparente. 
                Cada detalhe da nossa estrutura foi pensado para reduzir o estresse e acelerar a recuperação.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-red-50 rounded-xl text-red-500 group-hover:scale-110 transition-transform">
                    <Heart size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-dark mb-1">Medicina Humanizada</h3>
                    <p className="text-neutral-gray">Tratamos seu pet como membro da família, com respeito e carinho em cada procedimento.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-blue-50 rounded-xl text-primary-blue group-hover:scale-110 transition-transform">
                    <Activity size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-dark mb-1">Alta Complexidade</h3>
                    <p className="text-neutral-gray">UTI completa, centro cirúrgico avançado e especialistas prontos para os casos mais difíceis.</p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
