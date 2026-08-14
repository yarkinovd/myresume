'use client';

import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { useLanguage } from '@/context/LanguageContext';
import Table from './Table';
import { StatData } from './types';

interface GitHubRepoData {
  [key: string]: string | number | boolean | null;
}

const Stats: React.FC = () => {
  const { t } = useLanguage();
  const [gitHubData, setGitHubData] = useState<GitHubRepoData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://api.github.com/repos/yarkinovd/myresume',
        );
        const resData: GitHubRepoData = await res.json();
        setGitHubData(resData);
      } catch (error) {
        console.error('Failed to fetch GitHub data:', error);
      }
    };

    fetchData();
  }, []);

  const data: StatData[] = [
    {
      label: t.stats.starsLabel,
      key: 'stargazers_count',
      value: (gitHubData?.stargazers_count as number) ?? 0,
      link: 'https://github.com/yarkinovd/myresume/stargazers',
    },
    {
      label: t.stats.watchersLabel,
      key: 'subscribers_count',
      value: (gitHubData?.subscribers_count as number) ?? 0,
      link: 'https://github.com/yarkinovd/myresume/watchers',
    },
    {
      label: t.stats.lastUpdatedLabel,
      key: 'pushed_at',
      link: 'https://github.com/yarkinovd/myresume/commits',
      value: gitHubData?.pushed_at
        ? dayjs(gitHubData.pushed_at as string).format('MMMM DD, YYYY')
        : dayjs().format('MMMM DD, YYYY'),
    },
  ];

  return (
    <div>
      <h3>{t.stats.siteHeading}</h3>
      <Table data={data} />
    </div>
  );
};

export default Stats;
