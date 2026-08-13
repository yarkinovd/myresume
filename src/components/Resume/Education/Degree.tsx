import Markdown from 'markdown-to-jsx';
import React from 'react';

import type { Degree as DegreeType } from '@/data/resume/degrees';

interface DegreeProps {
  data: DegreeType;
}

const Degree: React.FC<DegreeProps> = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.degree}</h4>
      <p className="school">
        <a href={data.link} target="_blank" rel="noopener noreferrer">
          {data.school}
        </a>
        , {data.year}
      </p>
    </header>
    {data.body && (
      <Markdown
        options={{
          overrides: {
            p: {
              props: {
                className: 'summary',
              },
            },
          },
        }}
      >
        {data.body}
      </Markdown>
    )}
    {data.points && (
      <ul className="points">
        {data.points.map((point) => (
          <li key={point}>
            <Markdown>{point}</Markdown>
          </li>
        ))}
      </ul>
    )}
  </article>
);

export default Degree;
