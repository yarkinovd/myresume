'use client';

import React from 'react';

import { useLanguage } from '@/context/LanguageContext';
import type { Degree as DegreeType } from '@/data/resume/degrees';

import Degree from './Education/Degree';

interface EducationProps {
  data: DegreeType[];
}

const Education: React.FC<EducationProps> = ({ data }) => {
  const { t } = useLanguage();

  return (
    <div className="education">
      <div className="link-to" id="education" />
      <div className="title">
        <h3>{t.resume.education}</h3>
      </div>
      {data.map((degree) => (
        <Degree data={degree} key={degree.school} />
      ))}
    </div>
  );
};

export default Education;
