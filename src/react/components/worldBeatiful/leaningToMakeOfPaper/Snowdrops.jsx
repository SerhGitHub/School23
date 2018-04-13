import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {LEARNIG_TO_MAKE_OF_PAPER} from '../../../constants/constants';

const BACK_LINK = LEARNIG_TO_MAKE_OF_PAPER;

class Snowdrops extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        <img src={'Snowdrops_1.png'} style={{width: width}}/>
        <br /><img src={'Snowdrops_1.png'} style={{width: width}}/>
        <br /><img src={'Snowdrops_2.png'} style={{width: width}}/>
        <br /><img src={'Snowdrops_3.png'} style={{width: width}}/>
        <br /><img src={'Snowdrops_4.png'} style={{width: width}}/>
        <br /><img src={'Snowdrops_5.png'} style={{width: width}}/>
        <br /><img src={'Snowdrops_6.png'} style={{width: width}}/>
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Подснежники'} backLink={BACK_LINK}/>
    );
  }
}

export default Snowdrops;
