export interface Route {
  label: string;
  path: string;
  index?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: "Doniyorbek Yarkinov",
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Stats',
    path: '/stats',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;
