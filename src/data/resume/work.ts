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
    name: 'Anthology — Turkic World Female Creators Platform',
    position: 'Flutter Developer (Personal Project)',
    url: 'https://play.google.com/store/apps/details?id=uz.doniyorbek.ilova.anthology',
    startDate: '2025-01-01',
    summary: `Designed and built a Flutter mobile application that serves as a digital platform dedicated to female creators from Turkic-speaking peoples. The app provides a structured space for exploring poetry, literature, research, and cultural heritage across the Turkic world. Published on Google Play Store as my first Flutter app.`,
    highlights: [
      'Built a full-featured cross-platform mobile app with Flutter and Dart, published to Google Play Store.',
      'Implemented multi-section architecture: News, Research, Library, Authors, Audio, Video, and Education.',
      'Integrated Firebase for data storage and real-time content management.',
      'Designed and built a clean, accessible UI from scratch with a focus on readability and cultural aesthetics.',
      'Handled end-to-end development: architecture, UI design, state management, and Play Store deployment.',
    ],
  },
  {
    name: 'Meta IT School',
    position: 'Frontend mentor',
    url: 'https://instagram.com/metaitschool',
    startDate: '2023-05-01',
    endDate: '2024-05-01',
    summary: `As the lead Frontend mentor at Meta IT School, I taught and guided over 200 students through modern web development. I designed structured learning programs, created real-world projects, and helped students build strong foundations in React.js`,
    highlights: [
      'Led more than 200 students across multiple cohorts, providing lectures, code reviews, and 1-on-1 mentorship.',
      'Developed curriculum materials covering HTML/CSS, JavaScript, React, and project architecture.',
      'Built real-world projects with students to reinforce best practices and production-level workflows.',
      'Introduced modern tooling, Git workflows, and deployment processes to prepare students for professional roles.',
      'Improved student success rates through personalized guidance and hands-on coding sessions.',
    ],
  },
  {
    name: 'Meta IT School',
    position: 'Frontend developer',
    url: 'https://instagram.com/metaitschool',
    startDate: '2023-05-01',
    endDate: '2024-05-01',
    summary: `Worked as a frontend developer responsible for building internal platforms, student dashboards, and educational tools at Meta IT School. Focused on React, and modern UI/UX workflows to support the school’s learning ecosystem.`,
    highlights: [
      'Developed responsive dashboards and internal tools using React, and modern frontend patterns.',
      'Collaborated with mentors and management to improve digital learning experiences.',
      'Optimized UI performance and implemented reusable components for scalability.',
      'Integrated APIs and built interfaces that supported student progress tracking and course management.',
      'Worked closely with design teams to deliver polished, user-friendly experiences.',
    ],
  },
  {
    name: 'Meta IT School',
    position: 'SMM manager & mobilographer',
    url: 'https://instagram.com/metaitschool',
    startDate: '2023-05-01',
    endDate: '2024-05-01',
    summary: `Managed social media presence and produced high-quality photo/video content for Meta IT School. Helped grow brand visibility through creative storytelling, targeted campaigns, and engaging visual media.`,
    highlights: [
      'Created promotional videos, photos, and reels to showcase student projects and school events.',
      'Managed social media strategy across Instagram and other platforms, increasing engagement and reach.',
      'Collaborated with teachers and staff to produce educational and marketing content.',
      'Designed visual concepts that strengthened brand identity and improved audience interaction.',
      'Handled end-to-end production: shooting, editing, post-processing, and publishing.',
    ],
  },
];

export default work;
