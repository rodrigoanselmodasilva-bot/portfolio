import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { LivingBackground } from "@/components/LivingBackground";
import { MonolithNav } from "@/components/MonolithNav";
import { Monolith } from "@/components/Monolith";
import { cases } from "@/data/cases";
import type { CaseData } from "@/data/cases";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rodrigo Anselmo — Builder of Digital Legacies" },
      {
        name: "description",
        content:
          "Strategist, product thinker and systems architect. Building systems, products and ideas that endure.",
      },
      { property: "og:title", content: "Rodrigo Anselmo — Builder of Digital Legacies" },
      {
        property: "og:description",
        content:
          "Strategist, product thinker and systems architect. Building systems, products and ideas that endure.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative isolate min-h-dvh bg-grain text-ivory">
      <LivingBackground />
      <MonolithNav />
      <TopMeta />

      <Hero />
      <Story />
      <Method />
      <Projects />
      <Manifesto />
      <Final />

      <Footer />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Top meta line                                                              */
/* -------------------------------------------------------------------------- */
function TopMeta() {
  return (
    <div className="fixed left-0 right-0 top-0 z-30 flex items-center justify-between px-6 py-5 text-[10px] uppercase tracking-[0.32em] text-ivory/60 md:px-12">
      <div className="flex items-center gap-3">
        <span className="h-px w-6 bg-bronze/60" />
        <span>Rodrigo Anselmo</span>
      </div>
      <div className="hidden items-center gap-6 md:flex">
        <span>Lat 23°33′S · Lon 46°38′W</span>
        <span className="h-px w-6 bg-bronze/60" />
        <span>Archive · MMXXVI</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero — Section I — Vision                                                  */
/* -------------------------------------------------------------------------- */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="vision"
      ref={ref}
      className="relative isolate flex min-h-dvh items-center overflow-hidden px-6 pt-32 md:pl-32 md:pr-16"
    >
      {/* Photo layer — mix-blend-mode:screen dissolves the black into navy */}
      <div
        role="img"
        aria-label="Rodrigo Anselmo trabalhando no notebook"
        className="hero-photo pointer-events-none absolute inset-0 z-[1]"
      />

      {/* Horizontal veil — protects text side, opens toward photo */}
      <div className="hero-veil-h pointer-events-none absolute inset-0 z-[2]" />

      {/* Vertical veil — fades top chrome and seals the bottom */}
      <div className="hero-veil-v pointer-events-none absolute inset-0 z-[2]" />

      {/* Cartography SVG — above photo/veils, below text */}
      <div className="pointer-events-none absolute inset-0 z-[3]">
        <CartographyHero />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto w-full max-w-5xl"
      >
        <div className="mb-10 flex items-center gap-4 label-eyebrow">
          <span className="h-px w-10 bg-bronze" />
          <span>Cap. I — Vision</span>
        </div>

        <h1 className="heading-display text-[clamp(3rem,7vw,6.5rem)] text-balance">
          Some stories deserve
          <br />
          <span className="italic text-ivory/80">to become </span>
          <span className="relative inline-block">
            <span className="text-bronze">legacies.</span>
            <svg
              className="absolute -bottom-2 left-0 h-2 w-full"
              viewBox="0 0 200 8"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0 4 Q50 0 100 4 T200 4"
                stroke="#C58A4A"
                strokeWidth="0.7"
                fill="none"
                strokeDasharray="200"
                initial={{ strokeDashoffset: 200 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2.4, delay: 1, ease: "easeOut" }}
              />
            </svg>
          </span>
        </h1>

        <p className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Building systems, products and ideas that endure — at the intersection
          of strategy, narrative, and design.
        </p>

        <div className="mt-14 flex items-center gap-6">
          <a
            href="#story"
            className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.28em] text-ivory"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full border border-ivory/30 transition-colors group-hover:border-bronze">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <motion.path
                  d="M7 1 V13 M3 9 L7 13 L11 9"
                  stroke="#F2EFE7"
                  strokeWidth="1"
                  className="group-hover:stroke-bronze"
                />
              </svg>
            </span>
            <span>Explore the archive</span>
          </a>
        </div>
      </motion.div>

      {/* corner crosshair */}
      <Crosshair className="absolute right-8 top-32 z-10 hidden md:block" />
    </section>
  );
}

