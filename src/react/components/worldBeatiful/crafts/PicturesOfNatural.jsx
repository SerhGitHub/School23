import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {Crafts_Of_Natural_Material} from '../../../constants/constants';

const BACK_LINK = Crafts_Of_Natural_Material;

class PicturesOfNatural extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}На листе бумаги рисуем картину — небо, птички… приклеиваем осенние листочки разных цветов и сверху закрываем другим листком с дыркой-овалом. Интересная техника. Такой картиной ребенок может украсить свою комнату.
        <br/><img src={'pictures_of_n_1.png'} style={{width: width}}/>
        <br/>{'     '}Источник: http://ejka.ru/blog/priroda/3290.html
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Картинки из природного материала'} backLink={BACK_LINK}/>
    );
  }
}

export default PicturesOfNatural;
