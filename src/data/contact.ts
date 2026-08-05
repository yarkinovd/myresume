import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://github.com/yarkinovd',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/yarkinovd',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/doniyorbekyarkinov',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://t.me/yarkinovd',
    label: 'Telegram',
    icon: faTelegram,
  },
  {
    link: 'mailto:doniyorbekyarkinovv@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
