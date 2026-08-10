import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";
import { MotionSection } from "@/components/motion-section";

export function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <MotionSection className="max-w-3xl">
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Websites built for real businesses and real customers.
            </h2>
          </MotionSection>
          <MotionSection delay={0.08}>
            <p className="max-w-md leading-7 text-ink/66 dark:text-paper/66">
              Seven live products and client websites, spanning SaaS,
              operations software, trade services, and conversion-led marketing.
            </p>
          </MotionSection>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <MotionSection
              key={project.title}
              delay={index * 0.06}
              className={project.featured ? "md:col-span-2" : undefined}
            >
              <article
                className={`group h-full overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:border-clay/35 hover:shadow-soft dark:border-white/10 dark:bg-white/5 dark:hover:border-gold/45 ${
                  project.featured
                    ? "md:grid md:grid-cols-[1.1fr_0.9fr] md:items-stretch"
                    : ""
                }`}
              >
                <div className="block">
                  <div className="aspect-[16/11] overflow-hidden bg-ink/5 dark:bg-white/5">
                    <img
                      src={project.image}
                      alt={`${project.title} live website preview`}
                      width="1280"
                      height="800"
                      className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.025]"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-between p-6 sm:p-7">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-moss dark:text-gold">
                      {project.category}
                    </p>
                    <div className="mt-3 flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold sm:text-3xl">
                        {project.title}
                      </h3>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit ${project.title}`}
                        className="focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper text-ink transition hover:bg-clay hover:text-white dark:bg-ink dark:text-paper dark:hover:bg-gold dark:hover:text-ink"
                      >
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                      </a>
                    </div>
                    <p className="mt-3 leading-7 text-ink/66 dark:text-paper/66">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-ink/10 px-3 py-1 text-xs font-semibold text-ink/64 dark:border-white/10 dark:text-paper/64"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring mt-6 inline-flex items-center gap-2 rounded text-sm font-semibold text-clay transition hover:gap-3 dark:text-gold"
                    >
                      View live project
                      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}
