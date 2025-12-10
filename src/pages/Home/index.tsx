import { Scene } from '@/components/three/Scene';
import { FloatingShapes } from '@/components/three/FloatingShapes';
import { ImpactNumbers } from '@/components/sections/ImpactNumbers';
import { Testimonials } from '@/components/sections/Testimonials';
import { PremiumExperience } from '@/components/sections/PremiumExperience';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Clock, ShieldCheck, Microscope, ArrowDown, HeartPulse, Stethoscope, Cat, Bone, Syringe, Award, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { icon: HeartPulse, name: "Cardiologia", color: "text-red-500", bg: "bg-red-50" },
  { icon: Stethoscope, name: "Clínica Geral", color: "text-primary-blue", bg: "bg-blue-50" },
  { icon: Cat, name: "Medicina Felina", color: "text-teal-500", bg: "bg-teal-50" },
  { icon: Bone, name: "Ortopedia", color: "text-amber-600", bg: "bg-amber-50" },
  { icon: Syringe, name: "Dermatologia", color: "text-purple-500", bg: "bg-purple-50" },
  { icon: Microscope, name: "Diagnóstico", color: "text-green-600", bg: "bg-green-50" },
];

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Hero Section - PRESERVED WITH ALL ANIMATIONS */}
      <section className="relative h-screen w-full flex items-center bg-gradient-to-br from-neutral-ice to-white overflow-hidden">
        {/* Background 3D - Hidden on mobile for performance */}
        <div className="absolute inset-0 z-0 opacity-80 hidden md:block">
          <Scene withEnvironment={false}>
            <FloatingShapes />
          </Scene>
        </div>

        {/* Content Overlay */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl">
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
               className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-primary-blue text-sm font-bold mb-6 border border-white/50 shadow-sm"
            >
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               Hospital Veterinário 24h
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-dark mb-6 leading-[1.1] tracking-tight"
            >
              Excelência e Amor <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-green">
                Pela Vida Animal
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-2xl text-neutral-gray mb-10 max-w-2xl leading-relaxed"
            >
              Unimos tecnologia de ponta, especialistas renomados e o acolhimento que sua família merece. O centro de referência mais completo da região.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contato" className="bg-primary-blue text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all">
                Agendar Consulta
                <ArrowRight size={22} />
              </Link>
              <a href="tel:11999999999" className="bg-white text-primary-coral border-2 border-primary-coral px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-neutral-ice hover:shadow-lg hover:-translate-y-1 transition-all">
                <Phone size={22} />
                Emergência 24h
              </a>
            </motion.div>

            {/* Trust Badges - PRESERVED */}
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.8 }}
               className="mt-12 flex flex-wrap items-center gap-6 md:gap-8 text-neutral-gray text-sm font-semibold"
            >
               <div className="flex items-center gap-2">
                  <Clock size={18} className="text-primary-green" />
                  Atendimento 24h
               </div>
               <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-primary-blue" />
                  Equipe Especializada
               </div>
               <div className="flex items-center gap-2">
                  <Microscope size={18} className="text-purple-500" />
                  Diagnóstico Próprio
               </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - PRESERVED */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-blue cursor-pointer z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
            <span className="text-xs uppercase tracking-widest font-bold">Descubra</span>
            <ArrowDown className="w-6 h-6" />
          </div>
        </motion.div>
      </section>

      {/* Quick Services Bar */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-20 z-30 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -4 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer hover:shadow-md transition-all"
              >
                <div className={`p-2 ${service.bg} rounded-lg`}>
                  <service.icon className={service.color} size={18} />
                </div>
                <span className="font-bold text-neutral-dark text-sm hidden md:inline">{service.name}</span>
              </motion.div>
            ))}
            <Link to="/especialidades" className="flex items-center gap-2 px-4 py-2 text-primary-blue font-bold text-sm hover:underline">
              Ver todas <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Premium Experience Section - PRESERVED */}
      <PremiumExperience />

      {/* Impact Numbers - PRESERVED WITH GSAP ANIMATION */}
      <ImpactNumbers />
      
      {/* Nossa Essência - ENHANCED */}
      <section className="py-24 bg-neutral-ice relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold uppercase tracking-wider text-primary-green mb-4">Nossa Essência</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">Mais que uma Clínica</h3>
              <p className="text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
                Na Veterinária Santa Luzia, não tratamos apenas de sintomas. Cuidamos de vidas, histórias e dos laços únicos entre tutores e seus pets.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HeartPulse className="text-primary-blue" size={32} />
              </div>
              <h4 className="text-xl font-bold text-neutral-dark mb-3">Cuidado Integral</h4>
              <p className="text-neutral-gray leading-relaxed">
                Desde a prevenção até tratamentos complexos, acompanhamos cada fase da vida do seu pet.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-primary-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="text-primary-green" size={32} />
              </div>
              <h4 className="text-xl font-bold text-neutral-dark mb-3">Profissionais de Elite</h4>
              <p className="text-neutral-gray leading-relaxed">
                Mais de 20 especialistas, com formação em instituições renomadas e atualização constante.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-primary-coral/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="text-primary-coral" size={32} />
              </div>
              <h4 className="text-xl font-bold text-neutral-dark mb-3">Excelência Reconhecida</h4>
              <p className="text-neutral-gray leading-relaxed">
                Referência regional em medicina veterinária, com taxa de satisfação acima de 98%.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials - PRESERVED */}
      <Testimonials />

      {/* Location Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold uppercase tracking-wider text-primary-blue mb-4">Localização</h2>
              <h3 className="text-4xl font-bold text-neutral-dark mb-6 leading-tight">
                Fácil Acesso e Estacionamento Gratuito
              </h3>
              <p className="text-lg text-neutral-gray mb-8 leading-relaxed">
                Estamos estrategicamente localizados no coração de Jardim das Flores, com fácil acesso por transporte público e estacionamento gratuito para clientes.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-blue/10 rounded-xl">
                    <MapPin className="text-primary-blue" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-dark">Rua das Camélias, 123</p>
                    <p className="text-neutral-gray">Jardim das Flores, São Paulo - SP</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-green/10 rounded-xl">
                    <Clock className="text-primary-green" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-dark">24 horas</p>
                    <p className="text-neutral-gray">Todos os dias, inclusive feriados</p>
                  </div>
                </div>
              </div>

              <Link to="/contato" className="inline-flex items-center gap-2 bg-primary-blue text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:-translate-y-1 transition-all">
                Como Chegar <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="h-80 rounded-3xl overflow-hidden relative shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098169931753!2d-46.69654492395726!3d-23.564917461726004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57a7d517c66b%3A0x69a7122a281895a6!2sAv.%20Brigadeiro%20Faria%20Lima%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1715000000000!5m2!1sen!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Veterinária Santa Luzia"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary-gold text-neutral-dark p-4 rounded-2xl font-bold shadow-xl">
                <p className="text-sm">Estacionamento</p>
                <p className="text-xl">Gratuito</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-primary-blue via-blue-600 to-primary-green text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para Cuidar do Seu Pet?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Agende uma consulta e descubra por que somos a escolha de milhares de famílias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato" className="bg-white text-primary-blue px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all inline-flex items-center justify-center gap-3">
                Agendar Agora <ArrowRight size={22} />
              </Link>
              <a href="tel:11999999999" className="border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center gap-3">
                <Phone size={22} />
                (11) 99999-9999
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
