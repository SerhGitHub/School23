import React from 'react';

import BaseTextComponent from '../../../shared/BaseTextComponent';

class PagodaInPictures extends React.Component {

  getData(){
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
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
        <br/>{'     '}<a href="https://www.babyblog.ru/user/chura68/130079">Источник</a>
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
