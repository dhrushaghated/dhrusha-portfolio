import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// One consistent, restrained reveal used across sections:
// content rises slightly and fades in the first time it enters view.
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = options.stagger ? el.querySelectorAll('[data-reveal]') : el;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.set(targets, { opacity: 0, y: 24 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(targets, {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
              stagger: options.stagger ? 0.12 : 0,
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.stagger]);

  return ref;
}
