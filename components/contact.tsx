"use client";

import { Mail, Phone, Send, Star } from "lucide-react";
import { FormEvent, useState } from "react";
import { site, socialLinks } from "@/lib/content";
import { MotionSection } from "@/components/motion-section";

export function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const project = String(data.get("project") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (data.get("website")) return;
    if (name.length < 2 || project.length < 3 || message.length < 20) {
      setError(
        "Please complete all fields. Your message must be at least 20 characters.",
      );
      setStatus("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    setError("");
    data.append("access_key", "8440a99f-edd2-4ed2-a403-41d5f8e78f7f");
    data.append("subject", `New portfolio enquiry from ${name}`);
    data.append("from_name", "Zaman Sikander Portfolio");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error();
      form.reset();
      setStatus("success");
    } catch {
      setError(
        "Your message could not be sent. Please try again or email me directly.",
      );
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-pad bg-paper dark:bg-ink">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <MotionSection>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Have something special in mind?
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-8 text-ink/68 dark:text-paper/68">
            <p>
              I am always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <p>
              Whether you need a web application, want to revamp your digital
              presence, or just want to chat about technology, I am here to
              help.
            </p>
          </div>
          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${site.email}`}
              className="focus-ring flex items-center gap-3 rounded-md text-ink transition hover:text-clay dark:text-paper dark:hover:text-gold"
            >
              <Mail className="h-5 w-5" />
              {site.email}
            </a>
            <a
              href={`tel:${site.phone}`}
              className="focus-ring flex items-center gap-3 rounded-md text-ink transition hover:text-clay dark:text-paper dark:hover:text-gold"
            >
              <Phone className="h-5 w-5" />
              {site.displayPhone}
            </a>
          </div>
          <div className="mt-8 flex gap-3" aria-label="Social profiles">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="focus-ring grid h-12 w-12 place-items-center rounded-full border border-ink/10 bg-white transition hover:-translate-y-1 hover:scale-110 hover:border-clay hover:text-clay dark:border-white/10 dark:bg-white/5 dark:hover:border-gold dark:hover:text-gold"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </MotionSection>
        <MotionSection delay={0.12}>
          <div className="rounded-md border border-ink/10 bg-white p-5 shadow-soft dark:border-white/10 dark:bg-white/5 sm:p-7">
            <form
              className="space-y-5"
              aria-label="Contact form"
              onSubmit={handleSubmit}
              noValidate
            >
              <input
                type="checkbox"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="sr-only"
                aria-hidden="true"
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Name"
                  name="name"
                  placeholder="Your name"
                  minLength={2}
                  maxLength={80}
                />
                <Field
                  label="Email"
                  name="email"
                  placeholder="your@email.com"
                  type="email"
                  maxLength={120}
                />
              </div>
              <Field
                label="Project type"
                name="project"
                placeholder="Website, dashboard, MVP, or redesign"
                minLength={3}
                maxLength={120}
              />
              <label className="block">
                <span className="text-sm font-semibold text-ink/72 dark:text-paper/72">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="How can I help?"
                  required
                  minLength={20}
                  maxLength={2000}
                  className="mt-2 w-full resize-none rounded border border-ink/12 bg-paper px-4 py-3 text-ink outline-none transition focus:border-clay dark:border-white/12 dark:bg-ink dark:text-paper dark:focus:border-gold"
                />
              </label>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded bg-ink px-5 py-3 font-semibold text-paper transition hover:bg-clay disabled:cursor-not-allowed disabled:opacity-70 dark:bg-paper dark:text-ink"
              >
                <Send className="h-4 w-4" />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  Thanks - your message has been sent.
                </p>
              )}
              {status === "error" && (
                <p
                  className="text-sm font-medium text-red-600 dark:text-red-400"
                  role="alert"
                >
                  {error}
                </p>
              )}
            </form>
          </div>
        </MotionSection>
      </div>
      <a
        href={socialLinks.find(({ label }) => label === "Upwork")?.href}
        target="_blank"
        rel="noreferrer"
        className="focus-ring fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#14a800] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#108a00]"
      >
        <Star className="h-4 w-4 fill-current" />5 star review on Upwork
      </a>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  minLength,
  maxLength,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  minLength?: number;
  maxLength?: number;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink/72 dark:text-paper/72">
        {label}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        minLength={minLength}
        maxLength={maxLength}
        className="mt-2 min-h-12 w-full rounded border border-ink/12 bg-paper px-4 text-ink outline-none transition focus:border-clay dark:border-white/12 dark:bg-ink dark:text-paper dark:focus:border-gold"
      />
    </label>
  );
}
