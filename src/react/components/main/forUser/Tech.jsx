import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {FOR_USER} from '../../../constants/constants';

const BACK_LINK = FOR_USER;

class Tech extends React.Component {

  getData(){
    const width = '100%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        <img src={'for_user_3.png'} style={{width: width}}/>
        <br/>{'     '}Проект представляет собой одностраничное приложение <b><i>(single page application, SPA)</i></b>. Это веб-сайт, использующий единственный <b>HTML</b>-документ как оболочку для всех веб-страниц и организующий взаимодействие с пользователем через динамически подгружаемые <b>HTML, CSS, JavaScript</b>, посредством <b>AJAX</b>, что соответствует последним нововведениям при разработке веб-сайтов. Отличительной чертой данного проекта является то, что он был разработан с нуля, т. е. без использования сторонних конструкторов для сайтов. Поэтому при его разработке не были проблемой ограничения, с которыми могут столкнуться разработчики, использующие сторонние конструкторы для веб-сайтов.
        <br/>{'     '}Краткое описание проекта представлено в следующей таблице
        <p style={{textAlign: 'center'}}><img src={'for_user_4.png'} style={{width: '80%'}}/></p>
        <br/>{'     '}Для данного проекта не требуется особых затрат компьютерных  мощностей. Особых требований к проекту нет. Главное - наличие у компьютерного устройства доступа к интернету и одного из современных веб-обозревателей(браузера).
        <br/>{'     '}Технические требования к устройству
        <br/>{'     '}1)Устройство:
        <br/>{'       '}•	Настольный компьтер;
        <br/>{'       '}•	Ноутбук;
        <br/>{'       '}•	Планшет;
        <br/>{'       '}•	Мобильное устройство и т. д.
        <br/>{'     '}2)Операционная система:
        <br/>{'       '}•	Windows XP, Vista, 7,  8, 8.1, 10, Mobile;
        <br/>{'       '}•	Unix;
        <br/>{'       '}•	Mac OS;
        <br/>{'       '}•	iOS;
        <br/>{'       '}•	Android и подобные им.
        <br/>{'     '}3)Наличие браузера:
        <br/>{'       '}•	Google Chrome;
        <br/>{'       '}•	Mozilla;
        <br/>{'       '}•	Opera;
        <br/>{'       '}•	IE и подобные
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={''} backLink={BACK_LINK}/>
    );
  }
}

export default Tech;
