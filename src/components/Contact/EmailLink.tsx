'use client';

import React, { useEffect, useReducer, useRef } from 'react';

const validateText = (text: string): boolean => {
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};

const messages = [
  'hi',
  'hello',
  'you can email me at literally anything! Really',
  'well, not anything. But most things',
  'like this',
  'or this',
  'but not this :(  ',
  'you can also email me with specific topics like',
  'just saying hi',
  'please work for us',
  'help',
  'or I really like your website',
  'thanks',
];

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
  | { type: 'TICK'; loopMessage: boolean; hold: number }
  | { type: 'PAUSE' }
  | { type: 'RESUME'; maxIdx: number };

const animationReducer = (
  state: AnimationState,
  action: AnimationAction,
): AnimationState => {
  switch (action.type) {
    case 'TICK': {
      let newIdx = state.idx;
      let newChar = state.char;

      if (state.char - action.hold >= messages[state.idx].length) {
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
    default:
      return state;
  }
};

interface EmailLinkProps {
  loopMessage?: boolean;
}

const EmailLink: React.FC<EmailLinkProps> = ({ loopMessage = false }) => {
  const hold = 50;
  const delay = 50; 

  const [state, dispatch] = useReducer(animationReducer, {
    idx: 0,
    message: messages[0],
    char: 0,
    isActive: true,
  });

  useInterval(
    () => {
      dispatch({ type: 'TICK', loopMessage, hold });
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
            ? `mailto:${state.message}@gmail.com`
            : ''
        }
      >
        <span>{state.message}</span>
      </a>
    </div>
  );
};

export default EmailLink;
