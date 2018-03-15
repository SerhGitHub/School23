import React from 'react';

import BaseTextComponent from '../shared/BaseTextComponent';

class PerfectingTheSpeech extends React.Component {

  getData(){
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        <img src={'home_tutor_art_3.jpg'} style={{width: '100%'}}/>
        <br/><img src={'home_tutor_art_4.jpg'} style={{width: '100%'}}/>
        <br/><img src={'home_tutor_art_5.jpg'} style={{width: '100%'}}/>
        <br/>{'     '}Источник. https://www.google.ru/search?q=%D0%B0%D1%80%D1%82%D0%B8%D0%BA%D1%83%D0%BB%D1%8F%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5+%D1%83%D0%BF%D1%80%D0%B0%D0%B6%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F&amp;newwindow=1&amp;tbm=isch&amp;tbo=u&amp;source=univ&amp;sa=X&amp;ved=0ahUKEwixlZK0t6XZAhVI8ywKHWT3Db8QsAQIKA&amp;biw=1600&amp;bih=769#imgrc=RByq6T20-wIpQM
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent title={'Артикуляционные упражнения'} data={data}/>
    );
  }
}

export default PerfectingTheSpeech;
