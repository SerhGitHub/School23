import React from 'react';

import BaseTestComponent from '../shared/BaseTestComponent';

import {GAMES_RUS} from '../../constants/constants';

const data = [
  {
    id: '1',
    name: 'Природные явления',
    link: 'https://learningapps.org/watch?v=pikvov1vk18',
  },
  {
    id: '5',
    name: 'Вершки и корешки ',
    link: 'https://learningapps.org/watch?v=pzfqwtz7c18',
  },
  {
    id: '17',
    name: 'Времена года',
    link: 'https://learningapps.org/watch?v=phyh0wb6318',
  },
  {
    id: '4',
    name: 'Где растет?',
    link: 'https://learningapps.org/watch?v=px93xdvzj18',
  },
  {
    id: '32',
    name: 'Гнезда',
    link: 'https://learningapps.org/watch?v=pnmbh7ks518',
  },
  {
    id: '29',
    name: 'Дикие животные',
    link: 'https://learningapps.org/watch?v=pjqagcsk318',
  },
  {
    id: '6',
    name: 'Дикие и домашние  животные',
    link: 'https://learningapps.org/watch?v=pkpf7ra1c18',
  },
  {
    id: '30',
    name: 'Животные зимой',
    link: 'https://learningapps.org/watch?v=pvthh0wak18',
  },
  {
    id: '33',
    name: 'Кто чем питается',
    link: 'https://learningapps.org/watch?v=p2yxo7vrk18',
  },
  {
    id: '16',
    name: 'Найди общее слово',
    link: 'https://learningapps.org/watch?v=puvjn0hjj18',
  },
  {
    id: '3',
    name: 'Овощи и фрукты  ',
    link: 'https://learningapps.org/watch?v=p45dku7x518',
  },
  {
    id: '28',
    name: 'Перелетные птицы',
    link: 'https://learningapps.org/watch?v=p1knd31h518',
  },
  {
    id: '19',
    name: 'Приметы времен года',
    link: 'https://learningapps.org/watch?v=p85rcc04j18',
  },
  {
    id: '34',
    name: 'С какой ветки детки',
    link: 'https://learningapps.org/watch?v=p9qmba3xj18',
  },
  {
    id: '18',
    name: '12 месяцев',
    link: 'https://learningapps.org/watch?v=po02mwez318',
  },
  {
    id: '2',
    name: 'Ягоды и фрукты ',
    link: 'https://learningapps.org/watch?v=prrvbcden18',
  }
];

class LivingAndInanimateNature extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Живая и неживая природа'} data={data} link={GAMES_RUS}/>
    );
  }
}

export default LivingAndInanimateNature;
