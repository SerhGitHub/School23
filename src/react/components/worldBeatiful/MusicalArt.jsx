import React from 'react';

import BaseTestComponent from '../shared/BaseTestComponent';

import {GAMES_BEAUTIFUL} from '../../constants/constants';

const data = [
  {
    id: '12',
    name: 'Кто в чем танцует',
    link: 'https://learningapps.org/watch?v=pfpwzheq518',
  },
  {
    id: '6',
    name: 'Кроссворд «Музыкальные инструменты»',
    link: 'https://learningapps.org/watch?v=ppyxapf6318',
  },
  {
    id: '13',
    name: 'Мир танцев',
    link: 'https://learningapps.org/watch?v=pnh4c2eij18',
  },
  {
    id: '8',
    name: 'Народные инструменты',
    link: 'https://learningapps.org/watch?v=pk3wnisna18',
  },
  {
    id: '7',
    name: 'Парные картинки «Музыкальные инструменты»',
    link: 'https://learningapps.org/watch?v=pffhork3n18',
  },
  {
    id: '07',
    name: 'Музыкальные инструменты',
    link: 'https://learningapps.org/watch?v=pnsa36fra18',
  },
  {
    id: '9',
    name: 'Угадай мультфильм',
    link: 'https://learningapps.org/watch?v=pgmpuz04t18',
  }
];

class MusicalArt extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Музыкальное искусство'} data={data} link={GAMES_BEAUTIFUL}/>
    );
  }
}

export default MusicalArt;
