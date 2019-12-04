import React from 'react';
import PropTypes from 'prop-types';

import StyleStore from '../../../stores/style/style.store';
import AudioStore from '../../../stores/home/audio.store';

import AudioService from '../../../services/home/AudioService';

import AuthSuccess from '../../auth/AuthSuccess';
import RootComponent from '../../RootComponent';
import ContentAndUserInfo from '../../shared/ContentAndUserInfo';
import TableData from '../../shared/TableData';
import Jumbotron from '../../shared/Jumbotron';

import {
  Puzzles___,
  Favorite__heroes,
  Developing__the__speech,
  Learn_syllables,
  Learning_the_alphabet,
  Vowels_and_consonants,
  Living_and_inanimate_nature,
  The_world_around,
  My_motherland,
  Healthy_lifestyle,
  World_of_numbers,
  Learning_to_add_and_subtract,
  Learning_to_solve_problems,
  Learning_to_compare,
  The_World_of_Geometry,
  Learning_to_navigate_in_time,
  Puzzles_M,
  ART_,
  Learning_to_draw_,
  Musical_art_,
  Artistic_work_,
  Puzzles_B_,
  U_svete_pirodi,
  Narodnae_as,
  Razgadai_zag,
  Puzzles_Bel
} from '../../../constants/constants';

