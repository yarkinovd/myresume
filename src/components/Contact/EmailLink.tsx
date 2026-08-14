'use client';

import React, { useEffect, useReducer, useRef } from 'react';

import { useLanguage } from '@/context/LanguageContext';

const validateText = (text: string): boolean => {
  const re = /^@?[a-zA-Z0-9_]+$/;
  return re.test(text) || text.length === 0;
};

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<() => void>(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current?.();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {};
  }, [delay]);
};

type AnimationState = {
  idx: number;
  message: string;
  char: number;
  isActive: boolean;
};

type AnimationAction =
  | { type: 'TICK'; loopMessage: boolean; hold: number; messages: string[] }
  | { type: 'PAUSE' }
  | { type: 'RESUME'; maxIdx: number }
  | { type: 'RESET'; messages: string[] };

const animationReducer = (
  state: AnimationState,
  action: AnimationAction,
): AnimationState => {
  switch (action.type) {
    case 'TICK': {
      const messages = action.messages;
      if (!messages || messages.length === 0) return state;

      let newIdx = state.idx;
      let newChar = state.char;

      if (newIdx >= messages.length) {
        newIdx = 0;
        newChar = 0;
      }

      if (state.char - action.hold >= messages[newIdx].length) {
        newIdx += 1;
        newChar = 0;
      }

      if (newIdx === messages.length) {
        if (action.loopMessage) {
          return {
            idx: 0,
            message: '',
            char: 0,
            isActive: true,
          };
        }
        return {
          ...state,
          isActive: false,
        };
      }

      return {
        idx: newIdx,
        message: messages[newIdx].slice(0, newChar),
        char: newChar + 1,
        isActive: true,
      };
    }
    case 'PAUSE':
      return { ...state, isActive: false };
    case 'RESUME':
      return {
        ...state,
        isActive: state.idx < action.maxIdx,
      };
    case 'RESET':
      return {
        idx: 0,
        message: '',
        char: 0,
        isActive: true,
      };
    default:
      return state;
  }
};

interface EmailLinkProps {
  loopMessage?: boolean;
}

const EmailLink: React.FC<EmailLinkProps> = ({ loopMessage = false }) => {
  const { t, language } = useLanguage();
  const messages = t.contact.messages;
  const hold = 50;
  const delay = 50;

  const [state, dispatch] = useReducer(animationReducer, {
    idx: 0,
    message: messages[0] || '',
    char: 0,
    isActive: true,
  });

  useEffect(() => {
    dispatch({ type: 'RESET', messages });
  }, [language]);

  useInterval(
    () => {
      dispatch({ type: 'TICK', loopMessage, hold, messages });
    },
    state.isActive ? delay : null,
  );

  return (
    <div
      className="inline-container"
      style={validateText(state.message) ? {} : { color: 'red' }}
      onMouseEnter={() => dispatch({ type: 'PAUSE' })}
      onMouseLeave={() => dispatch({ type: 'RESUME', maxIdx: messages.length })}
    >
      <a
        href={
          validateText(state.message)
            ? 'https://t.me/yarkinovd'
            : ''
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{state.message}</span>
      </a>
    </div>
  );
};

export default EmailLink;
