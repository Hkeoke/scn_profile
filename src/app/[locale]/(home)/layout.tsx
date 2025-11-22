import React, { PropsWithChildren } from "react";
import i18nConfig from "../../../../next-i18next.config";
import initTranslations from "@/app/i18n";
import { notFound } from "next/navigation";
import { PageProps } from "@/definitions/page-types";
import TranslationsProvider from "@/app/contexts/translation-provider";
import { VerticalNav } from "@/components/containers/navbar/navbar";
import NavarMobile from "@/components/containers/navbar-mobile";
import ProfileSummary from "@/components/containers/profile-summary";

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const i18nNamespaces = ["common", "errors"];

const HomeLayout = async ({
  params,
  children,
}: PageProps & PropsWithChildren) => {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="flex flex-col lg:flex-row container gap-4 h-auto min-h-[35rem] lg:max-h-[92vh] !mb-5 ">
        <NavarMobile locale={locale} />
        <VerticalNav locale={locale} />
        <ProfileSummary params={params} />
        {children}
      </main>
    </TranslationsProvider>
  );
};

export default HomeLayout;
