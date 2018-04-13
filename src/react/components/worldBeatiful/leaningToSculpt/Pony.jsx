import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {LEANING_TO_SCULPT} from '../../../constants/constants';

const BACK_LINK = LEANING_TO_SCULPT;

class Pony extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}Посмотрев мультфильм My little pony, ваша дочка наверняка захочет слепить такого же пони. Давайте мы с вами поможем ей в этом.
        <br/>{'     '}•	Возьмите пластилин желаемого цвета, отлично подойдут как и розовый, фиолетовый, красный, так и голубые оттенки
        <br/>{'     '}•	Скатайте колбаску выбранного цвета — это будет туловище пони
        <br/><img src={'mold_pony_1.png'} style={{width: width}}/>
        <br/>{'     '}•	Одну сторону колбаски вытяните вверх в конус — это будет шея
        <br/><img src={'mold_pony_2.png'} style={{width: width}}/>
        <br/>{'     '}•	Скатайте шарик и немного вытяните его, формируя мордочку маленькой лошадки
        <br/>{'     '}•	Из двух маленьких кусочков сделайте капельки и прилепите к мордочке сверху — это будут ушки
        <br/>{'     '}•	Зубочисткой продавите ноздри и ротик пони
        <br/><img src={'mold_pony_3.png'} style={{width: width}}/>
        <br/>{'     '}•	Скатайте из пластилина основного цвета четыре конуса, с узкой его стороны наискось отрежьте немного пластилина специальным ножом, в этом месте будет крепление ножек к туловищу
        <br/>{'     '}•	Постучите широкой частью конусов по досточке, так вы сделаете копыта лошадки
        <br/><img src={'mold_pony_4.png'} style={{width: width}}/>
        <br/>{'     '}•	Соберите вашу фигурку. Сгладьте стыки
        <br/>{'     '}•	Чтобы сделать гриву и хвост, скатайте несколько тоненьких разноцветных колбасок, соедините их вместе и разрежьте, прилепите их к нашему пони, немного согните, имитируя изгибы
        <br/>{'     '}•	Не забудьте про глазки, делайте их не круглыми, а вытянутыми, в форме листика
        <br/>{'     '}Наш пони готов!
        <br/><img src={'mold_pony_5.png'} style={{width: width}}/>
        <br/>{'     '}Можно сделать несколько маленьких лошадок разных цветов и у вас будет много героев из мультика для игр.
        <br/>{'     '}Источник: http://heaclub.ru/poetapnaya-lepka-dlya-detej-podelki-iz-plastilina-lepim-edu-zhivotnyh-igrushki#i-13
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Как лепить из пластилина пони?'} backLink={BACK_LINK}/>
    );
  }
}

export default Pony;
