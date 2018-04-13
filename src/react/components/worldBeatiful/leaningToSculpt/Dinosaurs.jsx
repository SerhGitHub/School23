import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {LEANING_TO_SCULPT} from '../../../constants/constants';

const BACK_LINK = LEANING_TO_SCULPT;

class Dinosaurs extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}•	Возьмите пластилин любого цвета, ведь динозавра можно сделать каким захочется
        <br/>{'     '}•	Разделите кусок пластилина на три части, одна у нас уйдет на голову, из второй будем лепить туловище, а третью разделим на все остальные детали
        <br/>{'     '}•	Один кусочек разделите еще на три части, и одну из них также на три
        <br/>{'     '}•	Из двух самых больших кусочков делаем туловище и голову, для этого раскатываем их в колбаски и вытягиваем, соединяем друг с другом и выравниваем место соединения. То что у вас должно получиться, показано на схеме под номером 3
        <br/>{'     '}•	Из двух средних кусочков скатайте цилиндры и немного вытяните их, расплющите снизу и сверху, оставив тонкую «талию» — сформируйте лапки, как показано на схеме 4
        <br/>{'     '}•	Из маленьких кусочков слепите колбаски — передние лапки
        <br/>{'     '}•	Теперь соберите фигурку из того что уже готово и сгладьте все стыки
        <br/>{'     '}•	Из оставшегося кусочка пластилина скатайте много маленьких шариков и прилепите из придавливая по бокам на гребень динозавра
        <br/>{'     '}•	Сделайте ему глаза и не забудьте про веки
        <br/>{'     '}•	Разрежьте ножом для пластилина рот динозавру и раскройте его. Зубочисткой продавите ноздри, подрежьте немного лапы
        <br/>{'     '}•	Из белого пластилина сделайте зубы и когти для нашей фигурки
        <br/><img src={'mold_dinosaurs_1.png'} style={{width: width}}/>
        <br/>{'     '}Можно слепить еще такого динозавра из шишки.
        <br/><img src={'mold_dinosaurs_2.png'} style={{width: width}}/>
        <br/>{'     '}А вот еще один динозавр — стегозавр, один из самых популярных у детей.
        <br/><img src={'mold_dinosaurs_3.png'} style={{width: width}}/>
        <br/>{'     '}Если ребенок хочет слепить динозавра-хищника, предложите ему сделать диметродона.
        <br/><img src={'mold_dinosaurs_4.png'} style={{width: width}}/>
        <br/>{'     '}Источник: http://heaclub.ru/poetapnaya-lepka-dlya-detej-podelki-iz-plastilina-lepim-edu-zhivotnyh-igrushki#i-13
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Как лепить динозавров из пластилина?'} backLink={BACK_LINK}/>
    );
  }
}

export default Dinosaurs;
