import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {Crafts_Of_Natural_Material} from '../../../constants/constants';

const BACK_LINK = Crafts_Of_Natural_Material;

class FunFrog extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}Замечательные поделки — забавные рожицы можно сделать из картофеля и других овощей. Посмотрите на эти рожицы и проявите фантазию. Для этого потребуются картофелины любого размера и формы и куча всякой всячины, которую можно применить в качестве глазок, зубов, волос, носа и т.д. Например, глазами может быть вата, зрачки — цветная бумага, нос — морковка, зубы — фасолины или горошинки. Шляпка или волосы — та же петрушка, укроп, листья салата или капусты…
        <br/><img src={'fun_frog_1.png'} style={{width: width}}/>
        <br/>{'     '}Делать такие поделки будет интересно.
        <br/><img src={'fun_frog_2.png'} style={{width: width}}/>
        <br/>{'     '}Источник: http://ejka.ru/blog/priroda/622.html
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Забавные рожицы из картошки'} backLink={BACK_LINK}/>
    );
  }
}

export default FunFrog;
