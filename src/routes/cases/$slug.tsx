import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { MonolithNav } from "@/components/MonolithNav";
import { LivingBackground } from "@/components/LivingBackground";
import { cases } from "@/data/cases";
import type { CaseData, CaseSection } from "@/data/cases";

export const Route = createFileRoute("/cases/$slug")({
  loader: ({ params }) => {
    const c = cases.find((c) => c.slug === params.slug);
    if (!c) throw notFound();
    return c;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.title} — Rodrigo Anselmo` },
      { name: "description", content: loaderData.summary },
    ],
  }),
  component: CasePage,
  notFoundComponent: () => (
    <div className="flex h-dvh items-center justify-center text-ivory/50">
      Case not found.
    </div>
  ),
});

function CasePage() {
  const c = Route.useLoaderData();
  useEffect(() => {
    document.title = `${c.title} — Rodrigo Anselmo`;
    return () => { document.title = "Rodrigo Anselmo — Builder of Digital Legacies"; };
  }, [c.title]);
  return (
    <div className="relative min-h-dvh bg-navy">
      <LivingBackground />
      <MonolithNav />
      <main className="relative">
        <CaseHero case={c} />
        <CaseMetadata case={c} />
        <div
          style={{ maxWidth: "clamp(540px, 60vw, 860px)", margin: "0 auto" }}
          className="px-6 md:px-0"
        >
          <CaseSummary summary={c.summary} />
          {c.sections.map((section, i) => (
            <CaseSectionBlock key={i} section={section} slug={c.slug} />
          ))}
        </div>
        <CaseFooter cases={cases} current={c} />
      </main>
    </div>
  );
}

function CaseHero({ case: c }: { case: CaseData }) {
  const coverSrc = `${import.meta.env.BASE_URL}cases/${c.slug}/${c.cover}`;
  return (
    <section
      className="relative flex h-dvh flex-col items-center justify-end pb-10"
      style={{
        backgroundImage: `url(${coverSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy/40 to-transparent" />

      {/* top accent line */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 10%, var(--bronze) 50%, transparent 90%)",
        }}
      />

      {/* back link */}
      <Link
        to="/"
        hash="projects"
        className="label-eyebrow absolute right-8 top-8 z-10 opacity-60 transition-opacity hover:opacity-100"
      >
        ← Arquivo
      </Link>

      {/* centered title block */}
      <div className="relative z-10 text-center">
        <p className="label-eyebrow mb-4">
          Case {c.n}&nbsp;&nbsp;·&nbsp;&nbsp;
          {c.roles.join(" · ")}
        </p>
        <h1 className="heading-display text-5xl md:text-7xl lg:text-8xl">
          {c.title}
        </h1>
      </div>
    </section>
  );
}

function CaseMetadata({ case: c }: { case: CaseData }) {
  const items = [
    { label: "Cliente", value: c.client },
    { label: "Ferramentas", value: c.tools.join(" · ") },
    { label: "Ano", value: c.year },
    { label: "Papel", value: c.roles.join(" · ") },
  ];

  return (
    <div className="border-b border-bronze/20 bg-navy py-5">
      <div
        style={{ maxWidth: "clamp(540px, 60vw, 860px)", margin: "0 auto" }}
        className="px-6 md:px-0"
      >
        <dl className="flex divide-x divide-bronze/20">
          {items.map(({ label, value }) => (
            <div
              key={label}
              className="flex-1 px-5 text-center first:pl-0 last:pr-0"
            >
              <dt className="label-eyebrow mb-1">{label}</dt>
              <dd className="font-sans text-xs text-ivory">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function CaseSummary({ summary }: { summary: string }) {
  return (
    <p className="py-12 font-display text-xl font-light leading-relaxed text-ivory/75 md:text-2xl">
      {summary}
    </p>
  );
}

function CaseSectionBlock({
  section,
  slug,
}: {
  section: CaseSection;
  slug: string;
}) {
  return (
    <div className="mb-16">
      <div className="mb-6 border-l-2 border-bronze/55 pl-4">
        <h2 className="font-display text-2xl font-normal text-ivory md:text-3xl">
          {section.title}
        </h2>
        {section.subtitle && (
          <p className="label-eyebrow mt-1">{section.subtitle}</p>
        )}
      </div>
      <p
        className="font-display text-lg font-light leading-relaxed text-ivory/65 md:text-xl"
        style={{ display: "-webkit-box", WebkitLineClamp: 5, WebkitBoxOrient: "vertical", overflow: "hidden" }}
      >
        {section.body}
      </p>
      {section.image && (
        <CaseSectionImage src={`/cases/${slug}/${section.image}`} alt={section.title} />
      )}
    </div>
  );
}

function CaseSectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative my-12 border-b border-t border-bronze/10"
      style={{ marginLeft: "calc(clamp(540px, 60vw, 860px) / -2 + 50%)", width: "100vw" }}
    >
      <img
        src={src}
        alt={alt}
        className="h-[480px] w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

function CaseFooter({
  cases,
  current,
}: {
  cases: CaseData[];
  current: CaseData;
}) {
  const idx = cases.findIndex((c) => c.slug === current.slug);
  const prev = idx > 0 ? cases[idx - 1] : null;
  const next = idx < cases.length - 1 ? cases[idx + 1] : null;

  return (
    <div
      className="border-t border-bronze/20 py-16"
      style={{ maxWidth: "clamp(540px, 60vw, 860px)", margin: "0 auto" }}
    >
      <div className="flex items-center justify-between px-6 md:px-0">
        {prev ? (
          <Link
            to="/cases/$slug"
            params={{ slug: prev.slug }}
            className="group flex flex-col"
          >
            <span className="label-eyebrow mb-1 opacity-60">← Anterior</span>
            <span className="font-display text-xl text-ivory transition-colors group-hover:text-bronze">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        <Link
          to="/"
          hash="projects"
          className="label-eyebrow opacity-60 transition-opacity hover:opacity-100"
        >
          Arquivo
        </Link>
        {next ? (
          <Link
            to="/cases/$slug"
            params={{ slug: next.slug }}
            className="group flex flex-col items-end"
          >
            <span className="label-eyebrow mb-1 opacity-60">Próximo →</span>
            <span className="font-display text-xl text-ivory transition-colors group-hover:text-bronze">
              {next.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
