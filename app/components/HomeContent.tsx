'use client';

import Link from 'next/link';
import React from 'react';

import { useLanguage } from '@/context/LanguageContext';

export default function HomeContent() {
  const { t } = useLanguage();

  return (
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link href="/about">{t.home.greeting}</Link>
          </h2>
          <p>{t.home.subtitle}</p>
        </div>
      </header>
      <p>
        {t.home.intro}{' '}
        <Link href="/about">{t.home.aboutLink}</Link>,{' '}
        <Link href="/resume">{t.home.resumeLink}</Link>,{' '}
        <Link href="/stats">{t.home.statsLink}</Link>,{' '}
        <Link href="/contact">{t.home.contactLink}</Link>.
      </p>
    </article>
  );
}
