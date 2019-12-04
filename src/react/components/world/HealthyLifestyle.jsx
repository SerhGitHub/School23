import React from 'react';

import BaseTestComponent from '../shared/BaseTestComponent';

import {GAMES_RUS} from '../../constants/constants';

const data = [
  {
    id: '35',
    name: 'Виды спорта',
    link: 'https://learningapps.org/watch?v=picj6wf2518',
  },
  {
    id: '36',
    name: 'Занятия в свободное время',
    link: 'https://learningapps.org/watch?v=p6eovbg3j18',
  },
  {
    id: '26',
    name: 'Личная гигиена',
    link: 'https://learningapps.org/watch?v=ph2uooy2a18',
  },
  {
    id: '38',
    name: 'Моем руки правильно',
    link: 'https://learningapps.org/watch?v=pobfeqx4518',
  },
  {
    id: '39',
    name: 'Полезные и вредные продукты',
    link: 'https://learningapps.org/watch?v=p4kw4xj0518',
  },
  {
    id: '27',
    name: 'Правила личной гигиены',
    link: 'https://learningapps.org/watch?v=pnodirbxa18',
  },
  {
    id: '40',
    name: 'Предметы гигиены',
    link: 'https://learningapps.org/watch?v=pdvji2x4k18',
  },
  {
    id: '41',
    name: 'Привычки',
    link: 'https://learningapps.org/watch?v=pgrk7zjpc18',
  },
  {
    id: '42',
    name: 'Режим дня',
    link: 'https://learningapps.org/watch?v=pz9v1jaet18',
  },
  {
    id: '43',
    name: 'Фрукты и овощи',
    link: 'https://learningapps.org/watch?v=pvgxxka6218',
  }
];

class HealthyLifestyle extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Здоровый образ жизни'} data={data} link={GAMES_RUS}/>
    );
  }
}

export default HealthyLifestyle;
