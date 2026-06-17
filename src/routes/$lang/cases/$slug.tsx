import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { MonolithNav } from "@/components/MonolithNav";
import { LivingBackground } from "@/components/LivingBackground";
import { cases, localizeCase } from "@/data/cases";
import type { CaseData, CaseSection } from "@/data/cases";
import { useIsMobile } from "@/hooks/use-mobile";
import { useI18n, useLocale } from "@/i18n/context";
import { isLocale, OG_LOCALES, SITE_ORIGIN } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

export const Route = createFileRoute("/$lang/cases/$slug")({
  loader: ({ params }) => {
    const c = cases.find((c) => c.slug === params.slug);
    if (!c) throw notFound();
    return localizeCase(c, isLocale(params.lang) ? params.lang : "pt");
  },
  head: ({ loaderData, params }) => {
    const locale = isLocale(params.lang) ? (params.lang as Locale) : "pt";
    const base = `${SITE_ORIGIN}/portfolio`;
    const slug = params.slug;
    if (!loaderData) return { meta: [], links: [] };
    return {
      meta: [
        { title: `${loaderData.title} — Rodrigo Anselmo` },
        { name: "description", content: loaderData.summary },
        { property: "og:title", content: `${loaderData.title} — Rodrigo Anselmo` },
        { property: "og:description", content: loaderData.summary },
        { property: "og:locale", content: OG_LOCALES[locale] },
        { property: "og:url", content: `${base}/${locale}/cases/${slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [
        { rel: "canonical", href: `${base}/${locale}/cases/${slug}` },
        { rel: "alternate", hreflang: "pt-BR", href: `${base}/pt/cases/${slug}` },
        { rel: "alternate", hreflang: "en", href: `${base}/en/cases/${slug}` },
        { rel: "alternate", hreflang: "es", href: `${base}/es/cases/${slug}` },
        { rel: "alternate", hreflang: "x-default", href: `${base}/pt/cases/${slug}` },
      ],
    };
  },
  component: CasePage,
  notFoundComponent: () => (
    <div className="flex h-dvh items-center justify-center text-ivory/50">
      Case não encontrado.
    </div>
  ),
});

function CasePage() {
  const c = Route.useLoaderData();
  const locale = useLocale();
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
        <CaseFooter cases={cases.map(x => localizeCase(x, locale))} current={c} />
      </main>
    </div>
  );
}

function CaseHero({ case: c }: { case: CaseData }) {
  const t = useI18n();
  const { lang } = Route.useParams();
  const coverSrc = `${import.meta.env.BASE_URL}cases/${c.slug}/${c.cover}`;
  return (
    <section
      className="relative flex min-h-[60vh] flex-col items-center justify-end pb-10 md:min-h-dvh"
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
        to="/$lang"
        hash="projects"
        params={{ lang }}
        className="label-eyebrow absolute right-8 top-8 z-10 opacity-60 transition-opacity hover:opacity-100"
      >
        {t.case.backToArchive}
      </Link>

      {/* centered title block */}
      <div className="relative z-10 text-center">
        <p className="label-eyebrow mb-4">
          {t.case.caseLabel} {c.n}&nbsp;&nbsp;·&nbsp;&nbsp;
          {c.roles.join(" · ")}
        </p>
        <h1 className="heading-display text-3xl md:text-7xl lg:text-8xl">
          {c.title}
        </h1>
      </div>
    </section>
  );
}

function CaseMetadata({ case: c }: { case: CaseData }) {
  const t = useI18n();
  const items = [
    { label: t.case.client, value: c.client },
    { label: t.case.tools, value: c.tools.join(" · ") },
    { label: t.case.year, value: c.year },
    { label: t.case.role, value: c.roles.join(" · ") },
  ];

  return (
    <div className="border-b border-bronze/20 bg-navy py-5">
      <div
        style={{ maxWidth: "clamp(540px, 60vw, 860px)", margin: "0 auto" }}
        className="px-6 md:px-0"
      >
        <dl className="grid grid-cols-2 gap-x-4 gap-y-5 md:flex md:divide-x md:divide-bronze/20">
          {items.map(({ label, value }) => (
            <div
              key={label}
              className="md:flex-1 md:px-5 md:text-center md:first:pl-0 md:last:pr-0"
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
  const isMobile = useIsMobile();
  return (
    <div
      className="relative my-10 border-b border-t border-bronze/10 md:my-12"
      style={
        isMobile
          ? { marginLeft: "-1.25rem", marginRight: "-1.25rem" }
          : { marginLeft: "calc(clamp(540px, 60vw, 860px) / -2 + 50%)", width: "100vw" }
      }
    >
      <img
        src={src}
        alt={alt}
        className="h-[240px] w-full object-cover md:h-[480px]"
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
  const t = useI18n();
  const { lang } = Route.useParams();
  const idx = cases.findIndex((c) => c.slug === current.slug);
  const prev = idx > 0 ? cases[idx - 1] : null;
  const next = idx < cases.length - 1 ? cases[idx + 1] : null;

  return (
    <div
      className="border-t border-bronze/20 px-5 pb-28 pt-12 md:px-0 md:pb-16"
      style={{ maxWidth: "clamp(540px, 60vw, 860px)", margin: "0 auto" }}
    >
      {/* Mobile: stacked vertical */}
      <div className="flex flex-col gap-3 md:hidden">
        {prev && (
          <Link
            to="/$lang/cases/$slug"
            params={{ slug: prev.slug, lang }}
            className="group flex min-h-[56px] items-center gap-4 rounded-sm border border-bronze/20 px-4 py-3 transition-colors hover:border-bronze/50"
          >
            <span className="label-eyebrow opacity-60">←</span>
            <div>
              <span className="label-eyebrow block opacity-60">{t.case.previous}</span>
              <span className="font-display text-lg text-ivory">{prev.title}</span>
            </div>
          </Link>
        )}
        <Link
          to="/$lang"
          hash="projects"
          params={{ lang }}
          className="label-eyebrow flex min-h-[44px] items-center justify-center rounded-sm border border-bronze/10 px-4 py-2 opacity-60 transition-opacity hover:opacity-100"
        >
          {t.case.archive}
        </Link>
        {next && (
          <Link
            to="/$lang/cases/$slug"
            params={{ slug: next.slug, lang }}
            className="group flex min-h-[56px] items-center justify-end gap-4 rounded-sm border border-bronze/20 px-4 py-3 text-right transition-colors hover:border-bronze/50"
          >
            <div>
              <span className="label-eyebrow block opacity-60">{t.case.next}</span>
              <span className="font-display text-lg text-ivory">{next.title}</span>
            </div>
            <span className="label-eyebrow opacity-60">→</span>
          </Link>
        )}
      </div>

      {/* Desktop: side by side */}
      <div className="hidden items-center justify-between md:flex">
        {prev ? (
          <Link
            to="/$lang/cases/$slug"
            params={{ slug: prev.slug, lang }}
            className="group flex flex-col"
          >
            <span className="label-eyebrow mb-1 opacity-60">← {t.case.previous}</span>
            <span className="font-display text-xl text-ivory transition-colors group-hover:text-bronze">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        <Link
          to="/$lang"
          hash="projects"
          params={{ lang }}
          className="label-eyebrow opacity-60 transition-opacity hover:opacity-100"
        >
          {t.case.archive}
        </Link>
        {next ? (
          <Link
            to="/$lang/cases/$slug"
            params={{ slug: next.slug, lang }}
            className="group flex flex-col items-end"
          >
            <span className="label-eyebrow mb-1 opacity-60">{t.case.next} →</span>
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
