'use client';

import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import React from 'react';

import { useLanguage } from '@/context/LanguageContext';

import PageWrapper from '../components/PageWrapper';

const count = (str: string) =>
  str.split(/\s+/).filter((word) => word !== '').length;

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <PageWrapper>
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>
              <Link href="/about">{t.about.title}</Link>
            </h2>
            <p>({t.about.wordCount(count(t.about.content))})</p>
          </div>
        </header>
        <Markdown>{t.about.content}</Markdown>
      </article>
    </PageWrapper>
  );
}
