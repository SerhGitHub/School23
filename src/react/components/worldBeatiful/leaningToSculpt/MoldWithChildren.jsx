import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

class MoldWithChildren extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        <br/><img src={'mold_child_1.png'} style={{width: width}}/>
        <br/><img src={'mold_child_2.png'} style={{width: width}}/>
        <br/><img src={'mold_child_3.png'} style={{width: width}}/>
        <br/><img src={'mold_child_4.png'} style={{width: width}}/>
        <br/><img src={'mold_child_5.png'} style={{width: width}}/>
        <br/><img src={'mold_child_6.png'} style={{width: width}}/>
        <br/><img src={'mold_child_7.png'} style={{width: width}}/>
        <br/><img src={'mold_child_8.png'} style={{width: width}}/>
        <br/><img src={'mold_child_9.png'} style={{width: width}}/>
        <br/><img src={'mold_child_10.png'} style={{width: width}}/>
        <br/><img src={'mold_child_11.png'} style={{width: width}}/>
        <br/><img src={'mold_child_12.png'} style={{width: width}}/>
        <br/><img src={'mold_child_13.png'} style={{width: width}}/>
        <br/><img src={'mold_child_14.png'} style={{width: width}}/>
        <br/><img src={'mold_child_15.png'} style={{width: width}}/>
        <br/><img src={'mold_child_16.png'} style={{width: width}}/>
        <br/><img src={'mold_child_17.png'} style={{width: width}}/>
        <br/><img src={'mold_child_18.png'} style={{width: width}}/>
        <br/><img src={'mold_child_19.png'} style={{width: width}}/>

        <br/>{'     '}Источник: https://www.baby.ru/blogs/post/375691533-268009373/
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Лепим вместе с детьми'}/>
    );
  }
}

export default MoldWithChildren;
