import React from 'react';

import BaseTestComponent from '../shared/BaseTestComponent';

import {GAMES_BEAUTIFUL} from '../../constants/constants';

const data = [
  {
    id: '18',
    name: 'Учимся рисовать. Белка',
    link: 'https://learningapps.org/watch?v=p8bxnodua18',
  },
  {
    id: '21',
    name: 'Учимся рисовать. Девочка',
    link: 'https://learningapps.org/watch?v=pez1uiev318',
  },
  {
    id: '28',
    name: 'Учимся рисовать. Зимний пейзаж',
    link: 'https://learningapps.org/watch?v=p23g4fti318',
  },
  {
    id: '24',
    name: 'Учимся рисовать. Золушка',
    link: 'https://learningapps.org/watch?v=p3pqbo0jk18',
  },
  {
    id: '16',
    name: 'Учимся рисовать. Кошка',
    link: 'https://learningapps.org/watch?v=pus0q67r318',
  },
  {
    id: '19',
    name: 'Учимся рисовать. Кролик',
    link: 'https://learningapps.org/watch?v=pht7fdrvt18',
  },
  {
    id: '27',
    name: 'Учимся рисовать. Кружка с чаем',
    link: 'https://learningapps.org/watch?v=pc8xi44bc18',
  },
  {
    id: '22',
    name: 'Учится рисовать. Мальчик',
    link: 'https://learningapps.org/watch?v=p3upninsn18',
  },
  {
    id: '25',
    name: 'Учимся рисовать. Машина',
    link: 'https://learningapps.org/watch?v=p3787qm3318',
  },
  {
    id: '23',
    name: 'Учимся рисовать. Портрет',
    link: 'https://learningapps.org/watch?v=pkrn53rjt18',
  },
  {
    id: '17',
    name: 'Учимся рисовать. Собака',
    link: 'https://learningapps.org/watch?v=puf361xaj18',
  },
  {
    id: '26',
    name: 'Учимся рисовать. Танк',
    link: 'https://learningapps.org/watch?v=ph7ouuubt18',
  },
  {
    id: '20',
    name: 'Учимся рисовать. Цыпленок',
    link: 'https://learningapps.org/watch?v=pad0vvxn318',
  }
];

class LearningToDraw extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Учимся рисовать'} data={data} link={GAMES_BEAUTIFUL}/>
    );
  }
}

export default LearningToDraw;
