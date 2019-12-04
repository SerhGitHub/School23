import React from 'react';

import BaseTestComponent from '../../shared/BaseTestComponent';

import {GAMES_WITH_LETTERS_AND_SOUNDS} from '../../../constants/constants';

const data = [
  {
    id: '11',
    name: 'Учим алфавит - 1',
    link: 'https://learningapps.org/watch?v=ps8fq8c0c18',
  },
  {
    id: '12',
    name: 'Учим алфавит – 2',
    link: 'https://learningapps.org/watch?v=p69s4na4318',
  },
  {
    id: '52',
    name: 'Согласные буквы',
    link: 'https://learningapps.org/watch?v=p5rcjt0yk18',
  },
  {
    id: '13',
    name: 'Составь слово. Аист',
    link: 'https://learningapps.org/watch?v=p2ksx2avj18',
  },
  {
    id: '14',
    name: 'Составь слово. Бор',
    link: 'https://learningapps.org/watch?v=pbxcuhm7j17',
  },
  {
    id: '15',
    name: 'Составь слово. Борщ',
    link: 'https://learningapps.org/watch?v=pv87wz6xc17',
  },
  {
    id: '16',
    name: 'Составь слово. Век',
    link: 'https://learningapps.org/watch?v=panntdu1v17',
  },
  {
    id: '17',
    name: 'Составь слово. Вилы',
    link: 'https://learningapps.org/watch?v=pn0f2bnpj17',
  },
  {
    id: '18',
    name: 'Составь слово. Винт',
    link: 'https://learningapps.org/watch?v=poeqaq95t17',
  },
  {
    id: '19',
    name: 'Составь слово. Гиря',
    link: 'https://learningapps.org/watch?v=ps5wj3c4317',
  },
  {
    id: '20',
    name: 'Составь слово. Горы',
    link: 'https://learningapps.org/watch?v=p4qmay4b317',
  },
  {
    id: '21',
    name: 'Составь слово. Енот',
    link: 'https://learningapps.org/watch?v=pbb00seyt17',
  },
  {
    id: '22',
    name: 'Составь слово. Имя',
    link: 'https://learningapps.org/watch?v=pr9n3gkjj17',
  },
  {
    id: '23',
    name: 'Составь слово. Мост',
    link: 'https://learningapps.org/watch?v=pjaoqpmc317',
  }
];

class LearningTheAlphabet extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Учим алфавит'} data={data} link={GAMES_WITH_LETTERS_AND_SOUNDS}/>
    );
  }
}

export default LearningTheAlphabet;
