import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {LEARNIG_TO_MAKE_OF_PAPER} from '../../../constants/constants';

const BACK_LINK = LEARNIG_TO_MAKE_OF_PAPER;

class Glade extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}Поляна – это многокомпозиционная аппликация  для детей 5-6 лет. Здесь мы познакомимся с моделями, которые нужно сначала сделать, а уже потом закрепить на основе. Объемные виды аппликаций выполняются таким оригинальным образцом.
        <br/><img src={'glade_1.png'} style={{width: width}}/>
        <br/>{'     '}Наша основа – голубой картон. Это – небо. Светит солнышко. Растет травка, в которой цветут цветы. А над ними порхают бабочки и стрекозы. Все части выполненные из сложенной в гармошку бумаги.
        <br/>{'     '}•	Трава. Полоску в 5 см ширины и в 2 раза длиннее низа основы складываем гармошкой. Срезаем верхушку (ок. 1 см) под острым углом. Полоску приклеиваем.
        <br/><img src={'glade_2.png'} style={{width: width}}/>
        <br/>{'     '}•	Цветок. Длинную полоску в 3-5 см шириной складываем и по кругу выворачиваем так, чтобы соединить края. Закрепляем их. Цветок готов. Делаем несколько таких изделий разных расцветок.
        <br/><img src={'glade_3.png'} style={{width: width}}/>
        <br/><img src={'glade_4.png'} style={{width: width}}/>
        <br/>{'     '}•	Не забываем о стеблях (наклеенные полоски) и листьях (гармошки пополам).
        <br/><img src={'glade_5.png'} style={{width: width}}/>
        <br/>{'     '}•	Бабочка. У листа бумаги отрезать и скруглить края. Сложить в поперек в гармошку. То же самое делаем с листом поменьше размером и другого цвета.
        <br/><img src={'glade_6.png'} style={{width: width}}/>
        <br/><img src={'glade_7.png'} style={{width: width}}/>
        <br/><img src={'glade_8.png'} style={{width: width}}/>
        <br/><img src={'glade_9.png'} style={{width: width}}/>
        <br/><img src={'glade_10.png'} style={{width: width}}/>
        <br/><img src={'glade_11.png'} style={{width: width}}/>
        <br/>{'     '}Соединяем 2 листа посередине полоской. Закрепляем их. Расправляем крылышки.
        <br/><img src={'glade_12.png'} style={{width: width}}/>
        <br/><img src={'glade_13.png'} style={{width: width}}/>
        <br/>{'     '}•	Солнышко. Верхний уголочек заклеиваем желтым треугольничком. По его краю крепим гофрированную полоску, получились лучики.
        <br/>{'     '}•	Стрекоза. Вырезаем из простого листа 2 заготовки. Одна в виде восьмерки, вторая – капелькой. Приклеиваем к основе капельку и рядом восьмерку так, чтобы между ее кругами поместить гофрированные крылышки, скрепленные по середине.
        <br/>{'     '}•	Полянка ожила и зацвела на радость детворе.
        <br/><img src={'glade_14.png'} style={{width: width}}/>
        <br/>{'     '}Источник: http://mirpozitiva.ru/articles/1905-applikaciya-iz-bumagi-dlya-detej.html
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Поляна'} backLink={BACK_LINK}/>
    );
  }
}

export default Glade;
