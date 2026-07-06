import { Mail, Phone } from 'lucide-react';
import { site, socialLinks } from '@/lib/content';
import { MotionSection } from '@/components/motion-section';

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-paper dark:bg-ink">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <MotionSection>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold sm:text-4xl">Have something special in mind?</h2>
          <div className="mt-6 space-y-4 text-lg leading-8 text-ink/68 dark:text-paper/68">
            <p>I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            <p>
              Whether you need a web application, want to revamp your digital presence, or just want to chat about
              technology, I am here to help.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            <a href={`mailto:${site.email}`} className="focus-ring flex items-center gap-3 rounded-md text-ink transition hover:text-clay dark:text-paper dark:hover:text-gold">
              <Mail aria-hidden="true" className="h-5 w-5" />
              {site.email}
            </a>
            <a href={`tel:${site.phone}`} className="focus-ring flex items-center gap-3 rounded-md text-ink transition hover:text-clay dark:text-paper dark:hover:text-gold">
              <Phone aria-hidden="true" className="h-5 w-5" />
              {site.displayPhone}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded border border-ink/10 bg-white px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-clay hover:text-clay dark:border-white/10 dark:bg-white/5 dark:hover:border-gold dark:hover:text-gold"
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </MotionSection>

        <MotionSection delay={0.12}>
          <div className="rounded-md border border-ink/10 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-white/5 sm:p-7">
            {/* TODO: Wire up form submission — handled separately by owner */}
            <form className="space-y-5" aria-label="Contact form placeholder">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-ink/72 dark:text-paper/72">Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="mt-2 min-h-12 w-full rounded border border-ink/12 bg-paper px-4 text-ink outline-none transition placeholder:text-ink/38 focus:border-clay dark:border-white/12 dark:bg-ink dark:text-paper dark:placeholder:text-paper/35 dark:focus:border-gold"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-ink/72 dark:text-paper/72">Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="mt-2 min-h-12 w-full rounded border border-ink/12 bg-paper px-4 text-ink outline-none transition placeholder:text-ink/38 focus:border-clay dark:border-white/12 dark:bg-ink dark:text-paper dark:placeholder:text-paper/35 dark:focus:border-gold"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-sm font-semibold text-ink/72 dark:text-paper/72">Project type</span>
                <input
                  type="text"
                  name="project"
                  placeholder="Website, dashboard, MVP, or redesign"
                  className="mt-2 min-h-12 w-full rounded border border-ink/12 bg-paper px-4 text-ink outline-none transition placeholder:text-ink/38 focus:border-clay dark:border-white/12 dark:bg-ink dark:text-paper dark:placeholder:text-paper/35 dark:focus:border-gold"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-ink/72 dark:text-paper/72">Message</span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="How can I help?"
                  className="mt-2 w-full resize-none rounded border border-ink/12 bg-paper px-4 py-3 text-ink outline-none transition placeholder:text-ink/38 focus:border-clay dark:border-white/12 dark:bg-ink dark:text-paper dark:placeholder:text-paper/35 dark:focus:border-gold"
                />
              </label>
              <button
                type="button"
                className="inline-flex min-h-12 w-full items-center justify-center rounded bg-ink px-5 py-3 font-semibold text-paper opacity-70 dark:bg-paper dark:text-ink"
              >
                Send Message
              </button>
            </form>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
