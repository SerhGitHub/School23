import React from 'react';

import BaseTestComponent from '../shared/BaseTestComponent';

import {GAMES_BEAUTIFUL} from '../../constants/constants';

const data = [
  {
    id: '10',
    name: 'Разгадай ребусы',
    link: 'https://learningapps.org/watch?v=p846qantk18',
  },
  {
    id: '11',
    name: 'Разгадай ребусы - 2',
    link: 'https://learningapps.org/watch?v=pqr8nmmrt18',
  }
];

class PuzzlesB extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Ребусы'} data={data} link={GAMES_BEAUTIFUL}/>
    );
  }
}

export default PuzzlesB;
