import { useReveal } from '../hooks/useReveal';

const projects = [
  {
    index: '01',
    title: 'Gastric carcinoma detection',
    category: 'Machine learning · Healthcare',
    description:
      'A model trained on medical imaging data to flag signs of gastric carcinoma early, aimed at supporting faster diagnosis.',
    tags: ['Python', 'Machine Learning', 'Data Preprocessing'],
  },
  {
    index: '02',
    title: 'Kurti e-commerce store',
    category: 'Full-stack · MERN',
    description:
      'A storefront for kurtis with a product catalog, cart, and order flow, built end to end on the MERN stack.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  {
    index: '03',
    title: 'Thrifty expense tracker',
    category: 'Full-stack · Personal finance',
    description:
      'An app for logging day-to-day expenses, sorting them into categories, and seeing spending patterns over time.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    index: '04',
    title: 'Smart attendance system',
    category: 'Full-stack · Automation',
    description:
      'Replaces manual roll calls with an automated attendance flow, cutting down errors and admin work.',
    tags: ['React', 'Node.js', 'SQL'],
  },
];

function ProjectRow({ project }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="group py-10 md:py-12 border-b border-[var(--color-line)] grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 md:items-baseline"
    >
      <span className="md:col-span-1 font-[var(--font-display)] text-[var(--color-muted-2)] text-sm">
        {project.index}
      </span>

      <div className="md:col-span-4">
        <h3 className="font-[var(--font-display)] text-2xl md:text-3xl text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-[var(--color-accent-soft)]">{project.category}</p>
      </div>

      <p className="md:col-span-5 text-[var(--color-muted)] text-base leading-relaxed">
        {project.description}
      </p>

      <div className="md:col-span-2 flex md:flex-col flex-wrap gap-2 md:items-end">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs text-[var(--color-muted-2)] border border-[var(--color-line)] rounded-full px-3 py-1">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Work() {
  const headingRef = useReveal();
  return (
    <section id="work" className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="max-w-xl mb-10">
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl text-[var(--color-ink)]">
             Work
          </h2>
          <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
            Four projects that span healthcare ML, e-commerce, personal finance, and automation —
            each one built end to end.
          </p>
        </div>

        <div className="border-t border-[var(--color-line)]">
          {projects.map((project) => (
            <ProjectRow key={project.index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
