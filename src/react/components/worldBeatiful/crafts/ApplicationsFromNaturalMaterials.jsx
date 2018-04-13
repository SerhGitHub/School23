import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {Crafts_Of_Natural_Material} from '../../../constants/constants';

const BACK_LINK = Crafts_Of_Natural_Material;

class ApplicationsFromNaturalMaterials extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}Осень дарит нам много природного материала, который можно использовать в различных поделках. Из простых листьев, которые валяются на улицах, можно сделать много всего интересного, в том числе и аппликации. Из них получаются забавные человечки, разные животные, пейзажи и даже сюжетные картины.
        <br/>{'     '}Собирать материал для аппликаций тоже очень весело и просто, ведь найти листочки можно прогуливаясь в парке.
        <br/><img src={'app_1.png'} style={{width: width}}/>
        <br/>{'     '}Сова из шишки
        <br/>{'     '}Из листочков клена можно сделать ежа, из березы рыбок, а дубовые листочки напоминают дерево.
        <br/>{'     '}Некоторые детали работы можно дорисовать фломастерами или красками.
        <br/><img src={'app_2.png'} style={{width: width}}/>
        <br/>{'     '}Бабочка из листочков
        <br/>{'     '}Из листочков можно вырезать нужные детальки, т.е. использовать не целый листик, а вырезанный элемент. Используйте листочки разных цветов.
        <br/>{'     '}Можно предварительно высушить листики или положить ненадолго в книгу, чтобы они выровнялись. Еще можно высушить, прогладив их через лист бумаги.
        <br/><img src={'app_3.png'} style={{width: width}}/>
        <br/>{'     '}Разные животные из листочков
        <br/>{'     '}Сухие листочки можно покрошить в крошку и посыпать ими основу, на которую нанесен клей. После этого стряхните оставшуюся крошку. Это занятие очень понравится деткам помладше.
        <br/><img src={'app_4.png'} style={{width: width}}/>
        <br/>{'     '}Картины из природного материала
        <br/>{'     '}Источник: http://heaclub.ru/applikaciya-s-detmi-interesnye-idei-applikacij#i
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Аппликации из природного материала'}  backLink={BACK_LINK}/>
    );
  }
}

export default ApplicationsFromNaturalMaterials;
