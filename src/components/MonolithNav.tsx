import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link, useRouterState } from "@tanstack/react-router";

const SECTIONS = [
  { id: "vision", label: "Vision", num: "I" },
  { id: "story", label: "Story", num: "II" },
  { id: "method", label: "Method", num: "III" },
  { id: "projects", label: "Projects", num: "IV" },
  { id: "legacy", label: "Legacy", num: "V" },
  { id: "contact", label: "Contact", num: "VI" },
];

/**
 * Vertical monolith navigation. The symbol assembles itself as the user
 * progresses through the sections — each section reveals one more node.
 */
export function MonolithNav() {
  const [active, setActive] = useState(0);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isOnHome = pathname === "/" || pathname === "";

  useEffect(() => {
    if (!isOnHome) return;
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach((s, i) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [isOnHome]);

  return (
    <nav
      aria-label="Primary"
      className="fixed left-0 top-0 z-40 hidden h-dvh w-20 flex-col items-center justify-center md:flex"
    >
      {/* vertical axis line */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-ivory/10 to-transparent" />

      <ol className="relative flex flex-col gap-10">
        {SECTIONS.map((s, i) => {
          const reached = i <= active;
          const isActive = i === active;
          return (
            <li key={s.id}>
              <Link
                to="/"
                hash={s.id}
                className="group relative flex items-center"
                aria-current={isActive ? "true" : undefined}
              >
                {/* node */}
                <span className="relative grid h-5 w-5 place-items-center">
                  <motion.span
                    className="block rounded-full"
                    animate={{
                      scale: isActive ? 1 : reached ? 0.7 : 0.45,
                      backgroundColor: isActive
                        ? "#C58A4A"
                        : reached
                          ? "#C58A4A"
                          : "rgba(242,239,231,0.25)",
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{ width: 8, height: 8 }}
                  />
                  {isActive && (
                    <motion.span
                      layoutId="nav-ring"
                      className="absolute inset-0 rounded-full border border-bronze"
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                  )}
                </span>

                {/* expanding label */}
                <span className="pointer-events-none absolute left-7 flex items-center gap-3 whitespace-nowrap opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span className="h-px w-6 bg-bronze" />
                  <span className="font-mono text-[10px] tracking-[0.3em] text-bronze">
                    {s.num}
                  </span>
                  <span className="font-display text-base text-ivory">
                    {s.label}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ol>

      {/* bottom monolith glyph — constructs itself, matches brand SVG */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <svg
          width="22"
          height="63"
          viewBox="400 140 280 800"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
          style={{ display: "block" }}
          className="opacity-90"
        >
          {/* arrow tip */}
          <path
            d="M509.576 416.767L454.185 320.826V449.239L539.765 534.82L625.346 449.239V320.826L569.954 416.767V303.114L601.729 248.077L539.765 140.752L477.801 248.077L509.576 303.114V416.767Z"
            fill="#F3EFE7"
            opacity={active >= 0 ? 1 : 0.15}
            style={{ transition: "opacity 1.2s ease" }}
          />
          {/* left figure (ivory) */}
          <path
            d="M445.328 653.139C445.824 653.11 446.323 653.094 446.826 653.094C460.904 653.094 472.317 664.482 472.317 678.531C472.317 692.579 460.904 703.967 446.826 703.967C446.323 703.967 445.824 703.951 445.328 703.922V777.286L485.813 736.886L497.809 736.929V801.254H539.793V552.843H521.8L445.328 476.532V653.139ZM493.31 590.249C513.184 590.249 529.297 606.328 529.297 626.161C529.297 645.994 513.184 662.072 493.31 662.072C473.435 662.072 457.323 645.993 457.323 626.161C457.323 606.328 473.435 590.25 493.31 590.249Z"
            fill="#F3EFE7"
            opacity={active >= 2 ? 1 : 0.15}
            style={{ transition: "opacity 1.2s ease" }}
          />
          {/* right figure (bronze) */}
          <path
            d="M634.258 653.139C633.762 653.11 633.263 653.094 632.76 653.094C618.682 653.094 607.269 664.482 607.269 678.531C607.269 692.579 618.682 703.967 632.76 703.967C633.263 703.967 633.762 703.951 634.258 703.922V777.286L593.772 736.886L581.777 736.929V801.254H539.793V552.843H557.786L634.258 476.532V653.139ZM586.276 590.249C566.402 590.249 550.289 606.328 550.289 626.161C550.289 645.994 566.401 662.072 586.276 662.072C606.151 662.072 622.263 645.993 622.263 626.161C622.263 606.328 606.151 590.25 586.276 590.249Z"
            fill="#A66A3F"
            opacity={active >= 3 ? 1 : 0.15}
            style={{ transition: "opacity 1.2s ease" }}
          />
          {/* left base */}
          <path
            d="M539.793 940V742.214H497.807V814.539C450.575 848.487 405.968 902.116 404 940H539.793Z"
            fill="#F3EFE7"
            opacity={active >= 4 ? 1 : 0.15}
            style={{ transition: "opacity 1.2s ease" }}
          />
          {/* right base */}
          <path
            d="M539.793 940V742.214H581.779V814.539C629.011 848.487 673.618 902.116 675.586 940H539.793Z"
            fill="#F3EFE7"
            opacity={active >= 5 ? 1 : 0.15}
            style={{ transition: "opacity 1.2s ease" }}
          />
        </svg>
      </div>
    </nav>
  );
}
