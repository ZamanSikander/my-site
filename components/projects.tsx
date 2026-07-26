import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/content';
import { MotionSection } from '@/components/motion-section';

export function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <MotionSection className="max-w-3xl">
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold sm:text-4xl">Recent builds and interface concepts.</h2>
          </MotionSection>
          <MotionSection delay={0.08}>
            <p className="max-w-md leading-7 text-ink/66 dark:text-paper/66">
              Migrated from the existing portfolio screenshots and copy, with room to replace placeholder links with live
              case studies.
            </p>
          </MotionSection>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <MotionSection key={project.title} delay={index * 0.08}>
              <article className="group h-full overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-clay/35 hover:shadow-soft dark:border-white/10 dark:bg-white/5 dark:hover:border-gold/45">
                <a href={project.href} target="_blank" rel="noreferrer" className="block focus:outline-none">
                  <div className="aspect-[16/11] overflow-hidden bg-ink/5 dark:bg-white/5">
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      width="800"
                      height="550"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold">{project.title}</h3>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper text-ink transition group-hover:bg-clay group-hover:text-white dark:bg-ink dark:text-paper dark:group-hover:bg-gold dark:group-hover:text-ink">
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                      </span>
                    </div>
                    <p className="mt-3 leading-7 text-ink/66 dark:text-paper/66">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span key={item} className="rounded-full border border-ink/10 px-3 py-1 text-xs font-semibold text-ink/64 dark:border-white/10 dark:text-paper/64">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </article>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}
