import React from 'react';

import BaseVideosComponent from '../BaseVideosComponent';

const data = [
  {
    id: '1',
    name: 'Каток-залаты лабок',
    link: '7JJw4ujPDXs',
  },
  {
    id: '2',
    name: 'Піліпка',
    link: 'h3Ma57IFPks',
  },
  {
    id: '3',
    name: 'Ліса, мядзьведзь і мужык',
    link: '3HeBLtOZW_k',
  },
  {
    id: '4',
    name: 'Пра рыцара, што нікога не баяўся',
    link: 'fAeK6DDazwc',
  },
  {
    id: '5',
    name: 'Прыгоды Несцеркі',
    link: '6PxoqrxW8k4',
  },
  {
    id: '6',
    name: 'Палінка',
    link: 'Ojk9z0DEFzQ',
  },
  {
    id: '7',
    name: 'У лукамор’я',
    link: 'ypGU6A4prt4',
  },
  {
    id: '8',
    name: 'Дзед',
    link: '7_QnfYmHzn0',
  },
];

class BelarusianCartoons extends React.Component {

  render() {
    return (
      <BaseVideosComponent title={'Беларускія мультфільмы'} data={data} />
    );
  }
}

export default BelarusianCartoons;
