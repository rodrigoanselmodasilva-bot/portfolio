import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { useEffect } from "react";
import { isLocale, DEFAULT_LOCALE } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { I18nProvider } from "@/i18n/context";
import { dictionaries } from "@/i18n/dictionaries";
import { MobileNav } from "@/components/MobileNav";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.lang)) {
      throw redirect({
        to: "/$lang",
        params: { lang: DEFAULT_LOCALE },
        replace: true,
      });
    }
    return { locale: params.lang as Locale };
  },
  component: LangLayout,
});

function LangLayout() {
  const { locale } = Route.useRouteContext();
  const dictionary = dictionaries[locale as Locale];

  useEffect(() => {
    const langAttr =
      locale === "pt" ? "pt-BR" : locale === "es" ? "es" : "en";
    document.documentElement.lang = langAttr;
  }, [locale]);

  return (
    <I18nProvider locale={locale as Locale} dictionary={dictionary}>
      <Outlet />
      <MobileNav />
    </I18nProvider>
  );
}
