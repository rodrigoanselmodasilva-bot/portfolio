import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLocale } from "@/i18n/context";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

type ActiveSection = "home" | "work" | "contact";

function HomeIcon({ active }: { active: boolean }) {
  const color = active ? "#C58A4A" : "rgba(197,138,74,0.4)";
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M2 8L9 2L16 8V16H12V12H6V16H2V8Z" stroke={color} strokeWidth="1.3" />
    </svg>
  );
}

function WorkIcon({ active }: { active: boolean }) {
  const color = active ? "#C58A4A" : "rgba(197,138,74,0.4)";
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="2" y="2" width="6" height="6" stroke={color} strokeWidth="1.2" />
      <rect x="10" y="2" width="6" height="6" stroke={color} strokeWidth="1.2" />
      <rect x="2" y="10" width="6" height="6" stroke={color} strokeWidth="1.2" />
      <rect x="10" y="10" width="6" height="6" stroke={color} strokeWidth="1.2" />
    </svg>
  );
}

function ContactIcon({ active }: { active: boolean }) {
  const color = active ? "#C58A4A" : "rgba(197,138,74,0.4)";
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <circle cx="9" cy="6" r="3" stroke={color} strokeWidth="1.2" />
      <path d="M2 16C2 12.69 5.13 10 9 10s7 2.69 7 6" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function useSectionObserver(): ActiveSection {
  const [active, setActive] = useState<ActiveSection>("home");

  useEffect(() => {
    const sectionIds: { id: string; section: ActiveSection }[] = [
      { id: "vision", section: "home" },
      { id: "projects", section: "work" },
      { id: "contact", section: "contact" },
    ];

    const elements = sectionIds
      .map(({ id, section }) => {
        const el = document.getElementById(id);
        return el ? { el, section } : null;
      })
      .filter(Boolean) as { el: HTMLElement; section: ActiveSection }[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const found = elements.find((e) => e.el === visible[0].target);
          if (found) setActive(found.section);
        }
      },
      { threshold: 0.3 }
    );

    elements.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}

export function MobileNav() {
  const isMobile = useIsMobile();
  const location = useLocation();
  const locale = useLocale();
  const isHomePage =
    location.pathname === `/${locale}/` ||
    location.pathname === `/${locale}` ||
    location.pathname === "/" ||
    location.pathname === "/portfolio/";
  const active = useSectionObserver();

  if (!isMobile) return null;

  const divider = (
    <div className="h-4 w-px bg-[rgba(197,138,74,0.18)]" aria-hidden />
  );

  return (
    <nav
      aria-label="Navegação principal"
      className="fixed left-1/2 z-50 -translate-x-1/2"
      style={{ bottom: "calc(20px + env(safe-area-inset-bottom))" }}
    >
      {/* language switcher — appears above the pill */}
      <div className="mb-1 flex justify-center">
        <LanguageSwitcher />
      </div>

      <div
        className="flex items-center gap-1 rounded-full border px-3 py-1"
        style={{
          background: "rgba(7,27,58,0.88)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderColor: "rgba(196,156,97,0.22)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.45)",
        }}
      >
        {isHomePage ? (
          <>
            <button
              type="button"
              aria-label="Ir para início"
              className="flex min-h-[36px] min-w-[44px] items-center justify-center"
              onClick={() =>
                document.getElementById("vision")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <HomeIcon active={active === "home"} />
            </button>

            {divider}

            <button
              type="button"
              aria-label="Ver projetos"
              className="flex min-h-[36px] min-w-[44px] items-center justify-center"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <WorkIcon active={active === "work"} />
            </button>

            {divider}

            <button
              type="button"
              aria-label="Entrar em contato"
              className="flex min-h-[36px] min-w-[44px] items-center justify-center"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <ContactIcon active={active === "contact"} />
            </button>
          </>
        ) : (
          <>
            <Link
              to="/$lang/"
              params={{ lang: locale }}
              aria-label="Ir para início"
              className="flex min-h-[36px] min-w-[44px] items-center justify-center"
            >
              <HomeIcon active={false} />
            </Link>

            {divider}

            <Link
              to="/$lang/"
              hash="projects"
              params={{ lang: locale }}
              aria-label="Ver projetos"
              className="flex min-h-[36px] min-w-[44px] items-center justify-center"
            >
              <WorkIcon active={false} />
            </Link>

            {divider}

            <Link
              to="/$lang/"
              hash="contact"
              params={{ lang: locale }}
              aria-label="Entrar em contato"
              className="flex min-h-[36px] min-w-[44px] items-center justify-center"
            >
              <ContactIcon active={false} />
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
