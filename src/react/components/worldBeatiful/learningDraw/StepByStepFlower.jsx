import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {Learning_Draw} from '../../../constants/constants';

const BACK_LINK = Learning_Draw;

class StepByStepFlower extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}Самое простое, с чего можно научить ребенка рисовать цветы – это нарисовать ромашку. Рисуют большой вытянутый по горизонтали овал, а внутри него маленький овал – это серединка. От серединки к границе большого овала линиями делят всю его плоскость. Каждые две линии соединяют полукругом – так вырисовываются лепестки. От центра тонкой линией дорисовывают стебелек, вытирают ненужные линии и раскрашивают цветок.
        <br/><img src={'step_by_step_flower_1.png'} style={{width: width}}/>
        <br/>{'     '}Если рисуют сразу кисточкой, то это проще простого – намечают желтый овал, а от него широкими масками в разные стороны рисуют лепестки, и «вуаля» – цветок готов! Потом можно приступить к рисованию тюльпана, колокольчика, астры. Главное постараться, чтобы ребенок в любом цветке увидел его форму, в основном это овал.
        <br/>{'     '}Источник: http://childage.ru/dosug/chem-zanyat-rebenka/tvorchestvo/kak-nauchit-rebenka-risovat-v-5-let-poetapno-prostyie-risunki.html
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Как поэтапно научить ребенка рисовать цветы'} backLink={BACK_LINK}/>
    );
  }
}

export default StepByStepFlower;
