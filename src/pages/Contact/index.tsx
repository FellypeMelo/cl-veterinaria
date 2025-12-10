import { ContactForm } from '@/components/forms/ContactForm';
import { FAQSection } from '@/components/sections/FAQSection';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Users, ArrowRight } from 'lucide-react';

const contactChannels = [
  { icon: Phone, title: "Telefone", value: "(11) 99999-9999", subtitle: "Ligações e WhatsApp", color: "bg-green-500" },
  { icon: Mail, title: "Email", value: "contato@santaluzia.vet.br", subtitle: "Resposta em até 24h", color: "bg-blue-500" },
  { icon: MessageCircle, title: "Chat Online", value: "Disponível", subtitle: "Seg a Sex, 8h às 20h", color: "bg-purple-500" },
];

export default function Contact() {
  return (
    <div className="overflow-x-hidden">
      {/* Premium Header */}
      <section className="py-32 bg-neutral-dark text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark via-primary-blue/10 to-neutral-dark" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary-blue rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-blue/20 rounded-full text-primary-blue text-sm font-bold mb-8 border border-primary-blue/30"
          >
            <Send size={16} />
            Atendimento 24h
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            Fale <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-green">
              Conosco
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Estamos prontos para atender você e seu pet. Escolha o canal de sua preferência ou preencha o formulário abaixo.
          </motion.p>
        </div>
      </section>

      {/* Quick Contact Channels */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactChannels.map((channel, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -4 }}
                className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className={`p-3 ${channel.color} text-white rounded-xl`}>
                  <channel.icon size={24} />
                </div>
                <div>
                  <p className="font-bold text-neutral-dark">{channel.value}</p>
                  <p className="text-sm text-neutral-gray">{channel.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-neutral-ice">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
            
            {/* Info Column */}
            <div className="w-full lg:w-1/3 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-neutral-dark mb-6">Informações</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-blue/10 p-3 rounded-xl text-primary-blue">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-dark">Telefone & WhatsApp</h4>
                      <p className="text-neutral-gray">(11) 99999-9999</p>
                      <p className="text-sm text-primary-coral font-bold mt-1">Emergência 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-green/10 p-3 rounded-xl text-primary-green">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-dark">Email</h4>
                      <p className="text-neutral-gray">contato@santaluzia.vet.br</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-coral/10 p-3 rounded-xl text-primary-coral">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-dark">Endereço</h4>
                      <p className="text-neutral-gray">Rua das Camélias, 123<br/>Jardim das Flores, São Paulo - SP</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-gold/10 p-3 rounded-xl text-primary-gold">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-dark">Horário de Atendimento</h4>
                      <p className="text-neutral-gray">Segunda a Sábado: 08h às 20h</p>
                      <p className="text-neutral-gray">Domingos e Feriados: Plantão 24h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Card */}
              <div className="bg-primary-coral text-white p-6 rounded-3xl">
                <h4 className="font-bold text-lg mb-2">🚨 Emergência?</h4>
                <p className="text-sm text-white/80 mb-4">
                  Para casos urgentes, ligue diretamente ou venha à clínica. Estamos sempre prontos.
                </p>
                <button className="w-full bg-white text-primary-coral py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                  Ligar Agora
                </button>
              </div>
            </div>

            {/* Form Column */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-neutral-dark mb-2">Envie uma Mensagem</h3>
                <p className="text-neutral-gray mb-8">Preencha o formulário e entraremos em contato em breve.</p>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary-blue mb-4">Tire Suas Dúvidas</h2>
            <h3 className="text-4xl font-bold text-neutral-dark">Perguntas Frequentes</h3>
          </div>
          <FAQSection />
        </div>
      </section>

      {/* Work With Us */}
      <section className="py-24 bg-neutral-ice">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-blue to-blue-700 text-white rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-6">
                <Users size={16} />
                Trabalhe Conosco
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Faça Parte do Nosso Time
              </h3>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Está buscando uma oportunidade em um ambiente inovador e acolhedor? Envie seu currículo e venha construir o futuro da medicina veterinária conosco.
              </p>
              
              <button className="bg-white text-primary-blue px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2">
                Enviar Currículo <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-100 relative">
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
      </section>
    </div>
  );
}
