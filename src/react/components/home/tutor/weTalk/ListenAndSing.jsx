import React from 'react';

import BasePresentationComponent from '../BasePresentationComponent';

const data = [
  {
    id: '1',
    name: 'Баран',
    link: 'https://drive.google.com/uc?id=1OJX3fi8EdjmJ3WrnQacuJyoxEvSV6Mec&authuser=0&export=download',
    images: [
      {
        id: '1',
        link: '2b.jpg'
      },
      {
        id: '2',
        link: '1b.jpg'
      },
      {
        id: '3',
        link: '3b.jpg'
      },
    ],
  },
  {
    id: '6',
    name: 'Верабейка',
    link: 'https://drive.google.com/uc?id=1HSjeeiQ9SVlC04l5KkYlukRcrMx_wphq&authuser=0&export=download',
    images: [
      {
        id: '1',
        link: 'verabeika_2.jpg'
      },
      {
        id: '2',
        link: 'verabeika_1.jpg'
      },
      {
        id: '3',
        link: 'verabeika_3.jpg'
      },
    ],
  },
  {
    id: '7',
    name: 'Гэй ты, воўчанька',
    link: 'https://drive.google.com/uc?id=1NFH8NgF4UTCV2lATuftOheFTyPz18aY0&authuser=0&export=download',
    images: [
      {
        id: '1',
        link: 'wolf_1.jpg'
      },
      {
        id: '2',
        link: 'wolf_2.jpg'
      },
      {
        id: '3',
        link: 'wolf_3.jpg'
      },
    ],
  },
  {
    id: '8',
    name: 'Дзядок',
    link: 'https://drive.google.com/uc?id=1H1082YiMjRX8VmDvWo8A4fkrJ1UlhJC9&authuser=0&export=download',
    images: [
      {
        id: '1',
        link: 'grandfather_2.jpg'
      },
      {
        id: '2',
        link: 'grandfather_1.jpg'
      },
      {
        id: '3',
        link: 'grandfather_3.jpg'
      },
    ],
  },
  {
    id: '9',
    name: 'Зайка маленькі',
    link: 'https://drive.google.com/uc?id=1sZAe2W7X12xP6jzT3lzcpdOxb9BKi1A6&authuser=0&export=download',
    images: [
      {
        id: '1',
        link: 'rabbit_2.jpg'
      },
      {
        id: '2',
        link: 'rabbit_1.jpg'
      },
    ],
  },
  {
    id: '10',
    name: 'Ішоў казел мастом',
    link: 'https://drive.google.com/uc?id=16bpULPExOVKQxeEnVIijhEYINiz9nMSy&authuser=0&export=download',
    images: [
      {
        id: '1',
        link: 'goat_2.jpg'
      },
      {
        id: '2',
        link: 'goat_1.jpg'
      },
      {
        id: '3',
        link: 'goat_3.jpg'
      },
      {
        id: '4',
        link: 'goat_4.jpg'
      },
      {
        id: '5',
        link: 'goat_5.jpg'
      },
      {
        id: '6',
        link: 'goat_6.jpg'
      },
      {
        id: '7',
        link: 'goat_7.jpg'
      },
      {
        id: '8',
        link: 'goat_8.jpg'
      },
      {
        id: '9',
        link: 'goat_9.jpg'
      },
    ],
  },
  {
    id: '11',
    name: 'Каза мая белая',
    link: 'https://drive.google.com/uc?id=1WRw1yBfRzWAemuqVJlCw0OD5pfh_WjlV&authuser=0&export=download',
    images: [
      {
        id: '1',
        link: 'goat_w_3.jpg'
      },
      {
        id: '2',
        link: 'goat_w_1.jpg'
      },
      {
        id: '3',
        link: 'goat_w_1.jpg'
      },
      {
        id: '4',
        link: 'goat_w_4.jpg'
      },
      {
        id: '5',
        link: 'goat_w_5.jpg'
      },
    ],
  },
  {
    id: '12',
    name: 'Калыханка',
    link: 'https://drive.google.com/uc?id=1plDexWS5A8zb1zjWaPUiO5ut7tEY4bXQ&authuser=0&export=download',
    images: [
      {
        id: '1',
        link: 'sing_1.jpg'
      },
      {
        id: '2',
        link: 'sing_2.jpg'
      },
      {
        id: '3',
        link: 'sing_3.jpg'
      },
      {
        id: '4',
        link: 'sing_4.jpg'
      },
    ],
  },
  {
    id: '13',
    name: 'Кую ножку',
    link: 'https://drive.google.com/uc?id=1OJsrL3vgSxVbBD5yKID32lanRTC6Ho7l&authuser=0&export=download',
    images: [
      {
        id: '1',
        link: 'leg_2.jpg'
      },
      {
        id: '2',
        link: 'leg_1.jpg'
      },
    ],
  },
  {
    id: '14',
    name: 'Мышка',
    link: 'https://drive.google.com/uc?id=1mg5IoeuB-lhiKkHMvatO7fRSMylNt4B3&authuser=0&export=download',
    images: [
      {
        id: '1',
        link: 'mouse_3.jpg'
      },
      {
        id: '2',
        link: 'mouse_1.jpg'
      },
      {
        id: '3',
        link: 'mouse_2.jpg'
      },
      {
        id: '4',
        link: 'mouse_4.jpg'
      },
    ],
  },
  {
    id: '2',
    name: 'Дзед Барадзед. Калыханка',
    link: 'HWbTO1f3uNE',
    isVideo: true,
  },
  {
    id: '3',
    name: 'Валерий Дайнеко. Калыханка',
    link: '4cypOoA2oDM',
    isVideo: true,
  },
  {
    id: '4',
    name: 'Калыханка',
    link: '1X2dUnEp5Ag',
    isVideo: true,
  },
  {
    id: '5',
    name: 'Беларуская Калыханка Доўгі дзень (БТ)',
    link: '_SrSTE1cXMQ',
    isVideo: true,
  },
];

class ListenAndSing extends React.Component {

  render() {
    return (
      <BasePresentationComponent title={'Слухаем и спяваем'} data={data} />
    );
  }
}

export default ListenAndSing;
