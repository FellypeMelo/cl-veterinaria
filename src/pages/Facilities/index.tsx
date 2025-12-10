import { motion } from 'framer-motion';
import { FacilitiesGallery } from '@/components/sections/FacilitiesGallery';
import { ShieldCheck, Thermometer, Wind, Activity, Bed, Sparkles, Camera, Lock, ArrowRight } from 'lucide-react';
import { getAssetPath } from '@/utils/assets';

const facilities = [
  { name: "Recepção Cat Friendly", icon: Sparkles, desc: "Ambiente separado e feromônios para felinos" },
  { name: "6 Consultórios", icon: Bed, desc: "Equipados com mesas aquecidas e monitores" },
  { name: "2 Centros Cirúrgicos", icon: Activity, desc: "Com anestesia inalatória e monitoramento" },
  { name: "UTI com 12 leitos", icon: Thermometer, desc: "Monitoramento 24h e oxigenoterapia" },
  { name: "Laboratório Próprio", icon: ShieldCheck, desc: "Resultados em minutos" },
  { name: "Internação Felina", icon: Lock, desc: "Área exclusiva e silenciosa" },
];

const protocols = [
  { title: "Esterilização Hospitalar", desc: "Protocolos de limpeza equivalentes a hospitais humanos. Autoclave de última geração.", icon: ShieldCheck },
  { title: "Controle de Temperatura", desc: "Baias climatizadas individualmente para conforto e recuperação otimizada.", icon: Thermometer },
  { title: "Oxigenoterapia Completa", desc: "Rede de oxigênio em todos os leitos de internação e UTI.", icon: Wind },
  { title: "Monitoramento Contínuo", desc: "Equipamentos multiparamétricos e equipe presencial 24 horas.", icon: Activity },
];

export default function Facilities() {
  return (
    <div className="overflow-x-hidden">
      {/* Premium Header */}
      <section className="py-32 bg-neutral-dark text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark via-primary-coral/10 to-neutral-dark" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-coral rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-coral/20 rounded-full text-primary-coral text-sm font-bold mb-8 border border-primary-coral/30"
          >
            <Camera size={16} />
            Tour Virtual
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            Estrutura <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-coral to-primary-gold">
              Hospitalar Completa
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Mais de 800m² projetados para segurança, conforto e recuperação. Conheça cada detalhe da estrutura que cuida do seu pet.
          </motion.p>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {facilities.map((fac, i) => (
              <div key={i} className="text-center p-4 rounded-2xl hover:bg-neutral-ice transition-colors">
                <fac.icon className="mx-auto text-primary-blue mb-2" size={28} />
                <p className="font-bold text-neutral-dark text-sm">{fac.name}</p>
                <p className="text-xs text-neutral-gray">{fac.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-neutral-ice">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary-coral mb-4">Galeria</h2>
            <h3 className="text-4xl font-bold text-neutral-dark">Explore Nossos Ambientes</h3>
          </div>
          <FacilitiesGallery />
        </div>
      </section>

      {/* UTI & Surgery Detail */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-sm font-bold uppercase tracking-wider text-primary-blue mb-4">Cuidados Intensivos</h2>
              <h3 className="text-4xl font-bold text-neutral-dark mb-6 leading-tight">
                UTI de Alta Complexidade
              </h3>
              <p className="text-lg text-neutral-gray mb-8 leading-relaxed">
                Nossa Unidade de Terapia Intensiva foi projetada para casos críticos que exigem vigilância constante. Com 12 leitos equipados, oferecemos suporte avançado de vida.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-2xl">
                  <Thermometer className="text-primary-blue flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-neutral-dark">Baias Climatizadas</h4>
                    <p className="text-sm text-neutral-gray">Controle individual de temperatura para cada paciente.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-2xl">
                  <Wind className="text-primary-green flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-neutral-dark">Oxigenoterapia</h4>
                    <p className="text-sm text-neutral-gray">Rede de oxigênio em todos os leitos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-red-50 rounded-2xl">
                  <Activity className="text-primary-coral flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-neutral-dark">Monitoramento Vital</h4>
                    <p className="text-sm text-neutral-gray">Equipamentos multiparamétricos e equipe presencial 24h.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <img 
                src={getAssetPath("images/surgery-room.png")} 
                alt="UTI Veterinária"
                loading="lazy" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary-blue text-white p-5 rounded-2xl font-bold shadow-xl">
                <p className="text-2xl">12</p>
                <p className="text-xs">Leitos UTI</p>
              </div>
            </motion.div>
          </div>

          {/* Surgery Center */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={getAssetPath("images/clinic-exterior.png")} 
                alt="Fachada Clínica Moderna"
                loading="lazy" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 bg-primary-green text-white p-5 rounded-2xl font-bold shadow-xl">
                <p className="text-2xl">2</p>
                <p className="text-xs">Salas</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold uppercase tracking-wider text-primary-green mb-4">Centro Cirúrgico</h2>
              <h3 className="text-4xl font-bold text-neutral-dark mb-6 leading-tight">
                Biossegurança de Nível Hospitalar
              </h3>
              <p className="text-lg text-neutral-gray mb-8 leading-relaxed">
                Seguimos rigorosos protocolos de esterilização hospitalar para garantir segurança absoluta em cada procedimento.
              </p>
              
              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-3xl border border-green-100">
                <div className="flex items-center gap-3 mb-4 text-primary-green font-bold">
                  <ShieldCheck size={28} />
                  Protocolo Segurança Máxima
                </div>
                <ul className="space-y-2 text-neutral-gray text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-green rounded-full" />
                    Fluxo unidirecional de entrada e saída
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-green rounded-full" />
                    Autoclave hospitalar de última geração
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-green rounded-full" />
                    Anestesia inalatória com ventiladores mecânicos
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-green rounded-full" />
                    Equipe paramentada exclusivamente por procedimento
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety Protocols */}
      <section className="py-24 bg-neutral-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary-gold mb-4">Segurança</h2>
            <h3 className="text-4xl font-bold mb-6">Protocolos de Excelência</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {protocols.map((prot, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all"
              >
                <prot.icon className="text-primary-gold mb-4" size={32} />
                <h4 className="text-lg font-bold mb-2">{prot.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{prot.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-sm font-bold uppercase tracking-wider text-primary-blue mb-4">Localização</h2>
          <h3 className="text-4xl font-bold text-neutral-dark mb-4">Fácil Acesso</h3>
          <p className="text-neutral-gray mb-8 max-w-xl mx-auto">
            Estamos estrategicamente localizados com estacionamento gratuito e acesso facilitado para emergências.
          </p>
          
          <div className="w-full h-96 rounded-3xl overflow-hidden relative shadow-lg group">
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
          
          <p className="text-xl text-neutral-dark font-bold">
            Rua das Camélias, 123 - Jardim das Flores
          </p>
          <p className="text-neutral-gray">Estacionamento gratuito com manobrista • Acesso para cadeirantes</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-coral to-primary-gold text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Quer Conhecer Pessoalmente?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Agende uma visita guiada e conheça toda nossa estrutura de perto.
          </p>
          <button className="bg-white text-primary-coral px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2">
            Agendar Visita <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
