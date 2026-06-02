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
  };
  contact: {
    title: string;
    description: string;
  };
  stats: {
    title: string;
  };
}