function CartographyHero() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.5]"
      viewBox="0 0 1400 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <radialGradient id="hero-glow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#C58A4A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#C58A4A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="900" cy="450" r="380" fill="url(#hero-glow)" />

      {/* concentric arcs - cartography */}
      <g
        stroke="#C58A4A"
        strokeWidth="0.5"
        fill="none"
        opacity="0.5"
      >
        {[120, 200, 280, 360, 440, 520].map((r) => (
          <circle key={r} cx="1100" cy="450" r={r} strokeDasharray="1 4" />
        ))}
        {[0, 30, 60, 90, 120, 150].map((a) => (
          <line
            key={a}
            x1="1100"
            y1="450"
            x2={1100 + 520 * Math.cos((a * Math.PI) / 180)}
            y2={450 + 520 * Math.sin((a * Math.PI) / 180)}
            strokeDasharray="2 8"
            opacity="0.35"
          />
        ))}
      </g>

      {/* connection nodes */}
      <g>
        {[
          [320, 220],
          [480, 380],
          [220, 540],
          [620, 200],
          [780, 480],
          [400, 700],
        ].map(([x, y], i) => (
          <g key={i}>
            <motion.circle
              cx={x}
              cy={y}
              r="3"
              fill="#C58A4A"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
            <circle cx={x} cy={y} r="18" stroke="#C58A4A" strokeOpacity="0.25" fill="none" />
            <line
              x1={x}
              y1={y - 30}
              x2={x}
              y2={y + 30}
              stroke="#C58A4A"
              strokeOpacity="0.4"
              strokeWidth="0.4"
            />
            <line
              x1={x - 30}
              y1={y}
              x2={x + 30}
              y2={y}
              stroke="#C58A4A"
              strokeOpacity="0.4"
              strokeWidth="0.4"
            />
          </g>
        ))}
      </g>

      {/* connecting paths */}
      <g stroke="#C58A4A" fill="none" strokeWidth="0.6" opacity="0.45">
        <motion.path
          d="M320 220 Q400 300 480 380 T780 480"
          strokeDasharray="800"
          initial={{ strokeDashoffset: 800 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 4, delay: 0.6, ease: "easeInOut" }}
        />
        <motion.path
          d="M220 540 L480 380 L620 200"
          strokeDasharray="600"
          initial={{ strokeDashoffset: 600 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 3.4, delay: 1.2, ease: "easeInOut" }}
        />
        <motion.path
          d="M400 700 L780 480"
          strokeDasharray="500"
          initial={{ strokeDashoffset: 500 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 3, delay: 1.6, ease: "easeInOut" }}
        />
      </g>
    </svg>
  );
}

