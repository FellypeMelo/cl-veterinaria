import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';
import React, { useLayoutEffect } from 'react';

// Register plugins globally
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, Observer);
}

// Global default settings
gsap.defaults({
  duration: 1.2,
  ease: 'power3.out'
});

// Hook for safe GSAP usage with React 18 Strict Mode
export const useGsapContext = (scope: React.RefObject<HTMLElement>) => {
  const ctx = React.useRef<gsap.Context>();

  useLayoutEffect(() => {
    ctx.current = gsap.context(() => {}, scope);
    return () => ctx.current?.revert();
  }, [scope]);

  return ctx;
};

export { gsap, ScrollTrigger, Observer };
