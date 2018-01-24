import React from 'react';

import BaseTestComponent from '../BaseTestComponent';

const data = [
  {
    id: '1',
    name: 'Сложение в пределах 10',
    link: 'https://learningapps.org/watch?v=pg6gsztoc18',
  },
  {
    id: '2',
    name: 'Вычитание в пределах 10',
    link: 'https://learningapps.org/watch?v=pbc70zv9j18',
  },
  {
    id: '3',
    name: 'Вычитание в пределах 10 – 2',
    link: 'https://learningapps.org/watch?v=pmag8n0yj18',
  },
  {
    id: '4',
    name: 'Найди ошибки',
    link: 'https://learningapps.org/watch?v=phov3pw5318',
  },
  {
    id: '5',
    name: 'Викторина «Таблица сложения»',
    link: 'https://learningapps.org/watch?v=p2tzjrtk518',
  },
  {
    id: '6',
    name: 'Сложение в пределах 5',
    link: 'https://learningapps.org/watch?v=p2x34sbj317',
  },
];

class SolveExamples extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Решаем примеры'} data={data} />
    );
  }
}

export default SolveExamples;
