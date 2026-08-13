export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
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
];

export default work;
