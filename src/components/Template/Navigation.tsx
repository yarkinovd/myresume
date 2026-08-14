'use client';

import Link from 'next/link';
import React from 'react';

import { useLanguage } from '@/context/LanguageContext';
import type { Language } from '@/i18n/types';

import Hamburger from './Hamburger';
import LanguageSelector, { LANGUAGES } from './LanguageSelector';

export { LANGUAGES };

const Navigation: React.FC = () => {
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.about, path: '/about' },
    { label: t.nav.resume, path: '/resume' },
    { label: t.nav.stats, path: '/stats' },
    { label: t.nav.contact, path: '/contact' },
  ];

  return (
    <header id="header">
      <h1 className="index-link">
        <Link href="/">{t.nav.home}</Link>
      </h1>
      <nav className="links">
        <ul>
          {navLinks.map((l) => (
            <li key={l.path}>
              <Link href={l.path}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-controls">
        <LanguageSelector />
      </div>

      <Hamburger />
    </header>
  );
};

export default Navigation;
