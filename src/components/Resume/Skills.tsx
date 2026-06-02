'use client';

import React, { useReducer } from 'react';

import { useLanguage } from '@/context/LanguageContext';
import type { Category, Skill } from '@/data/resume/skills';

import CategoryButton from './Skills/CategoryButton';
import SkillBar from './Skills/SkillBar';

interface SkillsProps {
  skills: Skill[];
  categories: Category[];
}

type ButtonState = Record<string, boolean>;

type ButtonAction = {
  type: 'TOGGLE_CATEGORY';
  label: string;
};

const ALL_KEY = 'All';

const buttonReducer = (state: ButtonState, action: ButtonAction): ButtonState => {
  switch (action.type) {
    case 'TOGGLE_CATEGORY': {
      const newButtons = Object.keys(state).reduce(
        (obj, key) => ({
          ...obj,
          [key]: action.label === key && !state[key],
        }),
        {} as ButtonState,
      );
      newButtons[ALL_KEY] = !Object.keys(state).some((key) => newButtons[key]);
      return newButtons;
    }
    default:
      return state;
  }
};

const Skills: React.FC<SkillsProps> = ({ skills, categories }) => {
  const { t } = useLanguage();

  const initialButtons = Object.fromEntries(
    [[ALL_KEY, false]].concat(categories.map(({ name }) => [name, false])),
  );

  const [buttons, dispatch] = useReducer(buttonReducer, initialButtons);

  const handleChildClick = (label: string) => {
    dispatch({ type: 'TOGGLE_CATEGORY', label });
  };

  const activeCategory = Object.keys(buttons).reduce(
    (cat, key) => (buttons[key] ? key : cat),
    ALL_KEY,
  );

  const getButtons = () =>
    Object.keys(buttons).map((key) => (
      <CategoryButton
        label={key === ALL_KEY ? t.resume.skillsAll : key}
        internalKey={key}
        key={key}
        active={buttons}
        handleClick={handleChildClick}
      />
    ));

  const getRows = () => {
    const comparator = (a: Skill, b: Skill) => {
      let ret = 0;
      if (a.competency > b.competency) ret = -1;
      else if (a.competency < b.competency) ret = 1;
      else if (a.category[0] > b.category[0]) ret = -1;
      else if (a.category[0] < b.category[0]) ret = 1;
      else if (a.title > b.title) ret = 1;
      else if (a.title < b.title) ret = -1;
      return ret;
    };

    return skills
      .sort(comparator)
      .filter((skill) => activeCategory === ALL_KEY || skill.category.includes(activeCategory))
      .map((skill) => <SkillBar categories={categories} data={skill} key={skill.title} />);
  };

  return (
    <div className="skills">
      <div className="link-to" id="skills" />
      <div className="title">
        <h3>{t.resume.skills}</h3>
      </div>
      <div className="skill-button-container">{getButtons()}</div>
      <div className="skill-row-container">{getRows()}</div>
    </div>
  );
};

export default Skills;
