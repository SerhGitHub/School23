import React from 'react';

import {GAMES_MATH} from '../../constants/constants';

import BaseTestComponent from '../shared/BaseTestComponent';

const data = [
  {
    id: '5',
    name: 'Больше, меньше и равно',
    link: 'https://learningapps.org/watch?v=pzyqo2yc518',
  },
  {
    id: '55',
    name: 'Больше, меньше и равно - 2',
    link: 'https://learningapps.org/watch?v=pocr2o0mc18',
  },
  {
    id: '56',
    name: 'Сравнение количества',
    link: 'https://learningapps.org/watch?v=ppmtuo93518',
  },
  {
    id: '57',
    name: 'Сравнение количества предметов',
    link: 'https://learningapps.org/watch?v=pq1b3j6g318',
  },
  {
    id: '58',
    name: 'Сравнение предметов',
    link: 'https://learningapps.org/watch?v=p6k76onfa18',
  },
  {
    id: '59',
    name: 'Сравнение чисел',
    link: 'https://learningapps.org/watch?v=pska5n9ut18',
  },
  {
    id: '60',
    name: 'Сравнение чисел - 2',
    link: 'https://learningapps.org/watch?v=pzec8uys218',
  },
  {
    id: '31',
    name: 'Сравни числа',
    link: 'https://learningapps.org/watch?v=ppu04p2jt18',
  }
];

class LearningToCompare extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Учимся сравнивать'} data={data} link={GAMES_MATH}/>
    );
  }
}

export default LearningToCompare;
