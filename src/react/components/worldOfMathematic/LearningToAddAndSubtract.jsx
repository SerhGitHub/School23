import React from 'react';

import BaseTestComponent from '../shared/BaseTestComponent';

import {GAMES_MATH} from '../../constants/constants';

const data = [
  {
    id: '12',
    name: 'Викторина «Таблица сложения»',
    link: 'https://learningapps.org/watch?v=p2tzjrtk518',
  },
  {
    id: '9',
    name: 'Вычитание в пределах 10',
    link: 'https://learningapps.org/watch?v=pbc70zv9j18',
  },
  {
    id: '10',
    name: 'Вычитание в пределах 10 – 2',
    link: 'https://learningapps.org/watch?v=pmag8n0yj18',
  },
  {
    id: '44',
    name: 'Математический дождик',
    link: 'https://learningapps.org/watch?v=p71ptxmd218',
  },
  {
    id: '45',
    name: 'Математические цепочки',
    link: 'https://learningapps.org/watch?v=pgg76a7qk18',
  },
  {
    id: '11',
    name: 'Найди ошибки',
    link: 'https://learningapps.org/watch?v=phov3pw5318',
  },
  {
    id: '46',
    name: 'Примеры в картинках',
    link: 'https://learningapps.org/watch?v=pkz8ec4ia18',
  },
  {
    id: '30',
    name: 'Реши примеры',
    link: 'https://learningapps.org/watch?v=pdcnf4jyn18',
  },
  {
    id: '47',
    name: 'Реши примеры - 2',
    link: 'https://learningapps.org/watch?v=phun1famk18',
  },
  {
    id: '13',
    name: 'Сложение  в пределах 5',
    link: 'https://learningapps.org/watch?v=p2x34sbj317',
  },
  {
    id: '8',
    name: 'Сложение в пределах 10',
    link: 'https://learningapps.org/watch?v=pg6gsztoc18',
  },
  {
    id: '23',
    name: 'Сложение и вычитание в пределах 10',
    link: 'https://learningapps.org/watch?v=pum35wgmn18',
  },
  {
    id: '48',
    name: 'Составь примеры',
    link: 'https://learningapps.org/watch?v=pspsmr5pn18',
  },
  {
    id: '24',
    name: 'Счет в пределах первого десятка',
    link: 'https://learningapps.org/watch?v=p41ezu43n18',
  },
  {
    id: '25',
    name: 'Считаем в пределах 10',
    link: 'https://learningapps.org/watch?v=pbgxei21v18',
  },
  {
    id: '49',
    name: 'Счет цепочкой',
    link: 'https://learningapps.org/watch?v=p2sk9p5sk18',
  }
];

class LearningToAddAndSubtract extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Учимся складывать и вычитать'} data={data} link={GAMES_MATH}/>
    );
  }
}

export default LearningToAddAndSubtract;
