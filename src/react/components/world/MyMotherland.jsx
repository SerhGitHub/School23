import React from 'react';

import BaseTestComponent from '../shared/BaseTestComponent';

import {GAMES_RUS} from '../../constants/constants';

const data = [
  {
    id: '04',
    name: 'Белорусские спортсмены',
    link: 'https://learningapps.org/watch?v=p45opygvk18',
  },
  {
    id: '05',
    name: 'Герб Республики Беларусь',
    link: 'https://learningapps.org/watch?v=p576xmnzn18',
  },
  {
    id: '25',
    name: 'Мой город',
    link: 'https://learningapps.org/watch?v=p3fnvjvia18',
  },
  {
    id: '23',
    name: 'Моя Беларусь',
    link: 'https://learningapps.org/watch?v=pvdb28zkj18',
  },

  {
    id: '15',
    name: 'Моя Родина',
    link: 'https://learningapps.org/watch?v=pkvfd22sj18',
  },
  {
    id: '24',
    name: 'Моя страна',
    link: 'https://learningapps.org/watch?v=pecnm74pj18',
  },
  {
    id: '31',
    name: 'Национальные праздники',
    link: 'https://learningapps.org/watch?v=phqvsq5kn18',
  },
  {
    id: '22',
    name: 'Областные центры республики',
    link: 'https://learningapps.org/watch?v=p8weff0dk18',
  },
  {
    id: '21',
    name: 'Символы республики',
    link: 'https://learningapps.org/watch?v=pj7g49brt18',
  }
];

class MyMotherland extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Моя Родина'} data={data} link={GAMES_RUS}/>
    );
  }
}

export default MyMotherland;
