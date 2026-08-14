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
      "Hi, I'm a Software Engineer focused on Flutter and Fullstack development, currently studying Software Engineering at PDP University on a 100% scholarship. I previously worked as a Frontend developer and Lead Mentor, training over 200 students. Today, I build large-scale national GovTech platforms and mobile enterprise solutions at Realsoft.",
    learnMore: 'Learn More',
    aboutMe: 'About Me',
  },
  home: {
    greeting: "Hi, I'm Doniyorbek",
    subtitle: 'Software Engineer focused on Flutter & Fullstack development.',
    intro: 'Welcome to my personal site. Feel free to read more',
    aboutLink: 'about me',
    resumeLink: 'resume',
    statsLink: 'site statistics',
    contactLink: 'get in touch',
  },
  about: {
    title: 'About Me',
    wordCount: (n) => `in about ${n} words`,
    content: `# Intro

Software Engineering student at PDP University (100% Scholarship recipient, 2024) pursuing an international BTEC curriculum. Transitioned from Frontend development (React, TS, Next.js) to Mobile Engineering with a strong focus on Flutter. Proven educator and leader, having trained 200+ students as a Lead Frontend Instructor from 2023 to 2024. Continually growing as a mobile developer, combining deep technical expertise with a creative background in digital marketing (SMM/Mobilography, 2023–2024) to build user-centric, high-performance software solutions.


If you'd like to collaborate or just connect, feel free to reach out.

# Some History

- I started learning Frontend Development and instantly fell in love with building things on the web.
- I learned React.js, TypeScript, and Next.js, spending the period from January 2023 to May 2023 fully diving into modern web development.
- Around the same time, I also learned SMM and Mobilography. I didn't plan for it — I was just curious and ended up enjoying the creative process.
- For one full year (from May 2023 to May 2024), I worked as the main Frontend mentor and developer at an IT education center. I taught over 200 students, which is still one of my favorite accomplishments.
- For that same year, I also worked as an SMM specialist and mobilographer for several businesses — shops, learning centers, clothing stores, and restaurants. It was chaotic, fun, and taught me more about people than any book could.
- I bought my first big tech "trophy," an iPhone 14 Pro Max (09.10.2023). I felt unstoppable.
- I wasn't planning to enter the university at all. I was confident that I would just learn programming, work, and build projects — and my family fully supported me in that decision. But everything changed suddenly in April 2024, right before I finished the 11th grade. My family decided that I must enter the university. With only two months left before the entrance exams, I was shocked. I asked myself every day if it was even possible to prepare that fast. But I didn't argue — instead, I pushed harder than ever before.
- For two intense months, I studied 15 hours a day: 1 month of English. 1 month of Mathematics
- I took the IELTS and earned a 6.0 (07.05.2024 – 07.06.2024).
- A month later, I finished my Mathematics preparation (14.06.2024 – 14.07.2024).
- I scored 127.3 points on the national university entrance exam.
- Then I bought an iPhone 15 Pro (01.08.2024). I don't always reward myself — but when I do, it's with Apple products.
- On August 30, 2024, I won a 100% scholarship to PDP University and officially became a first-year student. My major: Software Engineering with a focus on Flutter.
- And yes… I couldn't stop there. I finally bought a MacBook Pro 2021 (M1 Pro, 16GB RAM / 512GB SSD, 14-inch) (20.10.2024). It felt like leveling up in real life.

Ask me in person for other stories that I'm afraid to share with the internet.

# I Like

- Reading fiction books
- Playing football
- Armwrestling
- Computer games

# Fun Facts

- I have an unhealthy number of Google Chrome tabs open — my laptop cries, but I call it "organized chaos."
- I once tried to learn 3 programming languages at the same time. Now they all live in my head fighting for dominance.
- I talk to my devices as if they can hear me. My laptop still refuses to listen.
- I collect notebooks faster than I fill them. At this point, it's basically a museum.
- I set way too many alarms every morning — one of them might wake me up someday.
- I can't cook without turning the kitchen into a crime scene, but I still try because optimism is important.
- I like buying gadgets I don't need and then pretending they were essential to my survival.
- I added this page because many people complained that my site was just my resume.

# I Dream Of

- Inspiring and feeling inspired.
- Treating every individual with genuine kindness and respect.
- Staying curious.
- Continually improving.
- You not checking the commit history for earlier drafts of this file.
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
        summary: `I originally joined as a Flutter dev, but let's be real—in a high-speed environment, you either adapt or get left behind. I quickly evolved into a Fullstack role because I love tearing down problems, whether they are floating on the UI or buried deep in the backend database. Building massive national platforms basically turned me into a tech chameleon ready for any position.`,
        highlights: [
          'Raqamli Bozor (raqamli-bozor.uz): A massive GovTech monster designed to digitalize and monitor every single farming market and trade complex across Uzbekistan. I worked as a fullstack engineer, taking charge of completely moving physical shops and market stalls into the digital space.',
          "EasyTrip: A literal lifesaver mobile app for tourists visiting Uzbekistan. It cures their biggest travel anxiety—dealing with price transparency, finding landmarks, and making reservations without getting lost. I engineered the core user-centric features and polished the real-time booking flows so foreign guests don't get stuck.",
          "Mahalla Bankiri: A specialized mobile application for debt collection field agents, and yes, it was just as intense as it sounds! Built a strict geofencing boundary system with background GPS monitoring. If you are assigned to 'Do'stlik MFY', you cannot step a foot outside that neighborhood; the app instantly tracks it, manages working hours, and keeps everything locked down.",
          'Agros (agros.uz): A huge ecosystem bringing digital order to the agricultural sector. I completely dove into the legacy code, hunted down and killed all existing mobile bugs, and expanded the app by rolling out a fresh batch of new features.',
          'Flexibility Master: Jumped back and forth between Flutter mobile development and comprehensive backend/frontend infrastructure depending on where the team desperately needed a fire put out.',
        ],
      },
      {
        name: 'Freelancer',
        position: 'Fullstack developer',
        url: '',
        startDate: '2024-07-20',
        endDate: '2026-05-25',
        summary: `Let's be completely honest: I didn't treat this as a 9-to-5 career. This was my personal ATM machine for securing quick cash whenever bills piled up or I just needed money. Someone needed a custom project or a feature fast? I grabbed the gig, smashed the code, delivered the product, and collected the bag. Pure on-demand hustle.`,
        highlights: [
          'Operated as a lone wolf, building and deploying full-stack web and mobile projects completely from scratch for various clients.',
          'Handled the entire lifecycle solo—from arguing over budgets and scope with clients to writing every line of code and hitting production.',
          'Mastered the art of high-speed development under insane deadlines, because faster delivery meant faster payouts.',
          'Shuffled through different tech stacks daily, adapting instantly to whatever random tools the client’s project demanded.',
          'Kept clients happy and jobs completed, maintaining a flawless 100% success rate of getting paid on time.',
        ],
      },
      {
        name: 'Meta IT School',
        position: 'Frontend mentor',
        url: 'https://instagram.com',
        startDate: '2023-05-01',
        endDate: '2024-05-01',
        summary: `Being the Lead Frontend Mentor was a wild, exhausting, and incredibly rewarding ride. I personally guided over 200 students into the tech world. I didn't just teach them React; I basically had to act as a therapist so they wouldn't quit when JavaScript started acting weird.`,
        highlights: [
          'Managed multiple cohorts of 200+ students altogether, dealing with an endless stream of questions, code reviews, and survival mentorship.',
          'Created a completely fluff-free curriculum covering HTML/CSS, core JavaScript, React, and clean project architecture.',
          'Forced students to build real, broken-at-first, production-level projects from day one so they could taste actual developer life.',
          "Taught them Git workflows, modern tooling, and deployment secrets so they wouldn't look completely clueless in real job interviews.",
          "Boosted graduation rates through intense 1-on-1 coding sessions and heavy emotional support when their code wouldn't compile.",
        ],
      },
      {
        name: 'Meta IT School',
        position: 'Frontend developer',
        url: 'https://instagram.com',
        startDate: '2023-05-01',
        endDate: '2024-05-01',
        summary: `While mentoring, I was also building the school’s actual internal ecosystem. I wrote code for student dashboards and web tools to keep the entire educational machine running smoothly behind the scenes.`,
        highlights: [
          'Built snappy, responsive student and admin dashboards using React and modern frontend optimization tricks.',
          'Sat down with management to turn complex educational workflows into clean, working software features.',
          'Killed UI lag by optimizing performance and writing clean, reusable components that other devs could actually read without crying.',
          'Hooked up backend APIs to display real-time student progress, metrics, and course states.',
          'Chased pixel-perfect designs to ensure the school’s platforms looked modern, polished, and easy to navigate.',
        ],
      },
      {
        name: 'Meta IT School',
        position: 'SMM manager & mobilographer',
        url: 'https://instagram.com',
        startDate: '2023-05-01',
        endDate: '2024-05-01',
        summary: `Wore a completely different hat here. I took total charge of the school's social media and visual presence, translating the brand’s story into high-quality video content that actually hooked people's attention.`,
        highlights: [
          'Shot and edited hype promotional videos, reels, and photos showcasing student success stories and campus life.',
          'Ran the Instagram strategy, turning dry technical announcements into highly engaging, viral content.',
          'Collaborated with teachers and staff to capture authentic stories for digital marketing campaigns.',
          'Handled the full creative process from holding the camera to cutting clips, color grading, and hitting the post button.',
          'Proved once and for all that developers can actually be highly creative outside of a code editor.',
        ],
      },
    ],
  },
  contact: {
    title: 'Contact',
    description: 'Feel free to get in touch. You can message me on Telegram at:',
    messages: [
      '@yarkinovd',
      'hello',
      'you can message me about literally anything! Really',
      'well, not anything. But most things',
      'like this',
      'or this',
      'but not this :(  ',
      'you can also message me with specific topics like',
      'just saying hi',
      'please work for us',
      'help',
      'or I really like your website',
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
