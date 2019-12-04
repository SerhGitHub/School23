import React from 'react';

import BaseTestComponent from '../shared/BaseTestComponent';

import {GAMES_RUS} from '../../constants/constants';

const data = [
  {
    id: '8',
    name: 'Кроссворд «Профессии»',
    link: 'https://learningapps.org/watch?v=p15y71x0k18',
  },
  {
    id: '9',
    name: 'Кто чем занимается',
    link: 'https://learningapps.org/watch?v=pq0nszakn18',
  },
  {
    id: '10',
    name: 'Кто шьет одежду',
    link: 'https://learningapps.org/watch?v=ptikehotj18',
  },
  {
    id: '13',
    name: 'Новогодний праздник',
    link: 'https://learningapps.org/watch?v=ps1f3vnq518',
  },
  {
    id: '7',
    name: 'Профессии',
    link: 'https://learningapps.org/watch?v=pijqowdrk18',
  },
  {
    id: '12',
    name: 'Сезонная одежда',
    link: 'https://learningapps.org/watch?v=pv3n5fh1t18',
  },
  {
    id: '11',
    name: 'Что для чего',
    link: 'https://learningapps.org/watch?v=p3ta3cuo318',
  }
];

class TheWorldAround extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Мир вокруг'} data={data} link={GAMES_RUS}/>
    );
  }
}

export default TheWorldAround;
