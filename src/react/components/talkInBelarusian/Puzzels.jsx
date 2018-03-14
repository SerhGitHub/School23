import React from 'react';

import BaseTestComponent from '../shared/BaseTestComponent';

const data = [
  {
    id: '1',
    name: 'Разгадай загадкі. Жывёлы',
    link: 'https://learningapps.org/watch?v=p810ve1ct18',
  },
  {
    id: '2',
    name: 'Разгадай загадкі. Расліны',
    link: 'https://learningapps.org/watch?v=pe670ji6k18',
  },
  {
    id: '3',
    name: 'Разгадай загадкі. Прырода ',
    link: 'https://learningapps.org/watch?v=pabfza5ga18',
  },
  {
    id: '4',
    name: 'Разгадай загадкі. Птушкі',
    link: 'https://learningapps.org/watch?v=pumvomnut18',
  },
  {
    id: '5',
    name: 'Разгадай загадкі. Транспарт',
    link: 'https://learningapps.org/watch?v=p930mb2vj18',
  },
  {
    id: '6',
    name: 'Разгадай загадкі. Рэчы',
    link: 'https://learningapps.org/watch?v=p56o82ms518',
  }
];

class Puzzels extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Загадкі'} data={data} />
    );
  }
}

export default Puzzels;
