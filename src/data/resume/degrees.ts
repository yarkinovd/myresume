export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number | string;
  body?: string;
  points?: string[];
}

const degrees: Degree[] = [
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
      'Year 1 (2024–2025): Fullstack Development (Python, Node.js), Information Technology Systems (ITS), Business Process Modeling (BPM), Big Data & Business Analytics (Excel, MySQL), Artificial Intelligence, Enterprise in IT.',
      'Year 2 (2025–2026): Flutter Mobile Development, Database Design (PostgreSQL), Cloud Networking (SysAdmin/DevOps), Software Development Lifecycle (SDLC), Big Data & Visualization (PowerBI, Tableau), Cyber Security, Innovation & Digital Transformation.',
    ],
  },
];

export default degrees;
