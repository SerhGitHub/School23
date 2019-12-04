import React from 'react';

import BaseTestComponent from '../../shared/BaseTestComponent';

import {GAMES_WITH_LETTERS_AND_SOUNDS} from '../../../constants/constants';

const data = [
  {
    id: '24',
    name: 'Из какого слова слог',
    link: 'https://learningapps.org/watch?v=pqyguo9za18',
  },
  {
    id: '53',
    name: 'Слоги',
    link: 'https://learningapps.org/watch?v=pgm3723wn18',
  },
  {
    id: '9',
    name: 'Считаем слоги-1',
    link: 'https://learningapps.org/watch?v=po6k3ak3k18',
  },
  {
    id: '10',
    name: 'Считаем слоги – 2',
    link: 'https://learningapps.org/watch?v=pv3rckwkc18',
  },
  {
    id: '54',
    name: 'Читаем слоги',
    link: 'https://learningapps.org/watch?v=pwwcpv50318',
  }
];

class LearnSyllables extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Учим слоги'} data={data} link={GAMES_WITH_LETTERS_AND_SOUNDS}/>
    );
  }
}

export default LearnSyllables;
