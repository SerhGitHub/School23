import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {LEARNIG_TO_MAKE_OF_PAPER} from '../../../constants/constants';

const BACK_LINK = LEARNIG_TO_MAKE_OF_PAPER;

class FlowerBasket extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        <img src={'flower_basket_1.png'} style={{width: width}}/>
        <br/><img src={'flower_basket_2.png'} style={{width: width}}/>
        <br/><img src={'flower_basket_3.png'} style={{width: width}}/>
        <br/><img src={'flower_basket_4.png'} style={{width: width}}/>
        <br/><img src={'flower_basket_5.png'} style={{width: width}}/>
        <br/><img src={'flower_basket_6.png'} style={{width: width}}/>
        <br/><img src={'flower_basket_7.png'} style={{width: width}}/>
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Цветочная корзина'} backLink={BACK_LINK}/>
    );
  }
}

export default FlowerBasket;
