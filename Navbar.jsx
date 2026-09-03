import { useEffect, useState } from 'react';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#capabilities', label: 'Skills' },
  { href: '#path', label: 'Path' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[var(--color-bg)]/90 backdrop-blur border-b border-[var(--color-line)]' : 'border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-[var(--font-display)] text-lg tracking-tight text-[var(--color-ink)]"
        >
          Dhrusha Ghate
        </a>
        <ul className="hidden sm:flex items-center gap-8 text-sm text-[var(--color-muted)]">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-[var(--color-ink)] transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:dhrushaghate@gmail.com"
          className="hidden sm:inline-block text-sm text-[var(--color-ink)] border border-[var(--color-line)] rounded-full px-4 py-1.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
        >
          Say hello
        </a>
      </nav>
    </header>
  );
}
