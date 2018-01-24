import React from 'react';

import BaseTestComponent from '../BaseTestComponent';

const data = [
  {
    id: '1',
    name: 'Профессии',
    link: 'https://learningapps.org/watch?v=pijqowdrk18',
  },
  {
    id: '2',
    name: 'Кроссворд «Профессии»',
    link: 'https://learningapps.org/watch?v=p15y71x0k18',
  },
  {
    id: '3',
    name: 'Кто чем занимается',
    link: 'https://learningapps.org/watch?v=pq0nszakn18',
  },
  {
    id: '4',
    name: 'Кто шьет одежду',
    link: 'https://learningapps.org/watch?v=ptikehotj18',
  },
];

class WorkOfPeople extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Труд людей'} data={data} />
    );
  }
}

export default WorkOfPeople;
