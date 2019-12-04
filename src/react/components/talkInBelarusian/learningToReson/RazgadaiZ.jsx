import React from 'react';

import BaseTestComponent from '../../shared/BaseTestComponent';

import {GAMES_BEL} from '../../../constants/constants';

const data = [
  {
    id: '21',
    name: 'Разгадай загадкі. Жывелы',
    link: 'https://learningapps.org/watch?v=p810ve1ct18',
  },
  {
    id: '22',
    name: 'Разгадай загадкі. Прырода',
    link: 'https://learningapps.org/watch?v=pabfza5ga18',
  },
  {
    id: '23',
    name: 'Разгадай загадкі. Птушкі',
    link: 'https://learningapps.org/watch?v=pumvomnut18',
  },
  {
    id: '24',
    name: 'Разгадай загадкі. Расліны',
    link: 'https://learningapps.org/watch?v=pe670ji6k18',
  },
  {
    id: '25',
    name: 'Разгадай загадкі. Рэчы',
    link: 'https://learningapps.org/watch?v=p56o82ms518',
  },
  {
    id: '26',
    name: 'Разгадай загадкі. Транспарт',
    link: 'https://learningapps.org/watch?v=p930mb2vj18',
  }
];

class RazgadaiZ extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Разгадай загадкі'} data={data} link={GAMES_BEL}/>
    );
  }
}

export default RazgadaiZ;