const data = [
  {
    id: '00',
    values: [
      {
        name: 'Раздел «В мире звуков и букв»',
        isColSpan: true
      }
    ],
  },
  {
    id: '1',
    values: [
      {
        name: 'Гласные и согласные',
        url: Vowels_and_consonants
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '2',
    values: [
      {
        name: ''
      },
      {
        name: 'Гласные звуки',
        link: 'https://learningapps.org/watch?v=pmfxo975k18',
        url: Vowels_and_consonants
      },
    ],
  },
  {
    id: '02',
    values: [
      {
        name: ''
      },
      {
        name: 'Гласные звуки - 2',
        link: 'https://learningapps.org/watch?v=paucst2dj18',
        url: Vowels_and_consonants
      },
    ],
  },
  {
    id: '3',
    values: [
      {
        name: ''
      },
      {
        name: 'Гласные и согласные звуки в словах',
        link: 'https://learningapps.org/watch?v=p519gq7xc18',
        url: Vowels_and_consonants
      },
    ],
  },
  {
    id: '4',
    values: [
      {
        name: ''
      },
      {
        name: 'Гласные и согласные буквы',
        link: 'https://learningapps.org/watch?v=pe8grije318',
        url: Vowels_and_consonants
      },
    ],
  },
  {
    id: '5',
    values: [
      {
        name: ''
      },
      {
        name: 'Где спрятался звук',
        link: 'https://learningapps.org/watch?v=pms3psizk18',
        url: Vowels_and_consonants
      },
    ],
  },
  {
    id: '6',
    values: [
      {
        name: ''
      },
      {
        name: 'Звуки [а] - [у]',
        link: 'https://learningapps.org/watch?v=p5mcomf5v18',
        url: Vowels_and_consonants
      },
    ],
  },
  {
    id: '7',
    values: [
      {
        name: ''
      },
      {
        name: `Звуки [б] - [п], [б'] - [п']`,
        link: 'https://learningapps.org/watch?v=pknx28eg218',
        url: Vowels_and_consonants
      },
    ],
  },
  {
    id: '8',
    values: [
      {
        name: ''
      },
      {
        name: `ЗВУКИ [в] - [ф], [в'] - [ф']`,
        link: 'https://learningapps.org/watch?v=p6v96pp7t18',
        url: Vowels_and_consonants
      },
    ],
  },
  {
    id: '9',
    values: [
      {
        name: ''
      },
      {
        name: `Звуки [г] - [к], [г'] - [к']`,
        link: 'https://learningapps.org/watch?v=p76s6hda318',
        url: Vowels_and_consonants
      },
    ],
  },
  {
    id: '10',
    values: [
      {
        name: ''
      },
      {
        name: `ЗВУКИ [д] - [т], [д'] - [т']`,
        link: 'https://learningapps.org/watch?v=p0c5m12va18',
        url: Vowels_and_consonants
      },
    ],
  },
  {
    id: '11',
    values: [
      {
        name: ''
      },
      {
        name: 'ЗВУКИ [ж] - [ш]',
        link: 'https://learningapps.org/watch?v=pg2wy86yn18',
        url: Vowels_and_consonants
      },
    ],
  },
  {
    id: '12',
    values: [
      {
        name: ''
      },
      {
        name: `ЗВУКИ [з] - [с], [з'] - [с']`,
        link: 'https://learningapps.org/watch?v=ph3wkgyvt18',
        url: Vowels_and_consonants
      },
    ],
  },
  {
    id: '13',
    values: [
      {
        name: ''
      },
      {
        name: `Звуки [л] - [л’]`,
        link: 'https://learningapps.org/watch?v=ph5beupx218',
        url: Vowels_and_consonants
      },
    ],
  },
  {
    id: '14',
    values: [
      {
        name: ''
      },
      {
        name: 'Твердые и мягкие звуки',
        link: 'https://learningapps.org/watch?v=p9pbyzpz318',
        url: Vowels_and_consonants
      },
    ],
  },
  {
    id: '15',
    values: [
      {
        name: ''
      },
      {
        name: 'Что за птица?',
        link: 'https://learningapps.org/watch?v=pugfudqdt18',
        url: Vowels_and_consonants
      },
    ],
  },
  {
    id: '16',
    values: [
      {
        name: 'Учим алфавит',
        url: Learning_the_alphabet
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '17',
    values: [
      {
        name: ''
      },
      {
        name: 'Учим алфавит – 1',
        link: 'https://learningapps.org/watch?v=ps8fq8c0c18',
        url: Learning_the_alphabet
      },
    ],
  },
  {
    id: '18',
    values: [
      {
        name: ''
      },
      {
        name: 'Учим алфавит – 2',
        link: 'https://learningapps.org/watch?v=p69s4na4318',
        url: Learning_the_alphabet
      },
    ],
  },
  {
    id: '19',
    values: [
      {
        name: ''
      },
      {
        name: 'Согласные буквы',
        link: 'https://learningapps.org/watch?v=p5rcjt0yk18',
        url: Learning_the_alphabet
      },
    ],
  },
  {
    id: '20',
    values: [
      {
        name: ''
      },
      {
        name: 'Составь слово. Аист',
        link: 'https://learningapps.org/watch?v=p2ksx2avj18',
        url: Learning_the_alphabet
      },
    ],
  },
  {
    id: '21',
    values: [
      {
        name: ''
      },
      {
        name: 'Составь слово. Бор',
        link: 'https://learningapps.org/watch?v=pbxcuhm7j17',
        url: Learning_the_alphabet
      },
    ],
  },
  {
    id: '22',
    values: [
      {
        name: ''
      },
      {
        name: 'Составь слово. Борщ',
        link: 'https://learningapps.org/watch?v=pv87wz6xc17',
        url: Learning_the_alphabet
      },
    ],
  },
  {
    id: '23',
    values: [
      {
        name: ''
      },
      {
        name: 'Составь слово. Век',
        link: 'https://learningapps.org/watch?v=panntdu1v17',
        url: Learning_the_alphabet
      },
    ],
  },
  {
    id: '24',
    values: [
      {
        name: ''
      },
      {
        name: 'Составь слово. Вилы',
        link: 'https://learningapps.org/watch?v=pn0f2bnpj17',
        url: Learning_the_alphabet
      },
    ],
  },
  {
    id: '25',
    values: [
      {
        name: ''
      },
      {
        name: 'Составь слово. Винт',
        link: 'https://learningapps.org/watch?v=poeqaq95t17',
        url: Learning_the_alphabet
      },
    ],
  },
  {
    id: '26',
    values: [
      {
        name: ''
      },
      {
        name: 'Составь слово. Гиря',
        link: 'https://learningapps.org/watch?v=ps5wj3c4317',
        url: Learning_the_alphabet
      },
    ],
  },
  {
    id: '27',
    values: [
      {
        name: ''
      },
      {
        name: 'Составь слово. Горы',
        link: 'https://learningapps.org/watch?v=p4qmay4b317',
        url: Learning_the_alphabet
      },
    ],
  },
  {
    id: '28',
    values: [
      {
        name: ''
      },
      {
        name: 'Составь слово. Енот',
        link: 'https://learningapps.org/watch?v=pbb00seyt17',
        url: Learning_the_alphabet
      },
    ],
  },
  {
    id: '29',
    values: [
      {
        name: ''
      },
      {
        name: 'Составь слово. Имя',
        link: 'https://learningapps.org/watch?v=pr9n3gkjj17',
        url: Learning_the_alphabet
      },
    ],
  },
  {
    id: '30',
    values: [
      {
        name: ''
      },
      {
        name: 'Составь слово. Мост',
        link: 'https://learningapps.org/watch?v=pjaoqpmc317',
        url: Learning_the_alphabet
      },
    ],
  },
  {
    id: '31',
    values: [
      {
        name: 'Учим слоги',
        url: Learn_syllables
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '32',
    values: [
      {
        name: ''
      },
      {
        name: 'Из какого слова слог',
        link: 'https://learningapps.org/watch?v=pqyguo9za18',
        url: Learn_syllables
      },
    ],
  },
  {
    id: '33',
    values: [
      {
        name: ''
      },
      {
        name: 'Слоги',
        link: 'https://learningapps.org/watch?v=pgm3723wn18',
        url: Learn_syllables
      },
    ],
  },
  {
    id: '34',
    values: [
      {
        name: ''
      },
      {
        name: 'Считаем слоги - 1',
        link: 'https://learningapps.org/watch?v=po6k3ak3k18',
        url: Learn_syllables
      },
    ],
  },
  {
    id: '35',
    values: [
      {
        name: ''
      },
      {
        name: 'Считаем слоги – 2',
        link: 'https://learningapps.org/watch?v=pv3rckwkc18',
        url: Learn_syllables
      },
    ],
  },
  {
    id: '36',
    values: [
      {
        name: ''
      },
      {
        name: 'Читаем слоги',
        link: 'https://learningapps.org/watch?v=pwwcpv50318',
        url: Learn_syllables
      },
    ],
  },
  {
    id: '37',
    values: [
      {
        name: 'Развиваем речь',
        url: Developing__the__speech
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '38',
    values: [
      {
        name: ''
      },
      {
        name: 'Кто? Что?',
        link: 'https://learningapps.org/watch?v=pozhsypnk18',
        url: Developing__the__speech
      },
    ],
  },
  {
    id: '39',
    values: [
      {
        name: ''
      },
      {
        name: 'Один - много',
        link: 'https://learningapps.org/watch?v=ps591ej1t18',
        url: Developing__the__speech
      },
    ],
  },
  {
    id: '40',
    values: [
      {
        name: ''
      },
      {
        name: 'Он, она, оно',
        link: 'https://learningapps.org/watch?v=pwqk0oxya18',
        url: Developing__the__speech
      },
    ],
  },
  {
    id: '41',
    values: [
      {
        name: ''
      },
      {
        name: 'Предлоги местоположения',
        link: 'https://learningapps.org/watch?v=p4ntyxbo318',
        url: Developing__the__speech
      },
    ],
  },
  {
    id: '42',
    values: [
      {
        name: ''
      },
      {
        name: 'Скажи наоборот',
        link: 'https://learningapps.org/watch?v=p94ua0xaa18',
        url: Developing__the__speech
      },
    ],
  },
  {
    id: '43',
    values: [
      {
        name: ''
      },
      {
        name: 'Весна пришла',
        link: 'https://learningapps.org/watch?v=p52i6gnsj18',
        url: Developing__the__speech
      },
    ],
  },
  {
    id: '44',
    values: [
      {
        name: ''
      },
      {
        name: 'Зимушка - зима',
        link: 'https://learningapps.org/watch?v=p06gs5xpn18',
        url: Developing__the__speech
      },
    ],
  },
  {
    id: '45',
    values: [
      {
        name: ''
      },
      {
        name: 'Рассказ по серии картинок',
        link: 'https://learningapps.org/watch?v=pqmthydjj18',
        url: Developing__the__speech
      },
    ],
  },
  {
    id: '46',
    values: [
      {
        name: 'Любимые герои',
        url: Favorite__heroes
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '47',
    values: [
      {
        name: ''
      },
      {
        name: 'Викторина «Золушка»',
        link: 'https://learningapps.org/watch?v=p54wu01ij18',
        url: Favorite__heroes
      },
    ],
  },
  {
    id: '48',
    values: [
      {
        name: ''
      },
      {
        name: 'В мире книг',
        link: 'https://learningapps.org/watch?v=ps5vkv0tj18',
        url: Favorite__heroes
      },
    ],
  },
  {
    id: '50',
    values: [
      {
        name: ''
      },
      {
        name: 'Герои мультфильмов',
        link: 'https://learningapps.org/watch?v=p0s12s42a18',
        url: Favorite__heroes
      },
    ],
  },
  {
    id: '51',
    values: [
      {
        name: ''
      },
      {
        name: 'Кто так говорит?',
        link: 'https://learningapps.org/watch?v=peaw0ee5a18',
        url: Favorite__heroes
      },
    ],
  },
  {
    id: '52',
    values: [
      {
        name: ''
      },
      {
        name: 'Любимые герои',
        link: 'https://learningapps.org/watch?v=pijkiutsk18',
        url: Favorite__heroes
      },
    ],
  },
  {
    id: '53',
    values: [
      {
        name: ''
      },
      {
        name: 'Найди маму',
        link: 'https://learningapps.org/watch?v=p1y80cara18',
        url: Favorite__heroes
      },
    ],
  },
  {
    id: '54',
    values: [
      {
        name: ''
      },
      {
        name: 'Потерянные вещи',
        link: 'https://learningapps.org/watch?v=p4ydq5sgj18',
        url: Favorite__heroes
      },
    ],
  },
  {
    id: '55',
    values: [
      {
        name: ''
      },
      {
        name: 'Сказочный беспорядок',
        link: 'https://learningapps.org/watch?v=pm0s2dy0k18',
        url: Favorite__heroes
      },
    ],
  },
  {
    id: '56',
    values: [
      {
        name: ''
      },
      {
        name: 'Сказочные герои',
        link: 'https://learningapps.org/watch?v=p1ox0xfzc18',
        url: Favorite__heroes
      },
    ],
  },
  {
    id: '57',
    values: [
      {
        name: ''
      },
      {
        name: 'Эдуард Успенский и его герои',
        link: 'https://learningapps.org/watch?v=pdbh263aa18',
        url: Favorite__heroes
      },
    ],
  },
  {
    id: '58',
    values: [
      {
        name: 'Ребусы',
        url: Puzzles___
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '59',
    values: [
      {
        name: ''
      },
      {
        name: 'Ребусы',
        link: 'https://learningapps.org/watch?v=p6nc7erva18',
        url: Puzzles___
      },
    ],
  },
  {
    id: '60',
    values: [
      {
        name: ''
      },
      {
        name: 'Разгадай ребусы',
        link: 'https://learningapps.org/watch?v=pw487mv8a18',
        url: Puzzles___
      },
    ],
  },
  {
    id: '61',
    values: [
      {
        name: ''
      },
      {
        name: 'Разгадай ребусы - 2',
        link: 'https://learningapps.org/watch?v=pi1k9wxzt18',
        url: Puzzles___
      },
    ],
  },
  {
    id: '62',
    values: [
      {
        name: ''
      },
      {
        name: 'Разгадай ребусы -3',
        link: 'https://learningapps.org/watch?v=p3m4e4xo518',
        url: Puzzles___
      },
    ],
  },
  {
    id: '63',
    values: [
      {
        name: ''
      },
      {
        name: 'Ква слова',
        link: 'https://learningapps.org/watch?v=p50tsbkok18',
        url: Puzzles___
      },
    ],
  },
  {
    id: '64',
    values: [
      {
        name: ''
      },
      {
        name: 'Найди слова',
        link: 'https://learningapps.org/watch?v=ptx44hsun18',
        url: Puzzles___
      },
    ],
  },
  {
    id: '65',
    values: [
      {
        name: ''
      },
      {
        name: 'Цепочка слов',
        link: 'https://learningapps.org/watch?v=p9r9ph55518',
        url: Puzzles___
      },
    ],
  },
  {
    id: '66',
    values: [
      {
        name: 'Раздел «Окружающий мир»',
        isColSpan: true
      }
    ],
  },
  {
    id: '67',
    values: [
      {
        name: 'Живая и неживая природа',
        url: Living_and_inanimate_nature
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '68',
    values: [
      {
        name: ''
      },
      {
        name: 'Природные явления',
        link: 'https://learningapps.org/watch?v=pikvov1vk18',
        url: Living_and_inanimate_nature
      },
    ],
  },
  {
    id: '69',
    values: [
      {
        name: ''
      },
      {
        name: 'Вершки и корешки',
        link: 'https://learningapps.org/watch?v=pzfqwtz7c18',
        url: Living_and_inanimate_nature
      },
    ],
  },
  {
    id: '70',
    values: [
      {
        name: ''
      },
      {
        name: 'Времена года',
        link: 'https://learningapps.org/watch?v=phyh0wb6318',
        url: Living_and_inanimate_nature
      },
    ],
  },
  {
    id: '71',
    values: [
      {
        name: ''
      },
      {
        name: 'Где растет?',
        link: 'https://learningapps.org/watch?v=px93xdvzj18',
        url: Living_and_inanimate_nature
      },
    ],
  },
  {
    id: '72',
    values: [
      {
        name: ''
      },
      {
        name: 'Гнезда',
        link: 'https://learningapps.org/watch?v=pnmbh7ks518',
        url: Living_and_inanimate_nature
      },
    ],
  },
  {
    id: '73',
    values: [
      {
        name: ''
      },
      {
        name: 'Дикие животные',
        link: 'https://learningapps.org/watch?v=pjqagcsk318',
        url: Living_and_inanimate_nature
      },
    ],
  },
  {
    id: '74',
    values: [
      {
        name: ''
      },
      {
        name: 'Дикие и домашние животные',
        link: 'https://learningapps.org/watch?v=pkpf7ra1c18',
        url: Living_and_inanimate_nature
      },
    ],
  },
  {
    id: '75',
    values: [
      {
        name: ''
      },
      {
        name: 'Животные зимой',
        link: 'https://learningapps.org/watch?v=pvthh0wak18',
        url: Living_and_inanimate_nature
      },
    ],
  },
  {
    id: '76',
    values: [
      {
        name: ''
      },
      {
        name: 'Кто чем питается',
        link: 'https://learningapps.org/watch?v=p2yxo7vrk18',
        url: Living_and_inanimate_nature
      },
    ],
  },
  {
    id: '77',
    values: [
      {
        name: ''
      },
      {
        name: 'Найди общее слово',
        link: 'https://learningapps.org/watch?v=puvjn0hjj18',
        url: Living_and_inanimate_nature
      },
    ],
  },
  {
    id: '78',
    values: [
      {
        name: ''
      },
      {
        name: 'Овощи и фрукты',
        link: 'https://learningapps.org/watch?v=p45dku7x518',
        url: Living_and_inanimate_nature
      },
    ],
  },
  {
    id: '79',
    values: [
      {
        name: ''
      },
      {
        name: 'Перелетные птицы',
        link: 'https://learningapps.org/watch?v=p1knd31h518',
        url: Living_and_inanimate_nature
      },
    ],
  },
  {
    id: '80',
    values: [
      {
        name: ''
      },
      {
        name: 'Приметы времен года',
        link: 'https://learningapps.org/watch?v=p85rcc04j18',
        url: Living_and_inanimate_nature
      },
    ],
  },
  {
    id: '81',
    values: [
      {
        name: ''
      },
      {
        name: 'С какой ветки детки',
        link: 'https://learningapps.org/watch?v=p9qmba3xj18',
        url: Living_and_inanimate_nature
      },
    ],
  },
  {
    id: '82',
    values: [
      {
        name: ''
      },
      {
        name: 'Ягоды и фрукты',
        link: 'https://learningapps.org/watch?v=prrvbcden18',
        url: Living_and_inanimate_nature
      },
    ],
  },
  {
    id: '83',
    values: [
      {
        name: ''
      },
      {
        name: '12 месяцев',
        link: 'https://learningapps.org/watch?v=po02mwez318',
        url: Living_and_inanimate_nature
      },
    ],
  },
  {
    id: '84',
    values: [
      {
        name: 'Мир вокруг',
        url: The_world_around
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '85',
    values: [
      {
        name: ''
      },
      {
        name: 'Кроссворд «Профессии»',
        link: 'https://learningapps.org/watch?v=p15y71x0k18',
        url: The_world_around
      },
    ],
  },
  {
    id: '86',
    values: [
      {
        name: ''
      },
      {
        name: 'Кто чем занимается',
        link: 'https://learningapps.org/watch?v=pq0nszakn18',
        url: The_world_around
      },
    ],
  },
  {
    id: '87',
    values: [
      {
        name: ''
      },
      {
        name: 'Кто шьет одежду',
        link: 'https://learningapps.org/watch?v=ptikehotj18',
        url: The_world_around
      },
    ],
  },
  {
    id: '88',
    values: [
      {
        name: ''
      },
      {
        name: 'Новогодний праздник',
        link: 'https://learningapps.org/watch?v=ps1f3vnq518',
        url: The_world_around
      },
    ],
  },
  {
    id: '89',
    values: [
      {
        name: ''
      },
      {
        name: 'Профессии',
        link: 'https://learningapps.org/watch?v=pijqowdrk18',
        url: The_world_around
      },
    ],
  },
  {
    id: '90',
    values: [
      {
        name: ''
      },
      {
        name: 'Сезонная одежда',
        link: 'https://learningapps.org/watch?v=pv3n5fh1t18',
        url: The_world_around
      },
    ],
  },
  {
    id: '91',
    values: [
      {
        name: ''
      },
      {
        name: 'Что для чего',
        link: 'https://learningapps.org/watch?v=p3ta3cuo318',
        url: The_world_around
      },
    ],
  },
  {
    id: '92',
    values: [
      {
        name: ''
      },
      {
        name: 'Что для чего - 2',
        url: The_world_around
      },
    ],
  },
  {
    id: '93',
    values: [
      {
        name: 'Моя Родина',
        url: My_motherland
      },
      {
        name: ''
      },
    ]
  },
  {
    id: '93_1',
    values: [
      {
        name: ''
      },
      {
        name: 'Белорусские спортсмены',
        link: 'https://learningapps.org/watch?v=p45opygvk18',
      url: My_motherland
      },
    ]
  },
  {
    id: '93_2',
    values: [
      {
        name: ''
      },
      {
        name: 'Герб Республики Беларусь',
        link: 'https://learningapps.org/watch?v=p576xmnzn18',
        url: My_motherland
      },
    ]
  },
  {
    id: '93_3',
    values: [
      {
        name: ''
      },
      {
        name: 'Мой город',
        link: 'https://learningapps.org/watch?v=p3fnvjvia18',
        url: My_motherland
      },
    ]
  },
  {
    id: '93_4',
    values: [
      {
        name: ''
      },
      {
        name: 'Моя Беларусь',
        link: 'https://learningapps.org/watch?v=pvdb28zkj18',
        url: My_motherland
      },
    ]
  },
  {
    id: '93_5',
    values: [
      {
        name: ''
      },
      {
        name: 'Моя Родина',
        link: 'https://learningapps.org/watch?v=pkvfd22sj18',
        url: My_motherland
      },
    ]
  },
  {
    id: '93_6',
    values: [
      {
        name: ''
      },
      {
        name: 'Моя страна',
        link: 'https://learningapps.org/watch?v=pecnm74pj18',
        url: My_motherland
      },
    ]
  },
  {
    id: '93_7',
    values: [
      {
        name: ''
      },
      {
        name: 'Национальные праздники',
        link: 'https://learningapps.org/watch?v=phqvsq5kn18',
        url: My_motherland
      },
    ]
  },
  {
    id: '93_8',
    values: [
      {
        name: ''
      },
      {
        name: 'Областные центры республики',
        link: 'https://learningapps.org/watch?v=p8weff0dk18',
        url: My_motherland
      },
    ]
  },
  {
    id: '93_9',
    values: [
      {
        name: ''
      },
      {
        name: 'Символы республики',
        link: 'https://learningapps.org/watch?v=pj7g49brt18',
        url: My_motherland
      },
    ]
  },
  {
    id: '93_11',
    values: [
      {
        name: 'Здоровый образ жизни',
        url: Healthy_lifestyle
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '94',
    values: [
      {
        name: ''
      },
      {
        name: 'Виды спорта',
        link: 'https://learningapps.org/watch?v=picj6wf2518',
        url: Healthy_lifestyle
      },
    ],
  },
  {
    id: '95',
    values: [
      {
        name: ''
      },
      {
        name: 'Занятия в свободное время',
        link: 'https://learningapps.org/watch?v=p6eovbg3j18',
        url: Healthy_lifestyle
      },
    ],
  },
  {
    id: '96',
    values: [
      {
        name: ''
      },
      {
        name: 'Личная гигиена',
        link: 'https://learningapps.org/watch?v=pobfeqx4518',
        url: Healthy_lifestyle
      },
    ],
  },
  {
    id: '97',
    values: [
      {
        name: ''
      },
      {
        name: 'Моем руки правильно',
        link: 'https://learningapps.org/watch?v=pobfeqx4518',
        url: Healthy_lifestyle
      },
    ],
  },
  {
    id: '98',
    values: [
      {
        name: ''
      },
      {
        name: 'Полезные и вредные продукты',
        link: 'https://learningapps.org/watch?v=v=p4kw4xj0518',
        url: Healthy_lifestyle
      },
    ],
  },
  {
    id: '99',
    values: [
      {
        name: ''
      },
      {
        name: 'Правила личной гигиены',
        link: 'https://learningapps.org/watch?v=pnodirbxa18',
        url: Healthy_lifestyle
      },
    ],
  },
  {
    id: '101',
    values: [
      {
        name: ''
      },
      {
        name: 'Предметы гигиены',
        link: 'https://learningapps.org/watch?v=pdvji2x4k18',
        url: Healthy_lifestyle
      },
    ],
  },
  {
    id: '102',
    values: [
      {
        name: ''
      },
      {
        name: 'Привычки',
        link: 'https://learningapps.org/watch?v=pgrk7zjpc18',
        url: Healthy_lifestyle
      },
    ],
  },
  {
    id: '103',
    values: [
      {
        name: ''
      },
      {
        name: 'Режим дня',
        link: 'https://learningapps.org/watch?v=pz9v1jaet18',
        url: Healthy_lifestyle
      },
    ],
  },
  {
    id: '104',
    values: [
      {
        name: ''
      },
      {
        name: 'Фрукты и овощи',
        link: 'https://learningapps.org/watch?v=pvgxxka6218',
        url: Healthy_lifestyle
      },
    ],
  },
  {
    id: '105',
    values: [
      {
        name: 'Раздел «В мире математики»',
        isColSpan: true
      },
    ],
  },
  {
    id: '106',
    values: [
      {
        name: 'Мир чисел',
        url: World_of_numbers
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '107',
    values: [
      {
        name: ''
      },
      {
        name: 'Состав числа 3',
        link: 'https://learningapps.org/watch?v=pa8349em218',
        url: World_of_numbers
      },
    ],
  },
  {
    id: '108',
    values: [
      {
        name: ''
      },
      {
        name: 'Состав числа 4',
        link: 'https://learningapps.org/watch?v=pkquzxn9c18',
        url: World_of_numbers
      },
    ],
  },
  {
    id: '109',
    values: [
      {
        name: ''
      },
      {
        name: 'Состав числа 5',
        link: 'https://learningapps.org/watch?v=p8nrduyta18',
        url: World_of_numbers
      },
    ],
  },
  {
    id: '110',
    values: [
      {
        name: ''
      },
      {
        name: 'Состав числа 6',
        link: 'https://learningapps.org/watch?v=pdadtiydk18',
        url: World_of_numbers
      },
    ],
  },
  {
    id: '111',
    values: [
      {
        name: ''
      },
      {
        name: 'Состав числа 7',
        link: 'https://learningapps.org/watch?v=puyjzqsha18',
        url: World_of_numbers
      },
    ],
  },
  {
    id: '112',
    values: [
      {
        name: ''
      },
      {
        name: 'Состав числа 8',
        link: 'https://learningapps.org/watch?v=pwgpozv5n18',
        url: World_of_numbers
      },
    ],
  },
  {
    id: '113',
    values: [
      {
        name: ''
      },
      {
        name: 'Состав числа 9',
        link: 'https://learningapps.org/watch?v=pgsgeai8j18',
        url: World_of_numbers
      },
    ],
  },
  {
    id: '114',
    values: [
      {
        name: ''
      },
      {
        name: 'Состав числа 10',
        link: 'https://learningapps.org/watch?v=pifpe1amk18',
        url: World_of_numbers
      },
    ],
  },
  {
    id: '115',
    values: [
      {
        name: ''
      },
      {
        name: 'Счет предметов',
        link: 'https://learningapps.org/watch?v=pfgs3v3x518',
        url: World_of_numbers
      },
    ],
  },
  {
    id: '116',
    values: [
      {
        name: ''
      },
      {
        name: 'Образуй число',
        link: 'https://learningapps.org/watch?v=pcpdifmfj18',
        url: World_of_numbers

      },
    ],
  },
  {
    id: '117',
    values: [
      {
        name: ''
      },
      {
        name: 'Порядок убывания',
        link: 'https://learningapps.org/watch?v=pib65fb7c18',
        url: World_of_numbers
      },
    ],
  },
  {
    id: '118',
    values: [
      {
        name: ''
      },
      {
        name: 'Расставь по порядку',
        link: 'https://learningapps.org/watch?v=ps9fud47318',
        url: World_of_numbers
      },
    ],
  },
  {
    id: '119',
    values: [
      {
        name: ''
      },
      {
        name: 'Четные и нечетные числа',
        link: 'https://learningapps.org/watch?v=pce9wu2mc17',
        url: World_of_numbers
      },
    ],
  },
  {
    id: '120',
    values: [
      {
        name: ''
      },
      {
        name: 'Числа 5 и 6',
        link: 'https://learningapps.org/watch?v=pdwy3xorj18',
        url: World_of_numbers
      },
    ],
  },
  {
    id: '121',
    values: [
      {
        name: ''
      },
      {
        name: 'Числа в пределах 5',
        link: 'https://learningapps.org/watch?v=p31cqkkgt18',
        url: World_of_numbers
      },
    ],
  },
  {
    id: '122',
    values: [
      {
        name: ''
      },
      {
        name: 'Числа первого десятка',
        link: 'https://learningapps.org/watch?v=pttn9aur318',
        url: World_of_numbers
      },
    ],
  },
  {
    id: '123',
    values: [
      {
        name: ''
      },
      {
        name: 'Число 10',
        link: 'https://learningapps.org/watch?v=pfhhfyyon18',
        url: World_of_numbers
      },
    ],
  },
  {
    id: '124',
    values: [
      {
        name: ''
      },
      {
        name: 'Числа от 10 до 20',
        link: 'https://learningapps.org/watch?v=pc630kask18',
        url: World_of_numbers
      },
    ],
  },
  {
    id: '125',
    values: [
      {
        name: ''
      },
      {
        name: 'Числовой ряд',
        link: 'https://learningapps.org/watch?v=pf470uayc18',
        url: World_of_numbers
      },
    ],
  },
  {
    id: '126',
    values: [
      {
        name: ''
      },
      {
        name: 'Числовой паровозик',
        link: 'https://learningapps.org/watch?v=pz032k37a18',
        url: World_of_numbers
      },
    ],
  },
  {
    id: '127',
    values: [
      {
        name: ''
      },
      {
        name: 'Цифры',
        link: 'https://learningapps.org/watch?v=p240bs2hc18',
        url: World_of_numbers
      },
    ],
  },
  {
    id: '128',
    values: [
      {
        name: 'Учимся складывать и вычитать',
        url: Learning_to_add_and_subtract
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '129',
    values: [
      {
        name: ''
      },
      {
        name: 'Викторина «Таблица сложения»',
        link: 'https://learningapps.org/watch?v=p2tzjrtk518',
        url: Learning_to_add_and_subtract
      },
    ],
  },
  {
    id: '130',
    values: [
      {
        name: ''
      },
      {
        name: 'Вычитание в пределах 10',
        link: 'https://learningapps.org/watch?v=pbc70zv9j18',
        url: Learning_to_add_and_subtract
      },
    ],
  },
  {
    id: '131',
    values: [
      {
        name: ''
      },
      {
        name: 'Вычитание в пределах 10 – 2',
        link: 'https://learningapps.org/watch?v=pmag8n0yj18',
        url: Learning_to_add_and_subtract
      },
    ],
  },
  {
    id: '132',
    values: [
      {
        name: ''
      },
      {
        name: 'Математический дождик',
        link: 'https://learningapps.org/watch?v=p71ptxmd218',
        url: Learning_to_add_and_subtract
      },
    ],
  },
  {
    id: '133',
    values: [
      {
        name: ''
      },
      {
        name: 'Математические цепочки',
        link: 'https://learningapps.org/watch?v=pgg76a7qk18',
        url: Learning_to_add_and_subtract
      },
    ],
  },
  {
    id: '134',
    values: [
      {
        name: ''
      },
      {
        name: 'Найди ошибки',
        link: 'https://learningapps.org/watch?v=phov3pw5318',
        url: Learning_to_add_and_subtract
      },
    ],
  },
  {
    id: '135',
    values: [
      {
        name: ''
      },
      {
        name: 'Примеры в картинках',
        link: 'https://learningapps.org/watch?v=pkz8ec4ia18',
        url: Learning_to_add_and_subtract
      },
    ],
  },
  {
    id: '136',
    values: [
      {
        name: ''
      },
      {
        name: 'Реши примеры',
        link: 'https://learningapps.org/watch?v=pdcnf4jyn18',
        url: Learning_to_add_and_subtract
      },
    ],
  },
  {
    id: '137',
    values: [
      {
        name: ''
      },
      {
        name: 'Реши примеры',
        link: 'https://learningapps.org/watch?v=phun1famk18',
        url: Learning_to_add_and_subtract
      },
    ],
  },
  {
    id: '138',
    values: [
      {
        name: ''
      },
      {
        name: 'Сложение в пределах 5',
        link: 'https://learningapps.org/watch?v=p2x34sbj317',
        url: Learning_to_add_and_subtract
      },
    ],
  },
  {
    id: '139',
    values: [
      {
        name: ''
      },
      {
        name: 'Сложение в пределах 10',
        link: 'https://learningapps.org/watch?v=pg6gsztoc18',
        url: Learning_to_add_and_subtract
      },
    ],
  },
  {
    id: '140',
    values: [
      {
        name: ''
      },
      {
        name: 'Сложение и вычитание в пределах 10',
        link: 'https://learningapps.org/watch?v=pum35wgmn18',
        url: Learning_to_add_and_subtract
      },
    ],
  },
  {
    id: '141',
    values: [
      {
        name: ''
      },
      {
        name: 'Составь примеры',
        link: 'https://learningapps.org/watch?v=pspsmr5pn18',
        url: Learning_to_add_and_subtract
      },
    ],
  },
  {
    id: '142',
    values: [
      {
        name: ''
      },
      {
        name: 'Счет в пределах первого десятка',
        link: 'https://learningapps.org/watch?v=p41ezu43n18',
        url: Learning_to_add_and_subtract
      },
    ],
  },
  {
    id: '143',
    values: [
      {
        name: ''
      },
      {
        name: 'Считаем в пределах 10',
        link: 'https://learningapps.org/watch?v=pbgxei21v18',
        url: Learning_to_add_and_subtract
      },
    ],
  },
  {
    id: '144',
    values: [
      {
        name: ''
      },
      {
        name: 'Счет цепочкой',
        link: 'https://learningapps.org/watch?v=p2sk9p5sk18',
        url: Learning_to_add_and_subtract
      },
    ],
  },
  {
    id: '145',
    values: [
      {
        name: 'Учимся решать задачи',
        url: Learning_to_solve_problems
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '146',
    values: [
      {
        name: ''
      },
      {
        name: 'Задачи',
        link: 'https://learningapps.org/watch?v=pokwp36uj18',
        url: Learning_to_solve_problems
      },
    ],
  },
  {
    id: '147',
    values: [
      {
        name: ''
      },
      {
        name: 'Задачи на вычитание',
        link: 'https://learningapps.org/watch?v=ptcy1oxqn18',
        url: Learning_to_solve_problems
      },
    ],
  },
  {
    id: '148',
    values: [
      {
        name: ''
      },
      {
        name: 'Задачи на сложение',
        link: 'https://learningapps.org/watch?v=ppj3zstg518',
        url: Learning_to_solve_problems
      },
    ],
  },
  {
    id: '149',
    values: [
      {
        name: ''
      },
      {
        name: 'Логические задачи',
        link: 'https://learningapps.org/watch?v=pccw4788k18',
        url: Learning_to_solve_problems
      },
    ],
  },
  {
    id: '150',
    values: [
      {
        name: ''
      },
      {
        name: 'Составь и реши задачу',
        link: 'https://learningapps.org/watch?v=pzgwg1coj18',
        url: Learning_to_solve_problems
      },
    ],
  },
  {
    id: '151',
    values: [
      {
        name: 'Учимся сравнивать',
        url: Learning_to_compare
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '152',
    values: [
      {
        name: ''
      },
      {
        name: 'Больше, меньше и равно',
        link: 'https://learningapps.org/watch?v=pzyqo2yc518',
        url: Learning_to_compare
      },
    ],
  },
  {
    id: '153',
    values: [
      {
        name: ''
      },
      {
        name: 'Больше, меньше и равно - 2',
        link: 'https://learningapps.org/watch?v=pocr2o0mc18',
        url: Learning_to_compare
      },
    ],
  },
  {
    id: '154',
    values: [
      {
        name: ''
      },
      {
        name: 'Сравнение количества',
        link: 'https://learningapps.org/watch?v=ppmtuo93518',
        url: Learning_to_compare
      },
    ],
  },
  {
    id: '155',
    values: [
      {
        name: ''
      },
      {
        name: 'Сравнение количества предметов',
        link: 'https://learningapps.org/watch?v=pq1b3j6g318',
        url: Learning_to_compare
      },
    ],
  },
  {
    id: '156',
    values: [
      {
        name: ''
      },
      {
        name: 'Сравнение предметов',
        link: 'https://learningapps.org/watch?v=p6k76onfa18',
        url: Learning_to_compare
      },
    ],
  },
  {
    id: '157',
    values: [
      {
        name: ''
      },
      {
        name: 'Сравнение чисел',
        link: 'https://learningapps.org/watch?v=pska5n9ut18',
        url: Learning_to_compare
      },
    ],
  },
  {
    id: '158',
    values: [
      {
        name: ''
      },
      {
        name: 'Сравнение чисел - 2',
        link: 'https://learningapps.org/watch?v=pzec8uys218',
        url: Learning_to_compare
      },
    ],
  },
  {
    id: '159',
    values: [
      {
        name: ''
      },
      {
        name: 'Сравни числа',
        link: 'https://learningapps.org/watch?v=ppu04p2jt18',
        url: Learning_to_compare
      },
    ],
  },
  {
    id: '160',
    values: [
      {
        name: 'Мир геометрии',
        url: The_World_of_Geometry
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '161',
    values: [
      {
        name: ''
      },
      {
        name: 'Геометрические фигуры',
        link: 'https://learningapps.org/watch?v=pjf3mxk2518',
        url: The_World_of_Geometry
      },
    ],
  },
  {
    id: '162',
    values: [
      {
        name: ''
      },
      {
        name: 'Загадки о геометрических фигурах',
        link: 'https://learningapps.org/watch?v=pun8tjihc18',
        url: The_World_of_Geometry
      },
    ],
  },
  {
    id: '163',
    values: [
      {
        name: ''
      },
      {
        name: 'Заплатки',
        link: 'https://learningapps.org/watch?v=pwk67wjf318',
        url: The_World_of_Geometry
      },
    ],
  },
  {
    id: '164',
    values: [
      {
        name: ''
      },
      {
        name: 'Найди пары. Формы',
        link: 'https://learningapps.org/watch?v=pem6prhda18',
        url: The_World_of_Geometry
      },
    ],
  },
  {
    id: '165',
    values: [
      {
        name: ''
      },
      {
        name: 'Найди пары. Цвет',
        link: 'https://learningapps.org/watch?v=p54y6x9ua18',
        url: The_World_of_Geometry
      },
    ],
  },
  {
    id: '166',
    values: [
      {
        name: ''
      },
      {
        name: 'На что похоже',
        link: 'https://learningapps.org/watch?v=pti1djr5t18',
        url: The_World_of_Geometry
      },
    ],
  },
  {
    id: '167',
    values: [
      {
        name: ''
      },
      {
        name: 'Счет фигур',
        link: 'https://learningapps.org/watch?v=p590w89st18',
        url: The_World_of_Geometry
      },
    ],
  },
  {
    id: '168',
    values: [
      {
        name: 'Учимся ориентироваться во времени',
        url: Learning_to_navigate_in_time
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '169',
    values: [
      {
        name: ''
      },
      {
        name: 'Время суток',
        link: 'https://learningapps.org/watch?v=pen5rmxec18',
        url: Learning_to_navigate_in_time
      },
    ],
  },
  {
    id: '170',
    values: [
      {
        name: ''
      },
      {
        name: 'Дни недели',
        link: 'https://learningapps.org/watch?v=p6s76u9ka18',
        url: Learning_to_navigate_in_time
      },
    ],
  },
  {
    id: '171',
    values: [
      {
        name: ''
      },
      {
        name: 'Поры года',
        link: 'https://learningapps.org/watch?v=p36wsmktk18',
        url: Learning_to_navigate_in_time
      },
    ],
  },
  {
    id: '172',
    values: [
      {
        name: 'Ребусы',
        url: Puzzles_M
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '173',
    values: [
      {
        name: ''
      },
      {
        name: 'Логический квадрат',
        link: 'https://learningapps.org/watch?v=pm53bfn9t18',
        url: Puzzles_M
      },
    ],
  },
  {
    id: '174',
    values: [
      {
        name: ''
      },
      {
        name: 'Разгадай ребусы',
        link: 'https://learningapps.org/watch?v=pd8g2vgo518',
        url: Puzzles_M
      },
    ],
  },
  {
    id: '175',
    values: [
      {
        name: ''
      },
      {
        name: 'Разгадай ребусы - 2',
        link: 'https://learningapps.org/watch?v=pdo12n22n18',
        url: Puzzles_M
      },
    ],
  },
  {
    id: '176',
    values: [
      {
        name: 'Раздел «В мире прекрасного»',
        isColSpan: true
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '177',
    values: [
      {
        name: 'Изобразительное искусство',
        url: ART_
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '178',
    values: [
      {
        name: ''
      },
      {
        name: 'Какого цвета',
        link: 'https://learningapps.org/watch?v=pn2symj9k18',
        url: ART_
      },
    ],
  },
  {
    id: '179',
    values: [
      {
        name: ''
      },
      {
        name: 'Какого цвета?',
        link: 'https://learningapps.org/watch?v=pa1fe9sdn18',
        url: ART_
      },
    ],
  },
  {
    id: '180',
    values: [
      {
        name: ''
      },
      {
        name: 'Определи цвет',
        link: 'https://learningapps.org/watch?v=pa50or1bt18',
        url: ART_
      },
    ],
  },
  {
    id: '181',
    values: [
      {
        name: ''
      },
      {
        name: 'Силуэты',
        link: 'https://learningapps.org/watch?v=p16efim9t18',
        url: ART_
      },
    ],
  },
  {
    id: '182',
    values: [
      {
        name: ''
      },
      {
        name: 'Цветик-семицветик',
        link: 'https://learningapps.org/watch?v=pzixyu2gj18',
        url: ART_
      },
    ],
  },
  {
    id: '183',
    values: [
      {
        name: 'Учимся рисовать',
        url: Learning_to_draw_
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '184',
    values: [
      {
        name: ''
      },
      {
        name: 'Учимся рисовать. Белка',
        link: 'https://learningapps.org/watch?v=p8bxnodua18',
        url: Learning_to_draw_
      },
    ],
  },
  {
    id: '185',
    values: [
      {
        name: ''
      },
      {
        name: 'Учимся рисовать. Девочка',
        link: 'https://learningapps.org/watch?v=pez1uiev318',
        url: Learning_to_draw_
      },
    ],
  },
  {
    id: '186',
    values: [
      {
        name: ''
      },
      {
        name: 'Учимся рисовать. Зимний пейзаж',
        link: 'https://learningapps.org/watch?v=p23g4fti318',
        url: Learning_to_draw_
      },
    ],
  },
  {
    id: '187',
    values: [
      {
        name: ''
      },
      {
        name: 'Учимся рисовать. Золушка',
        link: 'https://learningapps.org/watch?v=p3pqbo0jk18',
        url: Learning_to_draw_
      },
    ],
  },
  {
    id: '188',
    values: [
      {
        name: ''
      },
      {
        name: 'Учимся рисовать. Кошка',
        link: 'https://learningapps.org/watch?v=pus0q67r318',
        url: Learning_to_draw_
      },
    ],
  },
  {
    id: '189',
    values: [
      {
        name: ''
      },
      {
        name: 'Учимся рисовать. Кролик',
        link: 'https://learningapps.org/watch?v=pht7fdrvt18',
        url: Learning_to_draw_
      },
    ],
  },
  {
    id: '190',
    values: [
      {
        name: ''
      },
      {
        name: 'Учимся рисовать. Кружка с чаем',
        link: 'https://learningapps.org/watch?v=pc8xi44bc18',
        url: Learning_to_draw_
      },
    ],
  },
  {
    id: '191',
    values: [
      {
        name: ''
      },
      {
        name: 'Учится рисовать. Мальчик',
        link: 'https://learningapps.org/watch?v=p3upninsn18',
        url: Learning_to_draw_
      },
    ],
  },
  {
    id: '192',
    values: [
      {
        name: ''
      },
      {
        name: 'Учимся рисовать. Машина',
        link: 'https://learningapps.org/watch?v=p3787qm3318',
        url: Learning_to_draw_
      },
    ],
  },
  {
    id: '193',
    values: [
      {
        name: ''
      },
      {
        name: 'Учимся рисовать. Портрет',
        link: 'https://learningapps.org/watch?v=pkrn53rjt18',
        url: Learning_to_draw_
      },
    ],
  },
  {
    id: '194',
    values: [
      {
        name: ''
      },
      {
        name: 'Учимся рисовать. Собака',
        link: 'https://learningapps.org/watch?v=puf361xaj18',
        url: Learning_to_draw_
      },
    ],
  },
  {
    id: '195',
    values: [
      {
        name: ''
      },
      {
        name: 'Учимся рисовать. Танк',
        link: 'https://learningapps.org/watch?v=ph7ouuubt18',
        url: Learning_to_draw_
      },
    ],
  },
  {
    id: '196',
    values: [
      {
        name: ''
      },
      {
        name: 'Учимся рисовать. Цыпленок',
        link: 'https://learningapps.org/watch?v=pad0vvxn318',
        url: Learning_to_draw_
      },
    ],
  },
  {
    id: '197',
    values: [
      {
        name: 'Музыкальное искусство',
        url: Musical_art_
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '198',
    values: [
      {
        name: ''
      },
      {
        name: 'Кто в чем танцует',
        link: 'https://learningapps.org/watch?v=pfpwzheq518',
        url: Musical_art_
      },
    ],
  },
  {
    id: '199',
    values: [
      {
        name: ''
      },
      {
        name: 'Кроссворд «Музыкальные инструменты»',
        link: 'https://learningapps.org/watch?v=ppyxapf6318',
        url: Musical_art_
      },
    ],
  },
  {
    id: '200',
    values: [
      {
        name: ''
      },
      {
        name: 'Мир танцев',
        link: 'https://learningapps.org/watch?v=pnh4c2eij18',
        url: Musical_art_
      },
    ],
  },
  {
    id: '201',
    values: [
      {
        name: ''
      },
      {
        name: 'Народные инструменты',
        link: 'https://learningapps.org/watch?v=pk3wnisna18',
        url: Musical_art_
      },
    ],
  },
  {
    id: '202',
    values: [
      {
        name: ''
      },
      {
        name: 'Парные картинки «Музыкальные инструменты»',
        link: 'https://learningapps.org/watch?v=pffhork3n18',
        url: Musical_art_
      },
    ],
  },
  {
    id: '203',
    values: [
      {
        name: ''
      },
      {
        name: 'Музыкальные инструменты',
        link: 'https://learningapps.org/watch?v=pnsa36fra18',
        url: Musical_art_
      },
    ],
  },
  {
    id: '204',
    values: [
      {
        name: ''
      },
      {
        name: 'Угадай мультфильм',
        link: 'https://learningapps.org/watch?v=pgmpuz04t18',
        url: Musical_art_
      },
    ],
  },
  {
    id: '205',
    values: [
      {
        name: 'Художественный труд',
        url: Artistic_work_
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '206',
    values: [
      {
        name: ''
      },
      {
        name: 'Что для чего',
        link: 'https://learningapps.org/watch?v=px5iwsbb218',
        url: Artistic_work_
      },
    ],
  },
  {
    id: '207',
    values: [
      {
        name: ''
      },
      {
        name: 'Что из чего?',
        link: 'https://learningapps.org/watch?v=py9xp2ybc18',
        url: Artistic_work_
      },
    ],
  },
  {
    id: '208',
    values: [
      {
        name: 'Ребусы',
        url: Puzzles_B_
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '209',
    values: [
      {
        name: ''
      },
      {
        name: 'Разгадай ребусы',
        link: 'https://learningapps.org/watch?v=p846qantk18',
        url: Puzzles_B_
      },
    ],
  },
  {
    id: '210',
    values: [
      {
        name: ''
      },
      {
        name: 'Разгадай ребусы - 2',
        link: 'https://learningapps.org/watch?v=pqr8nmmrt18',
        url: Puzzles_B_
      },
    ],
  },
  {
    id: '211',
    values: [
      {
        name: 'Раздзел «Размаўляем па-беларуску»',
        isColSpan: true
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '212',
    values: [
      {
        name: 'У свеце прыроды',
        url: U_svete_pirodi
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '213',
    values: [
      {
        name: ''
      },
      {
        name: 'Кветкі',
        link: 'https://learningapps.org/watch?v=penvcf8ka18',
        url: U_svete_pirodi
      },
    ],
  },
  {
    id: '214',
    values: [
      {
        name: ''
      },
      {
        name: 'Жывёлы',
        link: 'https://learningapps.org/watch?v=pgak2k81n18',
        url: U_svete_pirodi
      },
    ],
  },
  {
    id: '215',
    values: [
      {
        name: ''
      },
      {
        name: `Надвор’е, з’явы прыроды`,
        link: 'https://learningapps.org/watch?v=pvpc046tv18',
        url: U_svete_pirodi
      },
    ],
  },
  {
    id: '216',
    values: [
      {
        name: ''
      },
      {
        name: 'Птушкі',
        link: 'https://learningapps.org/watch?v=p9qtjkrb218',
        url: U_svete_pirodi
      },
    ],
  },
  {
    id: '217',
    values: [
      {
        name: 'Навакольнае асяроддзе',
        url: Narodnae_as
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '218',
    values: [
      {
        name: ''
      },
      {
        name: 'Абутак',
        link: 'https://learningapps.org/watch?v=ppdmg9tg518',
        url: Narodnae_as
      },
    ],
  },
  {
    id: '219',
    values: [
      {
        name: ''
      },
      {
        name: 'Адзенне',
        link: 'https://learningapps.org/watch?v=psiffactj18',
        url: Narodnae_as
      },
    ],
  },
  {
    id: '220',
    values: [
      {
        name: ''
      },
      {
        name: 'Асабістая гігіена',
        link: 'https://learningapps.org/watch?v=pbh8e6nv518',
        url: Narodnae_as
      },
    ],
  },
  {
    id: '221',
    values: [
      {
        name: ''
      },
      {
        name: 'Вучэбныя заняткі',
        link: 'https://learningapps.org/watch?v=pux56g7pa18',
        url: Narodnae_as
      },
    ],
  },
  {
    id: '222',
    values: [
      {
        name: ''
      },
      {
        name: 'Вучэбныя рэчы',
        link: 'https://learningapps.org/watch?v=phg9amkk318',
        url: Narodnae_as
      },
    ],
  },
  {
    id: '223',
    values: [
      {
        name: ''
      },
      {
        name: 'Гуляем разам',
        link: 'https://learningapps.org/watch?v=p0izb07ac18',
        url: Narodnae_as
      },
    ],
  },
  {
    id: '224',
    values: [
      {
        name: ''
      },
      {
        name: 'Знайдзі пару. 12 месяцаў',
        link: 'https://learningapps.org/watch?v=pdx137tua18',
        url: Narodnae_as
      },
    ],
  },
  {
    id: '225',
    values: [
      {
        name: ''
      },
      {
        name: 'На пошце',
        link: 'https://learningapps.org/watch?v=pdyeyjowc18',
        url: Narodnae_as
      },
    ],
  },
  {
    id: '226',
    values: [
      {
        name: ''
      },
      {
        name: 'Мая кватэра',
        link: 'https://learningapps.org/watch?v=p9j0ii7jk18',
        url: Narodnae_as
      },
    ],
  },
  {
    id: '227',
    values: [
      {
        name: ''
      },
      {
        name: 'Тыдзень',
        link: 'https://learningapps.org/watch?v=p3jg7670518',
        url: Narodnae_as
      },
    ],
  },
  {
    id: '228',
    values: [
      {
        name: ''
      },
      {
        name: 'У краме',
        link: 'https://learningapps.org/watch?v=p9213yck318',
        url: Narodnae_as
      },
    ],
  },
  {
    id: '229',
    values: [
      {
        name: ''
      },
      {
        name: 'Школа',
        link: 'https://learningapps.org/watch?v=pso5b2ohc18',
        url: Narodnae_as
      },
    ],
  },
  {
    id: '230',
    values: [
      {
        name: ''
      },
      {
        name: '12 месяцаў',
        link: 'https://learningapps.org/watch?v=pu4pgy1q218',
        url: Narodnae_as
      },
    ],
  },
  {
    id: '231',
    values: [
      {
        name: 'Разгадай загадкі',
        url: Razgadai_zag
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '232',
    values: [
      {
        name: ''
      },
      {
        name: 'Разгадай загадкі. Жывелы',
        link: 'https://learningapps.org/watch?v=p810ve1ct18',
        url: Razgadai_zag
      },
    ],
  },
  {
    id: '233',
    values: [
      {
        name: ''
      },
      {
        name: 'Разгадай загадкі. Прырода',
        link: 'https://learningapps.org/watch?v=pabfza5ga18',
        url: Razgadai_zag
      },
    ],
  },
  {
    id: '234',
    values: [
      {
        name: ''
      },
      {
        name: 'Разгадай загадкі. Птушкі',
        link: 'https://learningapps.org/watch?v=pumvomnut18',
        url: Razgadai_zag
      },
    ],
  },
  {
    id: '235',
    values: [
      {
        name: ''
      },
      {
        name: 'Разгадай загадкі. Расліны',
        link: 'https://learningapps.org/watch?v=pe670ji6k18',
        url: Razgadai_zag
      },
    ],
  },
  {
    id: '236',
    values: [
      {
        name: ''
      },
      {
        name: 'Разгадай загадкі. Рэчы',
        link: 'https://learningapps.org/watch?v=p56o82ms518',
        url: Razgadai_zag
      },
    ],
  },
  {
    id: '237',
    values: [
      {
        name: ''
      },
      {
        name: 'Разгадай загадкі.Транспарт',
        link: 'https://learningapps.org/watch?v=p930mb2vj18',
        url: Razgadai_zag
      },
    ],
  },
  {
    id: '238',
    values: [
      {
        name: 'Рэбусы',
        url: Puzzles_Bel
      },
      {
        name: ''
      },
    ],
  },
  {
    id: '239',
    values: [
      {
        name: ''
      },
      {
        name: 'Знайдзі словы',
        link: 'https://learningapps.org/watch?v=pzw3a4h6a18',
        url: Puzzles_Bel
      },
    ],
  }
];

class GamesCatolog extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = this.getCurrentState();
  }

  getCurrentState() {
    return {
      defaultColor: StyleStore.getDefaultColor(),
      backgroundImage: StyleStore.getBackgroundImage()
    };
  }

  onChange = () => {
    this.setState(this.getCurrentState());
  };

  componentDidMount() {
    StyleStore.addChangeListener(this.onChange);
    AudioStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    StyleStore.removeChangeListener(this.onChange);
    AudioStore.removeChangeListener(this.onChange);
  }

  back(){
    AudioService.cleanUrl();
  }

  render() {
    const {backgroundImage, defaultColor, url} = this.state;
    const style = backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {backgroundColor: defaultColor};
    const content = (
      <AuthSuccess>
        <div>
          <Jumbotron style={style}>
            <TableData data={data} ths={[]} title={'Каталог игр'}/>
          </Jumbotron>
        </div>
      </AuthSuccess>
    );
    return (
      <RootComponent>
        <ContentAndUserInfo content={content}/>
      </RootComponent>
    );
  }
}

GamesCatolog.propTypes = {};

export default GamesCatolog;
