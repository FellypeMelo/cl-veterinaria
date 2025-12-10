import { DoctorsGrid } from '@/components/sections/DoctorsGrid';
import { Timeline } from '@/components/sections/Timeline';
import { DirectorSpotlight } from '@/components/sections/DirectorSpotlight';
import { motion } from 'framer-motion';
import { Award, Target, Eye, Heart, Shield, Zap, Users, Sparkles } from 'lucide-react';

export default function Clinica() {
  return (
    <div className="overflow-x-hidden">
      {/* Premium Page Header */}
      <section className="py-32 bg-neutral-dark text-white text-center relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark via-primary-blue/20 to-neutral-dark" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-blue rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-green rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-gold/20 rounded-full text-primary-gold text-sm font-bold mb-8 border border-primary-gold/30"
          >
            <Sparkles size={16} />
            Desde 2012
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-8 font-heading leading-tight"
          >
            Uma História de <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-gold via-primary-coral to-primary-gold">
              Paixão e Excelência
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Mais de uma década transformando a medicina veterinária em São Paulo com tecnologia de ponta, especialistas renomados e um carinho que faz toda a diferença.
          </motion.p>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-blue">12+</p>
              <p className="text-sm text-neutral-gray">Anos de Atuação</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-green">15.000+</p>
              <p className="text-sm text-neutral-gray">Vidas Cuidadas</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-coral">20+</p>
              <p className="text-sm text-neutral-gray">Especialistas</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-gold">24h</p>
              <p className="text-sm text-neutral-gray">Atendimento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-neutral-ice">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                  alt="Equipe Veterinária Santa Luzia"
                  loading="lazy" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-gold/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-blue/20 rounded-2xl -z-10" />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-8 bg-white p-6 rounded-2xl shadow-xl z-20">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary-gold/10 rounded-xl">
                    <Award className="text-primary-gold" size={28} />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-dark">Referência Regional</p>
                    <p className="text-sm text-neutral-gray">Certificação CRMV-SP</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold uppercase tracking-wider text-primary-blue mb-4">Nossa História</h2>
              <h3 className="text-4xl font-bold text-neutral-dark mb-6 leading-tight">
                De um Sonho à Realidade que Transforma Vidas
              </h3>
              <div className="space-y-4 text-neutral-gray text-lg leading-relaxed">
                <p>
                  Fundada em 2012 pela <strong className="text-neutral-dark">Dra. Helena Martins</strong>, a Veterinária Santa Luzia nasceu da visão de criar um espaço onde a medicina veterinária de ponta se encontrasse com o acolhimento que toda família merece.
                </p>
                <p>
                  O que começou como uma pequena clínica de bairro rapidamente se transformou em um dos centros de referência mais respeitados da região, graças à dedicação incansável de nossa equipe e ao carinho depositado em cada atendimento.
                </p>
                <p>
                  Hoje, contamos com mais de <strong className="text-neutral-dark">20 especialistas</strong>, equipamentos de última geração e uma estrutura hospitalar completa que funciona 24 horas, sempre prontos para cuidar de quem você mais ama.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <DirectorSpotlight />
      
      <Timeline />
      
      {/* Philosophy Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary-green mb-4">Nossa Filosofia</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">Pilares que nos Guiam</h3>
            <p className="text-xl text-neutral-gray max-w-2xl mx-auto">
              Cada decisão que tomamos é fundamentada em princípios que colocam o bem-estar animal no centro de tudo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <motion.div 
              whileHover={{ y: -8 }}
              className="group p-8 bg-gradient-to-br from-blue-50 to-white rounded-3xl border border-blue-100 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-primary-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="text-primary-blue" size={28} />
              </div>
              <h4 className="text-xl font-bold text-neutral-dark mb-3">Missão</h4>
              <p className="text-neutral-gray leading-relaxed">
                Oferecer excelência médica com compaixão, elevando a qualidade de vida dos animais e a tranquilidade das famílias.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8 }}
              className="group p-8 bg-gradient-to-br from-green-50 to-white rounded-3xl border border-green-100 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-primary-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="text-primary-green" size={28} />
              </div>
              <h4 className="text-xl font-bold text-neutral-dark mb-3">Visão</h4>
              <p className="text-neutral-gray leading-relaxed">
                Ser o maior centro de referência veterinária do país, reconhecido pela inovação e humanização no cuidado.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8 }}
              className="group p-8 bg-gradient-to-br from-red-50 to-white rounded-3xl border border-red-100 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-primary-coral/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="text-primary-coral" size={28} />
              </div>
              <h4 className="text-xl font-bold text-neutral-dark mb-3">Valores</h4>
              <p className="text-neutral-gray leading-relaxed">
                Ética inegociável, respeito à vida, inovação constante e transparência em todas as relações.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8 }}
              className="group p-8 bg-gradient-to-br from-amber-50 to-white rounded-3xl border border-amber-100 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-primary-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="text-primary-gold" size={28} />
              </div>
              <h4 className="text-xl font-bold text-neutral-dark mb-3">Compromisso</h4>
              <p className="text-neutral-gray leading-relaxed">
                Tratamos cada pet como se fosse nosso, com dedicação total e responsabilidade absoluta.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-neutral-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-primary-gold mb-4">Por que nos escolher</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                O que nos Torna Diferentes
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-blue/20 rounded-xl flex-shrink-0">
                    <Zap className="text-primary-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Tecnologia de Ponta</h4>
                    <p className="text-gray-400">Investimos continuamente em equipamentos de última geração para diagnósticos mais precisos e tratamentos mais eficazes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-green/20 rounded-xl flex-shrink-0">
                    <Users className="text-primary-green" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Equipe Multidisciplinar</h4>
                    <p className="text-gray-400">Mais de 20 especialistas trabalhando em conjunto, garantindo uma abordagem completa para cada caso.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-coral/20 rounded-xl flex-shrink-0">
                    <Heart className="text-primary-coral" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Atendimento Humanizado</h4>
                    <p className="text-gray-400">Entendemos que seu pet é família. Nosso atendimento reflete esse cuidado em cada detalhe.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800" 
                alt="Veterinário com pet"
                loading="lazy" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-primary-gold text-neutral-dark p-6 rounded-2xl font-bold text-center shadow-xl">
                <p className="text-3xl">98%</p>
                <p className="text-sm">Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <DoctorsGrid />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-primary-green text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Conhecer Nossa Clínica?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Agende uma visita e descubra por que somos a escolha de milhares de famílias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-blue px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              Agendar Visita
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Fale Conosco
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
