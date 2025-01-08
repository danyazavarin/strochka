import { routerConfig } from './../../lib/routerConfig';

const {
  appRoutes: { getBaseUrl, getThreadsUrl, getAboutUrl, getMostPopularUrl, getRecommendsUrl },
} = routerConfig;

export const logoLink = getBaseUrl();

export const headerLinks: Record<'name' | 'link', string>[] = [
  {
    name: 'Recommends',
    link: getRecommendsUrl(),
  },
  {
    name: 'Most popular',
    link: getMostPopularUrl(),
  },
  {
    name: 'Threads',
    link: getThreadsUrl(),
  },
  {
    name: 'About',
    link: getAboutUrl(),
  },
];
