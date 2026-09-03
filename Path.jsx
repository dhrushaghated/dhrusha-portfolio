import { useReveal } from '../hooks/useReveal';

const milestones = [
  {
    when: 'Graduate',
    title: 'B.E. in Computer Science, VCET',
    description: 'Graduated with a B.E. in Computer Science, 9.11 CGPA.',
  },
  {
    when: 'Internship',
    title: 'Prinston Smart Engineers',
    description: 'Worked on full-stack web development, building a project on the MERN stack.',
  },
  {
    when: '2025',
    title: 'IEEE INCOWOCO 2025',
    // TODO: add the paper title and a line on the topic
    description: 'Published research at the IEEE INCOWOCO conference.',
  },
  {
    when: '2025',
    title: 'DRISHTI-2025',
    // TODO: add what this event was and your result
    description: 'Recognized at DRISHTI-2025.',
  },
];

export default function Path() {
  const ref = useReveal({ stagger: true });
  return (
    <section id="path" className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[var(--font-display)] text-4xl md:text-5xl text-[var(--color-ink)] mb-12">
          Path so far
        </h2>

        <div ref={ref} className="max-w-2xl">
          {milestones.map((m, i) => (
            <div
              key={m.title}
              data-reveal
              className={`grid grid-cols-[5.5rem_1fr] gap-6 pb-10 ${
                i !== milestones.length - 1 ? 'border-b border-[var(--color-line)] mb-10' : ''
              }`}
            >
              <span className="text-sm text-[var(--color-muted-2)] pt-1">{m.when}</span>
              <div>
                <h3 className="text-lg text-[var(--color-ink)] font-medium">{m.title}</h3>
                <p className="mt-1.5 text-[var(--color-muted)] leading-relaxed">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
