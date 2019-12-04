import React from 'react';

import BaseTestComponent from '../../shared/BaseTestComponent';

import {GAMES_BEL} from '../../../constants/constants';

const data = [
  {
    id: '1',
    name: 'Знайдзі словы',
    link: 'https://learningapps.org/watch?v=pzw3a4h6a18',
  }
];

class PuzzlesBel extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Рэбусы'} data={data} link={GAMES_BEL}/>
    );
  }
}

export default PuzzlesBel;
