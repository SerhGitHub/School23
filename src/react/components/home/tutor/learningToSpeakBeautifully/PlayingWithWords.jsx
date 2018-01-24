import React from 'react';

import BaseTestComponent from '../BaseTestComponent';

const data = [
  {
    id: '1',
    name: 'Предлоги местоположения',
    link: 'https://learningapps.org/watch?v=p4ntyxbo318',
  },
  {
    id: '2',
    name: 'Скажи наоборот',
    link: 'https://learningapps.org/watch?v=p94ua0xaa18',
  },
  {
    id: '3',
    name: 'Кто? Что?',
    link: 'https://learningapps.org/watch?v=pozhsypnk18',
  },
];

class PlayingWithWords extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Играем со словами'} data={data} />
    );
  }
}

export default PlayingWithWords;
