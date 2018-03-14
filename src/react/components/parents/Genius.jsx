import React from 'react';

import BaseVideosComponent from '../shared/BaseVideosComponent';

const data = [
  {
    id: '1',
    name: 'Кто такой вундеркинд?',
    link: 'Tuuaaaaa',
  },
  {
    id: '2',
    name: 'Где его можно встретить?',
    link: 'BaDaaa',
  },
  {
    id: '3',
    name: 'А ты - одаренный ребенок?',
    link: 'v4aaa',
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
