import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {LEARNIG_TO_MAKE_OF_PAPER} from '../../../constants/constants';

const BACK_LINK = LEARNIG_TO_MAKE_OF_PAPER;

class AppFromCircles extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}Необычная идея аппликации — использовать только вырезанные кружки из бумаги. Если сделать все-все детали из кружков, у вас получится очень интересная и необычная работа.
        <br/>{'     '}Ребенку такое занятие очень понравится, особенно если он увидит, как простые кружочки разных размеров превращаются в милого котика или птичку.
        <br/><img src={'app_from_circle_1.png'} style={{width: width}}/>
        <br/>{'     '}Сова и рыбки
        <br/><img src={'app_from_circle_2.png'} style={{width: width}}/>
        <br/>{'     '}Божья коровка и пингвин
        <br/><img src={'app_from_circle_3.png'} style={{width: width}}/>
        <br/>{'     '}Крокодил
        <br/><img src={'app_from_circle_4.png'} style={{width: width}}/>
        <br/>{'     '}Птички
        <br/>{'     '}Источник:  http://heaclub.ru/applikaciya-s-detmi-interesnye-idei-applikacij#i
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Идеи аппликации из кружков'} backLink={BACK_LINK}/>
    );
  }
}

export default AppFromCircles;
