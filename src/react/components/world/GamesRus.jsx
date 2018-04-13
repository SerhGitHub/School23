import React from 'react';

import BaseTestComponent from '../shared/BaseTestComponent';

const data = [
  {
    id: '1',
    name: 'Природные явления',
    link: 'https://learningapps.org/watch?v=pikvov1vk18',
  },
  {
    id: '2',
    name: 'Ягоды и фрукты ',
    link: 'https://learningapps.org/watch?v=prrvbcden18',
  },
  {
    id: '3',
    name: 'Овощи и фрукты  ',
    link: 'https://learningapps.org/watch?v=p45dku7x518',
  },
  {
    id: '4',
    name: 'Где растет?',
    link: 'https://learningapps.org/watch?v=px93xdvzj18',
  },
  {
    id: '5',
    name: 'Вершки и корешки ',
    link: 'https://learningapps.org/watch?v=pzfqwtz7c18',
  },
  {
    id: '6',
    name: 'Дикие и домашние  животные',
    link: 'https://learningapps.org/watch?v=pkpf7ra1c18',
  },
  {
    id: '7',
    name: 'Профессии',
    link: 'https://learningapps.org/watch?v=pijqowdrk18',
  },
  {
    id: '8',
    name: 'Кроссворд «Профессии»',
    link: 'https://learningapps.org/watch?v=p15y71x0k18',
  },
  {
    id: '9',
    name: 'Кто чем занимается',
    link: 'https://learningapps.org/watch?v=pq0nszakn18',
  },
  {
    id: '10',
    name: 'Кто шьет одежду',
    link: 'https://learningapps.org/watch?v=ptikehotj18',
  },
  {
    id: '11',
    name: 'Что для чего ',
    link: 'https://learningapps.org/watch?v=p3ta3cuo318  ',
  },
  {
    id: '12',
    name: 'Сезонная одежда',
    link: 'https://learningapps.org/watch?v=pv3n5fh1t18',
  },
  {
    id: '13',
    name: 'Новогодний праздник',
    link: 'https://learningapps.org/watch?v=ps1f3vnq518',
  },
  {
    id: '14',
    name: 'Что лишнее',
    link: 'https://learningapps.org/watch?v=pcqoe3hhj18',
  },
  {
    id: '15',
    name: 'Моя Родина',
    link: 'https://learningapps.org/watch?v=pkvfd22sj18',
  },
  {
    id: '16',
    name: 'Найди общее слово',
    link: 'https://learningapps.org/watch?v=puvjn0hjj18',
  },
  {
    id: '17',
    name: 'Времена года',
    link: 'https://learningapps.org/watch?v=phyh0wb6318',
  },
  {
    id: '18',
    name: '12 месяцев',
    link: 'https://learningapps.org/watch?v=po02mwez318',
  },
  {
    id: '19',
    name: 'Приметы времен года',
    link: 'https://learningapps.org/watch?v=p85rcc04j18',
  },
  {
    id: '21',
    name: 'Символы республики',
    link: 'https://learningapps.org/watch?v=pj7g49brt18',
  },
  {
    id: '22',
    name: 'Областные центры республики',
    link: 'https://learningapps.org/watch?v=p8weff0dk18',
  },
  {
    id: '23',
    name: 'Моя Беларусь',
    link: 'https://learningapps.org/watch?v=pvdb28zkj18',
  },
  {
    id: '24',
    name: 'Моя страна',
    link: 'https://learningapps.org/watch?v=pecnm74pj18',
  },
  {
    id: '04',
    name: 'Белорусские спортсмены',
    link: 'https://learningapps.org/watch?v=p45opygvk18',
  },
  {
    id: '25',
    name: 'Мой город',
    link: 'https://learningapps.org/watch?v=p3fnvjvia18',
  },
  {
    id: '26',
    name: 'Личная гигиена',
    link: 'https://learningapps.org/watch?v=ph2uooy2a18',
  },
  {
    id: '27',
    name: 'Правила личной гигиены',
    link: 'https://learningapps.org/watch?v=pnodirbxa18',
  },
  {
    id: '28',
    name: 'Перелетные птицы',
    link: 'https://learningapps.org/watch?v=p1knd31h518',
  },
  {
    id: '29',
    name: 'Дикие животные',
    link: 'https://learningapps.org/watch?v=pjqagcsk318',
  },
  {
    id: '30',
    name: 'Животные зимой',
    link: 'https://learningapps.org/watch?v=pvthh0wak18',
  },
  {
    id: '31',
    name: 'Национальные праздники',
    link: 'https://learningapps.org/watch?v=phqvsq5kn18',
  }
];

class GamesRus extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'Игры'} data={data} />
    );
  }
}

export default GamesRus;
