import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {Crafts_Of_Natural_Material} from '../../../constants/constants';

const BACK_LINK = Crafts_Of_Natural_Material;

class MakingCaterpillar extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}1.	Приготовьте несколько каштанов
        <br/>{'     '}2.	Скатайте несколько разноцветных шариков из пластилина
        <br/>{'     '}3.	Соедините каштаны, чередуя их с пластилином, придавливайте их, чтобы они крепко приклеились
        <br/>{'     '}4.	Из белого и черного пластилина сделайте глазки
        <br/>{'     '}5.	Добавьте красный носик из шарика и ротик из колбаски
        <br/>{'     '}6.	Не забудьте про рожки, их можно сделать из кусочков спички, соединив с каштаном пластилином
        <br/><img src={'w_b_crafts_1.png'} style={{width: width}}/>
        <br/><img src={'w_b_crafts_2.png'} style={{width: width}}/>
        <br/>{'     '}Еще можно сделать вот такого ежика из каштановой кожуры и пластилина.
        <br/><img src={'w_b_crafts_3.png'} style={{width: width}}/>
        <br/>{'     '}Вот такие веселые разноцветные улитки из пластилина и каштанов.
        <br/><img src={'w_b_crafts_4.png'} style={{width: width}}/>
        <br/>{'     '}https://www.google.by/search?q=%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D0%BC+%D0%B3%D1%83%D1%81%D0%B5%D0%BD%D0%B8%D1%86%D1%83++%D0%B8%D0%B7+%D0%BF%D0%BB%D0%B0%D1%81%D1%82%D0%B8%D0%BB%D0%B8%D0%BD%D0%B0+%D0%B8+%D0%BA%D0%B0%D1%88%D1%82%D0%B0%D0%BD%D0%BE%D0%B2&dcr=0&tbm=isch&tbo=u&source=univ&sa=X&ved=0ahUKEwivtNXuvOLZAhVLApoKHVfCAvgQsAQILQ&biw=1047&bih=501#imgrc=reB2GrivUSQzcM:
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Делаем гусеницу из пластилина и каштанов'} backLink={BACK_LINK}/>
    );
  }
}

export default MakingCaterpillar;
