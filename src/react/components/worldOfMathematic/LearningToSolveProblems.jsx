import React from 'react';

import BaseTestComponent from '../shared/BaseTestComponent';

import {GAMES_MATH} from '../../constants/constants';

const data = [
  {
    id: '50',
    name: 'Задачи',
    link: 'https://learningapps.org/watch?v=pokwp36uj18',
  },
  {
    id: '51',
    name: 'Задачи на вычитание',
    link: 'https://learningapps.org/watch?v=ptcy1oxqn18',
  },
  {
    id: '52',
    name: 'Задачи на сложение',
    link: 'https://learningapps.org/watch?v=ppj3zstg518',
  },
  {
    id: '53',
    name: 'Логические задачи',
    link: 'https://learningapps.org/watch?v=pccw4788k18',
  },
  {
    id: '54',
    name: 'Составь и реши задачу',
    link: 'https://learningapps.org/watch?v=pzgwg1coj18',
  }
  ];

class LearningToSolveProblems extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Учимся решать задачи'} data={data} link={GAMES_MATH}/>
    );
  }
}

export default LearningToSolveProblems;
