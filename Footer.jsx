export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-8 border-t border-[var(--color-line)]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[var(--color-muted-2)]">
        <p>© {new Date().getFullYear()} D Dhrusha Ghate</p>
        <div className="flex items-center gap-6">
          {/* TODO: replace # with your real GitHub / LinkedIn URLs */}
         
         
          <a href="mailto:dhrushaghate@gmail.com" className="hover:text-[var(--color-ink)] transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
