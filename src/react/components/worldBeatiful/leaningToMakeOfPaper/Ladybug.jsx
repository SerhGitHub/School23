import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {LEARNIG_TO_MAKE_OF_PAPER} from '../../../constants/constants';

const BACK_LINK = LEARNIG_TO_MAKE_OF_PAPER;

class Ladybug extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}Эта аппликация отлично подойдет для детей 3-4 лет. Она очень просто изготавливается.
        <br/><img src={'ladybug_1.png'} style={{width: width}}/>
        <br/>{'     '}Последовательность выполнения аппликации:
        <br/>{'     '}1.	Из красной бумаги вырезаем 2 круга. А из черной – 2 полуовала.
        <br/><img src={'ladybug_2.png'} style={{width: width}}/>
        <br/>{'     '}2.	Круги сгибаем пополам и приклеиваем одну половину, соединяя их на линии сгиба. Полуовал подсоединяем сверху посередине над кругами.
        <br/>{'     '}3.	На кругах рисуем черные точки. На этой аппликации для детей осталось только сконструировать усики и глазки.
        <br/><img src={'ladybug_3.png'} style={{width: width}}/>
        <br/>{'     '}Источник: http://mirpozitiva.ru/articles/1905-applikaciya-iz-bumagi-dlya-detej.html
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Божья коровка объемная'} backLink={BACK_LINK}/>
    );
  }
}

export default Ladybug;
