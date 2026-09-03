import { useReveal } from '../hooks/useReveal';

const groups = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'C', 'JavaScript'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'Backend & data',
    items: ['Node.js', 'Express', 'MongoDB', 'SQL'],
  },
  {
    title: 'Machine learning',
    items: ['Model building', 'Data preprocessing', 'Model evaluation'],
  },
  {
    title: 'Cloud & tools',
    items: ['Google Cloud Platform', 'Git', 'GitHub'],
  },
];

export default function Capabilities() {
  const ref = useReveal({ stagger: true });
  return (
    <section id="capabilities" className="px-6 md:px-10 py-24 md:py-32 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[var(--font-display)] text-4xl md:text-5xl text-[var(--color-ink)] mb-12">
          What I work with
        </h2>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-10">
          {groups.map((group) => (
            <div key={group.title} data-reveal>
              <h3 className="text-sm text-[var(--color-accent-soft)] mb-4 pb-3 border-b border-[var(--color-line)]">
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-[var(--color-ink)] text-[15px]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
