import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartPulse, Stethoscope, Bone, Eye, Cat, Syringe } from 'lucide-react';

const services = [
  {
    id: "cardio",
    title: "Cardiologia",
    icon: HeartPulse,
    color: "text-red-500",
    description: "Diagnóstico e tratamento de doenças cardíacas. Realizamos ecocardiograma com Doppler, eletrocardiograma e monitoramento de pressão arterial. Ideal para pacientes idosos ou com tosse crônica."
  },
  {
    id: "derma",
    title: "Dermatologia",
    icon: Syringe,
    color: "text-purple-500",
    description: "Investigação de alergias, otites e problemas de pele. Testes alérgicos, citologia e biópsias para garantir o conforto do seu pet e o controle da coceira."
  },
  {
    id: "orto",
    title: "Ortopedia",
    icon: Bone,
    color: "text-amber-600",
    description: "Especialidade focada em fraturas, luxações e doenças articulares. Cirurgias avançadas como TPLO e correção de deformidades, além de acompanhamento pós-operatório."
  },
  {
    id: "oftalmo",
    title: "Oftalmologia",
    icon: Eye,
    color: "text-blue-500",
    description: "Tratamento de úlceras, catarata, glaucoma e 'olho seco'. Equipamentos específicos para medição de pressão ocular e cirurgias de pálpebra."
  },
  {
    id: "felinos",
    title: "Medicina de Felinos",
    icon: Cat,
    color: "text-teal-500",
    description: "Atendimento especializado 'Cat Friendly'. Ambiente silencioso, manejo delicado e conhecimento aprofundado nas particularidades fisiológicas e comportamentais dos gatos."
  },
  {
    id: "geral",
    title: "Clínica Geral & Preventiva",
    icon: Stethoscope,
    color: "text-primary-blue",
    description: "Check-ups, vacinação, microchipagem e orientações nutricionais. A base para uma vida longa e saudável para seu melhor amigo."
  }
];

export const ServiceAccordion = () => {
  const [expanded, setExpanded] = useState<string | null>("cardio");

  return (
    <div className="grid gap-4">
      {services.map((service) => (
        <motion.div 
          key={service.id}
          initial={false}
          className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
            expanded === service.id ? 'ring-2 ring-primary-blue/20' : ''
          }`}
          onClick={() => setExpanded(expanded === service.id ? null : service.id)}
        >
          <motion.header 
            className="flex items-center gap-4 p-6"
          >
            <div className={`p-3 rounded-full bg-neutral-ice ${service.color}`}>
              <service.icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-neutral-dark flex-grow">{service.title}</h3>
            <motion.div
              animate={{ rotate: expanded === service.id ? 180 : 0 }}
              className="text-neutral-gray"
            >
              ▼
            </motion.div>
          </motion.header>

          <AnimatePresence initial={false}>
            {expanded === service.id && (
              <motion.section
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-6 pb-6 pt-0 text-neutral-gray leading-relaxed border-t border-neutral-ice mt-2 border-dashed">
                  <div className="pt-4">
                    {service.description}
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};
