import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {Crafts_Of_Natural_Material} from '../../../constants/constants';

const BACK_LINK = Crafts_Of_Natural_Material;

class StickAcroneSeason extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}Качество и оригинальность поделок зависят от умения использовать естественную форму и фактуру природного материала. Сначала постарайтесь «увидеть» в нем какой-то образ (на что похоже). Затем подумайте, как можно достичь сходства с помощью дополнительных деталей и обработки.
        <br/><img src={'stick_acrone_1.png'} style={{width: width}}/>
        <br/><img src={'stick_acrone_2.png'} style={{width: width}}/>
        <br/><img src={'stick_acrone_3.png'} style={{width: width}}/>
        <br/><img src={'stick_acrone_4.png'} style={{width: width}}/>
        <br/><img src={'stick_acrone_5.png'} style={{width: width}}/>
        <br/><img src={'stick_acrone_6.png'} style={{width: width}}/>
        <br/><img src={'stick_acrone_7.png'} style={{width: width}}/>
        <br/><img src={'stick_acrone_8.png'} style={{width: width}}/>
        <br/><img src={'stick_acrone_9.png'} style={{width: width}}/>
        <br/><img src={'stick_acrone_10.png'} style={{width: width}}/>
        <br/><img src={'stick_acrone_11.png'} style={{width: width}}/>
        <br/><img src={'stick_acrone_12.png'} style={{width: width}}/>
        <br/>{'     '}Источник: http://ejka.ru/blog/priroda/873.html
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Шишка, желудь и ракушка'} backLink={BACK_LINK}/>
    );
  }
}

export default StickAcroneSeason;
