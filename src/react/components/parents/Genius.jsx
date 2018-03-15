import React from 'react';

import BaseVideosComponent from '../shared/BaseVideosComponent';

const data = [
  {
    id: '1',
    name: 'Кто такой вундеркинд?',
    link: 'Y8GhM4hMPiA',
  },
  {
    id: '2',
    name: 'Где его можно встретить?',
    link: 'UbDqakrE0Iw',
  },
  {
    id: '3',
    name: 'А ты - одаренный ребенок?',
    link: 'QRN43MDAYwQ',
  },
];

class Genius extends React.Component {

  render() {
    return (
      <BaseVideosComponent title={'Каждый ребенок гениален'} data={data} />
    );
  }
}

export default Genius;
