import { services } from '@/lib/content';
import { MotionSection } from '@/components/motion-section';

export function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container-shell">
        <MotionSection className="max-w-3xl">
          <p className="eyebrow">Services</p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold sm:text-4xl">Web work that is built for the way people actually use it.</h2>
          <p className="mt-4 text-lg leading-8 text-ink/68 dark:text-paper/68">
            From the first landing page to the product screens behind the login, I help shape reliable, responsive
            interfaces that feel clear and fast.
          </p>
        </MotionSection>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ title, description, icon: Icon }, index) => (
            <MotionSection key={title} delay={index * 0.06}>
              <article className="h-full rounded-md border border-ink/10 bg-paper p-6 transition hover:-translate-y-1 hover:border-clay/35 hover:shadow-soft dark:border-white/10 dark:bg-ink dark:hover:border-gold/45">
                <div className="grid h-11 w-11 place-items-center rounded bg-moss/12 text-moss dark:bg-gold/12 dark:text-gold">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-ink/66 dark:text-paper/66">{description}</p>
              </article>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}
