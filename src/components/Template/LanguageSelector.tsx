'use client';

import React, { useEffect, useRef, useState } from 'react';

import { useLanguage } from '@/context/LanguageContext';
import type { Language } from '@/i18n/types';

export interface LanguageOption {
  code: Language;
  label: string;
  short: string;
  nativeName: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  {
    code: 'uz',
    label: "O'zbek",
    short: 'UZ',
    nativeName: "O'zbekcha",
    flag: '/flags/uz.svg',
  },
  {
    code: 'en',
    label: 'English',
    short: 'EN',
    nativeName: 'English',
    flag: '/flags/en.svg',
  },
  {
    code: 'ru',
    label: 'Русский',
    short: 'RU',
    nativeName: 'Русский',
    flag: '/flags/ru.svg',
  },
];

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLang =
    LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="premium-lang-wrapper" ref={containerRef}>
      <button
        type="button"
        className={`premium-lang-trigger${isOpen ? ' is-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Language selector: current is ${currentLang.nativeName}`}
      >
        <div className="trigger-flag-ring">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentLang.flag}
            alt=""
            className="lang-trigger-flag"
            draggable={false}
          />
        </div>
        <span className="lang-trigger-name desktop-only">{currentLang.nativeName}</span>
        <span className="lang-trigger-name mobile-only">{currentLang.short}</span>
        <svg
          className="lang-trigger-chevron"
          width="14"
          height="14"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 4.5L6 8L9.5 4.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="premium-lang-dropdown"
          role="listbox"
          aria-label="Select a language"
        >
          <div className="dropdown-options">
            {LANGUAGES.map(({ code, short, nativeName, flag }) => {
              const isSelected = language === code;
              return (
                <button
                  key={code}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  className={`lang-option-row${isSelected ? ' is-selected' : ''}`}
                  onClick={() => handleSelect(code)}
                >
                  <div className="option-flag-wrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={flag}
                      alt=""
                      className="option-flag-img"
                      draggable={false}
                    />
                  </div>

                  <span className="option-native-name">{nativeName}</span>

                  {isSelected && (
                    <svg
                      className="option-check-icon"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
