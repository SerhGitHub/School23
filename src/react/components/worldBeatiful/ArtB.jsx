import React from 'react';

import BaseTestComponent from '../shared/BaseTestComponent';

import {GAMES_BEAUTIFUL} from '../../constants/constants';

const data = [
  {
    id: '1',
    name: 'Какого цвета',
    link: 'https://learningapps.org/watch?v=pn2symj9k18',
  },
  {
    id: '2',
    name: 'Какого цвета?',
    link: 'https://learningapps.org/watch?v=pa1fe9sdn18',
  },
  {
    id: '14',
    name: 'Определи цвет',
    link: 'https://learningapps.org/watch?v=pa50or1bt18',
  },
  {
    id: '5',
    name: 'Силуэты',
    link: 'https://learningapps.org/watch?v=p16efim9t18',
  },
  {
    id: '3',
    name: 'Цветик-семицветик',
    link: 'https://learningapps.org/watch?v=pzixyu2gj18',
  }
];

class ArtB extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Изобразительное искусство'} data={data} link={GAMES_BEAUTIFUL}/>
    );
  }
}

export default ArtB;
