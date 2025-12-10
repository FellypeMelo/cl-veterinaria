import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: "Mariana Souza",
    pet: "Thor (Golden Retriever)",
    text: "A equipe da Santa Luzia salvou a vida do Thor quando ele teve torção gástrica. A agilidade e a estrutura da UTI foram fundamentais. Eternamente grata!",
    image: "https://images.unsplash.com/photo-1517423568366-697555ee0974?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 2,
    name: "Carlos Mendes",
    pet: "Luna (Gatinha)",
    text: "O atendimento 'Cat Friendly' fez toda diferença. A Luna sempre ficava estressada em outras clínicas, mas aqui ela foi tratada com uma calma impressionante.",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 3,
    name: "Fernanda Lima",
    pet: "Bob (Bulldog)",
    text: "A cirurgia de coluna do Bob foi um sucesso. A recuperação na fisioterapia foi incrível. Hoje ele corre como se nada tivesse acontecido.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-neutral-ice">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">O que dizem nossos clientes</h2>
          <p className="text-neutral-gray max-w-2xl mx-auto">Histórias reais de recuperação e carinho que nos motivam todos os dias.</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="pb-16"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <Quote className="text-primary-blue/20 w-12 h-12 mb-6" />
                <p className="text-neutral-dark mb-6 flex-grow italic">"{item.text}"</p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary-green"
                  />
                  <div>
                    <h4 className="font-bold text-neutral-dark">{item.name}</h4>
                    <span className="text-sm text-primary-blue font-medium">{item.pet}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
