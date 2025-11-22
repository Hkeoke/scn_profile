import React from 'react';
import { Card } from '../ui/card';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import ProfileSocialNetwork from './profile-social-network';
import { TypingTitle } from './typed-titles';
import ProfileActions from './profile-actions';
import { User } from 'lucide-react';
import { INFO } from '@/constants/info';
import { cn } from '@/lib/utils';
import { PageProps } from '@/definitions/page-types';
import initTranslations from '@/app/i18n';
import Logo from '../core/logo';

const ProfileSummary = async ({ params }: PageProps) => {
  const { locale } = await params;
  const { t } = await initTranslations(locale, ['common']);
  const roles = (await t('common:roles', { returnObjects: true })) as string[];

  return (
    <Card
      className={cn(
        'relative border-0 lg:border-1 border-primary/50 lg:min-w-[22rem] z-20 !py-0 !m-0 !min-h-[35rem]',
        'summary-bg'
      )}
    >
      <Logo className="absolute top-4 right-4 w-10 h-10 z-10" />
      <Image src={'/images/profile/bg-profile.jpg'} className="bg-contain rounded-md" fill alt={'profile'} />

      <Card className="mt-auto lg:rounded-t-4xl border dark:lg:border-t-primary/50 flex flex-col items-center z-10 h-auto !lg:p-0 lg:ovalo backdrop-blur-sm  bg-card/10 text-white dark:text-color !pb-0">
        {/* image profile */}
        <div className="profile-avatar lg:-mt-24 -mt-16">
          <Avatar className="w-24 h-24 lg:w-28 lg:h-28 border-2 border-primary scale">
            <AvatarImage src="/images/profile/avatar.jpg" />
            <AvatarFallback className="bg-primary/80 backdrop-blur-sm">
              <User />
            </AvatarFallback>
          </Avatar>
        </div>

        {/* name section */}
        <h1 className="font-bold text-white dark:text-color text-xl lg:text-2xl leading-1 mt-5 lg:mt-10 li  ">
          {INFO.name}
        </h1>
        <TypingTitle texts={roles} className="mb-4" />
        <ProfileSocialNetwork />

        <ProfileActions locale={locale} />
      </Card>
    </Card>
  );
};

export default ProfileSummary;
