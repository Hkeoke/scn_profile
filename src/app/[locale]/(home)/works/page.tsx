import TranslationsProvider from "@/app/contexts/translation-provider";
import initTranslations from "@/app/i18n";
import PageContainer from "@/components/containers/page-container";
import InConstruction from "@/components/core/in-construction";
import { PageProps } from "@/definitions/page-types";

const i18nNamespaces = ["resumen", "common"];
const WorksPage = async ({ params }: PageProps) => {
  const { locale } = await params;
  const { resources, t } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <PageContainer title={""}>
        <InConstruction t={t} />
      </PageContainer>
    </TranslationsProvider>
  );
};

export default WorksPage;
