import React from 'react';

import BaseTestComponent from '../BaseTestComponent';

const data = [
  {
    id: '1',
    name: 'Гласные и согласные буквы',
    link: 'https://learningapps.org/watch?v=pe8grije318',
  },
  {
    id: '2',
    name: 'Гласные и согласные звуки в словах',
    link: 'https://learningapps.org/watch?v=p519gq7xc18',
  },
  {
    id: '3',
    name: 'Твердые и мягкие звуки',
    link: 'https://learningapps.org/watch?v=p9pbyzpz318',
  },
  {
    id: '4',
    name: 'Звуки а-у',
    link: 'https://learningapps.org/watch?v=p5mcomf5v18',
  },
  {
    id: '5',
    name: 'Звуки л-л’',
    link: 'https://learningapps.org/watch?v=ph5beupx218',
  },
  {
    id: '6',
    name: 'Считаем слоги-1',
    link: 'https://learningapps.org/watch?v=po6k3ak3k18',
  },
  {
    id: '7',
    name: 'Считаем слоги – 2',
    link: 'https://learningapps.org/watch?v=pv3rckwkc18',
  },
];

class SoundsAndLetters extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Звуки и буквы'} data={data} />
    );
  }
}

export default SoundsAndLetters;
