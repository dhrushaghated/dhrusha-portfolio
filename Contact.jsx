import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const ref = useReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:dhrushaghate@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="px-6 md:px-10 py-24 md:py-32 bg-[var(--color-surface)]">
      <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl text-[var(--color-ink)] leading-tight">
            Let's build something.
          </h2>
          <p className="mt-5 text-[var(--color-muted)] leading-relaxed max-w-sm">
            Open to software engineering roles and interesting full-stack or ML projects.
            The fastest way to reach me is email.
          </p>

          <div className="mt-10 space-y-4">
            <a href="mailto:dhrushaghate@gmail.com" className="block text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors">
              dhrushaghate@gmail.com
            </a>
            <a href="tel:+918310947518" className="block text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors">
              +91 83109 47518
            </a>
            <p className="text-[var(--color-muted-2)]">Mangalore, India</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="md:col-span-7 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <label className="flex flex-col gap-2">
              <span className="text-sm text-[var(--color-muted-2)]">Name</span>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent border-b border-[var(--color-line)] py-2 text-[var(--color-ink)] focus:border-[var(--color-accent)] transition-colors outline-none"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm text-[var(--color-muted-2)]">Email</span>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border-b border-[var(--color-line)] py-2 text-[var(--color-ink)] focus:border-[var(--color-accent)] transition-colors outline-none"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2">
            <span className="text-sm text-[var(--color-muted-2)]">Message</span>
            <textarea
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent border-b border-[var(--color-line)] py-2 text-[var(--color-ink)] focus:border-[var(--color-accent)] transition-colors outline-none resize-none"
            />
          </label>
          <button
            type="submit"
            className="self-start mt-2 inline-flex items-center gap-2 bg-[var(--color-accent)] text-[#14211a] text-sm font-medium rounded-full px-6 py-3 hover:bg-[var(--color-ink)] transition-colors"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
