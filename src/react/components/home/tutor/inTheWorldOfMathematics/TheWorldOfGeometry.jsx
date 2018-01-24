import React from 'react';

import BaseTestComponent from '../BaseTestComponent';

const data = [
  {
    id: '1',
    name: 'Геометрические фигуры',
    link: 'https://learningapps.org/watch?v=pjf3mxk2518',
  },
  {
    id: '2',
    name: 'На что похоже',
    link: 'https://learningapps.org/watch?v=pti1djr5t18',
  },
  {
    id: '3',
    name: 'Загадки о геометрических фигурах',
    link: 'https://learningapps.org/watch?v=pjf3mxk2518',
  },
];

class TheWorldOfGeometry extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Мир геометрии'} data={data} />
    );
  }
}

export default TheWorldOfGeometry;
