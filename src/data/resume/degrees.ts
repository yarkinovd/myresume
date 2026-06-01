export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: '1-Specialized State Comprehensive School',
    degree: 'Mathematics and Physics',
    link: 'https://schools.emaktab.uz/v2/school?school=1000006479373&view=profile',
    year: 2024,
  },
  {
    school: 'PDP University',
    degree: 'Software engineering: Flutter',
    link: 'https://university.pdp.uz/uz',
    year: 2024,
  },
];

export default degrees;
