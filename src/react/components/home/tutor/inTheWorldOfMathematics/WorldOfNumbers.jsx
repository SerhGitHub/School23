import React from 'react';

import BaseTestComponent from '../BaseTestComponent';

const data = [
  {
    id: '1',
    name: 'Числовой ряд',
    link: 'https://learningapps.org/watch?v=pf470uayc18',
  },
  {
    id: '2',
    name: 'Число 10',
    link: 'https://learningapps.org/watch?v=pfhhfyyon18',
  },
  {
    id: '3',
    name: 'Четные и нечетные числа',
    link: 'https://learningapps.org/watch?v=pce9wu2mc17',
  },
  {
    id: '4',
    name: 'Больше, меньше и равно',
    link: 'https://learningapps.org/watch?v=pzyqo2yc518',
  },
  {
    id: '5',
    name: 'Счет предметов',
    link: 'https://learningapps.org/watch?v=pfgs3v3x518',
  },
  {
    id: '6',
    name: 'Расположи по порядку',
    link: 'https://learningapps.org/watch?v=ps9fud47318',
  },
];

class WorldOfNumbers extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Мир чисел'} data={data} />
    );
  }
}

export default WorldOfNumbers;
