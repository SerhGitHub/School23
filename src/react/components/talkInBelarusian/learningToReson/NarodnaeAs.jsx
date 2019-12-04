import React from 'react';

import BaseTestComponent from '../../shared/BaseTestComponent';

import {GAMES_BEL} from '../../../constants/constants';

const data = [
  {
    id: '16',
    name: 'Абутак ',
    link: 'https://learningapps.org/watch?v=ppdmg9tg518',
  },
  {
    id: '15',
    name: 'Адзенне',
    link: 'https://learningapps.org/watch?v=psiffactj18',
  },
  {
    id: '18',
    name: 'Асабістая гігіена',
    link: 'https://learningapps.org/watch?v=pbh8e6nv518',
  },
  {
    id: '5',
    name: 'Вучэбныя заняткі',
    link: 'https://learningapps.org/watch?v=pux56g7pa18',
  },
  {
    id: '3',
    name: 'Вучэбныя рэчы',
    link: 'https://learningapps.org/watch?v=phg9amkk318',
  },
  {
    id: '7',
    name: 'Гуляем разам',
    link: 'https://learningapps.org/watch?v=p0izb07ac18',
  },
  {
    id: '17',
    name: 'Знайдзі пару. 12 месяцаў',
    link: 'https://learningapps.org/watch?v=pdx137tua18',
  },
  {
    id: '2',
    name: 'На пошце',
    link: 'https://learningapps.org/watch?v=pdyeyjowc18',
  },
  {
    id: '19',
    name: 'Мая кватэра',
    link: 'https://learningapps.org/watch?v=p9j0ii7jk18',
  },
  {
    id: '13',
    name: 'Тыдзень',
    link: 'https://learningapps.org/watch?v=p3jg7670518',
  },
  {
    id: '9',
    name: 'У краме',
    link: 'https://learningapps.org/watch?v=p9213yck318',
  },
  {
    id: '20',
    name: 'Школа',
    link: 'https://learningapps.org/watch?v=pso5b2ohc18',
  },
  {
    id: '14',
    name: '12 месяцаў',
    link: 'https://learningapps.org/watch?v=pu4pgy1q218',
  }
];

class NarodnaeAs extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Навакольнае асяроддзе'} data={data} link={GAMES_BEL}/>
    );
  }
}

export default NarodnaeAs;
