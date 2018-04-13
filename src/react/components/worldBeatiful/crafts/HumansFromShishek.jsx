import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {Crafts_Of_Natural_Material} from '../../../constants/constants';

const BACK_LINK = Crafts_Of_Natural_Material;

class HumansFromShishek extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}Для поделки потребуется:
        <br/>{'     '}Шишки, желуди, спички, нитки, бумага, пластилин
        <br/><img src={'humans_f_s_1.png'} style={{width: width}}/>
        <br/>{'     '}Туловище человечка можно сделать из еловой или сосновой шишки. Ножки — из спичек. «Шапочки» желудей хороши для рук, обуви человечка и для головного убора.
        <br/>{'     '}Чтобы соединить все детали, тебе понадобится пластилин. Волосы — нарезанные нитки, прикрепленные пластилином. Глаза можно вырезать из бумаги и приклеить к голове клеем или пластилином.
        <br/><img src={'humans_f_s_2.png'} style={{width: width}}/>
        <br/>{'     '}Глаза можно сделать и другим способом. Попроси у мамы пустую упаковку из-под таблеток. Вырежи из нее две формочки и в каждую вложи по темной бусинке или бисеринке. Возьми небольшой кусок бумаги, приложи к нему формочку и приклей по краям. Лишнюю бумагу обрежь.
        <br/><img src={'humans_f_s_3.png'} style={{width: width}}/>
        <br/>{'     '}Источник: http://ejka.ru/blog/priroda/4176.html
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Человек из шишек'} backLink={BACK_LINK}/>
    );
  }
}

export default HumansFromShishek;
