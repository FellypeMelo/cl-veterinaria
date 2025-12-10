import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const facilities = [
  {
    title: "Recepção Cat Friendly",
    desc: "Área exclusiva para felinos, reduzindo o estresse da espera.",
    img: "/images/happy-cat.png"
  },
  {
    title: "Centro Cirúrgico Avançado",
    desc: "Monitoramento multiparamétrico e anestesia inalatória.",
    img: "/images/surgery-room.png"
  },
  {
    title: "UTI 24h",
    desc: "Baias aquecidas, oxigenoterapia e monitoramento constante.",
    img: "/images/icu-room.png"
  },
  {
    title: "Laboratório Próprio",
    desc: "Resultados de exames em minutos para condutas rápidas.",
    img: "/images/lab-microscope.png"
  }
];

export const FacilitiesGallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-dark">Nossa Estrutura</h2>
        
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <Swiper
            modules={[Navigation, Pagination, EffectFade]}
            effect="fade"
            navigation
            pagination={{ clickable: true }}
            className="w-full aspect-video md:aspect-[21/9]"
          >
            {facilities.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    loading="lazy" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-lg text-white/90 max-w-xl">{item.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
