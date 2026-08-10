"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, site, socialLinks } from "@/lib/content";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col">
      <a
        href="https://lnkeee.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex w-full items-center justify-center gap-1 bg-clay px-4 py-2 text-center text-xs font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-[#b05d39]"
      >
        <span className="hidden md:inline">
          Try Lnkeee, my free tool for creating short, trackable links{" "}
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
        <span className="inline md:hidden">
          Try my free link shortener <span className="underline">Lnkeee</span>{" "}
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </a>

      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-ink/10 bg-paper/90 py-3 shadow-sm backdrop-blur-xl dark:border-gold/20 dark:bg-[#19191f]/95"
            : "py-5 dark:border-b dark:border-white/10 dark:bg-[#19191f]/88 dark:backdrop-blur-xl"
        }`}
      >
        <div className="container-shell flex items-center justify-between gap-4">
          <a
            href="#home"
            className="focus-ring flex items-center gap-3 rounded-full"
            aria-label={`${site.name} home`}
          >
            <img
              src="/assets/logo.webp"
              alt=""
              width="44"
              height="44"
              className="h-11 w-11 rounded-full object-cover"
            />
            <span className="hidden font-semibold sm:inline">{site.name}</span>
          </a>

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink/72 transition hover:text-clay dark:text-paper/90 dark:hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white/80 text-ink shadow-sm dark:border-gold/20 dark:bg-[#24242b] dark:text-paper"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X aria-hidden="true" className="h-5 w-5" />
              ) : (
                <Menu aria-hidden="true" className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="container-shell mt-4 lg:hidden"
            >
              <nav
                className="rounded-md border border-ink/10 bg-paper p-3 shadow-soft dark:border-gold/20 dark:bg-[#1f1f26]"
                aria-label="Mobile navigation"
              >
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded px-3 py-3 font-medium text-ink/78 transition hover:bg-white hover:text-clay dark:text-paper/90 dark:hover:bg-white/10 dark:hover:text-gold"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
