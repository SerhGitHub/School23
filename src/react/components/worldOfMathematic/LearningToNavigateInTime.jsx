import React from 'react';

import {GAMES_MATH} from '../../constants/constants';

import BaseTestComponent from '../shared/BaseTestComponent';

const data = [
  {
    id: '18',
    name: 'Время суток',
    link: 'https://learningapps.org/watch?v=pen5rmxec18',
  },
  {
    id: '17',
    name: 'Дни недели',
    link: 'https://learningapps.org/watch?v=p6s76u9ka18',
  },
  {
    id: '63',
    name: 'Поры года',
    link: 'https://learningapps.org/watch?v=p36wsmktk18',
  }
];

class LearningToNavigateInTime extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Учимся ориентироваться во времени'} data={data} link={GAMES_MATH}/>
    );
  }
}

export default LearningToNavigateInTime;
