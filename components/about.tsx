import { experiences, site, stats } from '@/lib/content';
import { MotionSection } from '@/components/motion-section';

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <MotionSection>
          <div className="relative mx-auto max-w-[380px] overflow-hidden rounded-md border border-ink/10 bg-ink shadow-soft sm:max-w-[440px] lg:mx-0">
            <img
              src="/assets/profile_img.jpeg"
              alt="Portrait of Zaman Sikander"
              width="560"
              height="560"
              className="aspect-square w-full object-cover object-[52%_45%]"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-r from-moss/18 via-gold/16 to-clay/18 mix-blend-screen" />
          </div>
        </MotionSection>

        <MotionSection delay={0.1}>
          <p className="eyebrow">About</p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold sm:text-4xl">Frontend detail with full-stack practicality.</h2>
          <div className="mt-6 space-y-4 text-lg leading-8 text-ink/68 dark:text-paper/68">
            <p>
              Hi there. I am Zaman, a passionate frontend developer with over 3 years of experience creating elegant,
              responsive, and user-friendly web applications.
            </p>
            <p>
              I specialize in modern JavaScript frameworks like React, with a strong focus on pixel-perfect interfaces,
              design systems, accessibility standards, and clean implementation.
            </p>
            <p>
              My work bridges design and development: practical enough for business goals, polished enough to feel
              considered, and structured enough to keep evolving after launch.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded border border-ink/10 bg-paper p-4 dark:border-white/10 dark:bg-white/5">
                <p className="font-[var(--font-display)] text-3xl font-semibold text-clay dark:text-gold">{stat.value}</p>
                <p className="mt-1 text-sm leading-6 text-ink/62 dark:text-paper/62">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-ink/10 pt-6 dark:border-white/10">
            <p className="font-semibold">Based in {site.location}, working with clients worldwide.</p>
          </div>
        </MotionSection>
      </div>

      <div className="container-shell mt-14">
        <MotionSection>
          <div id="experience" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {experiences.map((item) => (
              <article key={item.role} className="rounded-md border border-ink/10 bg-paper p-5 dark:border-white/10 dark:bg-ink">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-moss dark:text-gold">{item.company}</p>
                <h3 className="mt-3 text-xl font-semibold">{item.role}</h3>
                <p className="mt-3 leading-7 text-ink/64 dark:text-paper/64">{item.description}</p>
              </article>
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
