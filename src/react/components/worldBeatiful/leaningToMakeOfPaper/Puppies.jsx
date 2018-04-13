import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {LEARNIG_TO_MAKE_OF_PAPER} from '../../../constants/constants';

const BACK_LINK = LEARNIG_TO_MAKE_OF_PAPER;

class Puppies extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        <img src={'puppies_1.png'} style={{width: width}}/>
        <br/>{'     '}Источник: http://mirpozitiva.ru/articles/1905-applikaciya-iz-bumagi-dlya-detej.html
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Куколки - красавицы'} backLink={BACK_LINK}/>
    );
  }
}

export default Puppies;
