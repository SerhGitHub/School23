import React from 'react';

import BaseTestComponent from '../shared/BaseTestComponent';

import {GAMES_MATH} from '../../constants/constants';

const data = [
  {
    id: '14',
    name: 'Геометрические фигуры',
    link: 'https://learningapps.org/watch?v=pjf3mxk2518',
  },
  {
    id: '16',
    name: 'Загадки о геометрических фигурах',
    link: 'https://learningapps.org/watch?v=pun8tjihc18',
  },
  {
    id: '61',
    name: 'Заплатки',
    link: 'https://learningapps.org/watch?v=pwk67wjf318',
  },
  {
    id: '19',
    name: 'Найди пары. Формы',
    link: 'https://learningapps.org/watch?v=pem6prhda18',
  },
  {
    id: '20',
    name: 'Найди пары. Цвет',
    link: 'https://learningapps.org/watch?v=p54y6x9ua18',
  },
  {
    id: '15',
    name: 'На что похоже',
    link: 'https://learningapps.org/watch?v=pti1djr5t18',
  },
  {
    id: '62',
    name: 'Счет фигур',
    link: 'https://learningapps.org/watch?v=p590w89st18',
  }
];

class TheWorldOfGeometry extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Мир геометрии'} data={data} link={GAMES_MATH}/>
    );
  }
}

export default TheWorldOfGeometry;
