import { ServiceGrid } from '@/components/sections/ServiceGrid';
import { Scene } from '@/components/three/Scene';
import { AnimalModel } from '@/components/three/AnimalModel';
import { motion } from 'framer-motion';
import { Stethoscope, HeartPulse, Bone, Eye, Cat, Syringe, Microscope, Zap, Shield, Clock } from 'lucide-react';

const diagnosticEquipment = [
  { name: "Raio-X Digital", desc: "Alta resolução para diagnósticos precisos", icon: Zap },
  { name: "Ultrassom Doppler", desc: "Avaliação cardíaca e abdominal avançada", icon: HeartPulse },
  { name: "Tomografia", desc: "Imagens 3D para casos complexos", icon: Eye },
  { name: "Laboratório 24h", desc: "Resultados em minutos para emergências", icon: Microscope },
];

const specializations = [
  { name: "Cardiologia", icon: HeartPulse, color: "text-red-500", cases: "2.400+" },
  { name: "Dermatologia", icon: Syringe, color: "text-purple-500", cases: "1.800+" },
  { name: "Ortopedia", icon: Bone, color: "text-amber-600", cases: "1.200+" },
  { name: "Oftalmologia", icon: Eye, color: "text-blue-500", cases: "980+" },
  { name: "Medicina Felina", icon: Cat, color: "text-teal-500", cases: "3.200+" },
  { name: "Clínica Geral", icon: Stethoscope, color: "text-primary-blue", cases: "8.500+" },
];

export default function Specialties() {
  return (
    <div className="overflow-x-hidden">
      {/* Premium Header */}
      <section className="py-32 bg-neutral-dark text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark via-primary-green/10 to-neutral-dark" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-green rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-green/20 rounded-full text-primary-green text-sm font-bold mb-8 border border-primary-green/30"
          >
            <Stethoscope size={16} />
            +10 Especialidades
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            Especialidades <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-primary-blue">
              Médicas Avançadas
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Uma abordagem 360º para a saúde do seu pet. Contamos com especialistas em diversas áreas para oferecer o diagnóstico mais preciso e o tratamento mais eficaz.
          </motion.p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {specializations.map((spec, i) => (
              <div key={i} className="flex items-center gap-3 text-center">
                <spec.icon className={spec.color} size={24} />
                <div className="text-left">
                  <p className="font-bold text-neutral-dark text-sm">{spec.name}</p>
                  <p className="text-xs text-neutral-gray">{spec.cases} casos</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-neutral-ice">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary-blue mb-4">Nossas Especialidades</h2>
            <h3 className="text-4xl font-bold text-neutral-dark mb-6">Clique para Conhecer em Detalhes</h3>
          </div>
          
          {/* Row layout with fixed heights */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Service Grid - takes more space */}
            <div className="flex-1">
               <ServiceGrid />
            </div>

            {/* Sidebar - fixed width, centered vertically */}
            <div className="w-full lg:w-80 flex flex-col gap-6 justify-center">
              {/* 3D Model - Hidden on mobile for performance */}
              <div className="h-64 bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hidden lg:block">
                <Scene withEnvironment>
                  <ambientLight intensity={0.8} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                  <AnimalModel />
                </Scene>
              </div>
               
              {/* Diagnostic Center Card */}
              <div className="bg-primary-blue text-white p-6 rounded-3xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Microscope size={22} />
                  </div>
                  <h3 className="text-lg font-bold">Centro Diagnóstico</h3>
                </div>
                <ul className="space-y-3">
                  {diagnosticEquipment.map((eq, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <eq.icon size={16} className="text-primary-gold mt-0.5" />
                      <div>
                        <p className="font-bold text-sm">{eq.name}</p>
                        <p className="text-xs text-white/70">{eq.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold uppercase tracking-wider text-primary-green mb-4">Tecnologia de Ponta</h2>
              <h3 className="text-4xl font-bold text-neutral-dark mb-6 leading-tight">
                Diagnóstico Preciso para Tratamentos Eficazes
              </h3>
              <p className="text-lg text-neutral-gray mb-8 leading-relaxed">
                Nosso centro diagnóstico conta com equipamentos de última geração, permitindo exames completos sem que seu pet precise sair da clínica. Resultados rápidos significam tratamentos iniciados mais cedo.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary-blue/10 rounded-xl">
                    <Clock className="text-primary-blue" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-dark">30 min</p>
                    <p className="text-sm text-neutral-gray">Hemograma</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary-green/10 rounded-xl">
                    <Shield className="text-primary-green" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-dark">24/7</p>
                    <p className="text-sm text-neutral-gray">Disponibilidade</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/images/vet-dog.png" 
                alt="Veterinário examinando cachorro"
                loading="lazy" 
                className="rounded-3xl shadow-2xl object-cover h-[400px] w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-gold text-neutral-dark p-6 rounded-2xl font-bold shadow-xl">
                <p className="text-3xl">100%</p>
                <p className="text-sm">Digital</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-green to-primary-blue text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Precisa de um Especialista?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Agende uma consulta com nossos especialistas e tenha o diagnóstico completo do seu pet.
          </p>
          <button className="bg-white text-primary-blue px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            Agendar Consulta
          </button>
        </div>
      </section>
    </div>
  );
}
