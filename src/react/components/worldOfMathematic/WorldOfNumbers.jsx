import React from 'react';

import BaseTestComponent from '../shared/BaseTestComponent';

import {GAMES_MATH} from '../../constants/constants';

const data = [
  {
    id: '33',
    name: 'Состав числа 3',
    link: 'https://learningapps.org/watch?v=pa8349em218',
  },
  {
    id: '34',
    name: 'Состав числа 4',
    link: 'https://learningapps.org/watch?v=pkquzxn9c18',
  },
  {
    id: '35',
    name: 'Состав числа 5',
    link: 'https://learningapps.org/watch?v=p8nrduyta18',
  },
  {
    id: '36',
    name: 'Состав числа 6',
    link: 'https://learningapps.org/watch?v=pdadtiydk18',
  },
  {
    id: '37',
    name: 'Состав числа 7',
    link: 'https://learningapps.org/watch?v=puyjzqsha18',
  },
  {
    id: '38',
    name: 'Состав числа 8',
    link: 'https://learningapps.org/watch?v=pwgpozv5n18',
  },
  {
    id: '39',
    name: 'Состав числа 9',
    link: 'https://learningapps.org/watch?v=pgsgeai8j18',
  },
  {
    id: '40',
    name: 'Состав числа 10',
    link: 'https://learningapps.org/watch?v=pifpe1amk18',
  },
  {
    id: '6',
    name: 'Счет предметов',
    link: 'https://learningapps.org/watch?v=pfgs3v3x518',
  },
  {
    id: '41',
    name: 'Образуй число',
    link: 'https://learningapps.org/watch?v=pcpdifmfj18',
  },
  {
    id: '29',
    name: 'Порядок убывания',
    link: 'https://learningapps.org/watch?v=pib65fb7c18',
  },
  {
    id: '4',
    name: 'Четные и нечетные числа',
    link: 'https://learningapps.org/watch?v=pce9wu2mc17',
  },
  {
    id: '3',
    name: 'Числа 5 и 6',
    link: 'https://learningapps.org/watch?v=pdwy3xorj18',
  },
  {
    id: '26',
    name: 'Числа в пределах 5',
    link: 'https://learningapps.org/watch?v=p31cqkkgt18',
  },
  {
    id: '27',
    name: 'Числа первого десятка',
    link: 'https://learningapps.org/watch?v=pttn9aur318',
  },
  {
    id: '2',
    name: 'Число 10',
    link: 'https://learningapps.org/watch?v=pfhhfyyon18',
  },
  {
    id: '28',
    name: 'Числа от 10 до 20',
    link: 'https://learningapps.org/watch?v=pc630kask18',
  },
  {
    id: '1',
    name: 'Числовой ряд',
    link: 'https://learningapps.org/watch?v=pf470uayc18',
  },
  {
    id: '42',
    name: 'Числовой паровозик',
    link: 'https://learningapps.org/watch?v=pz032k37a18',
  },
  {
    id: '43',
    name: 'Цифры',
    link: 'https://learningapps.org/watch?v=p240bs2hc18',
  }
];

class WorldOfNumbers extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Мир чисел'} data={data} link={GAMES_MATH}/>
    );
  }
}

export default WorldOfNumbers;
