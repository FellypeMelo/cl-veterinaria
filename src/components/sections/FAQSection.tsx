import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Vocês atendem 24 horas?",
    answer: "Sim! Somos um Hospital Veterinário com atendimento 24 horas por dia, 7 dias por semana, inclusive feriados. Contamos sempre com veterinário presencial, cirurgião de sobreaviso e suporte de internação completo."
  },
  {
    question: "Quais formas de pagamento aceitam?",
    answer: "Aceitamos cartões de crédito/débito (parcelamento em até 6x sem juros), dinheiro e Pix. Também trabalhamos com alguns planos de saúde pet (consulte a recepção para verificar cobertura)."
  },
  {
    question: "É necessário agendar consulta?",
    answer: "Para consultas de rotina e especialistas, recomendamos o agendamento prévio para garantir seu horário. Emergências são atendidas prioritariamente sem necessidade de agendamento."
  },
  {
    question: "Possuem estacionamento?",
    answer: "Sim, oferecemos estacionamento gratuito e monitorado para clientes em frente à clínica, com total segurança para você e seu pet."
  },
  {
    question: "Realizam exames na hora?",
    answer: "Sim, nosso laboratório próprio e centro de imagem permitem a realização de hemogramas, bioquímicos, raio-x e ultrassom com resultados rápidos para auxiliar no diagnóstico imediato."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold text-neutral-dark mb-8 text-center">Dúvidas Frequentes</h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl border border-neutral-ice overflow-hidden cursor-pointer hover:border-primary-blue/30 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="p-6 flex items-center justify-between gap-4">
              <h4 className="font-bold text-neutral-dark text-lg">{faq.question}</h4>
              <div className={`p-2 rounded-full ${openIndex === index ? 'bg-primary-blue text-white' : 'bg-neutral-ice text-neutral-gray'} transition-colors`}>
                 {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
              </div>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 text-neutral-gray leading-relaxed border-t border-neutral-ice pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};
