import { navItems, site, socialLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink py-12 text-paper dark:bg-black">
      <div className="container-shell grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          <h2 className="text-3xl font-semibold">{site.name}</h2>
          <p className="mt-4 max-w-md leading-7 text-paper/68">
            Creating elegant, responsive, and user-friendly web experiences
            through clean code and thoughtful design.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:-translate-y-0.5 hover:bg-white/18"
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:text-right">
          <nav
            className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end"
            aria-label="Footer navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-paper/68 transition hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 space-y-1 text-paper/68">
            <p>{site.email}</p>
            <p>{site.displayPhone}</p>
          </div>
          <p className="mt-6 text-sm text-paper/48">
            &copy; 2026 {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
