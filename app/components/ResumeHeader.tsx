'use client';

import React from 'react';

import { useLanguage } from '@/context/LanguageContext';

export default function ResumeHeader() {
  const { t } = useLanguage();

  const sections = [
    { name: t.resume.education, id: 'education' },
    { name: t.resume.experience, id: 'experience' },
    { name: t.resume.skills, id: 'skills' },
  ];

  return (
    <div className="title">
      <h2>{t.resume.title}</h2>
      <div className="link-container">
        {sections.map((section) => (
          <h4 key={section.id}>
            <a href={`#${section.id}`}>{section.name}</a>
          </h4>
        ))}
      </div>
    </div>
  );
}
