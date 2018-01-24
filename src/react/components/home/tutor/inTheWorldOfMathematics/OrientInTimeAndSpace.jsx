import React from 'react';

import BaseTestComponent from '../BaseTestComponent';

const data = [
  {
    id: '1',
    name: 'Дни недели',
    link: 'https://learningapps.org/watch?v=p6s76u9ka18',
  },
  {
    id: '2',
    name: 'Время суток',
    link: 'https://learningapps.org/watch?v=pen5rmxec18',
  },
];

class OrientInTimeAndSpace extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Ориентируемся во времени и пространстве'} data={data} />
    );
  }
}

export default OrientInTimeAndSpace;
