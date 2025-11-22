import TranslationsProvider from "@/app/contexts/translation-provider";
import initTranslations from "@/app/i18n";
import PageContainer from "@/components/containers/page-container";
import TransTypography from "@/components/core/trans-typography";
import ServiceContainer from "@/components/sections/service/service-container";
import { CardContent } from "@/components/ui/card";
import PageHeader from "@/components/ui/page-header";
import { INFO } from "@/constants/info";
import { PageProps } from "@/definitions/page-types";

const i18nNamespaces = ["common", "about-me"];

const AboutMe = async ({ params }: PageProps) => {
  const { locale } = await params;
  const { resources, t } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <PageContainer title={"about-me:title"}>
        <CardContent>
          <section className="flex flex-col w-full gap-2">
            <TransTypography
              className="text-md font-normal lg:text-justify leading-7"
              message="about-me:aboutMe.description"
              values={{
                name: INFO.name,
                years: INFO.work.year,
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-2">
              <AboutMeItem
                title="about-me:aboutMe.summary.age"
                value={INFO.age}
              />
              <AboutMeItem
                title="about-me:aboutMe.summary.residence"
                value={t("common:country")}
              />
              <AboutMeItem
                title="about-me:aboutMe.summary.freelance"
                value={t("common:country")}
              />
              <AboutMeItem
                title="about-me:aboutMe.summary.address"
                value={t("common:address")}
              />
            </div>
          </section>
        </CardContent>
        {/* my services */}

        <section className="mt-5 md:mt-10">
          <PageHeader
            variant="compuse"
            title={"about-me:my_service.title"}
            className="fade-line-bottom"
          />
          <CardContent>
            <ServiceContainer />
          </CardContent>
        </section>

        {/* section plans */}
        {/*  <section className="mt-5 md:mt-10">
          <PageHeader
            variant="compuse"
            title={"about-me:payment_plans.title"}
            className="fade-line-bottom"
          />
          <CardContent>
            <PlansContainer params={params} />
          </CardContent>
        </section> */}
      </PageContainer>
    </TranslationsProvider>
  );
};

export default AboutMe;

type Props = {
  title: string;
  value: string | number;
};
const AboutMeItem = ({ title, value }: Props) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <TransTypography
        className="uppercase font-bold text-md sm:text-sm"
        message={title}
      />
      {value}
    </div>
  );
};
