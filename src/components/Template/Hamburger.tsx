'use client';

import Link from 'next/link';
import React, { lazy, Suspense, useState } from 'react';

import { useLanguage } from '@/context/LanguageContext';
import { LANGUAGES } from './LanguageSelector';

const Menu = lazy(() => import('react-burger-menu/lib/menus/slide'));

const Hamburger: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { t, language, setLanguage } = useLanguage();

  const navLinks = [
    { label: t.nav.home, path: '/', index: true },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.resume, path: '/resume' },
    { label: t.nav.stats, path: '/stats' },
    { label: t.nav.contact, path: '/contact' },
  ];

  return (
    <div className="hamburger-container">
      <nav className="main" id="hambuger-nav">
        <ul>
          {open ? (
            <li className="menu close-menu">
              <div
                onClick={() => setOpen(false)}
                className="menu-hover"
                role="button"
                tabIndex={0}
                aria-label="Close menu"
              >
                &#10005;
              </div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div
                onClick={() => setOpen(true)}
                className="menu-hover"
                role="button"
                tabIndex={0}
                aria-label="Open menu"
              >
                &#9776;
              </div>
            </li>
          )}
        </ul>
      </nav>
      <Suspense fallback={<></>}>
        <Menu
          right
          isOpen={open}
          onStateChange={(state: { isOpen: boolean }) => setOpen(state.isOpen)}
        >
          <div className="hamburger-drawer-content">
            <div className="drawer-lang-control" role="group" aria-label="Language Selector">
              {LANGUAGES.map(({ code, short, flag }) => (
                <button
                  key={code}
                  type="button"
                  className={`drawer-lang-segment${language === code ? ' is-active' : ''}`}
                  onClick={() => setLanguage(code)}
                  aria-pressed={language === code}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={flag} alt="" className="drawer-seg-flag" draggable={false} />
                  <span className="drawer-seg-label">{short}</span>
                </button>
              ))}
            </div>

            <ul className="hamburger-ul">
              {navLinks.map((l) => (
                <li key={l.path}>
                  <Link href={l.path} onClick={() => setOpen(false)}>
                    <h3 className={l.index ? 'index-li' : undefined}>
                      {l.label}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Menu>
      </Suspense>
    </div>
  );
};

export default Hamburger;
