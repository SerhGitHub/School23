import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {Crafts_Of_Natural_Material} from '../../../constants/constants';

const BACK_LINK = Crafts_Of_Natural_Material;

class ChristmasTreeFromChestnuts extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}Сделана эта новогодняя поделка из каштанов! Кроме того потребуется зеленая фольга, клей (можно клеящий термопистолет), мишура, бусины, цветной картон.
        <br/>{'     '}Каштаны обверните в фольгу и склейте в виде елочки, как на рисунке, а украсить елочку можно на свой вкус.
        <br/><img src={'christmas_t_f_1.png'} style={{width: width}}/>
        <br/>{'     '}Источник : http://ejka.ru/blog/priroda/1627.html
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Новогодняя ёлочка из каштанов'} backLink={BACK_LINK}/>
    );
  }
}

export default ChristmasTreeFromChestnuts;
