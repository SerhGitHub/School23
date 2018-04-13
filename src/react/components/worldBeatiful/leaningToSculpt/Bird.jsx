import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {LEANING_TO_SCULPT} from '../../../constants/constants';

const BACK_LINK = LEANING_TO_SCULPT;

class Bird extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}Давайте слепим попугая. Следуйте пошаговой инструкции, приведенной ниже, и у вас получится красивая и разговорчивая птичка.
        <br/>{'     '}•	Возьмите красный, желтый, синий, белый и черный пластилин
        <br/>{'     '}•	Сделайте овальное туловище для попугайчика из желтого пластилина
        <br/>{'     '}•	Добавьте кружочек поменьше красного цвета — это будет голова нашей птички
        <br/><img src={'mold_bird_1.png'} style={{width: width}}/>
        <br/>{'     '}•	Крылышки будут синими, для этого прилепите две капельки по бокам туловища
        <br/>{'     '}•	Добавьте белую грудку попугайчику
        <br/>{'     '}•	Слепите желтый клюв, прилепите глаза и из конусов сделайте хохолок
        <br/><img src={'mold_bird_2.png'} style={{width: width}}/>
        <br/>{'     '}•	Давайте добавим еще хвостик и стекой продавим бороздки на грудке птички и крылышках, которые напоминают оперение
        <br/>{'     '}•	Осталось прилепить лапки и попугайчик готов
        <br/><img src={'mold_bird_3.png'} style={{width: width}}/>
        <br/>{'     '}Вот такого петушка можно сделать из пластилина.
        <br/><img src={'mold_bird_4.png'} style={{width: width}}/>
        <br/>{'     '}Вот такой пингвин получается из пластилина.
        <br/><img src={'mold_bird_5.png'} style={{width: width}}/>
        <br/>{'     '}Источник: http://heaclub.ru/poetapnaya-lepka-dlya-detej-podelki-iz-plastilina-lepim-edu-zhivotnyh-igrushki#i-13
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Лепка из пластилина птицы'} backLink={BACK_LINK}/>
    );
  }
}

export default Bird;
