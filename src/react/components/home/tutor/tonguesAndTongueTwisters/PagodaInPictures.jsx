import React from 'react';

import BaseTextComponent from '../../../shared/BaseTextComponent';

class PagodaInPictures extends React.Component {

  getData(){
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}Скороговорки с опорой на картинки позволяют детям лучше и быстрее запомнить информацию, что создает ситуацию успеха и способствует дальнейшей работе.
        <br/>{'     '}Порядок работы со скороговорками:
        <br/>{'     '}1. Внимательно рассмотреть картинки.
        <br/>{'     '}2. Назвать изображенные предметы в нужной последовательности.
        <br/>{'     '}3. Повторить несколько раз с опорой на картинки скороговорки.
        <br/>{'     '}4. Научиться говорить скороговорку с опорой на картинку с ускорением темпа.
        <br/>{'     '}5. Убрать картинки и научиться произносить скороговорку быстро.
        <br/><br/><img src={'home_tutor_ton_in_img_1.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_2.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_3.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_4.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_5.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_6.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_7.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_8.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_9.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_10.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_11.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_12.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_13.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_14.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_15.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_16.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_17.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_18.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_19.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_20.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_21.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_22.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_23.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_24.jpg'} style={{width: '100%'}}/>
        <br/><br/><img src={'home_tutor_ton_in_img_25.jpg'} style={{width: '100%'}}/>
        <br/>{'     '}
        <br/>{'     '}Источник. https://www.babyblog.ru/user/chura68/130079
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent title={'Скороговорки в картинках'} data={data}/>
    );
  }
}

export default PagodaInPictures;
