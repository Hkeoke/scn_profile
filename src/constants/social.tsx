import { ISocial } from '@/definitions/Profile';
import Github from '@/components/icons/social/github';
import GitLab from '@/components/icons/social/gitlab';
import Instagram from '@/components/icons/social/instagram';
import WhatsApp from '@/components/icons/social/whatsApp';
import LinkedinIcon from '@/components/icons/social/linkedin';

export const socials: ISocial[] = [
  {
    icon: <WhatsApp />,
    href: 'https://wa.me/5354137564',
    label: 'WhatsApp'
  },
  {
    icon: <Instagram />,
    href: 'https://www.instagram.com/vik__99__',
    label: 'Instagram'
  },
  /*{
    icon: <LinkedinIcon />,
    href: '',
    label: 'Linkedin'
  },*/
  {
    icon: <Github />,
    href: 'https://gitlab.com/Hkeoke',
    label: 'Github'
  }
  /* {
    icon: <GitLab />,
    href: 'https://gitlab.com/Hkeoke',
    label: 'GitLab'
  }*/
];
