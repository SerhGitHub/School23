import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {LEARNIG_TO_MAKE_OF_PAPER} from '../../../constants/constants';

const BACK_LINK = LEARNIG_TO_MAKE_OF_PAPER;

class Bouquet extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}Это – не просто цветы, а конструкция, которая будет стоять. При этом мы сделаем все части растения. Сами цветочки, листочки и стебелечки. Эта несложная аппликация в средней группе ребятишками освоится очень быстро.
        <br/><img src={'bouquet_1.png'} style={{width: width}}/>
        <br/>{'     '}1.	Зеленый лист сворачиваем вдвое так, чтобы цветная его часть была наружи. Край к краю. Закрепляем их. Очень важно сильно не загибать, лишь слегка провести рукой по середине.
        <br/><img src={'bouquet_2.png'} style={{width: width}}/>
        <br/>{'     '}2.	Теперь можно сделать разрезы от середины к краям листа, не доходя до края приблизительно 1,5-2 см.
        <br/><img src={'bouquet_3.png'} style={{width: width}}/>
        <br/>{'     '}3.	Сворачиваем лист трубочкой и скрепляем внизу его углы один к другому. Получается устойчивая конструкция. Немного раздвигаем вверху «лепестки» букета.
        <br/><img src={'bouquet_4.png'} style={{width: width}}/>
        <br/>{'     '}4. Не составит труда вырезать цветы разных расцветок. Их мило украсят серединки, которые можно делать кругленькими, в форме сердечка, и даже треугольные или квадратные.
        <br/><img src={'bouquet_5.png'} style={{width: width}}/>
        <br/>{'     '}5.	Цветочки крепим к краям стебельков вверху. Букет готов, его можно дарить!
        <br/><img src={'bouquet_6.png'} style={{width: width}}/>
        <br/>{'     '}Источник: http://mirpozitiva.ru/articles/1905-applikaciya-iz-bumagi-dlya-detej.html
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Букет'} backLink={BACK_LINK}/>
    );
  }
}

export default Bouquet;
