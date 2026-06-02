import type { Metadata } from 'next';
import React from 'react';

import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import Skills from '@/components/Resume/Skills';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';

import ResumeHeader from '../components/ResumeHeader';

export const metadata: Metadata = {
  title: 'Resume',
  description: "Doniyorbek Yarkinov's resume",
};

export default function ResumePage() {
  return (
    <article className="post" id="resume">
      <header>
        <ResumeHeader />
      </header>

      <section id="education" className="education">
        <div className="link-to" />
        <Education data={degrees} />
      </section>

      <section id="experience" className="experience">
        <div className="link-to" />
        <Experience data={work} />
      </section>

      <section id="skills" className="skills">
        <div className="link-to" />
        <Skills skills={skills} categories={categories} />
      </section>
    </article>
  );
}
