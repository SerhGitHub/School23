import React from 'react';

import BaseTestComponent from '../BaseTestComponent';

const data = [
  {
    id: '1',
    name: 'Зимушка-зима',
    link: 'https://learningapps.org/watch?v=p06gs5xpn18',
  },
  {
    id: '2',
    name: 'Весна пришла',
    link: 'https://learningapps.org/watch?v=p52i6gnsj18',
  },
];

class LearningToCompose extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Учимся сочинять'} data={data} />
    );
  }
}

export default LearningToCompose;
