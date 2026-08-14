export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  // Languages

  {
    title: 'Project Management',
    competency: 2,
    category: ['Skills'],
  },
  {
    title: 'Sys Admin',
    competency: 2,
    category: ['Skills'],
  },
  {
    title: 'AWS',
    competency: 2,
    category: ['Server'],
  },
  {
    title: 'Render',
    competency: 2,
    category: ['Server'],
  },
  {
    title: 'Docker',
    competency: 2,
    category: ['CI/CD'],
  },
  {
    title: 'GitHub actions',
    competency: 2,
    category: ['CI/CD'],
  },
  
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Dart',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'MongoDB',
    competency: 2,
    category: ['Databases'],
  },
  // Web Development
  {
    title: 'Node.js',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'React.js',
    competency: 4,
    category: ['Web Development', 'Framework & Library'],
  },
  {
    title: 'Flutter',
    competency: 4,
    category: ['Framework & Library', 'Mobile'],
  },
  {
    title: 'Firebase',
    competency: 3,
    category: ['Databases', 'Mobile'],
  },
  {
    title: 'Next.js',
    competency: 3,
    category: ['Web Development', 'Framework & Library'],
  },
  // Databases
  {
    title: 'PostgreSQL',
    competency: 2,
    category: ['Databases'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors: string[] = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories: Category[] = Array.from(
  new Set(skills.flatMap(({ category }) => category)),
)
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
