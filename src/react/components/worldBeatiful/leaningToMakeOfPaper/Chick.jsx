import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {LEARNIG_TO_MAKE_OF_PAPER} from '../../../constants/constants';

const BACK_LINK = LEARNIG_TO_MAKE_OF_PAPER;

class Chick extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}Малыши мыслят абстрактно, для них не имеет значение такая мелочь, как цвет или форма персонажа, если при этом его образ передает, подобные детским, эмоции. Но как сделать аппликацию именно такой, чтобы малыш почувствовал родственную душу? Вот отличный тому пример!
        <br/><img src={'chick_1.png'} style={{width: width}}/>
        <br/>{'     '}Знакомьтесь, Цыпа! У него:
        <br/>{'     '}•	Тело – квадратик;
        <br/>{'     '}•	Глаз – 2 кружочка (черный и белый, и белый при этом чуть больше);
        <br/>{'     '}•	Клюв – треугольник;
        <br/>{'     '}•	Лапки – тоже треугольные;
        <br/>{'     '}•	Крылышко – полукруг;
        <br/>{'     '}•	Хохолок – полумесяц.
        <br/><img src={'chick_2.png'} style={{width: width}}/>
        <br/>{'     '}А теперь, доверьтесь карапузу, пусть он выберет, что будет каким цветом! Объясните, что каждая фигура обозначает, зачем это птичке. Правда, интересно? Так, поиск нужных трафаретов для аппликаций – уже игра. Осталось только все склеить!
        <br/><img src={'chick_3.png'} style={{width: width}}/>
        <br/>{'     '}Источник: http://mirpozitiva.ru/articles/1905-applikaciya-iz-bumagi-dlya-detej.html
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Аппликация «Цыпа»'} backLink={BACK_LINK}/>
    );
  }
}

export default Chick;
