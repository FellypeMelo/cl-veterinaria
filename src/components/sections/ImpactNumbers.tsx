import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const numbers = [
  { value: 15000, label: "Atendimentos Realizados", suffix: "+" },
  { value: 12, label: "Anos de História", suffix: "" },
  { value: 20, label: "Especialistas", suffix: "+" },
];

export const ImpactNumbers = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in animation for stat items
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Counter animation for each number
      numbers.forEach((stat, index) => {
        const el = document.getElementById(`counter-${index}`);
        if (!el) return;
        
        const proxy = { val: 0 };
        
        gsap.to(proxy, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          val: stat.value,
          duration: 2.5,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.ceil(proxy.val).toLocaleString('pt-BR');
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-primary-blue text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute -top-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
         <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary-green rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {numbers.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="text-5xl md:text-7xl font-bold font-heading mb-2 flex justify-center items-baseline">
                {stat.suffix && <span className="text-4xl text-primary-gold mr-1">{stat.suffix}</span>}
                <span id={`counter-${index}`}>0</span>
              </div>
              <p className="text-lg md:text-xl font-medium text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
