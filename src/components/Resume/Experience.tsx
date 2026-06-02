'use client';

import React from 'react';

import { useLanguage } from '@/context/LanguageContext';
import type { Position } from '@/data/resume/work';

import Job from './Experience/Job';

interface ExperienceProps {
  data: Position[];
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  const { t } = useLanguage();

  return (
    <div className="experience">
      <div className="link-to" id="experience" />
      <div className="title">
        <h3>{t.resume.experience}</h3>
      </div>
      {data.map((job) => (
        <Job data={job} key={`${job.name}-${job.position}`} />
      ))}
    </div>
  );
};

export default Experience;
