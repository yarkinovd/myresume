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
          Hi, I'm a frontend developer and mentor. I specialize in building with React, TypeScript, and Next.js, and have served as the lead Frontend mentor at an IT education center, where I taught over 200 students. I also have experience as an SMM specialist and mobilographer, creating content and managing digital presence for multiple businesses.
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
