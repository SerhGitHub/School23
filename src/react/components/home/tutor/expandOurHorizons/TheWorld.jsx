import React from 'react';

import BaseTestComponent from '../BaseTestComponent';

const data = [
  {
    id: '1',
    name: 'Что для чего-1',
    link: 'https://learningapps.org/watch?v=px5iwsbb218',
  },
  {
    id: '2',
    name: 'Что для чего -2',
    link: 'https://learningapps.org/watch?v=p3ta3cuo318',
  },
  {
    id: '3',
    name: 'Цветик-семицветик',
    link: 'https://learningapps.org/watch?v=pzixyu2gj18',
  },
  {
    id: '4',
    name: 'Какого цвета?',
    link: 'https://learningapps.org/watch?v=pa1fe9sdn18',
  },
  {
    id: '5',
    name: 'Сезонная одежда',
    link: 'https://learningapps.org/watch?v=pv3n5fh1t18',
  },
  {
    id: '6',
    name: 'Новогодний праздник',
    link: 'https://learningapps.org/watch?v=ps1f3vnq518',
  },
];

class TheWorld extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Окружающий мир'} data={data} />
    );
  }
}

export default TheWorld;
