import React from 'react';

import BaseAudioComponent from '../BaseAudioComponent';

const data = [
  {
    id: '1',
    name: 'Вол i осёл',
    link: 'https://drive.google.com/uc?id=1mGAsC--vOJrLppxHHC5SxwO4QA32-CUQ&authuser=0&export=download',
  },
  {
    id: '2',
    name: 'Ганарыстая варона',
    link: 'https://drive.google.com/uc?id=1M2k6NrM-DjsYMOh4V977crNFfJrq3LEz&authuser=0&export=download',
  },
  {
    id: '3',
    name: 'Жаба ў каляіне',
    link: 'https://drive.google.com/uc?id=1eYhPynBakHEOSzzWClgBhdACxkyN69Rp&authuser=0&export=download',
  },
  {
    id: '4',
    name: 'Зайкава хатка.mp3',
    link: 'https://drive.google.com/uc?id=1G9LYil9RHnvclrYeqSz3VoLaMGjpFwnP&authuser=0&export=download',
  },
  {
    id: '5',
    name: 'Зайчыкі',
    link: 'https://drive.google.com/uc?id=1QaFuMlwk_GRm2hXScXoSXSCCG3HMsrG7&authuser=0&export=download',
  },
  {
    id: '6',
    name: 'Каток-залаты лабок',
    link: 'https://drive.google.com/uc?id=1LwMcChiVvb3xXHDoKv58oI5LyFrbKDug&authuser=0&export=download',
  },
  {
    id: '7',
    name: 'Селянін, мядзведзь і лісіца',
    link: 'https://drive.google.com/uc?id=1oCz1sDuQ7-ig5nrzryORvbgLWrsGm3fa&authuser=0&export=download',
  },
  {
    id: '8',
    name: 'Як курачка пеўніка ратавала',
    link: 'https://drive.google.com/uc?id=1vNTfA8n8jDmu08pfRkvIF_KtZuKSzQ3Y&authuser=0&export=download',
  },
  {
    id: '9',
    name: 'Як курачка пеўніка ратавала',
    link: 'https://drive.google.com/uc?id=1vNTfA8n8jDmu08pfRkvIF_KtZuKSzQ3Y&authuser=0&export=download',
  },
  {
    id: '10',
    name: 'Стары конь',
    link: 'https://drive.google.com/uc?id=1Gr_HswqvbbllRtOYZapOFxQwjQWxlOiG&authuser=0&export=download',
  },
  {
    id: '11',
    name: 'Коцік, пеўнік і лісіца',
    link: 'https://drive.google.com/uc?id=1ESYbAfd391WEIwqTBGTL2RYppyX68EQm&authuser=0&export=download',
  },
];

class ListeningToFairyTales extends React.Component {

  render() {
    return (
      <BaseAudioComponent title={'Слухаем казкі'} data={data} />
    );
  }
}

export default ListeningToFairyTales;
