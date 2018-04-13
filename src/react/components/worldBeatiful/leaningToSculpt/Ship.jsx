import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {LEANING_TO_SCULPT} from '../../../constants/constants';

const BACK_LINK = LEANING_TO_SCULPT;

class Ship extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}•	Приготовьте ореховую скорлупу, пластилин, листики с деревьев, маленькие палочки
        <br/>{'     '}•	В очищенную скорлупу прилепите шарик пластилина, на него посадите мачту — маленькую палочку
        <br/><img src={'mold_ship_1.png'} style={{width: width}}/>
        <br/>{'     '}•	Наденьте на мачту паруса-листочки, сверху прицепите другой шарик из пластилина
        <br/>{'     '}•	Запускайте свои кораблики в воду
        <br/><img src={'mold_ship_2.png'} style={{width: width}}/>
        <br/>{'     '}Источник:: http://heaclub.ru/poetapnaya-lepka-dlya-detej-podelki-iz-plastilina-lepim-edu-zhivotnyh-igrushki#i-13
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Делаем кораблик из пластилина и ореховой скорлупы'} backLink={BACK_LINK}/>
    );
  }
}

export default Ship;
