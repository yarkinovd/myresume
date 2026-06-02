import dayjs from 'dayjs';

import { StatData } from '../../components/Stats/types';

const data: StatData[] = [
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    link: 'https://github.com/yarkinovd/myresume/stargazers',
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    link: 'https://github.com/yarkinovd/myresume/watchers',
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/yarkinovd/myresume/commits',
    format: (x: unknown) => dayjs(x as string).format('MMMM DD, YYYY'),
  },
];

export default data;
