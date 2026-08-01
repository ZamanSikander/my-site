import { testimonials } from "@/lib/content";
import { MotionSection } from "@/components/motion-section";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad">
      <div className="container-shell">
        <MotionSection className="max-w-3xl">
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            What clients say after the handoff.
          </h2>
        </MotionSection>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <MotionSection
              key={`${testimonial.author}-${index}`}
              delay={index * 0.04}
            >
              <figure className="flex h-full flex-col justify-between rounded-md border border-ink/10 bg-paper p-6 dark:border-white/10 dark:bg-ink">
                <blockquote className="leading-7 text-ink/72 dark:text-paper/72">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-ink/10 pt-4 dark:border-white/10">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="mt-1 text-sm text-ink/58 dark:text-paper/58">
                    {testimonial.role}
                  </p>
                </figcaption>
              </figure>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}
