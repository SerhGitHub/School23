import React from 'react';
import { Link } from 'react-router';

import AuthSuccess from '../../auth/AuthSuccess';
import RootComponent from '../../RootComponent';
import ContentAndUserInfo from '../../shared/ContentAndUserInfo';
import Jumbotron from '../../shared/Jumbotron';
import LinksTable from '../../shared/LinksTable';

import {MENU, SOUNDS_LETTERS, GAMES_WITH_LETTERS_AND_SOUNDS} from '../../../constants/constants';

const data = [
  {
    id: '1',
    name: 'Гласные и согласные буквы',
    link: 'https://learningapps.org/watch?v=pe8grije318',
  },
  {
    id: '2',
    name: 'Гласные и согласные звуки в словах',
    link: 'https://learningapps.org/watch?v=p519gq7xc18',
  },
  {
    id: '3',
    name: 'Твердые и мягкие звуки',
    link: 'https://learningapps.org/watch?v=p9pbyzpz318',
  },
  {
    id: '4',
    name: 'Звуки [а] - [у]',
    link: 'https://learningapps.org/watch?v=p5mcomf5v18',
  },
  {
    id: '5',
    name: 'Звуки [л] - [л’]',
    link: 'https://learningapps.org/watch?v=ph5beupx218',
  },
  {
    id: '6',
    name: `Звуки [г] - [к], [г'] - [к']`,
    link: 'https://learningapps.org/watch?v=p76s6hda318',
  },
  {
    id: '7',
    name: `Звуки [б] - [п], [б'] - [п']`,
    link: 'https://learningapps.org/watch?v=pknx28eg218',
  },
  {
    id: '8',
    name: 'Где спрятался звук',
    link: 'https://learningapps.org/watch?v=pms3psizk18',
  },
  {
    id: '9',
    name: 'Считаем слоги-1',
    link: 'https://learningapps.org/watch?v=po6k3ak3k18',
  },
  {
    id: '10',
    name: 'Считаем слоги – 2',
    link: 'https://learningapps.org/watch?v=pv3rckwkc18',
  },
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
  },
  {
    id: '24',
    name: 'Из какого слова слог',
    link: 'https://learningapps.org/watch?v=pqyguo9za18',
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
    id: '27',
    name: 'Кто? Что?',
    link: 'https://learningapps.org/watch?v=pozhsypnk18',
  },
  {
    id: '28',
    name: 'Зимушка-зима',
    link: 'https://learningapps.org/watch?v=p06gs5xpn18',
  },
  {
    id: '29',
    name: 'Весна пришла',
    link: 'https://learningapps.org/watch?v=p52i6gnsj18',
  },
  {
    id: '30',
    name: 'Эдуард Успенский и его герои',
    link: 'https://learningapps.org/watch?v=pdbh263aa18',
  },
  {
    id: '31',
    name: 'Кто так говорит?',
    link: 'https://learningapps.org/watch?v=peaw0ee5a18',
  },
  {
    id: '32',
    name: 'Сказочные герои',
    link: 'https://learningapps.org/watch?v=p1ox0xfzc18',
  },
  {
    id: '33',
    name: 'Любимые герои',
    link: 'https://learningapps.org/watch?v=pijkiutsk18',
  },
  {
    id: '34',
    name: 'Сказочный беспорядок',
    link: 'https://learningapps.org/watch?v=pm0s2dy0k18',
  },
  {
    id: '35',
    name: 'Викторина «Золушка»',
    link: 'https://learningapps.org/watch?v=p54wu01ij18',
  },
  {
    id: '36',
    name: 'Потерянные вещи',
    link: 'https://learningapps.org/watch?v=p4ydq5sgj18',
  },
  {
    id: '37',
    name: 'Найди маму',
    link: 'https://learningapps.org/watch?v=p1y80cara18',
  },
  {
    id: '38',
    name: 'В  мире книг ',
    link: 'https://learningapps.org/watch?v=ps5vkv0tj18',
  },
  {
    id: '39',
    name: 'Ква слова',
    link: 'https://learningapps.org/watch?v=p50tsbkok18',
  },
  {
    id: '40',
    name: 'Герои мультфильмов',
    link: 'https://learningapps.org/watch?v=p0s12s42a18',
  },
  {
    id: '41',
    name: 'Рассказ по серии картинок',
    link: 'https://learningapps.org/watch?v=pqmthydjj18',
  },
  {
    id: '42',
    name: 'Разгадай ребусы',
    link: 'https://learningapps.org/watch?v=pw487mv8a18',
  },
  {
    id: '43',
    name: 'Разгадай ребусы - 2',
    link: 'https://learningapps.org/watch?v=pi1k9wxzt18',
  },
  {
    id: '44',
    name: 'Разгадай ребусы - 3',
    link: 'https://learningapps.org/watch?v=p3m4e4xo518',
  },
  {
    id: '45',
    name: `ЗВУКИ [Д] - [Т], [Д'] - [Т']`,
    link: 'https://learningapps.org/watch?v=p0c5m12va18',
  },
  {
    id: '46',
    name: 'ЗВУКИ [Ж] - [Ш]',
    link: 'https://learningapps.org/watch?v=pg2wy86yn18',
  },
  {
    id: '47',
    name: `ЗВУКИ [З] - [С], [З'] - [С']`,
    link: 'https://learningapps.org/watch?v=ph3wkgyvt18',
  },
  {
    id: '48',
    name: 'Гласные звуки',
    link: 'https://learningapps.org/watch?v=pmfxo975k18',
  },
  {
    id: '49',
    name: `ЗВУКИ [В] - [Ф], [В'] - [Ф']`,
    link: 'https://learningapps.org/watch?v=p6v96pp7t18',
  },
  {
    id: '50',
    name: 'Гласные звуки - 2',
    link: 'https://learningapps.org/watch?v=paucst2dj18',
  },
  {
    id: '51',
    name: 'Что за птица?',
    link: 'https://learningapps.org/watch?v=pugfudqdt18',
  },
  {
    id: '52',
    name: 'Согласные буквы',
    link: 'https://learningapps.org/watch?v=p5rcjt0yk18',
  },
  {
    id: '53',
    name: 'Слоги',
    link: 'https://learningapps.org/watch?v=pgm3723wn18',
  },
  {
    id: '54',
    name: 'Читаем слоги',
    link: 'https://learningapps.org/watch?v=pwwcpv50318',
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
    id: '57',
    name: 'Ребусы',
    link: 'https://learningapps.org/watch?v=p6nc7erva18',
  },
  {
    id: '58',
    name: 'Найди слова',
    link: 'https://learningapps.org/watch?v=ptx44hsun18',
  },
  {
    id: '59',
    name: 'Цепочка слов',
    link: 'https://learningapps.org/watch?v=p9r9ph55518',
  }
];

class GamesWithLetters extends React.Component {

  getData(){
    let index = 0;
    let isFound = false;
    let data = [];
    while(index < MENU.length && !isFound){
      if(MENU[index].id === SOUNDS_LETTERS){
        let index_ = 0;
        while(index_ < MENU[index].children.length && !isFound){
          if(MENU[index].children[index_].id === GAMES_WITH_LETTERS_AND_SOUNDS){
            data = MENU[index].children[index_].children;
            isFound = true;
          }
          index_++;
        }
      }
      index++;
    }
    return data;
  }

  render() {
    const data = this.getData();
    const content = (
      <AuthSuccess>
        <Jumbotron>
          <div className='back-button' style={{right: '25px', paddingTop: '5px'}}>
            <Link to={`/${SOUNDS_LETTERS}`}><img src='back.png' width={60}/></Link>
          </div>
          <LinksTable data={data} ths={['Игры с буквами и звуками']}/>
        </Jumbotron>
      </AuthSuccess>
    );
    return (
      <RootComponent>
        <ContentAndUserInfo content={content}/>
      </RootComponent>
    );
  }
}

export default GamesWithLetters;
