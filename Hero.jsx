import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import pictureImg from '../assets/Portfolio/picture.png';

export default function Hero() {
  const lineRefs = useRef([]);
  const restRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.fromTo(
      lineRefs.current,
      { y: '100%' },
      { y: '0%', duration: 1, stagger: 0.08 }
    ).fromTo(
      restRef.current.children,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
      '-=0.4'
    );
  }, []);

  return (
    <section id="top" className="relative pt-40 pb-24 md:pt-52 md:pb-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-10">
        {/* Name + pitch — left, ~60% */}
        <div className="md:col-span-7">
          <p className="text-[var(--color-accent-soft)] text-sm mb-5">Software Engineer & Developer</p>

          <h1 className="font-[var(--font-display)] font-normal text-[13vw] sm:text-6xl md:text-7xl leading-[0.98] text-[var(--color-ink)]">
            <span className="block overflow-hidden">
              <span ref={(el) => (lineRefs.current[0] = el)} className="block">
                Dhrusha
              </span>
            </span>
            <span className="block overflow-hidden">
              <span ref={(el) => (lineRefs.current[1] = el)} className="block italic text-[var(--color-accent)]">
                Ghate
              </span>
            </span>
          </h1>

          <div ref={restRef} className="mt-8 max-w-md">
            <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed">
              I build full-stack products end to end, and I like bringing machine learning
              into them where it actually helps — from an early-detection model for gastric
              carcinoma to the everyday apps people open every day.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-[#14211a] text-sm font-medium rounded-full px-6 py-3 hover:bg-[var(--color-ink)] transition-colors"
              >
                Get in touch
              </a>
              <a href="#work" className="text-sm text-[var(--color-ink)] border-b border-[var(--color-line)] hover:border-[var(--color-accent)] pb-0.5 transition-colors">
                See my work
              </a>
            </div>
          </div>
        </div>

        {/* At a glance — right, ~40% */}
        <div className="md:col-span-4 md:col-start-9 flex md:flex-col gap-8 md:gap-0">
          <div className="hidden md:block w-77 aspect-[4/5] overflow-hidden rounded-sm border border-[var(--color-line)] mb-8">
            <img src={pictureImg} alt="D Dhrusha Ghate" className="w-full h-full object-cover" />
          </div>

          <div className="border border-[var(--color-line)] rounded-md bg-[var(--color-surface)]/60 px-6 py-6 w-full">
            <p className="text-xs tracking-wide text-[var(--color-accent-soft)] mb-5 pb-4 border-b border-[var(--color-line)]">
              Profile
            </p>
            <dl className="divide-y divide-[var(--color-line)]">
              <div className="py-3.5 flex justify-between gap-4 first:pt-0">
                <dt className="text-sm text-[var(--color-muted-2)]">Location</dt>
                <dd className="text-sm text-[var(--color-ink)] font-medium text-right">Mangalore, India</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-sm text-[var(--color-muted-2)]">Education</dt>
                <dd className="text-sm text-[var(--color-ink)] font-medium text-right">B.E. Computer Science<br />9.11 CGPA</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4">
                <dt className="text-sm text-[var(--color-muted-2)]">Skills</dt>
                <dd className="text-sm text-[var(--color-ink)] font-medium text-right">Full-stack , AI & ML</dd>
              </div>
              <div className="py-3.5 flex justify-between gap-4 last:pb-0">
                <dt className="text-sm text-[var(--color-muted-2)]">Open to</dt>
                <dd className="text-sm text-[var(--color-ink)] font-medium text-right">Software engineering roles</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
