import TranslationsProvider from '@/app/contexts/translation-provider';
import initTranslations from '@/app/i18n';
import PageContainer from '@/components/containers/page-container';
import ExperienceContainer from '@/components/sections/experience/experience-container';
import QuoteContent from '@/components/sections/skills/quote-content';
import SkillsContent from '@/components/sections/skills/skills-content';
import { CardContent } from '@/components/ui/card';
import PageHeader from '@/components/ui/page-header';
import { PageProps } from '@/definitions/page-types';

const i18nNamespaces = ['resumen', 'education', 'experience', 'common'];
const ResumenPage = async ({ params }: PageProps) => {
  const { locale } = await params;
  const { resources, t } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <PageContainer title={'resumen:title'}>
        <CardContent>
          <ExperienceContainer t={t} />
        </CardContent>

        <section className="mt-4 md:mt-8">
          <PageHeader variant="compuse" title={'resumen:section.skills'} className="fade-line-bottom" />
          <CardContent>
            <SkillsContent t={t} />
          </CardContent>
        </section>

        <section className="mt-4 md:mt-8">
          <PageHeader variant="compuse" title="resumen:section.quote" className="fade-line-bottom" />
          <CardContent>
            <QuoteContent
              autor="Linus Torvalds"
              rol="resumen:quote.rol"
              image="/images/resumen/linus.jpg"
              quote="resumen:quote.quote"
            />
          </CardContent>
        </section>
      </PageContainer>
    </TranslationsProvider>
  );
};

export default ResumenPage;
