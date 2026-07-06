import { ArrowDown, ArrowRight } from 'lucide-react';
import { coreStack, site, socialLinks, stats } from '@/lib/content';
import { MotionSection } from '@/components/motion-section';

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pb-16 pt-32 sm:pt-36 lg:min-h-[92vh] lg:pb-20 lg:pt-40">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(16,16,20,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(16,16,20,0.055)_1px,transparent_1px)] bg-[size:44px_44px] dark:bg-[linear-gradient(rgba(247,245,239,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(247,245,239,0.055)_1px,transparent_1px)]" />
      <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-clay/16 blur-3xl dark:bg-gold/12" />

      <div className="container-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <MotionSection>
          <p className="eyebrow">Freelance full-stack web developer</p>
          <h1 className="mt-5 max-w-4xl font-[var(--font-display)] text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-7xl dark:text-paper">
            Crafting modern, responsive web experiences.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70 dark:text-paper/72">
            I am {site.name}, a front-end focused developer with 3+ years of experience building user-friendly
            websites and digital products with React, Tailwind CSS, JavaScript, WordPress, and modern tooling.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded bg-ink px-5 py-3 font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-clay dark:bg-paper dark:text-ink dark:hover:bg-gold"
            >
              View Work
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded border border-ink/15 bg-white/70 px-5 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:border-clay hover:text-clay dark:border-white/15 dark:bg-white/5 dark:text-paper dark:hover:border-gold dark:hover:text-gold"
            >
              Get in Touch
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/70 text-ink/70 transition hover:-translate-y-0.5 hover:border-clay hover:text-clay dark:border-white/10 dark:bg-white/5 dark:text-paper/70 dark:hover:border-gold dark:hover:text-gold"
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
              </a>
            ))}
          </div>
        </MotionSection>

        <MotionSection delay={0.12} className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-md border border-ink/10 bg-white shadow-soft dark:border-white/10 dark:bg-white/5">
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-r from-moss/16 via-gold/18 to-clay/18" />
            <img
              src="/assets/hero-section.svg"
              alt="Illustrated portrait of Zaman Sikander"
              width="460"
              height="575"
              className="absolute inset-x-0 bottom-0 mx-auto h-[88%] w-[88%] object-contain object-bottom"
            />
          </div>
          <div className="mx-auto mt-5 grid max-w-[460px] grid-cols-3 gap-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded border border-ink/10 bg-white/70 p-3 dark:border-white/10 dark:bg-white/5">
                <p className="font-[var(--font-display)] text-2xl font-semibold text-clay dark:text-gold">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-ink/62 dark:text-paper/62">{stat.label}</p>
              </div>
            ))}
          </div>
        </MotionSection>
      </div>

      <div className="container-shell mt-12">
        <MotionSection delay={0.2} className="flex flex-wrap gap-2 border-y border-ink/10 py-4 dark:border-white/10">
          {coreStack.map((item) => (
            <span key={item} className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-ink/70 dark:bg-white/8 dark:text-paper/72">
              {item}
            </span>
          ))}
        </MotionSection>
      </div>
    </section>
  );
}
