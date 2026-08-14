import type { Degree } from '@/data/resume/degrees';
import type { Position } from '@/data/resume/work';

export type Language = 'en' | 'uz' | 'ru';

export interface Translations {
  nav: {
    home: string;
    about: string;
    resume: string;
    stats: string;
    contact: string;
  };
  sidebar: {
    aboutHeading: string;
    blurb: string;
    learnMore: string;
    aboutMe: string;
  };
  home: {
    greeting: string;
    subtitle: string;
    intro: string;
    aboutLink: string;
    resumeLink: string;
    statsLink: string;
    contactLink: string;
  };
  about: {
    title: string;
    wordCount: (n: number) => string;
    content: string;
  };
  resume: {
    title: string;
    education: string;
    experience: string;
    skills: string;
    skillsAll: string;
    present: string;
    degrees: Degree[];
    positions: Position[];
  };
  contact: {
    title: string;
    description: string;
    messages: string[];
  };
  stats: {
    title: string;
    personalHeading: string;
    siteHeading: string;
    ageLabel: string;
    locationLabel: string;
    cityValue: string;
    starsLabel: string;
    watchersLabel: string;
    lastUpdatedLabel: string;
  };
}
