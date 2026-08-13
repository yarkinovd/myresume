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
  const degreesToRender = t.resume.degrees || data;

  return (
    <div className="education">
      <div className="link-to" id="education" />
      <div className="title">
        <h3>{t.resume.education}</h3>
      </div>
      {degreesToRender.map((degree) => (
        <Degree data={degree} key={degree.school} />
      ))}
    </div>
  );
};

export default Education;
