import React from 'react';

import BaseTestComponent from '../../shared/BaseTestComponent';

import {GAMES_WITH_LETTERS_AND_SOUNDS} from '../../../constants/constants';

const data = [
  {
    id: '35',
    name: 'Викторина «Золушка»',
    link: 'https://learningapps.org/watch?v=p54wu01ij18',
  },
  {
    id: '38',
    name: 'В  мире книг ',
    link: 'https://learningapps.org/watch?v=ps5vkv0tj18',
  },
  {
    id: '40',
    name: 'Герои мультфильмов',
    link: 'https://learningapps.org/watch?v=p0s12s42a18',
  },
  {
    id: '31',
    name: 'Кто так говорит?',
    link: 'https://learningapps.org/watch?v=peaw0ee5a18',
  },
  {
    id: '33',
    name: 'Любимые герои',
    link: 'https://learningapps.org/watch?v=pijkiutsk18',
  },
  {
    id: '37',
    name: 'Найди маму',
    link: 'https://learningapps.org/watch?v=p1y80cara18',
  },
  {
    id: '36',
    name: 'Потерянные вещи',
    link: 'https://learningapps.org/watch?v=p4ydq5sgj18',
  },
  {
    id: '34',
    name: 'Сказочный беспорядок',
    link: 'https://learningapps.org/watch?v=pm0s2dy0k18',
  },
  {
    id: '32',
    name: 'Сказочные герои',
    link: 'https://learningapps.org/watch?v=p1ox0xfzc18',
  },
  {
    id: '30',
    name: 'Эдуард Успенский и его герои',
    link: 'https://learningapps.org/watch?v=pdbh263aa18',
  }
];

class FavoriteHeroes extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Любимые герои'} data={data} link={GAMES_WITH_LETTERS_AND_SOUNDS}/>
    );
  }
}

export default FavoriteHeroes;
