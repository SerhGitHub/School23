import React from 'react';

import BaseTestComponent from '../../shared/BaseTestComponent';

import {GAMES_BEL} from '../../../constants/constants';

const data = [
  {
    id: '12',
    name: 'Жывёлы ',
    link: 'https://learningapps.org/watch?v=pgak2k81n18',
  },
  {
    id: '10',
    name: 'Кветкі',
    link: 'https://learningapps.org/watch?v=penvcf8ka18',
  },
  {
    id: '8',
    name: 'Надвор’е, з’явы прыроды',
    link: 'https://learningapps.org/watch?v=pvpc046tv18',
  },
  {
    id: '11',
    name: 'Птушкі',
    link: 'https://learningapps.org/watch?v=p9qtjkrb218',
  }
];

class USvetePrirodi extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'У свеце прыроды'} data={data} link={GAMES_BEL}/>
    );
  }
}

export default USvetePrirodi;
