import React from 'react';

import BaseTestComponent from '../../shared/BaseTestComponent';

import {GAMES_WITH_LETTERS_AND_SOUNDS} from '../../../constants/constants';

const data = [
  {
    id: '57',
    name: 'Ребусы',
    link: 'https://learningapps.org/watch?v=p6nc7erva18',
  },
  {
    id: '42',
    name: 'Разгадай ребусы',
    link: 'https://learningapps.org/watch?v=pw487mv8a18',
  },
  {
    id: '43',
    name: 'Разгадай ребусы - 2',
    link: 'https://learningapps.org/watch?v=pi1k9wxzt18',
  },
  {
    id: '44',
    name: 'Разгадай ребусы - 3',
    link: 'https://learningapps.org/watch?v=p3m4e4xo518',
  },
  {
    id: '39',
    name: 'Ква слова',
    link: 'https://learningapps.org/watch?v=p50tsbkok18',
  },
  {
    id: '58',
    name: 'Найди слова',
    link: 'https://learningapps.org/watch?v=ptx44hsun18',
  },
  {
    id: '59',
    name: 'Цепочка слов',
    link: 'https://learningapps.org/watch?v=p9r9ph55518',
  }
];

class PuzzlesSAL extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Ребусы'} data={data} link={GAMES_WITH_LETTERS_AND_SOUNDS}/>
    );
  }
}

export default PuzzlesSAL;
