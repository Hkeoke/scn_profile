import AstroIcon from '@/components/icons/services/astro-icon';
import BlockIcon from '@/components/icons/services/block-icon';
import GraphQlIcon from '@/components/icons/services/graphql-icon';
import NestIcon from '@/components/icons/services/nest-icon';
import NextIcon from '@/components/icons/services/next-icon';
import ReactIcon from '@/components/icons/services/react-icon';
import { IAboutMeService } from '@/definitions/about-me';

export const SERVICES: IAboutMeService[] = [
  {
    title: 'my_service.services.service_1.title',
    description: 'my_service.services.service_1.description',
    icon: <ReactIcon />
  },
  {
    title: 'my_service.services.service_2.title',
    description: 'my_service.services.service_2.description',
    icon: <NestIcon />
  },
  {
    title: 'my_service.services.service_3.title',
    description: 'my_service.services.service_3.description',
    icon: <NextIcon />
  },
  {
    title: 'my_service.services.service_4.title',
    description: 'my_service.services.service_4.description',
    icon: <AstroIcon />
  },

  /* {
    title: "my_service.services.service_6.title",
    description: "my_service.services.service_6.description",
    icon: <SeoIcon />
  }, */
  {
    title: 'my_service.services.service_5.title',
    description: 'my_service.services.service_5.description',
    icon: <BlockIcon />
  }
];
