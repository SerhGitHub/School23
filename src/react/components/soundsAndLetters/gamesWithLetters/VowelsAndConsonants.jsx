import React from 'react';

import BaseTestComponent from '../../shared/BaseTestComponent';

import {GAMES_WITH_LETTERS_AND_SOUNDS} from '../../../constants/constants';

const data = [
  {
    id: '48',
    name: 'Гласные звуки',
    link: 'https://learningapps.org/watch?v=pmfxo975k18',
  },
  {
    id: '50',
    name: 'Гласные звуки - 2',
    link: 'https://learningapps.org/watch?v=paucst2dj18',
  },
  {
    id: '2',
    name: 'Гласные и согласные звуки в словах',
    link: 'https://learningapps.org/watch?v=p519gq7xc18',
  },
  {
    id: '1',
    name: 'Гласные и согласные буквы',
    link: 'https://learningapps.org/watch?v=pe8grije318',
  },
  {
    id: '8',
    name: 'Где спрятался звук',
    link: 'https://learningapps.org/watch?v=pms3psizk18',
  },
  {
    id: '4',
    name: 'Звуки [а] - [у]',
    link: 'https://learningapps.org/watch?v=p5mcomf5v18',
  },
  {
    id: '7',
    name: `Звуки [б] - [п], [б'] - [п']`,
    link: 'https://learningapps.org/watch?v=pknx28eg218',
  },
  {
    id: '49',
    name: `ЗВУКИ [В] - [Ф], [В'] - [Ф']`,
    link: 'https://learningapps.org/watch?v=p6v96pp7t18',
  },
  {
    id: '6',
    name: `Звуки [г] - [к], [г'] - [к']`,
    link: 'https://learningapps.org/watch?v=p76s6hda318',
  },
  {
    id: '45',
    name: `ЗВУКИ [Д] - [Т], [Д'] - [Т']`,
    link: 'https://learningapps.org/watch?v=p0c5m12va18',
  },
  {
    id: '46',
    name: 'ЗВУКИ [Ж] - [Ш]',
    link: 'https://learningapps.org/watch?v=pg2wy86yn18',
  },
  {
    id: '47',
    name: `ЗВУКИ [З] - [С], [З'] - [С']`,
    link: 'https://learningapps.org/watch?v=ph3wkgyvt18',
  },
  {
    id: '5',
    name: 'Звуки [л] - [л’]',
    link: 'https://learningapps.org/watch?v=ph5beupx218',
  },
  {
    id: '3',
    name: 'Твердые и мягкие звуки',
    link: 'https://learningapps.org/watch?v=p9pbyzpz318',
  },
  {
    id: '51',
    name: 'Что за птица?',
    link: 'https://learningapps.org/watch?v=pugfudqdt18',
  }
];

class VowelsAndConsonants extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Гласные и согласные'} data={data} link={GAMES_WITH_LETTERS_AND_SOUNDS}/>
    );
  }
}

export default VowelsAndConsonants;
