import { Link } from "@tanstack/react-router";
import { LOCALES, LOCALE_LABELS } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { useLocale } from "@/i18n/context";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const locale = useLocale();

  return (
    <div className={`flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.3em] ${className}`}>
      {LOCALES.map((lang, i) => (
        <span key={lang} className="flex items-center gap-2">
          {i > 0 && <span className="text-bronze/30">·</span>}
          <Link
            to="."
            params={(p) => ({ ...p, lang })}
            className={lang === locale ? "text-bronze" : "text-ivory/30 hover:text-ivory/60 transition-colors"}
            aria-current={lang === locale ? "true" : undefined}
          >
            {LOCALE_LABELS[lang as Locale]}
          </Link>
        </span>
      ))}
    </div>
  );
}
