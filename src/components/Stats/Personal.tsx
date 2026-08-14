'use client';

import React from 'react';

import { useLanguage } from '@/context/LanguageContext';
import { Age } from '../../data/stats/personal';
import Table from './Table';
import { StatData } from './types';

const PersonalStats: React.FC = () => {
  const { t } = useLanguage();

  const data: StatData[] = [
    {
      key: 'age',
      label: t.stats.ageLabel,
      value: <Age />,
    },
    {
      key: 'location',
      label: t.stats.locationLabel,
      value: t.stats.cityValue,
    },
  ];

  return (
    <>
      <h3>{t.stats.personalHeading}</h3>
      <Table data={data} />
    </>
  );
};

export default PersonalStats;
