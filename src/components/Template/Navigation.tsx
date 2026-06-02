'use client';

import Link from 'next/link';
import React from 'react';

import { useLanguage } from '@/context/LanguageContext';
import type { Language } from '@/i18n/types';

import Hamburger from './Hamburger';

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '/flags/en.svg' },
  { code: 'uz', label: "O'zbek", flag: '/flags/uz.svg' },
  { code: 'ru', label: 'Русский', flag: '/flags/ru.svg' },
];

const Navigation: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();

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
            <li key={l.label}>
              <Link href={l.path}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-controls">
        <div className="lang-switcher" role="group" aria-label="Language">
          {LANGUAGES.map(({ code, label, flag }) => (
            <button
              key={code}
              type="button"
              className={`lang-seg-btn${language === code ? ' active' : ''}`}
              onClick={() => setLanguage(code)}
              title={label}
              aria-pressed={language === code}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={flag} alt="" className="seg-flag" draggable={false} />
              <span className="seg-label">{code.toUpperCase()}</span>
            </button>
          ))}
        </div>
      </div>

      <Hamburger />
    </header>
  );
};

export default Navigation;
