import React from 'react';

import BaseTestComponent from '../shared/BaseTestComponent';

import {GAMES_MATH} from '../../constants/constants';

const data = [
  {
    id: '64',
    name: 'Логический квадрат',
    link: 'https://learningapps.org/watch?v=pm53bfn9t18',
  },
  {
    id: '21',
    name: 'Разгадай ребусы',
    link: 'https://learningapps.org/watch?v=pd8g2vgo518',
  },
  {
    id: '22',
    name: 'Разгадай ребусы - 2',
    link: 'https://learningapps.org/watch?v=pdo12n22n18',
  },
  {
    id: '32',
    name: 'Ребусы - раскраски',
    isHref: true,
    link: 'http://rebus-raskraska.blogspot.com.by/p/blog-page_2.html',
  }
];

class PuzzlesM extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Ребусы'} data={data} link={GAMES_MATH}/>
    );
  }
}

export default PuzzlesM;
