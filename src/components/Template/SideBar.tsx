'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

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
        <h2>About</h2>
        <p>
          Hi, I&apos;m a developer transitioning into Flutter and mobile development. I previously worked as a Frontend developer and mentor (React, TypeScript, Next.js), taught over 200 students, and published my first Flutter app on Google Play. Currently studying Software Engineering at PDP University.
        </p>
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
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
