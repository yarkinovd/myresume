import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

import PageWrapper from './components/PageWrapper';

export const metadata: Metadata = {
  description:
    'Frontend developer and mentor',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link href="/about">Hi, I&apos;m Doniyorbek</Link>
            </h2>
            <p>
              Frontend developer, mentor, and student at PDP University.
            </p>
          </div>
        </header>
        <p>
          Welcome to my personal site. Feel free to read more{' '}
          <Link href="/about">about me</Link>, check out my{' '}
          <Link href="/resume">resume</Link>, view{' '}
          <Link href="/stats">site statistics</Link>, or{' '}
          <Link href="/contact">get in touch</Link>.
        </p>
      </article>
    </PageWrapper>
  );
}
