import React from 'react';

import BaseTestComponent from '../../shared/BaseTestComponent';

import {GAMES_WITH_LETTERS_AND_SOUNDS} from '../../../constants/constants';

const data = [
  {
    id: '27',
    name: 'Кто? Что?',
    link: 'https://learningapps.org/watch?v=pozhsypnk18',
  },
  {
    id: '55',
    name: 'Один - много',
    link: 'https://learningapps.org/watch?v=ps591ej1t18',
  },
  {
    id: '56',
    name: 'Он, она, оно',
    link: 'https://learningapps.org/watch?v=pwqk0oxya18',
  },
  {
    id: '25',
    name: 'Предлоги местоположения',
    link: 'https://learningapps.org/watch?v=p4ntyxbo318',
  },
  {
    id: '26',
    name: 'Скажи наоборот',
    link: 'https://learningapps.org/watch?v=p94ua0xaa18',
  },
  {
    id: '29',
    name: 'Весна пришла',
    link: 'https://learningapps.org/watch?v=p52i6gnsj18',
  },
  {
    id: '28',
    name: 'Зимушка - зима',
    link: 'https://learningapps.org/watch?v=p06gs5xpn18',
  },
  {
    id: '41',
    name: 'Рассказ по серии картинок',
    link: 'https://learningapps.org/watch?v=pqmthydjj18',
  }
];

class DevelopingTheSpeech extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Развиваем речь'} data={data} link={GAMES_WITH_LETTERS_AND_SOUNDS}/>
    );
  }
}

export default DevelopingTheSpeech;
