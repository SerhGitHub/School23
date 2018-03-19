import React from 'react';

import BaseTestComponent from '../../shared/BaseTestComponent';

const data = [
  {
    id: '1',
    name: 'Знайдзі словы',
    link: 'https://learningapps.org/watch?v=pzw3a4h6a18',
  },
  {
    id: '2',
    name: 'На пошце',
    link: 'https://learningapps.org/watch?v=pdyeyjowc18',
  },
  {
    id: '3',
    name: 'Вучэбныя рэчы',
    link: 'https://learningapps.org/watch?v=phg9amkk318',
  },
  {
    id: '4',
    name: 'Мае сваякі',
    link: 'https://learningapps.org/watch?v=pejd5b39318',
  },
  {
    id: '5',
    name: 'Вучэбныя заняткі ',
    link: 'https://learningapps.org/watch?v=pux56g7pa18',
  },
  {
    id: '6',
    name: 'Дзень нараджэння',
    link: 'https://learningapps.org/watch?v=pfz42t3nk18',
  },
  {
    id: '7',
    name: 'Гуляем разам',
    link: 'https://learningapps.org/watch?v=p0izb07ac18',
  },
  {
    id: '8',
    name: 'Надвор’е, з’явы прыроды',
    link: 'https://learningapps.org/watch?v=pvpc046tv18',
  },
  {
    id: '9',
    name: 'У краме',
    link: 'https://learningapps.org/watch?v=p9213yck318',
  },
  {
    id: '10',
    name: 'Кветкі',
    link: 'https://learningapps.org/watch?v=penvcf8ka18',
  },
  {
    id: '11',
    name: 'Птушкі',
    link: 'https://learningapps.org/watch?v=p9qtjkrb218',
  },
  {
    id: '12',
    name: 'Жывёлы ',
    link: 'https://learningapps.org/watch?v=p9qtjkrb218',
  },
  {
    id: '13',
    name: 'Тыдзень ',
    link: 'https://learningapps.org/watch?v=p3jg7670518',
  },
  {
    id: '14',
    name: '12 месяцаў',
    link: 'https://learningapps.org/watch?v=pu4pgy1q218',
  },
  {
    id: '15',
    name: 'Адзенне',
    link: 'https://learningapps.org/watch?v=psiffactj18',
  },
  {
    id: '16',
    name: 'Абутак ',
    link: 'https://learningapps.org/watch?v=ppdmg9tg518',
  },
  {
    id: '17',
    name: 'Знайдзі пару. 12 месяцаў',
    link: 'https://learningapps.org/watch?v=pdx137tua18',
  },
  {
    id: '18',
    name: 'Асабістая гігіена',
    link: 'https://learningapps.org/watch?v=pbh8e6nv518',
  },
  {
    id: '19',
    name: 'Мая кватэра',
    link: 'https://learningapps.org/watch?v=p9j0ii7jk18',
  },
  {
    id: '20',
    name: 'Школа',
    link: 'https://learningapps.org/watch?v=pso5b2ohc18',
  },
];

class Games extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Гульні'} data={data} />
    );
  }
}

export default Games;
