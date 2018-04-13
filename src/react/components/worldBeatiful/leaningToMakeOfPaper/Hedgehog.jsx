import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {LEARNIG_TO_MAKE_OF_PAPER} from '../../../constants/constants';

const BACK_LINK = LEARNIG_TO_MAKE_OF_PAPER;

class Hedgehog extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        <img src={'hedge_1.png'} style={{width: width}}/>
        <br/>{'     '}Есть два варианта подготовки к изготовлению этой аппликации для малышей.
        <br/>{'     '}Первый. Обводим ладошку малютки на листе черной или коричневой бумаги. Вырезаем. Приклеиваем. Четырех ладошек будет достаточно.
        <br/><img src={'hedge_2.png'} style={{width: '100%'}}/>
        <br/><img src={'hedge_3.png'} style={{width: width}}/>
        <br/>{'     '}Второй вариант. Либо используем пальчиковые краски. Дитя окунает ладошку, а мы помогаем ему так приложить ладошку несколько раз, под разным наклоном в направлении вверх, чтобы получился веер.
        <br/>{'     '}2.	Вырезаем из бумаги того же цвета что-то наподобие лодочки. Это – тельце и носик ежика (вырезаем маленький кружочек и к краю мордочки приклеиваем «носик»).
        <br/><img src={'hedge_4.png'} style={{width: width}}/>
        <br/>{'     '}3. Располагаем тельце под «иголками».
        <br/><img src={'hedge_5.png'} style={{width: width}}/>
        <br/>{'     '}4.	Ротик и глазик можно нарисовать, или же сделать полукруги из красной и белой бумаги. Не забываем про зрачки.
        <br/><img src={'hedge_6.png'} style={{width: width}}/>
        <br/><img src={'hedge_7.png'} style={{width: width}}/>
        <br/>{'     '}5.	Аппликации из бумаги были бы неполные без сюжета. Придумываем с малышом историю. Наш ежик идет из леса, а потому вырежем и приклеим ему «добычу»: яблочко и грибочек.
        <br/><img src={'hedge_8.png'} style={{width: width}}/>
        <br/><img src={'hedge_9.png'} style={{width: width}}/>
        <br/>{'     '}6. Аппликацию из бумаги дополняем черными маленькими лапками.
        <br/><img src={'hedge_10.png'} style={{width: width}}/>
        <br/>{'     '}Источник: http://mirpozitiva.ru/articles/1905-applikaciya-iz-bumagi-dlya-detej.html
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Аппликация «Ёжик из ладошек»'} backLink={BACK_LINK}/>
    );
  }
}

export default Hedgehog;