function Crosshair({ className = "" }: { className?: string }) {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" className={className}>
      <circle cx="28" cy="28" r="6" stroke="#C58A4A" fill="none" />
      <circle cx="28" cy="28" r="18" stroke="#C58A4A" opacity="0.4" fill="none" strokeDasharray="2 4" />
      <line x1="28" y1="0" x2="28" y2="20" stroke="#C58A4A" />
      <line x1="28" y1="36" x2="28" y2="56" stroke="#C58A4A" />
      <line x1="0" y1="28" x2="20" y2="28" stroke="#C58A4A" />
      <line x1="36" y1="28" x2="56" y2="28" stroke="#C58A4A" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Story — Section II                                                         */
/* -------------------------------------------------------------------------- */

const TIMELINE = [
  {
    year: "2008",
    title: "Law",
    body: "Trained in the discipline of argument and structure. Learned that every system rests on a framework of language.",
  },
  {
    year: "2012",
    title: "Marketing",
    body: "Translated abstract value into stories audiences could hold. Found that strategy without narrative collapses on contact.",
  },
  {
    year: "2015",
    title: "UX",
    body: "Studied the geometry of behavior. Every click is a sentence; every flow, a paragraph in a longer essay.",
  },
  {
    year: "2018",
    title: "Product",
    body: "Built products as living organisms — composed of trade-offs, vision, and discipline measured in shipped iterations.",
  },
  {
    year: "2021",
    title: "Strategy",
    body: "Connected business architecture to creative intention. Moved from making things to deciding which things deserve to be made.",
  },
  {
    year: "Today",
    title: "Digital Legacy",
    body: "Designing artifacts engineered to outlive the cycles that produced them.",
  },
];

function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0→1) to an index across TIMELINE entries (desktop only).
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const clamped = Math.min(0.9999, Math.max(0, (p - 0.05) / 0.9));
    const idx = Math.min(TIMELINE.length - 1, Math.floor(clamped * TIMELINE.length));
    setActive(idx);
  });

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative px-6 md:pl-32 md:pr-16"
    >
      {/* MOBILE: stacked, scroll-revealed cards */}
      <div className="py-24 md:hidden">
        <SectionHeader
          eyebrow="Cap. II — Story"
          title="A cartography of accumulated disciplines."
        />

        <ol className="relative mt-12 border-l border-bronze/30 pl-6">
          {TIMELINE.map((m, i) => (
            <MobileTimelineItem key={m.year} item={m} index={i} total={TIMELINE.length} />
          ))}
        </ol>
      </div>

      {/* DESKTOP: scroll-driven sticky split (unchanged) */}
      <div
        className="hidden md:block"
        style={{ height: `${TIMELINE.length * 90}vh` }}
      >
        <div className="sticky top-0 flex min-h-dvh items-center py-24">
          <div className="mx-auto w-full max-w-6xl">
            <SectionHeader
              eyebrow="Cap. II — Story"
              title="A cartography of accumulated disciplines."
            />

            <div className="mt-16 grid gap-16 md:grid-cols-[1fr_1.4fr]">
              {/* node map */}
              <div className="relative h-[480px]">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 480">
                  <line
                    x1="40"
                    y1="20"
                    x2="40"
                    y2="460"
                    stroke="#C58A4A"
                    strokeOpacity="0.3"
                    strokeDasharray="2 6"
                  />
                  {TIMELINE.map((_, i) => {
                    const y = 40 + i * 75;
                    const isActive = i === active;
                    const reached = i <= active;
                    return (
                      <g key={i}>
                        <line
                          x1="40"
                          y1={y}
                          x2="80"
                          y2={y}
                          stroke="#C58A4A"
                          strokeOpacity={isActive ? 0.9 : reached ? 0.5 : 0.2}
                        />
                        <circle
                          cx="40"
                          cy={y}
                          r={isActive ? 8 : 4}
                          fill={
                            isActive
                              ? "#C58A4A"
                              : reached
                                ? "rgba(197,138,74,0.6)"
                                : "rgba(242,239,231,0.35)"
                          }
                          style={{ transition: "all 0.6s ease" }}
                        />
                        {isActive && (
                          <circle
                            cx="40"
                            cy={y}
                            r="16"
                            fill="none"
                            stroke="#C58A4A"
                            strokeOpacity="0.5"
                          />
                        )}
                      </g>
                    );
                  })}
                </svg>

                <ol className="relative ml-20 flex flex-col gap-[43px] pt-3">
                  {TIMELINE.map((m, i) => (
                    <li key={m.year}>
                      <button
                        onClick={() => {
                          const el = sectionRef.current;
                          if (!el) return;
                          const rect = el.getBoundingClientRect();
                          const total = el.offsetHeight - window.innerHeight;
                          const target =
                            window.scrollY +
                            rect.top +
                            (0.05 + ((i + 0.5) / TIMELINE.length) * 0.9) * total;
                          window.scrollTo({ top: target, behavior: "smooth" });
                        }}
                        className={`group flex items-baseline gap-4 text-left transition-colors ${
                          i === active ? "text-ivory" : "text-ivory/45 hover:text-ivory/80"
                        }`}
                      >
                        <span className="font-mono text-[10px] tracking-[0.2em] text-bronze">
                          {m.year}
                        </span>
                        <span className="font-display text-xl">{m.title}</span>
                      </button>
                    </li>
                  ))}
                </ol>
              </div>

              {/* active content */}
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative"
              >
                <div className="border-l border-bronze/40 pl-8 md:pl-12">
                  <div className="label-eyebrow mb-6">
                    Fragment {String(active + 1).padStart(2, "0")} / {TIMELINE.length}
                  </div>
                  <h3 className="heading-display text-4xl md:text-5xl">
                    {TIMELINE[active].title}
                  </h3>
                  <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
                    {TIMELINE[active].body}
                  </p>

                  <div className="mt-12 flex items-center gap-3">
                    <span className="h-px w-12 bg-bronze" />
                    <span className="font-mono text-[10px] tracking-[0.3em] text-bronze/70">
                      {TIMELINE[active].year}
                    </span>
                  </div>

                  <div className="mt-16 flex items-center gap-4">
                    <div className="relative h-px flex-1 bg-ivory/10">
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-bronze"
                        style={{ width: `${((active + 1) / TIMELINE.length) * 100}%` }}
                      />
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.3em] text-ivory/40">
                      Scroll
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileTimelineItem({
  item,
  index,
  total,
}: {
  item: (typeof TIMELINE)[number];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { rootMargin: "0px 0px -25% 0px", threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <li ref={ref} className="relative pb-12 last:pb-0">
      {/* node dot on the rail */}
      <span
        className={`absolute -left-[29px] top-1 grid h-4 w-4 place-items-center rounded-full transition-colors duration-700 ${
          visible ? "bg-bronze" : "bg-ivory/25"
        }`}
      >
        {visible && (
          <span className="absolute inset-0 -m-1 rounded-full border border-bronze/50" />
        )}
      </span>

      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[10px] tracking-[0.25em] text-bronze">
          {item.year}
        </span>
        <span className="font-mono text-[9px] tracking-[0.3em] text-ivory/30">
          {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-2 font-display text-2xl text-ivory">{item.title}</h3>

      <motion.div
        initial={false}
        animate={{
          opacity: visible ? 1 : 0,
          height: visible ? "auto" : 0,
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: "hidden" }}
      >
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          {item.body}
        </p>
        <div className="mt-4 h-px w-12 bg-bronze/40" />
      </motion.div>
    </li>
  );
}


/* -------------------------------------------------------------------------- */
/* Method — Section III                                                       */
/* -------------------------------------------------------------------------- */

const METHOD = [
  { id: "research", label: "Research", x: 12, y: 30, body: "Inhabit the territory before drawing the map." },
  { id: "insight", label: "Insight", x: 30, y: 70, body: "Compress the noise into a single, load-bearing truth." },
  { id: "strategy", label: "Strategy", x: 50, y: 25, body: "Sequence the moves that compound." },
  { id: "design", label: "Design", x: 68, y: 65, body: "Translate intention into form, ritual, and constraint." },
  { id: "execution", label: "Execution", x: 84, y: 35, body: "Ship with the discipline of someone who must live with it." },
  { id: "scale", label: "Scale", x: 94, y: 72, body: "Build the structure that lets the system grow without losing its shape." },
];

function Method() {
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered;

  return (
    <section
      id="method"
      className="relative px-6 py-32 md:pl-32 md:pr-16 md:py-48"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Cap. III — Method"
          title="Not a process. A system of consequences."
        />

        <div className="mt-20">
          {/* strategic map */}
          <div className="relative h-[520px] w-full rounded-sm border border-bronze/20 bg-navy-secondary/30 p-6">
            {/* corner brackets */}
            {[
              "left-3 top-3 border-l border-t",
              "right-3 top-3 border-r border-t",
              "left-3 bottom-3 border-l border-b",
              "right-3 bottom-3 border-r border-b",
            ].map((c) => (
              <span key={c} className={`absolute h-4 w-4 border-bronze/60 ${c}`} />
            ))}

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="m-grid" width="5" height="5" patternUnits="userSpaceOnUse">
                  <path d="M5 0 L0 0 0 5" fill="none" stroke="#F2EFE7" strokeWidth="0.05" opacity="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#m-grid)" opacity="0.5" />

              {METHOD.slice(0, -1).map((n, i) => {
                const next = METHOD[i + 1];
                const isHot = active === i || active === i + 1;
                return (
                  <motion.line
                    key={i}
                    x1={n.x}
                    y1={n.y}
                    x2={next.x}
                    y2={next.y}
                    stroke="#C58A4A"
                    strokeWidth={isHot ? 0.4 : 0.2}
                    strokeOpacity={isHot ? 1 : 0.5}
                    strokeDasharray="0.6 1.2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: i * 0.25 }}
                  />
                );
              })}
            </svg>

            {/* nodes + popover cards */}
            {METHOD.map((n, i) => {
              const isActive = active === i;
              const flipBelow = n.y < 40;
              return (
                <div
                  key={n.id}
                  className="absolute"
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                >
                  {/* Hit area — generous invisible zone around the node */}
                  <button
                    type="button"
                    aria-label={`${String(i + 1).padStart(2, "0")} ${n.label}`}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(i)}
                    onBlur={() => setHovered(null)}
                    className="absolute left-1/2 top-1/2 z-10 h-24 w-32 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-transparent"
                  />

                  {/* Visible node — purely decorative, ignores pointer */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="relative grid place-items-center">
                      <span
                        className={`block rounded-full transition-all duration-500 ${
                          isActive ? "h-3 w-3 bg-bronze" : "h-2 w-2 bg-ivory/70"
                        }`}
                      />
                      <span
                        className={`absolute h-8 w-8 rounded-full border border-bronze transition-all duration-500 ${
                          isActive ? "scale-100 opacity-100" : "scale-50 opacity-0"
                        }`}
                      />
                      <span
                        className={`absolute h-14 w-14 rounded-full border border-bronze/40 transition-all duration-700 ${
                          isActive ? "scale-100 opacity-100" : "scale-50 opacity-0"
                        }`}
                      />
                    </span>
                    <span
                      className={`absolute left-1/2 ${
                        flipBelow ? "-top-3 -translate-y-full" : "top-5"
                      } -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.25em] transition-colors ${
                        isActive ? "text-bronze" : "text-ivory/70"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")} · {n.label}
                    </span>
                  </div>

                  {/* popover card */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : flipBelow ? 8 : -8,
                      scale: isActive ? 1 : 0.96,
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      pointerEvents: "none",
                      [flipBelow ? "top" : "bottom"]: "calc(50% + 44px)",
                    }}
                    className="absolute left-1/2 z-20 w-64 -translate-x-1/2 border border-bronze/40 bg-navy/95 p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-sm"
                  >
                    <span
                      className={`absolute left-1/2 h-7 w-px -translate-x-1/2 bg-bronze/40 ${
                        flipBelow ? "-top-7" : "-bottom-7"
                      }`}
                    />
                    {[
                      "left-0 top-0 border-l border-t",
                      "right-0 top-0 border-r border-t",
                      "left-0 bottom-0 border-l border-b",
                      "right-0 bottom-0 border-r border-b",
                    ].map((c) => (
                      <span key={c} className={`absolute h-2 w-2 border-bronze ${c}`} />
                    ))}
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-[10px] tracking-[0.3em] text-bronze">
                        0{i + 1}
                      </span>
                      <span className="h-px w-8 bg-bronze/40" />
                    </div>
                    <h4 className="mt-3 font-display text-xl leading-tight">{n.label}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {n.body}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-ivory/40">
            Hover each stage to reveal
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Projects — Section IV                                                      */
/* -------------------------------------------------------------------------- */

const PROJECTS = cases;

function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative px-6 py-32 md:pl-32 md:pr-16 md:py-48"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Cap. IV — Projects"
          title="Artifacts, not portfolio entries."
        />

        <div className="mt-16 divide-y divide-ivory/10 border-y border-ivory/10">
          {PROJECTS.map((p, i) => (
            <ProjectRow
              key={p.n}
              project={p}
              index={i}
              isHovered={hovered === i}
              onHover={() => setHovered(i)}
              onLeave={() => setHovered(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  project: CaseData;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <Link
      to="/cases/$slug"
      params={{ slug: project.slug }}
      className="block"
      aria-label={`Ver case: ${project.title}`}
    >
      <article
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        className="group relative grid grid-cols-[auto_1fr_auto] items-baseline gap-6 py-12 md:gap-12 md:py-16"
      >
        {/* hover overlay cartography */}
        <motion.div
          className="pointer-events-none absolute inset-0 -z-0"
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.7 }}
        >
          <svg viewBox="0 0 800 200" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
            <g stroke="#C58A4A" strokeWidth="0.4" fill="none" opacity="0.5">
              <motion.line
                x1="0"
                y1="100"
                x2="800"
                y2="100"
                strokeDasharray="2 8"
                animate={{ x1: isHovered ? 0 : 200 }}
                transition={{ duration: 1 }}
              />
              <motion.circle
                cx="120"
                cy="100"
                r="20"
                strokeDasharray="1 4"
                animate={{ r: isHovered ? 40 : 0 }}
                transition={{ duration: 1.2 }}
              />
              <motion.circle
                cx="680"
                cy="100"
                r="20"
                strokeDasharray="1 4"
                animate={{ r: isHovered ? 40 : 0 }}
                transition={{ duration: 1.2, delay: 0.1 }}
              />
              <motion.line
                x1="120"
                y1="100"
                x2="680"
                y2="100"
                animate={{ pathLength: isHovered ? 1 : 0 }}
                transition={{ duration: 1 }}
              />
            </g>
          </svg>
        </motion.div>

        <span className="relative font-mono text-xs tracking-[0.3em] text-bronze">
          {project.n}
        </span>

        <div className="relative">
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
            <h3 className="heading-display text-4xl transition-colors md:text-6xl">
              <span
                className={isHovered ? "text-bronze" : ""}
                style={{ transition: "color 0.6s ease" }}
              >
                {project.title}
              </span>
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ivory/50">
              {project.roles.join(" · ")} · {project.year}
            </span>
          </div>
          <p className="mt-3 max-w-2xl text-base text-ivory/75 md:text-lg">
            {project.summary}
          </p>

          <motion.p
            initial={false}
            animate={{
              height: isHovered ? "auto" : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="mt-0 max-w-2xl overflow-hidden text-sm leading-relaxed text-muted-foreground"
          >
            <span className="block pt-6">{project.sections[0]?.body}</span>
          </motion.p>
        </div>

        <div className="relative">
          <motion.span
            className="block h-px bg-bronze"
            initial={{ width: 24 }}
            animate={{ width: isHovered ? 64 : 24 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </article>
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* Manifesto — Section V — Legacy                                             */
/* -------------------------------------------------------------------------- */

const MANIFESTO = [
  "Every system tells a story.",
  "Every product leaves a mark.",
  "Every legacy begins as an idea — refined until it refuses to disappear.",
];

function Manifesto() {
  return (
    <section
      id="legacy"
      className="relative px-6 py-32 md:pl-32 md:pr-16 md:py-56"
    >
      <div className="absolute inset-0 -z-10 bg-navy-deep" />
      <div className="absolute inset-0 -z-10 bg-grain opacity-100" />

      <div className="mx-auto max-w-5xl">
        <div className="label-eyebrow mb-16 flex items-center gap-4">
          <span className="h-px w-10 bg-bronze" />
          <span>Cap. V — Manifesto</span>
        </div>

        <ol className="space-y-32">
          {MANIFESTO.map((line, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-8"
            >
              <span className="mt-6 hidden font-mono text-[10px] tracking-[0.3em] text-bronze md:block">
                0{i + 1}
              </span>
              <p className="heading-display text-balance text-[clamp(2rem,5vw,4.5rem)] leading-[1.05]">
                {line.split(".").map((part, j, arr) =>
                  part ? (
                    <span key={j}>
                      {part}
                      {j < arr.length - 1 && (
                        <span className="text-bronze">.</span>
                      )}
                    </span>
                  ) : null,
                )}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Final — Section VI — Contact                                               */
/* -------------------------------------------------------------------------- */

function Final() {
  return (
    <section
      id="contact"
      className="relative px-6 py-32 md:pl-32 md:pr-16 md:py-48"
    >
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <div className="label-eyebrow mb-10 flex items-center gap-4">
            <span className="h-px w-10 bg-bronze" />
            <span>Cap. VI — Convergence</span>
          </div>

          <h2 className="heading-display text-balance text-[clamp(2.4rem,6vw,5.5rem)] leading-[1.02]">
            Let's build something
            <br />
            <span className="italic text-ivory/80">worth </span>
            <span className="text-bronze">remembering</span>.
          </h2>

          <p className="mt-10 max-w-xl text-lg text-muted-foreground">
            For collaborations, advisory work, and long-arc projects where the
            outcome matters more than the cycle.
          </p>

          <div className="mt-14 flex flex-col items-start gap-6">
            <a
              href="mailto:rodrigo@anselmo.studio"
              className="group inline-flex items-center gap-5 border border-bronze px-8 py-5 text-xs uppercase tracking-[0.3em] text-ivory transition-colors hover:bg-bronze hover:text-navy-deep"
            >
              <span>Start a conversation</span>
              <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                <path
                  d="M0 5 H18 M14 1 L18 5 L14 9"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </a>

            <div className="flex flex-wrap gap-x-10 gap-y-3 pt-6 text-xs uppercase tracking-[0.28em] text-ivory/55">
              <a href="mailto:rodrigo@anselmo.studio" className="hover:text-bronze">
                rodrigo@anselmo.studio
              </a>
              <a href="#" className="hover:text-bronze">
                LinkedIn
              </a>
              <a href="#" className="hover:text-bronze">
                Read
              </a>
            </div>
          </div>
        </div>

        {/* The fully assembled monolith — small, off to the side */}
        <div className="relative flex justify-end">
          <div className="relative">
            <Monolith size={120} />
            <span className="absolute -left-12 top-1/2 hidden -translate-y-1/2 -rotate-90 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.35em] text-bronze/70 md:block">
              Monolith · Complete
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="relative border-t border-ivory/10 px-6 py-10 md:pl-32 md:pr-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 text-[10px] uppercase tracking-[0.3em] text-ivory/45 md:flex-row md:items-center">
        <span>© MMXXVI · Rodrigo Anselmo</span>
        <span className="font-mono">
          Lat 23°33′44″S · Lon 46°38′20″W · São Paulo
        </span>
        <span>Archive · v.1</span>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/* Shared                                                                     */
/* -------------------------------------------------------------------------- */

function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="label-eyebrow flex items-center gap-4">
        <span className="h-px w-10 bg-bronze" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="heading-display mt-8 text-balance text-[clamp(2rem,4.5vw,3.75rem)]">
        {title}
      </h2>
    </div>
  );
}
