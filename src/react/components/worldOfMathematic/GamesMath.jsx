import React from 'react';

import BaseTestComponent from '../shared/BaseTestComponent';

const data = [
  {
    id: '1',
    name: 'Числовой ряд',
    link: 'https://learningapps.org/watch?v=pf470uayc18',
  },
  {
    id: '2',
    name: 'Число 10',
    link: 'https://learningapps.org/watch?v=pfhhfyyon18',
  },
  {
    id: '3',
    name: 'Числа 5 и 6',
    link: 'https://learningapps.org/watch?v=pdwy3xorj18',
  },
  {
    id: '4',
    name: 'Четные и нечетные числа',
    link: 'https://learningapps.org/watch?v=pce9wu2mc17',
  },
  {
    id: '5',
    name: 'Больше, меньше и равно',
    link: 'https://learningapps.org/watch?v=pzyqo2yc518',
  },
  {
    id: '6',
    name: 'Счет предметов',
    link: 'https://learningapps.org/watch?v=pfgs3v3x518',
  },
  {
    id: '7',
    name: 'Расположи по порядку',
    link: 'https://learningapps.org/watch?v=ps9fud47318',
  },
  {
    id: '8',
    name: 'Сложение в пределах 10',
    link: 'https://learningapps.org/watch?v=pg6gsztoc18',
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
    id: '11',
    name: 'Найди ошибки',
    link: 'https://learningapps.org/watch?v=phov3pw5318',
  },
  {
    id: '12',
    name: 'Викторина «Таблица сложения»',
    link: 'https://learningapps.org/watch?v=p2tzjrtk518',
  },
  {
    id: '13',
    name: 'Сложение  в пределах 5',
    link: 'https://learningapps.org/watch?v=p2x34sbj317',
  },
  {
    id: '14',
    name: 'Геометрические фигуры',
    link: 'https://learningapps.org/watch?v=pjf3mxk2518',
  },
  {
    id: '15',
    name: 'На что похоже',
    link: 'https://learningapps.org/watch?v=pti1djr5t18',
  },
  {
    id: '16',
    name: 'Загадки о геометрических фигурах',
    link: 'https://learningapps.org/watch?v=pjf3mxk2518',
  },
  {
    id: '17',
    name: 'Дни недели',
    link: 'https://learningapps.org/watch?v=p6s76u9ka18',
  },
  {
    id: '18',
    name: 'Время суток',
    link: 'https://learningapps.org/watch?v=pen5rmxec18',
  },
  {
    id: '19',
    name: 'Найди пары. Формы',
    link: 'https://learningapps.org/watch?v=pem6prhda18',
  },
  {
    id: '20',
    name: 'Найди пары. Цвет',
    link: 'https://learningapps.org/watch?v=p54y6x9ua18',
  },
  {
    id: '21',
    name: 'Разгадай ребусы',
    link: 'https://learningapps.org/watch?v=pd8g2vgo518',
  },
  {
    id: '22',
    name: 'Разгадай ребусы - 2',
    link: 'https://learningapps.org/watch?v=pdo12n22n18',
  },
  {
    id: '23',
    name: 'Ребусы-раскраски',
    isHref: true,
    link: 'http://rebus-raskraska.blogspot.com.by/p/blog-page_2.html',
  },

];

class GamesMath extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Игры'} data={data} />
    );
  }
}

export default GamesMath;
