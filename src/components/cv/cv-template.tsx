import { Document, Link, Page, Text, View } from '@react-pdf/renderer';
import { TFunction } from 'i18next';
import { styles } from './cv-styles';
import { INFO } from '@/constants/info';
import { parseI18nText } from './cv-text-parser';
import { ITimeLine } from '@/definitions/resumen';
import { PropsWithChildren } from 'react';
import { codingSkills, SkillProps, tools } from '@/constants/skill';

type Props = {
  t: TFunction<['translation', ...string[]], undefined>;
};
export const CvTemplate = ({ t }: Props) => {
  const description = t('about-me:aboutMe.description', {
    name: INFO.name,
    years: INFO.work.year,
    interpolation: { escapeValue: false }
  });
  const educations = (t('education:educations', { returnObjects: true }) as ITimeLine[]) ?? [];
  const experiences = (t('experience:experiences', { returnObjects: true }) as ITimeLine[]) ?? [];

  return (
    <Document>
      <Page size="A4" style={[styles.page, { paddingBottom: 60 }]}>
        <View style={styles.section}>
          <Text style={[styles.h1, { textAlign: 'center' }]}>{INFO?.name}</Text>
          <View style={[styles.flexRow, styles.mb10, styles.border, { justifyContent: 'center' }]}>
            <Text>{t('common:address')}</Text>
            <Point />
            <Link href={`mailto:${INFO.email}`}>{INFO.email}</Link>
          </View>
          <View>
            <Text>{parseI18nText(description)}</Text>
          </View>

          {/* experiences */}
          <View style={[styles.mt10]}>
            <Header>{t('experience:title')}</Header>
            <View style={[styles.flexCol, { gap: 16 }]}>
              {experiences?.map((item, index) => <Item key={index} {...item} />)}
            </View>
          </View>

          {/* education */}
          <View style={[styles.mt10]}>
            <Header>{t('education:title')}</Header>
            <View style={[styles.flexCol, { gap: 16 }]}>
              {educations?.map((item, index) => <Item key={index} {...item} />)}
            </View>
          </View>

          {/* skill code */}
          <View style={[styles.mt10]}>
            <Header>{t('resumen:skills.code')}</Header>

            <View style={[styles.flexRow, { flexWrap: 'wrap', gap: 4 }]}>
              {codingSkills?.map((item, index) => <SkillItem key={index} {...item} />)}
            </View>
          </View>
          {/* skill tools */}
          <View style={[styles.mt10]}>
            <Header>{t('resumen:skills.tools')}</Header>

            <View style={[styles.flexRow, { flexWrap: 'wrap', gap: 4 }]}>
              {tools?.map((item, index) => <SkillItem key={index} {...item} />)}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

const Point = () => <Text>•</Text>;

const Item = (item: ITimeLine) => {
  const form = getFormat(item?.dateRange?.from);
  const to = getFormat(item?.dateRange?.to);

  const _description = typeof item?.description === 'string' ? [item?.description] : item?.description;

  return (
    <View>
      <View style={[styles.flexRow, { justifyContent: 'space-between' }]}>
        <View style={{ width: '80%' }}>
          <Text style={[styles.bold]}>{item?.companyName}</Text>
          <Text>{item?.jobTitle}</Text>
        </View>
        <View style={[{ fontSize: 9 }]}>
          <Text>{item?.address}</Text>
          <Text>
            {form} - {to}
          </Text>
        </View>
      </View>

      <View style={[styles.flexCol, { gap: 2, marginTop: 4, marginLeft: 8 }]}>
        {_description?.map((desc, index) => (
          <View key={index} style={[styles.customBullet]}>
            <View style={styles.bullet} />
            <Text style={[styles.mt5, { fontWeight: 'light' }]}>{parseI18nText(desc)}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const Header = ({ children }: PropsWithChildren) => {
  return (
    <Text style={[styles.border, styles.mt10, styles.mb10, styles.bold, { textTransform: 'uppercase' }]}>
      {children}
    </Text>
  );
};
const SkillItem = (item: SkillProps) => {
  return <Text style={[styles.skill, { fontWeight: 'light' }]}>{item?.name}</Text>;
};

const getFormat = (date: string) => {
  if (date === null) return new Date().toISOString().split('T')[0];

  return new Date(date).toISOString().split('T')[0];
};
