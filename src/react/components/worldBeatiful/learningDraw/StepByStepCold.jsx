import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {Learning_Draw} from '../../../constants/constants';

const BACK_LINK = Learning_Draw;

class StepByStepCold extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}Начнем рисование с носика, для этого нарисуйте овал в центре листа(1), затем рисуем усы(изогнутые линии, идущие от низа носа)(2), затем нарисуйте глаза(3) и верх шапки(4). И переходим к следующей картинке.
        <br/><img src={'step_by_step_cold_1.png'} style={{width: width}}/>
        <br/>{'     '}Рисуем такую же кривую сверху, только чуть выше(это у нас будет верхняя часть головы), далее нарисуйте сбоку часть шапки и бубон.
        <br/><img src={'step_by_step_cold_2.png'} style={{width: width}}/>
        <br/>{'     '}Рисуем большую бороду и маленький ротик под носиком.
        <br/><img src={'step_by_step_cold_3.png'} style={{width: width}}/>
        <br/>{'     '}Нарисуйте пальто Деда Мороза. Делаем так: рисуем линии по бокам и соединяем их низ еще одной, которая идет в самом низу.
        <br/><img src={'step_by_step_cold_4.png'} style={{width: width}}/>
        <br/>{'     '}Теперь нам нужно с двух сторон нарисовать по рукаву, а снизу пальтишка(шубы) два виднеющихся ботинка.
        <br/><img src={'step_by_step_cold_5.png'} style={{width: width}}/>
        <br/>{'     '}Рисуем варежки, а также снизу шубы линию(это белый мех).
        <br/><img src={'step_by_step_cold_6.png'} style={{width: width}}/>
        <br/>{'     '}Теперь возьмите стерку(ластик) и сотрите линии от плечей (где именно показано красной стрелкой) и у рукавов рисуем также белый мех (проводим просто линию).
        <br/><img src={'step_by_step_cold_7.png'} style={{width: width}}/>
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Как нарисовать Деда Мороза'} backLink={BACK_LINK}/>
    );
  }
}

export default StepByStepCold;
