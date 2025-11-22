import TranslationsProvider from "@/app/contexts/translation-provider";
import initTranslations from "@/app/i18n";
import PageContainer from "@/components/containers/page-container";
import ContactForm from "@/components/core/contact/contact-form";
import ContactMapContainer from "@/components/core/contact/contact-map-container";
import { CardContent } from "@/components/ui/card";
import PageHeader from "@/components/ui/page-header";
import { PageProps } from "@/definitions/page-types";

const i18nNamespaces = ["common", "contact", "errors"];

const ContactMePage = async ({ params }: PageProps) => {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <PageContainer title={"contact:section.map"}>
        {/* map */}
        <ContactMapContainer />

        <section className="mt-2 md:mt-8">
          <PageHeader
            variant="compuse"
            title={"contact:section.form"}
            className="fade-line-bottom"
          />
          <CardContent id="form">
            <ContactForm />
          </CardContent>
        </section>
      </PageContainer>
    </TranslationsProvider>
  );
};

export default ContactMePage;
