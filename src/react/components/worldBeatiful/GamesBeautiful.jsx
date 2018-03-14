import React from 'react';

import BaseTestComponent from '../shared/BaseTestComponent';

const data = [
  {
    id: '1',
    name: 'Какого цвета',
    link: 'https://learningapps.org/watch?v=pn2symj9k18',
  },
  {
    id: '2',
    name: 'Какого цвета?',
    link: 'https://learningapps.org/watch?v=pa1fe9sdn18',
  },
  {
    id: '3',
    name: 'Цветик-семицветик',
    link: 'https://learningapps.org/watch?v=pzixyu2gj18',
  },
  {
    id: '4',
    name: 'Что для чего',
    link: 'https://learningapps.org/watch?v=px5iwsbb218',
  },
  {
    id: '5',
    name: 'Силуэты',
    link: 'https://learningapps.org/watch?v=p16efim9t18',
  },
  {
    id: '6',
    name: 'Кроссворд «Музыкальные инструменты»',
    link: 'https://learningapps.org/watch?v=ppyxapf6318',
  },
  {
    id: '7',
    name: 'Парные картинки «Музыкальные инструменты»',
    link: 'https://learningapps.org/watch?v=pffhork3n18',
  },
  {
    id: '8',
    name: 'Народные инструменты',
    link: 'https://learningapps.org/watch?v=pk3wnisna18',
  },
  {
    id: '9',
    name: 'Угадай мультфильм',
    link: 'https://learningapps.org/watch?v=pkwqpfywj18',
  },
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

class GamesBeautiful extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Игры'} data={data} />
    );
  }
}

export default GamesBeautiful;
