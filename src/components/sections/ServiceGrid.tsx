import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartPulse, Stethoscope, Bone, Eye, Cat, Syringe, X, ChevronRight } from 'lucide-react';

const services = [
  {
    id: "cardio",
    title: "Cardiologia",
    icon: HeartPulse,
    color: "text-red-500",
    bg: "bg-red-50",
    description: "Diagnóstico e tratamento completo de doenças cardíacas.",
    details: {
      conditions: ["Insuficiência Cardíaca", "Hipertensão", "Arritmias"],
      procedures: ["Ecocardiograma com Doppler", "Eletrocardiograma", "Mensuração de PA"],
      specialist: "Dr. Carlos Eduardo"
    }
  },
  {
    id: "derma",
    title: "Dermatologia",
    icon: Syringe,
    color: "text-purple-500",
    bg: "bg-purple-50",
    description: "Soluções para alergias, otites e problemas de pele crônicos.",
    details: {
      conditions: ["Dermatite Atópica", "Alergia Alimentar", "Otites Recorrentes"],
      procedures: ["Citologia", "Testes Alérgicos", "Biópsia de Pele"],
      specialist: "Dra. Juliana Costa"
    }
  },
  {
    id: "orto",
    title: "Ortopedia",
    icon: Bone,
    color: "text-amber-600",
    bg: "bg-amber-50",
    description: "Cirurgias avançadas e reabilitação de fraturas e articulações.",
    details: {
      conditions: ["Fraturas", "Ruptura de Ligamento Cruzado", "Displasia Coxofemoral"],
      procedures: ["TPLO", "Osteossíntese", "Artrodese"],
      specialist: "Dr. Roberto Silva"
    }
  },
  {
    id: "oftalmo",
    title: "Oftalmologia",
    icon: Eye,
    color: "text-blue-500",
    bg: "bg-blue-50",
    description: "Cuidado especializado para a visão do seu pet.",
    details: {
      conditions: ["Catarata", "Glaucoma", "Úlcera de Córnea"],
      procedures: ["Cirurgia de Catarata", "Flap de 3ª Pálpebra", "Tonometria"],
      specialist: "Equipe Especializada"
    }
  },
  {
    id: "felinos",
    title: "Medicina Felina",
    icon: Cat,
    color: "text-teal-500",
    bg: "bg-teal-50",
    description: "Atendimento Cat Friendly pensado para o conforto dos gatos.",
    details: {
      conditions: ["Doença Renal Crônica", "Complexo Respiratório", "FELV/FIV"],
      procedures: ["Manejo Low Stress", "Internação Exclusiva", "Exames Específicos"],
      specialist: "Equipe Cat Friendly"
    }
  },
  {
    id: "geral",
    title: "Clínica Geral",
    icon: Stethoscope,
    color: "text-primary-blue",
    bg: "bg-blue-50",
    description: "Prevenção e cuidado dia a dia para uma vida longa.",
    details: {
      conditions: ["Check-up Anual", "Vacinação", "Verminose"],
      procedures: ["Microchipagem", "Consultas Pediátricas", "Geriatria"],
      specialist: "Equipe Clínica"
    }
  }
];

export const ServiceGrid = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <motion.div 
            key={service.id}
            whileHover={{ y: -5 }}
            className={`p-6 rounded-3xl border border-transparent hover:border-neutral-ice hover:shadow-xl transition-all cursor-pointer bg-white group`}
            onClick={() => setSelectedService(service)}
          >
            <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <service.icon size={28} className={service.color} />
            </div>
            <h3 className="text-xl font-bold text-neutral-dark mb-2 group-hover:text-primary-blue transition-colors">{service.title}</h3>
            <p className="text-neutral-gray text-sm mb-4 leading-relaxed">{service.description}</p>
            <div className="flex items-center text-sm font-bold text-primary-gold uppercase tracking-wide">
              Saiba mais <ChevronRight size={16} />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 bg-neutral-ice rounded-full hover:bg-neutral-gray/20 transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col md:flex-row">
                 {/* Sidebar / Header Colored */}
                 <div className={`p-8 md:w-1/3 ${selectedService.bg} flex flex-col items-center justify-center text-center`}>
                    <div className="p-4 bg-white rounded-full shadow-sm mb-4">
                       <selectedService.icon size={48} className={selectedService.color} />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-dark">{selectedService.title}</h3>
                 </div>

                 {/* Content */}
                 <div className="p-8 md:w-2/3">
                    <div className="mb-6">
                       <h4 className="text-sm font-bold text-neutral-gray uppercase mb-3">Principais Tratamentos</h4>
                       <div className="flex flex-wrap gap-2">
                          {selectedService.details.conditions.map((item, i) => (
                             <span key={i} className="px-3 py-1 bg-neutral-ice rounded-lg text-sm font-medium text-neutral-dark">
                                {item}
                             </span>
                          ))}
                       </div>
                    </div>

                    <div className="mb-6">
                       <h4 className="text-sm font-bold text-neutral-gray uppercase mb-3">Procedimentos & Exames</h4>
                       <ul className="space-y-2">
                          {selectedService.details.procedures.map((item, i) => (
                             <li key={i} className="flex items-center gap-2 text-neutral-dark text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary-gold" />
                                {item}
                             </li>
                          ))}
                       </ul>
                    </div>
                    
                    <div className="pt-6 border-t border-neutral-ice">
                       <p className="text-sm text-neutral-gray">Responsável Técnico</p>
                       <p className="font-bold text-primary-blue">{selectedService.details.specialist}</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
