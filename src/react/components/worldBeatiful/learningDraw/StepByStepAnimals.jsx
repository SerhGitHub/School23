import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {Learning_Draw} from '../../../constants/constants';

const BACK_LINK = Learning_Draw;

class StepByStepAnimals extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        <img src={'step_by_step_animals_1.png'} style={{width: width}}/>
        <br/><img src={'step_by_step_animals_2.png'} style={{width: width}}/>
        <br/><img src={'step_by_step_animals_3.png'} style={{width: width}}/>
        <br/><img src={'step_by_step_animals_4.png'} style={{width: width}}/>
        <br/><img src={'step_by_step_animals_5.png'} style={{width: width}}/>
        <br/><img src={'step_by_step_animals_6.png'} style={{width: width}}/>
        <br/><img src={'step_by_step_animals_7.png'} style={{width: width}}/>
        <br/><img src={'step_by_step_animals_8.png'} style={{width: width}}/>
        <br/><img src={'step_by_step_animals_9.png'} style={{width: width}}/>
        <br/><img src={'step_by_step_animals_10.png'} style={{width: width}}/>
        <br/><img src={'step_by_step_animals_11.png'} style={{width: width}}/>
        <br/><img src={'step_by_step_animals_12.png'} style={{width: width}}/>
        <br/><img src={'step_by_step_animals_13.png'} style={{width: width}}/>
        <br/><img src={'step_by_step_animals_14.png'} style={{width: width}}/>
        <br/><img src={'step_by_step_animals_15.png'} style={{width: width}}/>
        <br/><img src={'step_by_step_animals_16.png'} style={{width: width}}/>
        <br/><img src={'step_by_step_animals_17.png'} style={{width: width}}/>
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Поэтапное рисование животных'} backLink={BACK_LINK}/>
    );
  }
}

export default StepByStepAnimals;
