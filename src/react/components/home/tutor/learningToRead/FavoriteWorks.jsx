import React from 'react';

import BaseTestComponent from '../BaseTestComponent';

const data = [
  {
    id: '1',
    name: 'Эдуард Успенский и его герои',
    link: 'https://learningapps.org/watch?v=pdbh263aa18',
  },
  {
    id: '2',
    name: 'Кто так говорит?',
    link: 'https://learningapps.org/watch?v=peaw0ee5a18',
  },
  {
    id: '3',
    name: 'Сказочные герои',
    link: 'https://learningapps.org/watch?v=p1ox0xfzc18',
  },
  {
    id: '4',
    name: 'Любимые герои',
    link: 'https://learningapps.org/watch?v=pijkiutsk18',
  },
  {
    id: '5',
    name: 'Сказочный беспорядок',
    link: 'https://learningapps.org/watch?v=pm0s2dy0k18',
  },
  {
    id: '6',
    name: 'Викторина «Золушка»',
    link: 'https://learningapps.org/watch?v=p54wu01ij18',
  },
  {
    id: '7',
    name: 'Потерянные вещи',
    link: 'https://learningapps.org/watch?v=p4ydq5sgj18',
  },
  {
    id: '8',
    name: 'Найди маму',
    link: 'https://learningapps.org/watch?v=p1y80cara18',
  },
];

class FavoriteWorks extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Любимые произведения'} data={data} />
    );
  }
}

export default FavoriteWorks;
