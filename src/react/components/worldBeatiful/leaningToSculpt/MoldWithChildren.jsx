import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {LEANING_TO_SCULPT} from '../../../constants/constants';

const BACK_LINK = LEANING_TO_SCULPT;

class MoldWithChildren extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        <br/><img src={'mold_child_1.png'} style={{width: width}}/>
        <br/><img src={'MC2.png'} style={{width: width}}/>
        <br/><img src={'MC3.png'} style={{width: width}}/>
        <br/><img src={'MC4.png'} style={{width: width}}/>
        <br/><img src={'MC5.png'} style={{width: width}}/>
        <br/><img src={'MC6.png'} style={{width: width}}/>
        <br/><img src={'MC7.png'} style={{width: width}}/>
        <br/><img src={'MC8.png'} style={{width: width}}/>
        <br/><img src={'MC9.png'} style={{width: width}}/>
        <br/><img src={'MC10.png'} style={{width: width}}/>
        <br/><img src={'MC11.png'} style={{width: width}}/>
        <br/><img src={'MC12.png'} style={{width: width}}/>
        <br/><img src={'MC13.png'} style={{width: width}}/>
        <br/><img src={'MC14.png'} style={{width: width}}/>
        <br/><img src={'MC15.png'} style={{width: width}}/>
        <br/><img src={'MC16.png'} style={{width: width}}/>
        <br/><img src={'MC17.png'} style={{width: width}}/>
        <br/><img src={'MC18.png'} style={{width: width}}/>
        <br/><img src={'MC19.png'} style={{width: width}}/>

        <br/>{'     '}Источник: https://www.baby.ru/blogs/post/375691533-268009373/
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Лепим вместе с детьми'} backLink={BACK_LINK}/>
    );
  }
}

export default MoldWithChildren;
