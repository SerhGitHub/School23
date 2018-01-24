import React from 'react';

import BaseTestComponent from '../BaseTestComponent';

const data = [
  {
    id: '1',
    name: 'Природные явления',
    link: 'https://learningapps.org/watch?v=pikvov1vk18',
    img: 'test/nature.jpg',
  },
  {
    id: '2',
    name: 'Ягоды и фрукты',
    link: 'https://learningapps.org/watch?v=prrvbcden18',
    img: 'test/fruts.jpeg',
  },
  {
    id: '3',
    name: 'Овощи и фрукты',
    link: 'https://learningapps.org/watch?v=p45dku7x518',
    img: 'test/vegetables.jpg',
  },
  {
    id: '4',
    name: 'Где растет?',
    link: 'https://learningapps.org/watch?v=px93xdvzj18',
    img: 'test/up.jpg',
  },
  {
    id: '5',
    name: 'Вершки и корешки',
    link: 'https://learningapps.org/watch?v=pzfqwtz7c18',
    img: 'test/01.jpg',
  },
  {
    id: '6',
    name: 'Дикие и домашние животные',
    link: 'https://learningapps.org/watch?v=pkpf7ra1c18',
    img: 'test/animals.jpg',
  },
];

class InTheWorldOfNature extends React.Component {

  render() {
    return (
      <BaseTestComponent title={'В мире природы'} data={data} />
    );
  }
}

export default InTheWorldOfNature;
