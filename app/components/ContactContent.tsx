'use client';

import Link from 'next/link';
import React from 'react';

import ContactIcons from '@/components/Contact/ContactIcons';
import EmailLink from '@/components/Contact/EmailLink';
import { useLanguage } from '@/context/LanguageContext';

import PageWrapper from './PageWrapper';

export default function ContactContent() {
  const { t } = useLanguage();

  return (
    <PageWrapper>
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2>
              <Link href="/contact">{t.contact.title}</Link>
            </h2>
          </div>
        </header>
        <div className="email-at">
          <p>{t.contact.description}</p>
          <EmailLink />
        </div>
        <ContactIcons />
      </article>
    </PageWrapper>
  );
}
