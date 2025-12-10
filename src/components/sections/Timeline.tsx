import { motion } from 'framer-motion';

const historyPoints = [
  { year: "2012", title: "Fundação", text: "Início das atividades em um pequeno consultório, mas com grandes sonhos." },
  { year: "2015", title: "Expansão", text: "Mudança para a sede atual e inauguração do centro cirúrgico." },
  { year: "2018", title: "Certificação", text: "Reconhecimento como Hospital Veterinário 24h e selo Cat Friendly." },
  { year: "2021", title: "Tecnologia", text: "Aquisição de Tomógrafo e equipamentos de ponta para diagnóstico." },
  { year: "2024", title: "Excelência", text: "Referência regional em medicina veterinária complexa." }
];

export const Timeline = () => {
  // Using basic framer motion scroll for simplicity first, can upgrade to 3D later if needed
  
  return (
    <section className="py-20 bg-neutral-ice overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Nossa História</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary-blue/20 -translate-x-1/2 hidden md:block" />

          {historyPoints.map((point, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row items-center gap-8 mb-12 md:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 text-center md:text-left p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow relative z-10 w-full md:w-auto">
                <span className="text-primary-gold font-bold text-xl block mb-2">{point.year}</span>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">{point.title}</h3>
                <p className="text-neutral-gray">{point.text}</p>
              </div>

              {/* Dot */}
              <div className="w-4 h-4 bg-primary-blue rounded-full relative z-10 md:mx-auto ring-4 ring-white shrink-0" />

              {/* Spacer */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
