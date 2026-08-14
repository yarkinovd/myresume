import type { Translations } from './types';

const en: Translations = {
  nav: {
    home: 'Doniyorbek Yarkinov',
    about: 'About',
    resume: 'Resume',
    stats: 'Stats',
    contact: 'Contact',
  },
  sidebar: {
    aboutHeading: 'About',
    blurb:
      "Hi! I'm a Software Engineer focused on Flutter and Fullstack development. Currently studying Software Engineering at PDP University on a 100% scholarship. Previously worked as a Frontend developer and Lead Mentor, training over 200 students. Today at Realsoft, I build large-scale national GovTech platforms and enterprise mobile applications.",
    learnMore: 'Learn More',
    aboutMe: 'About Me',
  },
  home: {
    greeting: 'Hi, my name is Doniyorbek',
    subtitle: 'Flutter & Fullstack Software Engineer',
    intro: 'Welcome to my personal site. Read more:',
    aboutLink: 'about me',
    resumeLink: 'resume',
    statsLink: 'site statistics',
    contactLink: 'get in touch',
  },
  about: {
    title: 'About Me',
    wordCount: (n) => `in about ${n} words`,
    content: `

Every project is a new milestone. If you'd like to collaborate or simply chat over a cup of coffee, feel free to reach out!

# Some Info

- Once I started learning Frontend development, I realized how well I connect with websites, UI design, and colors.
- I was always fascinated by video editing but couldn't get the hang of it, so I also learned SMM and Mobilography. This creative process quickly became my favorite hobby, especially since video editing once felt like an unattainable dream to me.
- For one full year (from May 2023 to May 2024), I worked as the Lead Frontend Mentor and developer at an IT center. I guided over 200 students into the programming world — this remains one of the achievements I am most proud of and hold close to my heart!
- During that same year, I also hustled as an SMM specialist and mobilographer for stores, learning centers, clothing shops, and restaurants. It was an extremely exciting period that taught me to understand people better than any psychology book could!
- I took the IELTS and scored 6.0. What do you think, is an IELTS score of 6 in just 1 month good? (07.05.2024 – 07.06.2024).

For any other "adventures" I'm afraid to put on the internet, ask me when we meet in person 😉


The reason I added this page is because many people complained that my site was just a resume.

`,
  },
  resume: {
    title: 'Resume',
    education: 'Education',
    experience: 'Experience',
    skills: 'Skills',
    skillsAll: 'All',
    present: 'Present',
    degrees: [
      {
        school: '1-Specialized State Comprehensive School',
        degree: 'Mathematics and Physics',
        link: 'https://schools.emaktab.uz/v2/school?school=1000006479373&view=profile',
        year: '2013 – 2024',
      },
      {
        school: 'PDP University',
        degree: 'B.S. in Software Engineering (BTEC International Curriculum)',
        link: 'https://university.pdp.uz/uz',
        year: '2024 – Present',
        points: [
          '**Year 1 (2024–2025):** Fullstack Development (Python, Node.js), Information Technology Systems (ITS), Business Process Modeling (BPM), Big Data & Business Analytics (Excel, MySQL), Artificial Intelligence, Enterprise in IT.',
          '**Year 2 (2025–2026):** Flutter Mobile Development, Database Design (PostgreSQL), Cloud Networking (SysAdmin/DevOps), Software Development Lifecycle (SDLC), Big Data & Visualization (PowerBI, Tableau), Cyber Security, Innovation & Digital Transformation.',
        ],
      },
    ],
    positions: [
      {
        name: 'Realsoft (realsoft.uz)',
        position: 'Software Engineer (Mobile & Fullstack)',
        url: 'https://realsoft.uz',
        startDate: '2026-05-27',
        summary: '',
        highlights: [
          'raqamli-bozor.uz: A massive platform digitalizing all farmers\' markets and commercial shopping complexes across Uzbekistan for government monitoring.',
          'EasyTrip: A real assistant app for tourists visiting Uzbekistan. Solves issues of unfamiliar pricing, getting lost, and booking places in a new country.',
          'Mahalla Bankiri: A specialized mobile application for debt collection field agents. Features background GPS monitoring and a strict geofencing system.',
          'agros.uz: A large-scale ecosystem digitalizing an insurance company.',
        ],
      },
      {
        name: 'Freelancer',
        position: 'Fullstack Developer',
        url: '',
        startDate: '2024-07-20',
        endDate: '2026-05-25',
        summary: '',
        highlights: [
          "I can't say I worked non-stop during these 2 years; I just took on jobs whenever pockets were empty or I needed to make money. If someone needed a project or a feature done fast, I quickly took the order, nailed the code from start to finish, delivered it, and got paid.",
          'Built full-stack web and mobile projects from scratch all the way to production for diverse clients.',
          'Handled everything from negotiating budgets and clarifying client requirements to writing code and deploying to servers.',
        ],
      },
      {
        name: 'Meta IT School',
        position: 'Frontend Mentor',
        url: 'https://instagram.com/metaitschool',
        startDate: '2023-05-01',
        endDate: '2024-05-01',
        summary: '',
        highlights: [
          'Taught over 200 aspiring IT enthusiasts — packed with endless questions, code reviews, and survival lessons in the tech world.',
          'Created practice-based courses for HTML/CSS, JS, React, and project architecture with zero dry or useless fluff.',
          "Taught them Git, modern tools, and project deployment secrets so they wouldn't get grilled or stumble during technical interviews.",
        ],
      },
      {
        name: 'Meta IT School',
        position: 'Frontend Developer',
        url: 'https://instagram.com/metaitschool',
        startDate: '2023-05-01',
        endDate: '2024-05-01',
        summary: '',
        highlights: [
          'Developed responsive dashboards and internal tools using React and modern frontend patterns.',
          'Collaborated with the team and leadership to enhance the digital learning experience.',
          'Integrated APIs and built interfaces supporting student progress tracking and course management.',
        ],
      },
      {
        name: 'Meta IT School',
        position: 'SMM Manager & Mobilographer',
        url: 'https://instagram.com/metaitschool',
        startDate: '2023-05-01',
        endDate: '2024-05-01',
        summary: '',
        highlights: [
          'Created promotional videos, photos, and Reels content to showcase student projects and education center events.',
          'Designed visual concepts that reinforced brand identity and improved audience engagement.',
          'Managed the complete production pipeline from shooting and editing to color grading and uploading to social platforms.',
        ],
      },
    ],
  },
  contact: {
    title: 'Contact',
    description:
      'Feel free to get in touch. You can message me on Telegram at:',
    messages: [
      '@yarkinovd',
      'Assalamu’alaikum',
      'Assalamu’alaikum warahmatullahi wabarakatuh',
      'you can message me about literally anything! Really',
      'well, not literally anything, but almost anything',
      'like this',
      'or this',
      'but not this :(  ',
      'you can also message me about specific topics, like',
      'just saying hi',
      'work with us',
      'need help',
      'or I really liked your site',
      'thanks',
    ],
  },
  stats: {
    title: 'Stats',
    personalHeading: 'Some stats about me',
    siteHeading: 'Some stats about this site',
    ageLabel: 'Current age',
    locationLabel: 'Current city',
    cityValue: 'Tashkent',
    starsLabel: 'Stars this repository has on GitHub',
    watchersLabel: 'Number of people watching this repository',
    lastUpdatedLabel: 'Last updated at',
  },
};

export default en;
