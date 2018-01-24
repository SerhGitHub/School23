import React from 'react';

import BaseTestComponent from '../BaseTestComponent';

const data = [
  {
    id: '1',
    name: 'Учим алфавит -1',
    link: 'https://learningapps.org/watch?v=ps8fq8c0c18',
  },
  {
    id: '2',
    name: 'Учим алфавит – 2',
    link: 'https://learningapps.org/watch?v=p69s4na4318',
  },
  {
    id: '3',
    name: 'Составь слово. Аист',
    link: 'https://learningapps.org/watch?v=p2ksx2avj18',
  },
  {
    id: '4',
    name: 'Составь слово. Бор',
    link: 'https://learningapps.org/watch?v=pbxcuhm7j17',
  },
  {
    id: '5',
    name: 'Составь слово. Борщ',
    link: 'https://learningapps.org/watch?v=pv87wz6xc17',
  },
  {
    id: '6',
    name: 'Составь слово. Век',
    link: 'https://learningapps.org/watch?v=panntdu1v17',
  },
  {
    id: '7',
    name: 'Составь слово. Вилы',
    link: 'https://learningapps.org/watch?v=pn0f2bnpj17',
  },
  {
    id: '8',
    name: 'Составь слово. Винт',
    link: 'https://learningapps.org/watch?v=poeqaq95t17',
  },
  {
    id: '9',
    name: 'Составь слово. Гиря',
    link: 'https://learningapps.org/watch?v=ps5wj3c4317',
  },
  {
    id: '10',
    name: 'Составь слово. Горы',
    link: 'https://learningapps.org/watch?v=p4qmay4b317',
  },
  {
    id: '11',
    name: 'Составь слово. Енот',
    link: 'https://learningapps.org/watch?v=pbb00seyt17',
  },
  {
    id: '12',
    name: 'Составь слово. Имя',
    link: 'https://learningapps.org/watch?v=pr9n3gkjj17',
  },
  {
    id: '13',
    name: 'Составь слово. Мост',
    link: 'https://learningapps.org/watch?v=pjaoqpmc317',
  },
];

class LearningTheAlphbet extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Учим алфавит'} data={data} />
    );
  }
}

export default LearningTheAlphbet;
