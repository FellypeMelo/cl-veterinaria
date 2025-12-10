import { motion } from 'framer-motion';
import { Linkedin, Award } from 'lucide-react';

const doctors = [
  {
    id: 1,
    name: "Dr. Roberto Silva",
    specialty: "Diretor Clínico e Cirurgião",
    crm: "CRMV-SP -----",
    image: "/images/vet-male-1.png",
    bio: "Mestre em Cirurgia de Tecidos Moles pela USP. 20 anos de experiência."
  },
  {
    id: 2,
    name: "Dra. Ana Paula",
    specialty: "Oncologia Veterinária",
    crm: "CRMV-SP -----",
    image: "/images/director-portrait.png",
    bio: "Especialista em quimioterapia e tratamentos paliativos."
  },
  {
    id: 3,
    name: "Dr. Carlos Eduardo",
    specialty: "Cardiologia",
    crm: "CRMV-SP -----",
    image: "/images/vet-male-1.png",
    bio: "Doutor em Cardiologia Comparada. Realiza ecocardiogramas e cirurgias cardíacas."
  },
  {
    id: 4,
    name: "Dra. Juliana Costa",
    specialty: "Dermatologia",
    crm: "CRMV-SP -----",
    image: "/images/director-portrait.png",
    bio: "Foco em alergias crônicas e imunoterapia."
  }
];

export const DoctorsGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">Corpo Clínico</h2>
          <p className="text-neutral-gray max-w-2xl mx-auto">
            Uma equipe multidisciplinar de especialistas apaixonados pelo que fazem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/4]">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-white text-sm mb-4">{doctor.bio}</p>
                  <button className="text-white flex items-center gap-2 hover:text-primary-gold transition-colors">
                    <Linkedin size={18} />
                    Ver Lattes
                  </button>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-neutral-dark group-hover:text-primary-blue transition-colors">
                {doctor.name}
              </h3>
              <p className="text-primary-blue font-medium mb-1">{doctor.specialty}</p>
              <p className="text-sm text-neutral-gray flex items-center gap-1">
                <Award size={14} />
                {doctor.crm}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
