import React from 'react';

import BaseVideosComponent from '../shared/BaseVideosComponent';

const data = [
  {
    id: '1',
    name: 'Видеть музыку',
    link: 'TuuVHOmM1Zc',
  },
  {
    id: '2',
    name: 'М.Мусоргский. Картинки с выставки',
    link: 'BaDRBWmeWJk',
  },
  {
    id: '3',
    name: 'М.Мусоргский. Балет невылупившихся птенцов',
    link: 'v4kgkdoGjyw',
  },
  {
    id: '4',
    name: 'П.Чайковский. Щелкунчик. Танец Феи Драже',
    link: '468onQOJSl8',
  },
  {
    id: '5',
    name: 'П.Чайковский. Щелкунчик. Вальс цветов',
    link: 'ju3w462bD5Y',
  },
  {
    id: '6',
    name: 'П.Чайковский. Детский альбом',
    link: 'tsvJdWc1Sus',
  },
  {
    id: '7',
    name: 'Р.Шуман. Дед Мороз',
    link: 'ySENnCyWaRM',
  },
  {
    id: '8',
    name: 'Р.Шуман. Кукушка',
    link: 'UD3zyKdqk4U',
  },
  {
    id: '9',
    name: 'П.Гюнт. В пещере горного короля',
    link: 'cqTw5vQvtu4',
  },
  {
    id: '10',
    name: 'С.Прокофьев. Петя и волк',
    link: '8hgqlFlGrE0',
  }
];

class Cartoons extends React.Component {

  render() {
    return (
      <BaseVideosComponent title={'Мультфильмы'} data={data} />
    );
  }
}

export default Cartoons;
