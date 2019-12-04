import React from 'react';

import BaseTestComponent from '../shared/BaseTestComponent';

import {GAMES_BEAUTIFUL} from '../../constants/constants';

const data = [
  {
    id: '4',
    name: 'Что для чего',
    link: 'https://learningapps.org/watch?v=px5iwsbb218',
  },
  {
    id: '15',
    name: 'Что из чего?',
    link: 'https://learningapps.org/watch?v=py9xp2ybc18',
  }
];

class ArtisticWork extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Художественный труд'} data={data} link={GAMES_BEAUTIFUL}/>
    );
  }
}

export default ArtisticWork;
