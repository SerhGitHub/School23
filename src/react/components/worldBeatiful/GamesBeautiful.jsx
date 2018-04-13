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
    link: 'https://learningapps.org/watch?v=pgmpuz04t18',
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
  },
  {
    id: '11',
    name: 'Разгадай ребусы - 2',
    link: 'https://learningapps.org/watch?v=pqr8nmmrt18',
  },
  {
    id: '12',
    name: 'Кто в чем танцует',
    link: 'https://learningapps.org/watch?v=pfpwzheq518',
  },
  {
    id: '13',
    name: 'Мир танцев',
    link: 'https://learningapps.org/watch?v=pnh4c2eij18',
  },
  {
    id: '14',
    name: 'Определи цвет',
    link: 'https://learningapps.org/watch?v=pa50or1bt18',
  },
  {
    id: '15',
    name: 'Что из чего?',
    link: 'https://learningapps.org/watch?v=py9xp2ybc18',
  },
  {
    id: '16',
    name: 'Учимся рисовать. Кошка',
    link: 'https://learningapps.org/watch?v=pus0q67r318',
  },
  {
    id: '17',
    name: 'Учимся рисовать. Собака',
    link: 'https://learningapps.org/watch?v=puf361xaj18',
  },
  {
    id: '18',
    name: 'Учимся рисовать. Белка',
    link: 'https://learningapps.org/watch?v=p8bxnodua18',
  },
  {
    id: '19',
    name: 'Учимся рисовать. Кролик',
    link: 'https://learningapps.org/watch?v=pht7fdrvt18',
  },
  {
    id: '20',
    name: 'Учимся рисовать. Цыпленок',
    link: 'https://learningapps.org/watch?v=pad0vvxn318',
  },
  {
    id: '21',
    name: 'Учимся рисовать. Девочка',
    link: 'https://learningapps.org/watch?v=pez1uiev318',
  },
  {
    id: '22',
    name: 'Учится рисовать. Мальчик',
    link: 'https://learningapps.org/watch?v=p3upninsn18',
  },
  {
    id: '23',
    name: 'Учимся рисовать. Портрет',
    link: 'https://learningapps.org/watch?v=pkrn53rjt18',
  },
  {
    id: '24',
    name: 'Учимся рисовать. Золушка',
    link: 'https://learningapps.org/watch?v=p3pqbo0jk18',
  },
  {
    id: '25',
    name: 'Учимся рисовать. Машина',
    link: 'https://learningapps.org/watch?v=p3787qm3318',
  },
  {
    id: '26',
    name: 'Учимся рисовать. Танк',
    link: 'https://learningapps.org/watch?v=ph7ouuubt18',
  },
  {
    id: '27',
    name: 'Учимся рисовать. Кружка с чаем',
    link: 'https://learningapps.org/watch?v=pc8xi44bc18',
  },
  {
    id: '28',
    name: 'Учимся рисовать. Зимний пейзаж',
    link: 'https://learningapps.org/watch?v=p23g4fti318',
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
