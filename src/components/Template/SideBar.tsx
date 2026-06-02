'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { useLanguage } from '@/context/LanguageContext';
import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image
            src="/images/me.jpg"
            alt="Doniyorbek Yarkinov"
            width={200}
            height={200}
            priority
          />
        </Link>
        <header>
          <h2>Doniyorbek Yarkinov</h2>
        </header>
      </section>

      <section className="blurb">
        <h2>{t.sidebar.aboutHeading}</h2>
        <p>{t.sidebar.blurb}</p>
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                {t.sidebar.learnMore}
              </Link>
            ) : (
              <Link href="/about" className="button">
                {t.sidebar.aboutMe}
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Doniyorbek Yarkinov <Link href="/">yarkinovd.uz</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
