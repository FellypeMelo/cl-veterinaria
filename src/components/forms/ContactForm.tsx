import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';

const contactSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  petName: z.string().min(2, "Nome do pet é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  subject: z.enum(["consulta", "exame", "urgencia", "duvida"], {
    errorMap: () => ({ message: "Selecione um assunto" })
  }),
  message: z.string().min(10, "Mensagem muito curta")
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset 
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    // In a real app, this would send data to an API
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-neutral-dark mb-2">Seu Nome</label>
          <input 
            {...register('name')}
            className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-neutral-ice'} bg-neutral-ice focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-all`}
            placeholder="João Silva"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-neutral-dark mb-2">Nome do Pet</label>
          <input 
            {...register('petName')}
            className={`w-full px-4 py-3 rounded-xl border ${errors.petName ? 'border-red-500' : 'border-neutral-ice'} bg-neutral-ice focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-all`}
            placeholder="Thor"
          />
          {errors.petName && <p className="text-red-500 text-xs mt-1">{errors.petName.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-neutral-dark mb-2">Email</label>
          <input 
            {...register('email')}
            className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-neutral-ice'} bg-neutral-ice focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-all`}
            type="email"
            placeholder="joao@email.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-neutral-dark mb-2">WhatsApp</label>
          <input 
            {...register('phone')}
            className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-neutral-ice'} bg-neutral-ice focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-all`}
            placeholder="(11) 99999-9999"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-neutral-dark mb-2">Assunto</label>
        <select 
          {...register('subject')}
          className={`w-full px-4 py-3 rounded-xl border ${errors.subject ? 'border-red-500' : 'border-neutral-ice'} bg-neutral-ice focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-all text-neutral-dark`}
        >
          <option value="">Selecione...</option>
          <option value="consulta">Agendar Consulta</option>
          <option value="exame">Agendar Exame</option>
          <option value="urgencia">Urgência / Emergência</option>
          <option value="duvida">Dúvidas Gerais</option>
        </select>
        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-bold text-neutral-dark mb-2">Mensagem</label>
        <textarea 
          {...register('message')}
          rows={4}
          className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-neutral-ice'} bg-neutral-ice focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-all`}
          placeholder="Conte-nos como podemos ajudar..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-blue text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
      </motion.button>
    </form>
  );
};
