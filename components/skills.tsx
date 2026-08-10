import { coreStack, skills } from "@/lib/content";
import { MotionSection } from "@/components/motion-section";

export function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-shell">
        <MotionSection className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Skills</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            A modern stack, chosen to fit the project.
          </h2>
        </MotionSection>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {coreStack.map((item) => (
            <MotionSection key={item}>
              <div className="flex min-h-24 items-center justify-center rounded-md border border-ink/10 bg-white px-4 text-center font-semibold shadow-sm dark:border-white/10 dark:bg-white/5">
                {item}
              </div>
            </MotionSection>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map(({ name, icon: Icon }, index) => (
            <MotionSection key={name} delay={index * 0.03}>
              <div className="group flex h-28 flex-col items-center justify-center gap-3 rounded-md border border-ink/10 bg-white px-3 text-center transition hover:-translate-y-1 hover:border-clay/35 dark:border-white/10 dark:bg-white/5 dark:hover:border-gold/45">
                <Icon
                  aria-hidden="true"
                  className="h-5 w-5 text-moss transition group-hover:text-clay dark:text-gold"
                />
                <span className="text-sm font-semibold">{name}</span>
              </div>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}
